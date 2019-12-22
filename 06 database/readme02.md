## 数据库基础知识
### 范式
### 连接表(JOIN)
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



