import * as chromeLauncher from "chrome-launcher";
// eslint-disable-next-line import/named
import { Result } from "lighthouse";

import { lighthouseConfig, nedlessLhrProperties, lhrAuditKoreanTranslate } from "@/constants/lighthouse";

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

  // lhr 객체 정제
  if (lighthouseReport) {
    for (const lhrProperty of nedlessLhrProperties) {
      delete lighthouseReport[lhrProperty as keyof Result];
    }
  
    for (const auditId of Object.keys(lhrAuditKoreanTranslate)) {
      const { title, description } = lhrAuditKoreanTranslate[auditId as keyof typeof lhrAuditKoreanTranslate];
      lighthouseReport.audits[auditId].title = title;
      lighthouseReport.audits[auditId].description = description;
    }
  }

  return lighthouseReport;
};
