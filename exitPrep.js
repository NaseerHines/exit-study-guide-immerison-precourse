// Your mission should you choose to accept it is to complete the following functions. 
// If you choose to do so, you may find that you are ready to crush it on the precourse exit.

// Remember your training:
    // Be sure you understand the instructions.
    // Pseudocode your logic.
    // Breathe.
    // You can do this.

/////////////////////////////////////////////////////////
// MANIPULATING COLLECTIONS
/////////////////////////////////////////////////////////

const pureShuffle = array => {
    // // Inputs: array
    // // outsputs: shuffled array
    // // constraints: can not modify the original array

    // One Way to Pure Shuffle

    // // we need to make a copy of the array so that we dont modify the original
    // // we can use slice
    // let copyArray = array.slice();
    // let shuffled = [];
    // let random;
    // let temp;
    // // we can loop backwards or use each to loop for us
    // // backwards
    // for (var i = copyArray.length - 1; i >= 0; i--) {
    //   //set temp to copyArrays current element in the loop
    //   temp = copyArray[i];
    //   //set a random index on the variable each time in the loop
    //   random = Math.floor(Math.random() * i);
    //   // set the current element of copyArray to copyArray with random as its index
    //   copyArray[i] = copyArray[random];
    //   //  set copy random to the 
    //   copyArray[random] = temp;
    //   // push whatever gets popped of copy array into the back of shuffled array;
    //   shuffled.push(copyArray.pop());
    // }
    // // return shuffled array  
    // return shuffled;

    // One Way to Pure Shuffle but now its just one line
    return array.slice().sort(function() {return 0.5 - Math.random()});
};

const isPalindrome = string => {
    // Input: string
    // Output: boolean value, or undefined
    // constraints: if string is empty, return undefined. 
    
    // we can use chained functions to make a backwards copy of the string 
    let reverseString = string.toLowerCase().split('').reverse().join('');
    // make a variable to hold a boolean value if strings are the same
    let result = string.toLowerCase() === reverseString ? true : false;
    // see if string is undefined if so return that else retrun results
    return string === '' ? undefined : result;
};

// recursion used to test palindrome-iness

// const isPalindrome = string => {
//     string = string.toLowerCase().replace(' ', '');
//     if (string.length === 1 || string.length === 0) return true;
//     if (string[0] === string[string.length - 1]) {
//         return isPalindrome(string.slice(1, -1));
//     } 
//     else {
//         return false;
//     }
// };

const mergeObjects = function(obj) {
    // Input: object/objects
    // Output: single combined object
    // Constraints: none
    // Edge Cases: should use arguments, which can't be used with arrow functions??? 

    /* Arguments is an Array-like object accessible 
    inside functions that contains the values of 
    the arguments passed to that function */

    for (let i = 0; i < arguments.length; i++){
        // set each argument as a variable 
        let currentObject = arguments[i];
        // use each to assign the current objects key value pairs onto obj
        _.each(currentObject, (value, key) => {
            obj[key] = currentObject[key];
        });
    }
    // return original object with combine objects included
    return obj;
};

//////////////////////////////////////////////////////
// USING RECURSION
//////////////////////////////////////////////////////

var replaceValuesInObj = (obj, value, newValue) => {
    // Input: obj, value, replacement value
    // Output: obj modified with new value
    // Constraints: must use recursion

    // loop through the object using a for in 
    for (let key in obj){
        //test if objects value is equal to given value 
        if (obj[key] === value) {
            //if it is reassign it to newValue
            obj[key] = newValue; 
        }
        // Base Case
        if (_.isObject(obj[key])) {
            // Recursive Call
            replaceValuesInObj(obj[key], value, newValue);
        }
    }
    // return change obj
    return obj;
};

var addKeysToExistingObj = (obj, newKey, newValue) => {
    // your code here
};

var map = (arr, func) => {
// Input: array, and function
// Output: array with function applied to each element; 
// Constraints: must use recursion 

    // // default map 
    // let newArray = [];
    // for (var i = 0; i < arr.length; i++) {
    //     newArray.push(func(arr[i], i, arr));
    // }
    // return newArray;

    // map recursively
    // BaseCase
    // see if the arr still has a length if no return array literal
    if (!arr.length) return []; 
    // Recursive Call
    // if length is still there  wrap the function call in an array 
    // concat it with the return of 
    // map recursively called slice of one part each run untill BaseCase is met
    return [func(arr[0])].concat(map(arr.slice(1), func)); 
};


/////////////////////////////////////////////////////////////////
// REDUCE VS CHAINED METHODS
/////////////////////////////////////////////////////////////////

var comedians = [
    { number: 1, actor: "Eddie Murphy", begin: 1980, end: 1984 },
    { number: 2, actor: "Michael Che", begin: 1984, end: 1986 },
    { number: 3, actor: "Damon Wayans", begin: 1985, end: 1986 },
    { number: 4, actor: "Tim Meadows", begin: 1991, end: 2000 },
    { number: 5, actor: "Tracy Morgan", begin: 1996, end: 2003 },
    { number: 6, actor: "Maya Rudolph", begin: 2000, end: 2007 },
    { number: 7, actor: "Kenan Thompson", begin: 2003, end: 2018 },
    { number: 8, actor: "Sterling K. Brown", begin: 2005, end: 2010 },
    { number: 9, actor: "Jay Pharoah", begin: 2010, end: 2016 },
    { number: 10, actor: "Leslie Jones", begin: 2014, end: 2018 },
];

/* Solve by chaining native methods of map and filter only */
var comediansFilteredAndMapped = (comedians) => {
    // Your code here

};

var comedianNamesFilteredAndMapped = (comedians) => {
    // Your code here

};




/* Solve by using native method of reduce only */
var comediansReduced1 = (comedians) => {
    // Your code here

};

var comediansReduced2 = (comedians) => {
    // Your code here

};


/////////////////////////////////////////////////////////////////
// UTILITY FUNCTIONS
////////////////////////////////////////////////////////////////

// IMPLEMENT ANY ADDITIONAL FUNCTIONS THAT YOU MAY NEED HERE
