// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

function translate(userText) {
	var vowels = 'aeiou'
	for (var i = 0; i < userText.length; i++) {
		if (indexof(vowels) === {
			userText[i] = userText[i] + 'o' + userText[i]
		}
	}
	return userText
}
translate('this is fun')