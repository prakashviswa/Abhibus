$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/abhibus.feature");
formatter.feature({
  "name": "AbhiBus travelling homepage",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@oneway"
    }
  ]
});
formatter.scenarioOutline({
  "name": "The user enter one way trip details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user is in home page",
  "keyword": "Given "
});
formatter.step({
  "name": "The user enter all details for oneway trip \"\u003cSource\u003e\",\"\u003cDestination\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "The user click the search button",
  "keyword": "When "
});
formatter.step({
  "name": "The user validate the outcomes",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Source",
        "Destination"
      ]
    },
    {
      "cells": [
        "Chennai",
        "Bangalore"
      ]
    }
  ]
});
formatter.scenario({
  "name": "The user enter one way trip details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@oneway"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in home page",
  "keyword": "Given "
});
formatter.match({
  "location": "TravelDetailsStepsOneway.the_user_is_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enter all details for oneway trip \"Chennai\",\"Bangalore\"",
  "keyword": "And "
});
formatter.match({
  "location": "TravelDetailsStepsOneway.the_user_enter_all_details_for_oneway_trip(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click the search button",
  "keyword": "When "
});
formatter.match({
  "location": "SearchButton.the_user_click_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user validate the outcomes",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationPageStepsOneway.the_user_validate_the_outcomes()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"SubHeadJrney\"}\n  (Session info: chrome\u003d72.0.3626.109)\n  (Driver info: chromedriver\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027TESLARAM-PC\u0027, ip: \u0027192.168.43.115\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:1897}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387), userDataDir\u003dC:\\Users\\teslaram\\AppData\\Local\\Temp\\scoped_dir8028_16690}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003dignore, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d72.0.3626.109, browserConnectionEnabled\u003dfalse, proxy\u003dProxy(), nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: f11da07de4c54e2dc9d2a8d245c749ba\n*** Element info: {Using\u003did, value\u003dSubHeadJrney}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:462)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\r\n\tat stepdefinition.ValidationPageStepsOneway.the_user_validate_the_outcomes(ValidationPageStepsOneway.java:11)\r\n\tat ✽.The user validate the outcomes(features/abhibus.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "The user enter the return trip details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@return"
    }
  ]
});
formatter.step({
  "name": "The user is in home page",
  "keyword": "Given "
});
formatter.step({
  "name": "The user enter all the details for return trip\"\u003cSource\u003e\",\"\u003cDestination\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "The user click the search button",
  "keyword": "When "
});
formatter.step({
  "name": "The user validate the outcomes for return trip",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Source",
        "Destination"
      ]
    },
    {
      "cells": [
        "Bangalore",
        "Chennai"
      ]
    }
  ]
});
formatter.scenario({
  "name": "The user enter the return trip details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@oneway"
    },
    {
      "name": "@return"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in home page",
  "keyword": "Given "
});
formatter.match({
  "location": "TravelDetailsStepsOneway.the_user_is_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enter all the details for return trip\"Bangalore\",\"Chennai\"",
  "keyword": "And "
});
formatter.match({
  "location": "TravelDetailsStepsReturn.the_user_enter_all_the_details_for_return_trip(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click the search button",
  "keyword": "When "
});
formatter.match({
  "location": "SearchButton.the_user_click_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user validate the outcomes for return trip",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationPageStepsReturn.the_user_validate_the_outcomes_for_return_trip()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"SubHeadJrney\"}\n  (Session info: chrome\u003d72.0.3626.109)\n  (Driver info: chromedriver\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027TESLARAM-PC\u0027, ip: \u0027192.168.43.115\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:1979}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387), userDataDir\u003dC:\\Users\\teslaram\\AppData\\Local\\Temp\\scoped_dir5964_18456}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003dignore, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d72.0.3626.109, browserConnectionEnabled\u003dfalse, proxy\u003dProxy(), nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 11f7dbd401a2e60dd5f587d6245e5223\n*** Element info: {Using\u003did, value\u003dSubHeadJrney}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:462)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\r\n\tat stepdefinition.ValidationPageStepsReturn.the_user_validate_the_outcomes_for_return_trip(ValidationPageStepsReturn.java:11)\r\n\tat ✽.The user validate the outcomes for return trip(features/abhibus.feature:21)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});