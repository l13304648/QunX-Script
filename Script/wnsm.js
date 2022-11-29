/*
#蜗牛睡眠
vip解锁


[rewrite_local]
^https:\/\/snailsleep\.net\/snail\/v1\/profile\/get\? url script-response-body https://raw.githubusercontent.com/l13304648/QunX-Script/main/Script/wnsm2.js

[MITM]
hostname = snailsleep.net

*/
let obj = JSON.parse($response.body);
obj={
  "status": 200,
  "message": "OK",
  "result": {
    "unique": "",
    "expires": 2800000000000,
    "expiresRAD": 2800000000000,
    "dreamsTotal": 10,
    "dreamsUsed": 0,
    "updated": 1648977374317,
    "points": 999,
    "level": 3,
    "offerPeriod": true,
    "type": "SNAIL",
    "lifelong": true,
    "expired": false,
    "radexpired": false,
    "links": []
  },
  "links": []
}

$done({body: JSON.stringify(obj)});
