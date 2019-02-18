package stepdefinition;

import cucumber.api.java.en.Then;
import objectrepository.ValidationPage;

public class ValidationPageStepsOneway {

	@Then("The user validate the outcomes")
	public void the_user_validate_the_outcomes() throws InterruptedException {
		ValidationPage page = new ValidationPage();
		System.out.println(page.getValidation_Page().getText());

	}
}
