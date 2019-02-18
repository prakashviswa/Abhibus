package stepdefinition;


import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import cucumber.api.java.en.Given;
import objectrepository.TravelDetails;

public class TravelDetailsStepsReturn {

	@Given("The user enter all the details for return trip{string},{string}")
	public void the_user_enter_all_the_details_for_return_trip(String Source, String Destination) throws AWTException {
		TravelDetails travel = new TravelDetails();
		Robot r = new Robot();
		travel.getReturnDate_Click().sendKeys(Source);
		r.keyPress(KeyEvent.VK_ENTER);
		r.keyRelease(KeyEvent.VK_ENTER);

		travel.getSearch_Button().sendKeys(Destination);
		r.keyPress(KeyEvent.VK_ENTER);
		r.keyRelease(KeyEvent.VK_ENTER);

	}

}
