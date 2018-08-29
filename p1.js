
var isPrime = require("prime-number")
var arrayGenerator = require ('array-generator')

var doSomething = function(n) {
  var a = [];
	if (isPrime(n)) {
		 a = arrayGenerator(n,0,n);
	}
	return a; 
}

exports = {myFn: doSomething};