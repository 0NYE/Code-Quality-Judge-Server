import express from "express";
import multer from "multer";

import { judgeWebApp } from "@/controllers/judgeController";
import { setRequestId } from "@/middlewares/id";

const judgeRouter = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "webapp");
  },
  filename: function (req, file, callback) {
    callback(null, `${req.id}.${file.fieldname}`);
  },
});

const webappMulter = multer({
  storage: storage,
});

const webappFields = webappMulter.fields([
  { name: "html", maxCount: 1 },
  { name: "css", maxCount: 1 },
  { name: "js", maxCount: 1 },
]);

judgeRouter.post("/", setRequestId, webappFields, judgeWebApp);

export default judgeRouter;
