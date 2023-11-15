//! Array Methods

//! Push Method
// Add an element to the end of the array

// let array1 = [1,2,3,4,5];
// console.log("Array Before Push: ", array1);
// array1.push(6);
// console.log("Array after Push: ", array1);

//! Pop Method
// Remove an element from the end of the array

// let array1 = [1,2,3,4,5];
// console.log("Array Before Pull: ", array1);
// array1.pop();
// console.log("Array after Pull: ", array1);

//! Shift Method

//! Shift Method
// Remove an element from the start of the array

// let array1 = [1,2,3,4,5];
// console.log("Array Before Shift: ", array1);
// array1.shift();
// console.log("Array after Shift: ", array1);

//! Unshift Method
// Add an element at the start of the array

// let array1 = [2,3,4,5];
// console.log("Array Before Unshift: ", array1);
// array1.unshift(1);
// console.log("Array after Unshift: ", array1);

//! indexOf Method
// Gives us the index of the particular element in the array

// let array1 = [1,2,3,4,5];
// console.log("Index of 3 is: ", array1.indexOf(3));

//! includes Method
// Check an element is includes in the array or not.

// let array1 = [1,2,3,4,5];
// console.log("6 includes in the array: ", array1.includes(6));
// console.log("3 includes in the array: ", array1.includes(3));

//! slice Method
// Select a specific part from array, copy in new array, its explicit means end index will not include in new array

// let array1 = [1,2,3,4,5];
// console.log("Array Before Slice: ", array1);
// console.log("New copied array after Slice: ", array1.slice(1, 4));

//! Splice Method
// Delete specific part from array, and shows it result. End index will be included in it unlike slice.

// let array1 = [1,2,3,4,5];
// console.log("Array Before Slice: ", array1);
// console.log("New array after Splice: ", array1.splice(2, 4));

//! Reverse Method
// Reverse the elements of the array

// let array1 = [1,2,3,4,5];
// console.log("Array Before Reverse: ", array1);
// console.log("Array after Reverse: ", array1.reverse());

//! Concat Method
// Combines two or more arrays

// let array1 = [1,2,3,4,5];
// let array2 = [6,7,8,9,10];
// console.log("Array Before Concat: ", array1);
// console.log("New Array after Concat: ", array1.concat(array2));

//! Sort Method
// Sort an array in Ascending Order

// let array1 = [1,4,5,2,3];
// console.log("Array Before Sort: ", array1);
// console.log("New Array after Sort: ", array1.sort());

//! Join Method
// Turn array into string with a specific separator 

// let array1 = [1,2,3,4,5];
// console.log("Array Before Join: ", array1);
// let numbers = array1.join("-");
// console.log("String after Join: ", numbers );

//! Map Method
// Used to perform some kind of function which returns a new array

// let array1 = [1,2,3,4,5];
// console.log("Array Before Map: ", array1);
// let array2 = array1.map(num=>{return num*2});
// console.log("New Array after Map: ", array2 );

//! Filter Method
// Search array via a function for a condition, and return new array contains elements which meets the condition

// let array1 = [1,2,3,4,5];
// console.log("Array Before Filter: ", array1);
// let array2 = array1.filter(num=>{return num>3});
// console.log("New Array after Filter: ", array2 );

//! Reduce Method
// Reduce array to on value via a function which returns the result as an argument for next time use in same function

// let array1 = [3,4,5];
// console.log("Array Before Reduce Method: ", array1);
// let array2 = array1.reduce(num=>{return num+num});
// console.log("Results after Reduce: ", array2 );

//! Find Method
// Will return the first elements satisfying the condition and ignore others even if it meets condition.

// let array1 = [1,2,3,4,5];
// console.log("Array Before Find Method: ", array1);
// let array2 = array1.find(num=>{return num>3});
// console.log("Results after Find Method: ", array2 );

//! Flat Method
// Used to flatten nested arrays

// let array1 = [1,2, [3,[4,5]]];
// console.log("Array Before Flat Method: ", array1);
// let array2 = array1.flat(2); // 2 is the depth level
// console.log("Results after Flat Method: ", array2 );

//! Flatmap Method
// Combination of Map and Flat

let array1 = [1,2,3,4,5];
console.log("Array Before Flatmap Method: ", array1);
let array2 = array1.flatMap(num=>{return num*2});
console.log("Results after Flatmap Method: ", array2 );