// Technical requirements: 
// Based on input, display two different scenarios  
// jQuery UI Datepicker 
// function getStartDate() { 
// 	var startDate = $( ".selector" ).datepicker( "getDate" );
// 	return startDate;
// }
// Save date as a variable 

// document.querySelector('.days').innerHTML = 'Hello World!';
// document.querySelector('.content .value').innerHTML = 'World!';

// Function to Calculate days since date was picked 
// function calculateDate () {
// 	var oneDay = 24*60*60*1000 // seconds in a day
// 	var startDate = ;
// 	var endDate = new Date(2017,01,01);
// 	var diffDays = Math.round(Math.abs((startDate.getTime() - endDate.getTime())/(oneDay)));
// 	return diffDays; 
// 	// document.getElementById("days").innerHTML = diffDays;
// }

// UPDATED DATA IMPACT PER DAY 
// 4163 litres water 
// 20 kg grain
// 2.78 sq m OR 27,870 sq cm forest
// 9 kg or 9071 grams of co2 
// 1 animal life

document.addEventListener("DOMContentLoaded", function() {
	init();
});


function init(){
	countdown();
}

var seconds;
var temp;
 
function countdown() {
	seconds = document.getElementById('countdown').innerHTML;
	seconds = parseInt(seconds, 10);

	if (seconds == 1) {
	  temp = document.getElementById('countdown');
	  temp.innerHTML = "all done, bye bye";
	  return;
	}

	seconds++;
	temp = document.getElementById('countdown');
	temp.innerHTML = seconds;
	timeoutMyOswego = setTimeout(countdown, 1000);
} 

function calculateWater() { 
	var date = calculateDate();
	var water = (date * 41639);
	return water;
}

function calculateCarbon() { 
	var date = calculateDate();
	var carbon = (date * 4500);
	return carbon;
}

function calculateForest() { 
	var date = calculateDate();
	var forest = (date * 27870);
	return forest;
}

function calculateLife() {
	var date = calculateDate();
	var lives = (date * 1);
	return lives;
}

function calculateGrain() {
	var date = calculateDate();
	var grain = (date * 20411);
	return grain;
}

function calculateMoney() {
	var date = calculateDate();
	var money = (date * 435);
	return money;
}

function counter() { 
// On document load, script runs that increases each (CONST/86400) seconds

}
// Multiply days by an array of constants, save the result as a dynamic array 
// Loop through foreach that shows a styled box for each array value // Where 86400 is number of seconds in a day  

