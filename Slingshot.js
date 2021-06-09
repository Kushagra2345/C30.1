class Sling{

    constructor(a,b){

    var options={

        bodyA:a,
        bodyB:b,
        length:10,
        Stiffness:0.025

    }

    this.sling=Constraint.create(options)
    World.add(world,this.sling)

}

display(){
    line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.bodyB.position.x,this.sling.bodyB.position.y)

}
}