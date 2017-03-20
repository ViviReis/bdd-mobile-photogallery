package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;

public class AuthenticationPage {
	private WebDriver driver;

	public AuthenticationPage(WebDriver _driver){
		this.driver = _driver;
	}

	public void UserAuthentication(String username, String password) throws NoSuchElementException{
	{              
		this.driver.findElement(By.id("inputUsername")).clear();
		this.driver.findElement(By.id("inputUsername")).sendKeys("teste01"); 
	    this.driver.findElement(By.id("inputPassword")).clear();
	    this.driver.findElement(By.id("inputPassword")).sendKeys("Dafiti@123");     
	    this.driver.findElement(By.xpath("//button[@type='submit']")).click();
	}
  }
}