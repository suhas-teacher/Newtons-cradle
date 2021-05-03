class Bob {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        var options={
            restitution:1,
            friction:0,
            density:0.8
        }
        this.body = Bodies.circle(this.x, this.y, this.radius/2,options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        ellipseMode(RADIUS);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(5);
        stroke("magenta");
        fill("deeppink");
        ellipse(pos.x, pos.y, this.radius, this.radius);
        pop();
    }
}