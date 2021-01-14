class Tree{
    constructor(x,y,width,height)
    {
        this.x=624;
        this.y=336;
        this.width=100;
        this.height=500;
        this.tree=Bodies.rectangle(this.x,this.width,this.width,this.height);
        this.image=loadImage("tree.png");
        World.add(world,this.tree);
    }
    display(){
       var posTree=this.tree.position;
        push()
        fill("brown");
        stroke("brown");
        rectMode(CENTER);
       
        image(this.image,500,92,700,600);
        pop()
    }
    }
   