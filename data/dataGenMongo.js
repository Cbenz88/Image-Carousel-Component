const data = require('./newData.js');
const now = require("performance-now");
const Listing = require('../server/resources/ModelsMongo.js');

const batchSize = 1000
const batches = 10000
let index = 0
let currentBatch = 0

const insertPugs = () => {
  let pugArray = null
  pugArray = createPugs(data, batchSize, index);
  Listing.insertMany(pugArray, function (err, results) {
    if (err) {
      console.log('Error pushing to database', err)
    } else if (results) {
      if (currentBatch <= batches) {
        currentBatch++;
        insertPugs();
      }
    }
  })
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
  let end = now();
  console.log((end - start) / 1000 + " seconds");
}
init();