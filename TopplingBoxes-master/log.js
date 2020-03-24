class log{
constructor(x,y,h,angle){
this.body = Bodies.rectangle(x,y,10,h)
this.w = 10;
this.h = h;
Matter.Body.setAngle(this.body,angle);
World.add(world,this.body);
}

display(){
var pos = this.body.position;
var angle = this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
fill(255);
strokeWeight(5);
stroke("yellow");
rect(0, 0, this.w, this.h);
pop();

}




}