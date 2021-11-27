
# EDA Project
This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).

We **STRONGLY** recommend following these instructions carefully. It's a lot, and will take some time to set up, but your life will be much easier this way in the long run.

## Use the Template for This Repository (Don't Clone)

- Don't Fork or Clone. Instead, click the `Use this Template` button, and make a copy to your personal account.


## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called `prime_app` and create a `user` table:

```SQL
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
```

If you would like to name your database something else, you will need to change `prime_app` to the name of your new database name in `server/modules/pool.js`

## Development Setup Instructions

- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`

## Debugging

To debug, you will need to run the client-side separately from the server. Start the client by running the command `npm run client`. Start the debugging server by selecting the Debug button.

![VSCode Toolbar](documentation/images/vscode-toolbar.png)

Then make sure `Launch Program` is selected from the dropdown, then click the green play arrow.

![VSCode Debug Bar](documentation/images/vscode-debug-bar.png)

## Testing Routes with Postman

To use Postman with this repo, you will need to set up requests in Postman to register a user and login a user at a minimum.

Keep in mind that once you using the login route, Postman will manage your session cookie for you just like a browser, ensuring it is sent with each subsequent request. If you delete the `localhost` cookie in Postman, it will effectively log you out.

1. Start the server - `npm run server`
2. Import the sample routes JSON file [v2](./PostmanPrimeSoloRoutesv2.json) by clicking `Import` in Postman. Select the file.
3. Click `Collections` and `Send` the following three calls in order:
   1. `POST /api/user/register` registers a new user, see body to change username/password
   2. `POST /api/user/login` will login a user, see body to change username/password
   3. `GET /api/user` will get user information, by default it's not very much

After running the login route above, you can try any other route you've created that requires a logged in user!

## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

- Start postgres if not running already by using `brew services start postgresql`
- Run `npm start`
- Navigate to `localhost:5000`

## Lay of the Land

There are a few videos linked below that show a walkthrough the client and sever setup to help acclimatize to the boilerplate. Please take some time to watch the videos in order to get a better understanding of what the boilerplate is like.

- [Initial Set](https://vimeo.com/453297271)
- [Server Walkthrough](https://vimeo.com/453297212)
- [Client Walkthrough](https://vimeo.com/453297124)

Directory Structure:

- `src/` contains the React application
- `public/` contains static assets for the client-side
- `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
- `server/` contains the Express App

This code is also heavily commented. We recommend reading through the comments, getting a lay of the land, and becoming comfortable with how the code works before you start making too many changes. If you're wondering where to start, consider reading through component file comments in the following order:

- src/components
  - App/App
  - Footer/Footer
  - Nav/Nav
  - AboutPage/AboutPage
  - InfoPage/InfoPage
  - UserPage/UserPage
  - LoginPage/LoginPage
  - RegisterPage/RegisterPage
  - LogOutButton/LogOutButton
  - ProtectedRoute/ProtectedRoute

## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy

## Update Documentation

Customize this ReadMe and the code comments in this project to read less like a starter repo and more like a project. Here is an example: https://gist.github.com/PurpleBooth/109311bb0361f32d87a2



## Checklist

[x] Set up the server and database
     - pool, router,node/express
[] Set the routes in app.js
[] Create the home page
     -sign in (name, password)
    
[] Add the account page
     -username, password

[] Create the prediction page
     -Title of the page
     -Add datepicker
     -Add go button
     -GET method(populates the matches based on date selected)
     -Saga for GET prediction metheod
     -reducer for the GET prediction method
     -include Dropdown to select teams
     -POST method(Adds the user prediction to the predictions Database)
     -saga for the POST prediction method
     -reducer for the POST  method******GET
     -Add submit button to post the prediction

[] Set up the Summary of predictions view page
     -Include the title of the page
     -GET method(populates the prediction based on a user id)
     -saga for the GET summary of prediction method
     -reducer for the GET summary od prediction method
     -Add edit button(inline)
     -POST method(Submits the final pick to the prediction table
     -saga for the Post final prediction method***
     -reducer for the final prediction method****GET
[] Create the Admin Page
     -usename, password
     -log in to set up an admin user
[] Create  Results Page
     -Add date picker and a button
     -GET method(Gets fixtures from the database based on the date)
     -saga for the GET results method
     -reducer for the GET results method
     -POST method(posts the results of the winning team to the fixtures table)
     -saga for the POST 

[] Winners Page
     -Add a table to display winners/losers based on user
     -Displays the points amassed.
     -Add a button to take you to the home page.
     
![Screenshot (107)](https://user-images.githubusercontent.com/43694552/143669937-c790cc8a-9620-425a-a64b-465842274698.png)
![Screenshot (108)](https://user-images.githubusercontent.com/43694552/143669938-814282fc-07e2-42fb-8827-3aab958ce6d7.png)
![Screenshot (109)](https://user-images.githubusercontent.com/43694552/143669939-2d2b7252-8b79-4373-8873-5b1f76d49810.png)
![Screenshot (110)](https://user-images.githubusercontent.com/43694552/143669940-5d461ec8-6ea3-4ed0-b0c5-27f989294b2b.png)
![Screenshot (111)](https://user-images.githubusercontent.com/43694552/143669941-0e29cd1e-d5d7-4ea3-86f2-f6bee4545b3e.png)
![Screenshot (112)](https://user-images.githubusercontent.com/43694552/143669942-e3c427b9-6c2d-4076-899c-94fdcfe1bc5b.png)
![Screenshot (113)](https://user-images.githubusercontent.com/43694552/143669943-02a569a6-80b7-4c32-959a-9f71407b0c58.png)
![Screenshot (115)](https://user-images.githubusercontent.com/43694552/143669944-f00269fe-0177-4bf6-bcf9-60d66e28cd18.png)
