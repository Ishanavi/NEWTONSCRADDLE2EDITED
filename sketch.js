const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint  = Matter.MouseConstraint;

var world,engine;


function preload()
{

}

function setup()
{
    canvas = createCanvas(windowWidth/ 2+150,windowHeight/2+100);
    engine = Engine.create();
    world = engine.world;

    let canvasMouse = Mouse.create(canvas.elt);
    canvasMouse.pixelRatio = pixelDensity();
    let options = 
    {
        mouse:canvasMouse
    }

    mConstraint = MouseConstraint.create(engine,options)
    World.add(world,mConstraint);


    pendulum1 = new Pendulum(240,height/2,"white");
    pendulum2 = new Pendulum(260,height/2,"white");
    pendulum3 = new Pendulum(280,height/2,"white");
    pendulum4 = new Pendulum(300,height/2,"white");
    pendulum5 = new Pendulum(320,height/2,"white");


    

    sling1  = new Sling(pendulum1.body,{x:300,y:180});
    sling2  = new Sling(pendulum2.body,{x:360,y:180});
    sling3  = new Sling(pendulum3.body,{x:420,y:180});
    sling4  = new Sling(pendulum4.body,{x:480,y:180});
    sling5  = new Sling(pendulum5.body,{x:540,y:180});


}

function draw()
{
    background("black");

    Engine.update(engine);

    pendulum1.display();
    pendulum2.display();
    pendulum3.display();
    pendulum4.display();
    pendulum5.display();

    

    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();
  





}


function mouseDragged()
{
    Matter.Body.setPosition(pendulum1.body,{x:mouseX,y:mouseY})
}










