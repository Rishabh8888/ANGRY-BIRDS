class Slingshot {
constructor(bodyA,pointB) {
    var options = {
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        length:10
    }
    this.sling1 = loadImage("sprites/sling1.png")
    this.sling2 = loadImage("sprites/sling2.png")
    this.sling3 = loadImage("sprites/sling3.png")
    this.pointB = pointB
    this.sling = Constraint.create(options)
    World.add(world,this.sling);
    
}
    display() {
        image(this.sling1,200,20) ;
        image(this.sling2,170,20) ;
        if(this.sling.bodyA){
        var PointA = this.sling.bodyA.position;
        var pointB = this.pointB ;
        push()
        if(PointA.x < 220) {
        strokeWeight(7) ;
        line(PointA.x-20,PointA.y,pointB.x-10,pointB.y)
        line(PointA.x-20,PointA.y,pointB.x+30,pointB.y)
        image(this.sling3,PointA.x-30,PointA.y-10,15,30) ;
       }
       else {
       strokeWeight(3)
       line(PointA.x+25,PointA.y,pointB.x-10,pointB.y)
       line(PointA.x+25,PointA.y,pointB.x+30,pointB.y-3)
       image(this.sling3,PointA.x+25,PointA.y-10,15,30) ;
    }
       pop() ; 
  }
}
    fly() {
        this.sling.bodyA = null
    }

    attach(body) {
        this.sling.bodyA = body
    }
}
