import * as chromeLauncher from "chrome-launcher";

export const judgeWebApp = async (url: string) => {
  const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });
  const lighthouse = (await import("lighthouse")).default;

  return lighthouse(
    url,
    {
      logLevel: "info",
      port: chrome.port,
    },
    {
      extends: "lighthouse:default",
      settings: {
        locale: "ko",
        onlyCategories: ["accessibility"],
      },
    }
  );
};
