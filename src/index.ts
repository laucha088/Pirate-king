import { Application, Loader, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1000,
	height: 650
});

Loader.shared.add({url:"./Perrito.jpg",name: "Perrito"});
Loader.shared.add({url:"./clampy.png",name: "Clampy"});

Loader.shared.onComplete.add(()=>{
	const clampy: Sprite = Sprite.from("Perrito");

	console.log(clampy.width,clampy.height);

	clampy.anchor.set(0.6);
	
	clampy.x = app.screen.width / 1.5;
	clampy.y = app.screen.height / 1.8;

	app.stage.addChild(clampy);

});
Loader.shared.Load();