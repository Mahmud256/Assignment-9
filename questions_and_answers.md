- Number-1: 

let greeting;

greetign = {};

console.log(greetign);

- A: {}
- B: ReferenceError: greetign is not defined
- C: undefined

Ans(1)= A: {}

- explain: In the code greeting = {};, This're declaring a variable named "greeting" and assigning it an empty object {}. This means "greeting" now holds an empty container that can store key-value pairs. When log the "greeting" variable with console.log(greeting);, it outputs the empty object {} to the console, indicating that "greeting" is an empty object at that moment. the output is {}.

- Number-2: 

function sum(a, b) {

  return a + b;

}

sum(1, "2");

- A: NaN
- B: TypeError
- C: "12"
- D: 3

Ans(2)= C: "12"

- explain: In the code the sum function, attempting to add two parameters, a and b. However, when call sum(1, "2");, this are passing the number 1 and the string "2" as arguments. JavaScript performs type coercion, trying to convert the string to a number for addition, but since one of the operands is a string, it concatenates them instead of performing numeric addition. So, the result is the string "12".

- Number-3: 

const food = ["🍕", "🍫", "🥑", "🍔"];

const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);

- A: ['🍕', '🍫', '🥑', '🍔']
- B: ['🍝', '🍫', '🥑', '🍔']
- C: ['🍝', '🍕', '🍫', '🥑', '🍔']
- D: ReferenceError

Ans(3)= A: ['🍕', '🍫', '🥑', '🍔']

- explain: The first line of code creates a constant array called food with four elements: "🍕", "🍫", "🥑", and "🍔". The second line of code creates a constant object called info with a single property, favoriteFood, which is initialized to the value of the first element in the food array, "🍕". The third line of code changes the value of the favoriteFood property of the info object to "🍝". The fourth line of code logs the value of the food array to the console. Since the food array is a constant variable, its value cannot be changed. Therefore, the output of the code is the original value of the food array, which is ['🍕', '🍫', '🥑', '🍔'].

- Number-4: 

function sayHi(name) {

  return `Hi there, ${name}`;

}

console.log(sayHi());

- A: Hi there,
- B: Hi there, undefined
- C: Hi there, null
- D: ReferenceError

Ans(4)= B: Hi there, undefined

- explain: The sayHi() function takes a name as input and returns a string greeting the person by name. However, when call the sayHi() function without passing any arguments, it will return the default value for its parameter, which is undefined. The console.log() function prints the value of its argument to the browser console, so when call console.log(sayHi());, it will print the value of undefined to the browser console. Therefore, the output of the code function sayHi(name) { returnHi there, ${name}; } console.log(sayHi()); Output is Hi there, undefined.

- Number-5: 

let count = 0;

const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  
  if (num) count += 1;

});

console.log(count);

- A: 1
- B: 2
- C: 3
- D: 4

Ans(5)= C: 3

- explain: the nums array contains four elements: 0, 1, 2, and 3. The first element in the array is 0, which is a zero value. The other three elements in the array are 1, 2, and 3, which are all non-zero values. Therefore, the forEach() method will increment the count variable by 1 three times. After the forEach() method has finished iterating over the array, the count variable will contain the value 3. Finally, the console.log() function will print the value of the count variable to the console, which output is 3.