const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_SUBMISSIONS_KEY);

export default function handler(req, res) {
  const formData = JSON.parse(req.body);
  const { fullName, email, org, select, file } = formData;
  const message = `Hello ${fullName}!\r\n
                   This is to confirm your registration for the 2018 IDAS International Conference happening on November 24-25 at National Chengchi University.
                  `;
  mail
    .send({
      to: email,
      from: 'idasconf2018@protonmail.com',
      subject: `Thank you for submitting your Paper!`,
      text: message,
    })
    .then(() => {
      console.log('Email sent');
      res.status(200).json({ status: 'ok', body: req.body });
    })
    .catch((err) => {
      res.json(err);
      res.status(405).end();
    });
}
