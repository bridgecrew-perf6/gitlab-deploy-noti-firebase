import * as firebaseFunctions from "firebase-functions";
import * as express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
  res.send("Gitlab deployment notification");
});

export const api = firebaseFunctions
    .region("asia-southeast1")
    .https.onRequest(app);
