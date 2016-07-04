
'use strict';

function Palindrome(str) {
	this.mainString = str;
	this.palindromes = [];
	this.generatePalindromes = getPalindromes;
	this.isPalindrome = isPalindrome;
	this.sortByLength = sortByLength;
	this.generateDisplay = generateDisplay;
	this.isUniqueAndLongest = isUniqueAndLongest;
	this.addPalindrome = addPalindrome;

}

function isPalindrome(str) {

	if (str == undefined || str == null) {
		return false;
	}
	return str == str.split('').reverse().join('');
}

function getPalindromes() {
	
	if (this.mainString == undefined || this.mainString == null) {
		return false;
	}

	for (var i = this.mainString.length - 1; i > 0; i--) {

		var potentialPalindrom = "";

		for (var j = 0; j < this.mainString.length - 1; j++) {
			potentialPalindrom = this.mainString.substring(j, (i + 1));

			if (this.isUniqueAndLongest(j, potentialPalindrom.length)) {

				//console.log(potentialPalindrom);
				if (this.isPalindrome(potentialPalindrom)) {
					console.log(potentialPalindrom);
					this.addPalindrome(potentialPalindrom, j, potentialPalindrom.length);
					break;
				}
			}
		}
	}

}
function addPalindrome(str, index, length) {
	this.palindromes.push({
		Text : str,
		Index : index,
		Length : length
	});
}

function isUniqueAndLongest(_index, _length) {

	for (var i = 0; i < this.palindromes.length; i++) {
		var station = this.palindromes[i];
		if (_index >= station.Index && _length <= station.Length) {
			return false;
		}
	}
	if (_length <= 2) {
		return false;
	}
	return true;

}

function sortByLength() {
	this.palindromes.sort(function (a, b) {
		if (a.Length > b.Length) {
			return -1;
		}
		if (a.Length < b.Length) {
			return 1;
		}
		// a must be equal to b
		return 0;
	});
}

function generateDisplay() {

	this.sortByLength();
	
	var outcome = "";
	for (var i = 0; i < this.palindromes.length; i++) {
		outcome += "Text: " + this.palindromes[i].Text + ", Index: " + this.palindromes[i].Index + ", Length: " + this.palindromes[i].Length + "\r\n\r\n";
	}
	if(outcome==""){outcome="None";}
	return outcome;
}
