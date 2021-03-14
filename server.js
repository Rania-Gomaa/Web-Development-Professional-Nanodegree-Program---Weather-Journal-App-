
// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//bodyParser is deprecated so instead we can use the following:
//app.use(express.urlencoded({ extended: false }));
//app.use(express.json());


// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
//function to test running of the server on localhost
app.listen(port, () => {console.log(`running on localhost: http://localhost:${port}`);});

//Add a GET route that returns the projectData object in server code.
app.get('/all', getData);

function getData(req,res){
    res.send(projectData);
    console.log(projectData);
};

//add a POST route that adds incoming data to projectData.
//The POST route should anticipate receiving three pieces of data from the request body.
//adding incoming data tp projectData obj, key-value pairs.
app.post('/addInfo', addInfo);

function addInfo(req, res){
    

    projectData = {

        date: req.body.date,
        temp: req.body.temp,
        usrRes: req.body.feelings
    }
    console.log(projectData);
    res.send(projectData);
};