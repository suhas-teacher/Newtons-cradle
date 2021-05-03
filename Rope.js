class Rope {
    constructor(bodyA, bodyB, offsetX, offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.5,
            pointB: {x: this.offsetX, y: this.offsetY},
            length: 200
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display() {
        var fixX = roof.body.position.x + this.offsetX;
        var fixY = roof.body.position.y;
        strokeWeight(5);
        stroke("green");
        line(fixX, fixY, this.rope.bodyA.position.x, this.rope.bodyA.position.y);
    }
}