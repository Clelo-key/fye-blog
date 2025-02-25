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

本编文章仅仅做docker的简单介绍，更多内容请访问官方链接。
About more please Read [offcial site!](https://www.docker.com/)

## 安装docker

这里仅仅演示在Centos中如何安装docker

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

docker pull 过慢可尝试在daemon.json文件中添加国内源,并重启docker。

```
vim /etc/docker/daemon.json  // 修改daemon文件，如若仍然缓慢，请自行修改寻找镜像源。

{
"registry-mirrors": [
 "https://9cpn8tt6.mirror.aliyuncs.com",
 "https://registry.docker-cn.com"
]
}

systemctl daemon-reload // 重新加载daemon
systemctl restart docker  // 重启dockers服务
```

## 为什么要使用Docker

我是一名在校大学生，我自己超爱学习，编写完成了超多的项目。一天，我们的老师布置了一个大作业，他叫我们在一个月后完成一个 Web 项目。我很高兴，随手将我的作业交了上去。老师也很欣喜，班级上居然有如此厉害的学生，为了激励同学们，他当场就给了我满分。这使得我在同学们中享有极好的声誉。一周后，许多同学慕名而来让我帮助他们完成这个作业，并表示能给我一笔极好的报酬，
面对高额悬赏，我只好“却之不恭”了。那时可怜的我还不知道接下来的两天面对源源不断的订单，我将会后悔那“却之不恭”时的窃喜……

面对这么多台电脑，我发现在这一周我的同学们根据各种不同的途径下载了各种各样的开发环境java8,java17，python2，python3，mysql5，mysql8等，简直是五花八门，各显神通。可是我所有的项目都使用的是java21，没有一个项目能直接在他们的电脑上运行起来。终于，在这两天内不断的安装、卸载、调试各类开发环境时，我崩溃了。

最终我只能请教一下神秘的群内大佬，大佬在了解情况后直接向我甩出了一个链接[docker](https://www.docker.com/)。我怀着激动的心情阅读其中内容后发现了治疗我病症的林丹妙药 —— Docker。

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
