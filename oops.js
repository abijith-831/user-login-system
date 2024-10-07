// class Bike{
//     //constructor method
//     constructor(modelName,colour,price){
//         this.modelName = modelName;
//         this.colour = colour;
//         this.price = price;
        
//     }

//     //prototype method
//     bikeDetails(){
//         console.log("bike : "+this.modelName);
//         console.log("colour :"+this.colour);
//         console.log("price :"+this.price);
//     }
//     showPrice(){
//         console.log("price of "+ this.modelName + " is "+this.price);
//     }
// //static method
//     static message(){
//         console.log("it is static method");
//     }

// }
// let b1 = new Bike()
// b1.modelName = "hero splender plus";
// b1.colour = "black & red";
// b1.price = 80000;
// console.log(b1.modelName,b1.colour,b1.price);
// // console.log(b1.colour,b1.price);


// console.log(b3.modelName);
// console.log(b3.colour);
// console.log(b3.price);
//prototype method
// b2.bikeDetails()
// b1.showPrice()
// b2.showPrice()
// b3.showPrice()


//static method
// Bike.message()

//inheritance 
//base / parent class   bike
//deriived class / child class   sports bike

// class sportsbike extends Bike{

// }

// const b1 = new Bike("splender","red",80000);
// const b2 = new Bike("honda","black",110000);
// const b3 = new Bike("pulsar","blue",130000);

// const sb1 = new sportsbike("ktm 200","orange",200000);

// sb1.bikeDetails()
// sb1.showPrice()
// class person{
//     constructor(name,age,place){
//         this.name = name
//         this.age = age
//         this.place = place
//     }
//      hello (){
//         console.log(`hello , i am ${this.name} iam ${this.age} years old im from ${this.place} `);
//     }
// }
// const student = new person('abhi',23,'calicut')
// student.hello()

// class student {
//     constructor(name,place){
//         this.name = name
//         this.place = place
//     }
//     static wishes(name,place){
//         console.log(`hello , i am ${name} and i m from ${place}`);
//     }
// }


// student.wishes('abhi','calicut')