// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name which is set to a string named 'Dane'.
// We create a if/else statement where the condition is that, if the variable name is equal and equal in type to 'Mary' then it will console.log 'Hi Mary!'   
// If the variable name is not 'Mary' then the else condition will output the console.log 'How do you do?'. The variable is not equal to 'Mary'. 
// So we console.log 'How do you do?'  

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a variable called secret which is currenlty undefined. We create a variable called code which is set to 123. 
// An if stament is created with a conditional where if code is equal and equal in type to the number 123. Then variable secret is equal to 'super'. variable code is equal to code muliplied by 2.   
// So code is equal to 123. We multiply 123 by 2 which equals 246. Another if statement is created where the conditional is set where if code is greater than 250 variable secret is equal to 'duper'. code is not greater than 250.
// We console.log(secret) as 'super'.  


//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create the variables isStudent and set it to the boolean true, the variable age which equals 34, and the variable zip which equals 55407.  
// We create an if statement with double ANDs where the first condition is the variable isStudent is equal and equal in type to true with the second condition is the variable zip is greater than 80000.  
// The variable isStudent is true so we check the second condition, the variable zip is not greater than 80000.  
// Two else if statements is nested in between the if/else statement. The first else if statement has an OR operator between the conditions, the first condition if the variable isStudent is equal and equal in type to false, the second condition is variable age being less than 30. If and only if the first condition is false then console.log('What are your hobbies?'). First conditon is true and not false. 
// Second else if statement is if isStudent is equal and equal in type to true. Then console.log 'Welcome to Prime!'.  We Console.log 'Welcome to Prime'. 
// else statement is set to console.log('How about the weather?'). Else statment is not outputed. 

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX -color 
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

