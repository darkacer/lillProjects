// happy numbers are the numbers whose sum of squa  res of numbers 
// when calculated over and over will finally result into 1
// 23 -> 4+9 = 13 -> 10 -> 1
// others are unhappy numbers
let givenNumber = 11
let temp = givenNumber
let arr = []
let flag = true
var func = (number) => number
					   .toString()
					   .split('')
					   .reduce((ret, el) => parseInt(ret) + parseInt(el) * parseInt(el), 0)

while(flag) {
	console.log('temp is ' + temp)
	temp = func(temp)
	if (temp == 1) console.log('happynumber')
	if (temp == 37) console.log('Not happynumber')
	if (temp == 1 || temp == 37) break
}