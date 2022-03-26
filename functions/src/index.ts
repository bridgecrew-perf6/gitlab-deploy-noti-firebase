import * as firebaseFunctions from "firebase-functions";
import * as express from "express";
import router from "./router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(router);

app.get("/", (req, res) => {
  res.send("Gitlab deployment notification firebase");
});

export const api = firebaseFunctions
    .region("asia-southeast1")
    .https.onRequest(app);
