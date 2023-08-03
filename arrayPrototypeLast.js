/*
	With this 'last' method I extend the built-in Array object in JavaScript by adding it to its prototype.
	Extending prototypes in this way is commonly referred to as "prototypal inheritance"
	and it's a fundamental feature of JavaScript that allows developers to add new methods or properties
	to all instances of a particular object type.

	This method returns the last element of an array.
	If there are no elements in the array, it should return -1.
*/


Array.prototype.last = function() {
    if (this.length === 0)
        return (-1);
    let lastEl = this[this.length - 1];
    return (lastEl);
};

/*
	Example 1:

	Input: nums = [null, {}, 3]
	Output: 3
	Explanation: Calling nums.last() should return the last element: 3.

	-------------------------------------------------------------------

	Example 2:

	Input: nums = []
	Output: -1
	Explanation: Because there are no elements, return -1.
*/
