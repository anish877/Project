class pig{
constructor(x,y)
{var option
this.body = Bodies.rectangle(x,y,40,40)
this.w = 40;
this.h = 40;
World.add(world,this.body)


}
display(){
var pos = this.body.position;
var angle = this.body.angle;
push()
translate(pos.x,pos.y);
rotate(angle);
fill("green")
rectMode(CENTER)
rect(0,0,this.w,this.h);



}







}