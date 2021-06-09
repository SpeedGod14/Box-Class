class Ground {
    constructor(x,y,width,height) {
        var groundOptions = {
            isStatic:true
        }
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,width,height,groundOptions)
        World.add(world,this.body)
    }
    display(){
        rectMode(CENTER)
        fill("green")
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}