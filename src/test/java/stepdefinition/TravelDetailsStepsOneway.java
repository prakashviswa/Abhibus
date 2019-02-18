package stepdefinition;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;

import cucumber.api.java.en.Given;
import objectrepository.TravelDetails;

public class TravelDetailsStepsOneway {

	@Given("The user is in home page")
	public void the_user_is_in_home_page() {
		Hook.driver.get("https://www.abhibus.com/");
	}

	@Given("The user enter all details for oneway trip {string},{string}")
	public void the_user_enter_all_details_for_oneway_trip(String Source, String Destination) throws AWTException {
		TravelDetails travel = new TravelDetails();
		Robot r = new Robot();
		travel.getFrom_src().sendKeys(Source);
		r.keyPress(KeyEvent.VK_ENTER);
		r.keyRelease(KeyEvent.VK_ENTER);

		travel.getGoing_To().sendKeys(Destination);
		r.keyPress(KeyEvent.VK_ENTER);
		r.keyRelease(KeyEvent.VK_ENTER);

	}

}
