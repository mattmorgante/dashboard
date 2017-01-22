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
function calculateDate () {
	var oneDay = 24*60*60*1000 // seconds in a day
	var startDate = new Date(2016,01,01);
	var endDate = new Date(2017,01,01);
	var diffDays = Math.round(Math.abs((startDate.getTime() - endDate.getTime())/(oneDay)));
	return diffDays; 
	// document.getElementById("days").innerHTML = diffDays;
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

