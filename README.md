# Weather-Journal App Project

## Overview:

- This project is built in HTML, CSS, JS and Nodejs.
- The project requires to create an asynchronous web app that uses Web API and user data to dynamically update the UI.
- The server is set up with GET and POST routes.
- The temperature is in celsius and the zip code is for U.S country.

## How it works:

- Setting up the project environmentby installing Node and some packages such as; express, cors and body-parser.
- Promises are chained as follows:

    - getData() => a GET route requests data from the web API according to the entered zip code.
    - postData() => incoming data from both the GET request and the user are recieved through a POST route and stored in the endpoint (projectData).
    - updateUI() => the UI is updated dynamically after the POST request is completed.   



