import * as firebaseFunctions from "firebase-functions";

const firebaseConfig = firebaseFunctions.config();

export default {
  app: {
    someKey: firebaseConfig.env.SOME_KEY || "no key",
  },

  hangout: {
    web_hook: firebaseConfig.env.HANGOUT_WEB_HOOK,
  },
};
