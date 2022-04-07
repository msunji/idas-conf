const Airtable = require('airtable');

Airtable.configure({ apiKey: process.env.AIRTABLE_API_KEY });
const base = Airtable.base(process.env.BASE_ID);

const postAirtableData = (tabName, formData) => {
  return new Promise((resolve, reject) => {
    let table = base(tabName);
    table.create(formData, (err) => {
      if (err) {
        console.error(err);
        reject(err);
      }
      resolve();
    });
  });
};

export default postAirtableData;
