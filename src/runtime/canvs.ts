
class Canvs {
  bglayer: CanvsLayer
  spritelayer: SpriteLayer
  rendering: boolean
  boundRender: (number) => void

  constructor(width: number, height: number) {
    this.bglayer = new CanvsLayer(width, height);
    this.spritelayer = new SpriteLayer(width, height);
    this.rendering = true;
    this.boundRender = this.render.bind(this);

    requestAnimationFrame(this.boundRender);
  }

  get width(): number {
    return this.bglayer.canvas.width;
  }
  set width(v: number) {
    this.bglayer.canvas.width = v;
    this.spritelayer.canvas.width = v;
  }

  get height(): number {
    return this.bglayer.canvas.height;
  }
  set height(v: number) {
    this.bglayer.canvas.height = v;
    this.spritelayer.canvas.height = v;
  }

  render(time: number) {
    if (this.rendering) {
      this.spritelayer.update(time);
      requestAnimationFrame(this.boundRender);
    }
  }
}

class CanvsLayer {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D

  constructor(width: number, height: number) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = width;
    this.canvas.height = height;
    this.ctx = this.canvas.getContext('2d');
  }
}

class SpriteLayer extends CanvsLayer {
  sprites: Sprite[]
  tweens: Tween[]
  valid: boolean
  lastUpdate: number

  constructor(width: number, height: number) {
    super(width, height);
    this.sprites = [];
    this.tweens = [];
    this.valid = true;
    this.lastUpdate = 0;
  }

  addSprite(sprite: Sprite) {
    sprite.layer = this;
    this.sprites.push(sprite);
  }

  removeSprite(sprite: Sprite) {
    const index = this.sprites.indexOf(sprite);
    if (index !== -1) {
      sprite.layer = null;
      this.sprites.splice(index, 1);
    }
  }

  removeAllSprites() {
    for (var i=0; i < this.sprites.length; i++) {
      const sprite = this.sprites[i];
      sprite.layer = null;
      sprite.destroy();
    }

    this.sprites = [];
  }

  addTween(tween: Tween) {
    this.tweens.push(tween);
    this.invalidate();
  }

  invalidate() {
    this.valid = false;
  }

  update(now) {
    if (!this.valid) {
      const delta = this.lastUpdate - now;

      for (var i=0; i < this.tweens.length; i++) {
        const t = this.tweens[i];
        if (t.update(delta)) {
          this.tweens.splice(i, 1);
          i--; // since we remove one, need to do the next
        }
      }

      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (var i=0; i < this.sprites.length; i++) {
        const sprite = this.sprites[i];
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
}

class Sprite extends CanvsLayer {
  layer: SpriteLayer

  private _x: number
  private _y: number
  private _visible: boolean
  private _rotation: number
  private _scale: number

  constructor(width: number, height: number, renderer: (CanvasRenderingContext2D) => void) {
    super(width, height);

    renderer(this.ctx);

    this._x = 0;
    this._y = 0;
    this._visible = true;
    this._rotation = 0;
    this._scale = 1;
  }

  get x(): number {
    return this._x;
  }
  set x(v: number) {
    if (this._x === v) {
      return;
    }

    this._x = v;
    if (this.layer) {
      this.layer.invalidate();
    }
  }

  get y(): number {
    return this._y;
  }
  set y(v: number) {
    if (this._y === v) {
      return;
    }

    this._y = v;
    if (this.layer) {
      this.layer.invalidate();
    }
  }

  get alpha(): number {
    return this.ctx.globalAlpha;
  }
  set alpha(v: number) {
    if (this.ctx.globalAlpha === v) {
      return;
    }

    this.ctx.globalAlpha = v;
    if (this.layer) {
      this.layer.invalidate();
    }
  }

  get visible(): boolean {
    return this._visible;
  }
  set visible(v: boolean) {
    if (this._visible === v) {
      return;
    }

    this._visible = v;
    if (this.layer) {
      this.layer.invalidate();
    }
  }

  get rotation(): number {
    return this._rotation;
  }
  set rotation(v: number) {
    if (this._rotation === v) {
      return;
    }

    this._rotation = v;
    if (this.layer) {
      this.layer.invalidate();
    }
  }

  get scale(): number {
    return this._scale;
  }
  set scale(v: number) {
    if (this._scale === v) {
      return;
    }

    this._scale = v;
    if (this.layer) {
      this.layer.invalidate();
    }
  }

  destroy() {
    if (this.layer) {
      this.layer.removeSprite(this);
    }
    this.ctx = null;
    this.canvas = null;
  }
}

class Tween {
  xPerMs: number // in px per ms
  yPerMs: number // in px per ms

  constructor(public sprite: Sprite, public toX: number, public toY: number, timespan: number) {
    this.xPerMs = (toX - sprite.x) / timespan;
    this.yPerMs = (toY - sprite.y) / timespan;
  }

  update(delta) {
    const xMovement = Math.round(this.xPerMs * delta);
    const yMovement = Math.round(this.xPerMs * delta);

    const xDist = this.toX - this.sprite.x;
    const yDist = this.toY - this.sprite.y;

    const newX = xDist <= xMovement ? this.toX : (this.sprite.x + xMovement);
    const newY = yDist <= yMovement ? this.toY : (this.sprite.y + yMovement);

    this.sprite.x = newX;
    this.sprite.y = newY;

    return newX === this.toX && newY === this.toY;
  }
}

export {Canvs, Sprite, Tween};
