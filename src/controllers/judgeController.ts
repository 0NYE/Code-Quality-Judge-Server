import { Request, Response } from "express";

import * as JudgeService from "@/services/judgeService";

export const judgeWebApp = async (req: Request, res: Response) => {
  const lighthouseReport = await JudgeService.judgeWebAppLighthouse(`http://localhost:3000/${req.id}.html`);

  if (!lighthouseReport) {
    return res.status(500).json({
      result: "fail",
    })
  } 

  return res.status(200).json({
    result: "sucess",
    report: JSON.stringify(lighthouseReport),
  })
};
