define(["require", "exports", './data-unit'], function (require, exports, data_unit_1) {
    'use strict';
    var impl = {
        addrectangle: function (w, h) {
            var phaserGame = this.$graphicswindow.phaserGame;
            var width = w.as_num();
            var height = h.as_num();
            var brushcolor = '#' + ('000000' + this.graphicswindow.brushcolor.value.toString(16)).slice(-6);
            var penwidth = this.graphicswindow.penwidth.as_num();
            var pencolor = '#' + ('000000' + this.graphicswindow.pencolor.value.toString(16)).slice(-6);
            var bmd = phaserGame.add.bitmapData(width, height);
            bmd.ctx.beginPath();
            bmd.ctx.fillStyle = brushcolor;
            bmd.ctx.strokeStyle = pencolor;
            bmd.ctx.lineWidth = penwidth;
            bmd.ctx.moveTo(0, 0);
            bmd.ctx.lineTo(width, 0);
            bmd.ctx.lineTo(width, height);
            bmd.ctx.lineTo(0, height);
            bmd.ctx.fill();
            bmd.ctx.stroke();
            var sprite = phaserGame.add.sprite(0, 0, bmd);
            return new data_unit_1.DataUnit(sprite, data_unit_1.DATATYPES.DT_SHAPE);
        },
        addellipse: function (w, h) {
            var phaserGame = this.$graphicswindow.phaserGame;
            var width = w.as_num();
            var height = h.as_num();
            var graphics = phaserGame.add.graphics(0, 0);
            var brushcolor = this.graphicswindow.brushcolor.as_num();
            var penwidth = this.graphicswindow.penwidth.as_num();
            var pencolor = this.graphicswindow.pencolor.as_num();
            graphics.beginFill(brushcolor);
            graphics.lineStyle(penwidth, pencolor, 1);
            graphics.drawEllipse(0, 0, width, height);
            graphics.endFill();
            var sprite = phaserGame.add.sprite(w, h, graphics.generateTexture());
            graphics.destroy();
            return new data_unit_1.DataUnit(sprite, data_unit_1.DATATYPES.DT_SHAPE);
        },
        addtriangle: function (x1, y1, x2, y2, x3, y3) {
            var phaserGame = this.$graphicswindow.phaserGame;
            var brushcolor = '#' + ('000000' + this.graphicswindow.brushcolor.value.toString(16)).slice(-6);
            var penwidth = this.graphicswindow.penwidth.as_num();
            var pencolor = '#' + ('000000' + this.graphicswindow.pencolor.value.toString(16)).slice(-6);
            var x1v = x1.as_num();
            var x2v = x2.as_num();
            var x3v = x3.as_num();
            var y1v = y1.as_num();
            var y2v = y2.as_num();
            var y3v = y3.as_num();
            var xmin = Math.min(x1v, x2v, x3v);
            var xmax = Math.max(x1v, x2v, x3v);
            var ymin = Math.min(y1v, y2v, y3v);
            var ymax = Math.max(y1v, y2v, y3v);
            var width = xmax - xmin;
            var height = ymax - ymin;
            var bmd = phaserGame.add.bitmapData(width, height);
            bmd.ctx.beginPath();
            bmd.ctx.fillStyle = brushcolor;
            bmd.ctx.strokeStyle = pencolor;
            bmd.ctx.lineWidth = penwidth;
            bmd.ctx.moveTo(x1v, y1v);
            bmd.ctx.lineTo(x2v, y2v);
            bmd.ctx.lineTo(x3v, y3v);
            bmd.ctx.fill();
            bmd.ctx.stroke();
            var sprite = phaserGame.add.sprite(0, 0, bmd);
            return new data_unit_1.DataUnit(sprite, data_unit_1.DATATYPES.DT_SHAPE);
        },
        addline: function (x1, y1, x2, y2) {
            var phaserGame = this.$graphicswindow.phaserGame;
            var penwidth = this.graphicswindow.penwidth.as_num();
            var pencolor = '#' + ('000000' + this.graphicswindow.pencolor.value.toString(16)).slice(-6);
            var x1v = x1.as_num();
            var x2v = x2.as_num();
            var y1v = y1.as_num();
            var y2v = y2.as_num();
            var xmin = Math.min(x1v, x2v);
            var xmax = Math.max(x1v, x2v);
            var ymin = Math.min(y1v, y2v);
            var ymax = Math.max(y1v, y2v);
            var width = xmax - xmin;
            var height = ymax - ymin;
            var bmd = phaserGame.add.bitmapData(width, height);
            bmd.ctx.beginPath();
            bmd.ctx.strokeStyle = pencolor;
            bmd.ctx.lineWidth = penwidth;
            bmd.ctx.moveTo(x1v, y1v);
            bmd.ctx.lineTo(x2v, y2v);
            bmd.ctx.stroke();
            var sprite = phaserGame.add.sprite(0, 0, bmd);
            return new data_unit_1.DataUnit(sprite, data_unit_1.DATATYPES.DT_SHAPE);
        },
        addtext: function (t) {
            var phaserGame = this.$graphicswindow.phaserGame;
            var brushcolor = '#' + ('000000' + this.graphicswindow.brushcolor.value.toString(16)).slice(-6);
            var txtOptions = {
                font: this.graphicswindow.fontname.as_string(),
                fontSize: this.graphicswindow.fontsize.as_num() + 'px',
                fill: '#' + brushcolor,
            };
            if (this.graphicswindow.fontitalic.as_bool()) {
                txtOptions.fontStyle = 'italic';
            }
            var phaserText = phaserGame.add.text(0, 0, t.as_string(), txtOptions);
            return new data_unit_1.DataUnit(phaserText, data_unit_1.DATATYPES.DT_SHAPE);
        },
        addimage: function (imageName) {
            var internalName = this.$imagelist.images[imageName.as_string()];
            if (!internalName) {
                return new data_unit_1.DataUnit();
            }
            var phaserGame = this.$graphicswindow.phaserGame;
            var image = phaserGame.add.sprite(0, 0, internalName.value);
            return new data_unit_1.DataUnit(image, data_unit_1.DATATYPES.DT_SHAPE);
        },
        settext: function (s, t) {
            if (s.type === data_unit_1.DATATYPES.DT_SHAPE) {
                s.value.text = t.as_string();
            }
        },
        move: function (s, x, y) {
            if (s.type === data_unit_1.DATATYPES.DT_SHAPE) {
                s.value.x = x.as_num();
                s.value.y = y.as_num();
            }
        },
        remove: function (s) {
            if (s.type === data_unit_1.DATATYPES.DT_SHAPE) {
                s.value.destroy();
            }
        },
        getleft: function (s) {
            var x = 0;
            if (s.type === data_unit_1.DATATYPES.DT_SHAPE) {
                x = s.value.x;
            }
            return new data_unit_1.DataUnit(x, data_unit_1.DATATYPES.DT_NUMBER);
        },
        gettop: function (s) {
            var y = 0;
            if (s.type === data_unit_1.DATATYPES.DT_SHAPE) {
                y = s.value.y;
            }
            return new data_unit_1.DataUnit(y, data_unit_1.DATATYPES.DT_NUMBER);
        },
        rotate: function (s, angle) {
            if (s.type !== data_unit_1.DATATYPES.DT_SHAPE) {
                return;
            }
            s.value.rotation = angle.as_num() * Math.PI / 180.0;
        },
        zoom: function (s, scaleX, scaleY) {
            if (s.type !== data_unit_1.DATATYPES.DT_SHAPE) {
                return;
            }
            s.value.scale = { x: scaleX.as_num(), y: scaleY.as_num() };
        },
        animate: function (s, x, y, duration) {
            if (s.type !== data_unit_1.DATATYPES.DT_SHAPE) {
                return;
            }
            var phaserGame = this.$graphicswindow.phaserGame;
            var tween = phaserGame.add.tween(s.value);
            tween.to({ x: x.as_num(), y: y.as_num() }, duration.as_num(), Phaser.Easing.Linear.None, true);
            // tween.onComplete.addOnce(() => {
            // }, this);
        },
        getopacity: function (s) {
            var opacity = 0;
            if (s.type === data_unit_1.DATATYPES.DT_SHAPE) {
                opacity = s.value.alpha;
            }
            return new data_unit_1.DataUnit(opacity, data_unit_1.DATATYPES.DT_NUMBER);
        },
        setopacity: function (s, level) {
            if (s.type !== data_unit_1.DATATYPES.DT_SHAPE) {
                return;
            }
            s.value.alpha = level.as_num();
        },
        hideshape: function (s) {
            if (s.type !== data_unit_1.DATATYPES.DT_SHAPE) {
                return;
            }
            s.value.visible = false;
        },
        showshape: function (s) {
            if (s.type !== data_unit_1.DATATYPES.DT_SHAPE) {
                return;
            }
            s.value.visible = true;
        }
    };
    exports.impl = impl;
    function api(env) {
        return {
            get addrectangle() { return new data_unit_1.DataUnit('shapes.addrectangle', data_unit_1.DATATYPES.DT_FN); },
            get addtriangle() { return new data_unit_1.DataUnit('shapes.addtriangle', data_unit_1.DATATYPES.DT_FN); },
            get move() { return new data_unit_1.DataUnit('shapes.move', data_unit_1.DATATYPES.DT_FN); },
            get remove() { return new data_unit_1.DataUnit('shapes.remove', data_unit_1.DATATYPES.DT_FN); },
            get getleft() { return new data_unit_1.DataUnit('shapes.getleft', data_unit_1.DATATYPES.DT_FN); },
            get gettop() { return new data_unit_1.DataUnit('shapes.gettop', data_unit_1.DATATYPES.DT_FN); },
            get rotate() { return new data_unit_1.DataUnit('shapes.rotate', data_unit_1.DATATYPES.DT_FN); },
            get zoom() { return new data_unit_1.DataUnit('shapes.zoom', data_unit_1.DATATYPES.DT_FN); },
            get animate() { return new data_unit_1.DataUnit('shapes.animate', data_unit_1.DATATYPES.DT_FN); },
            get getopacity() { return new data_unit_1.DataUnit('shapes.getopacity', data_unit_1.DATATYPES.DT_FN); },
            get setopacity() { return new data_unit_1.DataUnit('shapes.setopacity', data_unit_1.DATATYPES.DT_FN); },
            get hideshape() { return new data_unit_1.DataUnit('shapes.hideshape', data_unit_1.DATATYPES.DT_FN); },
            get showshape() { return new data_unit_1.DataUnit('shapes.showshape', data_unit_1.DATATYPES.DT_FN); }
        };
    }
    exports.api = api;
});
//# sourceMappingURL=shapes.js.map