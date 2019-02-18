package stepdefinition;

import cucumber.api.java.en.Then;
import objectrepository.ValidationPage;

public class ValidationPageStepsReturn {

	@Then("The user validate the outcomes for return trip")
	public void the_user_validate_the_outcomes_for_return_trip() throws InterruptedException {
		ValidationPage page = new ValidationPage();
		System.out.println(page.getValidation_Page().getText());

	}
}
