#!  /bin/bash
# && 如果前面的命令正确执行，那么后面的命令也将执行。否则后面的命令不执行。
mv dist zhlive-home && tar zcvf zhlive-home.tar.gz zhlive-home && mv zhlive-home dist && mv zhlive-home.tar.gz dist/
scp dist/zhlive-home.tar.gz root@47.95.6.138:/opt
ssh root@47.95.6.138 "rm -rf /opt/www/home && tar -zxvf /opt/zhlive-home.tar.gz"
ssh root@47.95.6.138 "mv zhlive-home /opt/www/home"

# Chengxun@1806