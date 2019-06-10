
const my_zoopark = {
    name: 'zoopark',
    AnimalCount: 0,
    zones: {
        mammals: [],
        birds: [],
        fishes: [],
        reptile: [],
        others: []
    },
    addAnimal: function (animalObj) {
        switch (animalObj.zone) {
            case 'mamal':
                this.zones.mammals.push(animalObj);
                break;
            case 'birds':
                this.zones.birds.push(animalObj);
                break;
            case 'fishes':
                this.zones.fishes.push(animalObj);
                break;
            case 'reptile':
                this.zones.reptile.push(animalObj);
                break;
            default:
                this.zones.others.push(animalObj);
        }
    },
    removeAnimal: function (animalName) {
        for (key in this.zones) {
            this.zones[key].map((item, i) => { 
                if(item.name === animalName) this.zones[key].splice(i, 1); 
            });
        }
    },
    getAnimal: function (type, value) {
        for (key in this.zones) {
            let findItem = this.zones[key].find(item => {
                if(item[`${type}`] === value) return item;
            })
            console.log(findItem)
    }
    },
    countAnimals: function () {
        this.AnimalCount = 0;
        for (key in this.zones) {
            this.AnimalCount += this.zones[key].length;
        }
        return this.AnimalCount;
    }
}

class Animal {
    constructor(name, phrase, foodtype = 'herbivore' | 'carnivore') {
        this.name = name;
        this.phrase = phrase;
        this.foodtype = foodtype;
    }

    eatSomething() {
        console.log(`${this.name} , I"m eat`);
    }

}

class Mammals extends Animal {
    constructor(name, phrase, foodtype, speed) {
        super(name, phrase, foodtype);
        this.zone = 'mamal';
        this.type = 'wolf';
        this.speed = speed;
    }

    run() {
        return console.log(`${this.type} ${this.name} run with speed ${this.speed} km/h`);
    }
}

class Birds extends Animal {
    constructor(name, phrase, foodtype, speed) {
        super(name, phrase, foodtype);
        this.zone = 'birds';
        this.type = 'bird';
        this.speed = speed;
    }

    fly() {
        return console.log(`${this.type} ${this.name} fly with speed ${this.speed} km/h`);
    }
}

class Fishes extends Animal {
    constructor(name, phrase, foodtype, speed) {
        super(name, phrase, foodtype);
        this.zone = 'fishes';
        this.type = 'fish';
        this.speed = speed;
    }

    swim() {
        return console.log(`${this.type} ${this.name} swim with speed ${this.speed} km/h`);
    }
}

class Reptile extends Mammals {
    constructor(name, phrase, foodtype, speed) {
        super(name, phrase, foodtype, speed);
        this.zone = 'reptile';
        this.type = 'reptile';
    }
}

let Rex = new Mammals('Rex', 'woof', 'herbivore', 15);
let Niko = new Mammals('Niko', 'woof', 'carnivore', 40);
let Jimbo = new Mammals('Jimbo', 'hrr', 'herbivore', 5);

let Indigo = new Birds('Indigo', 'AAAAA', 'herbivore', 100);
let Owl = new Birds('Owl', 'gugugug', 'carnivore', 200);

let Chris = new Fishes('Chris', 'bul bul','carnivore', 300);
let Dobby = new Fishes('Dobby', 'bul bul','herbivore', 22);

let Draken = new Reptile('Draken', 'tsss', 'herbivore', 300);
let John = new Reptile('John', 'ahahhaa', 'carnivoer', 222);

my_zoopark.addAnimal(Rex);
my_zoopark.addAnimal(Niko);
my_zoopark.addAnimal(Jimbo);
my_zoopark.addAnimal(Indigo);
my_zoopark.addAnimal(Owl);
my_zoopark.addAnimal(Chris);
my_zoopark.addAnimal(Dobby);
my_zoopark.addAnimal(Draken);
my_zoopark.addAnimal(John);


console.log(my_zoopark.countAnimals())

my_zoopark.getAnimal('type', 'wolf');
my_zoopark.getAnimal('name', 'Jimbo');


my_zoopark.removeAnimal('Niko');
my_zoopark.removeAnimal('Draken');

console.log('mammals', my_zoopark.zones.mammals);
console.log('reptile', my_zoopark.zones.reptile);
my_zoopark.removeAnimal('John');
console.log('reptile', my_zoopark.zones.reptile);


