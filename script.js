  class Topping{
    constructor(topping,price,calories){
      this.topping = topping;
      this.price = price;
      this.calories = calories;
    }
}
class Hamburger {    
    constructor(size, add,  Topping) { 
        this.size = new Topping(this.getSize(size));
        this.add = new Topping(this.addTopping(add));
        this.Topping = new Topping(this.getToppings(topping));
    }  

    addTopping(topping) {    // Добавить добавку          


    }
    removeTopping(topping) { // Убрать добавку 

   }
    getToppings(topping) {   // Получить список добавок 
        let result = [];
        this.selectAll(topping).forEach(item => {
            let obj = new Topping(item);
            result.push(obj);
        })
   }
    getSize(size) {              // Узнать размер гамбургера 
        
   }
    getStuffing() {          // Узнать начинку гамбургера 
   
   }
    calculatePrice() {       // Узнать цену 
        this.price = this._sumPrice();
        this.calories = this.calculateCalories();
   }
    calculateCalories() {    // Узнать калорийность 
        let result = this.size.calories + this.add.calories;
        this.toppings.forEach(item => result += item.calories);
        return result;
   }
  }