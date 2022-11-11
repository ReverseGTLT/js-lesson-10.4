/**
 *
 * @param {string} name
 * @param {number} age
 * @constructor
 */
function Human (name, age) {
    this.name = name;
    this.age = age;
    this.ownerCar = [];
    this.humanInfo = () => {
        console.log(`Human info: name - ${this.name}, age ${this.age}.`)
    }
}

const yurii = new Human ('Yurii', 30);
yurii.humanInfo();

const olga = new Human ('Olga', 29);
olga.humanInfo();

/**
 *
 * @param {string | number} mark
 * @param {string | number} model
 * @param {number} year
 * @param {string | number} number
 * @constructor
 */
function Car (mark, model, year, number) {
    this.mark = mark;
    this.model = model;
    this.year = year;
    this.number = number;
    this.owner = [];
    this.basketOwner = function (buyer) {
        if (buyer.age >= 18) {
            this.owner.push(buyer);
            buyer.ownerCar.push(this);
        } else {
            console.log(`Adult only`);
        }
    }
    this.carInfo = function () {
        console.log(`Auto: ${this.mark}, ${this.model}, ${this.year}, ${this.number}`);
        this.owner.forEach((element) => {
            element.humanInfo()
        });
    }
}

const toyota = new Car ('TOYOTA', 'Auris', '2012', 'ВН0001ВН');
toyota.basketOwner(olga);
toyota.carInfo();

const mitsubishi = new Car ('Mitsubishi', 'Grandis', '2011', 'ВН0002ВН');
mitsubishi.basketOwner(yurii);
mitsubishi.carInfo();
