const arr1 = [1,2,3,4,5,6]
let result1 = arr1.filter((key)=> key !== 4)
console.log(result1)

const arr2 = [3,2,1,4,5,6]
let result2 = arr2.filter((key)=> key % 2 !== 0)
console.log(result2)

const arr3 = [2,4,6,8,5,7]
let result3 = arr3.filter((key)=> key % 2 == 0)
console.log(result3)

const arr4 = [1,2,3,4,5,6,8]
let result4 = arr4.filter((key)=> key % 2 == 0)
console.log(result4)

const arr5 = ["Ramesh","Sita",3,5]
let result5a = arr5.filter((key)=> typeof key  === "string")
let result5b = arr5.filter((key)=> typeof key  !== "string")
console.log(result5a)
console.log(result5b)

const arr6 = [1, 2, 3, 4, 5, 6];
let result6 = arr6.filter((key)=> key % 2 == 0)
console.log(result6)

const arr7 = ["apple", "banana", "orange", "grape"];
let result7 = arr7.filter((key)=> key == "orange" && key == "grape")
console.log(result7)

const arr8 = [5, 12, 8, 15, 6];
let result8 = arr8.filter((key)=> key / 3 >= 4)
console.log(result8)


const arr9 = [1, null, 2, undefined, 3];;
let result9 = arr9.filter((key)=> key !== null && key !== undefined)
console.log(result9)


const arr10 = [1, "apple", true, "banana", 5, "orange"];
let result10 = arr10.filter((key)=>  typeof key == "string" )
console.log(result10)


const arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result11 = arr11.filter((key)=> key % 3 == 0)
let result11a = arr11.filter((key)=> key % 2 !== 0)
console.log(result11)
console.log(result11a)


const arr12 = [3, -1, 5, -4, 7, -9];
let result12 = arr12.filter((key)=> key > 0 )
console.log(result12)


const arr13 = [50, 120, 80, 200, 90];
let result13 = arr13.filter((key)=> key  < 100)
console.log(result13)


const arr14 = [1, { name: "John" }, "apple", { age: 25 }, true];

let result14 = arr14.filter((key)=> typeof key == "object")
console.log(result14)


const arr15 = ["Apple", "Banana", "Orange", "Grape"];
let result15 = arr15.filter((key)=> key == "Apple")
console.log(result15)


const arr16 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result16 = arr16.filter((key)=> key == 6)
console.log(result16)


const arr17 = [10, 20, 30, 40, 50];;
let result17 = arr17.filter((key)=> key > 10 && key < 50)
console.log(result17)


const arr18 = ["a", "B", "c", "D", "e"];
let result18 = arr18.filter((key)=> key === key.toUpperCase())
console.log(result18)


const arr19 = [10, 15, 20, 25, 30, 35, 40];
let result19 = arr19.filter((key)=> key == 35)
console.log(result19)

