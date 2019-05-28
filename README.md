
# Creating a GitHub create-react-app User page

Live site is here https://sophiemachin.github.io/

## Instructions

On GitHub, create a repository with the name <username>.github.io

Get the URL to clone, and create a local respository, for example

    git clone <url>

cd to the project, and create a new branch for the source code to live. 

git checkout -b source

Then from the source branch

 	npm install gh-pages
 	npm run deploy

 Visit https://<username>.github.io/ to see the live page. 



## Explanations


This project requires two branches:

- master
- source

The package `gh-pages` wants to use it's own branch, `gh-pages`. Unfortunately 
GitHub User pages must be built from the master branch.

The source branch contains all the editable JavaScript and the README.md, and
 the master branch contains the deployed app (`npm run deploy` controls all these files and 
 will delete any that aren't part of the build app)

To deploy the app, make sure that `package.json` contains the this line in scripts:

    "deploy": "gh-pages -d build --branch master"

This is so that the the deploy command can be run while on the source directory. 
The origin/master branch on GitHub will be updated with the files needed. 


