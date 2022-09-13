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

// adding comments to demonstrate my logic process

// this function accepts a string and gives you the length of the longest word

// TODO i can use the string.length() method to find the length of every word within the string

//TODO: i can use the Math.max() method to give the highest length, AKA the longest word.

//TODO: define this function:

function longestWord(string){
    //TODO: inside this function, i need to do the following:
    //TODO: 1. i need to separate parts of the string into a comma separated list so i can then count the number of letters in each word. Usually words are separated by a space " " character.
    //TODO: 2. i need to make a copy of the string, and save this copy as an array. I should call it wordList.
        // for example: const wordList = string.split(" ");
    //TODO: 3. now i need to look at each word in the list and count how many letters there are, and i can use a for...of loop for this.
    //TODO: 4. i need to initialize an empty array for my word lengths first though, such as: const wordLengths = [];
        // inside the loop, i need to do the following:
        //TODO: 1. count the number of letters in the word using word.length
        //TODO: 2. push each length value into an empty array, called wordLengths
            /* for example: 
                for(word of wordList){
                    wordLengths.push(word.length)
                }
            */
    //TODO: 5. now that i have an array, wordLengths, i just need to find the greatest value of the list using Math.max(wordLengths). and i might have to spread the list in, like this: Math.max(...wordLengths); but i'm not entirely sure.
    //TODO: 6. save the Math.max result to a variable called longestWordLength
    //TODO: 6. return the longestWordLength variable as a result of the function!
};