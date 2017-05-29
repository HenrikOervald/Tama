 function Indicator() {



     this.update = function (health, happy, toilet) {

         fill(255, 255, 255);
         this.healthindi = rect(100, 30, health * 2, 10);
         text('Health : ' + (health.toPrecision(1) - 1) + "%", 15, 40);

         fill(255, 255, 255);
         this.happyindi = rect(100, 50, happy * 2, 10);
         text("Happy :  " + happy.toPrecision(2) + "%", 15, 60);

         fill(255, 255, 255);
         this.toiletindi = rect(100, 70, toilet * 2, 10);
         text("Toilet :  " + toilet.toPrecision(2) + "%", 15, 80);
     }
 }
