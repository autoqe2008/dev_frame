$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/frameworkDev/src/main/resources/features/reporting.feature");
formatter.feature({
  "line": 1,
  "name": "Automation code to enter Time sheets of Odoo.",
  "description": "",
  "id": "automation-code-to-enter-time-sheets-of-odoo.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verify user entered his time sheets or not for current week",
  "description": "",
  "id": "automation-code-to-enter-time-sheets-of-odoo.;verify-user-entered-his-time-sheets-or-not-for-current-week",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigated to home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I login using \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" on login page",
  "keyword": "And "
});
formatter.examples({
  "line": 6,
  "name": "",
  "description": "",
  "id": "automation-code-to-enter-time-sheets-of-odoo.;verify-user-entered-his-time-sheets-or-not-for-current-week;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 7,
      "id": "automation-code-to-enter-time-sheets-of-odoo.;verify-user-entered-his-time-sheets-or-not-for-current-week;;1"
    },
    {
      "cells": [
        "cchandragiri",
        "a"
      ],
      "line": 8,
      "id": "automation-code-to-enter-time-sheets-of-odoo.;verify-user-entered-his-time-sheets-or-not-for-current-week;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 8,
  "name": "Verify user entered his time sheets or not for current week",
  "description": "",
  "id": "automation-code-to-enter-time-sheets-of-odoo.;verify-user-entered-his-time-sheets-or-not-for-current-week;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigated to home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I login using \"cchandragiri\" and \"a\" on login page",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "reportingSteps.i_navigated_to_home_page()"
});
formatter.result({
  "duration": 10863699287,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cchandragiri",
      "offset": 15
    },
    {
      "val": "a",
      "offset": 34
    }
  ],
  "location": "reportingSteps.i_login_using_and_on_login_page(String,String)"
});
formatter.result({
  "duration": 65842417068,
  "status": "passed"
});
});