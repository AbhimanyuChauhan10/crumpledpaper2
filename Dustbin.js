class Dustbin{
    constructor(x, y, width, height){


        var options= {
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.image = loadImage("sprites/dustbingreen.png");
    }
}