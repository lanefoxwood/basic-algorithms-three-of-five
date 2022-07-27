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