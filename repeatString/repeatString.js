const repeatString = function (string, qtd) {
    if(qtd < 0){
        return 'ERROR'
    } else {
        return string.repeat(qtd)
    }
};


module.exports = repeatString
