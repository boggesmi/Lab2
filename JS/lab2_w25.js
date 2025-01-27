// Question 1 - How many vowels?
// Write code that counts the number of vowels in a string.
// +1 bonus points if you ask for the string from the user

var sentence = "How many vowels do you think are in this one?";

function countVowels(s1) {
    var vowels = s1.match(/[aeiou]/gi);
    if (vowels == null) {
        return 0;
    }
    else {
        return vowels.length;
    }
}

//Testing Inputs for Question 1
console.log(countVowels(sentence));
console.log(countVowels("I love cartography."));
console.log(countVowels("Ggggggggg, mmmmmmmm, blhhhhh!"));


// Question 2 - Odd Addition
// You'll be given three arrays containing two numbers each. 
// Write a script that checks if the numbers are odd or even.
// If they are odd, multiple them and return or print the results.
// If they are even, add them and return or print the results.
// For example, [3, 5] would return 15; but [3, 6] would result in 9

function checkParity([x,y]) {
    if (x % 2 == 1 && y % 2 == 1) {
        return (x*y)
    } 
    else {
        return (x+y)
    }
}

//Testing Inputs for Question 2

console.log(checkParity([3,5]));
console.log(checkParity([2,4]));
console.log(checkParity([3,6]));

// Question 3 - Twenty One
// You'll receive three arrays with two numbers again.
// If the two numbers add up to 21, return True
// If they don't, return False unless they are identical
// If they are identical, return "Split"

// Your solution goes here

function equals21([x,y]) {
    if (x + y == 21) {
        return true;
    }
    else if (x == y) {
        return "Split";
    }
    else {
        return false;
    }
}

//Testing Inputs for Question 3

console.log(equals21([7,14]));
console.log(equals21([9,9]));
console.log(equals21([0,20]));

// Question 4 - FizzBuzz
// This is a classic programming question.
// Print out the numbers from 1 to 100, except
// If the number is a multiple of three, print Fizz
// If the number is a multiple of five, print Buzz
// If the number is a multiple of three and five, print FizzBuzz
// Your output might look something like 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz ....

// Your solution goes here

function fizzBuzz() {
    for (let i = 1; i <101; i++) {
        if (i % 15 == 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(i)
        }
    }
}

fizzBuzz()

// Question 5 - Start my car
// Create a car variable (object)
// Give it the properties of make, model, year, and color
// Give it a start method that returns to the console "Vroom vroom! Car started!" or something similar
// Call the start method

// Your solution goes here


const car = new Object();

car.make = "Toyota";
car.model = "Tacoma";
car.year = 2003;
car.color = "Forest green";

car.start = function() {return "Vroom vroom! Car started!";}

console.log(car.start());

//Question 6 - How many states are there?
// Ok, this seems silly, but we're actually going to work with AJAX to get some data and process it
// You need to load a geojson file, convert it to json, and then count up the number of entires it has...
// In other words, print out to the console log the number of airports in the data set
// You'll want to use chapter 3 of the roth textbook and our lecture on Friday here.
// +2 bonus points if you tell me first how many total airports there are and then how many civilian 
// feel free to explore the data in QGIS (or arc). If you know how to answer the question in QGIS, how do you transfer it to javascript?

    //Step 1: Create the data request
    // You may not have your data stored in a data sub-directory, just update this appropriately
    var request = new Request('/Data/airports.geojson');

    //Step 2: define Fetch parameters
    // Note this isn't really necessary, do you remember/know why?
    //          **Fetch parameters are unnecessary in this situation, as this is a simple data retreival task.**
    //          **For fetching a GeoJSON file, the deafult parameters are enough to get the file correctly.**

    //Step 3: use Fetch to retrieve the data and set up callback functions
 
    fetch('/Data/airports.geojson')
    .then(response => response.json())
    .then(function (response) {
        var airports = response.features;
        var totalAirports = airports.length;
    // This block doesn't quite work! Should be 846 civilian airports.    
    //    var military = airports.properties.type == ("military" || "spaceport");
    //    var civAirports = totalAirports - military.length;
    //    console.log ('Civilian airports: ' + civAirports); 
        console.log('Total airports: ' + totalAirports);
    });


// Question 7 - Dynamically creating a list
// This problem draws heavily from Chapter 2 of your workbook (the Roth et al.), so make sure to review there if you're stuck!
// I'm going to give you two arrays as variables. One will have city names, the other their populations.
// You need to create a FUNCTION that takes in the two arrays (so the data is not created within them, this is different from the example in Chapter 2)
// The function should take in the arrays, combine them into an HTML FORMATTED TABLE
// The table should be added to an imaginary div with the id "mydiv"


var cities = ['Corvallis', 'Portland', 'Eugene', 'Albany'];
var pops = ['59920', '652500', '176650', '56470'];

function tableFormat(cityArray, popArray) {
    var table = document.createElement("table");

    var headRow = document.createElement("tr");

    var cityHead = document.createElement("th");
    cityHead.innerHTML = "City";
    headRow.appendChild(cityHead);

    var popHead = document.createElement("th");
    popHead.innerHTML = "Population";
    headRow.appendChild(popHead);

    table.appendChild(headRow);

    for (let i = 0; i < cityArray.length; i++) {
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cityArray[i];
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = parseInt(popArray[i]);  // Convert string to number
        tr.appendChild(pop);

        table.appendChild(tr);
    }

    var myDiv = document.getElementById("mydiv");
    if (myDiv) {
        myDiv.appendChild(table);
    } else {
        console.error('Element with id "mydiv" not found');
    }
}

tableFormat(cities, pops);

