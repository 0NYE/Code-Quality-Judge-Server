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

export const nedlessLhrProperties = [
  "lighthouseVersion",
  "requestedUrl",
  "mainDocumentUrl",
  "finalDisplayedUrl",
  "finalUrl",
  "fetchTime",
  "gatherMode",
  "runWarnings",
  "userAgent",
  "environment",
  "categoryGroups",
  "stackPacks",
  "fullPageScreenshot",
  "timing",
  "i18n",
  "icuMessagePaths",
  "configSettings",
  "entities",
];

export const lhrAuditKoreanTranslate = {
  "custom-controls-labels": {
    title: "커스텀 컨트롤들은 연관된 라벨을 가지고 있음",
    description: "상호작용 가능한 커스텀 컨트롤들은 aria-label 혹은 aria-labelledby를 이용한 연관된 라벨을 가지고 있어야 합니다. [커스텀 컨트롤과 라벨에 관해 알아보기](https://developer.chrome.com/docs/lighthouse/accessibility/custom-controls-labels/) ",
  },
  "custom-controls-roles": {
    title: "커스텀 컨트롤들이 ARIA 역할을 가지고 있음",
    description: "상호작용 가능한 커스텀 컨트롤들은 적절한 ARIA 역할을 가지고 있어야 합니다. [커스텀 컨트롤에 역할을 부여하는 방법에 대해 알아보기](https://developer.chrome.com/docs/lighthouse/accessibility/custom-control-roles/)",
  },
  "focus-traps": {
    title: "사용자 포커스가 특정한 영역에 갇히지 않음",
    description: "사용자는 특정한 컨트롤에 갇히지 않고 어떠한 컨트롤이나 영역으로 tab할 수 있어야 합니다. [포커스 갇힘을 피하는 방법에 대해 알아보기](https://developer.chrome.com/docs/lighthouse/accessibility/focus-traps/)",
  },
  "focusable-controls": {
    title: "상호작용 가능한 컨트롤들을 키보드를 이용해 포커스할 수 있음",
    description: "커스텀 상호작용 가능한 컨트롤들을 키보드로 포커스할 수 있어야 합니다. [커스텀 컨트롤을 포커스 가능하도록 하는 방법에 대해 알아보기](https://developer.chrome.com/docs/lighthouse/accessibility/focusable-controls/)",
  },
  "interactive-element-affordance": {
    title: "상호작용 가능한 요소들이 목적과 상태를 나타냄",
    description: "링크와 버튼같은 상호작용 가능한 요소들은 그들의 상태를 나타내야 하며, 다른 상호작용 불가능한 요소와 구별 가능해야 합니다. [어포던스 힌트를 이용해 상호작용 가능한 요소를 장식하는 방법에 대해 알아보기](https://developer.chrome.com/docs/lighthouse/accessibility/interactive-element-affordance/)",
  },
  "logical-tab-order": {
    title: "페이지가 논리적 탭 순서를 가지고 있음",
    description: "탭을 이용해 페이지 내부를 이동하는 것은 시각적 레이아웃을 따라야 합니다. 사용자는 화면에 나오지 않는 요소에 집중할 수 없습니다. [논리적 탭 순서에 대해 알아보기](https://developer.chrome.com/docs/lighthouse/accessibility/logical-tab-order/)",
  },
  "managed-focus": {
    title: "사용자의 포커스가 페이지에 추가된 새로운 컨텐츠를 가리킴",
    description: "다이얼로그같은 새로운 컨텐츠가 페이지에 추가되었을 때, 사용자의 포커스는 해당 컨텐츠를 향해야 합니다. [새로운 컨텐츠에 포커스를 주는 방법 알아보기](https://developer.chrome.com/docs/lighthouse/accessibility/managed-focus/)",
  },
  "offscreen-content-hidden": {
    title: "화면에 표시되지 않는 컨텐츠가 보조 기술로부터 숨겨짐",
    description: "화면에 표시되지 않는 컨텐츠는 display: none 혹은 aria-hidden=true를 이용해 숨겨져야 합니다. [오프스크린 컨텐츠를 적절히 숨기는 방법에 대해 알아보기](https://developer.chrome.com/docs/lighthouse/accessibility/offscreen-content-hidden/)",
  },
  "use-landmarks": {
    title: "HTML5 랜드마크 요소가 사용됨",
    description: "랜드마크 요소(`<main>`, `<nav>` 등)들은 보조 기술의 키보드 네비게이션을 개선하는데 쓰입니다. [랜드마크 요소에 대해 알아보기](https://developer.chrome.com/docs/lighthouse/accessibility/use-landmarks/)",
  },
  "visual-order-follows-dom": {
    title: "페이지의 시각적 순서가 DOM 순서를 따름",
    description: "DOM 순서와 시각적 순서가 일치하면, 보조 기술의 네비게이션을 개선할 수 있습니다. [DOM과 시각적 순서에 대해 알아보기](https://developer.chrome.com/docs/lighthouse/accessibility/visual-order-follows-dom/)",
  },
} 