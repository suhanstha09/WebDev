// // compiled language
// //      first need to compile
// //      usualy dont compile if there is an error in the code 
// //      Example: C, C++, Java

// //      Interpreted language
// //      usually go line by line
// //         Example: JavaScript, Python, Ruby

// // Javascript memory management consists of two types: call stack and heap
// // Heap consists of functions, array and objects
// //       stack consists of primetive data (like number, strings, boolean)

// // global execution cotext
// // execution context  -> (like wise global variable in cpp either global or local variable)


// // ways to store data in javascript
// // var a = 20;
// //  let b = 30;
// //  const c = 40;
// // // var is function scoped, let and const are block scoped
// // // var can be redeclared, let and const cannot be redeclared
// //  v=34

// // To find the data type 
// // use typeof(...) // if there is function use bracket otherwise just {typeof}

// // let a ="Kathmandu";
// // b=10;

// console.log(typeof a)

// function myFunction() {                 //this all section of function is scope.
//     // code here                        //this all section of function is scope.
//     //scope                             //this all section of function is scope.
//                                         //this all section of function is scope.
// }                                       //this all section of function is scope.

// //we use object to create unique object key value...
// // let name:"Feroz"  // where name is key and Feroz is value...

// let a = "Feroz"

// let arr1 = [23,43,"Feroz",true,"Ali",]  //heterogeneous data can be stored...----->>> array is the collection of heterogeneous variable.

// let obj1={
//     name:"Feroz Ali",
//     age:20
// }

/*
var is a keyword in JavaScript used to declare variables. 
Variables declared with var are function-scoped, meaning they are accessible within the function they are declared in, or globally if declared outside any function. 
Unlike let and const, var allows redeclaration and is hoisted to the top of its scope, but its value is not initialized until the code execution reaches the declaration.
Example:
var x = 10;
*/


// let a = "Firoj"
// console.log(a)

// //logical operator>>
// // //&&>> AND , negation 
// //! >> NOT

// //Bitwise Operator
// console.log(5 & 1)  //AND
// console.log (5^1)   //OR
// console.log (~1)    //NOT 


// let age = 19

// let result = (age>=18)?"Adult":"Minor";
// let value = (age>=18)?2+3:3-1;
// console.log(result)
// console.log(value)



// // optional chaining

// let user = {
//     "name":"Feroz"
// }

// console.log(user.name)      //By ? Throw error if there is undefined & its applicable for api and websites.... 
// console.log(user?.age)      //By ? Not Throw an error if there is undefined & its applicable for api and websites....


// //sum of 2 var

// // let a=5;
// // let b=3; or other method

// a=4
// b=9
// console.log(a+b)

// Marks wala pass fail wala

// marks = 85

// if(marks>=90 && marks<=100){
//     console.log("A+")
// }
// else if(marks>=80 && marks<90){
//     console.log("A")
// }
// else{
//     console.log("you r failed....😉")
// }

// //To check the positive or negative number using ternary operators....
// let num=0
// let x = (num > 0)? "positive":(num<0)?"negative":"zero";
// console.log(x);

// // Write a program that calculate an electricity bill based on units..a
// =>First 100 units -> free
// =>Next 100 units -> $5/unit
// =>Next 100 units -> $7/unit
// =>Above 300 units -> $10/unit

//   let units = 350;

//   if (units <= 100) {
//     bill = 0;
//   } 
//   else if (units <= 200) {
//     bill = (units - 100) * 5;
//   } 
//   else if (units <= 300) {
//     bill = (100 * 5) + (units - 200) * 7;
//   } else {
//     bill = (100 * 5) + (100 * 7) + (units - 300) * 10;
//   }

// console.log("Total money paying shit : ",bill)

//Switch case

// let x=7

// switch(x){
//     case 1:
//         console.log("Case 1")
//     case 2:
//         console.log("case 2")
//         // break // if break use nagarey par case 2 laii execute garem bhani case 3 pani execute hunxa so 
//         // result case 2 rw case 3 aaunxa
//     case 3:
//         console.log("case 3")
//         break
//     default:
//         console.log("we can go home....😘")
//         break
// }



//Array

// let arr1 = []

// let superheros = ["Thor","Ironman","Captain-America"]
//To print Captain-America .....we gave index number 2 in superheros arr container....
// console.log(superheros[2])

//To print whole array container....
// console.log(superheros)

// const student={
//     name:"Feroz",
//     age:20
// }

// console.log(typeof superheros)      //This is the method .....To find the superheros container is either object or what.
// console.log(student.name)
// console.log(student.age)

// superheros.push("Blank Panther")     //To add extra data in the end index of the container
// superheros.pop("Captain-America")       //To remove the existance data from the index of the container
//  let x = superheros.shift()     //shift le left tira data shift garxa and sabai bhanda left ko data chaii gayeb 
//                                 // hunxa tesaile let var garera print garesi tyo gayeb bhako data laii nii 
//                                 // print garauna milxa dhanyabad
// console.log(x)

// superheros[3]="Bucky"       //yesley index 3 ma bucky print garxa but
// superheros[5]="Bucky"       //yesley chaii index 5 ma print garxa and tyo bhanda aagadiko index haru chaii 
// empty index bhanera show garxa rw yesari garda aaru language le wrong bhanxa 
//but javascript ma chaii chill ma chaldinxa dhanyabad...
// console.log(superheros)


//To swap 2 numbers without using third temp variable..

// a=50.25
// b=30

// // a=a+b
// // b=a-b
// // a=a-b

// // Another Method which works only on integers
// b=a^b
// a=a^b
// a=a^b

// console.log("a =",a)
// console.log("b =",b)


// // Loop
// // Types of loops in JavaScript:

// // 1. for loop
// for (let i = 0; i < 5; i++) {
//     console.log("for loop:", i);
// }

// // 2. while loop
// let j = 0;
// while (j < 5) {
//     console.log("while loop:", j);
//     j++;
// }

// // 3. do...while loop
// let k = 0;
// do {
//     console.log("do...while loop:", k);
//     k++;
// } while (k < 5);

// // 4. for...of loop (for arrays and iterable objects)
// const arr = [10, 20, 30];
// for (const value of arr) {
//     console.log("for...of loop:", value);
// }

// // 5. for...in loop (for object properties)
// const obj = { a: 1, b: 2, c: 3 };
// for (const key in obj) {
//     console.log("for...in loop:", key, obj[key]);
// }

// Multiplication table of 2 or any number
// let n=2
// for(let i=1;i<=10;i++){
// console.log(n, "x", i ,"=", n*i)
// }

// // Factorial of a number using a simple for loop
// let n = 5, fact = 1;

// // for (let i = 1; i <= n; i++) {
// //     fact *= i;
// // }

// temp=n              //using temp cuz of it will not show the real value of number after decrement while 
//                     // displaying result

// // Another Method of factorial
// while(temp!=0){
//     fact*=temp
//     temp--
// }

// console.log("Factorial of given number", n, "is:", fact);






// for(let i=1;i<=100;i++){
//     if(i%3==0 && i%5==0){
//         console.log("gpt dalle")
//     }else if(i%3==0){
//         console.log("gpt")
//     }else if(i%5==0){
//         console.log("dalle")
//     }else{
//         console.log(i)
//     }
// }


// let num = 345
// let temp = num
// let sum = 0
// let rem
// while (num > 0) {
//     rem = num % 10;
//     sum += rem;
//     num = Math.floor(num / 10)
// }
// console.log("The sum of digits of the given number", temp, "is : ", sum)




// function sumOfDigit(n) {
//     let x = 0;
//      n = Math.abs(n); 
//     while(n > 0){
//         x += n % 10;
//          n = Math.floor(n / 10);
//     }
//     return x
// }

// console.log(sumOfDigit(-123))




// //To generate random OTP in JS 
// function generateOTP() {
//   // Generate a random number between 100,000 and 999,999 (inclusive)
//   const otp = Math.floor(100000 + Math.random() * 900000);
//   return otp;
// }

// // Example usage:
// const myOtp = generateOTP();
// console.log(myOtp); // Outputs a 6-digit number like 537291





// Pata nahi kuch toh hai lekin
// let x = 234;
// while (x > 0) {
//     let sum = 0;
//     let z = x % 10;
//     sum += z
// }

// console.log(x)




// // To reverse the digits 
// function reverse(n){
//     result = 0
//     while(n!=0){
//         rem=n%10
//         result=result*10+rem
//         n=Math.floor(n/10)
//     }
//     console.log(result)
// }
// reverse(234)




// Prompt user alert message

// let userName = prompt("Enter your name: ")
// console.log("Please your name: ", userName)



// function sumOfSquare(a,b){
//     // let c= a**2+b**2
//     return a**2+b**2
// }
// let add = sumOfSquare(2,3)
// console.log("The sum of your number is ",add)


// // for multliple use 
// function square(n){
//     return n*n
// }

// function cube(n){
//     return n*n*n
// }

// // function SumOfSquare(a,b){
// //     const val1 = square(a)
// //     const val2 = square(b)
// //     return val1+val2
// // }

// // function SumOfCube(a,b){
// //     const val1 = cube(a)
// //     const val2 = cube(b)
// //     return val1+val2
// // }

// // let sum = SumOfSquare(2,3)
// // let sumC = SumOfCube(2,3)



// //Callback Function or we can say funtional argument

// function SumOfSquare(a,b,fn){
//     const val1 = fn(a)
//     const val2 = fn(b)
//     return val1+val2
// }

// function SumOfCube(a,b,fn){
//     const val1 = fn(a)
//     const val2 = fn(b)
//     return val1+val2
// }

// let sum = SumOfSquare(2,3,square)
// let sumC = SumOfCube(2,3,cube)


// console.log("Your sum of two square is ",sum)
// console.log("Your sum of two cube is ",sumC)





// //Create a list of students with id, name, course , id should be unique and no need to insert mannually

// let studentId = 1;

// function createStudent(name, course) {
//     return {
//         id: studentId++,
//         name: name,
//         course: course
//     };
// }

// // Create list of students
// const students = [
//     createStudent("Alice", "Computer Science"),
//     createStudent("Bob", "Mathematics"),
//     createStudent("Charlie", "Physics")
// ];

// // Display the list
// console.log(students);



