/*
toTitleCase is function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

function	capitalizeWord(word) {
	if (word) {
		const	newWord = word[0].toUpperCase() + word.slice(1);
		return (newWord);
	} else {
		return (word);
	}
}

function	toTitleCase(str) {
	const	arr = str.split(" ");
	const	capArr = arr.map((word) => capitalizeWord(word));
	const	newStr = capArr.join(" ");
	return (newStr);
}

console.log(capitalizeWord("pumpkin")); // Output: "Pumpkin"
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));
// Output : "Pumpkin Pranced Purposefully Across The Pond"
