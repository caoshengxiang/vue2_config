# ssh-keygen

## 检查SSH keys是否存在

> ls -al ~/.ssh

## 生成新的ssh key

> ssh-keygen -t rsa -C "your_email@example.com"

默认会在相应路径下生成id_rsa和id_rsa.pub两个文件

> ssh-keygen -t rsa -f test -C "your_email@example.com"

-f 指定文件名

## 文件的权限

为了让私钥文件和公钥文件能够在认证中起作用，请确保权限正确。

对于.ssh 以及父文件夹，当前用户用户一定要有执行权限，其他用户最多只能有执行权限。

对于公钥和私钥文件也是: 当前用户一定要有执行权限，其他用户最多只能有执行权限。