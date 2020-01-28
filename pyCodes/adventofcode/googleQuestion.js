// code goes here
function findCommon([arr1, arr2]) {
	answer = []
	i = j = 0
	while(i < arr1.length && j < arr2.length) {
		if (arr1[i] === arr2[j]) {			
			answer.push(arr1[i])
			i++
			j++
		} else if (arr1[i] > arr2[j]) {
			j++
		} else {
			i++
		}		
	}
	return answer.length > 0 ? answer : 'false'
}


console.log(findCommon([[1, 2, 4, 9, 13], [2, 4, 8, 13]]))