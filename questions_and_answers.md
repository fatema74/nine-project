<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer: This code snippet initializes a variable greeting without assigning it a specific value initially. Later, it assigns an empty object {} to the greeting variable. Finally, it logs the value of greeting (which is an empty object) to the console using console.log().</b></summary>
<p>

#### Answer:  A: `{}`?

<i>Write your explanation here</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer: In JavaScript, when the + operator encounters a string and a number, it performs concatenation instead of numerical addition. In this case, the number 1 is added to the string "2", resulting in a concatenated string "12" instead of the mathematical sum. Therefore, the output of sum(1, "2"); would be "12" (a string concatenation).</b></summary>
<p>

#### Answer: C: `"12"`?

<i>Write your explanation here</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer: The code first initializes an array food containing food emojis and an object info with a property favoriteFood set to the first element of the food array ("🍕"). Later, it modifies the info.favoriteFood value to "🍝".

However, altering info.favoriteFood doesn’t affect the original food array, as the variable info is a separate object holding a copy of the emoji "🍕" from the food array. Thus, console.log(food); will output the original food array: ["🍕", "🍫", "🥑", "🍔"].</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`?

<i>Write your explanation here</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer: The sayHi() function expects a name parameter when it's called. However, in the console.log(sayHi()); line, the function is invoked without passing any argument.

In JavaScript, if a parameter is not provided for a function argument, it defaults to undefined. Therefore, the function call sayHi() returns Hi there, undefined because the name parameter is not passed, resulting in name being undefined within the function.</b></summary>
<p>

#### Answer: B: `Hi there, undefined`?

<i>Write your explanation here</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer: In this code snippet, the variable count is initially set to 0, and there's an array nums containing numbers. The forEach method iterates through each element in the nums array. Inside the callback function, the condition if (num) checks for truthy values in the array (1, 2, 3), incrementing the count variable by 1 for each truthy value encountered.

As a result, the console.log(count); statement outputs 3 because there are three truthy elements (1, 2, 3) in the nums array, causing the count variable to be incremented by 1 for each of these elements.</b></summary>
<p>

#### Answer: C: 3?

<i>Write your explanation here</i>

</p>
</details>
