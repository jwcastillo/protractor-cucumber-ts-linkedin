const { BeforeAll, After, Status } = require("cucumber");
import * as fs from "fs";
import { browser } from "protractor";
import { config } from "../config/config";

BeforeAll({timeout: 30 * 1000}, async () => {
    await browser.get(config.baseUrl);
});

//After(async function(scenario) {
//    if (scenario.result.status === Status.FAILED) {
//        // screenShot is a base-64 encoded PNG
//         const screenShot = await browser.takeScreenshot();
 //        this.attach(screenShot, "image/png");
 //   }
//});



//tomo la fotos en cualquier estado
After(async function(scenario) {
        // screenShot is a base-64 encoded PNG
     const screenShot = await browser.takeScreenshot();
     this.attach(screenShot, "image/png");
   
});