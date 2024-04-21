// node stringMethod.js 
str1 = "Anish";
str2 = 'String';
str3 = `               Multi Line`;

console.log(str1.length);
console.log(str1.concat(' ',str2));
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
arr1 = [];
arr1 = [1,2,3,4,5];
console.log(arr1);

str4 = '1 2 3 4 5';
console.log(str4.split());
console.log(str4.split(""));
console.log(str4.split(" ").join('*'));
console.log(str1.charAt(2));
console.log(str1.charCodeAt(2));
console.log(str3.length);
console.log(str3.trim().length);

let text = "Please Find Attached";
let newtext = text.replace("Attached","Removed");
console.log(newtext);
console.log(text.includes("Please"));
