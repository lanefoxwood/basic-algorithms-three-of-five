
function repeatStringNumTimes(str, num) {
  let newStr = ""
  if(num <= 0){
    return ""
  } 
  else {
    for(let i=1;i<=num;i++){
      newStr += str;
    }
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);

/* Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
0. return an empty string if num <= 0 CHECK
1. take a blank string and concat the str onto it. CHECK
2. update the value of the blank string to reflect the concat. +=...? CHECK
3. loop over that until done...? */


// adding comments to demonstrate logic process

// this function should receive a string as a first argument and a number as a second argument. it should repeat the string the number of times given. if the number is 0 or less than zero, return an empty string....BIG HINT!!!

//BONUS: make it case-sensitive?

// I already know the trick with this one, which is to start with an empty string, because thats the default case! bingo baby!

//I need to define this function, which takes two arguments and returns a string:

function repeatString(string, number){
  //TODO: inside this function i need to do the following:
  //TODO: 1. initialize a variable called repeatedString and set it to '', empty string.
  //TODO: 2.  make an if check that accepts number and comapres it to 0.
      // if(number <= 0) return repeatedString (which at this point is set to  the blank string'')
      // for all other cases, else, I need to use a loop to concatinate string onto repeatedString.
      //TODO: inside the else check, where number is greater than 0, i need to do the following:
          //TODO: 1. create a for loop that runs from i = 0 to i = number;
              //TODO: inside the for loop i need to take repeatedString and call .concat(string) to it like so: repeatedString.concat(string), which updates the value and returns repeatedString after each iteration of the loop.
      //TODO: aftet the loop is done it returns the updated value of repeatedString, and the else check need to return this value as well.
  //TODO: 3. return the value of repeatedString as a result of the function.  
};



//==============================================================================

// if we weren't able to use the .concat() method, we could use javascript operators, like +, to concatinate the strings.... 
// where inside the for loop we could do the following: 
/* 
      repeatedString = repeatedString + string;
*/

