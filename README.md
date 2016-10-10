# RecipeMaster

This is a repo for the RecipeMaster application built on a MEAN stack. 

## Installation on local
1. Download the repository
2. Install npm modules: `npm install`
3. Install bower dependencies `bower install`
4. Start up the server: `node server.js`
5. View in browser at http://localhost:8080

## Installation on EC2
1. Download the repository
2. Install npm modules: `sudo npm install`
3. Install bower dependencies `sudo bower install --allow-root`
4. Start up the server: `forever start server.js`
5. View in browser at http://ec2-52-23-202-152.compute-1.amazonaws.com:8080

## Other commands currenty required (temporary)
npm install ng-dialog
npm install aws-sdk

## To access Mongo
ssh -i recipes.pem bitnami@ec2-52-23-202-152.compute-1.amazonaws.com
sudo mongo
use admin