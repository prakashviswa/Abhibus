package stepdefinition;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import objectrepository.TravelDetails;

public class TravelDetailsSteps {

	@Given("The user is in home page")
	public void the_user_is_in_home_page() {
		Hook.driver.get("https://www.abhibus.com/");
	}

	@Given("The user enter all deatils {string},{string}")
	public void the_user_enter_all_deatils(String Source, String Destination) throws AWTException {
		TravelDetails travel = new TravelDetails();
		Robot r = new Robot();
		travel.getFrom_src().sendKeys(Source);
		r.keyPress(KeyEvent.VK_ENTER);
		r.keyRelease(KeyEvent.VK_ENTER);

		travel.getGoing_To().sendKeys(Destination);
		r.keyPress(KeyEvent.VK_ENTER);
		r.keyRelease(KeyEvent.VK_ENTER);

	}

	@When("Click the search button")
	public void click_the_search_button() throws InterruptedException {
		TravelDetails travel = new TravelDetails();
		Thread.sleep(2000);
		travel.getJourney_Click().click();
		Thread.sleep(2000);
		travel.getJourney_Date().click();
	}

}
