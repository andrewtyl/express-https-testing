# Express Boilerplate [![Build Status](https://travis-ci.org/andrewtyl/express-boilerplate.svg?branch=master)](https://travis-ci.org/andrewtyl/express-boilerplate)
## Boilerplate

This is a boilerplate template for a new Express.js project. Additional details below.

## Set up

Complete the following steps to start a new project (NEW-PROJECT-NAME):

1. Open a terminal and cd to where you want the new project folder to be.
2. In terminal, run `git clone https://github.com/andrewtyl/express-boilerplate.git NEW-PROJECT-NAME ; cd NEW-PROJECT-NAME`
3. Delete `.git` folder using a file exploring program or run `rm -rf .git` in terminal. (The folder/files may be hidden from your file explorer.)
4. In terminal, run `git init ; npm i .`
5. Rename `example.env` to `.env`
6. Edit `name`, `description`, and `repository` in `package.json`
7. Edit `version`, `author`, `keywords`, and `license` in `package.json` if needed.
8. Edit this file to include your app's name and description. It is reccomended to keep a backup of this file before altering it and add it to `.gitignore` or to reference the readme at `https://github.com/andrewtyl/express-boilerplate/blob/master/README.md` for additional information about Scripts and Deploying.

## Scripts
* `npm start` - Starts a local server running the Express App. Any changes to files while this is running will NOT cause the server to restart.
* `npm run dev` - Starts a local server running the Express App using Nodemon. Any changes to files while this is running will cause the server to restart.
* `npm test` - Runs all tests in `./test/`.
* `npm predeploy` - Runs all tests in `./test/` and also runs a security audit. If both pass, you should be good to deploy.

## Deployment for Heroku
1. Install the Heroku CLI using instructions from https://devcenter.heroku.com/articles/heroku-cli 
2. Create an app on Heroku. You can do this with the Heroku CLI or at https://dashboard.heroku.com/
3. Install the Travis-CI CLI using instructions from https://github.com/travis-ci/travis.rb#readme. This requires installing Ruby Version 1.9.3 or greater (2.0.0 or greater is reccomended).
4. Setup Travis-CI to automatically build pushed branches.
5. Edit `.travis.yml`. See the file and https://docs.travis-ci.com/user/customizing-the-build for more details.
6. Any future pushes to the master branch should automatically trigger a build to Heroku. NOTE: There is currently a bug that may show your build fails due to an incorrect API key. The deployment to Heroku should still trigger regardless, but your build will show as failing, even if every test passed. Also, any email notifications from `.travis.yml` will not trigger. Follow this issue at: https://travis-ci.community/t/heroku-deployment-fails-but-doesnt/8145/