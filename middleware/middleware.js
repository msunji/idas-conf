import nc from 'next-connect';
import formidable from 'formidable';

function onError(err, req, res, next) {
  console.error(err);
  res.status(500).end(err.toString());
  next();
}

const middleware = nc({ onError });

middleware.use((req, res, next) => {
  let form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    if (!err) {
      req.body = fields;
      req.files = files;
    }
    next();
  });
});

export default middleware;
