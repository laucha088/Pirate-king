import { Application, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

//const clampy: Sprite = Sprite.from("clampy.png");
const Perritococa: Sprite = Sprite.from("perritococa");
Perritococa.anchor.set(200);
//clampy.anchor.set(0.5);
Perritococa.x = app.screen.width /2;
Perritococa.y = app.screen.height /2;
//clampy.x = app.screen.width / 2;
//clampy.y = app.screen.height / 2;
app.stage.addChild(Perritococa)
//app.stage.addChild(clampy);