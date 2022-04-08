import postAirtableData from '../../utils/postAirtableData';
import sendMail from '../../utils/sendMail';

const Airtable = require('airtable');

Airtable.configure({ apiKey: process.env.AIRTABLE_API_KEY });
const base = Airtable.base(process.env.BASE_ID);

export default function handler(req, res) {
  try {
    const { fullName, email } = req.body;
    let table = base('Registration');
    table.create(
      {
        'Full Name': fullName,
        Email: email,
      },
      (err) => {
        if (err) {
          console.error(err);
        }
        return;
      }
    );
    sendMail(
      fullName,
      email,
      process.env.SENDGRID_REGISTRATION_TEMPLATE,
      'IDAS Conference Registration Confirmation'
    );
    res.status(200).json({ status: 'ok', body: req.body });
  } catch (err) {
    console.log(err);
    res.status(450).json({ status: 'error', error: err.message });
  }
}
