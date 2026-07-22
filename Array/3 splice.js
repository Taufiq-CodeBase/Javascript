//type-1 — DELETE: remove 1 element at index 2
const a = ["Jan", "Feb", "BAD", "Mar","Apr"];
console.log(a);

const removed = a.splice(2,1)
console.log(a);

console.log(removed)


//type-2 — INSERT: at index 1, delete 0, insert "NEW"
a.splice(1, 0, "NEW"); 
console.log(a);

//type-3 — REPLACE: at index 1, delete 1, insert two items
a.splice(1, 1, "X", "Y"); 
console.log(a);


/*output
['Jan', 'Feb', 'BAD', 'Mar', 'Apr']
['Jan', 'Feb', 'Mar', 'Apr']
['BAD']
['Jan', 'NEW', 'Feb', 'Mar', 'Apr']
['Jan', 'X', 'Y', 'Feb', 'Mar', 'Apr']
*/
