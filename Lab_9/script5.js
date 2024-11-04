class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.speed = 0;
    }

    accelerate(amount) {
        this.speed += amount;
        console.log(`${this.make} ${this.model} прискорюється  до ${this.speed} км/год`);
    }

    brake(amount) {
        this.speed -= amount;
        if (this.speed < 0) this.speed = 0;
        console.log(`${this.make} ${this.model} гальмує до ${this.speed} км/год`);
    }
}

class Car extends Vehicle {
    constructor(make, model, numDoors) {
        super(make, model);
        this.numDoors = numDoors;
    }

    openTrunk() {
        console.log(`Багажник автомобіля ${this.make} ${this.model} відкритий`);
    }
}
class Truck extends Vehicle {
    constructor(make, model, loadCapacity) {
        super(make, model);
        this.loadCapacity = loadCapacity;
    }

    loadCargo(weight) {
        if (weight > this.loadCapacity) {
            console.log(`Перегрузка! ${this.make} ${this.model} може перевозити тільки ${this.loadCapacity} кг.`);
        } else {
            console.log(`${this.make} ${this.model} завантажено на ${weight} кг`);
        }
    }
}

class ElectricCar extends Car {
    constructor(make, model, numDoors, batteryCapacity) {
        super(make, model, numDoors);
        this.batteryCapacity = batteryCapacity;
        this.batteryLevel = 100; 
    }

    chargeBattery() {
        this.batteryLevel = 100;
        console.log(`${this.make} ${this.model} повністю заряжений`);
    }
}

const myCar = new Car("Toyota", "Corolla", 4);
myCar.accelerate(50);
myCar.brake(20);
myCar.openTrunk();

const myTruck = new Truck("Volvo", "FH16", 25000);
myTruck.accelerate(70);
myTruck.loadCargo(20000);
myTruck.loadCargo(30000); 
myTruck.brake(40);

const myElectricCar = new ElectricCar("Tesla", "Model S", 4, 100);
myElectricCar.accelerate(100);
myElectricCar.chargeBattery();
myElectricCar.brake(50);
