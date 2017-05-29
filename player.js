function Player(img) {

    this.health = 100;
    this.happiness = 100;
    this.toilet = 0;

    this.toiletVel = 0.04;
    this.happinessVel = 0.03;
    this.healthVel = 0.001;

    this.width = 55;
    this.height = 55;
    this.moveRight = true;

    this.img = img;
    this.x = width / 2;
    this.y = height - 200;

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

    this.draw = function (img) {
        image(img, this.x, this.y, img.height / 8, img.width / 8);
        this.move();

    };

    this.move = function () {
        if (frameCount % 20 == 0 && this.moveRight == true) {
            this.x += 5;
            if (this.x >= 670) {
                this.moveRight = false;
            }

        } else if (frameCount % 20 == 0 && this.moveRight == false) {
            this.x -= 5;
            console.log(this.x);
            if (this.x <= 420) {
                this.moveRight = true;
            }
        }
    }


}
