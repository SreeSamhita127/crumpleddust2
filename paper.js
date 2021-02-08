class Paper{
    constructor(x,y,radius){
        var paperoptions={
            'restitution':0,
            'friction':0,
            'density':1.0
      
        }
        this.body = Bodies.circle(x,y,radius,paperoptions);
        this.radius = radius;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,65,65);

    }

};