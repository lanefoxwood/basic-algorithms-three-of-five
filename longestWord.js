function findLongestWordLength(str) {
    const strArr = str.split(' ');
    let longest = 0
    strArr.map(x => {
        if(x.length>=longest){
            longest = x.length
        }})
    return longest;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

/*Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.*/

// for(let word of strArr){
//     if(word.length > longest){
//         longest = word.length
//     }
// }