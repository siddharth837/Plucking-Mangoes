class Stone{
    constructor(x,y,width,height)
    {
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.stone=Bodies.rectangle(this.x,this.y,this.width,this.height);
        this.image=loadImage("stone.png");
        World.add(world,this.stone);
    }
    display(){
        var posStone=this.stone.position;
        push();
        rectMode(CENTER);
        //fill("brown");
        //stroke("brown");
        //rect(this.x,this.y,this.width,this.height);
        image(this.image,this.x,this.y,this.width,this.height);
        pop();
    }
}