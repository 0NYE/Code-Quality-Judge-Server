import * as chromeLauncher from "chrome-launcher";
// eslint-disable-next-line import/named
import { Result } from "lighthouse";

import { lighthouseConfig } from "@/constants/lighthouse";

export const judgeWebAppLighthouse = async (url: string) => {
  const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });
  const lighthouse = (await import("lighthouse")).default;

  const lighthouseReport = (await lighthouse(
    url,
    {
      logLevel: "info",
      output: "html",
      port: chrome.port,
    },
    lighthouseConfig,
  ))?.report;

  return lighthouseReport;
};
