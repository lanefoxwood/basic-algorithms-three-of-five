function mutation(arr) {
    let first = arr[0];
    let re = RegExp('^[' + first + ']+$', 'i');
    return re.test(arr[1]);
    }
    
  console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));

/*Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
0.basically we need to compare arr[1] to arr[0] and if there is any match, return true..?
1. im thinking double for loop and regex global made from the arr[0]...
2. the arr[0] and arr[1] should be lower case, sure, but we can just ignore case with the i flag...
3. there is a edge case here, where either arr[0] is reversed, or arr[1] is. need an || to reverse one and .test() again.
4. OK, found another edge case...["Mary", "Army"] should return true, so if all chars of  arr[1] are anywhere within arr[0], return true.
4.5 I'm thinking my Regex should look for the char set even if they aren't right next to eachother, could be my test im doing with .test()
*/

// adding comments to demonstrate logic process

// this program is going to accept an array as an argument, which contains two strings as the two elements. It will return a boolean. It returns true if the first string contains ALL of the letters of the second string, regardless of case.

// so i know I want to define a function:

function mutations(array){
  //inside this function i need to do the following:
  //TODO: 1. pull the strings out of the array and save each one as its own variable
      // I can access the value of any array with its index, such as array[0], and array[1]. so...
      //make sure to save them .toLowerCase() like this:
      // const string1 = array[0].toLowerCase()
      // const string2 = array[1].toLowerCase()
  //TODO: 2. check to see if string1  includes string2:
      //string1.includes(string2)
  //TODO: 3. return a boolean as a result of running the function.
};

// an even more concise way of doing the above would be the following:
/* 
  return array[0].toLowerCase().includes(array[1].toLowerCase())
*/

// the only problem would be the edge cases? because if contains all the letters, but the letters are in a mixed up order, it actually should return true. However, the way I;ve written the algorightm using the .includes() method does not account for this. 

//======================================================================================

//to account for the edge case, the program should be modified to not use .includes(),

//the heart of the problem is starting with the first letter in the second string, and comparing "===" to every letter in the first string. if we get a match, we move on to the second letter of the second string. if we do not get a match, then the program exits, returning false. 

//////////////// important to note: if at any time we check "===" and get false, we can safely say that string1 doesn't contain ALL letters in string2. make sure to account for letter case. ///////////////

//TODO: i know i need a function:

function mutateMe(array){
  //inside this function i need to do the following:
  //TODO: 1. select the elements and save them in lowerCase by themselves as two variables, like so:
  // const string1 = array[0].toLowerCase()
  // const string2 = array[1].toLowerCase()
  //TODO: 2. now i need an outer i-loop that selects each index of string2 one at a time. it starts at i = 0 and ends when i < string2.length; i++
      // inside this loop i need to do the following:
      // on the first iteration of the outer i-loop, i will have selected string2[0], but in order to make a comparison i need to access to each index of string1, so it sounds like i need another loop.
      //TODO: 3. i need an inner, j-loop. the j-loop will start at j = 0 and end when j < string1.length; j++
          // inside this inner j-loop i need to do the following:
          //TODO: 1. on the first iteration of this j-loop i will have selected 
          // string2[0] as well as string1[0], so i have to "===" compare them.
          //TODO: 1. make the comparison (string2[i] === string1[j]) ? true : false;
  //TODO: 3. return a boolean as a result of running this function. 

  //BONUS: modify this to perform you loops inside of the array itself. 
};