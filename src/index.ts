import { Application, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1000,
	height: 650
});
	const clampy: Sprite = Sprite.from("Perrito.jpg");

	console.log("hola buenas te gusta la coca ? ",clampy.width,clampy.height);

	clampy.anchor.set(0.6);
	
	clampy.x = app.screen.width / 1.5;
	clampy.y = app.screen.height / 1.8;

	app.stage.addChild(clampy);