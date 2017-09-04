#!  /bin/bash
# && 如果前面的命令正确执行，那么后面的命令也将执行。否则后面的命令不执行。
mv dist zhlive-admin && tar zcvf zhlive-admin.tar.gz zhlive-admin && mv zhlive-admin dist && mv zhlive-admin.tar.gz dist/
# scp dist/zhlive-admin.tar.gz root@47.95.6.138:/opt
# ssh root@47.95.6.138 "rm -rf /opt/tomcat/webapps/admin && tar -zxvf /opt/zhlive-admin.tar.gz"
# ssh root@47.95.6.138 "mv zhlive-admin /opt/tomcat/webapps/admin"


# Chengxun@1806