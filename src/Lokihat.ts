import { Container, Point, Sprite } from "pixi.js";

export class Lokihat extends Container{

    constructor(){
        super();
        const loki: Sprite = Sprite.from("loki");
        const fez: Sprite = Sprite.from("Fez");
        
        fez.scale.set(0.4,0.4);
        fez.position.set(100,-90);
        
        loki.anchor.set(0);
            
        this.addChild(loki); 
        this.addChild(fez); 
        fez.toGlobal(new Point()); //el point lo convierte en coor globales-  gorro decime donde queda tu origen
	fez.parent.toGlobal(fez.position);// padre de fez decime la posicion global del gorro
	
    }

}