$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/createCoupons.feature");
formatter.feature({
  "line": 1,
  "name": "Create Coupons",
  "description": "",
  "id": "create-coupons",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1671273918,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Create Coupons - Create New Coupons",
  "description": "",
  "id": "create-coupons;create-coupons---create-new-coupons",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@vivi"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "that I\u0027m in \"http://dft-us-carmen.aws.dafitidev.com.br\" url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I will see \"User authentication\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I\u0027m authenticating me with \"username\" and \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I will see \"CAMPAIGN Plataform\" page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on button \"Create Coupon\" in \"Campaign Plataform\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I fill create coupon select box \"Discount type\" with \"Fixed\" value",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I will see \"Value (R$) *:\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I fill field \"Discount Value\" with \"200\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I fill field \"Coupon\u0027s name\" with \"Test Coupon 001\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I fill field \"Coupon\u0027s description\" with \"Test Coupon 001\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I fill in expiration date with \"From Date\" and \"To Date\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://dft-us-carmen.aws.dafitidev.com.br",
      "offset": 13
    }
  ],
  "location": "FeatureSteps.that_i_am_at_url(String)"
});
formatter.result({
  "duration": 2791660824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User authentication",
      "offset": 12
    }
  ],
  "location": "FeatureSteps.i_will_see_page(String)"
});
formatter.result({
  "duration": 941912029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 28
    },
    {
      "val": "password",
      "offset": 43
    }
  ],
  "location": "FeatureSteps.i_am_authenticating_me(String,String)"
});
formatter.result({
  "duration": 1130628874,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CAMPAIGN Plataform",
      "offset": 12
    }
  ],
  "location": "FeatureSteps.i_will_see_page(String)"
});
formatter.result({
  "duration": 1019387870,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Create Coupon",
      "offset": 19
    },
    {
      "val": "Campaign Plataform",
      "offset": 38
    }
  ],
  "location": "FeatureSteps.i_click_on_button_in(String,String)"
});
formatter.result({
  "duration": 5870258730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Discount type",
      "offset": 33
    },
    {
      "val": "Fixed",
      "offset": 54
    }
  ],
  "location": "FeatureSteps.i_fill_create_coupon_select_box_with_value(String,String)"
});
formatter.result({
  "duration": 2366443867,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Value (R$) *:",
      "offset": 12
    }
  ],
  "location": "FeatureSteps.i_will_see_page(String)"
});
formatter.result({
  "duration": 841161496,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Discount Value",
      "offset": 14
    },
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "FeatureSteps.i_fill_field_with(String,String)"
});
formatter.result({
  "duration": 920584191,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Coupon\u0027s name",
      "offset": 14
    },
    {
      "val": "Test Coupon 001",
      "offset": 35
    }
  ],
  "location": "FeatureSteps.i_fill_field_with(String,String)"
});
formatter.result({
  "duration": 978041042,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Coupon\u0027s description",
      "offset": 14
    },
    {
      "val": "Test Coupon 001",
      "offset": 42
    }
  ],
  "location": "FeatureSteps.i_fill_field_with(String,String)"
});
formatter.result({
  "duration": 931704861,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "From Date",
      "offset": 32
    },
    {
      "val": "To Date",
      "offset": 48
    }
  ],
  "location": "FeatureSteps.i_fill_in_expiration_date(String,String)"
});
formatter.result({
  "duration": 1465983317,
  "status": "passed"
});
formatter.after({
  "duration": 565746078,
  "status": "passed"
});
});