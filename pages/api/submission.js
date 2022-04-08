import middleware from '../../middleware/middleware';
import nc from 'next-connect';
import postAirtableData from '../../utils/postAirtableData';
import sendMail from '../../utils/sendMail';

function onError(err, req, res, next) {
  console.error(err);
  res.status(500).end(err.toString());
  next();
}

const handler = nc({ onError })
  .use(middleware)
  .post(async (req, res) => {
    try {
      const { fullName, email, org, select } = req.body;
      let airtableData = {
        'Full Name': fullName,
        Email: email,
        Organization: org,
        Theme: select,
      };

      sendMail(
        fullName,
        email,
        process.env.SENDGRID_SUBMISSIONS_TEMPLATE,
        'IDAS Conference Abstract Submission Confirmation'
      );
      postAirtableData(process.env.SUBMISSIONS_TAB, airtableData);
      res.status(200).json({ status: 'ok', body: req.body });
    } catch (err) {
      res.status(450).json({ status: 'error', error: err.message });
    }
  });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
