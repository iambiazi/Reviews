const express = require('express');
const path = require('path');
const mariadb = require('mariadb/callback');
const bodyParser = require('body-parser');
const compression = require('compression');


// const db = new Pool({
//   database: 'reviews',
//   user: 'root',
//   // host: 'aa15assqptfmqma.cbw37qud69pj.us-west-2.rds.amazonaws.com',
//   // port: '5432',
// });

const conn = mariadb.createConnection({
  database: 'reviews',
  user:'root',
  password: '',
});



const app = express();
app.use(compression());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  res.header('Access-Control-Allow-Methods', 'PUT');
  next();
});
app.use(express.static(`${__dirname}./../client/dist`, { maxAge: '365d' }));
app.use(bodyParser.json());

app.get('/product/:productId', (req, res) => {
  if (req.params.productId === 'random') {
    res.redirect(`/product/${Math.floor(Math.random() * 100) + 1}`);
  } else {
    const options = {
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'public, max-age=300',
      },
    };
    const file = path.join(`${__dirname}./../client/dist/index.html`);
    res.sendFile(file, options);
  }
});

app.post('/reviews/:productsId', (req, res) => {

  const {id, product_id, rating, reviewer, title, body, recommend, helpful, unhelpful, posting_date} = req.body;
  conn.query(`INSERT INTO reviews (id, product_id, rating, reviewer, title, body, recommend, helpful, unhelpful, posting_date) VALUES (${id}, ${product_id}, ${rating}, "${reviewer}", "${title}", "${body}", ${recommend}, ${helpful}, ${unhelpful}, "${posting_date}")`, (err, data) => {
    if (err) {
      res.status(404).send('problem with insert');
    }
    res.send(data);
  });
});

app.get('/reviews/:productId', (req, res) => {

  conn.query(`SELECT * FROM reviews WHERE product_id=${req.params.productId};`, (err, rows) => {
    if (err) {
      res.status(404).send('No data found for that product');
    } else {
      res.send(rows);
    }
  });

});

app.put('/reviews/:productId', (req, res) => {
  const { reviewId, updatedCol, newValue } = req.body;
  conn.query(
    `UPDATE reviews
     SET ${updatedCol} = ${newValue}
     WHERE id = ${reviewId}`,
  ).then(() => {
    res.send('Update saved');
  });
});

module.exports = { app, conn };

