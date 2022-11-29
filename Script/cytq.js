/*
#彩云天气
Svip解锁

[rewrite_local]
^https:\/\/biz\.caiyunapp\.com\/v2\/user\?app\_name\=weather url script-response-body https://raw.githubusercontent.com/l13304648/QunX-Script/main/Script/cytq.js

[MITM]
hostname = biz.caiyunapp.com

*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

obj.result.svip_expired_at = 4102415999,
obj.result.is_primary = true,
obj.result.free_trial = 365,
obj.result.vip_type = "s",
obj.result.wt.free_trial = 365,
obj.result.wt.vip.svip_apple_expired_at = 4102415999,
obj.result.wt.vip.svip_expired_at = 4102415999,
obj.result.svip_take_effect = 1,
obj.result.is_vip = true,

body = JSON.stringify(obj);
$done({body});
