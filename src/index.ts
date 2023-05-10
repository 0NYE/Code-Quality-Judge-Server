import cors from "cors";
import express, { Request, Response } from "express";

const app = express();

app.use(cors());

app.get("*", (req: Request, res: Response) => {
  res.status(404).send("not found");
});

app.listen("3000", () => {
  console.log(`Server listening on port: 3000`);
});
