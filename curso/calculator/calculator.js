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

function multiply (calculator) {
	let mult = 0
	for( let i = 0; i < mult; i++){
		if ( mult[i]  * 2){
			calculator.push(mult[i])
		}
	}
	return mult
}

function power(x, y) {
	const resul = Math.pow(x, y)
	return resul
}

function factorial(x) {
	if(x == 0){
		return 1;
	}else{
		return x * factorial(x - 1)
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}