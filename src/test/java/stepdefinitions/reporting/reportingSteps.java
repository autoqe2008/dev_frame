package stepdefinitions.reporting;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import properties.MainRunner;

public class reportingSteps extends MainRunner{

    WebDriver driver = new ChromeDriver();

    @Given("^I navigated to home page$")
    public void i_navigated_to_home_page() throws Throwable {
        driver.get("http://osi-odoo.westus.cloudapp.azure.com/web/login?redirect=http%3A%2F%2Fosi-odoo.westus.cloudapp.azure.com%2Fweb%3F");
    }

    @And("^I login using \"([^\"]*)\" and \"([^\"]*)\" on login page$")
    public void i_login_using_and_on_login_page(String arg1, String arg2) throws Throwable {
        driver.findElement(By.id("login")).sendKeys("cchandragiri");
        driver.findElement(By.id("password")).sendKeys("a");
        JavascriptExecutor js = (JavascriptExecutor) driver;
        driver.findElement(By.className("btn")).sendKeys(Keys.ENTER);
        System.out.println("Hello just for reports");
    }

}
