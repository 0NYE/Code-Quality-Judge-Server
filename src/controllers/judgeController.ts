import * as fs from "fs";

import { Request, Response } from "express";

import * as JudgeService from "@/services/judgeService";

const fileTypes = ["html", "css", "js"];

export const judgeWebApp = async (req: Request, res: Response) => {
  const [lighthouseLhr, lighthouseReport] = await JudgeService.judgeWebAppLighthouse(
    `http://localhost:3000/${req.id}.html`
  );

  // 평가에 사용한 html, css, js 제거
  for (const fileType of fileTypes) {
    fs.unlink(`./webapp/${req.id}.${fileType}`, (err) => {
      if (err) console.log(`${req.id}.${fileType} 파일 제거 실패`);
    });
  }

  if (!lighthouseReport) {
    return res.status(500).json({
      result: "fail",
    });
  }

  return res.status(200).json({
    result: "sucess",
    report: JSON.stringify(lighthouseLhr),
    html: lighthouseReport,
  });
};
