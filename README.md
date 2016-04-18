##一点说明: 
> nodejs 微信公众号开发 api 扩展，集成大部分功能。

#BUG and NEWS

- 增加客户功能
- 增加模板消息
- 增加扫描带参数二维码
- 增加 `access_token_apiurl` 参数，从接口服务器获取 `access_token` 避免刷新，业务失效

### 交流

欢迎大家加QQ：121644750

如果在使用过程中有任何疑问，可以发邮件给我，邮箱：121644750@qq.com

### 最简单的一个示例
>注意 express 版本的升级

```
var express = require('express');
var WXeasy = require('node-wxeasy');
var bodyparser = require('body-parser')
var app = express();


//解析body
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));



// 配置参数
var weixin = new WXeasy({
    app: app,
    appid: '',
    appsecret: '',
    token: 'appwechat',
    access_token_apiurl: ''
});

weixin.on('textMsg', function(data) {
	console.log(JSON.stringify(data));
	
    var msg = {
        toUserName : data.fromUserName,
        fromUserName : data.toUserName,
        msgType : 'text',
        content : data.content
    };
});

app.listen(18080);

```

### 安装node-wxeasy模块

**（1）安装方式一**

在项目根目录下的package.json文件添加依赖声明：



打开控制台，进入项目根目录，运行命令：npm install，对于国内用户，经常安装失败，至于为什么，你懂得~


**（2）安装方式二**

进入项目根目录，运行命令npm install node-wxeasy --save或者cnpm install node-wxeasy --save

## 微信 API For Nodejs

### 一、获取接口调用凭据

##### 1、获取access token

```
weixin.getAccessToken(function(data) {
    console.log(data);
});
```

##### 2、获取微信服务器IP地址

```
weixin.getWeixinIPList(function(data) {
    console.log(data);
});
```

### 二、接收消息

##### 1、接收普通消息

**监听所有普通消息**

```
weixin.on('allMsg', function(data) {
    console.log('allMsg');
    console.log(data);
});
```

**（1）文本消息**

```
weixin.on('textMsg', function(data) {
	console.log(data);
});
```

返回数据格式
```
{
    toUserName: 'gh_6716c73fdcbe',
    fromUserName: 'ojim5txO8ivc0Ff2LKW1nlUJ9hM4',
    createTime: '1444488576',
    msgType: 'text',
    content: '测试',
    msgId: '6204031193575688546'
}
```

**（2）图片消息**

```
weixin.on('imageMsg', function(data) {
    console.log(data);
});
```

返回数据格式
```
{
    toUserName: 'gh_6716c73fdcbe',
    fromUserName: 'ojim5txO8ivc0Ff2LKW1nlUJ9hM4',
    createTime: '1444488947',
    msgType: 'image',
    picUrl: 'http://mmbiz.qpic.cn/mmbiz/FNibvdZUiaod2xfTQ7S2X4J8iciajOsFLrf271DXHB8niciaUsPQYxUOZiaKVQQIm08cjpwOsFTbIqnQ8xzU7FET1YGZg/0',
    msgId: '6204032787008555443',
    mediaId: '29Pltn_T4yDb-ABL0ndQGgXvyh34qSRcyUMOOC7ZriZcMO4UfnCT8Us15GfbfXiv'
}
```

**（3）语音消息**

```
weixin.on('voiceMsg', function(data) {
    console.log(data);
});
```

返回数据格式
```
{
    toUserName: 'gh_6716c73fdcbe',
    fromUserName: 'ojim5txO8ivc0Ff2LKW1nlUJ9hM4',
    createTime: '1444489142',
    msgType: 'voice',
    mediaId: 'wbA_aCWP9lnnYuynf8NbTmSijhiLBj02yHK-hJe_J9OFH_1F1gKUqx4fTQEunWOF',
    format: 'amr',
    msgId: '6204033624317100032',
    recognition: '哈哈哈！'
}
```

**（4）视频消息**

```
weixin.on('videoMsg', function(data) {
    console.log(data);
});
```

返回数据格式
`
{
    toUserName: 'gh_6716c73fdcbe',
    fromUserName: 'ojim5txO8ivc0Ff2LKW1nlUJ9hM4',
    createTime: '1444489295',
    msgType: 'video',
    mediaId: '8G6ZbI4p0UgE6XC4YuJRWiAbKilE6S1mu3uo1FPvIVLyz6KH5MWDUInnQIZgrSLK',
    thumbMediaId: 'sfxw8eF6H4tzobRdy8MpDOx2XyWfqiiyUyGviEz4PUNhssAcng6mKcNgJlL18eZW',
    msgId: '6204034281657174501'
}
`

**（5）小视频消息**

```
weixin.on('shortvideoMsg', function(data) {
    console.log(data);
});
```
返回数据格式
```
{
    toUserName: 'gh_6716c73fdcbe',
    fromUserName: 'ojim5txO8ivc0Ff2LKW1nlUJ9hM4',
    createTime: '1444489371',
    msgType: 'shortvideo',
    mediaId: 'rT2kW2gGVQ0QFjEYFZeH5TeZ8V9wfHqqQgqlFosqDnOpd_pyMJKCd_hZVe1jhtGj',
    thumbMediaId: '-6R7wxJxj1bWuOHqrcQq_0bHEKrjfEI3wJm_0jSpFKPoXyIF_ShPueQ7yiEtxNEC',
    msgId: '6204034608074689058'
}
```

**（6）地理位置消息**

```
weixin.on('locationMsg', function(data) {
    console.log(data);
});
```
返回数据格式
```
{
    toUserName: 'gh_6716c73fdcbe',
    fromUserName: 'ojim5txO8ivc0Ff2LKW1nlUJ9hM4',
    createTime: '1444489493',
    msgType: 'location',
    location_X: '30.285181',
    location_Y: '120.127282',
    scale: '15',
    label: '杭州市西湖区翠苑新村北(学院路西)',
    msgId: '6204035132060699185'
}
```

**（7）链接消息**

```
weixin.on('linkMsg', function(data) {
    console.log(data);
});
```
返回数据格式
```
{
    toUserName: 'gh_6716c73fdcbe',
    fromUserName: 'ojim5txO8ivc0Ff2LKW1nlUJ9hM4',
    createTime: '1444489581',
    msgType: 'link',
    title: '杭城最美露台餐厅！坐在这儿你可以吃到整个秋天~~',
    description: '秋天就像爱情一样，说来就来了。而这秋光有多短暂，就有多珍贵。 全城最美露台、最佳阳光就餐位。抓紧时间，享受',
    url: 'http://mp.weixin.qq.com/s?__biz=MzA4MDAwNzIwNw==&mid=210174411&idx=1&sn=191c9d3d49902e7c1ef1aac61161b0bc&scene=0#rd',
    msgId: '6204035510017821291'
}
```

##### 2、接收事件推送

**监听所有事件推送**

```
weixin.on('allEventMsg', function(data) {
    console.log('allEventMsg');
    console.log(data);
});
```

**（1）关注/取消关注事件**

> 取消关注事件

```
weixin.on('unsubscribeEventMsg', function(data) {
    console.log(data);
});
```
返回数据格式
```
{
    toUserName: 'gh_6716c73fdcbe',
    fromUserName: 'ojim5txO8ivc0Ff2LKW1nlUJ9hM4',
    createTime: '1444489955',
    msgType: 'event',
    event: 'unsubscribe',
    eventKey: ''
}
```

> 关注事件

```
weixin.on('subscribeEventMsg', function(data) {
    console.log(data);
});
```
返回数据格式
```
{
    toUserName: 'gh_6716c73fdcbe',
    fromUserName: 'ojim5txO8ivc0Ff2LKW1nlUJ9hM4',
    createTime: '1444490390',
    msgType: 'event',
    event: 'subscribe',
    eventKey: ''
}
```

**（2）扫描带参数二维码事件**

```
	weixin.on('SCANEventMsg', function(data) {
        console.log(data);
    });
```

**（3）上报地理位置事件**

```
weixin.on('LOCATIONEventMsg', function(data) {
    console.log(data);
});
```

返回数据格式
```
{
    toUserName: 'gh_6716c73fdcbe',
    fromUserName: 'ojim5txO8ivc0Ff2LKW1nlUJ9hM4',
    createTime: '1444490640',
    msgType: 'event',
    event: 'LOCATION',
    latitude: '30.287462',
    longitude: '120.122849',
    precision: '30.000000'
}
```

**（4）自定义菜单事件**
>点击菜单拉取消息时的事件推送

```
weixin.on('CLICKEventMsg', function(data) {
    console.log(data);
});

// 回调函数data返回数据格式
{
    toUserName: 'gh_6716c73fdcbe',
    fromUserName: 'ojim5txO8ivc0Ff2LKW1nlUJ9hM4',
    createTime: '1444573892',
    msgType: 'event',
    event: 'CLICK',
    eventKey: 'V1001_TODAY_MUSIC'
}
```

>点击菜单跳转链接时的事件推送

```
weixin.on('VIEWEventMsg', function(data) {
    console.log(data);
});

// 回调函数data返回数据格式
{
    toUserName: 'gh_6716c73fdcbe',
    fromUserName: 'ojim5txO8ivc0Ff2LKW1nlUJ9hM4',
    createTime: '1444573910',
    msgType: 'event',
    event: 'VIEW',
    eventKey: 'http://www.soso.com/'
}
```

### 三、发送消息

##### 1、被动回复消息

**（1）回复文本消息**

```
weixin.sendTextMsg({
    toUserName: '接收方帐号（收到的OpenID）',
    fromUserName: '开发者微信号',
    content: '回复的消息内容'
});
```

**（2）回复图片消息**

```
weixin.sendImageMsg({
    toUserName: '接收方帐号（收到的OpenID）',
    fromUserName: '开发者微信号',
    mediaId: '通过素材管理接口上传多媒体文件，得到的id'
});
```

**（3）回复语音消息**

```
weixin.sendVoiceMsg({
    toUserName: '接收方帐号（收到的OpenID）',
    fromUserName: '开发者微信号',
    mediaId: '通过素材管理接口上传多媒体文件，得到的id'
});
```

**（4）回复视频消息**

```
weixin.sendVideoMsg({
    toUserName: '接收方帐号（收到的OpenID）',
    fromUserName: '开发者微信号',
    mediaId: '通过素材管理接口上传多媒体文件，得到的id',
    title: '视频消息的标题',
    description: '视频消息的描述'
});
```

**（5）回复音乐消息**

```
weixin.sendMusicMsg({
    toUserName: data.fromUserName,
    fromUserName: data.toUserName,
    title: '音乐标题',
    description: '音乐描述',
    musicUrl: 'http://sc.111ttt.com/up/mp3/347508/FCAF062BECD1C24FAED2A355EF51EBDD.mp3',
    HQMusicUrl: 'http://sc.111ttt.com/up/mp3/347508/FCAF062BECD1C24FAED2A355EF51EBDD.mp3',
    thumbMediaId: 'oqd3Be5QjUQDdhmwpvT6KJaLAvXEQZDKsjd_L7E-Ix8xv-83MSVBTdXZddTh1U4q'
});
```

**（6）回复图文消息**

```
weixin.sendNewsMsg({
    toUserName: data.fromUserName,
    fromUserName: data.toUserName,
    articles: [{
        title: '这是第一条图文消息',
        description: '这是第一个图文消息描述',
        picUrl: 'https://www.baidu.com/img/bd_logo1.png',
        url: 'http://www.baidu.com'
    }, {
        title: '这是第一条图文消息',
        description: '这是第一个图文消息描述',
        picUrl: 'https://www.baidu.com/img/bd_logo1.png',
        url: 'http://www.baidu.com'
    }, {
        title: '这是第一条图文消息',
        description: '这是第一个图文消息描述',
        picUrl: 'https://www.baidu.com/img/bd_logo1.png',
        url: 'http://www.baidu.com'
    }]
});
```

##### 2、客服接口
```
weixin.sendCustomMsg({
    "touser":"OPENID",
    "msgtype":"text",
    "text":{
         "content":"Hello World"
    }
}, function(data) {
    console.log(data);
});

```

##### 3、群发接口
// TODO

##### 4、模板消息接口

```
weixin.sendTemplateMsg({
    "touser": "oc-rPt2umd9liQmyGmW6y1NVymT0",
    "template_id": "OMro9TUiR1VKKW6kVL9erzlzHLLACI3E36g6dQy82NU",
    "url": "",
    "data": {
        "first": {
            "value": "服务器重启成功 \n时间： " + util.TOOLS.getTime(),
            "color": "#ff4400"
        },
        "work": {
            "value": "祝您工作愉快，HAPPY",
            "color": "#173177"
        },
        "remark": {
            "value": "\n快乐每一天！",
            "color": "#173177"
        }
    }
}, function(data) {
    console.log(data);
});

```

##### 5、获取自动回复规则

```
weixin.getCurrentAutoReplyInfo(function(data) {
    console.log(data);
});
```

### 四、素材管理

##### 1、新增临时素材
##### 2、获取临时素材
##### 3、新增永久素材
##### 4、获取永久素材
##### 5、删除永久素材
##### 6、修改永久图文素材
##### 7、获取素材总数

```
weixin.getMaterialCount(function(data) {
    console.log(data);
});
```

返回数据格式
```
{
    voice_count: 0,
    video_count: 0,
    image_count: 2,
    news_count: 0
}
```

##### 8、获取素材列表

> 获取图片素材列表

```
weixin.batchGetMaterial({
    "type": "image",
    "offset": 0,
    "count": 10
}, function(data) {
    console.log(data);
});

// 返回数据格式
{
    item: [{
        media_id: 'Jyq7cKAueUPOXD7f7qxNr1j9Uu0zdYDbSqw6XIajx8I',
        name: 'api_mpnews_cover.jpg',
        update_time: 1404959867
    }, {
        media_id: 'Jyq7cKAueUPOXD7f7qxNr3Roj-g13_o9h_HjxJxKNRU',
        name: 'api_mpnews_cover.jpg',
        update_time: 1404959819
    }],
    total_count: 2,
    item_count: 2
}
```

### 五、用户管理

##### 1、用户分组管理
##### 2、设置用户备注名
##### 3、获取用户基本信息
##### 4、获取用户列表
##### 5、获取用户地理位置
##### 6、网页授权获取用户基本信息

### 六、自定义菜单管理

##### 1、创建自定义菜单

> click和view的请求示例

```
var menuObj = {
    "button": [{
        "type": "click",
        "name": "今日歌曲",
        "key": "V1001_TODAY_MUSIC"
    }, {
        "name": "菜单",
        "sub_button": [{
            "type": "view",
            "name": "搜索",
            "url": "http://www.soso.com/"
        }, {
            "type": "view",
            "name": "视频",
            "url": "http://v.qq.com/"
        }, {
            "type": "click",
            "name": "赞一下我们",
            "key": "V1001_GOOD"
        }]
    }]
};

weixin.createMenu(menuObj, function(data) {
    console.log(data);
});
```

> 其他新增按钮类型的请求示例

```
var menuObj = {
    "button": [{
        "name": "扫码",
        "sub_button": [{
            "type": "scancode_waitmsg",
            "name": "扫码带提示",
            "key": "rselfmenu_0_0",
            "sub_button": []
        }, {
            "type": "scancode_push",
            "name": "扫码推事件",
            "key": "rselfmenu_0_1",
            "sub_button": []
        }]
    }, {
        "name": "发图",
        "sub_button": [{
            "type": "pic_sysphoto",
            "name": "系统拍照发图",
            "key": "rselfmenu_1_0",
            "sub_button": []
        }, {
            "type": "pic_photo_or_album",
            "name": "拍照或者相册发图",
            "key": "rselfmenu_1_1",
            "sub_button": []
        }, {
            "type": "pic_weixin",
            "name": "微信相册发图",
            "key": "rselfmenu_1_2",
            "sub_button": []
        }]
    }, {
        "name": "发送位置",
        "type": "location_select",
        "key": "rselfmenu_2_0"
    }]
};

weixin.createMenu(menuObj, function(data) {
    console.log(data);
});
```

##### 2、查询自定义菜单

```
weixin.getMenu(function(data) {
    console.log(data);
});
```

##### 3、删除自定义菜单

```
weixin.deleteMenu(function(data) {
    console.log(data);
});

// 回调函数data返回数据格式
{ errcode: 0, errmsg: 'ok' }
```

##### 4、自定义菜单事件推送

**监听所有自定义菜单事件推送**

```
weixin.on('allEventMsg', function(data) {
    console.log(data);
});
```

**（1）点击菜单拉取消息时的事件推送**

```
weixin.on('CLICKEventMsg', function(data) {
    console.log(data);
});

// 回调函数data返回数据格式
{
    toUserName: 'gh_6716c73fdcbe',
    fromUserName: 'ojim5txO8ivc0Ff2LKW1nlUJ9hM4',
    createTime: '1444573892',
    msgType: 'event',
    event: 'CLICK',
    eventKey: 'V1001_TODAY_MUSIC'
}
```

**（2）点击菜单跳转链接时的事件推送**

```
weixin.on('VIEWEventMsg', function(data) {
    console.log(data);
});

// 回调函数data返回数据格式
{
    toUserName: 'gh_6716c73fdcbe',
    fromUserName: 'ojim5txO8ivc0Ff2LKW1nlUJ9hM4',
    createTime: '1444573910',
    msgType: 'event',
    event: 'VIEW',
    eventKey: 'http://www.soso.com/'
}
```

**（3）scancode_push：扫码推事件的事件推送**

```
{
    toUserName: 'gh_6716c73fdcbe',
    fromUserName: 'ojim5txO8ivc0Ff2LKW1nlUJ9hM4',
    createTime: '1444574757',
    msgType: 'event',
    event: 'scancode_push',
    eventKey: 'rselfmenu_0_1',
    scanCodeInfo: {
        ScanType: ['qrcode'],
        ScanResult: ['http://www.baidu.com']
    }
}
```

**（4）scancode_waitmsg：扫码推事件且弹出“消息接收中”提示框的事件推送**

**（5）pic_sysphoto：弹出系统拍照发图的事件推送**

**（6）pic_photo_or_album：弹出拍照或者相册发图的事件推送**

**（7）pic_weixin：弹出微信相册发图器的事件推送**

**（8）location_select：弹出地理位置选择器的事件推送**

##### 5、获取自定义菜单配置

```
weixin.getCurrentSelfMenuInfo(function(data) {
    console.log(JSON.stringify(data));
});
```

### 七、账号管理

##### 1、生成带参数的二维码

> 临时二维码ticket

```
weixin.createQrcode({
    "expire_seconds": 604800,
    "action_name": "QR_SCENE",
    "action_info": {
        "scene": {
            "scene_id": 123
        }
    }
}, function(data) {
    console.log(data);
});
```


##### 2、长链接转短链接接口

```
weixin.getShortUrl({
    action: "long2short",
    long_url: "http://www.baidu.com"
}, function(data) {
    console.log(data);
});

// 返回数据格式
{
    errcode: 0,
    errmsg: 'ok',
    short_url: 'http://w.url.cn/s/A20hOft'
}
```


##### 3、微信认证事件推送

### 八、数据统计接口

















