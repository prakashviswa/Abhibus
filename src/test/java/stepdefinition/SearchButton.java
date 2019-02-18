package stepdefinition;

import cucumber.api.java.en.When;
import objectrepository.TravelDetails;

public class SearchButton {

	@When("The user click the search button")
	public void the_user_click_the_search_button() throws InterruptedException {
		TravelDetails travel = new TravelDetails();

		travel.getJourney_Click().click();
		Thread.sleep(2000);
		travel.getJourney_Date().click();
		Thread.sleep(3000);
		travel.getSearch_Button().click();
		Thread.sleep(3000);

	}
}
