$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Fotogaleria.feature");
formatter.feature({
  "line": 1,
  "name": "Fotogaleria",
  "description": "",
  "id": "fotogaleria",
  "keyword": "Feature"
});
formatter.before({
  "duration": 724471221,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should see six photo gallery Recommended menu",
  "description": "",
  "id": "fotogaleria;user-should-see-six-photo-gallery-recommended-menu",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@fotogalerias"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "that I\u0027m at \"http://m.oglobo.globo.com/fotogalerias/\" url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on button \"Não, obrigado\" in \"Notification\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I see \"Recommended 1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I see \"Recommended 2\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I see \"Recommended 3\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I see \"Recommended 4\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I see \"Recommended 5\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I see \"Recommended 6\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://m.oglobo.globo.com/fotogalerias/",
      "offset": 13
    }
  ],
  "location": "FeatureSteps.that_i_am_at_url(String)"
});
formatter.result({
  "duration": 19736793740,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d52.0.2743.116)\n  (Driver info: chromedriver\u003d2.23.409687 (c46e862757edc04c06b1bd88724d15a5807b84d1),platform\u003dLinux 4.4.0-34-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 4 milliseconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027matrix\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.4.0-34-generic\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dtrue, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.23.409687 (c46e862757edc04c06b1bd88724d15a5807b84d1), userDataDir\u003d/tmp/.org.chromium.Chromium.cPccYj}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dtrue, version\u003d52.0.2743.116, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 45df78f80d6fc4b62361fb787cf515fb\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:335)\n\tat util.EvidenceSteps.takeAPrint(EvidenceSteps.java:22)\n\tat com.globo.FeatureSteps.that_i_am_at_url(FeatureSteps.java:44)\n\tat ✽.Given that I\u0027m at \"http://m.oglobo.globo.com/fotogalerias/\" url(features/Fotogaleria.feature:5)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Não, obrigado",
      "offset": 19
    },
    {
      "val": "Notification",
      "offset": 38
    }
  ],
  "location": "FeatureSteps.i_click_on_button_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Recommended 1",
      "offset": 7
    }
  ],
  "location": "FeatureSteps.i_see_six_photogallery_recommended1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Recommended 2",
      "offset": 7
    }
  ],
  "location": "FeatureSteps.i_see_six_photogallery_recommended1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Recommended 3",
      "offset": 7
    }
  ],
  "location": "FeatureSteps.i_see_six_photogallery_recommended1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Recommended 4",
      "offset": 7
    }
  ],
  "location": "FeatureSteps.i_see_six_photogallery_recommended1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Recommended 5",
      "offset": 7
    }
  ],
  "location": "FeatureSteps.i_see_six_photogallery_recommended1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Recommended 6",
      "offset": 7
    }
  ],
  "location": "FeatureSteps.i_see_six_photogallery_recommended1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 121011250,
  "status": "passed"
});
formatter.before({
  "duration": 592340131,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should see three  photo gallery More Views menu",
  "description": "",
  "id": "fotogaleria;user-should-see-three--photo-gallery-more-views-menu",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@fotogalerias"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "that I\u0027m at \"http://m.oglobo.globo.com/fotogalerias/\" url",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I click on button \"Não, obrigado\" in \"Notification\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I see \"More Views 1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I see \"More Views 2\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I see \"More Views 3\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://m.oglobo.globo.com/fotogalerias/",
      "offset": 13
    }
  ],
  "location": "FeatureSteps.that_i_am_at_url(String)"
});
formatter.result({
  "duration": 1535630156,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d52.0.2743.116)\n  (Driver info: chromedriver\u003d2.23.409687 (c46e862757edc04c06b1bd88724d15a5807b84d1),platform\u003dLinux 4.4.0-34-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 3 milliseconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027matrix\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.4.0-34-generic\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dtrue, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.23.409687 (c46e862757edc04c06b1bd88724d15a5807b84d1), userDataDir\u003d/tmp/.org.chromium.Chromium.0HjafM}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dtrue, version\u003d52.0.2743.116, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 708a4d386dcb0f182a03268b21ef2cd0\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:335)\n\tat util.EvidenceSteps.takeAPrint(EvidenceSteps.java:22)\n\tat com.globo.FeatureSteps.that_i_am_at_url(FeatureSteps.java:44)\n\tat ✽.Given that I\u0027m at \"http://m.oglobo.globo.com/fotogalerias/\" url(features/Fotogaleria.feature:16)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Não, obrigado",
      "offset": 19
    },
    {
      "val": "Notification",
      "offset": 38
    }
  ],
  "location": "FeatureSteps.i_click_on_button_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "More Views 1",
      "offset": 7
    }
  ],
  "location": "FeatureSteps.i_see_six_photogallery_recommended1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "More Views 2",
      "offset": 7
    }
  ],
  "location": "FeatureSteps.i_see_six_photogallery_recommended1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "More Views 3",
      "offset": 7
    }
  ],
  "location": "FeatureSteps.i_see_six_photogallery_recommended1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 214457918,
  "status": "passed"
});
formatter.before({
  "duration": 378885445,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should see three  photo gallery More Views menu",
  "description": "",
  "id": "fotogaleria;user-should-see-three--photo-gallery-more-views-menu",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@fotogalerias"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "that I\u0027m at \"http://m.oglobo.globo.com/fotogalerias/\" url",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I click on button \"Não, obrigado\" in \"Notification\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I see the option \"Todas\" selected",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://m.oglobo.globo.com/fotogalerias/",
      "offset": 13
    }
  ],
  "location": "FeatureSteps.that_i_am_at_url(String)"
});
formatter.result({
  "duration": 1048313179,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d52.0.2743.116)\n  (Driver info: chromedriver\u003d2.23.409687 (c46e862757edc04c06b1bd88724d15a5807b84d1),platform\u003dLinux 4.4.0-34-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 2 milliseconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027matrix\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.4.0-34-generic\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dtrue, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.23.409687 (c46e862757edc04c06b1bd88724d15a5807b84d1), userDataDir\u003d/tmp/.org.chromium.Chromium.aLJkXj}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dtrue, version\u003d52.0.2743.116, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: c480d958459cf74c26dfcb65924e67e3\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:335)\n\tat util.EvidenceSteps.takeAPrint(EvidenceSteps.java:22)\n\tat com.globo.FeatureSteps.that_i_am_at_url(FeatureSteps.java:44)\n\tat ✽.Given that I\u0027m at \"http://m.oglobo.globo.com/fotogalerias/\" url(features/Fotogaleria.feature:24)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Não, obrigado",
      "offset": 19
    },
    {
      "val": "Notification",
      "offset": 38
    }
  ],
  "location": "FeatureSteps.i_click_on_button_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Todas",
      "offset": 18
    }
  ],
  "location": "FeatureSteps.i_see_option_selected(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 113942284,
  "status": "passed"
});
});