package stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "features//abhibus.feature", glue = { "stepdefinition" }, plugin = {
		"html:target" }, monochrome = true, dryRun = false)

public class TestRunnerReturn {

	
}
