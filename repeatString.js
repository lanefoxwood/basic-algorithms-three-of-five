
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
