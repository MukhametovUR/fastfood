  class Topping{
    constructor(toppingName, price, calories){
       this.toppingName = toppingName;
       this.price = price;
       this.calories = calories;
    //    this.show();
    }

    // show(){
    //     console.log(`${this.toppingName} ${this.price} ${this.calories}`);
    // }
}

class Hamburger {    
    constructor(size, stuffing, topping) { 
        this.size = size;
        this.stuffing = stuffing;
        this.topping = topping;
        this.addTopping();
        // this.removeTopping();
    }  

    addTopping(topping) {    // Добавить добавку          
        topping = new Topping(this.toppingName);
        console.log(this.topping);

    }
    removeTopping(topping) { // Убрать добавку 
        topping = '';
   }
    getToppings(topping) {   // Получить список добавок 


   }
    getSize(size) {              // Узнать размер гамбургера 
       console.log(`${this.size}`); 
   }
    getStuffing() {          // Узнать начинку гамбургера 
   
   }
    calculatePrice() {       // Узнать цену 
   
   }
    calculateCalories() {    // Узнать калорийность 
       
   }
  }



let h1 = new Topping("small", "20","100");
let h2 = new Topping("low", "40","1");

h1.show;

let h3 = new Hamburger("big","30","20");
// h3.addTopping();