
//recursion
// let count =1;
// function show(){
//    if(count<=5){
//       console.log(`${count} hi`);
//       count++
//       show()
//    }

const { Long } = require("mongodb");

    
// }
// show()

// function fact(n){
//    if(n===0||n===1){
//       return 1;
//    }else{
//       return n*fact(n-1)
//    }
// }
// console.log(fact(5));



// const { set } = require("mongoose");




//generator functions
// function  *abc(){
//     console.log("hi");
//     yield 1;
//     console.log("first yield is called");
// }

// let gen = abc();

// console.log(gen.next());
// console.log(gen.next());
// function * abc (){
//    console.log('hi 1');
//    yield 1;
//    console.log('hi 2');
// }
// let gen = abc()
// console.log(gen.next());
// console.log(gen.next());
// const si = setInterval(()=>{
//    console.log("aany");
// },2000)

// setTimeout(()=>{
//    clearInterval(si)
// },6006)
// const si=setInterval(()=>{
//    console.log('hi');
// },1000)
// setTimeout(()=>{
//    clearInterval(si)
// },5010)

// let person = {
//    name : "abhijith",
//    age:23,
//    place:"calicut"
// }
// console.log(person?.address);

// const arr = ['a','bb','ccc','dddd','ee']
// let longestWord = ''
// let num = 0
// for(let i=0;i<arr.length;i++){
//    if(arr[i].length>num){
//       num = arr[i].length;
//       longestWord = arr[i]
//    }
// }
// console.log(num);
// console.log(longestWord);


//-----second largest using reduce
// const arr = [1,2,3,4,5,6,7,8]
// const res = arr.reduce((acc,curr)=>{
//    if(curr>acc.largest){
//       acc.secondLargest = acc.largest;
//       acc.largest = curr
//    }else if(curr>acc.secondLargest&&curr!==acc.largest){
//       acc.secondLargest = curr
//    }
//    return acc
// },{largest:0,secondLargest:0})
// console.log(res.secondLargest);



//print 1- 10 using generator function
// function * genfun(){
//    for (let i=1;i<=10;i++){
//       yield i;
//    }
// }
// const generator = genfun();

// for(const num of generator){
//    console.log(num);
// }
//----------------
// function * even(){
//    let num = 0 ;
//    let count = 0
//    while (count<5){
//       yield num;
//       num += 2
//       count++
//    }
// }
// const evenGen = even()
// for(let i= 0;i<5;i++){
//    console.log(evenGen.next());
// }
// console.log(evenGen.next());
//-----------------
//freeze and seal
// let person = {
//     name:"abhi",
//     age:23
// }

// let person = {
//    name:"abhijith",
//    place:'calicut'
// }
// Object.freeze(person)
// person.place = 'chaliyam'
// console.log(person);
// Object.freeze(person);
// person.place = "chaliyam";
// console.log(person);
// function * gen (){
//    let num = 1;
//    while(true){
//       yield num;
//       number++
//    }
// }
// console.log(gen.next());
// Object.seal(person);
// person.place = "clm";
// console.log(person);



//promise with math.random
// const promise = new Promise((res,rej)=>{
//     const time = Math.random()
//     console.log(time);
//     if(time>0.5){
//         res("success");
//     }else{
//         rej("failed");
//     }
// })
// const abc = async ()=>{
//    try{
//    const fayiz = await promise
//    console.log(fayiz);
   
//    }catch(error){
//       console.log(error);
//    }
// }
// abc()

// const pro = new Promise ((res,rej)=>{
//    const time = Math.random()
//    console.log(time);
//    if(time>0.5){
//       res("success")

//    }else{
//       rej("failed")
//    }
// })
// const abc = async ()=>{
//    try {
//       const aaa = await pro;
//       console.log(aaa);
//    } catch (error) {
//       console.log(error);
//    }
// }
// abc()
//---promise with async await
// const pro = new Promise((res,rej)=>{
//    const time = Math.random();
//    console.log(time);
//    if(time>0.5){
//       res("success")
//    }else{
//       rej("failed")
//    }
// })
// const result = async ()=>{
//    try{
//       const abhi = await pro ; 
//    console.log(abhi)
//    }catch(error){
//       console.log(error);
//    }
   
// } 
// result()

// Promise.resolve().then(()=>console.log("promiseeee"))
// process.nextTick(()=>console.log("neeeexxt"))
// async function example(){
//    const time = Math.random();
//    if(time>0.5){
//       return "success";
//    }else{
//       throw "failed"
//    }
// }
// async function main(){
//    try{
//       const result = await example();
//       console.log(result);
//    }catch(error){
//       console.log(error);
//    }
// }
// main()



   //iife
//                                             
// console.log(a);
// console.log(b);
// console.log(c);
// // let a =10;
// // var b =20;
// const c=30;

// function a(x){
//    return function a(y){
//      return  function a(z){
//        return  x+y+z
//       }
//    }
// }
//  const sum = a(2)(3)(4)
// console.log(sum);

// function sum(a,b,c){
//    return a+b+c
// }
// const x = sum(2,3,4)
// console.log(x);
// let i=0
// while(i<=5){
//    console.log(i);
//    i++
// }


// let j =0
// do{
//    console.log(j);
//    j++
// }while(j<=5)



//call apply bind
//call
// function greetings(){
//     console.log("your name is "+ this.name);
//     console.log("you are "+this.age);
// }
// var person1 = {
//     name: "james",
//     age:35,
//     methods:greetings
// }
// greetings.call(person1)

//apply
// function greetings(message){
//     console.log(message +this.name);

// }
// var person = { name : " john"}
// greetings.apply(person,['hello'])

//bind
//     function greetings(){
//         console.log("your name is "+ this.name);
//         console.log("you are "+this.age);
//     }
//     var person1 = {
//         name: "james",
//         age:35,
//         methods:greetings
//     }
//    const newgreet = greetings.bind(person1)
// newgreet()

// function abc (message){
//    console.log(message +' your name is '+this.name);
//    console.log(message +' your place is '+this.place);
// }
// var person = {
//    name :'abhi',
//    place :'calicut'
// }
// var a = abc.bind(person)
// a('hello')

// var person = {
//    name:"abhi",
//    place :"calicut"
// }
// function abc (message){
//    console.log(message+' your name is '+this.name);
//    console.log("your place is "+this.place);
// }
// var a = abc.bind(person)
// a('hello')
// function abc(message){
//    console.log(message+" , name is "+ this.name);
//    console.log(message+" , place is "+this.place);
// }
// const person = {
//    name: "abhi",
//    place :"chaliyam"
// }
// const result = abc.bind(person)
// result("helloo")
//map()
// let num = [1,2,3,4,5]
// let sq = num.map((num)=>{
//     return num**2
// })
// console.log(num);
// console.log(sq);

// let num = [1,2,3,4,5]
// const res = num.map((num)=>{
//    if(num===4){
//       return 40
//    }else{
//       return num
//    }
// })
// console.log(res);


// let num
//filter
// let num = [1,2,3,4,5,6]
// let even = num.filter((num)=>{
//     return num%2==0
// })
// console.log(even);

// const arr = [1,2,3,4,5,6,7]
// const even = arr.filter((arr)=>{
//       return arr%2===0
// })
// console.log(even);

// const person = {
//    name : "fayiz",
//    place :"horseround"
// }
// function abc(message){
//    console.log(message+" your name is "+this.name);
//    console.log("your place is "+this.place);
// }
// const abhi = abc.bind(person)
// abhi("hello")
// app.get('/:name',(req,res)=>{
//    res.send(req.params.name)
//    console.log(req.params.name);
// })
// const express = require('express')
// const app = express();

// app.get('/',(req,res)=>{
//    let name = req.query.name
//    let location = req.query.location
//    res.send(`Name is ${name} and Place is ${location}`)
//    console.log(name,location);
// })
// app.listen(3000,()=>{
//    console.log('http://localhost:3000');
// })


//------fs  module writing a date to flle
// const fs = require('fs')
// const date = new Date()
// const text = date.toLocaleString()
// fs.writeFile('example.txt',text,(err,data)=>{
   
//  if(err){
//    console.log('error');
//  }else{
//    console.log(data);
//  }
// })


//reduce
// let num = [1,2,3,4,5,6,7]
// let sum = num.reduce((acc,curr)=>
//     acc+curr,0
// )
// console.log(sum);

//forEach
// let fr = ['apple','banana','orange']
// fr.forEach((acc,index)=>{
//     console.log('fruits in '+ (index+1) + ' is '+ acc);
// })

// find()
// let num = [1,2,3,4,5,6,7]
// let even = num.find((num)=>{
//    return num%2==0
// })
// console.log(even);

//some
// var num = [1,2,3,4,5,6]
// var even = num.some((num)=>{
//    return num%2==0
// })
// console.log(even);

//every
// var num = [1,2,3,4,5,6]
// var even = num.every((num)=>{
//    return num%2==0
// })
// console.log(even);
//  type conversion in js
//  implicit type - runtime
// var x = 5 + '5';
// console.log(x);
// console.log(typeof(x));

//----array destructuring
// const arr = [1,2,3,4]
// const [a,b,c,d] = arr
// console.log(b);


//----explicit type\\compile
// var num = 123 ; 
// var str = num.toString()
// // var str = String(num);
// console.log(str);
// console.log(typeof(str));

//server creation using express
// const express = require("express")
// const app = express();
// const port = 3000;
// app.get('/',(req,res)=>{
//    res.send("main page")
// })
// app.get('/login',(req,res)=>{
//    res.send("login page")
// })
// app.get('*',(req,res)=>{
//    res.send("error")
// })
// app.listen(port,()=>{
//    console.log(`http://localhost:${port}`);
// })
// const express = require("express")
// const app = express()
// let sum = 0
// let nums = {
//    a:20,
//    b:30,
//    c:40
// }
// for(let x in nums){
//    sum = sum+(nums[x])
// }
// console.log(sum);
   
// let arr=[1,2,3,4]
// let sum=0

// for(let abhi of arr){
//    sum+=abhi
// }
// console.log(sum);

// let sum=0
// let mark={
//    a:10,
//    b:20,
//    c:15
// }
// for(let val in mark ){
//    sum+=(mark[val])
// }
// console.log(sum);
// const hashmap = new Map()
// hashmap.set('v1','apple')
// hashmap.set('v2','banana')
// hashmap.set('v3','orange')
// console.log(hashmap.get('v2'));
// const arr = [1,2,3,4,5]
// const res = arr.flatMap(num=>[num,num*10]);
// console.log(res);
// const http = require("http");
// http.createServer((req,res)=>{
//    if(req.url==='/'){
//       res.write("main page");
//       res.end();
//    }else if(req.url==='/login'){
//       res.write("login page");
//       res.end();
//    }else{
//       res.write(error)
//       res.end();
//    }
// }).listen(3000,()=>console.log("http://localhost:3000"));
// const fs = require("fs")
// fs.writeFile('example.txt','hellllooo',(err)=>{
//    if(err)throw err;
//    console.log('written');
// })
// const fs = require('fs')
// fs.readFile('example.txt','utf8',(err,data)=>{
//    if(err)throw err;
//    console.log(data);
// })

// for loop 
// for (let i=0;i<5;){
//    console.log(i);
//       i++;
// }

// function * counter(){
//    let num = 0 ;
//    while (true){
//       yield num ; 
//       num++
//    }
// }
// const gen = counter();
// console.log(gen.next());
// setTimeout(()=>{
//    console.log(gen.next());
// },1000)



//while loop
// let i=0;
// while (i<10){
//    console.log(i);
//    i++;
// }


//do while
// let i=0;
// do {
//    console.log(i);
//    i++;
// }while(i<5);

//callback 
// const fetchData = ((callback)=>{
//    setTimeout(()=>{
//       const data = { name:"abhi" , age: 23};
//       callback(data);
//    },1000);
// })
// const process = ((data)=>{
//    console.log("data received :" ,data);
// })
// let i =1;
// do{
//    console.log(i);
//    i++
// }while(i<6)

// fetchData(process);

// const fetchData = (pass)=>{
//    setTimeout(()=>{
//       const nums = [1,2,3,4,5];
//       pass(nums);
//    },1000);
// }
// const sum = (nums)=>{
//    console.log("result is :",nums.reduce((acc,curr)=>acc+curr,0));
// }
// fetchData(sum)

// const a =((call)=>{
//    console.log("inside function a");
//    call();
// })
// const b = (()=>{
//    console.log("inside function  b");
// })
// a(b)

// const fs = require('fs');
// const start = Date.now();
// setTimeout(()=>console.log(`${Date.now()-start}ms`,"outer set time out "),0);
// setImmediate(()=>console.log(`${Date.now()-start}ms`,"outer set immediate "))
//  

// fs.readFile('example.txt','utf8',()=>{
   
//    console.log(`${Date.now()-start}ms`,'IO polling finished');
//    setTimeout(()=>console.log(`${Date.now()-start}ms`,"inner set time out 1"),0);
//    setTimeout(()=>console.log(`${Date.now()-start}ms`,"inner set time out 2"),5)
//    Promise.resolve().then(()=>console.log("promisee"))
//    setImmediate(()=>console.log(`${Date.now()-start}ms`,"inner set immediate"));

// })

// console.log(`${Date.now()-start}ms`,"top level log");

//hash map
// const hashMap = new Map();
// hashMap.set('v1','apple');
// hashMap.set('v2','banana')

// console.log(hashMap.get('v2'));

//flat map
// const arr = [1,2,3,4];
// const result = arr.flatMap(a=>[a,a*2])
// console.log(result);
// let a = 10;
// let b = 20;
// console.log(eval('a+b'));


// largest number using reduce
// const arr = [2,3,6,8,1,6,9,12,3,5];
// const result = arr.reduce((acc,curr)=>{
//    return curr>acc?curr:acc
// },0)
// console.log(result);

// const result = arr.reduce((acc,curr)=>{
//    return acc+curr
// },0)
// console.log(result);

//path params
// const express = require('express')
// const app = express();
// app.get('/',(req,res)=>{
//    res.send("hello")
// })
// app.get('/:name',(req,res)=>{
//    // const a = req.params.name;
//    res.send(req.params.name)
//    console.log(req.params.name);
   
// })
// app.listen(3000,()=>console.log("http://localhost:3000"))

//query params
// const express = require('express');
// const app = express();

// app.get('/',(req,res)=>{
//    const name = req.query.name;
//    const place = req.query.place;
//    res.send(`name is ${name} and place is ${place}`);
//    // console.log(`name is ${name} and place is ${place}`);
// })
// app.listen(4000,()=>console.log("http://localhost:4000"))


//finding sum of arrays  using reduce
// const arr = [1,5,8,9,2,5,4]
// const result = arr.reduce((acc,curr)=>{
//    return acc+curr
// },0)
// console.log(result);

// ((name)=>{
//    console.log("hello "+name);
// })("abhi")

// const express = require("express")
// const app = express()

// app.get('/:name',(req,res)=>{
//    res.send(req.params.name);
// })
// app.listen(3000,()=>console.log("http://localhost:3000"))
// const express = require("express")
// const app = express()
// app.get('/',(req,res)=>{
//    const name = req.query.name;
//    const place = req.query.place;
//    res.send(`name  is ${name} and place is ${place}`)
// })
// app.listen(3000,()=>{
//    console.log("http://localhost:3000");
// })
// const express = require('express')
// const app = express()
// app.get('/',(req,res)=>{
//    let name = req.query.name ; 
//    let place = req.query.place;
//    let age  = req.query.age
//    console.log(`name is ${name} place is ${ place} and age is ${age}`);
//    res.send(`name is ${name} place is ${ place} and age is ${age}`)
// })
// app.listen(3000,()=>{
//    console.log("http://localhost:3000");
// })
//strict mode is js
// "use strict";
// x=10;
// // console.log(x);


//remove key from the object
//  const obj = {
//    k1 :"value1",
//    k2 :"value2",
//    k3:"value3"
//  };
//  delete obj.k2;
//  console.log(obj.k3);

//=--------------eval 
// var x = 10; var z= 30;
// var y = 20 ;
// var code = 'var res = x+y+z'
// eval(code)
// console.log(res);

//---------nullish coalescing operator
//without using
// let user = {
//    name : 'abhi',
//    age :20
// }
// let name = user.name || 'unknown';
// let age = user.age || 18
// console.log(name);
// console.log(age);

//with using nullish 
// let user = {
//    fname:'',
//    age:0
// }
// let fname = user.fname ?? 'unknown'
// let age = user.age??18
// console.log(fname);
// console.log(age);

//------IIFE merits
//---encapsulation
// (function(){
//    var num = 10;
// })()
// console.log(num);
// var a = 10;
// var a = a+1
// console.log(a);
// var arr = [1,2,3]
// arr.push(4)
// console.log(arr);
// (function a (){
//    let start = Date.now()
//    let count = 1
//    for(let i =0;i<10000;i++){
//       console.log(`${count} hi  ${Date.now()-start}ms` );
//       count++
//    }
// })()
// let start = Date.now()
// let count = 1
// for(let i =0;i<10000;i++){
//    console.log(`${count} hi  ${Date.now()-start}ms` );
//    count++
// }

// let time = new Date()
// let day = time.getDay()
// console.log(day);
// let daysindex= ['sunday','monday','tuesday']
// console.log(daysindex[day]);

// //-------checking an object is empty or not
// let obj1 = {};
// let obj2 = { k1 :"value1"}
 
// if(Object.keys(obj2).length===0){
//    console.log("empty");
// }else{
//    console.log("not empty");
// }

//sum of all positive numbers  using reduce
// const arr = [3,5,7,-5,6,-8,3,-4]
// const result = arr.reduce((acc,curr)=>{
//    if(curr>0){
//       return acc+curr;
//    }else{
//       return acc
//    }
// },0)
// console.log(result); 
//
// const arr = [1,2,3,4,5,6,7]
// const res = arr.filter((num)=>{
//    return num%2===0
// })
// console.log(res);
// const arr = [1,2,3,4,5,6,7,8]
// const res = arr.reduce((acc,curr)=>{
//    if(curr%2===0){
//       return acc+curr
//    }
//    else{
//       return acc
//    }
// },0)
// console.log(res);
//remove nth element from an array using splice
// let arr = [5,3,7,8,2,5]
// let n = 3;
// arr.splice(n,1);
// console.log(arr);
// function a(cb){
//    console.log('functions 1');
//    cb()
// }
// function b(){
//    console.log('function 2');
// }
// a(b)
// const fs = require('fs')
// const date = new Date();
// const time = date.toLocaleString()
// fs.writeFile('note1.txt',time,(err)=>{
//    if(err){
//       console.log(error);
//    }else{
//       console.log('written');
//    }
// })
// const arr = {
//    a:10,
//    b:20,
//    c:30
// }
// function sum(...nums){
//    return nums.reduce((acc,curr)=>{
//        return acc+curr
//    },0)
// }
// console.log(sum(1,2,3,4,5,6));
// const ar1 = [1,2,3]
// const ar2 = [4,5,6]
// let ar3 = [...ar1,...ar2]
// console.log(ar3);
// function * abc(){
//    console.log('hi');
//    yield 1;
//    console.log('hi 2 ');
// }
// let gen = abc()
// console.log(gen.next());
// console.log(gen.next());
// let {a,b,c} = arr
// console.log(a);
//find sum of all  odd numbers in a array
// const arr = [1,2,3,4,5,6,7,8]
// const odd = arr.reduce((acc,curr)=>{
//    if(curr%2==1){
//       return acc+curr
//    }else{
//       return acc
//    }
// },0)
// console.log(odd);


//find sum of even numbers in a array
// const arr = [1,2,3,4,5,6,7,8]
// const even = arr.reduce((acc,curr)=>{
//    if(curr%2==0){
//       return acc+curr
//    }else{
//       return acc;
//    }
// },0)


// console.log(even);
// const arr = [1,2,3,4,5,6,7,4,3,9,2,1,5]
// const top = arr.reduce((acc,curr)=>{
//    return curr>acc?curr:acc;
// },0)
// console.log(top);
// const result = arr.reduce((acc,curr)=>{
//    return acc+curr
// },0)
// console.log(result);

// const express = require('express')
// const app = express()
// app.get('/user/:name',(req,res)=>{
//    res.send(req.params.name + "  " + req.query.domain)
// })
// app.listen(3000,()=>{
//    console.log("http://localhost:3000");
// })

// function sum(...nums){
//    let total = 0;
//    for(let index in nums){
//       total = total+nums[index] 
//    }
//    return total
// }
// function sum(...nums){
//    let total =0 ;
//    for(let i=0;i<nums.length;i++){
//       total += nums[i]
//    }
//    return total
// }
// function sums(...num){
//    let total = 0
//    for(let add in num){
//       total = total+num[add]
//    }
//    return total
// }
// console.log(sums(1,2,3,4,5));

// function sums(...nums){
//    let total = 0;
//    for(let i=0;i<nums.length;i++){
//       total +=nums[i] 
//    }
//    return total
// }
// console.log(sums(1,2,3,4,5,6));
// console.log(sum(1,2,3,4,5,6,7));

// function ab1 (){
//    console.log('function 1');
   
// }
// function ab2(cb){
//    console.log('function 2');
//    cb()
// }
// ab2(ab1)

// function abc (cb){
//    console.log("this is function abc");
//    cb()
// }
// function fayiz (cb){
//    console.log("this is fayiz");
//    cb()
// }
// function abhi(){
//    console.log("this is abhi");
// }
// // abc(function(){
// //    fayiz(function(){
// //      abhi(function(){

// //      })
// //    })
// // })
// abc(()=>{
//    fayiz(()=>{
//       abhi(()=>{

//       })
//    })
// })
// function a(x,y,z){

// function a(x){
//    return function a(y){
//       return function a(z){
//          return x+y+z
//       }
//    }
// }
// const sum = a(4)(5)(6)
// console.log(sum);


// function a(x){
//    return function a(y){
//       return function a(z){
//          return x+y+z
//       }
//    }
// }
// const res = a(2)(3)(4)
// console.log(res);

// function a(cb){
//    console.log("this is a");
//    cb()
// }
// function b(){
//    console.log("this is b");
// }
// a(b)

// const pro = new Promise((res,rej)=>{
//    const time = Math.random();
//    console.log(time);
//    if(time>0.5){
//       res("success")
//    }else{
//       rej('failed')
//    }
// })
// const abc = async ()=>{
//    try{
//       const a = await pro;
//       console.log(a);
//    }catch(error){
//       console.log(error);
//    }
// }



// function *abc(){
//    console.log("this is abc");
//    yield 1;
   
// }
// const gen = abc();
// console.log(gen.next());
// console.log(gen.next());

// let i=0;
// do{
//    console.log(i);
//    i++
// }while(i<5)

// (function a(){
//    console.log("any");
// })()

// function abc (){
//    console.log("name is "+this.name);
//    console.log("place is "+this.place);
// }
// const person = {
//    name:"abhi",
//    place:"calicut"
// }
// abc(person)
// function abc(message){
//    console.log(`${message} ! name is ${this.name}`);
//    console.log(`place is ${this.place}`);
// }
// var person = {
//    name : "abhi",
//    place : "calicut"
// }
// let sample = abc.bind(person)
// sample('hello')
// const a = "hello hello hello";
// let b=0;
// let c=0
// let d=0
// let e=0;
// for(let i=0;i<a.length;i++){
//    if(a[i]=='h'){
//       b++
//    }else if(a[i]=='e'){
//       c++
//    }else if(a[i]=='l'){
//       d++
//    }else if(a[i]=='o'){
//       e++;
//    }
// }
// console.log(b,c,d,e);

// const str = 'hello hello hello'
// let a=0
// let b=0
// let c=0
// let arr = str.split('')
// console.log(arr);
// for(let i =0;i<arr.length;i++){
//    if(arr[i]==='h'){
//       a++
//    } if(arr[i]==='e'){
//       b++
//    }if(arr[i]==='l'){
//       c++
//    }
// }
// console.log(a);
// console.log(b);
// console.log(c);
// const arr = ['1','2','3','4','5']
// const modi = arr.map((item)=>{
//    if(item==4){
//       return '40'
//    }else{
//       return item
//    }
// })
// console.log(modi);

// const arr = [1,2,3,4,5]
// arr.splice(3,1,40);
// console.log(arr);
//  const date = new Date()
//    const h = date.getHours()
//    const m = date.getMinutes()
//    const s = date.getSeconds()
//    console.log(`time is ${h}:${m}:${s}`);
// const time = new Date()
// let hour = time.getHours()
// let min  = time.getMinutes()
// let sec = time.getSeconds()
// console.log(`time is ${hour} hour and ${min} minutes and ${sec} seconds now`);

// const promise = new Promise ((res,rej)=>{
//    setTimeout(()=>{
//       const time = Math.random()
//       console.log(time);
//       if(time>.5){
//          res("success")
//       }else{
//          rej("failed")
//       }
//    },2000)
// })
// const abc = async ()=>{
//    try{
//       const pro = await promise;
//       console.log(pro);
//    }catch(error){
//       console.log(error);
//    }
// }
// abc()

// const pro = new Promise((res,rej)=>{
//    setTimeout(()=>{
//       let time = Math.random()
//       console.log(time);
//       if(time>0.5){
//          res("success")

//       }else{
//          rej("failed")
//       }
//    },1000)
// })
// const promise = async ()=>{
//    try {
//       const abc = await pro;
//       console.log(abc);
//    } catch (error) {
//       console.log(error);
//    }
// }
// promise()
// const pro1 = new Promise((res,rej)=>{
//   res("1 success")
// })
// const pro2 = new Promise((res,rej)=>{
//    rej("2 success")
// })
// const pro3= new Promise((res,rej)=>{
//    rej("3 success")
// })
// Promise.race([pro1,pro2,pro3])
// .then((result)=>{
//    console.log(result);
// })
// .catch((error)=>{
//    console.log(error);
// })

// promise.then((r)=>{
//    console.log(r);
// }).catch((e)=>{
//    console.log(e);
// })
//  const arr = [1,2,3,4,5,6]
//  const res = arr.map((num)=>{
//    if(num===4){
//       return 40
//    }else{
//       return num
//    }
//  })
//  console.log(res);
// const arr = [1,2,3,4,5]
// const sq = arr.map((item)=>{
//    if(item==4){
//       return 40
//    }else{
//       return item
//    }
// })
// console.log(sq);


//write datas on multiple files using for loop
// const fs = require('fs')

// const fileData = [
//    {path :"note1" , data :"heeloo1"},
//    {path :"note2" , data :"heeloo2"},
//    {path :"note3" , data :"heeloo3"}
// ];

// for(let i=0;i<fileData.length;i++){
//    const file = fileData[i]
//    fs.writeFile(file.path,file.data,(err)=>{
//       if(err){
//          console.log(`error on ${file.path}`);
//       }
//       else{
//          console.log(`writen data on ${file.path} successfully`)
//       }
//    })
// }

//write datas on multiple files at the same time using for Each
// const fs = require('fs')

// const fileData = [
//    {path :"note1" , data :"heeloo00001"},
//    {path :"note2" , data :"heeloo2"},
//    {path :"note3" , data :"heeloo3"}
// ];
 
// fileData.forEach((datas)=>{
//    fs.writeFile(datas.path,datas.data,(err)=>{
//       if(err){
//          console.log(`error on writing on ${datas.path}`);
//       }else{
//          console.log(`written data on ${datas.path} successfully`);
//       }
//    })
// })




//  for(let i=0;i<fileData.length;i++){
//    let files = fileData[i]
//    fs.writeFile(files.path,files.data,(err)=>{
//       if(err){
//          console.log(`error on ${files.path}`);
//       }else{
//          console.log(`files written on ${files.path}`);
//       }
//    })
//  }
// const fs = require('fs')
// const filesData = [
//    {path:'note1.txt',data:'hello1'},
//    {path:'note2.txt',data:'hello2'},
//    {path:'note3.txt',data:'hello3'}
// ]
// for(let i =0;i<filesData.length;i++){
//    const files = filesData[i]
//    fs.readFile(files.path,'utf8',(err,data)=>{
//       if(err){
//          console.log(`error on ${files.path}`);
//       }else{
//          console.log(`datas from ${files.path} is = ${data}`);
//       }
//    })
// }

//read multiple files using forEach

// fileData.forEach((datas)=>{
//    fs.readFile(datas.path,'utf8',(err,data)=>{
//       if(err){
//          console.log("Error");
//       }else{
//          console.log(`data from ${datas.path} : ${data}`);
//       }
//    })
// })

// for(let i =0 ; i<fileData.length;i++){
//    let files = fileData[i];
//    fs.writeFile(files.path,files.data,(err)=>{
//       if(err){
//          console.log(`error on ${files.path}`);
//       }else{
//          console.log(`written data successfully on ${files.path}`)
//       }
//    })
// }
// const fs = require('fs')
// const fileData = [
//    {path:'note1.txt',data:'helloo1'},
//    {path:'note2.txt',data:'helloo2'},
//    {path:'note3.txt',data:'helloo3'}
// ]
// for(let i=0;i<fileData.length;i++){
//    let files = fileData[i]
//    fs.readFile(files.path,'utf8',(err,data)=>{
//       if(err){
//          console.log(`error on ${files.path}`);
//       }else{
//          console.log(`data contains in ${files.path } is = ${data}`);
//       }
//    })
// }

//second largest using for loop
// const arr = [74, 65, 78, 45, 22]
// let flarge = -Infinity;
// let slarge = -Infinity;
// for(const num of arr){
//    if(num>flarge){
//       slarge = flarge;
//       flarge = num
//    }
// }
// console.log(slarge);




//an object is empty or not
// let a ={  };

// if (Object.keys(a).length===0){
//    console.log("object is empty")
// }else{
//    console.log("object is not empty")
// }
// let ob = {name:"abhi",place:"calicut"}
//  if(Object.keys(ob).length===0){
//    console.log("empty");
//  }else{
//    const abc = Object.keys(ob).length;
//    console.log(ob,abc);
//  }
//second largest using for loop and swap
// let a = [2,4,9,3,5,7,1];
// let temp=0;
// for (let i=0;i<a.length;i++){
//    for (let j=0;j<a.length;j++) {

//       if(a[i]< a[j] )
//       {
//          temp=a[i]
//       a[i]=a[j]
//       a[j]=temp
//       }
//    }
// }
//  console.log(a)
//  console.log(a[a.length-2])

// const arr = [2,4,3,8,5,9,1,5];
// fl=0;
// sl=0;
// for(let i=0;i<arr.length;i++){
//    if(arr[i]>fl){
//       sl=fl;
//       fl=arr[i]
//    }else if(arr[i]>sl&&arr[i]<fl){
//       sl=arr[i]
//    }
// }
// console.log(sl);
// const str = 'malayalama'
// const arr1 = str.split('')
// console.log(arr1);
// let arr2 = [...arr1].reverse()
// console.log(arr2);
// if(arr1.join()===arr2.join()){
//    console.log("yes");
// }else{
//    console.log('no');
// }

// const str = ['q','w','e','r','t','y']
// const limit = str.length;
// for(let i=0;i<limit/2;i++){
//       const temp = str[i];
//       str[i]=str[limit-1-i];
//       str[limit-1-i]=temp
// }
// console.log(str);

// const arr = [1,2,3,4,5,6,7,5,4]
// let fl = -Infinity;
// let sl = -Infinity;
// const res = arr.reduce((acc,curr)=>{
//    if(curr>fl){
//       sl=fl;
//       fl=curr
      
//    }else if(curr<fl&&curr>sl){
//       sl=curr
//    }
//    return sl
// },0)  
// console.log(res);
//    const str = 'qwerty'
//    let arr1  = str.split('')
//    console.log(arr1);
//    let rev= [...arr1].reverse()
// console.log(rev.join(''));
// const str = 'abhijith'
// const arr = str.split('')
// let limit = arr.length
// for(let i=0;i<limit/2;i++){
//    let temp = arr[i]
//    arr[i] = arr[limit-1-i]
//    arr[limit-1-i] = temp
// }
// console.log(arr.join(''));
//------reversing of string
// const str = 'qwerty';
// // let rev = [...str].reverse().join('')
// for(let i = str.length-1;i>=0;i--){
//    let rev = rev+str[i]
// }
// console.log(rev);
// const start =Date.now()
// const stop = setInterval(()=>{
//    console.log(`${Date.now()-start}ms`,"  hiii");
// },1000)

// setTimeout(()=>{
//    clearInterval(stop)
// },5005)

// const pro = new Promise((res,rej)=>{
   
//    setTimeout(()=>{
//       const time = Math.random()
//    console.log(time);
//    if(time>0.5){
//       res('success');

//    }else{
//       rej('failed')
//    }
//    },1000)
   
// })
// const abc = async()=>{
//    try{
//       setTimeout(()=>{
//          console.log("waits for promise");
//       },2000)
//       const waits = await pro;
//       console.log(waits);
//    }catch(error){
//       console.log(error);
//    }
// }
// abc()

//--------switch case 
// let day = 8;
// switch(day){
//       case 1 : 
//       dayname = 'sunday';
//       break;
//       case 2 : 
//       dayname = 'monday';
//       break;
//       case 3 : 
//       dayname = 'tuesday';
//       break;
//       case 4 : 
//       dayname = 'wednesday';
//       break;
//       case 5 : 
//       dayname = 'thursday';
//       break;
//       case 6 : 
//       dayname = 'friday';
//       break;
//       case 7 : 
//       dayname = 'saturday';
//       break;
//       default :
//       dayname = "invalid day"
   
// }
// console.log(`the day is ${dayname}`);

//-------continue statement in for loop
// for(let i=0;i<5;i++){
//    if(i===2){
//       continue;
//    }
//       console.log(i);
// }


//-------continue statement in while loop
// let i=0;
// while(i<5){
//    i++
//    if(i==3){
//       continue;
//    }
//    console.log(i);
// }

// const arr = [2,-5,6,9,3,-5]
// const pos = arr.reduce((acc,curr)=>{
//    if(curr>0){
//       return acc+curr
//    }else{
//       return acc
//    }
// },0)
// console.log(pos);


//---------event emitter
// const EventEmitter = require('events');
// const button = new EventEmitter();

// button.on('action1',()=>{
//    console.log('button 1 clicked');
// })
// button.on('action2',()=>{
//    console.log('button 2 clicked');
// })
// button.on('action3',()=>{
//    console.log('button 3 clicked');
// })
// for(let i=0;i<4;i++){
//    setTimeout(()=>{
//       button.emit(`action${i}`)
//    },1000*i)
// }

// const EventEmitter = require('events')
// const button =new EventEmitter()

// button.on('click1',()=>{
//    console.log('button 1 clicked');
// })
// button.on('click2',()=>{
//    console.log('button 2 clicked');
// })
// button.on('click3',()=>{
//    console.log('button 3 clicked');
// })
// for(let i =0;i<4;i++){
//    setTimeout(()=>{
//       button.emit(`click${i}`)
//    },1000*i)
// }

// const arr = [1,2,3,4,5,6,2]

// let fl = -Infinity;
// let sl = -Infinity;
// const res = arr.reduce((acc,curr)=>{
//    for(let i=0;i<arr.length;i++){
//       if(curr>fl){
//          sl=fl;
//          fl=curr
//       }else if (curr>sl && curr<fl){
//          sl=curr
//       }
//       return sl;
//    }
// },0)
// console.log(res);

// const arr = [1,2,3,4,5,6,2]
// const even = arr.filter((arr)=>{
//    return arr%2===0
// })
// console.log(even);
// const str = 'a bb ccc dddd ee fffff ggg'
// const arr = str.split(' ')
// let word = ''
// let max = 0
// for(let i =0;i<arr.length;i++){
//    if(arr[i].length>max){
//       word = arr[i]
//       max=arr[i].length
//    }
// }
// console.log(word);
// console.log(max);
// const str1 = 'silentq'
// const str2 = 'listen'
// const arr1 = str1.split('').sort().join('')
// const arr2 = str2.split('').sort().join('')
// if(arr1===arr2){
//    console.log("anagram");
// }else{
//    console.log('no');
// }
//-----------find the longest word in the sentence
// const str = "a bb ccc dddd eeeee ffffff gg hhhh"
// const words = str.split(' ')
// console.log(words);

// let longestWord = ''
// let max = 0

// for(let i=0;i<words.length;i++){
//    if(words[i].length>max){
//       longestWord = words[i];
//       max = words[i].length;
//    }
// }
// console.log(`longest word is ${longestWord}`);
// console.log(`length is ${max}`);

//------------remove duplicate elements in the array
// function dupli(arr){
//    return [...new Set(arr)]
// }
// const array = [1,2,3,4,3,2,1]
// const uni = dupli(array)
// console.log(uni);
// const arr = [1,2,3,4,5,3,7,1]
// let unique = [...new Set(arr)]
// console.log(unique);


//-------------check anagram or not 
// const str1 = 'dlrow';
// const str2 = 'world';

// const sort1 = str1.split('').sort().join('')
// const sort2 = str2.split('').sort().join('')
// console.log(sort1);
// console.log(sort2);
// if(sort1===sort2){
//    console.log('anag');
// }else{
//    console.log('not');
// }

// const anag = sort1===sort2
// console.log(`${str1} and ${str2} are anagrams ? ${anag}`);


//--------return the number of vowels in the string
// const str = "hello world";
// const vowels = ['a','e','i','o','u']
// let count = 0
// for(let i=0;i<str.length;i++){
//    if(vowels.includes(str[i])){
//       count++
//    }
// }
// console.log(count);

//----------reversing strings
// const str = 'hello world'
// const arr = str.split('')
// console.log(arr);
// const limit = arr.length;

// for(let i=0;i<limit/2;i++){
//    let temp = arr[i];
//    arr[i]=arr[limit-i-1];
//    arr[limit-1-i]=temp
// }

// console.log(arr.join(''));


//-----find prime or not
// const num = 4;
// let isPrime = true;

// for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
        
//         isPrime = false;
//         break;
//     }
// }

// if (isPrime) {
//     console.log("it's prime");
// } else {
//     console.log("it's not prime");
// }
// const num = 19;
// let isprime = true;
// for(let i=2;i<num;i++){
//    if(num%i===0){
//       isprime = false;
     
//    }
// }

// if(isprime){
//    console.log('prime');
// }else{
//    console.log('not prime');
// }
//---------factorial 
// const num = 5 ; 
// let sum = 1;
// for(let i=1;i<=num;i++){
//    sum = sum*i
// }
// console.log(sum);
// const num = 5;
// let sum = 1;
// for(let i=1;i<=num;i++){
//    sum *=i;
// }
// console.log(sum);


//------remove all white spaces from strings
// const str = '  sfbsdhf  ';
// console.log(str);
// let white = str.trim()
// console.log(white);

//------find common elements in 2 arrays
// const arr1 = [1,2,3,4,5,6,7,8,9]
// const arr2 = [4,6,9,10,11,12,5,1]

// const common = []
// for(let i=0;i<arr1.length;i++){
//    if(arr2.includes(arr1[i])){
//       common.push(arr1[i])
//    }
// }
// console.log(common);

// const arr = ["apple","banana","orangeee","kiwi"];
// let longestWord = '';
// let maximum = 0;

// for(let i=0;i<arr.length;i++){
//    if(arr[i].length>maximum){
//       maximum = arr[i].length;
//       longestWord = arr[i]
//    }
// }
// console.log(longestWord);
// console.log(maximum);



// var abc = {
//    name:"abhi",
//    place:"calicut"
// }

// function person (name,place){
//    this.NAME = name;
//    this.PLACE = place;
//    console.log(this.NAME);
//    console.log(this.PLACE);
// }
// var abc =new  person("abhi","calicut")
// console.log(abc);

// var abc = Object.create(null);
// abc.name   = "abhi";
// abc.place = "calicut";
// console.log(abc);
// let keys = Object.keys(abc)
// console.log(keys);
// let values = keys.map(key=>abc[key])
// console.log(values);
// var abc= Object.create(null)
// abc.name = 'abhijith'
// abc.place = 'calicut'
// console.log(abc);
// let keys = Object.keys(abc)
// console.log(keys);
// let values = keys.map(a=>abc[a])
// console.log(values);
// getting key value and pairs separately

// function person (name,place){
//    this.NAME = name;
//    this.PLACE = place;
// }
// var abc = new person("abhi","calicut")
// console.log(abc);
// var keys = Object.keys(abc)
// var values = keys.map(key=>abc[key])

// console.log(keys);
// console.log(values);
// function a (cb){
//    console.log('function 1');
//    cb()
// }
// function b (){
//    console.log('function 2');
// }
// a(b)

// const arr = [1,2,3,4,5,6,7,4,3,2,9]

// let uni = new Set([...arr])
// c 1onsole.log(uni);

// var arrayStringsAreEqual = function(word1, word2) {
//    return word1.join("")===word2.join("")

// };
// let word1 = ["ab",'c']
// let word2 = ['a','bc']
// console.log(arrayStringsAreEqual(word1,word2));


// let str = "a bb ccc dddd eeeee"
// let arr = str.split(' ')
// console.log(arr);

//
// let num = 234
// let str = num.toString( )
// console.log(typeof(str));

// const str = 'abcdef'
// // const rev = str.split('').reverse().join('')
// // console.log(rev);

// const arr = str.split('')
// console.log(arr);
// let limit = arr.length;
// for(let i=0;i<limit/2;i++){
//    let temp = arr[i];
//    arr[i]= arr[limit-i-1]
//    arr[limit-i-1]= temp
// }
// const res = arr.join('')
// console.log(res);

// const sent = 'a bb ccc dddd eeeee ff ggg'
// const arr = sent.split(' ')
// // console.log(arr);
// const res = arr.reduce((acc,curr)=>{
//    return curr.length>acc.length?curr:acc
// },'')
// console.log(res);
// const sent = 'a bb ccc dddd eeeee ff ggg'
// const arr = sent.split(' ')
// console.log(arr);

// let sent = 'a bb ccc dddd eeeee fff'
// let arr = sent.split(' ')
// console.log(arr);
// const res = arr.reduce((acc,curr)=>{
//    return curr.length>acc.length?curr:acc
// },'')
// console.log(res);
// let maxLength = 0;
// let word = ''
// for(let i =0;i<arr.length;i++){
//    if(arr[i].length>maxLength){
//       maxLength = arr[i].length;
//       word = arr[i];
//    }
// }
// console.log(maxLength);
// console.log(word);

// const str = "abcba";
// const arr = str.split('');
// console.log(arr);


// -----palindrome or not
// const str = 'abcba'
// const arr = str.split('')
// const rev = [...arr].reverse()
// let v1 = arr.join('')
// let v2 = rev.join('')
// if(v1===v2){
//    console.log("is palindrome");
// }else{
//    console.log("not palindrome");
// }

// const num = [1,2,3,4,5,6,7,3,4,2]
// const uni =new Set(num)
// let unique = [...uni]
// console.log(unique);
// const res = unique.reduce((acc,curr)=>{
//    return acc+curr
// },0)
// console.log(res);


//-----types of promises

// const pro1 = new Promise((res,rej)=>{
//    rej("success1")
// })
// const pro2 = new Promise((res,rej)=>{
//    res("success2")
// })
// const pro3 = new Promise((res,rej)=>{
//    res("success3")
// })

// const bigpro =  Promise.any([pro1,pro2,pro3])

// bigpro.then((pass)=>{
//    console.log("all promise resolved",pass);
// }).catch((fail)=>{
//    console.log("one of the promise is rejected",fail);
// })

// const express = require('express')
// const app = express()
// app.get('/:name',(req,res)=>{
//    res.send(req.params.name)
//    console.log(req.params.name);
// })
// app.listen(3000,()=>{
//    console.log('http://localhost:3000');
// })
// const express = require('express')
// const app = express()
// app.get('/',(req,res)=>{
//    let name = req.query.name;
//    let place = req.query.place;
//    res.send(`name is ${name} and place is ${place}`)
//    console.log(`name is ${name} and place is ${place}`)
// })
// app.listen(3000,()=>{
//    console.log('http://localhost:3000');
// })

// const arr= [1,2,3,4,5,6,4,7,2,6]

// const dupli = []
// for(let i=0;i<arr.length;i++){
//    for(let j=i+1;j<arr.length;j++){
//       if(arr[i]==arr[j]){
//          dupli.push(arr[i])
//       }

//    }
// }
// console.log(dupli);
// const str = 'abcde'
// const arr1 = str.split('')
// const arr2 = [...arr1].reverse()
// console.log(arr1);
// console.log(arr2);

// if(arr1.join('')===arr2.join('')){
//    console.log('yes');
// }else{
//    console.log('no');
// }
// const str1 = 'silent'
// const str2 = 'listen'
// const arr1 = str1.split('').sort()
// const arr2 = str2.split('').sort()
// if(arr1.join('')===arr2.join('')){
//    console.log('anagram');
// }else{
//    console.log('no');
// }

// const num = 19;
// let prime = true
// for(let i=2;i<num;i++){
//    if(num%i===0){
//       prime = false
//       break;
      
//    }
// }
// console.log(prime);
// const express = require('express')
// const app = express()
// app.get('/:name',(req,res)=>{
//    res.send(req.params.name)
//    console.log(req.params.name);
// })
// app.listen(3000,()=>{
//    console.log('http://localhost:3000');
// })
// const express = require('express')
// const app = express()
// app.get('/',(req,res)=>{
//    let name = req.query.name;
//    let place = req.query.place;
//    res.send(`name is ${name} and place is ${place}`)
//    console.log(`name is ${name} and place is ${place}`);
// })
// app.listen(3000,()=>{
//    console.log('http://localhost:3000');
// })
//  
//http://localhost:3000/abhijith?domain=mern
// const { log } = require('console')
// const fs = require('fs')
// const fileData = [
//    {path:'note1.txt' , data:'hello1'},
//    {path:'note2.txt' , data:'hello2'},
//    {path:'note3.txt' , data:'hello3'}
// ]
// fileData.forEach((files)=>{
//    fs.writeFile(files.path,files.data,(err)=>{
//       if(err){
//          console.log(`error on ${files.path}`);
//       }else{
//          console.log(`written data on ${files.path}`);
//       }
//    })
// })
// fileData.forEach((files)=>{
//    fs.readFile(files.path,'utf8',(err,data)=>{
//       if(err){
//          console.log(`error on ${files.path}`);
//       }else{
//          console.log(`data from ${files.path} is = ${files.data}`);
//       }
//    })
// })





// const a  = 123;
// let b= toString(a)
// console.log(typeof(b));
// console.log(x);
// var x = 10;
// const head = [1,2,3,4,5]
// let output = []
//   if(head.length>1){
//    if(head.length%2===0){
//       let limit = head.length/2
//       for(let i=limit;i<head.length;i++){
//           output.push(head[i]) 
//       }
//   }else{
//       let limit = (head.length/2)+1
//       for(let i=limit;i<head.length;i++){
//           output.push(head[i])
//       }
//   }
//   }
   
//     console.log(output);
// const head = [1, 2, 3, 4, 5, 6,7,8];
// let output = [];

// if (head.length > 1) {
//     if (head.length % 2 === 0) {
//         let limit = head.length / 2;
        
//         for (let i = limit; i < head.length; i++) {
//             output.push(head[i]);
//         }
//     } else {
//         let limit = Math.floor(head.length / 2);
        
//         for (let i = limit; i < head.length; i++) {
//             output.push(head[i]);
//         }
//     }
// }

// console.log(output);
// var x = 1
// a()
// b()
// console.log(x);
// function a(){
//    var x = 10;
//    console.log(x);
// }
// function b(){
//    var x as= 100;
//    console.log(x);
// }



// var a = 10;
// let b = a+'str'
// console.log(b);
// console.log(ty9peof(b));

// function delay (){
//    return si
// }
// let si=setTimeout(() => {
//    p1=new Promise((res,rej)=>{
//       res('success')
//    })
//    p1.then((data)=>{
//       console.log(data);
//    })
//    .catch((err)=>{
//       console.log(err);
//    })
// },3000);
// delay()

// const arr = [1,2,3,4]
// const res = arr.map((num)=>{
//    if(num%2===1){
//       return 'odd'
//    }else{
//       return 'even'
//    }
// })
// console.log(res);

// let arr=[1,2,3,4]

// const res=arr.filter(()=> 0)
// console.log(res);

// function a(){
   
//    var x = 10
//    b()
//    function b(){
      
//    }
// }


// a()
// console.log(x);
// let nums1 = [1,2,3,6]
// let nums2 = [2,3,4,5]
// let arr = []
// for(let i=0;i<nums1.length;i++){
//     if(nums2.includes(nums1[i])){
//         arr.push(nums1[i])
//     }
// }
// let sorted = arr.sort()
// console.log(sorted[0]);

// let nums = [-4,-1,0,3,10]
// const sq = nums.map((nums)=>{
//     return nums**2
// })
// console.log(sq);
// let sort = sq.sort((a,b)=>a-b)
// console.log(sort);
// let  x = "a";
// let words = ["abc","bcd","aaaa","cbc"]
// let array = []

// for(let i=0;i<words.length;i++){
//     if(words[i].includes(x)){
//         array.push(i)
//     }
// }
// console.log(array);

// let s = "is2 sentence4 This1 a3" ; 
// // let sp = s.split(' ').reverse()
// // console.log(sp);
// let str = s.replace(/\s/g, "")
// console.log(str);

// let num1 = [1,2,1]
// let num2 = num1
// console.log(num1);
// console.log(num2);
// let merge = [...num1,...num2]
// console.log(merge);
// let pal = 121
// let arr = pal.toString().split('')
// console.log(arr);
// let rev = [...arr].reverse()
// console.log(rev);
// if(arr.join()===rev.join()){
//     console.log(true);
// }else{
//     console.log(false);
// }

// const str = 'hello'
// const arr1 = str.split('')
// let limit = arr1.length;
// for(let i=0;i<arr1.length/2;i++){
//     let temp = arr1[i]
//     arr1[i] = arr1[limit-1-i]
//     arr1[limit-1-i] = temp
// }
// console.log(arr1.join(''));
// const rev = str.split('').reverse()
// console.log(rev.join(''));
// const a = 'this is a big sentence'
// const arr = a.split(' ')
// let len = 0;
// let word = ''
// for(let i=0;i<arr.length;i++){
//     if(arr.length>len){
//         word = arr[i]
//         len = arr[i].length
//     }
// }
// console.log(len);
// console.log(word);
// console.log(arr);
// const res = arr.reduce((acc,curr)=>{
//     return curr.length>acc.length?curr:acc;
// })
// console.log(res);
// const a = 'abcba'
// const arr1 = a.split('')
// const arr2 = [...arr1].reverse()
// if(arr1.join()===arr2.join()){
//     console.log(true);
// }else{
//     console.log(false);
// }
// const nums = [1,2,7,3,4,5,6,7,3,2,5]
// const uni = new Set(nums)
// console.log(uni);
// const str1 = 'listen'
// const str2 = 'silent'
// let arr1 = str1.split('').sort()
// let arr2 = str2.split('').sort()
// if(arr1.join()===arr2.join()){
//     console.log(true);
// }else{
//     console.log(false);
// }
// const str = 'abhijith'
// const arr= str.split('')
// const vow = ['a','e','i','o','u']
// let count = 0
// for(let i=0;i<arr.length;i++){
//     if(vow.includes(arr[i])){
//         count++
//     }
// }
// console.log(count);
// const arr = [1,2,3,4,5,6,3,4,2]
// let num = 0

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>num){
//         num=arr[i]
//     }
// }
// console.log(num);
// const num = 4
// let isprime = true;
// for(let i=2;i<num;i++){
//     if(num%2===0){
//         isprime = false;
//         break;
//     }
// }
// if(isprime){
//     console.log('prime');
// }else{
//     console.log('not prime');
// }

//  function fact(num){
//     let sum = 1
//     for(let i=1;i<=num;i++){
//         sum = sum*i
//     }
//    console.log(sum);
//     return sum
// }

// fact(5)

// console.log(f);

// let num = 5
// let fact = 1
// for(let i=1;i<=num;i++){
//     fact = fact*i
// }
// console.log(fact);

// let nums = [5,0,1,2,3,4]
// let out =[]
// for(let i=0;i<nums.length;i++){
//    out.push(nums[nums[i]])
// }
// console.log(out);
// const words = ["cd","ac","dc","ca","zz"]
// let count = 0

// for(let i=0;i<words.length;i++){
//    words[i] = words[i].split('').sort().join('')
// }
// console.log(words);
// for(let i=0;i<words.length;i++){
//    for(let j=i+1;j<words.length;j++){
//       if(words[i]===words[j]){
//          count++
//       }
//    }
// }
// console.log(count);

// const a = 'qwerty';
// const b = a.sort()
// console.log(b);

// let command = "G()()()()(al)";
// let str = command.replace(/\(\)//g,'o').replace(/(al)/g,'al')
// console.log(str);
// let command = "G()()()()(al)";
// let str = command.split('()').join('o').split('(al)').join('al')
// console.log(str);

// let r = '3'+2
// console.log(r);
// console.log(typeof(r));
// let num = '10 '; 
// num = Number(num)
// console.log(typeof num);
// var a = alert('hello ')
// console.log(a);
// let answer = prompt("What is your name ?");
// console.log(answer);

// const myset = new Set([1,2,3,4])
// console.log(myset);

// const arr = [...myset]
// console.log(arr);

// const obj = {
//    name : 'abhi',
//    age:23,
//    course :['a','b']
// };

// const copy = JSON.parse(JSON.stringify(obj))
// obj.course.push('c')
// console.log(obj);
// console.log(copy);
// function sum (...nums){
//    let total = 0
//    for(let i =0;i<nums.length;i++){
//       total = total+nums[i]
//    }
//    return total
// }
// console.log(sum(1,2,3,4,5,6));
// const x = 10;
// const y = 20;

// if (x > 5 && y==20) {
//     console.log("Both conditions are true.");
// } else {
//     console.log("At least one condition is false.");
// }
// let name = ''
// let a = name || 'hello'
// console.log(a);\
// const username = '';
// const name1 = 'abhi' || username;

// const name2 = username ? username : 'abhi'
// console.log(name1);
// console.log(name2);

// const user = {
//    name:'abhi',
//    age:23,
//    address : {
//       city:'abc',
//       street :'xyz',

//    }
// }
// const country = user?.address?.country;
// console.log(country);

// const sum = arr.reduce((acc,curr)=>{
//    return acc+curr
// },0)
// console.log(sum);
// let sum = 0
// for(let i=0;i<arr.length;i++){
//    sum = sum+arr[i]
// }
// console.log(sum);
// let sum = 0;
// let i=0
// while(i<arr.length){
//    sum = sum + arr[i]
//    i++
// }
// console.log(sum);

// let sum = 0;
// arr.forEach((num)=>{
//    sum =sum +num
// })
// console.log(sum);
// const sum  = arr.reduce((curr,acc)=>{
//    return acc+curr
// },0)
// console.log(sum);
// let sum = 0
// for(let i =0 ;i<arr.length;i++){
//    sum = sum+arr[i]

// }
// console.log(sum);
// let sum  = 0
// let i =0
// while(i<arr.length){
//    sum = sum + arr[i]
//    i++
// }
// console.log(sum);
// let sum = 0
// arr.forEach((num)=>{
//    sum = sum+num
// })
// console.log(sum);

// const promise = new Promise((res,rej)=>{
//    const time = Math.random()
//    console.log(time);
//    if(time>0.5){
//       res('success')
//    }else{
//       rej('failed')
//    }
// })
// // promise.then((pass)=>{
// //    console.log(pass);
// // })
// // .catch((fail)=>{
// //    console.log(fail);
// // })
// const abc = async()=>{
//    try {
//       const pro = await promise
//       console.log(pro);
//    } catch (error) {
//       console.log(error);
//    }
// }
// abc()

// let nums = [3,1,2,2,2,1,3]
// let k = 2
// let count = 0
// for(let i =0;i<nums.length;i++){
//    for(let j=i+1;j<nums.length;j++){
//       if(nums[i]===nums[j]&&i*j%2==0){
//          count++
//       }
//    }
// }
// console.log(count);

// let nums = [1,2,3,4,5,6,3]
// let flag ;
//  nums.sort((a,b)=>a-b)
// for(let i=0;i<nums.length;i++){
//    if(nums[i]===nums[i+1]){
//       flag =1 ;
//       break;
//    }
// }
// return flag==1?true:false

// let nums = [0,1,2,2,3,0,4,2]
// let val = 2 ;
// for(let i =0;i<nums.length;i++){
//    if(nums[i]===val){
//       nums.splice(i,1)
//     i--
//    }
// }
// console.log(nums);

// let str = num.join('')
// console.log(str);
// let str1 = Number(str)
// console.log(str1);
// let res = str1+1
// console.log(res);
// let arr1 = res.toString().split('')
// console.log(arr1);
// for(let i = num.length;i>num.length;i++){
//    num[i]+1
   
// }
// console.log(num);
// let num = [1,2,3,4,5,10]
// let str = BigInt(num.join(''))
// str++
// console.log(str);
// let arr = str.toString().split('')
// console.log(arr);

// var arr = [1,2,3,4,5]
// arr.push(6)
// console.log(arr);

// let arr = [1,2,3,4,5,6]
// let copy = arr;
// copy.push(7)
// console.log(arr);
// console.log(copy);

// let arr = [1,2,3,4,5,6]
// let copy = [...arr]
// copy.push(7)
// console.log(arr);
// console.log(copy);

// const obj = {
//    a:'abcd',
//    b:2,
//    c:3
// }
// const arr = Object.entries(obj)
// console.log(arr);
// let a =10;
// let b=20;
// var res = 'var result = a + b'
// eval(res)
// console.log(result);
// Your house (object)


// var si = setTimeout(()=>{
//    const pro = new Promise((res,rej)=>{
//       res('success')
//    })
//    pro.then((pass)=>{
//       console.log(pass);
//    }).catch((fail)=>{
//       console.log(fail);
//    })
// },3000)


// let start = new Date()
// let si = setInterval(()=>{
//    console.log(`${start-new Date()} ms hi`);
// },1000)
// setTimeout(()=>{
//    clearInterval(si)
// },4040)

// const arr = [1,2,34,45,62]


// let res = arr.map((num)=>{
//    if(num>=10){
//       let first = Math.floor(num/10);
//       let second = num%10;
//       return first+second
//    }else{
//       return num
//    }
// })
// console.log(res);

// function mul(num){
//    let tab = 0
//    for(let i=1;i<=10;i++){
//      tab = num*i
     
//    }
//    return tab
// }
// console.log(mul(6));

// const arr = [1,2,3,4,5]
// let num = ''
// let out = []
// for(let i=1;i<=arr.length;i++){
//    num = num+1
//   out.push(num)
// }
// console.log(out);


// let start = new Date()
// let si = setInterval(()=>{
//    console.log(`${start-new Date() } hi`);
// },1000)
// setTimeout(()=>{
//    clearInterval(si)
// },4040)

// const arr = [1,2,3,4,5,6,3,2,4,1]
// let out = []
// for(let i=0;i<arr.length;i++){
//    let count = 0
//    for(let j=i+1;j<arr.length;j++){
//       if(arr[i]===arr[j]){
//          count++
//       }
//    }
//    if(count==0){
//       out.push(arr[i])
//    }
// }
// console.log(out);

// let arr = [1,2,3,4,5]
// let n = 3
// arr.splice(n,1)
// console.log(arr);
// let arr = [1,'a',2,'b',3,'c']
// let res = []
// let str =  arr.filter((num)=>{
//    if(typeof num == 'number'){
//       res.push('num')
//       return true
//    }else{
//       res.push('letter')
//       return false
//    }
   
// })
// console.log(res);
// let arr = [1,'a',2,'b',3,'c']
// let str  = []
// let res = arr.map((item)=>{
//    if(typeof item =='number'){
      
//       return 'number'
      
//    }else{
//       str.push(item)
//       return 'letter'
      
//    }
// })
// console.log(res);
// console.log(str);

// const obj = {
//    name:'abhi',
//    age:23,
//    place:'calicut'
// }
// let {name,age,place}=obj
// console.log(name);
// console.log(age);
// console.log(place);

// const EventEmitter = require('events');
// const button = new EventEmitter()
// let start = new Date()
// button.on('click1',()=>{
//    console.log(`button 1 clicked on ${new Date()-start} ms`);
// })
// button.on('click2',()=>{
//    console.log(`button 2 clicked on ${new Date()-start} ms`);
// })
// button.on('click3',()=>{
//    console.log(`button 3 clicked on ${new Date()-start} ms`);
// })
// for(let i =1;i<=3;i++){
//    setTimeout(()=>{
//       button.emit(`click${i}`)
//    },i*1000)
// }
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// let out = []
// let put = []
// for(let i=1;i<=5;i++){


//    for(let j=1;j<=i;j++){
      
//       for(let k=1;k<=j;k++){
//             out.push(k)

//       }

//    }
   
// }
// console.log(out);
// console.log(put);
// let n=10;
// let m=3;
// let divi = []
// let notdivi = []
// for(let i=1;i<=n;i++){
//     if(i%m===0){
//         divi.push(i)
//     }else{
//         notdivi.push(i)
//     }
// }
// console.log(divi);
// console.log(notdivi);
// let divisum = divi.reduce((acc,curr)=>{
//     return acc+curr
// },0)
// let notdivisum = notdivi.reduce((acc,curr)=>{
//     return acc+curr
// },0)
// return notdivisum-divisum

// let arr = [{a:10},{b:20},{c:30}]
// let res = arr.reduce((acc,curr)=>{
//    for(let obj in curr){
//       acc = acc+curr[obj]
//    }
//    return acc 
// },0)
// console.log(res/arr.length);
// let arr=  [1,2,5,3,4]
// let res= arr.filter(()=>0)
// console.log(res);
// let name ={}
// if(Object.keys(name)==0){
//    console.log('empty');
// }else{
//    console.log('not');
// }
// let person = {
//    name :"abhi",
//    age:23
// }
// let a = Object.keys(person)
// console.log(a);
// let b = Object.values(person)
// console.log(b);

// const person = {
//    name :'abhi',
//    age:23,
//    place:'calicut'
// }     
// let str = JSON.stringify(person)
// console.log(str);  

// let obj =  JSON.parse(str)
// console.log(obj);
// console.log(obj.name);

// const http = require("http")
// const app = http.createServer((req,res)=>{
//    res.setHeader('Content-Type','text/html')
//    if(req.url==='/'){
//       res.statusCode = 200;
//       res.end('<h1> welcome to home page </h1>')
//    }else if(req.url==='/about'){
//       res.statusCode = 200;
//       res.end('<h3> this is about page </h3>')
//    }else{
//       res.statusCode = 404;
//       res.end('<h1> nothing here </h1>' )
//    }
// })
// app.listen(9000,()=>{
//    console.log('http://localhost:9000');
// })
// const express = require('express');
// const app = express();

// // Middleware function to log incoming requests
// app.use((req, res, next) => {
//     console.log(`Received ${req.method} request at ${req.url}`);
//     next(); // Call the next middleware function
// });
// app.get('/login',(req,res)=>{
//    res.send('loginn')
// })
// // Route handler
// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

// app.listen(3000, () => {
//     console.log('http://localhost:3000/login');
// });
// const fs = require('fs')
// const fileDatas = [
//    { path :'note1.txt' , data:'helloo1'},
//    { path :'note2.txt' , data:'helloo2'},
//    { path :'note3.txt' , data:'helloo3'}
// ]
// for(let i=0;i<fileDatas.length;i++){
//    let files = fileDatas[i]
//    fs.unlink(files.path,(err)=>{
//       if(err){
//          console.log(`error on deleting ${files.path}`);
//       }else{
//          console.log(`${files.path} deleted`);
//       }
//    })
// }
// for(let i=0;i<fileDatas.length;i++){
//    let files = fileDatas[i];
//    fs.readFile(files.path,'utf8',(err,data)=>{
//       if(err){
//          console.log(`error on reading file ${files.path}`)
//       }else{
//          console.log(`the datas from ${files.path} is ${data}`);
//       }
//    })
// }

// for(let i=0;i<fileDatas.length;i++){
//    const files = fileDatas[i]
//    fs.writeFile(files.path,files.data,(err)=>{
//       if(err){
//          console.log(`error on writing file ${files.path}`);
//       }
//       else{
//          console.log(`written datas on ${files.path}`);
//       }
//    })
// }
// const arr = [1,2,3,4,5]

// const eo = arr.map((num)=>{
//    if(num%2===1){
//       return 'odd'
//    }else{
//       return 'even'
//    }
// })
// console.log(eo);
// const obj = [{a:10},{b:20},{c:30}]
// const res = obj.reduce((acc,curr)=>{
//    for(let i in curr){
//       acc = acc+curr[i]
//    }
//    return acc
// },0)
// console.log(res);

// let obj = {

// }
// if(Object.keys(obj).length==0){
//    console.log('empty');
// }
// else{
//    console.log('somethings there');
// }
// const arr = []
// if(arr.length==0){
//    console.log('empty');
// }else{
//    console.log('somethings there');
// }

// const str = 'qwerty'
// const arr = str.split('')
// let limit = arr.length;
// for(let  i=0;i<limit/2;i++){
//    let temp = arr[i]
//    arr[i] = arr[limit-1-i]
//    arr[limit-1-i] = temp
// }
// console.log(arr.join(''));
// let nums = [1,3,6,10,12,15]
// let div = []
// for(let i=0;i<nums.length;i++){
//     if(nums[i]%2===0&&nums[i]%3===0){
//         div.push(nums[i])
//     }
// }
// console.log(div);
// let sum = div.reduce((acc,curr)=>{
//     return acc+curr
// },0)
// console.log(sum/div.length);
// let a = 20;
// let count = 0
// for(let i=1;i<=a;i++){
//    if(a%i===0){
//       count++
//    }
// }
// console.log(count);
// let nums = [2,5,6,9,10]
// let sorted = nums.sort((a,b)=>a-b)
// let b = sorted[sorted.length-1]
// let s = sorted[0] 
// let div = []
// for(let i =0;i<s;i++){
//     if(b%i===0&s%i===0){
//        div.push(i)
// }
// }
// console.log(Math.max(div))
// class car {
//    constructor(brand,model){
//       this.brand = brand;
//       this.model = model;
//    }

// drive(){
//    console.log(`driving ${this.brand} ${this.model}`);
// }
// Pee(){
//    console.log('peeeep eepepep');
// }
// }
// const mycar = new car('toyota' , 'corolla')
// const mycar2 = new car('bmw' , 'm5')
// mycar2.drive()
// const str = ['a', 'bb', 'ccc', 'dddd', 'ee', 'fffff', 'gggggg'  ,'hh' ,'iii']

// console.log(str);
// let word = ''
// let max = 0
// for(let i=0;i<str.length;i++){
//    if(str[i].length>max){
//       word = str[i]
//       max= str[i].length
//    }
// }
// console.log(max);
// console.log(word);

// let str = 'malayalama'
// let arr = str.split('')
// let rev = [...arr].reverse()
// console.log(rev);
// if(arr.join()===rev.join()){
//    console.log('palindrome');
// }else{
//    console.log('not');
// }

// const arr = [1,2,3,4,5,6,3,2,4,8]
// const uni = [...new Set(arr)]
// console.log(uni);

// let res=arr.filter((x,y,z)=>{
//    return z.indexOf(x)==y
// })
// console.log(res);

// let arr=[{a:10},{b:20},{c:30}]
// let sum = arr.reduce((acc,curr)=>{
//    return acc+=Object.values(curr)[0]
// },0)
// console.log(sum);

// let obj={a:10,b:20,c:30}
// let big = Math.max(...Object.values(obj))
// console.log(big);
// let sum = 0
// for(let i in obj){
//    sum  = sum+obj[i]
// }
// console.log(sum);
// let sum=0
// for(let val in obj){
//    sum+=obj[val]
// }
// console.log(sum/Object.keys(obj).length);
// let nums = [2,7,1,19,18,3]
// let n = nums.length;
// let sq = 0
// let div = []
// for(let i=0;i<nums.length;i++){
//    if(n%(i+1)==0){
//       sq = sq+(nums[i]*nums[i])
//    } 
// }
// console.log(sq);
// let arr = [2,3,4,6,7,8,3,1]
// let fl = 0
// let sl = 0
// let res = arr.reduce((acc,curr)=>{
//    if(curr>fl){
//       sl = fl
//       fl = curr
//    }else if(curr>sl){
//       sl=curr
//    }
//    return sl
// },0)
// console.log(res);
// let res = arr.reduce((acc,curr)=>{
//    return acc<curr?curr:acc
// })
// console.log(res);

// function *abc(){
//    console.log('hii1');
//    yield 1;
//    console.log('hiii2');

// }
// const gen = abc()
// console.log(gen.next().value);
// console.log(gen.next().value);
// function abc () {
//    console.log(`your name is ${this.name}`);
// }
// var person = {
//    name:'abhi',
//    place :'calicut'
// }
// function abc (message){
//    console.log(`${message}  my name is  ${this.name}`);
//    console.log(`coming from ${this.place}`);
// }

// let xyz = abc.bind(person)
// xyz('helllooooo')

// function a(cb){
//    console.log('function 1 ');
//    cb()
// }
// function b(){
//    console.log('fucntion 2');
// }
// a(b)


// function abc(hoi){
//    console.log(`my name is ${this.name}`);
//    console.log(`i am from ${this.place}`);
//    console.log(`${hoi}`)
// }
// person = {
//    name:"shibu",
//    place :'manjeri'
// }
// let xyz = abc.bind(person)
// xyz('hello')

// function abc (name = 'abhi' , message = 'hello'){
//    console.log(`${name} ! ${message}`);
// }
// abc('shibu')
// const pro = new Promise((res,rej)=>{
//    const time = Math.random()
//    console.log(time);
//    if(time>0.5){
//       res('success')
//    }else{
//       rej('failed')
//    }
// })
// const abc = async ()=>{
//    try {
//       const promise = await pro
//       console.log(promise);
//    } catch (error) {
//       console.log(error);
//    }
// }
// abc()

// let a = 20 ; 
// a = a+20;


// let arr = [1,2,3,4]
// arr.push(5)
              
// function hof (a,b,sum){
//    return sum(a,b)
// }
// function add (a,b){
//    return a+b
// }
// let result = hof(5,6,add)
// console.log(result);
// function outer (){
//    console.log(a);
   
//       function inner (){
        
//          let a = 'jsdfknsjkn'
//       }
//       inner()
// }
// outer()
//                                                                                                                                                                                                                                            

// arr.splice(1,2,100,200)
// console.log(arr);


// let arr = [1,2,2,1,1,3]
// let dupli = []
// for(let i =0;i<arr.length;i++){
//    for(let j=i+1;j<arr.length;j++){
//       if(arr[i]===arr[j]){
//          dupli.push(arr[i])
//       }
//    }
// }
// console.log(dupli);
// let person  = {
//    name:'abhi',
//    age:23
// }
// let arr = Object.entries(person)
// console.log(arr);
// // Object.seal(person)
// person.name1 = 'riyas'
// console.log(person);
// const pro1 = new Promise((res,rej)=>{
//    rej('promise 1')
// })
// const pro2  = new Promise((res,rej)=>{
//    rej('promise 2')
// })
// const pro3 = new Promise((res,rej)=>{
//    res('promise 3')
// })
// Promise.race([pro1,pro2,pro3])
// .then((pass)=>{
//    console.log(pass);
// })
// .catch((fail)=>{
//    console.log(fail);
// })
// function abc (x){
//    return function (y){
//       return function (z){
//          return x+y+z
//       }
//    }
// }
// const sum = abc(2)(3)(4)
// console.log(sum);
// const person =  [
//    {
//       name :'abhi',
//       place :'calicut',
//       mark :3,
//       address :[
//          {
//             city:'malappuram',location :'abc'
//          }
//       ]
//    },
//    {
//       name:'riyas',
//       place :'mongam',
//       mark :5
//    }
// ]
// console.log(person[0].mark+person[1].mark);
// const abhiadd = person[0].address[0]
// abhiadd.street = 'chaliyam'
// console.log(JSON.stringify(person));
// let arr = [{name:'abhi',age:23} , {name:'riyas',age:19},{name:'kishan',age:27}]
// const sum = arr.reduce((acc,curr)=>{
//    return acc+curr.age
// },0)
// console.log(sum);
// const old  = arr.reduce((acc , curr)=>{
//    return (curr.age>acc.age)?curr:acc
// },arr[0])
// console.log(old);

// const adv = {
//    name :'abhi',
//    cat :{
//       name :'tom'
//    }
// }
// const catname = adv.cat?.name ; 
// console.log(catname);
// Create an Express route that accepts
//  two numbers as query parameters 
// and displays their sum on a web page
// const express =  require('express')
// const app = express()

// app.get('/',(req,res)=>{
//    let num1 = req.query.num1;
//    let num2 = req.query.num2;
   
//    var out= eval(num1+num2)

//    res.send(`sum is ${out}`)
   
// })

// app.listen(4000,()=>{
//    console.log('http://localhost:4000');
// })

// let nums = [9,6,4,2,3,5,7,0,1];
// let sort = nums.sort()

//  let sort =   [0, 1, 2, 3, 4, 5, 6, 7, 9]
//    let max = []
//  let inf = 1000
// for(let i=0;i<inf.length;i++){
//    max.push(inf[i])
// }
// console.log(max);