let OurMenu = [];
let OurOrders = [];
let count = 0;

function Burger({ name, ingredients, cookingTime }) {
    this.name = name;
    this.ingredients = ingredients;
    this.cookingTime = cookingTime;
    OurMenu.push(this);
}

Burger.prototype = {
    cookingTime: 0,
    showComposition: function () {
        let { ingredients, name } = this;
        let ingredientsLength = ingredients.length;
        console.log(ingredientsLength);
        if (ingredientsLength !== 0) {
            ingredients.map(function (item) {
                console.log('Состав бургера', name, item);
            });
        }
    }
}

function Order(name , condition , value ) {
    this.name = name;
    this.condition = condition;
    this.value = value;
    this.order = ++count;
    OurOrders.push(this);
}

Order.prototype = {
    createBurger: function () {
        let { name, condition, value, order } = this;
        let findName = OurMenu.find( item => item.name === name ? true : false );
        if (findName) {
            let findBurger = OurMenu.find(item => item.name === name);
            return console.log(`Заказ ${order}: Бургер ${findBurger.name}, будет готов через ${findBurger.cookingTime} мин`);
        } else if (condition === 'has') {
            let findBurger = OurMenu.find( item => {
                if( item.ingredients.includes(value)) {
                    return item;
                }
            });
            return console.log(`Заказ ${order}: Бургер ${findBurger.name}, будет готов через ${findBurger.cookingTime} мин`);
        } else if (condition === 'except') {
            let findBurger = OurMenu.find ( item => {
                if( item.ingredients.includes(value) !== true) {
                    return item;
                }
            });
            return console.log(`Заказ ${order}: Бургер ${findBurger.name}, будет готов через ${findBurger.cookingTime} мин`);
        } else {
            let random = Math.floor(Math.random() * (OurMenu.length - 0) + 0);
            let findBurger = OurMenu[random];
            return console.log(`Заказ ${order}: Бургер ${findBurger.name}, будет готов через ${findBurger.cookingTime} мин`);
        }

    }
}

let hamburger = new Burger({ name: 'Hamburger', ingredients: ['Булка', 'Котлетка', 'Сыр Чеддер', 'Капуста'], cookingTime: 20 });
let macburger = new Burger({ name: 'Macburger', ingredients: ['Помидорка', 'Майонез'], cookingTime: 40 });
let goodburger = new Burger({ name: 'Goodburger', ingredients: ['Маслины', 'Рыбная котлета'], cookingTime: 50 });
    hamburger.showComposition();

let firstBurger = new Order('Hamburger').createBurger();
let secondBurger = new Order('', 'has', 'Маслины').createBurger();
let thirdBurger = new Order('', 'except', 'Булка').createBurger();
let fourBurger = new Order('randomBurger').createBurger();
