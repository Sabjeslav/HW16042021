"use strict";

/*Task 1. Написать функцию, которая проверяет, являются ли два слова анаграммами. 
(Анаграммы - слова, которые имеют одинаковую длину и состоят из одних и тех же букв, но в разном порядке. Пример: "воз", "зов") */

function isAnagram(word1, word2) {
  if (typeof word1 !== "string" || typeof word2 !== "string")
    throw new TypeError("Incorrect variable type!");
  if (word1.length !== word2.length) return false;
  const compareTable = new Map();
  for (let i = 0; i < word1.length; i++) {
    compareTable.set(word1.toLowerCase().split("")[i]);
  }
  return word2
    .toLowerCase()
    .split("")
    .map((letter) => {
      return compareTable.has(letter);
    })
    .every((elem) => elem === true);
}

/* Task 2. Написать функцию, которая подсчитывает количество гласных в строке. */
const vowelsUkr = ["а", "е", "и", "і", "о", "у", "я", "ю", "є", "ї"];
const vowelsEn = ["a", "e", "i", "u", "y"];

function countVowels(str, lang) {
  if (typeof str !== 'string') throw new TypeError();
  let counter = 0;
  str
    .toLowerCase()
    .split("")
    .map((letter) => {
      if (lang.includes(letter)) counter++;
    });
  return counter;
}

/* Task 3. Написать функцию, которая принимает массив с числами и возвращает новый массив, 
который содержит отрицательные числа из первого массива. */

function returnNegative(arr) {
  if (typeof arr !== 'object') throw new TypeError();
  return arr.filter(elem => elem < 0);
}

/* Task 4. Написать функцию, которая принимает массив и возвращает новый массив, 
состоящий только из уникальных значений первого массива (значения не должны повторяться). */

function returnUnique(arr) {
  const newArray = [];
  arr.map((item) => {
    if (!newArray.includes(item)) newArray.push(item);
  })
  return newArray;
}