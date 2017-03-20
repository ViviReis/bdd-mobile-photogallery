package util;

import java.io.File;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

public class EvidenceSteps {
	private WebDriver driver;
	private String basePath;
	private File file; 
	
	public EvidenceSteps(String _basePath, WebDriver _driver){
		this.driver = _driver;
		this.basePath = _basePath;
		this.file = new File(this.basePath);
		this.file.mkdir();
	}
	
	public void takeAPrint(String stepPath, String stepScreen) throws Exception{
		File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(scrFile, new File(this.basePath+stepPath+"/"+stepScreen+".png"));
	}
}