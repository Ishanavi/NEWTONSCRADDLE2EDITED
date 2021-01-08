class Pendulum
{
    constructor(x,y,color)
    {
        var options =
        {
            isStatic:false,
            restitution:1,
            friction:0,
            frictionAir:0.0,
            slop:1,
            inertia:Infinity
        }

        this.width = 40;
        this.height = 40;
        this.color = "black";

        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        stroke("white");
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(0,0,60,60);
        pop();
    }
}