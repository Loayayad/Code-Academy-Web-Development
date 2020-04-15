const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set appetizers(appetizersIn) {
        this._courses.appetizers = appetizersIn;
    },
    set mains(mainsIn) {
        this._courses.mains = mainsIn;
    },
    set desserts(dessertsIn) {
        this._courses.desserts = dessertsIn;
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            dish: dishName,
            price: dishPrice
        };
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];

    },
    generateRandomMeal() {
        const appetizer = menu.getRandomDishFromCourse('appetizers');
        const main = menu.getRandomDishFromCourse('mains');
        const dessert = menu.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `your meal is ${appetizer.dish} ${main.dish} ${dessert.dish} with a total price ${totalPrice}`;
    }

};


menu.addDishToCourse('appetizers', 'salad', 4.00);
menu.addDishToCourse('appetizers', 'soup', 6.00);
menu.addDishToCourse('appetizers', 'wings', 8.00);

menu.addDishToCourse('mains', 'steak', 20.00);
menu.addDishToCourse('mains', 'chicken', 50.00);
menu.addDishToCourse('mains', 'fish', 70.00);

menu.addDishToCourse('desserts', 'ice-cream', 12.00);
menu.addDishToCourse('desserts', 'banana', 7.00);
menu.addDishToCourse('desserts', 'sweets', 9.00);


const meal = menu.generateRandomMeal();
console.log(meal);