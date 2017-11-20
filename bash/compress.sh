#!  /bin/bash
# && 如果前面的命令正确执行，那么后面的命令也将执行。否则后面的命令不执行。
#mv dist cx && tar zcvf cx.tar.gz cx && mv cx dist && mv cx.tar.gz dist/
#scp dist/cx.tar.gz oa@192.168.1.150:/opt
#ssh oa@192.168.1.150 "rm -rf /usr/loacl/nginx/html/ && tar -zxvf /opt/cx.tar.gz"
#ssh oa@192.168.1.150 "mv cx /opt/tomcat/webapps/admin"


# Chengxun@1806