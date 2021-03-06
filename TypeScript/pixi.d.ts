declare module PIXI
{
	export var BaseTextureCache: any;
	export var texturesToUpdate: PIXI.BaseTexture[];
	export var TextureCache: any;

    	export function autoDetectRenderer(width: number, height: number, view?: HTMLCanvasElement, transparent?: boolean): PIXI.IRenderer;

	export class AssetLoader extends EventTarget
	{
		//properties
	    	assetURLs: string[];

	    	//constructor
	    	constructor(assetURLs: string[]);

            	//methods
	    	load(): void;

	    	//callbacks
	    	onComplete: () => void;
	    	onProgress: () => void;
	}

	export class BaseTexture extends EventTarget
	{
	    	//properties
	    	height: number;
	    	width: number;
	    	source: any;
		
	    	//constructor
	    	constructor(source: any);
		
	    	//static methods
	    	static fromImage(imageURL: string);
	}

	export class BitmapFontLoader extends EventTarget
	{
            	//constructor
	    	constructor(url: string, crossorigins?: boolean);

            	//methods
	    	load(): void;

            	//callbacks
	    	onLoaded: () => void;
	    	onXMLLoaded: () => void;
	}

	export class BitmapText extends DisplayObjectContainer
	{
			//properties -> they seem to be hidden, see example 10
	    	height: number;
	    	width: number;

           	//constructor
	    	constructor(text: string, style: any);

            	//methods
	    	setStyle(style: any):void;
	    	setText(text: string):void;
	}

	export class CanvasRenderer
	{
	    	//properties
	    	context: CanvasRenderingContext2D;
	    	height: number;
	    	view: HTMLCanvasElement;
	    	width: number;
 
   	        //constructor
		constructor(width: number, height: number, view?: HTMLCanvasElement, transparent?: boolean);
		
	    	//methods
	    	render(stage: Stage): void;
	}

	export class Circle {

		//properties
		radius: number;
    	x: number;
    	y: number;

    	constructor(x?:number, y?:number, radius?:number);

    	clone():Circle;
    	contains(x:number, y:number):boolean;

	}

	export class CustomRenderable extends DisplayObject
	{
	    	//properties
	    	context: CanvasRenderingContext2D;
	   		height: number;
	    	view: HTMLCanvasElement;
	    	width: number;
	    
            	//constructor
	    	constructor();

            	//methods unsure
            	render(stage: Stage): void;
	}


	export class DisplayObject
	{
	    	//properties
	    	alpha: number;
	    	buttonMode: boolean;
	    	hitArea: Rectangle;
	    	interactive: boolean;
	    	parent: DisplayObjectContainer;
	    	pivot: Point;
	    	position: Point;
	    	rotation: number;
	    	scale: Point;
	    	stage: Stage;
	    	visible: boolean;
		
	    	//constructor
	    	constructor();

	    	//methods
	    	updateTransform(): void;
		
	    	//callbacks
	    	click: (interactionData: InteractionData) => void;
	    	mousedown: (interactionData: InteractionData) => void;
			mouseout: (interactionData: InteractionData) => void;
			mouseover: (interactionData: InteractionData) => void;
			mouseup: (interactionData: InteractionData) => void;
			mouseupoutside: (interactionData: InteractionData) => void;
			tap: (interactionData: InteractionData) => void;
			touchend: (event: InteractionData) => void;
			touchendoutside: (event: InteractionData) => void;
			touchstart: (event: InteractionData) => void;

			// they seems to be kind of private? report to the example 8, they are not defined in DisplayObject class. 
			mousemove: (event: InteractionData) => void;
			touchmove: (event: InteractionData) => void;
	}


	export class DisplayObjectContainer extends DisplayObject
	{
		//properties
	    	children: DisplayObject[];
		
		//constructor
	    	constructor();

		//methods
	    	addChild(displayObject: DisplayObject): void;
	    	addChildAt(displayObject: DisplayObject, index: number): void;
	    	getChildAt(index: number): DisplayObject;
	    	removeChild(displayObject: DisplayObject): void;
	    	swapChildren(displayObject1: DisplayObject, displayObject2: DisplayObject): void;
	}

	export class Ellipse {

		//properties:
		x:number;
		y:number;
		width:number;
		height:number;

		constructor(x?:number, y?:number, width?:number, height?:number);

		clone():Ellipse;
		contains(x:number, y:number):boolean;
	}

	export class Graphics extends DisplayObjectContainer {

		constructor();

		beginFill(color:number, alpha:number):void;
		clear():void;
		drawCircle(x:number, y:number, radius:number):void;
		drawElipse(x:number, y:number, width:number, height:number):void;
		drawRect(x:number, y:number, width:number, height:number):void;
		endFill():void;
		lineStyle(lineWidth?:number, color?:number, alpha?:number):void;
		lineTo(x:number, y:number):void;
		moveTo(x:number, y:number):void;
	}
	
	export class ImageLoader extends EventTarget
	{
		//constructor
	    	constructor(url: string, crossorigin?: boolean);
		
		//methods
	    	load(): void;

	    //callbacks
	    	onLoaded: () => void;
	}

	export class InteractionData
	{
		//properties
	    	global: Point;
	    	originalEvent: any;
	    	target: Sprite;
		
		//constructor
	   		constructor();

	   	//methods
	   		getLocalPosition(displayObject:DisplayObject):Point;
	}

	export class InteractionManager
	{
		//properties
	    	mouse: InteractionData;
	    	stage: Stage;
	    	touchs: InteractionData[];

		//constructor
	    	constructor(stage: Stage);
	}

	interface IEvent
	{
	    	type: string;
	}

	export class EventTarget
	{

	    addEventListener(type: string, listener: (event: IEvent) => void );
	    removeEventListener(type: string, listener: (event: IEvent) => void );
	    dispatchEvent(event: IEvent);
	}
	
	export class JsonLoader
	{
		//constructor
		constructor(url:String, crossOrigin? : boolean);
	}

	export class MovieClip extends Sprite
	{
		//properties
	    	animationSpeed: number;
	    	currentFrame: number;
	    	loop: boolean;
	    	playing: boolean;
	    	textures: Texture[];

		//constructor
	    	constructor(textures: Texture[]);

		//methods
	    	gotoAndPlay(frameNumber: number): void;
	    	gotoAndStop(frameNumber: number): void;
	    	play(): void;
	    	stop(): void;
		
		//callbacks
	    	onComplete: () => void;
	}

	export class Point
	{
		//properties
	    	x: number;
	    	y: number;

		//constructor
	    	constructor(x: number, y: number);
		
		//methods
	    	clone(): Point;
	    	contains(x:number, y:number):boolean;
	}
	
	export class Polygon
	{
		//constructor
		constructor(points: Point[]);
		
		//methods
		clone(): Polygon;
		
	}

	export interface IRectangle
	{
	    	x: number;
	   		y: number;
	    	width: number;
	    	height: number;
	}

	export class Rectangle implements IRectangle
	{
		//properties
	    	x: number;
	    	y: number;
	    	width: number;
	    	height: number;

		//constructor
	    	constructor(x: number, y: number, width: number, height: number);
		
		//methods
	    	clone(): Rectangle;
	}

	export class RenderTexture extends Texture
	{
        	//constructor
	    	constructor(width: number, height: number);

        	//methods
	    	render(displayObject: DisplayObject, clear?: boolean): void;
	}
	
	export class Spine extends DisplayObjectContainer
	{	
		//properties -> both seems to be masked, see example 12
	    	state: any;
	    	stateData: any;


		//constructor
		constructor(url: String, crossorigin?: boolean);
		
		//methods
		load(): void;
		
		//callbacks
	    	onLoaded: () => void;
		
	}

	export class Sprite extends DisplayObjectContainer
	{
		//properties
	   	anchor: Point;
	    	blendMode: number;
	    	height: number;
	    	texture: Texture;
	    	width: number;

		//static methods
	    	static fromFrame(frameId: string): Sprite;
	    	static fromImage(imageId: string): Sprite;

		//constructor
	    	constructor(texture: Texture);
		
		//methods
	    	setTexture(texture: Texture): void;
	}

	export class SpriteSheetLoader extends EventTarget
	{
		//constructor
	    	constructor(url: string, crossorigins?: boolean);
		
		//methods
	    	load(): void;
	}
	
	export class Stage extends DisplayObjectContainer
	{
		//constructor
	    	constructor(backgroundColor?: number, interactive?: boolean);
	
		//methods
	    	getMousePosition(): Point;
	    	setBackgroundColor(backgroundColor: number): void;
		updateTransform(): void;
	}
	
	export class Text extends Sprite
	{
		//constructor
	    	constructor(text: string, style?: any);
		
		//methods
	    	setStyle(style: any, font?: string): void;
	    	setText(text: string):void; // seems to be hidden? See example 10 
	}

	export class Texture extends EventTarget
	{
		//properties
	    	baseTexture: BaseTexture;
	    	frame: Rectangle;

		//static methods
	    	static addTextureToCache(texture: Texture, id: string): void;
	    	static fromCanvas(canvas: HTMLCanvasElement): Texture;
	    	static fromImage(imageUrl: string, crossorigin?: boolean): Texture;
	    	static removeTextureFromCache(id: string): Texture;

		//constructor
	    	constructor(baseTexture: BaseTexture, frame?: Rectangle);
		
		//methods
		setFrame(frame: Rectangle): void;
		fromFrame(frameId: string): Texture;
	}
	
	export class TilingSprite extends DisplayObjectContainer
	{
		//properties
	    	tileScale: Point;
	    	tilePosition: Point;
		
		//constructor
	    	constructor(texture: Texture, width: number, height: number);
	}

	export class WebGLBatch
	{
		//methods
	    	init(sprite: Sprite): void;
	    	insertAfter(sprite: Sprite, previousSprite: Sprite): void;
	   	insertBefore(sprite: Sprite, nextSprite: Sprite): void;
	    	merge(batch: WebGLBatch): void;
	    	refresh(): void;
	    	remove(sprite: Sprite): void;
	    	render(): void;
	    	split(sprite: Sprite): WebGLBatch;
	    	update(): void;
	}

	export class WebGLRenderer implements IRenderer
	{
        	//properties
	    	view: HTMLCanvasElement;

		//constructor
	    	constructor(width: number, height: number, view?: HTMLCanvasElement, transparent?: boolean);
		
		//methods
	    	render(stage: Stage): void;
	    	resize(width: number, height: number): void;
	}

	export interface IRenderer
	{
		//properties
	    	view: HTMLCanvasElement;
		
		//methods
	    	render(stage: Stage): void;
	}


}

declare function requestAnimFrame( animate:()=>void );


