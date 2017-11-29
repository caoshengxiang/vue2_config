# linux

## 遇见的问题
1. ubuntu16 中文输入图标　不显示
终端输入命令：pkill fcitx && fcitx -d（解）
如果经常出现这个情况，在桌面建立一个“重启输入法脚本.sh”把这两条写进去
也可写入脚本.sh：
#!/bin/bash
pkill fcitx
fcitx -d

2. 点击　.sh可执行
点开一个文件夹－首选项－行为－运行

3. ubuntu 下出现E: Sub-process /usr/bin/dpkg returned an error code

[参考１](ubuntu 下出现E: Sub-process /usr/bin/dpkg returned an error code)
[参考２](http://www.iteye.com/problems/60186)

亲测解决一次执行下面的命令：
```linux
$ sudo mv /var/lib/dpkg/info /var/lib/dpkg/info_old //现将info文件夹更名
$ sudo mkdir /var/lib/dpkg/info //再新建一个新的info文件夹
$ sudo apt-get update
$ sudo apt-get -f install
$ sudo mv /var/lib/dpkg/info/* /var/lib/dpkg/info_old //执行完上一步操作后会在新的info文件夹下生成一些文件，现将这些文件全部移到info_old文件夹下
$ sudo rm -rf /var/lib/dpkg/info //把自己新建的info文件夹删掉
$ sudo mv /var/lib/dpkg/info_old /var/lib/dpkg/info //把以前的info文件夹重新改回名字
```

## linux　常用命令

### 压缩

>tar –cvf jpg.tar *.jpg //将目录里所有jpg文件打包成tar.jpg
tar –czf jpg.tar.gz *.jpg   //将目录里所有jpg文件打包成jpg.tar后，并且将其用gzip压缩，生成一个gzip压缩过的包，命名为jpg.tar.gz
tar –cjf jpg.tar.bz2 *.jpg //将目录里所有jpg文件打包成jpg.tar后，并且将其用bzip2压缩，生成一个bzip2压缩过的包，命名为jpg.tar.bz2
tar –cZf jpg.tar.Z *.jpg   //将目录里所有jpg文件打包成jpg.tar后，并且将其用compress压缩，生成一个umcompress压缩过的包，命名为jpg.tar.Z
rar a jpg.rar *.jpg //rar格式的压缩，需要先下载rar for Linux
zip jpg.zip *.jpg //zip格式的压缩，需要先下载zip for linux


解压

>tar –xvf file.tar //解压 tar包
tar -xzvf file.tar.gz //解压tar.gz
tar -xjvf file.tar.bz2   //解压 tar.bz2
tar –xZvf file.tar.Z   //解压tar.Z
unrar e file.rar //解压rar
unzip file.zip //解压zip


总结

>1. *.tar 用 tar –xvf 解压
2. *.gz 用 gzip -d或者gunzip 解压
3. *.tar.gz和*.tgz 用 tar –xzf 解压
4. *.bz2 用 bzip2 -d或者用bunzip2 解压
5. *.tar.bz2用tar –xjf 解压
6. *.Z 用 uncompress 解压
7. *.tar.Z 用tar –xZf 解压
8. *.rar 用 unrar e解压
9. *.zip 用 unzip 解压

### 文件权限
#### chgrp 修改文件所属用户组


#### chown 改变文件拥有者
> chown -R 所有者:用户组 folder // -R 参数递归的持续更改

#### chmod 改变文件权限

> \[----------] 10位，第一位文件类型，后面9个三个为一组，分别为owner、group、other
r: 4
w: 2
x: 1
owner=rwx=4+2+1=7
group=rw-=4+2+0=6
other=r--=4+0+0=4
命令: chmod 764 file


### 查看位置命令
>   pwd 查看当前目录位置
    whereis 目标；查看目标的位置


### ssh

ssh username@host

### scp

### vim

vim filename
[vim](https://www.cnblogs.com/softwaretesting/archive/2011/07/12/2104435.html)

### wget

### apt-get

### netstat -anp|grep 80
查看端口占用

### pkill 、 killall 、 kill

[killall 、kill 、pkill 命令详解](https://www.cnblogs.com/rsky/p/4886043.html)