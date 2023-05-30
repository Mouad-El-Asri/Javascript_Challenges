/* This function take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end.
If the string is a phrase or sentence, I added a 😱 emoji in between each word.
I used JavaScript's built in string methods.  */

function panic(str) {
    let panicStr = str.split(" ").join(" 😱 ").toUpperCase() + "!";

    return panicStr;
}

console.log(panic("I'm almost out of coffee")); // Output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!""
console.log(panic("winter is coming")); // Output: "WINTER 😱 IS 😱 COMING!""
console.log(panic("Hello")); // Output: "HELLO!"
