# nginx

可以防止外网对内网服务器的恶性攻击、
缓存以减少服务器的压力和访问安全控制之外，还可以进行负载均衡，（把请求转发给给服务器，决定哪台目标主机来处理当前请求）
将用户请求分配给多个服务器
## window下

window下安装非常简单，直接到官网下载，解压就可以了

## ubuntu下安装

### 1. 安装nginx的依赖包
```
# 查看zlib是否安装
dpkg -l | grep zlib
# 解决依赖包openssl安装
sudo apt-get install openssl libssl-dev
# 解决依赖包pcre安装
sudo apt-get install libpcre3 libpcre3-dev
# 解决依赖包zlib安装
sudo apt-get install zlib1g-dev
```

### 2. 下载nginx

```
# 下载nginx
wget http://nginx.org/download/nginx-1.13.1.tar.gz
# 解压nginx
tar -xzvf nginx-1.13.1.tar.gz
# 重命名文件夹
mv nginx-1.13.1 nginx
cd nginx
```

### 3. 安装

```
#配置：
./configure --prefix=/usr/local/nginx
#编辑nginx：
make
注意：这里可能会报错，提示“pcre.h No such file or directory”,具体详见：http://stackoverflow.com/questions/22555561/error-building-fatal-error-pcre-h-no-such-file-or-directory
需要安装 libpcre3-dev,命令为：sudo apt-get install libpcre3-dev
#安装nginx：
sudo make install
```

### 命令
```
./sbin/nginx  #启动 Nginx

./sbin/nginx -s stop #停止 Nginx
./sbin/nginx -s quit

./sbin/nginx -s reload Nginx重新加载配置

./sbin/nginx -c /usr/local/nginx/conf/nginx.conf #指定配置文件

./sbin/nginx -v

./sbin/nginx -t #检查配置文件是否正确
```

## 问题

1. 注意启动权限问题 sudo

2. 端口被占用
> killall -9 nginx（先停掉nginx） 2 nginx或service nginx restart（重新启动）


## 实现会对测试



>在nginx中配置proxy_pass代理转发时，如果在proxy_pass后面的url加/，表示绝对根路径；如果没有/，表示相对路径，把匹配的路径部分也给代理走

```conf
#第一种：
location /proxy/ {
    proxy_pass http://127.0.0.1/;
}
#代理到URL：http://127.0.0.1/test.html


#第二种（相对于第一种，最后少一个 / ）
location /proxy/ {
    proxy_pass http://127.0.0.1;
}
#代理到URL：http://127.0.0.1/proxy/test.html


#第三种：
location /proxy/ {
    proxy_pass http://127.0.0.1/aaa/;
}
#代理到URL：http://127.0.0.1/aaa/test.html


#第四种（相对于第三种，最后少一个 / ）
location /proxy/ {
    proxy_pass http://127.0.0.1/aaa;
}
#代理到URL：http://127.0.0.1/aaatest.html
```