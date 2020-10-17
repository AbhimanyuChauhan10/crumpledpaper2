class Paper  {
    constructor(x, y, width, height){
        super(x,y, width,height);

        var options={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.body = Bodies.ellipse(x, y, radius)
        this.image = load.image()
    }
    
}