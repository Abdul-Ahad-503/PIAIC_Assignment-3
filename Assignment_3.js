"use strict";
// Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
{
    function modarr(arr, index, value) {
        arr.splice(index, 0, value);
        return arr;
    }
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var index = 5;
    var value = 345;
    console.log(modarr(array, index, value));
    console.log("...................................................................");
}
// Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
{
    function addItemToCart(arr, item) {
        arr.push(item);
        return arr;
    }
    function removeItemFromCart(arr, item) {
        var index = arr.indexOf(item);
        arr.splice(index, 1);
        return arr;
    }
    function updateCart(arr, index, item) {
        arr.splice(index, 0, item);
        return arr;
    }
    var cart = ["Cookies", "Coffee", "Soft Drinks",];
    console.log(addItemToCart(cart, "Cakes"));
    console.log(removeItemFromCart(cart, "Coffee"));
    console.log(updateCart(cart, 2, "Coke"));
}
// Write a program that uses a while loop to print the first 25 integers.
{
    var i = 1;
    while (i <= 25) {
        console.log(i);
        i++;
    }
    console.log("...................................................................");
}
// Write a program that uses a while loop to print the first 10 even numbers.
{
    var i = 0;
    while (i <= 18) {
        if (i % 2 == 0) {
            console.log("Even number is ", i);
        }
        i++;
    }
    console.log("...................................................................");
}
//  Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
{
    function factorial(n) {
        var result = 1;
        while (n >= 1) {
            result *= n;
            n--;
        }
        return result;
    }
    var num = 5;
    console.log(`Factorial of ${num} is: ${factorial(num)}`);
    console.log("...................................................................");
}
// Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
{
    var arr = [1, 2, -3, 4, -5, -6, 7, -8, -9, 10];
    var i = 0;
    while (i <= arr.length - 1) {
        if (arr[i] < 0) {
            arr.splice(i, 1);
        }
        else
            i++;
    }
    console.log(arr);
    console.log("...................................................................");
}
// Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
{
    function sumOfArray(arr) {
        var result = 0;
        var i = 0;
        while (i <= arr.length - 1) {
            result = result + arr[i];
            i++;
        }
        return result;
    }
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log("Sum of elements of array: " + sumOfArray(array));
    console.log("...................................................................");
}
//  Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
{
    var tempInC = [37, 23, 57, 34, 65, 84, 28, 56];
    var tempInF = [];
    var i = 0;
    while (i <= tempInC.length - 1) {
        tempInF[i] = (tempInC[i] * 9 / 5) + 32;
        i++;
    }
    console.log(tempInF);
    console.log("...................................................................");
}
