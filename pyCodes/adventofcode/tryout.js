minesAt = [];
inpt = [
  [".",".",".","*","*","*",".","*","*","*","*","*","*","*","*","*",".","*","*","*","*"],
  [".","*","*","*","*","*","*",".","*","*","*",".","*","*","*",".","*","*",".",".","."]
];
i = 0;
function printIndexOf(elem) {
	if(Array.isArray(elem)) {
		j = 0
		elem.map(printIndexOf)
		i++
	} else {
		if (elem === "*") minesAt.push([i, j, 0])
		j++
	}
}
function findAngle(pt1, pt2) {
	ang = Math.atan((pt1[0] - pt2[0]) / (pt1[1] - pt2[1])) * (180 / Math.PI);
	if (pt1[1] >= pt2[1]) ang += 180;
	return (ang + 360) % 360;
}
inpt.map(printIndexOf)
console.log(minesAt)

minesAt.forEach(el => {
	angles = []
	minesAt.forEach(em => {
		if(el !== em) {
			ang = findAngle(el, em);
			if (angles.indexOf(ang) === -1) angles.push(ang);
		}
	})
	el[2] = angles.length
})
console.log(minesAt)
var max = minesAt.reduce(function (accumulator, elem) {
  return elem[2] > accumulator ? elem[2] : accumulator ;
}, 0);
console.log(max)