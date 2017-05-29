function InputButton(label,amount, xPosition, yPosition) {
    this.label = label;
    this.amount = amount;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.radius = 25;
    this.update = function () {
        
    }

    this.draw = function () {
        fill(255,255,255);
        ellipse(this.xPosition, this.yPosition, this.radius);
        fill(0,0,0);
        textAlign(CENTER,CENTER);
        text(this.label, this.xPosition, this.yPosition);
        

    }

 
}
