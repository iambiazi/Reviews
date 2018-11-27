// const csvWriter = require('csv-write-stream');
const responses = require('./seedingData.js').responses;
const maker = require('./seedingData.js').maker;
const items = require('./seedingData.js').items;
const faker = require('faker');
const fs = require('fs');
const { Readable } = require('stream');
// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// const jsonfile = require('jsonfile');
// const stringify = require('csv-stringify/lib/sync');
// const { promisify } = require('util');
// const csvWriter = require('csv-write-stream');


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

const boolean = () => (rando(10) < 8 ? 1 : 0);


// const makePromises = (dataArr) => {
//   let count = 0;
//   const stream = fs.createWriteStream(`./csvFiles/data${count}.csv`);
//   return dataArr.map(data => {
//     return new Promise((res, rej) => {
//       stream.pipe(data);
//       stream.end();
//       res();
//     })
//   });
// };
//
// Promise.all(makePromises(makeFiles(2)));


//
//
// let writeFileAsync = promisify(fs.writeFile);
//
// let promised = [];
//
// let round;
// fs.readFile('./count.txt', 'utf-8', (err, data) => {
//   round = Number(data) + 1;
// });

let count = 0;

const makeEntry = fileCount => {

  ++count;

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

    let csvLine = '';
    csvLine += (count).toString() + ',';
    csvLine += prodId + ',';
    csvLine += bellcurveNumber(1, 5) + ',';
    csvLine += faker.name.findName() + ',';
    csvLine += product + ',';
    csvLine += '"' + body + '"' + ',';
    csvLine += boolean() + ',';
    csvLine += faker.random.number(47) + ',';
    csvLine += faker.random.number(22) + ',';
    csvLine += faker.date.past(5);
    csvLine += '\n';

    if (count % 42 === 0) {
      used = {};
    }
    return csvLine;
};

  // var writer = csvWriter({sendHeaders: false})
  // writer.pipe(fs.createWriteStream('out.csv'))
  // writer.write({hello: "world", foo: "bar", baz: "taco"})
  // writer.end()


const writeToFiles = new Readable({
  read() {
    this.push(makeEntry(1));
    if (count === 10000000) {
      this.push(null);
    }
  }
});

const writer = fs.createWriteStream('./server/db/csvFiles/test1.csv', { flags: 'a' });
writeToFiles.pipe(writer);


// fs.writeFile('./count.txt', round, (err, data) => {
// });
// // stringify(test, (err, output) => {
// let prom = writeFileAsync(`./csvFiles/data${round}.csv`, stringify(seedArr[0], {headers: false}));
// promised.push(prom);
// // })


// Promise.all(promised);
// });


// let csvPromise = new Promise((res, rej) => {
//   stringify(seed, (err, output) => {
//     fs.writeFile(`./csvFiles/data${fileCount}.csv`, output, err => {
//       if (err) {
//         return console.error(err);
//       }
//       console.log('csv created!');
//     });
//   });
// });


// let csvPromise = new Promise((res, rej) => {res()}).then(() => {
//         const stream = fs.createWriteStream(`./csvFiles/data${fileCount}.csv`);
//         stringify(seed, (err, output) => {
//           stream.write(output);
//           stream.end();
//           res('test');
//         });
//     }
//     );
//
//
//
//     csvPromiseArr.push(csvPromise);
//
//   }
// };

// makeFiles(2);
//
// Promise.all(csvPromiseArr);


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
