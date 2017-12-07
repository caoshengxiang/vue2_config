<link rel="stylesheet" href="../static/styles.css">

# koa.js

## 检测node版本
> $ node -v
  v8.0.0

Koa 必须使用 7.6 以上的版本。如果你的版本低于这个要求，就要先升级 Node。


## mongoDB　安装

1. ubuntu 安装

[博客教程](http://blog.csdn.net/flyfish111222/article/details/51886787)

2. window　安装

[博客教程](http://www.yiibai.com/mongodb/mongodb_quick_guide.html)

### 命令

`mongo -version` 命令查看MongoDB版本

`service mongodb start` 启动和关闭mongodb命令

`service mongodb stop`
```linux
mongo // 进入数据库操作命令行
show dbs:显示数据库列表
show collections：显示当前数据库中的集合（类似关系数据库中的表）
show users：显示用户
db 要检查当前选择的数据库使用命令 db

use <db name>：切换当前数据库，这和MS-SQL里面的意思一样
db.help()：显示数据库操作命令，里面有很多的命令
db.foo.help()：显示集合操作命令，同样有很多的命令，foo指的是当前数据库下，一个叫foo的集合，并非真正意义上的命令
db.foo.find()：对于当前数据库中的foo集合进行数据查找（由于没有条件，会列出所有数据）
db.foo.find( { a : 1 } )：对于当前数据库中的foo集合进行查找，条件是数据中有一个属性叫a，且a的值为1

db.dropDatabase() 命令用于删除现有的数据库。
```

更多命令[看这里](http://www.cnblogs.com/garinzhang/p/mongoDB_basic_usage.html)

## 链接数据库 mongose

[个人博客github](https://github.com/Tianfer/blog)

## 启动时出错误
> throw er; // Unhandled 'error' event
一般是端口被占用

## 接口管理
1. swagger-ui
2. 淘宝RAP


## 文档
[koa中文官网](http://koa.rednode.cn/)

[koa2](https://github.com/koajs/koa)

[koa-router](https://github.com/alexmingoia/koa-router)

[推荐上手教程](http://www.jianshu.com/p/6b816c609669)

[Node.js实现RESTful](http://www.cnblogs.com/skylar/p/express-koa-restfull-api.html)

[koa2+mongodb搭建简易nodejs后台接口服务](http://www.jianshu.com/p/dcdd116600fe)

[RAP](http://rapapi.org/org/index.do)

[安装MongoDB数据库](https://docs.mongodb.com/manual/installation/)

[ubuntu下安装mongoDB](http://blog.csdn.net/flyfish111222/article/details/51886787)

