"use strict";

function sum(a, b) {
	if (a == undefined || b == undefined) throw new Error("parameter missing");
	if (typeof a !== "number" || typeof b !== "number")
		throw new Error("only numbers allowed");

	return a + b;
}

function subtract(a, b) {
	if (a == undefined || b == undefined) throw new Error("parameter missing");
	if (typeof a !== "number" || typeof b !== "number")
		throw new Error("only numbers allowed");

	return a - b;
}

function divide(a, b) {
	return a / b;
}


module.exports = { sum, subtract, divide };
