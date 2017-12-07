# video.js

## H5 video

```html
<video src="movie.ogg" controls="controls">
您的浏览器不支持 video 标签。
</video>
```

### 属性
属性名       |值         |描述
------------|-----------|----------
autoplay	|autoplay	|如果出现该属性，则视频在就绪后马上播放。
controls	|controls	|如果出现该属性，则向用户显示控件，比如播放按钮。
height	    |pixels	    |设置视频播放器的高度。
loop	    |loop	    |如果出现该属性，则当媒介文件完成播放后再次开始播放。
muted	    |muted	    |规定视频的音频输出应该被静音。
poster	    |URL	    |规定视频下载时显示的图像，或者在用户点击播放按钮前显示的图像。
preload	    |preload	|如果出现该属性，则视频在页面加载时进行加载，并预备播放.如果使用 "autoplay"，则忽略该属性。
src	        |url	    |要播放的视频的 URL。
width	    |pixels	    |设置视频播放器的宽度。


### 事件

本想自己归纳,发现w3上已经很细了[all事件](http://www.w3school.com.cn/tags/html_ref_eventattributes.asp)

```html
       <video id='player' src="../../../assets/video/1.mp4" controls="controls"
             @play="videoPlay('play')"
             @pause="videoPlay('pause')"
             @playing="videoPlay('playing')"
             @abort="videoPlay('abort')"
             @canplay="videoPlay('canplay')"

      ></video>
```

### 自定义控制条

```js
let myplayer = document.getElementById('player')
// 对象方法
myplayer.play() // 播放
myplayer.pause() // 暂停
myplayer.load() // 重新加载视频元素。
myplayer.addTextTrack() // 向视频添加新的文本轨道。
myplayer.canPlayType() // 检查浏览器是否能够播放指定的视频类型。

对象属性
myplayer.currentTime // 当前播放时间,设置获取,单位s
myplayer.videoHeight
myplayer.videoWidth

// 监听
myplayer.ontimeupdate = function(){} // 当前播放位置改变则执行函数
```

#### 对象属性

[链接](https://www.cnblogs.com/wwlhome/p/5855866.html)

####

####


[canPlayType方法这里很详细](http://www.w3school.com.cn/tags/av_met_canplaytype.asp)

## video.js
[video.js官网](http://videojs.com/)