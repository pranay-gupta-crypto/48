class Aster
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.4,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("asteroid.png");
		this.body=Bodies.circle(x,y,r,options)
		World.add(world, this.body);
			
	}
	display()
	{
			var asterpos=this.body.position;
			var angle = this.body.angle;		
			push()
			translate(asterpos.x, asterpos.y);
			// rectMode(CENTER)
		    rotate(angle);
			imageMode(CENTER);
			image(this.image, 0,0,150,250)
			pop()
			
	}

}