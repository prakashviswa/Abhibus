$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/abhibus.feature");
formatter.feature({
  "name": "AbhiBus",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Enter source and destination",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user is in home page",
  "keyword": "Given "
});
formatter.step({
  "name": "The user enter all deatils \"\u003cSource\u003e\",\"\u003cDestination\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click the search button",
  "keyword": "When "
});
formatter.step({
  "name": "Validate the outcomes",
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
    },
    {
      "cells": [
        "Pondicherry",
        "Madurai"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Enter source and destination",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in home page",
  "keyword": "Given "
});
formatter.match({
  "location": "TravelDetailsSteps.the_user_is_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enter all deatils \"Chennai\",\"Bangalore\"",
  "keyword": "And "
});
formatter.match({
  "location": "TravelDetailsSteps.the_user_enter_all_deatils(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the search button",
  "keyword": "When "
});
formatter.match({
  "location": "TravelDetailsSteps.click_the_search_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cinput type\u003d\"text\" name\u003d\"journey_date\" id\u003d\"datepicker1\" class\u003d\"calendar1 hasDatepicker\" tabindex\u003d\"3\" value\u003d\"Date of Journey\" readonly\u003d\"\"\u003e is not clickable at point (576, 402). Other element would receive the click: \u003cli class\u003d\"ui-menu-item ui-state-focus\" id\u003d\"ui-id-3\" tabindex\u003d\"-1\"\u003e...\u003c/li\u003e\n  (Session info: chrome\u003d72.0.3626.96)\n  (Driver info: chromedriver\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027TESLARAM-PC\u0027, ip: \u0027192.168.42.151\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:2880}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387), userDataDir\u003dC:\\Users\\teslaram\\AppData\\Local\\Temp\\scoped_dir7796_15823}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003dignore, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d72.0.3626.96, browserConnectionEnabled\u003dfalse, proxy\u003dProxy(), nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: ed65d8bbabe360fe98ba7b0e05f42c8c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat stepdefinition.TravelDetailsSteps.click_the_search_button(TravelDetailsSteps.java:35)\r\n\tat ✽.Click the search button(features/abhibus.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Validate the outcomes",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationPageSteps.validate_the_outcomes()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Enter source and destination",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in home page",
  "keyword": "Given "
});
formatter.match({
  "location": "TravelDetailsSteps.the_user_is_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enter all deatils \"Pondicherry\",\"Madurai\"",
  "keyword": "And "
});
formatter.match({
  "location": "TravelDetailsSteps.the_user_enter_all_deatils(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the search button",
  "keyword": "When "
});
formatter.match({
  "location": "TravelDetailsSteps.click_the_search_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cinput type\u003d\"text\" name\u003d\"journey_date\" id\u003d\"datepicker1\" class\u003d\"calendar1 hasDatepicker\" tabindex\u003d\"3\" value\u003d\"Date of Journey\" readonly\u003d\"\"\u003e is not clickable at point (576, 402). Other element would receive the click: \u003cli class\u003d\"ui-menu-item ui-state-focus\" id\u003d\"ui-id-3\" tabindex\u003d\"-1\"\u003e...\u003c/li\u003e\n  (Session info: chrome\u003d72.0.3626.96)\n  (Driver info: chromedriver\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027TESLARAM-PC\u0027, ip: \u0027192.168.42.151\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:2951}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387), userDataDir\u003dC:\\Users\\teslaram\\AppData\\Local\\Temp\\scoped_dir8792_24826}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003dignore, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d72.0.3626.96, browserConnectionEnabled\u003dfalse, proxy\u003dProxy(), nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 6f199dda91b354c476c21cf6e480abe6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat stepdefinition.TravelDetailsSteps.click_the_search_button(TravelDetailsSteps.java:35)\r\n\tat ✽.Click the search button(features/abhibus.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Validate the outcomes",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationPageSteps.validate_the_outcomes()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});