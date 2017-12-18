#!  /bin/bash
# && 如果前面的命令正确执行，那么后面的命令也将执行。否则后面的命令不执行。
#mv dist zhlive-weixin && tar zcvf zhlive-weixin.tar.gz zhlive-weixin && mv zhlive-weixin dist && mv zhlive-weixin.tar.gz dist/
#scp dist/zhlive-weixin.tar.gz root@47.95.6.138:/opt
#ssh root@47.95.6.138 "rm -rf /opt/www/weixin && tar -zxvf /opt/zhlive-weixin.tar.gz"
#ssh root@47.95.6.138 "mv zhlive-weixin /opt/www/weixin"


mv dist zhlive-weixin && tar zcvf zhlive-weixin.tar.gz zhlive-weixin && mv zhlive-weixin dist && mv zhlive-weixin.tar.gz dist/
scp dist/zhlive-weixin.tar.gz root@39.108.247.80:/opt
ssh root@39.108.247.80 "rm -rf /opt/www/weixin && tar -zxvf /opt/zhlive-weixin.tar.gz"
ssh root@39.108.247.80 "mv zhlive-weixin /opt/www/weixin"

# Chengxun@1806
