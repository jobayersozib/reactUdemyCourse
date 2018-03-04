


class Person{
    constructor(name="Undefined",age=0){
        this.name=name;
        this.age=age;
    }
    getGreeting(){
        return "hi "+this.name+" "+this.age;
    }
}

class Traveller extends Person{
    constructor(name=undefined,age=0,location="null"){
        super(name,age)
        this.location=location;

    }
    getGreeting(){
       
        return super.getGreeting()+" Location :"+this.location;
       
    }
}
const me= new Traveller("jobayer")
console.log(me.getGreeting());