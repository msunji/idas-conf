import postAirtableData from '../../utils/postAirtableData';
import sendMail from '../../utils/sendMail';

export default async function handler(req, res) {
  try {
    const { fullName, email } = req.body;
    await sendMail(
      fullName,
      email,
      process.env.SENDGRID_REGISTRATION_TEMPLATE,
      'IDAS Conference Registration Confirmation'
    );
    await postAirtableData(process.env.REGISTRATION_TAB, {
      'Full Name': fullName,
      Email: email,
    });
    res.status(200).json({ status: 'ok', body: req.body });
  } catch (err) {
    res.status(450).json({ status: 'error', error: err.message });
  }
}
