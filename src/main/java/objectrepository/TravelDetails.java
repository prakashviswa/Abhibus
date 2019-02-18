package objectrepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import stepdefinition.Hook;

public class TravelDetails {
	public TravelDetails() {
		PageFactory.initElements(Hook.driver, this);
	}

	@FindBy(id = "source")
	private WebElement from_src;

	@FindBy(id = "destination")
	private WebElement going_To;

	@FindBy(id = "datepicker1")
	private WebElement journey_Click;

	@FindBy(xpath="//div[@id=\"tomorrowdiv\"]")
	private WebElement journey_Date;

	@FindBy(xpath="//a[@title='Search Buses']")
	private WebElement search_Button;

	public WebElement getFrom_src() {
		return from_src;
	}

	public WebElement getGoing_To() {
		return going_To;
	}

	public WebElement getJourney_Click() {
		return journey_Click;
	}

	public WebElement getJourney_Date() {
		return journey_Date;
	}

	public WebElement getSearch_Button() {
		return search_Button;
	}
	
	
	@FindBy(id="datepicker2")
	private WebElement returnDate_Click;
	
	@FindBy(xpath="//a[text()='27']")
	private WebElement return_Date;

	public WebElement getReturnDate_Click() {
		return returnDate_Click;
	}

	public WebElement getReturn_Date() {
		return return_Date;
	}

	
}
