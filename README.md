# insurance-coding-challenge (Frontend)

insurance-coding-challenge is basically a coding challenge project where I build the frontend of a small single page application based on mock data and assets provided. 

**Insurance Coding Challenge Project** is an app that enable users to :
* The Browse page where you can see section of List of products, section of Filters, section of Sorters
  - For List of products section, each product should at least show the Logo of Insurance Provider, Plan Name,Insurance Provider Name, Sum Insured, Premium(totalAmount.amount).
  - For Filters section, it should at least contain filter of Insurance Provider, Service Area Ids.
  - For Sorters section, it should at least contain sorter of Premium(totalAmount.amount), Created At.

* The Product detail page (PDP) where you can see the details of a product
  - Besides the basic information of product displayed in the Browse page, it should at least show both Medical Features and Travel Features.

* The Compare page where you can see at most 3 products listed side by side for comparison. Their key details such as Premium, Sum Insured, Medical Features and Travel Features should be displayed in order for comparison.

* Clicking on View Detail button on a product in Browse page should show the PDP page
* Ticking a Compare checkbox on a product in Browse page should highlight the product, it should only allow maximum 3 products to be highlighted
* Compare Plan button on the Browse page will be enabled when at least 2 products are highlighted, upon clicking the Compare Plan button should show the Compare page
* Clicking on Back button on PDP should take the user to the Browse page
* Clicking on Back button on Compare page should take the user to the Browse page

## REQUIREMENTS

For development, you will need to install `Node.js` on your environment.

#### Node installation on OS X

1. Open the Terminal App and type brew install node.
2. Wait while Homebrew helps you download and install all the needed files for you to use.

After installing, you can check whether Node.js has been installed by typing `node-v` in terminal. Also to see if NPM is installed already, by typing `npm -v`

#### Node installation on Linux

On terminal, type in : 
`sudo apt-get install nodejs`

#### Node installation on Windows 

Go to [https://nodejs.org/en/download/](https://nodejs.org/en/download/) and follow all the steps to download.

## INSTALL

git@github.com:hendriagustino/insurance-coding-challenge.git

`$ git clone git@github.com:hendriagustino/insurance-coding-challenge.git` <br>
`$ cd insurance-coding-challenge` <br>
`$ npm install`

# START 

`$ npm start`
