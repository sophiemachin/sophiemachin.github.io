
# Creating a GitHub create-react-app User page

## Instructions

On GitHub, create a repository with the name <username>.github.io

Get the URL to clone, and create a local respository, for example

    git clone <url>

cd to the project, and create a new branch for the source code to live. 

git checkout -b source


## Explanations


This project requires two branches:

- master
- source

The package gh-pages uses it's own branch, `gh-pages`. Unfortunately GitHub User pages must be built from the master branch.

So source contains all the editable JavaScript, and master contains the deployed app.

To deploy the app, make sure that `package.json` contains the this line:

    "deploy": "gh-pages -d build --branch master"
    
    
At the moment I think master actually has everything...maybe I can just keep the editable files and the deployed files all on the master branch without having to merge constantly having


