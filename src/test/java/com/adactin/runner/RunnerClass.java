package com.adactin.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src//test//java//com//adactin//feature", 
glue="com.adactin.stepdefinition",
monochrome = true, //special characters remove
dryRun = false,  //
strict = true,  //Exception throw
tags = "@loginPage",
plugin = {"html:Reports/Html_Report",
		"pretty",
		"json:Reports/Json_Report.json",
		"com.cucumber.listener.ExtentCucumberFormatter:Reports/Extent_Report.html"
})

public class RunnerClass {

	public static WebDriver driver;

	@BeforeClass
	public static void BrowserLaunch() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\admin\\eclipse-workspace\\Adactin_Cucumber\\ChromeDriver\\chromedriver.exe");
		driver = new ChromeDriver();

		driver.manage().window().maximize();
	}

	@AfterClass
	public static void BrowserClose() {
		driver.close();
	}
}
