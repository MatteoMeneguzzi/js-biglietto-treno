// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo a schermo in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

// 1 ask user how many km
// 2 ask user age
// 3 ticket price is 0.21$ / km
// 4 20% discount for <18 people age
// 5 40% discount for >65 people age
// 6 final price has 2 decimals

// 1 ask user how many km

var kiloMeters = parseInt(prompt("How many km are you going to cover?"));
console.log("km: ", kiloMeters);

if (isNaN(kiloMeters) === false) {
	document.getElementById("kilometers").innerHTML = kiloMeters;
} else {
	document.getElementById("kilometers").innerHTML = "Please digit a number";
}

if (kiloMeters > 0) {
	document.getElementById("kilometers").innerHTML = kiloMeters;
} else {
	document.getElementById("kilometers").innerHTML = "Please digit a number";
}
// 2 ask user age

var userAge = parseInt(prompt("How old are you?"));
console.log("Age: ", userAge);

if (isNaN(userAge) === false) {
	document.getElementById("age").innerHTML = userAge;
} else {
	document.getElementById("age").innerHTML = "Please digit a number";
}

if (userAge >= 0) {
	document.getElementById("age").innerHTML = userAge;
} else {
	document.getElementById("age").innerHTML = "Please digit a number";
}

// 3 ticket price is 0.21$ / km
// 4 20% discount for <18 people age
// 5 40% discount for >65 people age

var price;

if (userAge < 18 && isNaN(userAge) === false) {
	var price = (0.21 * kiloMeters * 20) / 100;
} else if (userAge > 65 && isNaN(userAge) === false) {
	var price = (0.21 * kiloMeters * 40) / 100;
} else if (isNaN(userAge) === false) {
	var price = 0.21 * kiloMeters;
}

// 6 final price has 2 decimals

price = parseFloat(price).toFixed(2);

if (kiloMeters >= 0) {
	document.getElementById("price").innerHTML = price;
} else if (userAge >= 0) {
	document.getElementById("price").innerHTML = price;
} else if (price >= 0) {
	document.getElementById("price").innerHTML = price;
} else {
	document.getElementById("price").innerHTML = "Please digit a number";
}

if (isNaN(price) === false) {
	document.getElementById("price").innerHTML = price;
} else {
	document.getElementById("price").innerHTML = "Please digit a number";
}

// if (isNaN(kiloMeters) && isNaN(userAge) === false) {
// 	isNaN(price) === false;
// 	document.getElementById("price").innerHTML = price;
// } else {
// 	isNaN(price) === true;
// 	document.getElementById("price").innerHTML = "Please digit a number";
// }
// var response = Number(price);

// var noDecimals = response.toFixed(2);

// (Math.round(price * 100) / 100).toFixed(2);

// document.getElementById("kilometers").innerHTML = kiloMeters;

// document.getElementById("age").innerHTML = userAge;

// document.getElementById("price").innerHTML = price;
