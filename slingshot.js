class Slingshot{
    constructor(bodyA,pointB)
    {
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.sling=Constraint.create(options);
        this.pointB=this.pointB;
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
        var pointA=this.sling.bodyA.postion;
        var pointB=this.pointB;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
} 