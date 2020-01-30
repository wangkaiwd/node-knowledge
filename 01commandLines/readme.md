## 命令行入门
> 以`mac`系统为主
### 查看当前完整工作路径
```text
pwd
english mean: print working directory(print the name of working directory)
```
### 查看当前目录下文件
* 不包含隐藏文件
```text
ls
```
* 查看当前目录下所有文件（包括隐藏文件）
```text
ls -a
```
* 查看当前目录下的所有文件（包括隐藏文件）的详细信息
```text
ls -al
```

### 切换目录
* 通过绝对路径来切换目录
```text
cd /c/project
```
* 通过相对路径来切换目录
```text
cd code 或 cd ./code ： 进入当前下的code目录
(注：省略或者输入./都表示当前目录)

cd ../css ： 进入上一级下的css目录
(注：..代表上级文件目录)
```
* 进入根目录
```text
cd /
```
* 进入家目录
```text
cd ~

家目录： 当前用户所在目录
根目录： 操作系统的根目录
```

### 创建文件
```text
touch readme.md
```
### 创建文件夹
```text
mkdir projects
```

### 删除文件
```text
rm readme.md
```
### 彻底删除文件夹
```text
rm -rf node_modules

-r(recursive) : 向下递归，不管有多少级，一并删除
-f(force) : 直接强行删除，不做任何提示
```

### 重命名文件
```text
mv readme.md README.MD

mv : move, 将一个文件名移动到另一个文件名上，相当于重命名
```

### 清空命令行
```text
clear
```

## `Vim`编辑器
### `vim`编辑器使用步骤
```text
进入vim模式
1. vim a.md
2. i

注： 1. 通过vim 指定需要编辑的文件 2. 按下i键进行内容输入

退出vim模式
1. esc
2. :wq / :q!

1. 通过esc退出 
2. 通过:wq(write写入，quit退出)保存并退出/ 通过:q!不保存强制退出
```
