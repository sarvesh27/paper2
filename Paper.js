class Paper{

constructor(x,y,radius){

var options={

    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
this.image=loadImage('pic1.png')
this.body=Bodies.circle(x,y,radius,options)
this.radius=radius


World.add(world,this.body)

}

display(){
var v=this.body.position;



ellipseMode(RADIUS)
ellipse(v.x,v.y,this.radius,this.radius)
image(this.image,v.x-20,v.y-20,35,35)

}






}