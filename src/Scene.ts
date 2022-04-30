import { AnimatedSprite, Container, Sprite, Texture } from "pixi.js";
import { HEIGHT, WHIDTH } from ".";
import { PhysiscContainer } from "./game/PhysiscContainer";
import { Lokihat } from "./Lokihat";

import { IUpdateable } from "./utils/IUpdateable";




export class Scene extends Container implements IUpdateable {
    private lokiAnimated: AnimatedSprite;
    private physloki: PhysiscContainer;
    private dvd:Sprite;



    constructor() {
        super();

        //class extending form container
        const lokiconfez: Lokihat = new Lokihat();
        lokiconfez.scale.set(0.2);
        lokiconfez.x = 0;
        lokiconfez.y = 20;
        this.addChild(lokiconfez);
        
        
        //animated sprite
        this.lokiAnimated = new AnimatedSprite(
            [
                Texture.from("corre1"),
                Texture.from("corre2"),
                Texture.from("corre3"),
                Texture.from("corre3"),
                Texture.from("corre5"),
                Texture.from("corre6"),
                Texture.from("corre7"),
                Texture.from("corre8")
            ], false
        );
        this.lokiAnimated.play();
        this.lokiAnimated.anchor.set(1,1);
        this.lokiAnimated.animationSpeed = 0.25;


        this.physloki = new PhysiscContainer();
        this.physloki.speed.x = 250;
        this.physloki.speed.y = 0;
        this.physloki.acceleration.y=20;

            this.physloki.x=500;
            this.physloki.y=500;
        this.addChild(this.physloki);
        
        this.dvd = Sprite.from("dvd");
    

        this.physloki.addChild(this.lokiAnimated);
        this.physloki.addChild(this.dvd);


    }
    public update(deltaTime: number, deltaFrame: number): void {

        this.lokiAnimated.update(deltaFrame);
        
        const dt = deltaTime / 1000;
        
        this.physloki.update(dt);
       

        if(this.physloki.x>WHIDTH){
            
            this.physloki.x=WHIDTH-430;
            this.physloki.speed.x=Math.abs(this.physloki.speed.x)*-1;
            this.physloki.scale.x=-1;
            this.lokiAnimated.tint=0xff00ff;
            this.dvd.tint=0xff00ff;
           
            

        }else if (this.physloki.x<0)
        {
            this.physloki.x=430;
            this.physloki.speed.x=Math.abs(this.physloki.speed.x);  
            this.physloki.scale.x=1; 
            this.lokiAnimated.tint=0xff0000;
            this.dvd.tint=0xff0000;

        }
        if(this.physloki.y>HEIGHT){
            this.physloki.y=HEIGHT;
            this.physloki.speed.y=-1200+HEIGHT*Math.random();
            this.lokiAnimated.tint=0x00ff00;
            this.dvd.tint=0x00ff00;

        }else if(this.physloki.y<250){
            this.physloki.y=250;
            this.physloki.speed.y=HEIGHT*Math.random();
            this.lokiAnimated.tint=0x00fff;
            this.dvd.tint=0x00fff;
        }

    
    }



}






