
function getDistance(a, b, code) {
	return code(a, b);
}

function getFrom(x, y) {
	distance = Math.sqrt((x - 0) * (x - 0)  + (y - 0) * (y - 0))
	console.log(distance)
	return distance
}


const pi = 180 / Math.PI;
let prevX = 3;
let prevY = 2;
console.log(Math.atan(prevY / prevX) * pi, 'hi')
x = getDistance(3, 2, getFrom) * Math.cos(45 + Math.atan(prevY / prevX) * pi)
y = getDistance(3, 2, getFrom) * Math.sin(45 + Math.atan(prevY / prevX) * pi)
console.log(x, y)

ppX = Math.floor(Math.sqrt(3))
ppY = Math.floor(Math.sqrt(3))
recMan(ppX, ppY)
