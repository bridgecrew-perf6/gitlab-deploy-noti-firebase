import * as firebaseFunctions from "firebase-functions";

const firebaseConfig = firebaseFunctions.config();

export default {
  hangout: {
    web_hook: firebaseConfig.env.HANGOUT_WEB_HOOK,
  },
};
