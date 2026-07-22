const marks = [78, 92, 65, 88];

console.log(marks[0]);
console.log(marks[3]); 
console.log(marks.length);
console.log(marks[marks.length - 1]);

marks[1] = 99
console.log(marks[1]);


let sum = 0;
for(let i=0; i<marks.length; i++){
  sum+=marks[i];
}

console.log(sum);

let max=0;
for (let i = 0; i < marks.length; i++) {
  if (marks[i]>max) {
    max=marks[i];
  }
}

console.log(max);


