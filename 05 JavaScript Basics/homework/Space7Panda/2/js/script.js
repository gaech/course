"use strict";
function sort(value) {
	
	if (typeof value !== "string") {
		throw {"Message": "value is not a string type"}
	}

	value = value.trim().replace(/\s+/g, " ");

	if (value.length === 0) {
		return "[]";
	}

	if (value.length === 1) {
		throw {"Message": "need more than 1 number"}
	}

	if (!value.match(/^-?\d+(\s+-?\d+\s*)*\s-?\d+$/)) { //Умер 3 раза пока писал эту строку.
		throw {"Message": "value is not a number"}
	}

	let unsortNum = value.split(" ");
	let items = unsortNum.map((n, i) => ({weight: n * (i + 1), value: n}));

	items.sort((a, b) => {return (a.weight !== b.weight) ? b.weight - a.weight : b.number - a.number;});

	return items.map(num => num.value);
};
