function longest_palindrome(inpStr) {
	if (inpStr === '') return ''
	let inpArray = inpStr.split('');
	let inpArr = alternendo(inpArray);
	let outArr = []
	// console.log(inpArr)
	for (let i = 0; i < inpArr.length; i++) {
		let count = 0;
		if (inpArr[i] === ' ') {
			k = i - 1;
			j = i + 1;
			while (k >= 0 && j < inpArr.length && inpArr[k] === inpArr[j]) {
				count++
				k -= 2;
				j += 2;
			}
			
		} else {
			count += 0.5
			k = i - 2;
			j = i + 2;
			while (k >= 0 && j < inpArr.length && inpArr[k] === inpArr[j]) {
				count++
				k -= 2;
				j += 2;
			}
		}
		outArr.push(count)
	}
	// console.log(outArr)
	// console.log(Math.max(...outArr))
	// console.log(getMaxPos(outArr))
	let spread = Math.max(...outArr)
	let index = getMaxPos(outArr)
	let outputStr = ''
	if (inpArr[index] === ' ') {
		k = index - 1;
		j = index + 1;
		while (spread--) {
			outputStr = inpArr[k] + outputStr + inpArr[j]
			k -= 2;
			j += 2;
		}
	} else {
		outputStr = inpArr[index]
		spread -= 0.5
		k = index - 2;
		j = index + 2;
		while (spread--) {
			outputStr = inpArr[k] + outputStr + inpArr[j]
			k -= 2;
			j += 2;
		}
	}
	
	// console.log(outputStr.length)
	return outputStr
}

//function that adds alternate spaces in the array
function alternendo(arr) {
	opArr = []
	arr.forEach(el => {
		opArr.push(el);
		opArr.push(' ');
	})
	opArr.pop();
	return opArr
}

function getMaxPos(arr) {
	let max = arr[0];
	let j = 0
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > max) {max = arr[i]; j = i}
	}
	return j;
}

//main code
// console.log('helloworld');
let inpStr = 'bbaaa'
console.log(longest_palindrome(inpStr))