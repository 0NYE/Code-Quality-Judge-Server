import { RequestHandler } from "express";

import { uuidWithoutHyphen } from "@/utils/uid";

export const setRequestId: RequestHandler = (req, res, next) => {
  req.id = uuidWithoutHyphen();
  next();
};
