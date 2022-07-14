// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray


describe("firstShuffle", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"];
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
      expect(["yellow", "blue", "pink", "green"]).toEqual(
        expect.not.arrayContaining(colors1),
        expect(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]).toEqual(
            expect.not.arrayContaining(colors2),
      ));
    });
  });

//* RAN TEST (RESULTS BELOW): *//

// PASS  ./code-challenges.test.js
// firstShuffle
//   ✓ takes in an array, removes the first item from the array and shuffles the remaining content (1 ms)

// b) Create the function that makes the test pass.

//Goal: Takes in an array, removes the first item from the array and shuffles the remaining content

//Pseudocode:
// Declare a function called firstShuffle. 
// Set the parameter as an shuffleArray.
// Use .shift to remove the first element of original array.
// Use .map to put each element in an object type setup and give them a random sort key. 
// Use .sort to produce an a new arrangement using the random key. 
// Return expected output. 

const firstShuffle = (shuffleArray) => {
    return shuffleArray.shift() + shuffleArray.map(value => ({ value, sort: Math.random() })) + shuffleArray.sort((a, b) => a.sort - b.sort)
    
}

//* RAN TEST (RESULTS BELOW): *//

// (N/A - Nothing showed up when I ran the test, just said PASS but only as if I had the describe method aka Part A info only...it didn't register my logic.)

// ** NOTES TO INSTRUCTOR **: I wasn't sure if I used the correct describe method setup based on the linked resource but I made my best guest and received a PASS for it. However, when it came to the second part of the question (the logic) as you can read above in the "RAN TEST" section it didn't register in Jest, it doesn't run the test for my logic for some reason. Any clarity on that? Regarding the logic, I wasn't sure if I should use Math.floor(Math.random() as I thought they may be mostly used for integers but I wasn't sure how else to randomize the elements of the array without it and my research wasn't providing many alternatives either. Side question should I have used .slice? 


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.
describe("minToMax", () => {
    it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
        const nums1 = [3, 56, 90, -8, 0, 23, 6]
        // Expected output: [-8, 90]
        const nums2 = [109, 5, 9, 67, 8, 24]
        // Expected output: [5, 109]
        expect(minToMax([3, 56, 90, -8, 0, 23, 6])).toEqual([-8, 90])
        expect(minToMax([109, 5, 9, 67, 8, 24])).toEqual([5, 109])

    })
})

//* RAN TEST (RESULTS BELOW): *//

// ReferenceError: minToMax is not defined

// b) Create the function that makes the test pass.

//Goal: Takes an array of numbers and returns an array of the minimum and maximum numbers in that order

//Pseudocode:
// Declare a function called minToMax 
// Set the parameter as numericalArray.
// Use .sort method to sort array from ascending order by specifying comparison function correctly. 
// Return desired output. 

// const minToMax= (numericalArray) => {
//     numericalArray.sorts(function(a,b){return a-b;})
//     return a - b; 
// }

//* RAN TEST (RESULTS BELOW): *//

// FAIL 
// TypeError: numericalArray.sorts is not a function. 

// ** NOTES TO INSTRUCTOR **: I was a bit surprised to see this error as a result of running my test, I thought my logic was...well logical. What did I do incorrectly? (Hence why my code is commented out here. )

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("arrayAlliance", () => {
    it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
        const testArray1 = [3, 7, 10, 5, 4, 3, 3]
        const testArray2 = [7, 8, 2, 3, 1, 5, 4]
        // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
        expect(arrayAlliance([3, 7, 10, 5, 4, 3, 3], [7, 8, 2, 3, 1, 5, 4])).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
      
    })
})

//* RAN TEST (RESULTS BELOW): *//

// ReferenceError: arrayAlliance is not defined

// b) Create the function that makes the test pass.

//Goal: Takes in two arrays as arguments and returns one array with no duplicate values

//Pseudocode:
// Declare a function called arrayAlliance. 
// Set the parameter as an array.
// Use .concat to combine original arrays into one
// Use .filter & indexOf to prevent duplicate values within new array 
// Return expected output. 

const arrayAlliance= (combinedArray) => {
    combinedArray.concat() 
    return combinedArray.filter(value) + combinedArray.indexOf(value)
}
//* RAN TEST (RESULTS BELOW): *//

// ReferenceError: value is not defined

// ** NOTES TO INSTRUCTOR **: I'm having some trouble understanding the difference between a Jest function and just writing out normal code in a console; for instance...in this problem, I know I didn't do the `.concat` correct because I didn't plug in or reference which arrays to combine and I know the error from the test I am getting is because I didn't previous define "value", but at the same time I'm not sure how to do so within the mechanisms of Jest, it's like I can write it out in a console and combine the arrays but I'm not sure how to get a passing test with the Jest parameters/above describe method information. Any insights or suggestions to get more clarity on this? I feel like I'm getting better but not really at the same time with these test, if any of this makes sense....