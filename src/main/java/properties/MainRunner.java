package properties;



import cucumber.api.cli.Main;

import java.io.IOException;
import java.util.ArrayList;

public class MainRunner {

    public static void main(String Args[]) throws IOException {
        MainRunner mn = new MainRunner();
        long startTime =  System.nanoTime();
        ArrayList<String> ae = mn.getScenarios();
        ae.add("--glue");
        ae.add("stepdefinitions.reporting");
        ae.add("--plugin");
        ae.add("html:target/cucumber-html-report");
        Main.run(ae.toArray(new String[mn.getScenarios().size()]),Thread.currentThread().getContextClassLoader());
    }

    private ArrayList<String> getScenarios()
    {
        ArrayList<String> ae = new ArrayList();
        String scenarios = getProperties().get(3).toString();
        ae.add(scenarios);
        String tags = getProperties().get(2).toString();
        return ae;
    }

    public static ArrayList getProperties()
    {
        ArrayList properties =  new ArrayList();
        properties.add(System.getenv("browser"));
        properties.add(System.getenv("website"));
        properties.add(System.getenv("tags"));
        properties.add(System.getenv("scenarios"));
        return properties;
    }


}
