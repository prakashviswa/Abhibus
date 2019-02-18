package objectrepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import stepdefinition.Hook;

public class ValidationPage {
	public ValidationPage() {
		PageFactory.initElements(Hook.driver, this);
	}

	@FindBy(id="SubHeadJrney")
	private WebElement validation_Page;

	public WebElement getValidation_Page() {
		return validation_Page;
	}

}
