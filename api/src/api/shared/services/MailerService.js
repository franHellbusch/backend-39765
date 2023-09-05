import sgMail from "@sendgrid/mail";
import config from "../config/config.js";

class MailerService {
  constructor() {
    sgMail.setApiKey(config.sendgrid.apiKey);
  }

  async sendEmail({ to, subject, text, html = null }) {
    const msg = {
      from: `Ecommerce api <${config.sendgrid.verifyUserEmail}>`,
      to,
      subject,
      text,
    };

    if (html) {
      msg.html = html;
    }

    return await sgMail.send(msg);
  }
}

export const mailerService = new MailerService();
