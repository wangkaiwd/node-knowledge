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

#### `CRUD`命令

* 创建数据库
* 创建创建表
* 对表进行增删改查
* 对表中的记录进行增删改查

在`DevDocs`中开启`postgresql`进行命令文档查询

命令行中文乱码：

![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/mysql-chinese-messy-code.png)

### `node.js`连接`MySQL`
在`node.js`中我们通过`mysql`这个第三方模块来帮助我们连接数据库

### `MySQL`数据类型
> 官方文档在这里：[戳我](https://dev.mysql.com/doc/refman/8.0/en/data-type-overview.html)

#### 数值类型
* `bit`
* `tinyint`
* `bool`
* `smallint`
* `mediumint`
* `int`
* `integer`
* `bigint`
* `decimal`
* `float`
* `double`

#### 字符串类型
* `char`: 一个固定长度的字符串 
* `varchar`: 可变长度的字符串
* `binary`: 二进制字节字符串
* `varbinary`： 可变长度的二进制字符串
* `blob`: 
* `text`
* `enum`
* `set`
* `serial`

`var`是`variable`的缩写，译为可变的、变化的。`char(100)`就算你只存一个字符，他也会占据100个字符的长度，剩余内容用空格补齐。而`varchar(100)`表示最多可以存100个字符长度的字符，可以为我们节省空间。

#### 日期和时间类型

**ISO 8601**  
通过`ISO 8601`我们可以更好的进行前后端交互

如果是时间戳的话会遇到`*1000`和`/1000`的问题



