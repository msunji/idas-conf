const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_REGISTRATION_KEY);

export default function handler(req, res) {
  const { fullName, email } = req.body;
  const message = `Hello ${fullName}!\r\n
                   This is to confirm your registration for the 2018 IDAS International Conference happening on November 24-25 at National Chengchi University.
                  `;
  mail
    .send({
      to: email,
      from: 'idasconf2018@protonmail.com',
      subject: `You've successfully registered for the 2018 IDAS International Conference!`,
      text: message,
    })
    .then(() => {
      console.log('Email sent');
      res.status(200).json({ status: 'ok', body: req.body });
    })
    .catch((err) => {
      res.json(err);
      res.status(405);
    });
}
