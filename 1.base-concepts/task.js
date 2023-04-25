"use strict"
function solveEquation(a, b, c) {
	let arr = [];
	let discr = b ** 2 - 4 * a * c;
	if (discr < 0) {
		return arr;
	} else if (discr === 0) {
		let root = -b / (2 * a)
		arr.push(root);
		return arr;
	} else {
		let root = (-b + Math.sqrt(discr)) / (2 * a);
		let root2 = (-b - Math.sqrt(discr)) / (2 * a);
		arr.push(root, root2)
		return arr;
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
		percent = parseInt(percent);
		contribution = parseInt(contribution);
		amount = parseInt(amount);
		countMonths = parseInt(countMonths);
	if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
		return false;
	}
	percent /= 100;
	let bodyCredit = amount - contribution;
	let monthPercent = percent / 12;
	let monthlyPayment = bodyCredit * (monthPercent + monthPercent / (Math.pow(1 + monthPercent, countMonths) - 1));
	let totalAmount = monthlyPayment * countMonths;
	return parseFloat(totalAmount.toFixed(2));
}