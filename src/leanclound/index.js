// import AV from 'leancloud-storage'
// import { Realtime } from 'leancloud-realtime'
// import { TypedMessagesPlugin } from 'leancloud-realtime-plugin-typed-messages'
// import { ImageMessage } from 'leancloud-realtime-plugin-typed-messages'

let AV = require('leancloud-storage');
let Realtime = require('leancloud-realtime').Realtime;
let TextMessage = require('leancloud-realtime').TextMessage; // 文档上要注意
let TypedMessagesPlugin = require('leancloud-realtime-plugin-typed-messages').TypedMessagesPlugin;
// let ImageMessage = require('leancloud-realtime-plugin-typed-messages').ImageMessage;

const appid = 'pGT892JzjQNTKhnBGJJz3dyD-gzGzoHsz'
const appkey = 'ruUarIz5af3d0q3uKQuc20db'

// 初始化存储 SDK
AV.init({
    appId: appid,
    appKey: appkey,
});
// 初始化实时通讯 SDK
let realtime = new Realtime({
    appId: appid,
    region: 'cn', //美国节点为 "us"
    plugins: [TypedMessagesPlugin], // 注册富媒体消息插件
});
// var imageMessage = new ImageMessage(file);

// 发消息
// Tom 用自己的名字作为 clientId，获取 IMClient 对象实例
realtime.createIMClient('Tom').then(function(tom) {
    // 创建与Jerry之间的对话
    return tom.createConversation({
        members: ['Jerry', 'Bob', 'Harry', 'William'],
        name: 'all',
    });
    tom.on('message', (message, conversation)=>{ // eslint-disable-line
        console.log(message.from +':' + message.text)
    })
}).then(function(conversation) {
    // 发送消息
    return conversation.send(new TextMessage('耗子，起床！'));
}).then(function(message) {
    console.log('Tom & Jerry', '发送成功！', message);
}).catch(console.error);


// 接收
realtime.createIMClient('Jerry').then((jerry)=>{
    jerry.on('message', (message, conversation)=>{ // eslint-disable-line
        console.log('Jerry received:' + message.text)
    })
}).catch(console.error)
// 接收
realtime.createIMClient('Bob').then((Bob)=>{
    Bob.on('message', (message, conversation)=>{
        console.log(message.from +':' + message.text)

        conversation.send(new TextMessage('不想起床'))
    })
}).catch(console.error)

