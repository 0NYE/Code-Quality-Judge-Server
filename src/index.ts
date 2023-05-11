import * as fs from "fs";

import cors from "cors";
import express, { Request, Response } from "express";

import judgeRouter from "@/routers/judgeRouter";

const webpappFolderPath = "./webapp";
if (!fs.existsSync(webpappFolderPath)) {
  fs.mkdirSync(webpappFolderPath);
}

const app = express();

app.use(cors());

app.use("/api/judge", judgeRouter)

app.get("*", (req: Request, res: Response) => {
  res.status(404).send("not found");
});

app.listen("3000", () => {
  console.log(`Server listening on port: 3000`);
});
