## `node.js`操作数据库
### 安装`docker`
1. 什么是`docker`
2. 为什么要安装`docker`

如何查看`docker`是否安装成功:  
```shell script
docker run hello-world
```
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/docker-install-hello-world.png)

### 使用`docker`安装`MySQL` 
执行下边的命令安装`MySQL`:
```shell script
docker run --name mysql1 -e MYSQL_ROOT_PASSWORD=123456 -p 3306:3306 -d mysql:5.7.27
```

注意：
* `docker`运行的容器默认不会持久化（重新启动容器，数据会消失）
* 学习阶段不需要持久化

### `docker`常用命令
* `docker ps`: 查看容器运行状态
* `docker kill mysql1`: 关掉容器
* `docker container run mysql1`: 开启刚关掉的容器
* `docker rm mysql1`: 删除容器，必要时可以加`-f`选项
*  `docker run`: 启动新容器

命令行常识： 
* `ctrl+c`: 中断当前操作，比如你命令输错了
* `ctrl+d`: 用于退出，如退出`mysql`和`bash`
### 用命令行连接`MySQL`

`docker`运行`MySQL`:  
```shell script
docker exec -it mysql1 bash
```
这行命令会进入容器，容器里有一个`Linux`系统，我们可以在这个系统里运行`mysql`

### `MySQL`命令
* `mysql -u root -p`回车，输入密码 123456
* `show databases;`: 查看数据库列表
* `use xxx;`: 选择使用`xxx`数据库
* `show tables;`: 查看所有表
* `select * from xx;`: 查询`xx`表里的内容
* `describe table;`: 查看一个表的字段信息 

命令行中文乱码：
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/mysql-chinese-messy-code.png)

### `node.js`连接`MySQL`

### 
