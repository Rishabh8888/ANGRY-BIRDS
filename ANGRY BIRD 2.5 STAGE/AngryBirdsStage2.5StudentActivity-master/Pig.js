class Pig extends BaseClass {
  constructor(x, y){      //constructor is called automatically when we create the object
    super(x,y,50,50);     //I am calling the construtor of my base class and giving width and height value
    this.image = loadImage("sprites/enemy.png");
    this.remove = true
  }

  display() {
    if(this.body.speed < 3) {
      super.display()
    }
    else {
      World.remove(world,this.body) ;
      push() ;
      this.Visibility = this.Visibility - 5 ; 
      tint(255,this.Visibility) ;
      image(this.image,this.body.position.x,this.body.position.y,50,50) ;
      pop() ;
    if(this.remove=true){
      score=score+50
      this.remove=false
    }
    }
  }

}