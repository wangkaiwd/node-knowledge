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
