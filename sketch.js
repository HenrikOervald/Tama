var player, picture;
var indicator;
var toiletButton, healthButton, happyButton, testButton;
var testBool = true;
var png;



function setup() {
    png = loadImage('./pictures/background/beach.png');
    picture = loadImage('./pictures/player/penguin.png');
    var cnv = createCanvas(880, 720);
    cnv.parent('canvasContainer');


    player = new Player(picture);
    indicator = new Indicator();


    setUpToiletButton();
    setUpHappyButton();


}

function draw() {
    



    if (playerIsAlive()) {
        image(png, 0, 0);
        indicator.update(player.health, player.happiness, player.toilet);
        player.draw(picture);
        player.update();
    } else {
        fill(0,0,0);
        textSize(40);
        text("Your Tama is dead!", width / 3, height / 3);
    }
}



function playerIsAlive() {
    if (player.health > 0 && player.happiness > 0 && player.toilet < 100) {
        return true;
    } else {
        return false;
    }
}


function setUpToiletButton() {
    toiletButton = createButton('Reduce toilet need');
    toiletButton.parent("menuButtonsContainer");
    toiletButton.addClass('btn');


    toiletButton.mousePressed(function () {

        if (player.toilet < 10) {
            player.reducePoop(player.toilet)
        } else {
            player.reducePoop(10);
        }

    });
}

function setUpHappyButton() {
    happyButton = createButton("Increase Happieness");
    happyButton.parent('menuButtonsContainer');
    happyButton.addClass('btn');

    happyButton.mousePressed(function () {
        if (player.happiness > 80) {
            player.happiness = 99;
        } else {
            player.increaseHappiness(20);
        }

    })
}
