## 数据库基础知识
### 范式
### 连接表(JOIN)

一个简单的例子：  
```text
create table users(id serial,name text)
create table staffs(id serial,name text)
create table orders(id serial,user_id bigint unsigned,staff_id bigint unsigned,amount int unsigned)
insert into users(name) values('XiaoMing')
insert into users(name) values('XiaoHuang')
insert into staffs(name) values('XiaoHong')
insert into orders(user_id,staff_id,amount) values(1,1,100)
select users.name,orders.amount from users inner/left/right join orders on users.id=orders.user_id
```
分别尝试`left join`、`right join`、`inner join`的结果。

[图解 SQL 里的各种 JOIN](https://zhuanlan.zhihu.com/p/29234064)
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/nodejs-database-sql02-join-diagram.jpg)


### 数据库优化
#### 缓存字段
例：一个博客包含多个评论

问题：获取博客评论数?
```
select count(id) from comments where blog_id=8
```
这样比较慢，可以进行如下优化：
1. 为`blog`表添加一个`comment_count`字段
2. 每次添加`comment`时`comment_count`字段`+1`
3. 每次删除`comment`时`comment_count`字段`-1`

#### 事务
有些操作必须要一次性完成

#### `MySql`存储引擎
命令:`show engines`

#### 索引

提高搜索效率



