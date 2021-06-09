class Box {
    constructor(x,y,width,height) {
        var boxOptions = {
            restitution:0.5
        }
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,width,height,boxOptions)
        World.add(world,this.body)
    }
    display() {
        var angle = this.body.angle
        push();
        angleMode(RADIANS)
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
        rectMode(CENTER)
        fill("blue")
        rect(0,0,this.width,this.height)
        pop()
    }
}