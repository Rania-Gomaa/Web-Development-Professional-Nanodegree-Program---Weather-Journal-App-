/* Global Variables */
const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
const APIkey = "&appid=a2f9170bca6982fe7d4f354485854e69&units=metric";
const generateBtn = document.getElementById("generate");
const date = document.getElementById("date");
const temp = document.getElementById("temp");
const content = document.getElementById("content");
// Create a new date instance dynamically with JS, add one to the month as its index is from 0 to 11
let d = new Date();
let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear();


generateBtn.addEventListener('click', checkValuesAndAction);

//check zip code is entered and if so perform the chaining promises.

function checkValuesAndAction(){
    let zipCode = document.getElementById("zip").value;
    let feelings = document.getElementById("feelings").value;
    if(zipCode){
        getData(baseURL, zipCode, APIkey)
        .then(function(data){
            postData("/addInfo", {temp: data.main.temp, date: newDate, feelings})
        }).then(() => updateUI())     
    } else{
        alert('Please,fill in the required information');
    }
};

const getData = async (base, zip, key) => {

    const res = await fetch(base+zip+key);


    try{
        const data = await res.json();
        console.log(data)
        return data;
    }

    catch(e){
       
        console.error(e);
        
    }

};


const postData = async (url = "", data = {}) => {

    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {"Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    try{
        const newData = await response.json();
        console.log(newData);
        return newData;
    }

    catch(error){
        console.error(error);
    }


};

//updateing UI after clearing values to display recent data only

const updateUI = async () => {

    const request = await fetch('/all');
    date.innerHTML = "";
    temp.innerHTML = "";
    content.innerHTML = "";

    try{
    const displayedData = await request.json();
    console.log(displayedData);
    date.innerHTML = displayedData.date;
    temp.innerHTML = displayedData.temp;
    content.innerHTML = displayedData.usrRes;

    } 

    catch(e){
        console.error(e);
    }
}