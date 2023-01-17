//ex2-map

//1
const numbers = [1,2,3,4,5];
const z = numbers.map((numbers) =>  numbers * 2 )
console.log(z);

//2
const ages = [22,45,89,76];
const newAges = ages.map((x) => x.toString ())
console.log(newAges);

//3
const employees = [
    {name: 'John', age: 25},
    {name: 'Jane', age: 30},
    {name: 'Bob', age: 35}
    ];
    

const names = employees.map((x) => x.name.toUpperCase());
console.log(names);

//4
const indexNumber = numbers.map((nub, index) => index * nub);
console.log(indexNumber);

//EX3 - forEach Practice

//1
let total = 0;
numbers.forEach((num) => total += num);
console.log(total);

//2
let doubleValues = numbers.map((nub) => nub*2);
console.log(doubleValues);

//3
const textArray = ['Hello', 'World'];
const vowelsToString = textArray.map((text) => text.replace(/[aeiou]/gi,'X'))
console.log(vowelsToString);


//4-a
const employees1 = [
    { name: "John", age: 30 },
    { name: "Jane", age: 15 },
    { name: "Bob", age: 35 },
   ];

const checkAge = employees1.forEach((ages, index) => {
    if (ages.age < 20) {
        console.log(`The person at index ${index} is too young.`);
    }
});

///4-b no good
///4-b no good
///4-b no good



//EX3 - filter Practice
//1
let a = [1,2,3,4,5,6,7,12,34,6567,78];
let evenNumber = a.filter((nub) => nub%2 === 0 );
console.log(evenNumber);

//2
let fiveAndGreaterOnly = a.filter((nub) => nub  >= 5 );
console.log(fiveAndGreaterOnly);


//3
let filterClubMembers = ([
    { name: "Angelina Jolie", isClubMember: true },
    { name: "Eric Jones", isClubMember: false },
    { name: "Paris Hilton", isClubMember: true },
    { name: "Kayne West", isClubMember: false },
    { name: "Bob Ziroll", isClubMember: true }
]);

let toCheck = filterClubMembers.filter((member) => member.isClubMember === true);
console.log(toCheck);

//EX3 - find Practice
//1
const array = [5, 12, 8, 130, 44];
const aboveTen = array.find((nub) => nub > 10 );
console.log(aboveTen);


//2
const students = [ 
    { name: 'John', age: 22 },
      { name: 'Jane', age: 23 },
      { name: 'Bob', age: 24 },
      { name: 'Alice', age: 25 }
   ];

const findStudent = students.find ((boy) => boy.name === 'Bob');
console.log(findStudent);
   
const olderThan23 = students.find ((ages) => ages.age >= 23);
console.log(olderThan23);


// EX3 - reduce Practice
//1 - what is the 0 
const input = [1, -4, 12, 0, -3, 29, -150];
const result = input.reduce((sum, nub) => {
  if (nub > 0) {
    sum += nub;
  }
  return sum;
}, 0);
console.log(result);

//2 - not good!

//3 - not good!
// const students = [ 
//     { name: 'John', age: 22 },
//       { name: 'Jane', age: 23 },
//       { name: 'Bob', age: 24 },
//       { name: 'Alice', age: 25 }
//    ];


const findOldest = students.reduce((oldest, student) => (student.age > oldest.age)
 ? student : oldest);

console.log(findOldest);