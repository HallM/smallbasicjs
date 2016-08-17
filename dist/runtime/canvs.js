var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var Canvs = (function () {
        function Canvs(bglayerid, spritelayerid) {
            this.bglayer = new OnScreenLayer(bglayerid);
            this.spritelayer = new SpriteLayer(spritelayerid);
            this.rendering = true;
            this.boundRender = this.render.bind(this);
            requestAnimationFrame(this.boundRender);
        }
        Object.defineProperty(Canvs.prototype, "width", {
            get: function () {
                return this.bglayer.canvas.width;
            },
            set: function (v) {
                this.bglayer.canvas.width = v;
                this.spritelayer.canvas.width = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Canvs.prototype, "height", {
            get: function () {
                return this.bglayer.canvas.height;
            },
            set: function (v) {
                this.bglayer.canvas.height = v;
                this.spritelayer.canvas.height = v;
            },
            enumerable: true,
            configurable: true
        });
        Canvs.prototype.render = function (time) {
            if (this.rendering) {
                this.spritelayer.update(time);
                requestAnimationFrame(this.boundRender);
            }
        };
        return Canvs;
    }());
    exports.Canvs = Canvs;
    var CanvsLayer = (function () {
        function CanvsLayer(canvas, ctx) {
            this.canvas = canvas;
            this.ctx = ctx;
        }
        return CanvsLayer;
    }());
    var OnScreenLayer = (function (_super) {
        __extends(OnScreenLayer, _super);
        function OnScreenLayer(canvasid) {
            var canvas = document.getElementById(canvasid);
            var ctx = canvas.getContext('2d');
            _super.call(this, canvas, ctx);
        }
        return OnScreenLayer;
    }(CanvsLayer));
    var OffScreenLayer = (function (_super) {
        __extends(OffScreenLayer, _super);
        function OffScreenLayer(width, height) {
            var canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            var ctx = canvas.getContext('2d');
            _super.call(this, canvas, ctx);
        }
        return OffScreenLayer;
    }(CanvsLayer));
    var SpriteLayer = (function (_super) {
        __extends(SpriteLayer, _super);
        function SpriteLayer(spritelayerid) {
            _super.call(this, spritelayerid);
            this.sprites = [];
            this.tweens = [];
            this.valid = true;
            this.lastUpdate = 0;
        }
        SpriteLayer.prototype.addSprite = function (sprite) {
            sprite.layer = this;
            this.sprites.push(sprite);
        };
        SpriteLayer.prototype.removeSprite = function (sprite) {
            var index = this.sprites.indexOf(sprite);
            if (index !== -1) {
                sprite.layer = null;
                this.sprites.splice(index, 1);
            }
        };
        SpriteLayer.prototype.removeAllSprites = function () {
            for (var i = 0; i < this.sprites.length; i++) {
                var sprite = this.sprites[i];
                sprite.layer = null;
                sprite.destroy();
            }
            this.sprites = [];
        };
        SpriteLayer.prototype.addTween = function (tween) {
            this.tweens.push(tween);
            this.invalidate();
        };
        SpriteLayer.prototype.invalidate = function () {
            this.valid = false;
        };
        SpriteLayer.prototype.update = function (now) {
            if (!this.valid) {
                var delta = this.lastUpdate - now;
                for (var i = 0; i < this.tweens.length; i++) {
                    var t = this.tweens[i];
                    if (t.update(delta)) {
                        this.tweens.splice(i, 1);
                        i--; // since we remove one, need to do the next
                    }
                }
                var ctx = this.ctx;
                ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                for (var i = 0; i < this.sprites.length; i++) {
                    var sprite = this.sprites[i];
                    if (sprite.visible) {
                        if (sprite.rotation !== 0 || sprite.scale !== 1) {
                            ctx.save();
                            ctx.rotate(sprite.rotation);
                            ctx.scale(sprite.scale, sprite.scale);
                        }
                        ctx.drawImage(sprite.canvas, sprite.x, sprite.y);
                        if (sprite.rotation !== 0 || sprite.scale !== 1) {
                            ctx.restore();
                        }
                    }
                }
                this.valid = this.tweens.length === 0;
            }
            this.lastUpdate = now;
        };
        ;
        return SpriteLayer;
    }(OnScreenLayer));
    var Sprite = (function (_super) {
        __extends(Sprite, _super);
        function Sprite(width, height, renderer) {
            _super.call(this, width, height);
            renderer(this.ctx);
            this._x = 0;
            this._y = 0;
            this._visible = true;
            this._rotation = 0;
            this._scale = 1;
        }
        Object.defineProperty(Sprite.prototype, "x", {
            get: function () {
                return this._x;
            },
            set: function (v) {
                if (this._x === v) {
                    return;
                }
                this._x = v;
                if (this.layer) {
                    this.layer.invalidate();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Sprite.prototype, "y", {
            get: function () {
                return this._y;
            },
            set: function (v) {
                if (this._y === v) {
                    return;
                }
                this._y = v;
                if (this.layer) {
                    this.layer.invalidate();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Sprite.prototype, "alpha", {
            get: function () {
                return this.ctx.globalAlpha;
            },
            set: function (v) {
                if (this.ctx.globalAlpha === v) {
                    return;
                }
                this.ctx.globalAlpha = v;
                if (this.layer) {
                    this.layer.invalidate();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Sprite.prototype, "visible", {
            get: function () {
                return this._visible;
            },
            set: function (v) {
                if (this._visible === v) {
                    return;
                }
                this._visible = v;
                if (this.layer) {
                    this.layer.invalidate();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Sprite.prototype, "rotation", {
            get: function () {
                return this._rotation;
            },
            set: function (v) {
                if (this._rotation === v) {
                    return;
                }
                this._rotation = v;
                if (this.layer) {
                    this.layer.invalidate();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Sprite.prototype, "scale", {
            get: function () {
                return this._scale;
            },
            set: function (v) {
                if (this._scale === v) {
                    return;
                }
                this._scale = v;
                if (this.layer) {
                    this.layer.invalidate();
                }
            },
            enumerable: true,
            configurable: true
        });
        Sprite.prototype.destroy = function () {
            if (this.layer) {
                this.layer.removeSprite(this);
            }
            this.ctx = null;
            this.canvas = null;
        };
        return Sprite;
    }(OffScreenLayer));
    exports.Sprite = Sprite;
    var Tween = (function () {
        function Tween(sprite, toX, toY, timespan) {
            this.sprite = sprite;
            this.toX = toX;
            this.toY = toY;
            this.xPerMs = (toX - sprite.x) / timespan;
            this.yPerMs = (toY - sprite.y) / timespan;
        }
        Tween.prototype.update = function (delta) {
            var xMovement = Math.round(this.xPerMs * delta);
            var yMovement = Math.round(this.xPerMs * delta);
            var xDist = this.toX - this.sprite.x;
            var yDist = this.toY - this.sprite.y;
            var newX = xDist <= xMovement ? this.toX : (this.sprite.x + xMovement);
            var newY = yDist <= yMovement ? this.toY : (this.sprite.y + yMovement);
            this.sprite.x = newX;
            this.sprite.y = newY;
            return newX === this.toX && newY === this.toY;
        };
        return Tween;
    }());
    exports.Tween = Tween;
});
//# sourceMappingURL=canvs.js.map