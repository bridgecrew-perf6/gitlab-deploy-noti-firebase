import axios from "axios";
import config from "../../config";

export class HangoutNotification {
  webHookUrl: string;

  constructor() {
    this.webHookUrl = config.hangout.web_hook;
  }

  async sendMessage(message: string, threadKey?: string) {
    if (!this.webHookUrl) {
      return;
    }

    let url = this.webHookUrl;
    if (threadKey) {
      url += "&threadKey=" + threadKey;
    }

    axios.post(url, {text: message});
  }
}

export const hangoutNotification = new HangoutNotification();
