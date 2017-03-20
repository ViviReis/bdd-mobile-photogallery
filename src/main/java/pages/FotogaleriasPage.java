package pages;

import java.util.UUID;

import javax.swing.SwingConstants;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.By.ById;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import com.google.common.base.Verify;

public class FotogaleriasPage {
	private WebDriver driver;

	public FotogaleriasPage(WebDriver _driver) {
		this.driver = _driver;
	}

	public void ClickButton(String buttonName) throws NoSuchElementException, InterruptedException {
		switch (buttonName) {

		case "Não, obrigado":
			this.driver.findElement(By.id("onesignal-popover-cancel-button")).click();
			break;

		case "Velas ao Mar":
			this.driver.findElement(By.cssSelector("#photoGallery > div > div > div.large-12.columns > ul > li:nth-child(1)")).click();
			break;

		case "Primeira opção":
			this.driver.findElement(By.cssSelector("div.popular > ul > li > a > span.label")).click();
			break;

		default:
			throw new NoSuchElementException("Button ' " + buttonName + " ' not found");
		}
	}

	public void isElementPresent(String element) {
		switch (element) {
		case "Recommended 1":
			element = "#photoGallery > div > div > div.large-12.columns > ul > li:nth-child(1)";
			break;
			
		case "Recommended 2":
			element = "#photoGallery > div > div > div.large-12.columns > ul > li:nth-child(2)";
			break;

		case "Recommended 3":
			element = "#photoGallery > div > div > div.large-12.columns > ul > li:nth-child(3)";
			break;
			
		case "Recommended 4":
			element = "#photoGallery > div > div > div.large-12.columns > ul > li:nth-child(4)";
			break;
			
		case "Recommended 5":
			element = "#photoGallery > div > div > div.large-12.columns > ul > li:nth-child(5)";
			break;
			
		case "Recommended 6":
			element = "#photoGallery > div > div > div.large-12.columns > ul > li:nth-child(6)";
			break;
			
		case "More Views 1":
			element = "#photoGallery > div > div > div.large-4.columns > div.popular > ul > li:nth-child(1)";
			break;
			
		case "More Views 2":
			element = "#photoGallery > div > div > div.large-12.columns > ul > li:nth-child(2)";
			break;

		case "More Views 3":
			element = "#photoGallery > div > div > div.large-4.columns > div.popular > ul > li:nth-child(3)";
			break;
		
		}
		try {

			this.driver.findElement(By.cssSelector(element));
			System.out.println("Element exists");
		} catch (NoSuchElementException e) {
			System.out.println("Element not exist");
		}
	}
	
	public void containsValue(String value) {
		switch (value) {

		case "Todas":
			"selectEditorias".contains("Todas");
			break;
		}			
	}
}