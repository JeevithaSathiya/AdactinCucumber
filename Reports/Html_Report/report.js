$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User Login In The Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@loginPage"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user Launch the Url in Adactin Web Appliction",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter the Username in Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter the Password in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user click the Login Button And It Navigate To Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Launch_the_Url_in_Adactin_Web_Appliction()"
});
formatter.result({
  "duration": 12319275300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_the_Username_in_Username_Field()"
});
formatter.result({
  "duration": 165214200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_the_Password_in_Password_Field()"
});
formatter.result({
  "duration": 104070500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_the_Login_Button_And_It_Navigate_To_Search_Hotel_Page()"
});
formatter.result({
  "duration": 1079051400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User Select the Hotel in Select Hotel page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-select-the-hotel-in-select-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@selectHotel"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user Click the Hotel in Hotel name Radio Button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user Click the Contine Button And It Navigate to Book A Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Click_the_Hotel_in_Hotel_name_Radio_Button()"
});
formatter.result({
  "duration": 40150800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#radiobutton_0\"}\n  (Session info: chrome\u003d118.0.5993.118)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027NIYA\u0027, ip: \u0027192.168.29.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.15.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 118.0.5993.118, chrome: {chromedriverVersion: 117.0.5938.149 (e3344ddefa1..., userDataDir: C:\\Users\\admin\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:59697}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 07fa6cbfbb2d9c34ee7b84bab3881294\n*** Element info: {Using\u003did, value\u003dradiobutton_0}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_Click_the_Hotel_in_Hotel_name_Radio_Button(StepDefinition.java:91)\r\n\tat ✽.When user Click the Hotel in Hotel name Radio Button(Adactin.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_Click_the_Contine_Button_And_It_Navigate_to_Book_A_Hotel_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 24,
  "name": "User Book A Hotel in Book Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-book-a-hotel-in-book-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@bookHotel"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "user Enter the Firstname in the Firstname Field",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user Enter the Lastname in the Lastname Field",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user Enter the Address in the Address Field",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user Enter the Credit card Number in Credit card Number Field",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user Select the Credit Card Type in Credit Card Type Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user Select the Expiry Month and Year in the Expiry Month and Year Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user Enter the CVV Number in CVV number Field",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user Click Book Now Button And It Navigate to Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Enter_the_Firstname_in_the_Firstname_Field()"
});
formatter.result({
  "duration": 22915800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#first_name\"}\n  (Session info: chrome\u003d118.0.5993.118)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027NIYA\u0027, ip: \u0027192.168.29.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.15.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 118.0.5993.118, chrome: {chromedriverVersion: 117.0.5938.149 (e3344ddefa1..., userDataDir: C:\\Users\\admin\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:59697}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 07fa6cbfbb2d9c34ee7b84bab3881294\n*** Element info: {Using\u003did, value\u003dfirst_name}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_Enter_the_Firstname_in_the_Firstname_Field(StepDefinition.java:103)\r\n\tat ✽.When user Enter the Firstname in the Firstname Field(Adactin.feature:25)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_the_Lastname_in_the_Lastname_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Enter_the_Address_in_the_Address_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Enter_the_Credit_card_Number_in_Credit_card_Number_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Select_the_Credit_Card_Type_in_Credit_Card_Type_Dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Select_the_Expiry_Month_and_Year_in_the_Expiry_Month_and_Year_Dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Enter_the_CVV_Number_in_CVV_number_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Click_Book_Now_Button_And_It_Navigate_to_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 35,
  "name": "User Check the Booking Information in Booking Confirmation Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-check-the-booking-information-in-booking-confirmation-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@logOut"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "user Click the Logout Button And It Navigate to Logout Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Click_the_Logout_Button_And_It_Navigate_to_Logout_Page()"
});
formatter.result({
  "duration": 497260700,
  "status": "passed"
});
});