const palindromes = function(str) {

   const splitString = str.split('').reverse().join("")

   if(str >= splitString){
      return true
   } else {
      return false
   }
}

module.exports = palindromes