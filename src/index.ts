
import { Application,  Loader, Ticker,  } from 'pixi.js'
import { asseets } from './assets';
import { Scene } from './Scene';

export const WHIDTH = 1920;
export const HEIGHT = 1080;

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: WHIDTH,
	height: HEIGHT
});

window.addEventListener("resize",()=>{

	const escalaX= window.innerWidth/app.screen.width;  //lo que el navegador dice sobre la escala del juego (640)
	const escalaY= window.innerHeight/app.screen.height;
	const escala=Math.min(escalaX,escalaY);

	const gameWidth= Math.round(app.screen.width*escala);
	const gameHeight= Math.round(app.screen.height*escala);
	
	const margenHorizontal=Math.floor((window.innerWidth-gameWidth)/2);
	const margenVertical=Math.floor((window.innerHeight-gameHeight)/2);


	app.view.style.width=gameWidth+"px";
	app.view.style.height=gameHeight+"px";

	app.view.style.marginLeft=margenHorizontal+"px";
	app.view.style.marginRight=margenHorizontal+"px";

	app.view.style.marginTop=margenVertical+"px";
	app.view.style.marginBottom=margenVertical+"px";
	
});

window.dispatchEvent(new Event("resize"));


// una forma const myLoader = new Loader();
Loader.shared.add(asseets); //importo desde assets

Loader.shared.onComplete.add(()=>{
	const myScene=new Scene();
	app.stage.addChild(myScene);
	Ticker.shared.add(function(deltaFrame)
	{
		myScene.update(Ticker.shared.deltaMS,deltaFrame);
	})
});

Loader.shared.load();


