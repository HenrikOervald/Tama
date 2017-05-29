function Player() {

    this.health = 100;
    this.happiness = 100;
    this.toilet = 0;

    this.toiletVel = 0.04;
    this.happinessVel = 0.03;
    this.healthVel = 0.001;

    this.width = 55;
    this.height = 55;


    this.reduceHealth = function (cancer) {
        if (cancer) {
            this.healthVel += cancer;
        }
        this.health -= this.healthVel;

    }

    this.increaseHealth = function (biscuit) {
        this.health += biscuit;
    }

    this.increaseHappiness = function (happiness) {
        this.happiness += happiness;
    }

    this.reduceHappiness = function () {
        this.happiness -= this.happinessVel;

    }

    this.increasePoop = function () {
        this.toilet += this.toiletVel;

    }

    this.reducePoop = function (poopNeed) {
        this.toilet -= poopNeed
    }


    this.update = function () {
        this.reduceHealth();
        this.reduceHappiness();
        this.increasePoop();

    }

    this.draw = function () {
        fill(255, 255, 255, 255);
        ellipse(height / 2, width / 2, this.height, this.width, 20);

    };
}
