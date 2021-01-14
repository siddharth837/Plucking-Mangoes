class Man{
    constructor(x,y,width,height)
    {
        this.x=175;
        this.y=507;
        this.width=150;
        this.height=150;
        this.man=Bodies.rectangle(this.x,this.y,this.width,this.height,{isStatic:true})
        this.image=loadImage("boy.png");
        World.add(world,this.man)
    }
    display(){
        var posMan=this.man.postion;
        push()
        stroke("black");
        fill("black");
        rectMode(CENTER);
       
        image(this.image,175,407,150,350);
        pop()
    }
}