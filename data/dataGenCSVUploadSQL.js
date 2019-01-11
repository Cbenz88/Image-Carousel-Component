const data = require('./newData.js');
('../server/resources/Models.js');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const connection = require('../server/db/index.js');
const now = require("performance-now");
const path = require("path");
const dataPath = path.join(__dirname, '/data.csv');

const csvWriter = createCsvWriter({
  path: dataPath,
  header: [{
      id: 'id',
      title: 'id'
    },
    {
      id: 'image1Url',
      title: 'image1Url'
    },
    {
      id: 'image2Url',
      title: 'image2Url'
    },
    {
      id: 'image3Url',
      title: 'image3Url'
    },
    {
      id: 'image4Url',
      title: 'image4Url'
    },
    {
      id: 'image5Url',
      title: 'image5Url'
    },
    {
      id: 'image6Url',
      title: 'image6Url'
    },
    {
      id: 'videoUrl',
      title: 'videoUrl'
    },

  ]
});


const batchSize = 10000
const batches = 1000
let index = 0
let currentBatch = 0

const insertPugs = () => {
  let pugArray = null
  pugArray = createPugs(data, batchSize, index);
  csvWriter.writeRecords(pugArray)
    .then(() => {
      if (currentBatch <= batches) {
        currentBatch++;
        insertPugs();
      }
    })
    .catch(err => console.log("Error writing CSV", err))
}

const createPugs = function (data, batchSize, index) {
  let pugArray = []
  for (let i = (index + (currentBatch * batchSize)); i < (batchSize + (currentBatch * batchSize)); i++) {
    let newPug = {
      id: i,
      image1Url: data.pugPics[Math.floor(Math.random() * data.pugPics.length)],
      image2Url: data.pugPics[Math.floor(Math.random() * data.pugPics.length)],
      image3Url: data.pugPics[Math.floor(Math.random() * data.pugPics.length)],
      image4Url: data.pugPics[Math.floor(Math.random() * data.pugPics.length)],
      image5Url: data.pugPics[Math.floor(Math.random() * data.pugPics.length)],
      image6Url: data.pugPics[Math.floor(Math.random() * data.pugPics.length)],
      videoUrl: data.pugVids[Math.floor(Math.random() * data.pugVids.length)]
    };
    pugArray.push(newPug)
  }
  return pugArray
}


async function init() {
  let start = now();
  await insertPugs();
  await connection.query(
    `LOAD DATA LOCAL INFILE ? INTO TABLE images FIELDS TERMINATED BY \',\' ENCLOSED BY \'"\' LINES TERMINATED BY \'\n\' IGNORE 1 ROWS;`, [dataPath],
    function (err, results) {
      if (err) {
        console.log('Error uploading CSV')
      } else if (results) {
        let end = now();
        console.log((end - start) / 1000 + " seconds");
      }
    });
}
init();