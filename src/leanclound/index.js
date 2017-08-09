// import AV from 'leancloud-storage'
// import { Realtime } from 'leancloud-realtime'
// import { TypedMessagesPlugin } from 'leancloud-realtime-plugin-typed-messages'
// import { ImageMessage } from 'leancloud-realtime-plugin-typed-messages'

let AV = require('leancloud-storage');
let Realtime = require('leancloud-realtime').Realtime;
let TextMessage = require('leancloud-realtime').TextMessage; // 文档上要注意
let TypedMessagesPlugin = require('leancloud-realtime-plugin-typed-messages').TypedMessagesPlugin;
let ImageMessage = require('leancloud-realtime-plugin-typed-messages').ImageMessage;
let { TypedMessage, messageType, messageField } = require('leancloud-realtime');
let inherit = require('inherit'); // 继承

// 定义 OperationMessage 类，用于发送和接收所有的用户操作消息
export const OperationMessage = inherit(TypedMessage);
// 指定 type 类型，可以根据实际换成其他正整数
/*const appid = 'pGT892JzjQNTKhnBGJJz3dyD-gzGzoHsz'
const appkey = 'ruUarIz5af3d0q3uKQuc20db'*/

const appid = 'O9CBufAy2FT38tOTU2tKX1yL-gzGzoHsz'
const appkey = 'k1Qo0emagqusXAlv6Fpa2lbq'

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
    // 接收
    /*    tom.on('message', (message, conversation)=>{ // eslint-disable-line
            console.log(message.from +':' + message.text)
        })*/


    // 创建与Jerry之间的对话
    return tom.createConversation({
        members: ['Tom', 'Jerry', 'Bob', 'Harry', 'William'],
        location: '成都',
        // transient: true,
        name: 'all',
        unique: false, // 是否创建唯一对话
    });

}).then(function(conversation) {
    // 发送消息
    return conversation.send(new TextMessage('耗子，起床！'));
}).then(function(message) {
    console.log('Tom & Jerry', '发送成功！', message);
}).catch(console.error);


// 发送
realtime.createIMClient('Harry').then(function (Harry) {
    // let OperationMessage = new OperationMessage();

    /*// 指定 type 类型，可以根据实际换成其他正整数
    messageType(1)(OperationMessage);

    // 申明需要发送 op 字段
    messageField('op')(OperationMessage);

    // 首先需要注册自定义消息类型
    realtime.register(OperationMessage);

    OperationMessage.op = '有类型的消息';
    Harry.on('message', (message, coversation)=>{
        return conversation.send(OperationMessage)
    })*/

}).then(()=>{
    // console.log('消息类型：发送成功')
})


// 接收
realtime.createIMClient('Jerry').then((jerry)=>{
    jerry.on('message', (message, conversation)=>{ // eslint-disable-line
        console.log('(Jerry)'+ message.from + message.text)

        switch (message.type) {
            case 1:
                console.log('type1:',message)
                break
            default:
                console.warn('收到未知类型消息', message);
        }
    })

}).catch(console.error)

// 接收
realtime.createIMClient('Bob').then((Bob)=>{
    Bob.on('message', (message, conversation)=>{
        console.log(message.from +':' + message.text)

        conversation.send(new TextMessage('不想起床'))
    })
}).catch(console.error)

