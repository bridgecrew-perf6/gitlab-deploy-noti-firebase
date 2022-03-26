export default {
  app: {
    someKey: process.env.SOME_KEY || "no key",
  },

  hangout: {
    web_hook: process.env.HANGOUT_WEB_HOOK,
  },
};
