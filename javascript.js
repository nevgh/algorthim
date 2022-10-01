/* one */ 

let names = [ "ninos", "jacob", "sargon", "jacob" ];
let newNames = names.filter(
function(element, index) {
return names.indexOf(element) === index;
});

console.log(newNames);

// trial 2
/* Method 2*/

let name = ["nevean", "ninos", "sargon", "nevean", "ninos", "jay", "ninos", "jay"];
let newNames = [];

for ( var i = 0; i<name.length; i++) {
if (!newNames.includes(name[i])) {
newNames.push(name[i]);}
}

console.log(newNames);



/* two */ 
let names = [ "ninos", "jacob"];
names.forEach(myFunction); 
function myFunction(item) {
names.push(item);
}
console.log(names.sort());

Or 

let names = [ "ninos", "jacob"];
let newArr= names.concat(names).sort();
console.log(newArr);


/* three */ 
let arr1 = [2,5,2];
let arr2 = [7,8,10];
let mergedArr = arr1.concat(arr2);
console.log(mergedArr);

/* three without concat */

let arr1 = [2,5,2];
let arr2 = [7,8,10];

for ( let i = 0; i < arr2.length; i++) {
arr1.push(arr2[i]);

}

console.log(arr1)


/* four */ 
let numbers= [1,2,3,4];

function divide(arr) {
if (arr.length <= 1) {
console.log(arr);
} 

else if(arr.length%2 !== 0){ 
console.log("can't split in half");}
else {
let halfPoint = arr.length/2;
let newArr1= arr.slice(0,halfPoint);
let newArr2= arr.slice(halfPoint,arr.length);
console.log(newArr1,newArr2);

}
}

divide(numbers);



/* five */ 
let numbers = [4, 2, 5, 10]; 
let average = numbers.reduce(
(total, n) => total + n) / numbers.length;

console.log(Math.floor(average));




/* six */ 
let numbers = [4, 2, 5, 10, 150];
 
let largeNum = Math.max(...numbers);
console.log(largeNum);
 
/* "without cheating" */

let numbers = [4, 2, 44, 568, 5, 10, 150, 20];
var maxNum = numbers[0];

for ( var i = 0; i < numbers.length; i++) {

if (maxNum < numbers[i]) {
maxNum = numbers[i];
}
}

console.log(maxNum);

/* seven */ 
let numbers = [4, 2, 5, 10, 150];
 
let reverseNum = numbers.reverse();
console.log(reverseNum);


/* eight */ 

let numbers=[20, 56, 11, 45];

 let total = numbers.reduce(
 (total, n) => total + n); 
 
 if(total < 100){
 console.log(numbers);
 }
 
 else if(total > 100){
 let arr2 = [];
 arr2.length = numbers.length;
 arr2.fill(100);
 console.log(numbers.concat(arr2));
 
 }
 
 else {
 console.log(100);
 }
 
 
