//// lengthプロパティ

// 配列の要素の数を返す

let fruits = ["apple", "banana", "orenge"];
console.log(fruits.length);

// 文字列

let message = "Hello";
console.log(message.length);


////　演習 : 文字数カウンター

let textarea = document.getElementById("inputText");
let countDisplay = document.getElementById("count");

textarea.addEventListener("input", () => {
  let length = textarea.value.length;
  countDisplay.textContent = "文字数: " + length;
});