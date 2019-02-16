package stepdefinition;


import cucumber.api.java.en.Then;
import junit.framework.Assert;
import objectrepository.ValidationPage;

public class ValidationPageSteps {

	@Then("Validate the outcomes")
	public void validate_the_outcomes() {
		ValidationPage page = new ValidationPage();
		Assert.assertTrue(page.getValidation_Page().isDisplayed());

	}
}
