var player;
var indicator;
var toiletButton, healthButton, happyButton, testButton;
var testBool = true;

function xpl() {
    player.redusePoop(10)
}

function setup() {
    var cnv = createCanvas(600, 400);
    cnv.parent('canvasContainer');
    background(0, 0, 0);

    player = new Player();
    indicator = new Indicator();


    setUpToiletButton();


}

function draw() {
    background(0, 0, 0);
    player.draw();
    player.update();


    if (playerIsAlive()) {
        indicator.update(player.health, player.happiness, player.toilet);
    } else {
        fill(255, 255, 255);
        text("Your Tama is dead!", width / 2, height / 2);
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
        if (testBool) {
            toiletButton.addClass("btn btn-success");
            testBool = false;
        } else {
            toiletButton.removeClass("btn btn-success");
            testBool = true;

        }
        if (player.toilet < 10) {
            player.reducePoop(player.toilet)
        } else {
            player.reducePoop(10);
        }

    });
}

function setUpHappyButton(){
    happyButton = createButton("Increase Happieness");
    happyButton.parent('menuButtonsContainer');
    happyButton.addClass('btn');
    
    happyButton.mousePressed(function(){
        player.
    })
}
