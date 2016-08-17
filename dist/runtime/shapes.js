define(["require", "exports", './data-unit', './canvs', './utils', './graphicswindow'], function (require, exports, data_unit_1, canvs_1, utils_1, GraphicsWindow) {
    'use strict';
    var impl = {
        addrectangle: function (w, h) {
            GraphicsWindow.impl.show.apply(this);
            var canvs = this.$graphicswindow.canvs;
            var width = w.as_num();
            var height = h.as_num();
            var brushcolor = utils_1.colorFromNumber(this.graphicswindow.brushcolor.as_num());
            var penwidth = this.graphicswindow.penwidth.as_num();
            var pencolor = utils_1.colorFromNumber(this.graphicswindow.pencolor.as_num());
            var sprite = new canvs_1.Sprite(width, height, function (ctx) {
                ctx.beginPath();
                ctx.fillStyle = brushcolor;
                ctx.strokeStyle = pencolor;
                ctx.lineWidth = penwidth;
                ctx.moveTo(0, 0);
                ctx.lineTo(width, 0);
                ctx.lineTo(width, height);
                ctx.lineTo(0, height);
                ctx.fill();
                ctx.stroke();
            });
            canvs.spritelayer.addSprite(sprite);
            return new data_unit_1.DataUnit(sprite, data_unit_1.DATATYPES.DT_SHAPE);
        },
        addellipse: function (w, h) {
            GraphicsWindow.impl.show.apply(this);
            var canvs = this.$graphicswindow.canvs;
            var width = w.as_num();
            var height = h.as_num();
            var brushcolor = utils_1.colorFromNumber(this.graphicswindow.brushcolor.as_num());
            var penwidth = this.graphicswindow.penwidth.as_num();
            var pencolor = utils_1.colorFromNumber(this.graphicswindow.pencolor.as_num());
            var sprite = new canvs_1.Sprite(width, height, function (ctx) {
                ctx.beginPath();
                ctx.fillStyle = brushcolor;
                ctx.strokeStyle = pencolor;
                ctx.lineWidth = penwidth;
                utils_1.makeEllipsePath(ctx, 0, 0, width, height);
                ctx.fill();
                ctx.stroke();
            });
            canvs.spritelayer.addSprite(sprite);
            return new data_unit_1.DataUnit(sprite, data_unit_1.DATATYPES.DT_SHAPE);
        },
        addtriangle: function (x1, y1, x2, y2, x3, y3) {
            GraphicsWindow.impl.show.apply(this);
            var canvs = this.$graphicswindow.canvs;
            var brushcolor = utils_1.colorFromNumber(this.graphicswindow.brushcolor.as_num());
            var penwidth = this.graphicswindow.penwidth.as_num();
            var pencolor = utils_1.colorFromNumber(this.graphicswindow.pencolor.as_num());
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
            var sprite = new canvs_1.Sprite(width, height, function (ctx) {
                ctx.beginPath();
                ctx.fillStyle = brushcolor;
                ctx.strokeStyle = pencolor;
                ctx.lineWidth = penwidth;
                ctx.moveTo(x1v, y1v);
                ctx.lineTo(x2v, y2v);
                ctx.lineTo(x3v, y3v);
                ctx.fill();
                ctx.stroke();
            });
            canvs.spritelayer.addSprite(sprite);
            return new data_unit_1.DataUnit(sprite, data_unit_1.DATATYPES.DT_SHAPE);
        },
        addline: function (x1, y1, x2, y2) {
            GraphicsWindow.impl.show.apply(this);
            var canvs = this.$graphicswindow.canvs;
            var penwidth = this.graphicswindow.penwidth.as_num();
            var pencolor = utils_1.colorFromNumber(this.graphicswindow.pencolor.as_num());
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
            var sprite = new canvs_1.Sprite(width, height, function (ctx) {
                ctx.beginPath();
                ctx.strokeStyle = pencolor;
                ctx.lineWidth = penwidth;
                ctx.moveTo(x1v, y1v);
                ctx.lineTo(x2v, y2v);
                ctx.fill();
                ctx.stroke();
            });
            canvs.spritelayer.addSprite(sprite);
            return new data_unit_1.DataUnit(sprite, data_unit_1.DATATYPES.DT_SHAPE);
        },
        addtext: function (t) {
            GraphicsWindow.impl.show.apply(this);
            var canvs = this.$graphicswindow.canvs;
            var fontSize = this.graphicswindow.fontsize.as_num();
            var fontString = fontSize + 'px ' + this.graphicswindow.fontname.as_string();
            if (this.graphicswindow.fontbold.as_bool()) {
                fontString = 'bold ' + fontString;
            }
            if (this.graphicswindow.fontitalic.as_bool()) {
                fontString = 'italic ' + fontString;
            }
            var brushcolor = utils_1.colorFromNumber(this.graphicswindow.brushcolor.as_num());
            var text = t.as_string();
            canvs.bglayer.ctx.font = fontString;
            var width = canvs.bglayer.ctx.measureText(text).width;
            var height = fontSize + 4;
            var sprite = new canvs_1.Sprite(width, height, function (ctx) {
                ctx.font = fontString;
                ctx.fillStyle = brushcolor;
                ctx.fillText(text, 0, 0);
            });
            canvs.spritelayer.addSprite(sprite);
            return new data_unit_1.DataUnit(sprite, data_unit_1.DATATYPES.DT_SHAPE);
        },
        addimage: function (image) {
            GraphicsWindow.impl.show.apply(this);
            if (image.type !== data_unit_1.DATATYPES.DT_IMAGE) {
                return new data_unit_1.DataUnit();
            }
            var canvs = this.$graphicswindow.canvs;
            var width = image.value.width;
            var height = image.value.height;
            var sprite = new canvs_1.Sprite(width, height, function (ctx) {
                ctx.drawImage(image.value, 0, 0);
            });
            canvs.spritelayer.addSprite(sprite);
            return new data_unit_1.DataUnit(sprite, data_unit_1.DATATYPES.DT_SHAPE);
        },
        settext: function (s, t) {
            if (s.type === data_unit_1.DATATYPES.DT_SHAPE) {
                // TODO: what about font changes?
                var newSprite = impl.addtext(t);
                s.value.destroy();
                s.value = newSprite;
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
            var tween = new canvs_1.Tween(s.value, x.as_num(), y.as_num(), duration.as_num());
            if (s.value.layer) {
                s.value.layer.addTween(tween);
            }
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