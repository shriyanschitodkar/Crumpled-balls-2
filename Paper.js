class Paper{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
       // this.width = width;
       // this.height = height;
       this.radius=radius
        this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
        //var angle = this.body.angle;
       // push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y, this.radius*2, this.radius*2);
        pop();
      }
}