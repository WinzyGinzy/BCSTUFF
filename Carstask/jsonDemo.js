"use strict";

const register = require("./datastorage.json");

console.log("##### Tests #####");

console.log(register[0].id);
console.log(register[0].manufacturer);
console.log(register[0].accessories);
console.log(register[0].extras[0].name);

console.log("##### All cars #####");

for (let car of register) {
	console.log(`${car.id} ${car.manufacturer} ${car.price}`);
}

console.log("##### All cars with extras #####");

for (let car of register) {
	console.log(`${car.manufacturer} ${car.price}`);
	for (let extra of car.extras) {
		console.log(`\t${extra.name} ${extra.price}`);
	}
}
