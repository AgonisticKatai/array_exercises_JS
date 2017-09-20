// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

function sum(numbers) {
	var num = 0	
	for (var i = 0; i < numbers.length; i++) {
		num = numbers[i] + num
	}
	return num
}
sum([1, 2, 3, 4])

function mult(numbers) {
	var num = 1	
	for (var i = 0; i < numbers.length; i++) {
		num = numbers[i] * num
	}
	return num
}
mult([1, 2, 3, 4])