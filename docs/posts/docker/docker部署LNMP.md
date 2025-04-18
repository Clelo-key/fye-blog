---
title: 使用dockerfile构建LNMP开发环境
category:
    - 运维
tag:
    - docker
excerpt: 使用dockerfile构建LNMP开发环境
date: 2024-04-01
---

## 步骤一 安装php和nginx

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
注意更改相关信息！！！

```php
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>用户信息查询</title>
</head>

<body class="bg-gray-100 font-sans">
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">用户信息列表</h1>
        <?php
        $servername = "192.168.29.10";  // 你的IP地址！！！
        $username = "root"; // mysql账号
        $password = "123456"; // mysql密码
        $dbname = "testdb"; //你的数据库
        $dbport = "3306";

        // 创建连接
        $conn = new mysqli($servername, $username, $password, $dbname, $dbport);

        // 检查连接
        if ($conn->connect_error) {
            die('<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                    <strong class="font-bold">连接失败！</strong>
                    <span class="block sm:inline">' . $conn->connect_error . '</span>
                </div>');
        }

        // 查询 users 表中的记录
        $sql = "SELECT * FROM users";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            echo '<table class="min-w-full bg-white border border-gray-300 rounded">
                    <thead>
                        <tr>
                            <th class="px-6 py-3 border-b border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th class="px-6 py-3 border-b border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">姓名</th>
                            <th class="px-6 py-3 border-b border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">电话号码</th>
                            <th class="px-6 py-3 border-b border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">创建时间</th>
                            <th class="px-6 py-3 border-b border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">更新时间</th>
                        </tr>
                    </thead>
                    <tbody>';
            while ($row = $result->fetch_assoc()) {
                echo '<tr>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-900">' . $row["id"] . '</td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-900">' . $row["name"] . '</td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-900">' . $row["phone"] . '</td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-900">' . $row["created_at"] . '</td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-900">' . $row["updated_at"] . '</td>
                    </tr>';
            }
            echo '</tbody></table>';
        } else {
            echo '<div class="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative mb-4" role="alert">
                    <strong class="font-bold">无记录！</strong>
                    <span class="block sm:inline">未找到相关用户信息。</span>
                </div>';
        }

        $conn->close();
        ?>
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

ps 若执行过程中第六步发生异常，大概率是网络问题，请点击[配置docker镜像源](http://localhost:8080/fye-blog/posts/docker/docker.html#%E9%85%8D%E7%BD%AEdocker%E9%95%9C%E5%83%8F%E6%BA%90)，查看解决方法。

## 步骤二 安装mysql

1. 编写dockerfile

```
vim .mysql-dockerfile
```

<details>
<summary><a>.mysql-dockerfile 内容,点击查看</a></summary>

```bash
#基础镜像使用 mysql:latest
FROM mysql:5.7
```

</details>

::: info
编写dockerfile和构建镜像这两步可省略，到第5步执行以下代码即可。即执行第二步后，执行以下代码，然后执行第五步。
:::

```
docker run -d --privileged=true -p 3306:3306 -v /root/docker/mysql/conf/conf.d:/etc/mysql/conf.d -v /root/docker/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 --name mysql-learning  mysql:5.7
```

2. 创建mysql配置文件。

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
wait_timeout = 28800
interactive_timeout = 28800
max_allowed_packet = 256M
bind-address = 0.0.0.0
skip-networking = OFF

```

3. 构建镜像

```
docker build -t image-mysql  -f .mysql-dockerfile .
```

4. 创建容器

```bash
docker run -d --privileged=true -p 3306:3306 -v /root/docker/mysql/conf/conf.d:/etc/mysql/conf.d -v /root/docker/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 --name mysql-learning image-mysql
```

5. 创建mysql表

```bash
docker exec -it mysql-learning /bin/bash
mysql -u root -p  // 回车输入mysql账号密码，一般是123456
// 登录进入mysql后以空行为分割符，执行以下sql文件。
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

6. 结果展示

    ![alt text](/docker/LNMP/image.png)
