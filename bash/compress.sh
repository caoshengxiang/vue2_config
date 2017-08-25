#!  /bin/bash
# && 如果前面的命令正确执行，那么后面的命令也将执行。否则后面的命令不执行。
mv dist zhlive-weixin && tar zcvf zhlive-weixin.tar.gz zhlive-weixin && mv zhlive-weixin dist && mv zhlive-weixin.tar.gz dist/
scp dist/zhlive-weixin.tar.gz root@47.95.6.138:/opt
ssh root@47.95.6.138 "rm -rf /opt/tomcat/webapps/weixin && tar -zxvf /opt/zhlive-weixin.tar.gz"
ssh root@47.95.6.138 "mv zhlive-weixin /opt/tomcat/webapps/weixin"

# Chengxun@1806

# ylLwu9-8PI89BeQgc8ypP1fYvHn149gqsP8dZq5Ukz7UUsxCDWa0d17i2ozKwg2Zmk_jgml2XChengxun@1806cs04CcMsGacnDygU9f5qlYxf8qfRQrKBxrza-YDRwuhGuA9hi7QjvlsTHIbACAJXY