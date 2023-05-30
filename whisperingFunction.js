/* This whisper function takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function also removes an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping" */

function whisper(str)
{
	if (str.endsWith("!"))
		str = str.slice(0, -1);
	str = "shh... " + str.toLowerCase();
	return (str);
}

console.log(whisper("PLEASE STOP SHOUTING.")); // Output : shh... please stop shouting.
console.log(whisper("MA'AM, this is a Wendy's!")); // Output : shh... ma'am, this is a wendy's
