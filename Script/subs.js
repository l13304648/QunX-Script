/*

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/v1\/(subscribers|receipts) url script-response-body https://raw.githubusercontent.com/l13304648/QunX-Script/main/Script/subs.js

[mitm]
hostname = api.revenuecat.com

*/

var obj = {
  "request_date_ms" : 1665728663210,
  "request_date" : "2022-10-14T06:24:23Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2022-10-14T06:20:43Z",
    "original_application_version" : "251",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "com.lkzhao.editor.full" : {
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "billing_issues_detected_at" : null,
        "period_type" : "pro",
        "expires_date" : "",
        "grace_period_expires_date" : null,
        "unsubscribe_detected_at" : null,
        "original_purchase_date" : "2022-10-14T06:23:55Z",
        "purchase_date" : "2022-10-14T06:23:53Z",
        "store" : "app_store"
      }
    },
    "entitlements" : {
      "pro" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-10-14T06:23:53Z",
        "product_identifier" : "com.lkzhao.editor.full",
        "expires_date" : ""
      }
    },
    "original_purchase_date" : "2022-10-14T06:18:56Z",
    "original_app_user_id" : "$RCAnonymousID:4024fefebf014458bef29f2e013c5124",
    "last_seen" : "2022-10-14T06:20:43Z"
  }
}

$done({body: JSON.stringify(obj)});
