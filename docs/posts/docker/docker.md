---
title: docker 基础知识
category:
    - 运维
tag:
    - docker
excerpt: docker的简单介绍
date: 2024-02-24
---

## 关于Docker

本篇文章仅仅做docker的简单介绍，更多内容请访问官方链接。
[offcial site!](https://www.docker.com/)

## 安装docker

这里仅仅演示如何在Centos中安装docker

### 前置工作

替换yum源

```
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
```

清理yum缓存

```
yum clean all
yum makecache
```

安装相关工具包

```
yum install -y  yum-utils
```

设置镜像仓库

```
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

更新yum索引

```
yum makecache fast
```

### 安装docker包

卸载旧版本。

```
yum remove docker \
    docker-client \
    docker-client-latest \
    docker-common \
    docker-latest \
    docker-latest-logrotate \
    docker-logrotate \
    docker-engine

```

安装docker社区版本以及相关插件

```
yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

启动docker

```
systemctl start docker
```

检查docker是否安装成功,如果出现Hello from Docker!字样说明安装成功且运行无误。

```
docker run hello-world
```

pull 镜像出现网络问题可参照以下步骤配置镜像源

### 配置docker镜像源

1. 修改配置文件

```
vim /etc/docker/daemon.json  // 修改daemon文件，如若仍然缓慢，请自行修改寻找镜像源。
```

2. 在粘贴中粘贴以下内容，并检查粘贴是否完整无误。

```
{
 "registry-mirrors": [
  "https://registry.docker-cn.com",
  "http://hub-mirror.c.163.com",
  "https://dockerhub.azk8s.cn",
  "https://mirror.ccs.tencentyun.com",
  "https://registry.cn-hangzhou.aliyuncs.com",
  "https://docker.mirrors.ustc.edu.cn",
  "https://docker.m.daocloud.io",
  "https://noohub.ru",
  "https://huecker.io",
  "https://dockerhub.timeweb.cloud"
 ]
}
```

3. 执行以下命令使镜像源生效

```
systemctl daemon-reload && systemctl restart docker
```

## 作业一 ！！！请看LNMP的那篇文件，这篇已经过时

### 步骤一 安装php和nginx

1. 确保你已经安装docker（建议使用虚拟机，保证主机与虚拟机正常连接。且提前建立快照，避免建立的测试环境干扰以后的开发环境），
2. 创建dockerfile。

```bash
vim .dockerfile_php
```

.dockerfile_php 内容如下

```bash
FROM centos:7

ENV NGINX_VERSION 1.20.1

ENV PHP_VERSION 7.4

COPY epel.repo /etc/yum.repos.d/epel.repo
COPY CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo
RUN yum clean all
RUN yum makecache

RUN yum install -y nginx
RUN yum install -y php-fpm php-mysqlnd php-gd php-xml php-mbstring

COPY nginx.conf /etc/nginx/nginx.conf
COPY index.php /var/www/html/index.php
COPY www.conf /etc/php-fpm.d/www.conf

RUN mkdir -p /var/www/html && chown -R nginx:nginx /var/www/html
RUN mkdir -p /run/php-fpm && chown nginx:nginx /run/php-fpm && chmod 755 /run/php-fpm


EXPOSE 80
CMD ["bash", "-c", "nginx -g 'daemon off;' & php-fpm -D && wait"]

```

3. 创建www.conf配置文件。。

```bash
vim www.conf
```

www.conf 配置内容如下

```
[www]
user = nginx
group = nginx
listen = 127.0.0.1:9000
listen.owner = nginx
listen.group = nginx
pm = dynamic
pm.max_children = 5
pm.start_servers = 2
pm.min_spare_servers = 1
pm.max_spare_servers = 3

```

4. 创建nginx.conf文件。。

```bash
vim nginx.conf
```

nginx.conf文件内容如下

```
events {}
http {
 server {
    listen       80;
    server_name  localhost;
    root         /usr/share/nginx/html;

    location / {
        index  index.html index.htm;
    }

    error_page 404 /404.html;
    error_page 500 502 503 504 /50x.html;
    location ~ \.php$ {
        root           /var/www/html;  # 确保路径与 PHP 文件实际位置一致
        fastcgi_pass   127.0.0.1:9000; # 使用正确的主机和端口
        fastcgi_index  index.php;
        fastcgi_param  SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include        fastcgi_params;
    }

  }
}

```

5. 创建php文件。

```
vim index.php
```

<details>
<summary><a>index.php 文件内容,点击查看</a></summary>

```php
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" rel="stylesheet">
    <title>用户管理</title>
</head>
<body class="bg-gray-100">
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">用户管理</h1>
        <?php
        $servername = "localhost";
        $username = "your_username";
        $password = "your_password";
        $dbname = "your_database";

        // 创建连接
        $conn = new mysqli($servername, $username, $password, $dbname);

        // 检查连接
        if ($conn->connect_error) {
            die("连接失败: " . $conn->connect_error);
        }

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $name = $_POST["name"];
            $phone = $_POST["phone"];

            $sql = "INSERT INTO users (name, phone) VALUES ('$name', '$phone')";

            if ($conn->query($sql) === TRUE) {
                echo "<script>window.location.href='combined_users_management.php';</script>";
            } else {
                echo "错误: " . $sql . "<br>" . $conn->error;
            }
        }

        $sql = "SELECT * FROM users";
        $result = $conn->query($sql);
        ?>
        <form action="" method="post" class="bg-white p-4 rounded shadow mb-4">
            <div class="mb-4">
                <label for="name" class="block text-gray-700 font-bold mb-2">姓名</label>
                <input type="text" id="name" name="name" required class="border border-gray-300 p-2 w-full rounded">
            </div>
            <div class="mb-4">
                <label for="phone" class="block text-gray-700 font-bold mb-2">手机号码</label>
                <input type="text" id="phone" name="phone" required class="border border-gray-300 p-2 w-full rounded">
            </div>
            <button type="submit" class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">添加用户</button>
        </form>
        <div class="bg-white p-4 rounded shadow">
            <h2 class="text-xl font-bold mb-4">用户列表</h2>
            <table class="w-full border-collapse">
                <thead>
                    <tr>
                        <th class="border border-gray-300 p-2">ID</th>
                        <th class="border border-gray-300 p-2">姓名</th>
                        <th class="border border-gray-300 p-2">手机号码</th>
                        <th class="border border-gray-300 p-2">创建时间</th>
                        <th class="border border-gray-300 p-2">更新时间</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    if ($result->num_rows > 0) {
                        while ($row = $result->fetch_assoc()) {
                            echo "<tr>";
                            echo "<td class='border border-gray-300 p-2'>" . $row["id"] . "</td>";
                            echo "<td class='border border-gray-300 p-2'>" . $row["name"] . "</td>";
                            echo "<td class='border border-gray-300 p-2'>" . $row["phone"] . "</td>";
                            echo "<td class='border border-gray-300 p-2'>" . $row["created_at"] . "</td>";
                            echo "<td class='border border-gray-300 p-2'>" . $row["updated_at"] . "</td>";
                            echo "</tr>";
                        }
                    } else {
                        echo "<tr><td colspan='5' class='border border-gray-300 p-2 text-center'>暂无用户数据</td></tr>";
                    }
                    $conn->close();
                    ?>
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>
```

</details>

6. 创建CentOS-Base.repo文件。

```
vim CentOS-Base.repo
```

<details>
<summary><a>CentOS-Base 文件内容,点击查看</a></summary>

```bash
[base]
name=CentOS-$releasever - Base - mirrors.aliyun.com
failovermethod=priority
baseurl=http://mirrors.aliyun.com/centos/$releasever/os/$basearch/
        http://mirrors.aliyuncs.com/centos/$releasever/os/$basearch/
        http://mirrors.cloud.aliyuncs.com/centos/$releasever/os/$basearch/
gpgcheck=1
gpgkey=http://mirrors.aliyun.com/centos/RPM-GPG-KEY-CentOS-7

#released updates
[updates]
name=CentOS-$releasever - Updates - mirrors.aliyun.com
failovermethod=priority
baseurl=http://mirrors.aliyun.com/centos/$releasever/updates/$basearch/
        http://mirrors.aliyuncs.com/centos/$releasever/updates/$basearch/
        http://mirrors.cloud.aliyuncs.com/centos/$releasever/updates/$basearch/
gpgcheck=1
gpgkey=http://mirrors.aliyun.com/centos/RPM-GPG-KEY-CentOS-7

#additional packages that may be useful
[extras]
name=CentOS-$releasever - Extras - mirrors.aliyun.com
failovermethod=priority
baseurl=http://mirrors.aliyun.com/centos/$releasever/extras/$basearch/
        http://mirrors.aliyuncs.com/centos/$releasever/extras/$basearch/
        http://mirrors.cloud.aliyuncs.com/centos/$releasever/extras/$basearch/
gpgcheck=1
gpgkey=http://mirrors.aliyun.com/centos/RPM-GPG-KEY-CentOS-7

#additional packages that extend functionality of existing packages
[centosplus]
name=CentOS-$releasever - Plus - mirrors.aliyun.com
failovermethod=priority
baseurl=http://mirrors.aliyun.com/centos/$releasever/centosplus/$basearch/
        http://mirrors.aliyuncs.com/centos/$releasever/centosplus/$basearch/
        http://mirrors.cloud.aliyuncs.com/centos/$releasever/centosplus/$basearch/
gpgcheck=1
enabled=0
gpgkey=http://mirrors.aliyun.com/centos/RPM-GPG-KEY-CentOS-7

#contrib - packages by Centos Users
[contrib]
name=CentOS-$releasever - Contrib - mirrors.aliyun.com
failovermethod=priority
baseurl=http://mirrors.aliyun.com/centos/$releasever/contrib/$basearch/
        http://mirrors.aliyuncs.com/centos/$releasever/contrib/$basearch/
        http://mirrors.cloud.aliyuncs.com/centos/$releasever/contrib/$basearch/
gpgcheck=1
enabled=0
gpgkey=http://mirrors.aliyun.com/centos/RPM-GPG-KEY-CentOS-7


```

</details>

7. 创建epel.repo文件。

```
vim epel.repo
```

<details>
<summary><a> epel.repo 文件内容,点击查看</a></summary>

```bash
[epel]
name=Extra Packages for Enterprise Linux 7 - $basearch
baseurl=http://mirrors.aliyun.com/epel/7/$basearch
failovermethod=priority
enabled=1
gpgcheck=0
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7

[epel-debuginfo]
name=Extra Packages for Enterprise Linux 7 - $basearch - Debug
baseurl=http://mirrors.aliyun.com/epel/7/$basearch/debug
failovermethod=priority
enabled=0
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7
gpgcheck=0

[epel-source]
name=Extra Packages for Enterprise Linux 7 - $basearch - Source
baseurl=http://mirrors.aliyun.com/epel/7/SRPMS
failovermethod=priority
enabled=0
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7
gpgcheck=0

```

</details>

8. 构建镜像

```bash
docker build -t images-nginx-php -f .dockerfile_php .
```

9. 创建容器

```bash
docker run -d  --name nginx-php -p 80:80 images-nginx-php
```

10. 主机中测试访问是否发生异常,192.168.29.10是你虚拟机的ip

```
http://192.168.29.10/index.php
```

ps 若执行过程中第六步发生异常，大概率是网络问题，请点击[配置docker镜像源](#配置docker镜像源)，查看解决方法。

### 步骤二 安装mysql

1. 编写dockerfile

```
vim .mysql-dockerfile
```

<details>
<summary><a>.mysql-dockerfile 内容,点击查看</a></summary>

```bash
#基础镜像使用 mysql:latest
FROM mysql:5.7

#定义会被容器自动执行的目录
ENV AUTO_RUN_DIR /docker-entrypoint-initdb.d

#定义初始化sql文件
ENV INSTALL_DB_SQL init.sql
ENV MYSQL_ROOT_PASSWORD

#把要执行的sql文件放到/docker-entrypoint-initdb.d/目录下，容器会自动执行这个sql
COPY ./$INSTALL_DB_SQL $AUTO_RUN_DIR/


#给执行文件增加可执行权限
RUN chmod a+x $AUTO_RUN_DIR/$INSTALL_DB_SQL
```

</details>

3. 创建mysql配置文件。

```bash
vim /root/docker/mysql/conf/conf.d/my.cnf
```

my.cnf 内容如下:

```bash
[client]
default-character-set=utf8mb4

[mysql]
default-character-set=utf8mb4

[mysqld]
init_connect="SET collation_connection = utf8mb4_unicode_ci"
init_connect="SET NAMES utf8mb4"
character-set-server=utf8mb4
collation-server=utf8mb4_unicode_ci
skip-character-set-client-handshake
skip-name-resolve

```

4. 创建初始化sql文件init.sql

```
vim init.sql
```

init.sql内容如下

```bash
create database testdb;
use testdb;

CREATE TABLE users (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT '用户唯一标识',
name VARCHAR(50) NOT NULL COMMENT '用户姓名',
phone VARCHAR(15) NOT NULL UNIQUE COMMENT '手机号码',
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    INDEX idx_name (name),
    INDEX idx_phone (phone)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='用户信息表';

INSERT INTO users (name, phone) VALUES ('John Doe', '99999999');
INSERT INTO users (name, phone) VALUES ('Mical Json', '00000001');
```

5. 构建镜像

```
docker build -t image-mysql  -f .mysql-dockerfile .
```

6. 创建容器

```bash
docker run -d --privileged=true -p 3306:3306 -v /root/docker/mysql/conf/conf.d:/etc/mysql/conf.d -v /root/docker/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 --name mysql-learning image-mysql
```

## 作业二！！！ 使用dockerfile构建镜像（apache+php）

1. 确保你已经安装docker，且虚拟机的80端口未被占用。建议恢复以前的快照。
2. 创建dockerfile，文件内容见后文。

```bash
vim .dockerfile_apache
```

3. 创建index.php文件，

```
echo "<?php phpinfo(); ?>" > ./index.php
```

4. 构建镜像

```bash
docker build -t image-php-apache -f .dockerfile_apache .
```

5. 创建容器

```bash
docker run -d  --name centos-php-apache -p 80:80 image-php-apache
```

6. 在浏览器中输入虚拟机的Ip查看是否有php字样显示

7. 如运行第4步出现异常，大概率是网络问题，请点击[配置docker镜像源](#配置docker镜像源)，查看解决方法。

.dockerfile_apache内容如下

```bash
FROM centos:centos7

RUN cd /etc/yum.repos.d/
RUN sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-*
RUN sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-*
RUN yum clean all
RUN yum makecache
RUN yum update -y

RUN yum -y install httpd php-fpm php-cli php-mysqlnd

FROM php:7.4-apache
WORKDIR /var/www/html

COPY index.php /var/www/html/index.php

RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

EXPOSE 80

# 启动 Apache 和 PHP-FPM
CMD ["apache2-foreground"]
```

## docker常用命令

::: tip

常用选项说明:

-d：后台运行容器，例如 docker run -d image_name

-it：以交互式终端运行容器，例如 docker exec -it container_name bash

-t：为镜像指定标签，例如 docker build -t my_image .

:::

| 命令                | 描述                                           | 用法                                       |
| ------------------- | ---------------------------------------------- | ------------------------------------------ |
| docker run          | 启动一个新的容器并运行命令                     | `docker run -d ubuntu`                     |
| docker ps           | 列出当前正在运行的容器                         | `docker ps`                                |
| docker ps -a        | 列出所有容器（包括已停止的容器）               | `docker ps -a`                             |
| docker build        | 使用 Dockerfile 构建镜像                       | `docker build -t my-image .`               |
| docker images       | 列出本地存储的所有镜像                         | `docker images`                            |
| docker pull         | 从 Docker 仓库拉取镜像                         | `docker pull ubuntu`                       |
| docker push         | 将镜像推送到 Docker 仓库                       | `docker push my-image`                     |
| docker exec         | 在运行的容器中执行命令                         | `docker exec -it container_name bash`      |
| docker stop         | 停止一个或多个容器                             | `docker stop container_name`               |
| docker start        | 启动已停止的容器                               | `docker start container_name`              |
| docker restart      | 重启一个容器                                   | `docker restart container_name`            |
| docker rm           | 删除一个或多个容器                             | `docker rm container_name`                 |
| docker rmi          | 删除一个或多个镜像                             | `docker rmi my-image`                      |
| docker logs         | 查看容器的日志                                 | `docker logs container_name`               |
| docker inspect      | 获取容器或镜像的详细信息                       | `docker inspect container_name`            |
| docker exec -it     | 进入容器的交互式终端                           | `docker exec -it container_name /bin/bash` |
| docker network ls   | 列出所有 Docker 网络                           | `docker network ls`                        |
| docker volume ls    | 列出所有 Docker 卷                             | `docker volume ls`                         |
| docker-compose up   | 启动多容器应用（从 docker-compose.yml 文件）   | `docker-compose up`                        |
| docker-compose down | 停止并删除由 docker-compose 启动的容器、网络等 | `docker-compose down`                      |
| docker info         | 显示 Docker 系统的详细信息                     | `docker info`                              |
| docker version      | 显示 Docker 客户端和守护进程的版本信息         | `docker version`                           |
| docker stats        | 显示容器的实时资源使用情况                     | `docker stats`                             |
| docker login        | 登录 Docker 仓库                               | `docker login`                             |
| docker logout       | 登出 Docker 仓库                               | `docker logout`                            |

## dockerFile

| Dockerfile 指令 | 说明                                                                 |
| --------------- | -------------------------------------------------------------------- |
| FROM            | 指定基础镜像，用于后续的指令构建。                                   |
| MAINTAINER      | 指定Dockerfile的作者/维护者。（已弃用，推荐使用LABEL指令）           |
| LABEL           | 添加镜像的元数据，使用键值对的形式。                                 |
| RUN             | 在构建过程中在镜像中执行命令。                                       |
| CMD             | 指定容器创建时的默认命令。（可以被覆盖）                             |
| ENTRYPOINT      | 设置容器创建时的主要命令。（不可被覆盖）                             |
| EXPOSE          | 声明容器运行时监听的特定网络端口。                                   |
| ENV             | 在容器内部设置环境变量。                                             |
| ADD             | 将文件、目录或远程URL复制到镜像中。                                  |
| COPY            | 将文件或目录复制到镜像中。                                           |
| VOLUME          | 为容器创建挂载点或声明卷。                                           |
| WORKDIR         | 设置后续指令的工作目录。                                             |
| USER            | 指定后续指令的用户上下文。                                           |
| ARG             | 定义在构建过程中传递给构建器的变量，可使用 "docker build" 命令设置。 |
| ONBUILD         | 当该镜像被用作另一个构建过程的基础时，添加触发器。                   |
| STOPSIGNAL      | 设置发送给容器以退出的系统调用信号。                                 |
| HEALTHCHECK     | 定义周期性检查容器健康状态的命令。                                   |
| SHELL           | 覆盖Docker中默认的shell，用于RUN、CMD和ENTRYPOINT指令。              |

## 为什么要使用Docker

为了解答这个问题，大家可以先看看这个小故事。

我是一名在校大学生，我自己超爱学习，编写完成了超多的项目。一天，我们的老师布置了一个大作业，他叫我们在一个月后完成一个 Web 项目。我很高兴，随手将我的作业交了上去。老师也很欣喜，班级上居然有如此厉害的学生，为了激励同学们，他当场就给了我满分。这使得我在同学们中享有极好的声誉。一周后，许多同学慕名而来让我帮助他们完成这个作业，并表示能给我一笔极好的报酬，面对高额悬赏，我只好“却之不恭”了。那时可怜的我还不知道接下来的两天，面对源源不断的订单，我将会后悔那“却之不恭”时的窃喜……

面对这么多台电脑，我发现在这一周我的同学们根据各种不同的途径下载了各种各样的开发环境java8,java17，python2，python3，mysql5，mysql8等，简直是五花八门，各显神通。可是我所有的项目都使用的是java21，没有一个项目能直接在他们的电脑上运行起来。终于，在这两天内不断的安装、卸载、调试各类开发环境时，我崩溃了。

最终我只能请教一下神秘的群内大佬，大佬在了解情况后直接向我甩出了一个链接[docker](https://www.docker.com/)。我怀着激动的心情阅读其中内容后发现了治疗我病症的林丹妙药 —— Docker。当用户安装Docker后，可以自己编写dockerfile，为项目配置环境，配置好了的环境可以生成为docker镜像直接发给同学们，同学们只需要通过Docker运行我的镜像，项目就能如我在本地环境中一样顺利启动。

### 总结：

1. 用户可以使用docker编写项目的运行环境，编写出的文件叫做dockerFile。
2. 在运行环境中可以添加其它运行环境。或者说各种运行环境可以叠加，你可以在当前环境的基础上再次添加其它环境，成为一个新的环境。新的环境也可以再次添加环境。
3. 构建好的环境称为docker镜像，可以使用run命令运行镜像。运行的镜像被称为容器，此时可以将项目放入容器中。

创建一个名为 .dockerfile的文件，写入以下内容。

```
FROM python:3.9-slim
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
EXPOSE 5000
CMD ["python", "app.py"]
```

在dockerfile所处文件夹下，使用docker build构建docker镜像。

```
docker build -t my-python-app .
```

::: tip 小数点是上下文路径，不能省略。
:::

使用docker run 运行镜像

```
docker run -d -p 80:8080 nginx
```
