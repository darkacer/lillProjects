let memoiz = [] 
let num
function swapAt( num, i, j ) {
	let aarr = num.toString(10).split('').map(Number)
	aarr[j]++
	aarr[i]--
	return parseInt(aarr.join(''), 10)
}

function permOver(num) {
	if (memoiz.includes(num)) return 
	memoiz.push(num)
	var arr = num.toString(10).split('').map(Number)
	indicesat = []
	for( i = 0; i < arr.length; i++) {
		if (arr[i] > 0)
		indicesat.push(i)
	}
	indicesat.forEach(el => {
		for(let i = 0; i < arr.length; i++) {
			if (el !== i) {
				permOver(swapAt(num, el, i))
			}
		}
	})
	return
}
permOver(600)
console.log(memoiz, memoiz.length)

// given array of 3 
// sum of all elements should be 6
// find all combinations of such array