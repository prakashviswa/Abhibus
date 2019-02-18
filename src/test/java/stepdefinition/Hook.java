package stepdefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hook {
	public static WebDriver driver;

	@Before()
	public static void beforeMethod() {
		
		System.setProperty("webdriver.chrome.driver",
				"D:\\Users\\teslaram\\seleniumNewWork\\SeleniumStartUp\\Driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		System.out.println("before method");
	}

	@After
	public static void afterMethod() {
		System.out.println("after method");
		driver.close();
		driver.quit();
		
	}
}
