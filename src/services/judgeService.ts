import * as chromeLauncher from "chrome-launcher";
// eslint-disable-next-line import/named
import { Result } from "lighthouse";

import { lighthouseConfig, nedlessLhrProperties } from "@/constants/lighthouse";

export const judgeWebAppLighthouse = async (url: string) => {
  const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });
  const lighthouse = (await import("lighthouse")).default;

  const lighthouseReport = (await lighthouse(
    url,
    {
      logLevel: "info",
      port: chrome.port,
    },
    lighthouseConfig,
  ))?.lhr;

  if (lighthouseReport) {
    for (const lhrProperty of nedlessLhrProperties) {
      delete lighthouseReport[lhrProperty as keyof Result];
    }
  }

  return lighthouseReport;
};
