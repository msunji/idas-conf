const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_REGISTRATION_KEY);

const sendMail = (nameInput, emailInput, templateId, msgSubject) => {
  const message = {
    to: emailInput,
    from: 'idasconf2018@protonmail.com',
    templateId: templateId,
    subject: msgSubject,
    dynamic_template_data: {
      fullName: nameInput,
      email: emailInput,
    },
  };
  mail
    .send(message)
    .then(() => {
      console.log('Email sent');
    })
    .catch((err) => {
      console.error(err);
    });
};

export default sendMail;
