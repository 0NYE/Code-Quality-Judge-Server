import fs from "fs";

import * as chromeLauncher from "chrome-launcher";
import { Request, Response } from "express";

export const judgeWebApp = async (req: Request, res: Response) => {
  const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });
  const lighthouse = (await import("lighthouse")).default;
  
  const runnerResult = await lighthouse(`http://localhost:3000/${req.id}.html`, {
    logLevel: "info",
    port: chrome.port,
  }, {
    extends: "lighthouse:default",
    settings: {
      locale: "ko",
      onlyCategories: ["accessibility"],
    }
  });

  if (!runnerResult) {
    return res.status(500).json({
      result: "fail",
    })
  } 

  return res.status(200).json({
    result: "sucess",
    report: JSON.stringify(runnerResult.lhr),
  })
};
