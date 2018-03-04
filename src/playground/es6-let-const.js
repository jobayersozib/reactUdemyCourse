


class Animal{
    
    constructor(name){
        console.log("Constructing.........");
        this.name=name;
    }
    specis(){
        console.log(this.name)
    }
}

const func=()=>{
    
}

console.log(func());
 const multiplication={
     numbers:[1,2,3],
     multiplyBy:3,
     multiply(){
            return this.numbers.map((num)=>num*this.multiplyBy);
     }
 }

 console.log(multiplication.multiply());