const removeFromArray = function(...remoFrom) {    
  
    let array = ''
	if (!Array.isArray(remoFrom[0])) {
		array = [];
	} else {
		array = remoFrom[0];
	}
	const newArray = [];
	array.forEach((item) => {
		if (!remoFrom.includes(item)) {
			newArray.push(item);
		}
	});
	return newArray;

}

module.exports = removeFromArray