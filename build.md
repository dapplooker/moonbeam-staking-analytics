## AWS Login Details
- S3 Username: ```dapplooker-team-member```
- Password : ```0s2[^(2WhJW6LWk```
- Account ID: ```622952980673```
- Access Key: ```AKIAZCCXEEDAQIATEFE7```
- Secret Key: ```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```

## Development Build

- ```npm run build:production```

## Production Build

for MacOS:
- Go to https://aws.amazon.com/cli/
- Download and run the MacOS PKG installer situated at the right hand side
- After installing open terminal and type in ```aws --version``` 
- If it shows the version then you are ready to configure 
- Type the below command for configuration
- ```aws configure```
- Give the access key,secret key , [region]:us-east-1,[format]:json - One time set up
- The setup is complete you can go to the web directory and run build command : ```npm run build:productionWithS3Upload```

for Ubuntu:
- ```sudo apt-get install python3```
- check for successfull installation through : ```pip --version```
- pip install awscli
- check for successfull installation : ```aws --version```
- ```aws configure```
- Give the access key,secret key , [region]:us-east-1,[format]:json - One time set up
- Go to the web directory and run : ```npm run build:productionWithS3Upload```

for windows 64 bit :
- Go to https://aws.amazon.com/cli/
- Download and run the 64-bit Windows installer situated at the right hand side
- After installing open terminal and type in ```aws --version``` 
- If it shows the version then you are ready to configure 
- Type the below command for configuration
- ```aws configure```
- Give the access key,secret key , [region]:us-east-1,[format]:json - One time set up
- The setup is complete you can go to the web directory and run build command : ```npm run build:productionWithS3Upload```

## Setting up first Build
- Goto AWS S3 Bucket on web.
- Make a normal production build using ```npm run build:production```
- Upload all files from dist/ inside ```dapplooker``` bucket in location ```/assets/build/<DASHBOARD-NAME>-analytics/dist/```
- Copy the the path in the format given above and change the Folder path in ```aws/aws-s3.ts``` in your project.
- Copy ```index.html``` from dist/ directory from your project to ```aws/s3-index```
- Set the src of all script files to the URL from AWS S3 Bucket.
- Delete local folder dist/ and delete the aws S3 folder for your dashboard.
- Use Command : ```npm run build:productionWithS3Upload```
- The files should be uploaded automatically and the src of all script tags of local dist/ will be changed automatically.