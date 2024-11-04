const car = {
    speedometer: 0
};

Object.defineProperties(car, {
    setSpeed: {
        value: function(speed) {
            this.speedometer = speed;
            return this;
        }
    },
    getSpeed: {
        value: function() {
            console.log(this.speedometer); 
            return this; 
        }
    },
    clearSpeed: {
        value: function() {
            this.speedometer = 0;
            return this; 
        }
    }
});

car.setSpeed(200).setSpeed(300).getSpeed().clearSpeed().getSpeed();