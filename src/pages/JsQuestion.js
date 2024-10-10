// question 1
// let a = []
// let b = []
// console.log(a==b)
// console.log(a===b)


// question 2
// let a = []
// let b = a
// console.log(a==b)
// console.log(a===b)


// // question 3
// let a = [20]
// let b = [20]
// console.log(a[0]==b[0])
// console.log(a[0]===b[0])


// // question 4
// let a = [1,2,3,4]
// let b = {name: "anil"}
// console.log(...a)


// question 5
// console.log(typeof NaN)

 
// // question 6
// let a = 10 - - 10
// console.log(a)


//  question 7
// let set = new set([1,1,2,3,4])
// console.log(set)

//  question 8
//   let data = {name:"anil"}
//   console.log(delete data.name) true

//  question 9
// let data = {name:"anil"}
//   console.log(delete data) false because we can't delete var directly on property will be delete



//  question 10
// const data = ["peter","anil","sam"]
// cosnt [y] = data
// console.log(y)

//  question 11
// const data = ["peter","anil","sam"]
// cosnt [,y] = data  // get second value
// console.log(y)

//  question 12
// const data = {name:"anil",age:23}
// let {name} = data
// console.log(name)

//  question 13
// let data = {name:"anil",age:30}
//  let info = {city:"noida",mail:"vishal@gmail.com"}
// let d = {...data,...info}
// console.log(d)

//  question 14
// let data = {name:"anil",age:30}
//  let info = {city:"noida",mail:"vishal@gmail.com"}
// let d = {data,...info}
// console.log(d)

//  question 15
// let data = {name:"anil",age:30}
//  let info = {city:"noida",mail:"vishal@gmail.com",age:35}
// let d = {...data,...info}
// console.log(d)

//  question 16
// const name = "anil"
// console.log(name())

//  question 17
// const result = false || {} || null
// console.log(result )

//  question 18
// const result = false || null || ""
// console.log(result )

//  question 19
// const result = [] || 0 || true
// console.log(result)

//  question 20
// console.log(Promise.resolve(5))

//  question 21
// console.log("emoji"==="emoji")

//  question 22
// json.parse() 

//  question 23
// let name = "sidhu"
// const f = ()=>{
//     console.log(name)
//     let name="anil"
// }
// f()

//  question 24
// let name = "sidhu"
// const f = ()=>{
//     console.log(name)
// }
// f() 

//  question 25
// console.log(${(x=>x)('i love')} to program)

//  question 26
//  function sumvalues(x,y,z){
//     return x+y+y
// }
// A:sumvalues([...1,2,3])
// b:sumvalues([...[1,2,3]])
// c:sumvalues(...[1,2,3])
// d:sumvalues([1,2,3])

//  question 27
//  const name = "code step by step"
//  console.log(!typeof name === "object")
//  console.log(!typeof name === "string")

//  question 28
    //  const name = "dd"
    //  const age = 90
    //  console.log(isNaN(name))
    //  console.log(isNaN(age))

//  question 29
//    let p ={name: "anil"}
//    Object.seal(p)
//    p.name = "sidhu"
//    console.log(p)

//  question 30
//  let data = [2,9,0,10]
//   data.shift()
//   console.log(data)

//  question 31
//  let data = {name: "anil"}
//  delete data.name
//  console.log(data)

//  question 32
//  let data = "true"
// console.log(typeof !data)

//  question 33
//  let data "true"
//  console.log(!data)

//  question 34
//  different between map and foreach

//  question 35
//  let data = ["anil","peter","bruce"]
//  delete data[1]
// console.log(data) 

//  question 36
//  merge two array
//  let a = 2
//  let b = 4
//  let c = [...a,...b]
// console.log(c)

//  question 37
//  let a = [1,2,3,4]
//  let b = [4,5,6]
//  let c= [...a,...b]
// console.log(c)

//  question 38
//  let c= 3**3
//  console.log(c)

//  question 39
//  let a=2
//  setTimeout(()=>{
//     console.log(a)
// },0)
// a=100

//  question 40
// let a = 2
// let A = 30 
// console.log(A)

//  question 41
// let A10 = "like"
// console.log(A10)

//  question 42
// let a = "like"
// let b = "like"
// console.log(a === b)

//  question 43
//  let a= 1
//  let c= 2
// console.log(--c === a)

//  question 44
//  let a= 1
//  let b = 1
// let c= 2
// console.log(a===b === --c)

//  question 45
//  console.log(3*3)
//  console.log(3**3)
//  console.log(3***3)

//  question 46
//  console.log(a)
// var a

//  question 47
// console.log(b)

//  question 48
//  console.log([[[[]]]])

//  question 49
//  how to find os name

//  question 50
// function fruit (){
//     console.log(name)
//     console.log(price)
//     var name="apple"
//     let price= 45
// }
// fruit()

//  question 51
// for (var i=0; i<3;i++){
//     setTimeout(()=>{
//         console.log(i,1)
//     })
// }

//  question 52
// for (let i=0; i<3;i++){
//     setTimeout(()=>{
//         console.log(i,1)
//     })
// }
//

//  question 53
// console.log(+true)
// console.log(typeof +true)

//  question 54
// console.log(!"anil")
// console.log(typeof(!"anil"))

//  question 55
// let data = "size"
// const bird ={
//     size: "small"
// }
// console.log(bird[data])
// console.log(bird["size"])
// console.log(bird[size])
// console.log(bird.data)

//  question 56
// let c = {name:"peter"}
// let d
// let d =c
// c.name = "name"
// console.log(d.name)

//  question 57
//  var x 
//  var x = 10 
// console.log(x)

//  question 58
//  let a
//  a = {}
// console.log(a)

//  question 59
//  function fruit(){
//     console/log("woof")
// }
// fruit.name = "apple"
// fruit()

//  question 60
// function sum (a,b){
//     return a + b 
// }
// console.log(sum(1,"2"))

//  question 61
// let n = 0
// console.log(n++)
// console.log(++n)
// console.log(n)

//  question 62
// function getage (...args){
//     console.log(typeof args)
// }
// getage(21)

//  question 63
// function getage (){
//     'use stick'
//     age = 21
//     console.log(age)
// }
// getage()

//  question 64
// const sum = eval("10*10"+5)
// console.log(sum)

//  question 65
// const abj = {1:"a",2:"b",3:"c"}
// console.log(abj.hasOwnProperty("1"))
// console.log(abj.hasOwnProperty(1))

//  question 66
// const obj = {a:"one",b:"two",a:"reject"}
// console.log(obj)
//  question 67
// for(let i=1;i<5;i++){
//     if(i===3) continue
//     console.log(i)
// }

//  question 68
// const foo = ()=>console.log("fruit")
// const bar = ()=>setTimeout(() => console.log("second"))
// const bar1 = ()=> console.log("third")
// bar()
// foo()
// bar1()
    


//  question 69
{/* <div onClick={console.log("first div")}>
<div onClick={console.log("second div")}>
    <button onClick={console.log("button")}/>
</div>
</div> */}

//  question 70
// const p = {name:"ami"}
// function safhi(age){
//     return `${this.name}is ${age}`
    
// }
// console.log(safhi.call(p,21))
//     console.log(safhi.bind(p,21))

//  question 71
// function sayhi(){
//     return (()=> 0)()
// }
// console.log(typeof sayhi())

//  question 72
// function sayhi(){
//     return () = 0
// }
// console.log(typeof sayhi())


//  question 73
// const no = [1,2,3]
// no[9]=no
// console.log(no)


//  question 74
// evertthing in javascript is either a primitive or object

//  question 75
// console.log(!!null)
// console.log(!!"")
// console.log(!! 1)

//  question 76
// console.log(setInterval(()=> console.log("hi");1000)
// console.log(setInterval(()=> console.log("hi");1000)
// console.log(setInterval(()=> console.log("hi");1000)


//  question 77
// console.log([..."aman"])

//  question 78
// const firstpromise = new Promise((res,rej)=>{
//     setTimeout(res,500,"one")
// })
// const secondpromise = new Promise((res,rej)=>{
//     setTimeout(res,100,"two")
// })
// Promise race ([firstpromise,secondpromise]).then(res=>console.log(res))

//  question 79
// let p = {name:"peter"}
// const me = [p]
// p = null
// console.log(me)

//  question 80
// const person = {name:"batmen",age:21}
// for(const item in person){
//     console.log(item)
// }

//  question 81
//let data = 3+4+"5"
// console.log(typeof data)

//  question 82
// console.log(typeof 3+4+"5")

//  question 83
// console([]==[])

//  question 84
// let data = [1,2,3].map(num => {
//     if(typeof num === "num") 
//     return num*2
// })
// console.log(data)

//  question 85
// function getInfo(m){
//     m.name = "anil"
// }
// const p = {name:"first"}
// getInfo(per)
// console.log(p)

//  question 86
// function car (){
//     this.make = "tata"
//     return {make : "thl"}
// }
// const mycar = new car()
// console.log(mycar.make)

//  question 87
// (()=>{
//     let x = (y=10)
// })()
// console.log(typeof x)

//  question 88
// (()=>{
//     let x-y = 10
// }) ()
// console.log(typeof y)

//  question 89
// (()=>{
//     let x = 10
// }) ()
// (()=>{
//     let x =10 
// }) ()
// console.log(typeof x)

//  question 90
// (()=>{
//     let x = y = 10
// }) ()
// (()=>{
//     let x = y = 20
// })()
// console.log(y)

//  question 91
// let x = 100
// (()=>{
//     var x = 20
// }) ()
// console.log(x)

//  question 92
// console.log(!true-true)


//  question 93
// console.log(true++ "10")
