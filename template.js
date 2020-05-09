'use strict';

function now() {
    return Math.round(Date.now() / 1000);
}

module.exports = {

    text: function(msg) {
        // 发送空字符串，或者 success
        if (msg.content == 'success' || msg.content == '') {
            return msg.content;
        }
        // 正常回复
        return '<xml>' +
            '<ToUserName><![CDATA[' + msg.toUserName + ']]></ToUserName>' +
            '<FromUserName><![CDATA[' + msg.fromUserName + ']]></FromUserName>' +
            '<CreateTime>' + now() + '</CreateTime>' +
            '<MsgType><![CDATA[text]]></MsgType>' +
            '<Content><![CDATA[' + msg.content + ']]></Content>' +
            '</xml>';
    },

    image: function(msg) {
        return '<xml>' +
            '<ToUserName><![CDATA[' + msg.toUserName + ']]></ToUserName>' +
            '<FromUserName><![CDATA[' + msg.fromUserName + ']]></FromUserName>' +
            '<CreateTime>' + now() + '</CreateTime>' +
            '<MsgType><![CDATA[image]]></MsgType>' +
            '<Image>' +
            '<MediaId><![CDATA[' + msg.mediaId + ']]></MediaId>' +
            '</Image>' +
            '</xml>';
    },

    voice: function(msg) {
        return '<xml>' +
            '<ToUserName><![CDATA[' + msg.toUserName + ']]></ToUserName>' +
            '<FromUserName><![CDATA[' + msg.fromUserName + ']]></FromUserName>' +
            '<CreateTime>' + now() + '</CreateTime>' +
            '<MsgType><![CDATA[voice]]></MsgType>' +
            '<Voice>' +
            '<MediaId><![CDATA[' + msg.mediaId + ']]></MediaId>' +
            '</Voice>' +
            '</xml>';
    },

    video: function(msg) {
        return '<xml>' +
            '<ToUserName><![CDATA[' + msg.toUserName + ']]></ToUserName>' +
            '<FromUserName><![CDATA[' + msg.fromUserName + ']]></FromUserName>' +
            '<CreateTime>' + now() + '</CreateTime>' +
            '<MsgType><![CDATA[video]]></MsgType>' +
            '<Video>' +
            '<MediaId><![CDATA[' + msg.mediaId + ']]></MediaId>' +
            '<Title><![CDATA[' + msg.title + ']]></Title>' +
            '<Description><![CDATA[' + msg.description + ']]></Description>' +
            '</Video>' +
            '</xml>';
    },

    music: function(msg) {
        return '<xml>' +
            '<ToUserName><![CDATA[' + msg.toUserName + ']]></ToUserName>' +
            '<FromUserName><![CDATA[' + msg.fromUserName + ']]></FromUserName>' +
            '<CreateTime>' + now() + '</CreateTime>' +
            '<MsgType><![CDATA[music]]></MsgType>' +
            '<Music>' +
            '<Title><![CDATA[' + msg.title + ']]></Title>' +
            '<Description><![CDATA[' + msg.description + ']]></Description>' +
            '<MusicUrl><![CDATA[' + msg.musicUrl + ']]></MusicUrl>' +
            '<HQMusicUrl><![CDATA[' + msg.HQMusicUrl + ']]></HQMusicUrl>' +
            '<ThumbMediaId><![CDATA[' + msg.thumbMediaId + ']]></ThumbMediaId>' +
            '</Music>' +
            '</xml>';
    },

    news: function(msg) {
        var articles = msg.articles || [];
        var articleCount = articles.length;
        var article;
        var out = '<xml>' +
            '<ToUserName><![CDATA[' + msg.toUserName + ']]></ToUserName>' +
            '<FromUserName><![CDATA[' + msg.fromUserName + ']]></FromUserName>' +
            '<CreateTime>' + now() + '</CreateTime>' +
            '<MsgType><![CDATA[news]]></MsgType>' +
            '<ArticleCount>' + articleCount + '</ArticleCount>' +
            '<Articles>';

        for (var i = 0; i < articleCount; i++) {
            article = articles[i];
            out += '<item>' +
                '<Title><![CDATA[' + article.title + ']]></Title>' +
                '<Description><![CDATA[' + article.description + ']]></Description>' +
                '<PicUrl><![CDATA[' + article.picUrl + ']]></PicUrl>' +
                '<Url><![CDATA[' + article.url + ']]></Url>' +
                '</item>';
        }

        out += '</Articles></xml>';

        return out;
    }












};
