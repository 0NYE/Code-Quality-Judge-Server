// eslint-disable-next-line import/named
import { Config } from "lighthouse";

export const lighthouseConfig: Config = {
  extends: "lighthouse:default",
  settings: {
    locale: "ko",
    onlyCategories: ["accessibility", "best-practices", "seo"],
    skipAudits: [
      "is-on-https",
      "viewport",
      "image-aspect-ratio",
      "image-size-responsive",
      "preload-fonts",
      "aria-hidden-body",
      "color-contrast",
      "document-title",
      "html-has-lang",
      "html-lang-valid",
      "meta-refresh",
      "meta-viewport",
      "valid-lang",
      "doctype",
      "charset",
      "geolocation-on-start",
      "js-libraries",
      "notification-on-start",
      "meta-description",
      "http-status-code",
      "font-size",
      "robots-txt",
      "tap-targets",
      "hreflang",
      "plugins",
      "canonical",
    ],
  },
};
