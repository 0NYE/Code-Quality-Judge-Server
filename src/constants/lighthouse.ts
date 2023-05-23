// eslint-disable-next-line import/named
import { Config } from "lighthouse";

export const lighthouseConfig: Config = {
  extends: "lighthouse:default",
  settings: {
    locale: "ko",
    onlyCategories: ["accessibility"],
  },
};
