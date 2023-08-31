"use script";

// 1. Write a program that takes an array of elements and counts the occurrences of each element using a Map.

// 2. Write a program that takes an array of integers and a target sum. Check if there exists a subarray with the given sum using a Set.

const arr = [1, 4, 20, 3, 10, 5];
const targetSum = 33;

const checkExistence = (arr, sum) => {
  let total = 0;
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      total += arr[j];
      if (total > sum) {
        total = 0;
        break;
      } else if (total == sum) {
        flag = true;
        break;
      }
    }
    if (flag) {
      break;
    }
  }
  return flag;
};

console.log(
  `The answer for second problem is ${checkExistence(arr, targetSum)}`
);

// 3. Write a program that takes an array of strings and groups anagrams together using a Map.

const arrString = ["eat", "tea", "tan", "ate", "nat", "bat"];

const anagram = () => {
  const [...copyArr] = arrString;
  const mapAnagram = new Map();

  copyArr.forEach((element, index) => {
    copyArr[index] = element.split("").sort().join("");
  });

  copyArr.forEach((ele, index) => {
    if (!mapAnagram.has(ele)) {
      const arr = [];
      copyArr.forEach((secEle, secINdex) => {
        if (ele == secEle) {
          arr.push(arrString[secINdex]);
        }
      });
      mapAnagram.set(ele, arr);
    }
  });

  console.log(mapAnagram);
};

console.log(`The answer for third problem is\n`);
anagram();

// 4. Write a program that takes an array of strings and reverses each string in the array using the array methods.

const revArr = ["apple", "banana", "orange"];

const revArrStr = (revArr) => {
  revArr = revArr.map((ele) => ele.split("").reverse().join(""));
  return revArr;
};

console.log(`The answer for fourth problem is ${revArrStr(revArr)}`);

// 5. Write a program that takes an array of numbers and filters out the perfect square numbers using the array methods.

const squareNum = [1, 2, 4, 7, 9, 16, 25];

const perfectSquareNum = (arr) => {
  let perfectSquareArr = [];
  arr.forEach((ele) => {
    let num = Math.sqrt(ele);
    if (ele == num * num) {
      perfectSquareArr.push(ele);
    }
  });
  console.log(perfectSquareArr);
};

console.log(`The answer for fifth problem is\n`);
perfectSquareNum(squareNum);

// 6. Write a program that takes two objects and merges them into a single object

const obj1 = {
  name: "john",
  age: 30,
};

const obj2 = {
  city: "New York",
  occupation: "Engineer",
};

const combinedObj = { ...obj1, ...obj2 };
console.log(`The answer for sixth problem is\n`);
console.log(combinedObj);

// 7 Write a program that takes an array of objects and converts it into a single object using Object.assign() and Object.entries().

const arrOfObj = [
  { key: "name", value: "John" },
  { key: "age", value: 30 },
  { key: "city", value: "New York" },
];

const targetObj = {};
arrOfObj.forEach((ele) => {
  let arr = Object.entries(ele);
  let obj = {
    [arr[0][1]]: arr[1][1],
  };
  Object.assign(targetObj, obj);
});
console.log(`The answer for seventh problem is\n`);
console.log(targetObj);

// 8.Write a program that takes a function with an array parameter and destructure the array inside the function.

const displayArr = (arr) => {
  [firstElement, secElement, ...restElement] = arr;
  console.log(`First Element is ${firstElement}`);
  console.log(`Second Element is ${secElement}`);
  console.log(`Remaining Element is ${restElement}`);
};

console.log(`The answer for eighth problem is\n\n`);
displayArr([1, 2, 3, 4, 5]);

// 9. Write a program that takes a nested object containing numeric values and calculates the sum of all values.

const nestedObj = {
  a: 1,
  b: 2,
  c: { d: 3, e: { f: 4 } },
};
let sum = 0;
function sumObj(nestedObj) {
  for (const iterator of Object.values(nestedObj)) {
    if (typeof iterator == "number") {
      sum += iterator;
    } else if (typeof iterator == "object") {
      sumObj(iterator);
    }
  }
  return sum;
}
console.log(`The answer for ninth problem is\n`);
console.log(sumObj(nestedObj));

// 10. Write a program that takes an object and counts the occurrences of each property
const countObj = {
  name: "john",
  age: 30,
  city: "New York",
  occupation: "Engineer",
};

let countObject = {};
const countOfKeys = (countObj) => {
  Object.keys(countObj).forEach((ele, ind, arr) => {
    let count = 0;
    arr.forEach((secEle) => {
      if (ele == secEle) {
        count++;
      }
    });
    countObject[ele] = count;
  });
  console.log(countObject);
};
console.log(`The answer for tenth problem is\n`);
countOfKeys(countObj);
