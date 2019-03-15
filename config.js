'use strict';

var host = 'https://api.weixin.qq.com';
var baseUrl = host + '/cgi-bin';

module.exports = {

    // 获取access token
    GET_ACCESS_TOKEN: baseUrl + '/token',

    // 获取微信服务器IP地址
    GET_WEIXIN_IP_LIST: baseUrl + '/getcallbackip',

    // 添加客服帐号
    ADD_KFACCOUNT: host + '/customservice/kfaccount/add',

    // 获取所有客服账号
    GET_KF_LIST: baseUrl + '/customservice/getkflist',


    // 发送客服消息
    POST_CUSTOM_MESSAGE: baseUrl + '/message/custom/send',

    // 自定义菜单管理
    // -----------------------------------------------------------------

    // 自定义菜单创建接口
    CREATE_MENU: baseUrl + '/menu/create',
    // 自定义菜单查询接口
    GET_MENU: baseUrl + '/menu/get',
    // 自定义菜单删除接口
    DELETE_MENU: baseUrl + '/menu/delete',
    // 获取自定义菜单配置接口
    GET_CURRENT_SELF_MENU_INFO: baseUrl + '/get_current_selfmenu_info',

    // 发送消息
    // -----------------------------------------------------------------

    // 获取自动回复规则
    GET_CURRENT_AUTOREPLY_INFO: baseUrl + '/get_current_autoreply_info',

    // 获取素材总数接口
    GET_MATERIAL_COUNT: baseUrl + '/material/get_materialcount',

    // 获取素材列表
    BATCH_GET_MATERIAL: baseUrl + '/material/batchget_material',


    // 账号管理
    // -----------------------------------------------------------------

    // 创建二维码ticket接口
    CREATE_QRCODE: baseUrl + '/qrcode/create',
    // 长链接转短链接接口
    GET_SHORT_URL: baseUrl + '/shorturl',

    //模板消息
    POST_TEMPLATE_MESSAGE:  baseUrl + '/message/template/send',

    //获取关注openid
    GET_FOCUS_OPENID: baseUrl + '/user/get',

    //获取关注用户信息 单个用户
    GET_FOCUS_USERINFO: baseUrl + '/user/info',

    //获得多个用户信息  100个
    GET_FOCUS_LIST_USERINFO: baseUrl + '/user/info/batchget'








};
