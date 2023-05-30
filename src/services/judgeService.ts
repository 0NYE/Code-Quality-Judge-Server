import * as chromeLauncher from "chrome-launcher";
// eslint-disable-next-line import/named
import { Result } from "lighthouse";

import { lighthouseConfig, nedlessLhrProperties, lhrAuditKoreanTranslate } from "@/constants/lighthouse";

export const judgeWebAppLighthouse = async (url: string) => {
  const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });
  const lighthouse = (await import("lighthouse")).default;

  const result = (await lighthouse(
    url,
    {
      logLevel: "info",
      port: chrome.port,
    },
    lighthouseConfig,
  ));

  const lighthouseLhr = result?.lhr;
  const lighthouseReport = result?.report;

  if (!lighthouseLhr || !lighthouseReport) return [undefined, undefined];

  // lhr 객체 정제
  if (lighthouseLhr) {
    for (const lhrProperty of nedlessLhrProperties) {
      delete lighthouseLhr[lhrProperty as keyof Result];
    }
  
    for (const auditId of Object.keys(lhrAuditKoreanTranslate)) {
      const { title, description } = lhrAuditKoreanTranslate[auditId as keyof typeof lhrAuditKoreanTranslate];
      lighthouseLhr.audits[auditId].title = title;
      lighthouseLhr.audits[auditId].description = description;
    }
  }

  return [lighthouseLhr, lighthouseReport];
};
