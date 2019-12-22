## `node.js`操作数据库
### 安装`docker`
在安装之前，我们先介绍一下`docker`。

`docker`是一个旨在通过使用`container`来让创建、部署和运行应用程序更加简单的工具。`container`允许开发人员将一个应用程序所需要的全部内容打包到一起，例如库和其它依赖，并将其全部打包为一个软件包。通过这样做，借助于容器，开发者能确保应用可以在其它任何机器上运行，而不用管机器可能拥有的自定义配置会与用来编写和测试代码的机器会有所不同。

这里有关于`docker`的详细介绍: [`What is Docker?`](https://opensource.com/resources/what-docker)

`docker`的安装地址在这里：[戳我](https://hub.docker.com/)

如何查看`docker`是否安装成功:  
```shell script
docker run hello-world
```
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/docker-install-hello-world.png)

### [使用`docker`安装`MySQL`](https://hub.docker.com/_/mysql) 
执行下边的命令安装`MySQL`:
```shell script
docker run --name mysql1 -e MYSQL_ROOT_PASSWORD=123456 -p 3306:3306 -d mysql:5.7.27
```

注意：
* `docker`运行的容器默认不会持久化（重新启动容器，数据会消失）
* 学习阶段不需要持久化

### [`docker`常用命令](https://docs.docker.com/engine/reference/commandline/docker/)
* `docker ps`: 查看容器运行状态
* `docker kill mysql1`: 关掉容器
* `docker container run mysql1`: 开启刚关掉的容器
* `docker rm mysql1`: 删除容器，必要时可以加`-f`选项
*  `docker run`: 启动新容器

命令行常识： 
* `ctrl+c`: 中断当前操作，比如你命令输错了
* `ctrl+d`: 用于退出，如退出`mysql`和`bash`
### [用命令行连接`MySQL`](https://dev.mysql.com/doc/refman/8.0/en/connecting-disconnecting.html)

`docker`运行`MySQL`:  
```shell script
docker exec -it mysql1 bash
```
这行命令会进入容器，容器里有一个`Linux`系统，我们可以在这个系统里运行`mysql`

### [`MySQL`命令](http://g2pc1.bu.edu/~qzpeng/manual/MySQL%20Commands.htm)
* `mysql -u root -p`回车，输入密码 123456
* `show databases;`: 查看数据库列表
* `use xxx;`: 选择使用`xxx`数据库
* `show tables;`: 查看所有表
* `select * from xx;`: 查询`xx`表里的内容
* `describe table;`: 查看一个表的字段信息 

#### `CRUD`命令

*  `create database foo;`: 创建`foo`数据库
* `create table authors;`: 创建创建`author`表
* `insert into authors (id,name,email) values(1,"小明","test@gmail.com");`: 为`authors`表插入一条数据

在`DevDocs`中开启`postgresql`进行命令文档查询

命令行中文乱码：

![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/mysql-chinese-messy-code.png)

### `node.js`连接`MySQL`
在`node.js`中我们通过`mysql`这个第三方模块来帮助我们连接数据库

下面是`node.js`连接数据库的代码：  
```typescript
import { FieldInfo, MysqlError } from 'mysql';

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
});

connection.connect();
// 1. 不存在的情况下创建表： if not exists
// 2. mysql utf8 bug: 不明白为什么在命令行中文会显示??

// 不存在foo数据库的情况下进行创建
connection.query('CREATE DATABASE IF NOT EXISTS foo DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci', (error: MysqlError, results: any, fields: FieldInfo) => {
  if (error) throw error;
});

// 使用foo数据库
connection.query('USE foo', () => {

});

// 在foo数据库中创建authors表，并定义字段及其类型： id, name, email
connection.query('CREATE TABLE IF NOT EXISTS authors (id INT, name VARCHAR(20), email VARCHAR(20))');

// 为authors表中插入一行记录
connection.query('INSERT INTO authors (id,name,email) VALUES(1,"小明","test@gmail.com")');

// 查询authors表中的所有内容
connection.query(`SELECT * FROM authors`, (err: MysqlError, result: any, fields: FieldInfo) => {
  if (err) {throw err;}
  console.log('select result:', result, fields);
});

connection.end();
```

### `MySQL`数据类型
> 官方文档在这里：[戳我](https://dev.mysql.com/doc/refman/8.0/en/data-type-overview.html)

#### 数值类型
> [文档传送门](https://dev.mysql.com/doc/refman/8.0/en/numeric-type-overview.html) 

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
* `serial`

#### 字符串类型
> [文档传送门](https://dev.mysql.com/doc/refman/8.0/en/string-type-overview.html)

* `char`: 一个固定长度的字符串 
* `varchar`: 可变长度的字符串
* `binary`: 二进制字节字符串
* `varbinary`: 可变长度的二进制字符串
* `blob`: 很长的二进制 
* `text`: 很长的文本（存储一篇博客）
* `enum`: 只能从指定值中取一个值
* `set`: 从指定值中取一个或多个

`var`是`variable`的缩写，译为可变的、变化的。`char(100)`就算你只存一个字符，他也会占据100个字符的长度，剩余内容用空格补齐。而`varchar(100)`表示最多可以存100个字符长度的字符，可以为我们节省空间。

#### 日期和时间类型
> [文档传送门](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-type-overview.html)

* `date`
* `datetime`
* `timestamp`
* `time`
* `year`

**ISO 8601**  
通过`ISO 8601`我们可以更好的进行前后端交互

如果是时间戳的话会遇到`*1000`和`/1000`的问题



