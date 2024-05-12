// Question 1:

// Write a JavaScript for loop that iterates from 0 to 10 and prints only the even numbers.

// => for(var i=0; i<=10; i++){
//     // console.log(i)
//     if(i%2==1){
//          console.log(i)
//     }
// }


// Question 2:

// Write a JavaScript while loop that calculates the factorial of a given number.
// factorial number=5;

// let num=5;
// var i=1;
// var x=1;
// while(i<=5){
//     x=x*i
//     i++
// }
// console.log(x)
// let x=1;
// for(var i=1; i<=5; i++){
//     x=x*i

// }
// console.log(x)



// Question 3:

// Create a JavaScript function that takes an array of numbers as input and returns the sum of 
// all the numbers using a for loop.
// const Arraynum=[1,2,3,4,5,6,7,8,9]
// var plus=0;


// function additionofallnumber(array,add){
//     for(i=0; i<=array.length-1; i++){
//         console.log(array[i])
//         add+=array[i]
       
//     }
//     console.log(add)
// }

// additionofallnumber(Arraynum,plus)



// Question 4:

// Write a JavaScript program that generates a Fibonacci sequence up to a certain number n, using a while loop.



// Question 5:

// Create a JavaScript function that takes an array of strings as input and returns a
//  new array with only the strings that have a length greater than 5 characters.



function findlenght(arr){
    var emptyarr=[];
    for(i=0; i<arr.length; i++){
        if(arr[i].length > 5){
            console.log(arr[i])
            emptyarr.push(arr[i])
        

            
        }
    }
    return emptyarr;
}
var palayerarray=["virat","rohit","rahul","rishab","klrahul","manishpanday"];

const newarray=findlenght(palayerarray)
console.log(newarray);

// Question 6:

// Write a JavaScript function that takes a number as input and returns true if it is a prime number, otherwise false.

// var Pn=2;
// function checkNumberisPrim(primenum){
//     check=true;
//    for(var i=1; i <= 5; i++){
//        console.log(i)
//     if(primenum % i==0){
//         check=false;
//         break;
//     }
//    }
//    if(check == true){
//     console.log("number is prime")
//    }else(
//     console.log("number is not prime")
//    )
// }

// checkNumberisPrim(2);


// function checkPrime(num) {
//     let i, flag = true;
//     for (i = 2; i <= num - 1; i++) {
//         if (num % i == 0) {
//             flag = false;
//             break;
//         }
//     }
//     if (flag == true)
//         console.log(num + " is prime");
//     else
//         console.log(num + " is not prime");
// }
// checkPrime(4);
// checkPrime(5);

// Question 7:

// Create a JavaScript program that calculates the sum of all numbers from 1 to 1000 that
// are divisible by both 3 and 5.











