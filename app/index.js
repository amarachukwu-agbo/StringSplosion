'use strict';
function stringSplosion(stringValue){
	this.stringValue = stringValue;
	this.manipulate = function(){
		var stringArray = [];
		for(var counter = 1; counter <= stringValue.length; counter++){
			var newString = stringValue.substr(0,counter);
			stringArray.push(newString);
		}
		return stringArray.join("");
	}
}

module.exports = stringSplosion