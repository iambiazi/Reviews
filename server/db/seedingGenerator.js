// const csvWriter = require('csv-write-stream');
const responses = require('./seedingData.js').responses;
const maker = require('./seedingData.js').maker;
const items = require('./seedingData.js').items;
const faker = require('faker');
const fs = require('fs');
// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// const jsonfile = require('jsonfile');
const stringify = require('csv-stringify');


let count = 0;
let prodId = 0;
let used = {};
let reviewCount = 0;
let reviewTotal = 0;

const makerLen = maker.length;
const itemsLen = items.length;
const responsesLen = 42;

let product = '';

let responseIdx = 0;

const rando = num => Math.floor(Math.random() * num);

const bellcurveNumber = (min, max) => {
  let result = 0;
  for (let i = 0; i < 3; i++) {
    result += faker.random.number({ max, min });
  }
  result = Math.round(result / 3);

  return result;
};

const boolean = () => rando(10) < 7;

const seed = Array.from({ length: 10 }, () => {
  if (reviewCount === reviewTotal) {
    reviewCount = 0;
    reviewTotal = rando(5) + 8;
    ++prodId;
    product = `${maker[rando(makerLen)]} ${items[rando(itemsLen)]}`;
  }

  let idx = rando(responsesLen);
  while (used.hasOwnProperty(idx.toString())) {
    idx++;
    if (idx > 41) {
      idx = 0;
    }
  }
  used[idx] = 1;
  responseIdx = idx;

  ++reviewCount;


  const body = responses(product, responseIdx);


  const review = {
    id: ++count,
    product_id: prodId,
    rating: bellcurveNumber(1, 5),
    reviewer: faker.name.findName(),
    title: product,
    body,
    recommend: boolean(),
    helpful: faker.random.number(47),
    unhelpful: faker.random.number(22),
    posting_date: faker.date.past(5),
  };

  if (count % 42 === 0) {
    used = {};
  }

  return review;
});

stringify(seed, (err, output) => {
  fs.writeFile('data0.csv', output, err => {
    if (err) {
      return console.error(err);
    }
    console.log('csv created!');
  });
});
// const csvWriter = createCsvWriter({
//   path: 'data0.csv',
//   append: true,
// });
//
// csvWriter.writeRecords(seed)
//   .then(() => {
//       console.log('...wrote csv file');
//   });

//
// const file = fs.createWriteStream('text.js');
// file.on('error', err => { console.log(err); });
// seed.forEach(v => {
//   file.write(`${v}`);
// });
// file.end();
// file.on('finish', () => {
// });


//
// jsonfile.writeFile('seed0.json', seed, function (err) {
//   if (err) console.error(err);
// });
