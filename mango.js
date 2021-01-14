class Mango{
    constructor(x,y,width,height)
    {
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.mango=Bodies.rectangle(this.x,this,y,this.width,this.height);
        this.image=loadImage("mango.png");
        World.add(world,this.mango);
    }
    display(){
        var posMango=this.mango.position;
        push();
        rectMode(CENTER)
        //fill("yellow");
        //stroke("yellow");
        //rect(this.x,this.y,this.width,this.height);
        image(this.image,this.x,this.y,this.width,this.height);
        pop();
    }
}