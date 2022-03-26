import * as firebaseFunctions from "firebase-functions";
import * as express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
  res.send("Gitlab deployment notification");
});

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const gitlabDeployNofiApi = firebaseFunctions.https.onRequest(app);
