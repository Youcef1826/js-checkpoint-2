/*
1)
- Coder une fonction qui inverse une chaine de caractère
- Coder une fonction pour compter le nombre de caractère
- Coder une fonction pour mettre chaque première lettre de chaque mot en majuscule
*/

// 1

function reverse(string1) { // Function to reverse a string
    
    const reverseString = string1.split("").reverse().join(""); // "Split" to add each character in a array, "reverse" to reverse each character on the array and "join" create new string with concatenation.
    console.log(reverseString);
    return reverseString;
};
reverse("Hello world !");

// 2

function count(string2) { // Function to count only characters

    const howManyChar = string2.replace(/\s+/g, "").length; // Replace whitespace with regex
    console.log(howManyChar);
    return howManyChar;
};
count("Hello world !");

// 3

function uppercaseFirstLetter(string3) { // Function to capitalize each first letter of each word

    const stringToArray = string3.split(" "); // Convert string in array

    for (let index = 0; index < stringToArray.length; index++) { //Begin loop

        stringToArray[index] = stringToArray[index][0].toUpperCase() + stringToArray[index].substr(1); // Index = position of word -> first character to uppercase -> substr(1) get the rest of the word 
    };

    const stringToUpperCase = stringToArray.join(" "); // Array to string

    console.log(stringToUpperCase);
    return stringToUpperCase;
};
uppercaseFirstLetter("hello world, i'm youcef !")


/* *******************************************************************************
*************************************************************************
*************************************************************************
2)
- Coder ue fonction pour afficher le plus petite et plus grand nombre dans un tableau
- Coder une fonction pour calculer la somme de tous les élements d'un tableau
- Filtrer un tableau
*/

//2-1)

let array = [10, 20, 30, 40, 50];

function checkNumber(array) { // Function to get highest and lowest number
    
    const highest = Math.max(...array); // Check the highest number
    console.log(highest);

    const lowest = Math.min(...array); // Check the lowest number
    console.log(lowest);

    return highest, lowest;
};
checkNumber(array);


//2-2)

 let array2 = [10, 20, 30, 40, 50];

 function sum(array2) { // Function to calculate all elements on array
    
    let sum = 0; // Declared sum at 0

    for (let index = 0; index < array2.length; index++) { // Loop to add each value in the array
        
        sum += array2[index];
    };
    console.log("Calculate sum of numbers in array : " + sum);
 };
 sum(array2);

 // 2-3)

const age = [15, 18, 25, 30, 19, 14];
const adult = age.filter(filterAge); // Filter array with condition in function

function filterAge(age) { // Function to return trulthy value

    return age >= 18;
};
filterAge(age);
console.log(adult);
 

/* *************************************************************************
*************************************************************************
*************************************************************************
3)
- Calculer la factorielle d'un chiffre/nombre
- Coder une fonction pour vérifier si un nombre est un nombre premier
- Coder la séquence de fibonacci

*/

// 3-1)
function factorialize(n) { // Function to calculate factorial

    let result = n;

    if (n === 0 || n === 1) // Chek if is not factorial of 0 or 1
      return 1;

    while (n > 1) { 
      n--;
      result *= n;
    };

    console.log("Factorial of 5 : " + result + " (5 x 4 x 3 x 2 x 1)");
    return result;

  };
  factorialize(5);



// 3-2)

function primeNumber(nbr) { // Function to check if or not prime number

    for(let i = 2; i < nbr; i++)

      if (nbr % i === 0) { // Chek with modulo

        return "This is not a prime number";
      };

    return true+ " : it's prime number";
  };
  console.log(primeNumber(5));

// 3-3)

const fibonacciNumber = 10;
let number1 = 0;
let number2 = 1;

function fibonacciSequence(fibonacciNumber) { // Function to fibonacci sequence
    
    let next;

    for (let i = 0; i <= fibonacciNumber; i++) { //Loop
        console.log("Fibonacci : " + number1); // Show number1 at 0 then 1 then 1 then 2 then 3 then 5 then 8 then ...

        next = number1 + number2; // next = 1 then 2 then 3 then 5 then 8 then 13 then 21  ...
        number1 = number2; // number1 = 1 then 1 then 2 then 3 then 5 then 8 then 13 ...
        number2 = next; // number2 = 1 then 2 then 3 then 5 then 8 then 13 then 21 ...
    };
};
fibonacciSequence(fibonacciNumber);
