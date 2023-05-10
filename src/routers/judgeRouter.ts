import express from "express";
import multer from "multer";

import { judgeWebApp } from "@/controllers/judgeController";

const judgeRouter = express.Router();

const webappMulter = multer({
  dest: "webapp/",
});

const webappFields = webappMulter.fields([
  { name: "html", maxCount: 1 },
  { name: "css", maxCount: 1 },
  { name: "js", maxCount: 1 },
]);

judgeRouter.post("/", webappFields, judgeWebApp);

export default judgeRouter;
