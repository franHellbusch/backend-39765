import sgMail from "@sendgrid/mail";
import config from "../config/config.js";

export class MailerService {
  constructor() {
    sgMail.setApiKey(config.sendgrid.apiKey);
  }

  async sendEmail({ to, subject, template, templateData }) {
    const msg = {
      from: `SuperMarket <${config.sendgrid.verifyUserEmail}>`,
      to,
      subject,
      templateId: template,
      dynamic_template_data: templateData,
    };

    return await sgMail.send(msg);
  }
}
