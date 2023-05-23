import * as chromeLauncher from "chrome-launcher";

import { lighthouseConfig } from "@/constants/lighthouse";

export const judgeWebAppLighthouse = async (url: string) => {
  const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });
  const lighthouse = (await import("lighthouse")).default;

  return (await lighthouse(
    url,
    {
      logLevel: "info",
      port: chrome.port,
    },
    lighthouseConfig,
  ))?.lhr;

  
};
