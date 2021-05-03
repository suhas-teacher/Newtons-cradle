class Roof {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rectMode(CENTER);
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(5);
        stroke("lightgrey");
        fill("white");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}