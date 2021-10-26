const fs = require('fs');
const path = require('path');
const configurePath = {
    folderPath: '../dist' // path relative script's location
};
const distFolderPath = path.join(__dirname, configurePath.folderPath);
const indexFilePath = path.join(distFolderPath, 'index.html');
const s3IndexFilePath = path.join(__dirname, 's3-index.html');
function callback(err: any) {
    if (err) throw err;
    console.log('dist/index.html has been updated with s3 urls');
  }
fs.copyFile(s3IndexFilePath, indexFilePath, callback);

