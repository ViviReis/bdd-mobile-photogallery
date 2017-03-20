package com.globo;

import java.util.HashMap;
import java.util.Map;

import org.json.JSONArray;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import com.globo.pages.HomePage;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.*;
import util.EvidenceSteps;
import util.LinkManager;
import util.MobileEmulation;
import util.PageManager;
import util.StepSupport;
import org.openqa.selenium.remote.DesiredCapabilities;

public class FeatureSteps {
	private WebDriver driver;
	private String baseUrl;

	private LinkManager link;
	private PageManager pgManager;
	private StepSupport stepSupport;
	private HomePage home;
	private EvidenceSteps evidenceSteps;
	private MobileEmulation mobile;
	private Scenario scenario;
	private FotogaleriasPage fotogaleria;

	@Given("^that I'm at \"(.*?)\" url$")
	public void that_i_am_at_url(String baseUrl) throws Throwable {
		this.baseUrl = baseUrl;
		this.pgManager.NavegateTo(baseUrl);
		this.evidenceSteps.takeAPrint(this.scenario.getName(), "that_i_am_at_url");
	}
	
	@Given("^I see \"(.*?)\"$")
	public void i_see_six_photogallery_recommended1(String element) throws Throwable {
		this.fotogaleria.isElementPresent(element);
		this.evidenceSteps.takeAPrint(this.scenario.getName(), "i_see_six_photogallery_recommended");
	}
	
	@Given("^I see the option \"(.*?)\" selected$")
	public void i_see_option_selected(String value) throws Throwable {
		this.fotogaleria.containsValue(value);
		this.evidenceSteps.takeAPrint(this.scenario.getName(), "i_see_option" + value + "selected");
	}

	@Given("^I click on button \"(.*?)\" in \"(.*?)\"$")
	public void i_click_on_button_in(String buttonName, String pageName) throws Throwable {
		switch (pageName) {
		case "Notification":
			this.fotogaleria.ClickButton(buttonName);
			break;
			
		case "Recommended":
			this.fotogaleria.ClickButton(buttonName);
			break;
		
		case "Mais Vistas":
			this.fotogaleria.ClickButton(buttonName);
			break;
			

		}

		this.evidenceSteps.takeAPrint(this.scenario.getName(), "i_click_on_button_" + buttonName + "_in_" + pageName);
	}

	@Given("^I wait for \"(.*?)\" page to load$")
	public void i_wait_for_page_to_load(String pageName) throws Exception {
		this.pgManager.WaitPageToLoad(pageName);
		this.evidenceSteps.takeAPrint(this.scenario.getName(), "i_wait_for_page_to_load_" + pageName);
	}

	@Before
	public void beforeScenario(Scenario _scenario) {
		// this.mobile = new MobileEmulation();
		// this.driver = new ChromeDriver();
		// this.driver.manage().window().maximize();

		Map<String, String> mobileEmulation = new HashMap<String, String>();
		mobileEmulation.put("deviceName", "Apple iPad");
		Map<String, Object> chromeOptions = new HashMap<String, Object>();
		chromeOptions.put("mobileEmulation", mobileEmulation);
		DesiredCapabilities capabilities = DesiredCapabilities.chrome();
		capabilities.setCapability(ChromeOptions.CAPABILITY, chromeOptions);
		this.driver = new ChromeDriver(capabilities);
		this.driver.manage().window().maximize();

		this.stepSupport = new StepSupport(this.driver);
		this.link = new LinkManager(this.driver);
		this.pgManager = new PageManager(this.driver);
		this.home = new HomePage(this.driver);
		this.fotogaleria = new FotogaleriasPage(this.driver);
		this.evidenceSteps = new EvidenceSteps("~/Evidences/", driver);
		this.scenario = _scenario;

	}

	@After
	public void afterScenario() {
		this.driver.quit();
	}
}