const util = require('util')
const exec = util.promisify(require('child_process').exec)
const configure = {
    s3BucketName: 'moonbeam-dashboard/dist/',
    folderPath: '../dist' // path relative script's location
};
const putObjects = `aws s3 cp ${configure.folderPath} s3://${configure.s3BucketName} --recursive`

console.log('Uploading objects to s3 bucket...');
exec(putObjects)
  .then(() => {
    console.log('Deploy to s3 bucket has been successfully completed')
  })
  .catch((err: any) => {
    console.log(err)
  });
