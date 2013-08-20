///<reference path="../PIXI.d.ts"/>
var PixiTest;
(function (PixiTest) {
    var Game = (function () {
        function Game() {
            this.texture = PIXI.Texture.fromImage("../../examples/example 7 - Transparent Background/bunny.png");
            // create an new instance of a pixi stage
            this.stage = new PIXI.Stage(0x97c56e, true);

            // create a renderer instance
            this.renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);

            // add the renderer view element to the DOM
            document.body.appendChild(this.renderer.view);

            this.renderer.view.style.position = "absolute";
            this.renderer.view.style.top = "0px";
            this.renderer.view.style.left = "0px";

            requestAnimationFrame(this.animate.bind(this));

            for (var i = 0; i < 10; i++) {
                this.createBunny(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
            }
        }
        Game.prototype.createBunny = function (x, y) {
            // create our little bunny friend..
            var bunny = new PIXI.Sprite(this.texture);

            //  bunny.width = 300;
            // enable the bunny to be interactive.. this will allow it to respond to mouse and touch events
            bunny.interactive = true;

            // this button mode will mean the hand cursor appears when you rollover the bunny with your mouse
            bunny.buttonMode = true;

            // center the bunnys anchor point
            bunny.anchor.x = 0.5;
            bunny.anchor.y = 0.5;

            // make it a bit bigger, so its easier to touch
            bunny.scale.x = bunny.scale.y = 3;

            // use the mousedown and touchstart
            bunny.mousedown = bunny.touchstart = function (data) {
                // store a refference to the data
                // The reason for this is because of multitouch
                // we want to track the movement of this particular touch
                this.data = data;
                this.alpha = 0.9;
                this.dragging = true;
            };

            // set the events for when the mouse is released or a touch is released
            bunny.mouseup = bunny.mouseupoutside = bunny.touchend = bunny.touchendoutside = function (data) {
                this.alpha = 1;
                this.dragging = false;

                // set the interaction data to null
                this.data = null;
            };

            // set the callbacks for when the mouse or a touch moves
            bunny.mousemove = bunny.touchmove = function (data) {
                if (this.dragging) {
                    // need to get parent coords..
                    var newPosition = this.data.getLocalPosition(this.parent);
                    this.position.x = newPosition.x;
                    this.position.y = newPosition.y;
                }
            };

            // move the sprite to its designated position
            bunny.position.x = x;
            bunny.position.y = y;

            // add it to the stage
            this.stage.addChild(bunny);
        };

        Game.prototype.animate = function () {
            requestAnimationFrame(this.animate.bind(this));

            // render the stage
            this.renderer.render(this.stage);
        };
        return Game;
    })();
    PixiTest.Game = Game;
})(PixiTest || (PixiTest = {}));
