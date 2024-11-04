const car = {
    speedometer: 0
};
Object.defineProperties(car, {
    setSpeedometer: {
        value: function(speed) {
            this.speedometer = speed;
        }
    },
    getSpeedometer: {
        value: function() {
            return this.speedometer;
        }
    },
    clearSpeedometer: {
        value: function() {
            this.speedometer = 0;
        }
    }
});

car.setSpeedometer(60);           
console.log(car.getSpeedometer()); 
car.clearSpeedometer();           
console.log(car.getSpeedometer()); 
