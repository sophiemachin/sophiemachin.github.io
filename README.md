
# Creating a GitHub create-react-app User page

Live site is here https://sophiemachin.github.io/


## Branches

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


## Setup Instructions

On GitHub, create a repository with the name `<username>.github.io`

Get the URL to clone, and create a local repository, for example

    git clone <url>


Setup a `create-react-app` app. I used PyCharm to set this up. Alternatively 
you can use the instructions directly from Facebook's
GitHub page [here](https://facebook.github.io/create-react-app/docs/getting-started).

	npx create-react-app <username>.github.io
 	npm install gh-pages
 	
cd to the project, and create a new branch for the source code to live. 

    git checkout -b source

Then from the source branch 

On GitHub, change the default branch to source. This makes sure any edits are 
done on this branch and not the master branch.

## Deployment

When you are ready to deploy, run this command from the source branch

 	npm run deploy

 Visit https://<username>.github.io/ to see the live page.


## Development

Once the initial setup is working, development can be done locally from the source branch using

    npm start

This builds a local version which automatically refreshes when any of the src 
files are updated. 

Commit and push as required.

Run 

    npm run deploy

To make the app live. 



