minesAt = [];
inpt = [
  [".",".",".","*","*","*",".","*","*","*","*","*","*","*","*","*",".","*","*","*","*"],
  [".","*","*","*","*","*","*",".","*","*","*",".","*","*","*",".","*","*",".",".","."]
];
i = 0;
inpt.forEach((el)=> {
  j = 0;
  el.forEach((em) => {
    if (em === "*") minesAt.push([i, j, 0]);
    j++;
  });
  i++;
});
i = 0;
minesAt.forEach(el => {
  j = 0;
  angles = [];
  minesAt.forEach(em => {
    if (i !== j) {
      ang = findAngle(el, em);
      if (angles.indexOf(ang) === -1) angles.push(ang);
    }
    j++;
  });
  el[2] = angles.length;
  i++;
});
minesAt = minesAt.sort((a, b) => b[2] - a[2]);
//console.log(minesAt)
console.log(minesAt[0]);

function findAngle(pt1, pt2) {
  ang = Math.atan((pt1[0] - pt2[0]) / (pt1[1] - pt2[1])) * (180 / Math.PI);
  if (pt1[1] >= pt2[1]) ang += 180;
  return (ang + 360) % 360;
}

//Part 2
x = minesAt[0][0];
y = minesAt[0][1];
fireAt = {};
i = 0;
minesAt.forEach(el => {
  if (i > 0) {
    ang = (findAngle([x, y], el) + 90) % 360;
    minesAt[i][2] = ang;
    if (ang in fireAt) fireAt[ang].push(el);
    else fireAt[ang] = [el];
  }
  i++;
});

minesAt = minesAt.sort((a, b) => a[2] - b[2]);
//console.log(fireAt)
flag = true;
count = 1;
//while(flag)
Object.keys(fireAt)
  .sort((a, b) => a - b)
  .forEach(key => {
    fireAt[key] = fireAt[key].sort((a, b) => {
      x1 = a[0];
      x2 = b[0];
      y1 = a[1];
      y2 = b[1];
      aDist = Math.sqrt(Math.pow(x1 - x, 2) + Math.pow(y1 - y, 2));
      bDist = Math.sqrt(Math.pow(x2 - x, 2) + Math.pow(y2 - y, 2));
      return bDist - aDist;
    });
  });
console.log(fireAt);

while (flag) {
  Object.keys(fireAt)
    .sort((a, b) => a - b)
    .forEach(key => {
      if (fireAt[key].length > 1) {
        //fireAt[key]
      }
    });
}
