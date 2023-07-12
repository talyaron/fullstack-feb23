Exercise 4 : the function ages.sort((a, b) => a - b) sorts the array ages in ascending order by age. The sort() method takes a callback function as a parameter. This function is called repeatedly to compare two elements in the array and decide which one goes to the left of the array and which goes to the right. If you're sorting numbers in ascending order, the smallest goes to the left.

The callback function in this case is (a, b) => a - b. This function takes two arguments, a and b, which are the two elements of the array being compared. The function returns a negative number if a is smaller than b, a positive number if a is larger than b, and zero if they are equal.

The sort() method then uses the return value of the callback function to determine the order of the elements in the array. Elements that return a negative number are placed to the left of elements that return a positive number. Elements that return zero are placed in the middle.

As a result, the sort() method will sort the array ages in ascending order by age. The smallest age will be at the left of the array, the largest age will be at the right of the array, and the ages in between will be sorted in between.

map function
the map() method is a higher-order function available for arrays. It allows you to iterate over each element of an array and transform them into a new array based on a callback function that you provide.

Here's the basic syntax of the map() method:
array.map(callback(currentValue[, index[, array]])[, thisArg])
Let's break down each part of the syntax:

array: The array that you want to iterate over and map its elements.
callback: A function to be executed on each element of the array. It takes three arguments:
currentValue: The current element being processed in the array.
index (optional): The index of the current element being processed.
array (optional): The array on which the map() method was called.
thisArg (optional): A value to use as this when executing the callback function.
The map() method returns a new array containing the results of calling the provided callback function on each element of the original array.
exc 6
In the code above, the getEvenNumbers function takes an array of numbers as input and uses the filter method to create a new array containing only the even numbers from the original array. The getRandomNumbersArray function generates an array of random numbers based on the specified length.

The code then creates the numbers array with ten random numbers using the getRandomNumbersArray function and displays it. Next, it calls the getEvenNumbers function with the numbers array as input to obtain the evenNumbers array, which contains only the even numbers. Finally, it logs the original numbers array and the even numbers array to the console.
