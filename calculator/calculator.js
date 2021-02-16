function add (x, y) {
	return x + y;
}

function subtract (x, y) {
	return x - y;
}

function sum (sum) {
	let soma = 0
	for(let i in sum){
		soma += sum[i]
	}
	return soma
}

function multiply (multiplies) {

}

function power() {
	
}

function factorial() {
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}