import { Request, Response } from "express";

export const judgeWebApp = (req: Request, res: Response) => {
  res.status(200).json({
    result: "your code is good",
  })
};
