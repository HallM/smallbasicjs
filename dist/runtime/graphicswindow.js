define(["require", "exports", './data-unit'], function (require, exports, data_unit_1) {
    'use strict';
    var stringToColorTable = {
        indianred: 0xcd5c5c,
        lightcoral: 0xf08080,
        salmon: 0xfa8072,
        darksalmon: 0xe9967a,
        lightsalmon: 0xffa07a,
        crimson: 0xdc143c,
        red: 0xff0000,
        firebrick: 0xb22222,
        darkred: 0x8b0000,
        pink: 0xffc0cb,
        lightpink: 0xffb6c1,
        hotpink: 0xff69b4,
        deeppink: 0xff1493,
        mediumvioletred: 0xc71585,
        palevioletred: 0xdb7093,
        coral: 0xff7f50,
        tomato: 0xff6347,
        orangered: 0xff4500,
        darkorange: 0xff8c00,
        orange: 0xffa500,
        gold: 0xffd700,
        yellow: 0xffff00,
        lightyellow: 0xffffe0,
        lemonchiffon: 0xfffacd,
        lightgoldenrodyellow: 0xfafad2,
        papayawhip: 0xffefd5,
        moccasin: 0xffe4b5,
        peachpuff: 0xffdab9,
        palegoldenrod: 0xeee8aa,
        khaki: 0xf0e68c,
        darkkhaki: 0xbdb76b,
        lavender: 0xe6e6fa,
        thistle: 0xd8bfd8,
        plum: 0xdda0dd,
        violet: 0xee82ee,
        orchid: 0xda70d6,
        fuchsia: 0xff00ff,
        magenta: 0xff00ff,
        mediumorchid: 0xba55d3,
        mediumpurple: 0x9370db,
        blueviolet: 0x8a2be2,
        darkviolet: 0x9400d3,
        darkorchid: 0x9932cc,
        darkmagenta: 0x8b008b,
        purple: 0x800080,
        indigo: 0x4b0082,
        slateblue: 0x6a5acd,
        darkslateblue: 0x483d8b,
        greenyellow: 0xadff2f,
        chartreuse: 0x7fff00,
        lawngreen: 0x7cfc00,
        lime: 0x00ff00,
        limegreen: 0x32cd32,
        palegreen: 0x98fb98,
        lightgreen: 0x90ee90,
        mediumspringgreen: 0x00fa9a,
        springgreen: 0x00ff7f,
        mediumseagreen: 0x3cb371,
        seagreen: 0x2e8b57,
        forestgreen: 0x228b22,
        green: 0x008000,
        darkgreen: 0x006400,
        yellowgreen: 0x9acd32,
        olivedrab: 0x6b8e23,
        olive: 0x808000,
        darkolivegreen: 0x556b2f,
        mediumaquamarine: 0x66cdaa,
        darkseagreen: 0x8fbc8f,
        lightseagreen: 0x20b2aa,
        darkcyan: 0x008b8b,
        teal: 0x008080,
        aqua: 0x00ffff,
        cyan: 0x00ffff,
        lightcyan: 0xe0ffff,
        paleturquoise: 0xafeeee,
        aquamarine: 0x7fffd4,
        turquoise: 0x40e0d0,
        mediumturquoise: 0x48d1cc,
        darkturquoise: 0x00ced1,
        cadetblue: 0x5f9ea0,
        steelblue: 0x4682b4,
        lightsteelblue: 0xb0c4de,
        powderblue: 0xb0e0e6,
        lightblue: 0xadd8e6,
        skyblue: 0x87ceeb,
        lightskyblue: 0x87cefa,
        deepskyblue: 0x00bfff,
        dodgerblue: 0x1e90ff,
        cornflowerblue: 0x6495ed,
        mediumslateblue: 0x7b68ee,
        royalblue: 0x4169e1,
        blue: 0x0000ff,
        mediumblue: 0x0000cd,
        darkblue: 0x00008b,
        navy: 0x000080,
        midnightblue: 0x191970,
        cornsilk: 0xfff8dc,
        blanchedalmond: 0xffebcd,
        bisque: 0xffe4c4,
        navajowhite: 0xffdead,
        wheat: 0xf5deb3,
        burlywood: 0xdeb887,
        tan: 0xd2b48c,
        rosybrown: 0xbc8f8f,
        sandybrown: 0xf4a460,
        goldenrod: 0xdaa520,
        darkgoldenrod: 0xb8860b,
        peru: 0xcd853f,
        chocolate: 0xd2691e,
        saddlebrown: 0x8b4513,
        sienna: 0xa0522d,
        brown: 0xa52a2a,
        maroon: 0x800000,
        white: 0xffffff,
        snow: 0xfffafa,
        honeydew: 0xf0fff0,
        mintcream: 0xf5fffa,
        azure: 0xf0ffff,
        aliceblue: 0xf0f8ff,
        ghostwhite: 0xf8f8ff,
        whitesmoke: 0xf5f5f5,
        seashell: 0xfff5ee,
        beige: 0xf5f5dc,
        oldlace: 0xfdf5e6,
        floralwhite: 0xfffaf0,
        ivory: 0xfffff0,
        antiquewhite: 0xfaebd7,
        linen: 0xfaf0e6,
        lavenderblush: 0xfff0f5,
        mistyrose: 0xffe4e1,
        gainsboro: 0xdcdcdc,
        lightgray: 0xd3d3d3,
        silver: 0xc0c0c0,
        darkgray: 0xa9a9a9,
        gray: 0x808080,
        dimgray: 0x696969,
        lightslategray: 0x778899,
        slategray: 0x708090,
        darkslategray: 0x2f4f4f,
        black: 0x000000
    };
    var internalColorNames = Object.keys(stringToColorTable);
    function colorToRgb(color) {
        if (color.type === data_unit_1.DATATYPES.DT_NUMBER) {
            // don't change numbers
            return;
        }
        // translate anything into a number
        if (color.type !== data_unit_1.DATATYPES.DT_STRING) {
            color.value = 0x000000;
        }
        else {
            color.value = stringToColorTable[color.as_string().toLowerCase()] || 0x000000;
        }
        color.type = data_unit_1.DATATYPES.DT_NUMBER;
    }
    var impl = {
        getcolorfromrgb: function (r, g, b) {
            var red = r.as_num() << 16;
            var green = g.as_num() << 8;
            var blue = b.as_num();
            var rgb = red | green | blue;
            return new data_unit_1.DataUnit(rgb, data_unit_1.DATATYPES.DT_NUMBER);
        },
        clear: function () {
            var phaserGraphics = this.$graphicswindow.phaserGraphics;
            if (phaserGraphics) {
                phaserGraphics.clear();
                // TODO: do we clear out the shapes too?
                var textSpawns = this.$graphicswindow.textSpawns;
                for (var prop in textSpawns) {
                    textSpawns[prop].destroy();
                }
                this.$graphicswindow.textSpawns = {};
                var width = this.graphicswindow.width.as_num();
                var height = this.graphicswindow.height.as_num();
                var fillColor = this.graphicswindow.backgroundcolor.as_num();
                phaserGraphics.beginFill(fillColor);
                phaserGraphics.drawRect(0, 0, width, height);
                phaserGraphics.endFill();
            }
        },
        show: function () {
            var env = this;
            var phaserGame = env.$graphicswindow.phaserGame;
            if (phaserGame) {
                phaserGame.destroy();
                env.$graphicswindow.phaserGame = null;
            }
            var width = this.graphicswindow.width.as_num();
            var height = this.graphicswindow.height.as_num();
            return new Promise(function (resolve) {
                env.$graphicswindow.phaserGame = new Phaser.Game(width, height, Phaser.CANVAS, 'smallbasicjs-graphicswindow', {
                    create: phaserCreateFactory(resolve).bind(env)
                });
            });
        },
        hide: function () {
            var env = this;
            var phaserGame = env.$graphicswindow.phaserGame;
            if (phaserGame) {
                phaserGame.destroy();
                env.$graphicswindow.phaserGame = null;
            }
        },
        showmessage: function (text, title) {
            return new Promise(function (resolve) {
                swal({
                    title: title.as_string(),
                    text: text.as_string()
                }).then(function () {
                    resolve(new data_unit_1.DataUnit());
                });
            });
        },
        fillrectangle: function (x, y, w, h) {
            var phaserGraphics = this.$graphicswindow.phaserGraphics;
            if (!phaserGraphics) {
                return;
            }
            var fillColor = this.graphicswindow.brushcolor.as_num();
            phaserGraphics.beginFill(fillColor);
            phaserGraphics.drawRect(x.as_num(), y.as_num(), w.as_num(), h.as_num());
            phaserGraphics.endFill();
        },
        drawrectangle: function (x, y, w, h) {
            var phaserGraphics = this.$graphicswindow.phaserGraphics;
            if (!phaserGraphics) {
                return;
            }
            var strokeColor = this.graphicswindow.pencolor.as_num();
            var strokeWidth = this.graphicswindow.penwidth.as_num();
            phaserGraphics.lineStyle(strokeWidth, strokeColor, 1);
            phaserGraphics.drawRect(x.as_num(), y.as_num(), w.as_num(), h.as_num());
        },
        drawline: function (x1, y1, x2, y2) {
            var phaserGraphics = this.$graphicswindow.phaserGraphics;
            if (!phaserGraphics) {
                return;
            }
            var strokeColor = this.graphicswindow.pencolor.as_num();
            var strokeWidth = this.graphicswindow.penwidth.as_num();
            phaserGraphics.lineStyle(strokeWidth, strokeColor, 1);
            phaserGraphics.moveTo(x1.as_num(), y1.as_num());
            phaserGraphics.lineTo(x2.as_num(), y2.as_num());
        },
        drawtext: function (x, y, t) {
            var phaserGame = this.$graphicswindow.phaserGame;
            var textSpawns = this.$graphicswindow.textSpawns;
            if (!phaserGame) {
                return;
            }
            var xPos = x.as_num();
            var yPos = y.as_num();
            var spawnLoc = xPos + ':' + yPos;
            if (textSpawns[spawnLoc]) {
                textSpawns[spawnLoc].text = t.as_string();
                textSpawns[spawnLoc].wordWrap = false;
                return;
            }
            var brushcolor = '#' + ('000000' + this.graphicswindow.brushcolor.value.toString(16)).slice(-6);
            var txtOptions = {
                font: this.graphicswindow.fontname.as_string(),
                fontSize: this.graphicswindow.fontsize.as_num() + 'px',
                fill: '#' + brushcolor,
            };
            if (this.graphicswindow.fontitalic.as_bool()) {
                txtOptions.fontStyle = 'italic';
            }
            if (this.graphicswindow.fontbold.as_bool()) {
                txtOptions.fontWeight = 'bold';
            }
            var phaserText = phaserGame.add.text(xPos, yPos, t.as_string(), txtOptions);
            textSpawns[spawnLoc] = phaserText;
        },
        drawboundtext: function (x, y, w, t) {
            var phaserGame = this.$graphicswindow.phaserGame;
            var textSpawns = this.$graphicswindow.textSpawns;
            if (!phaserGame) {
                return;
            }
            var xPos = x.as_num();
            var yPos = y.as_num();
            var spawnLoc = xPos + ':' + yPos;
            var width = w.as_num();
            if (textSpawns[spawnLoc]) {
                textSpawns[spawnLoc].text = t.as_string();
                textSpawns[spawnLoc].wordWrap = true;
                textSpawns[spawnLoc].wordWrapWidth = width;
                return;
            }
            var brushcolor = '#' + ('000000' + this.graphicswindow.brushcolor.value.toString(16)).slice(-6);
            var txtOptions = {
                font: this.graphicswindow.fontname.as_string(),
                fontSize: this.graphicswindow.fontsize.as_num() + 'px',
                fill: '#' + brushcolor,
            };
            if (this.graphicswindow.fontitalic.as_bool()) {
                txtOptions.fontStyle = 'italic';
            }
            if (this.graphicswindow.fontbold.as_bool()) {
                txtOptions.fontWeight = 'bold';
            }
            var phaserText = phaserGame.add.text(xPos, yPos, t.as_string(), txtOptions);
            phaserText.wordWrap = true;
            phaserText.wordWrapWidth = width;
            textSpawns[spawnLoc] = phaserText;
        },
        drawellipse: function (x, y, w, h) {
            var phaserGraphics = this.$graphicswindow.phaserGraphics;
            if (!phaserGraphics) {
                return;
            }
            var penwidth = this.graphicswindow.penwidth.as_num();
            var pencolor = this.graphicswindow.pencolor.as_num();
            phaserGraphics.lineStyle(penwidth, pencolor, 1);
            phaserGraphics.drawEllipse(x.as_num(), y.as_num(), w.as_num(), h.as_num());
        },
        fillellipse: function (x, y, w, h) {
            var phaserGraphics = this.$graphicswindow.phaserGraphics;
            if (!phaserGraphics) {
                return;
            }
            var brushcolor = this.graphicswindow.brushcolor.value.as_num();
            phaserGraphics.beginFill(brushcolor);
            phaserGraphics.drawEllipse(x.as_num(), y.as_num(), w.as_num(), h.as_num());
            phaserGraphics.endFill();
        },
        drawtriangle: function (x1, y1, x2, y2, x3, y3) {
            var phaserGraphics = this.$graphicswindow.phaserGraphics;
            if (!phaserGraphics) {
                return;
            }
            var penwidth = this.graphicswindow.penwidth.as_num();
            var pencolor = this.graphicswindow.pencolor.as_num();
            phaserGraphics.lineStyle(penwidth, pencolor, 1);
            phaserGraphics.moveTo(x1.as_num(), y1.as_num());
            phaserGraphics.lineTo(x2.as_num(), y2.as_num());
            phaserGraphics.lineTo(x3.as_num(), y3.as_num());
        },
        filltriangle: function (x1, y1, x2, y2, x3, y3) {
            var phaserGraphics = this.$graphicswindow.phaserGraphics;
            if (!phaserGraphics) {
                return;
            }
            var brushcolor = this.graphicswindow.brushcolor.value.as_num();
            phaserGraphics.beginFill(brushcolor);
            phaserGraphics.moveTo(x1.as_num(), y1.as_num());
            phaserGraphics.lineTo(x2.as_num(), y2.as_num());
            phaserGraphics.lineTo(x3.as_num(), y3.as_num());
            phaserGraphics.endFill();
        },
        drawresizedimage: function (imageName, x, y, width, height) {
            var phaserGame = this.$graphicswindow.phaserGame;
            if (!phaserGame) {
                return;
            }
            var image = this.$imagelist[imageName.as_string()];
            if (!image) {
                return;
            }
            var ctx = phaserGame.context;
            ctx.drawImage(image, x.as_num(), y.as_num(), width.as_num(), height.as_num());
        },
        drawimage: function (imageName, x, y) {
            var phaserGame = this.$graphicswindow.phaserGame;
            if (!phaserGame) {
                return;
            }
            var image = this.$imagelist[imageName.as_string()];
            if (!image) {
                return;
            }
            var ctx = phaserGame.context;
            ctx.drawImage(image, x.as_num(), y.as_num());
        },
        setpixel: function (x, y, color) {
            var phaserGame = this.$graphicswindow.phaserGame;
            if (!phaserGame) {
                return;
            }
            var ctx = phaserGame.context;
            var rgb = color.as_num();
            var red = (rgb >> 16) & 0xFF;
            var green = (rgb >> 8) & 0xFF;
            var blue = (rgb) & 0xFF;
            var xPos = x.as_num();
            var yPos = y.as_num();
            var pixelInfo = ctx.getImageData(xPos, yPos, 1, 1);
            var pixelData = pixelInfo.data;
            pixelData[0] = red;
            pixelData[1] = green;
            pixelData[2] = blue;
            ctx.putImageData(pixelInfo, xPos, yPos);
        },
        getpixel: function (x, y) {
            var phaserGame = this.$graphicswindow.phaserGame;
            if (!phaserGame) {
                return;
            }
            var xPos = x.as_num();
            var yPos = y.as_num();
            var ctx = phaserGame.context;
            var pixelData = ctx.getImageData(xPos, yPos, 1, 1).data;
            var red = pixelData[0] << 16;
            var green = pixelData[1] << 8;
            var blue = pixelData[2];
            var rgb = red | green | blue;
            return new data_unit_1.DataUnit(rgb, data_unit_1.DATATYPES.DT_NUMBER);
        },
        getrandomcolor: function () {
            var propIndex = Math.floor(Math.random() * internalColorNames.length) + 1;
            var color = stringToColorTable[internalColorNames[propIndex]];
            return new data_unit_1.DataUnit(color, data_unit_1.DATATYPES.DT_NUMBER);
        },
    };
    exports.impl = impl;
    // properties
    // GraphicsWindow.LastText
    // events
    // GraphicsWindow.TextInput
    function api(env) {
        var keydown = new data_unit_1.DataUnit();
        var keyup = new data_unit_1.DataUnit();
        var mousemove = new data_unit_1.DataUnit();
        var mousedown = new data_unit_1.DataUnit();
        var mouseup = new data_unit_1.DataUnit();
        var backgroundcolor = new data_unit_1.DataUnit(0xffffff, data_unit_1.DATATYPES.DT_NUMBER);
        var height = new data_unit_1.DataUnit(800, data_unit_1.DATATYPES.DT_NUMBER);
        var width = new data_unit_1.DataUnit(600, data_unit_1.DATATYPES.DT_NUMBER);
        var penwidth = new data_unit_1.DataUnit(2, data_unit_1.DATATYPES.DT_NUMBER);
        var pencolor = new data_unit_1.DataUnit(0x000000, data_unit_1.DATATYPES.DT_NUMBER);
        var brushcolor = new data_unit_1.DataUnit(0x000000, data_unit_1.DATATYPES.DT_NUMBER);
        var fontitalic = new data_unit_1.DataUnit('false', data_unit_1.DATATYPES.DT_STRING);
        var fontbold = new data_unit_1.DataUnit('false', data_unit_1.DATATYPES.DT_STRING);
        var fontname = new data_unit_1.DataUnit("Comic Sans MS", data_unit_1.DATATYPES.DT_STRING);
        var fontsize = new data_unit_1.DataUnit(16, data_unit_1.DATATYPES.DT_NUMBER);
        backgroundcolor.on_assign(colorToRgb);
        pencolor.on_assign(colorToRgb);
        brushcolor.on_assign(colorToRgb);
        env.$graphicswindow = {
            phaserGame: null,
            phaserGraphics: null,
            // doing this weird caching because of how phaser does text
            textSpawns: {},
        };
        return {
            backgroundcolor: backgroundcolor,
            // TODO
            title: new data_unit_1.DataUnit(),
            height: height,
            width: width,
            // TODO: in a browser, I believe these can only be read-only
            get canresize() {
                return new data_unit_1.DataUnit();
            },
            get left() {
                return new data_unit_1.DataUnit();
            },
            get top() {
                return new data_unit_1.DataUnit();
            },
            penwidth: penwidth,
            pencolor: pencolor,
            brushcolor: brushcolor,
            fontitalic: fontitalic,
            fontbold: fontbold,
            fontname: fontname,
            fontsize: fontsize,
            keydown: keydown,
            keyup: keyup,
            mousemove: mousemove,
            mousedown: mousedown,
            mouseup: mouseup,
            get lastkey() {
                var phaserGame = env.$graphicswindow.phaserGame;
                if (!phaserGame) {
                    return new data_unit_1.DataUnit();
                }
                // TODO: expand this
                var keyChar = phaserGame.input.keyboard.lastKey.event.keyCode;
                switch (keyChar) {
                    case Phaser.KeyCode.SPACEBAR:
                        keyChar = 'Space';
                        break;
                    case Phaser.KeyCode.UP:
                        keyChar = 'Up';
                        break;
                    case Phaser.KeyCode.DOWN:
                        keyChar = 'Down';
                        break;
                    case Phaser.KeyCode.LEFT:
                        keyChar = 'Left';
                        break;
                    case Phaser.KeyCode.RIGHT:
                        keyChar = 'Right';
                        break;
                    case Phaser.KeyCode.ESC:
                        keyChar = 'Escape';
                        break;
                }
                return new data_unit_1.DataUnit(keyChar, data_unit_1.DATATYPES.DT_STRING);
            },
            get mousex() {
                var phaserGame = env.$graphicswindow.phaserGame;
                if (!phaserGame) {
                    return new data_unit_1.DataUnit();
                }
                return new data_unit_1.DataUnit(phaserGame.input.x, data_unit_1.DATATYPES.DT_NUMBER);
            },
            get mousey() {
                var phaserGame = env.$graphicswindow.phaserGame;
                if (!phaserGame) {
                    return new data_unit_1.DataUnit();
                }
                return new data_unit_1.DataUnit(phaserGame.input.y, data_unit_1.DATATYPES.DT_NUMBER);
            },
            get getcolorfromrgb() { return new data_unit_1.DataUnit('graphicswindow.getcolorfromrgb', data_unit_1.DATATYPES.DT_FN); },
            get clear() { return new data_unit_1.DataUnit('graphicswindow.clear', data_unit_1.DATATYPES.DT_FN); },
            get show() { return new data_unit_1.DataUnit('graphicswindow.show', data_unit_1.DATATYPES.DT_FN); },
            get hide() { return new data_unit_1.DataUnit('graphicswindow.hide', data_unit_1.DATATYPES.DT_FN); },
            get showmessage() { return new data_unit_1.DataUnit('graphicswindow.showmessage', data_unit_1.DATATYPES.DT_FN); },
            get fillrectangle() { return new data_unit_1.DataUnit('graphicswindow.fillrectangle', data_unit_1.DATATYPES.DT_FN); },
            get drawrectangle() { return new data_unit_1.DataUnit('graphicswindow.drawrectangle', data_unit_1.DATATYPES.DT_FN); },
            get drawline() { return new data_unit_1.DataUnit('graphicswindow.drawline', data_unit_1.DATATYPES.DT_FN); },
            get drawtext() { return new data_unit_1.DataUnit('graphicswindow.drawtext', data_unit_1.DATATYPES.DT_FN); },
            get drawboundtext() { return new data_unit_1.DataUnit('graphicswindow.drawboundtext', data_unit_1.DATATYPES.DT_FN); },
            get drawellipse() { return new data_unit_1.DataUnit('graphicswindow.drawellipse', data_unit_1.DATATYPES.DT_FN); },
            get fillellipse() { return new data_unit_1.DataUnit('graphicswindow.fillellipse', data_unit_1.DATATYPES.DT_FN); },
            get drawtriangle() { return new data_unit_1.DataUnit('graphicswindow.drawtriangle', data_unit_1.DATATYPES.DT_FN); },
            get filltriangle() { return new data_unit_1.DataUnit('graphicswindow.filltriangle', data_unit_1.DATATYPES.DT_FN); },
            get getrandomcolor() { return new data_unit_1.DataUnit('graphicswindow.getrandomcolor', data_unit_1.DATATYPES.DT_FN); },
            get drawresizedimage() { return new data_unit_1.DataUnit('graphicswindow.drawresizedimage', data_unit_1.DATATYPES.DT_FN); },
            get drawimage() { return new data_unit_1.DataUnit('graphicswindow.drawimage', data_unit_1.DATATYPES.DT_FN); },
            get setpixel() { return new data_unit_1.DataUnit('graphicswindow.setpixel', data_unit_1.DATATYPES.DT_FN); },
            get getpixel() { return new data_unit_1.DataUnit('graphicswindow.getpixel', data_unit_1.DATATYPES.DT_FN); }
        };
    }
    exports.api = api;
    function phaserCreateFactory(resolver) {
        return function phaserCreate() {
            var phaserGame = this.$graphicswindow.phaserGame;
            phaserGame.input.keyboard.onDownCallback = phaserKeydown.bind(this);
            phaserGame.input.keyboard.onUpCallback = phaserKeyup.bind(this);
            phaserGame.input.mouse.enabled = true;
            phaserGame.input.mouse.mouseDownCallback = phaserMousedown.bind(this);
            phaserGame.input.mouse.mouseUpCallback = phaserMouseup.bind(this);
            phaserGame.input.addMoveCallback(phaserMousemove, this);
            var phaserGraphics = phaserGame.add.graphics(0, 0);
            phaserGraphics.boundsPadding = 0;
            var width = this.graphicswindow.width.as_num();
            var height = this.graphicswindow.height.as_num();
            // pre-fill the BG
            var fillColor = this.graphicswindow.backgroundcolor.as_num();
            phaserGraphics.beginFill(fillColor);
            phaserGraphics.drawRect(0, 0, width, height);
            phaserGraphics.endFill();
            this.$graphicswindow.phaserGraphics = phaserGraphics;
            resolver(new data_unit_1.DataUnit());
        };
    }
    function phaserKeydown() {
        if (this.graphicswindow.keydown.type === data_unit_1.DATATYPES.DT_FN) {
            this.$interrupt(this.graphicswindow.keydown.value);
        }
    }
    function phaserKeyup() {
        if (this.graphicswindow.keyup.type === data_unit_1.DATATYPES.DT_FN) {
            this.$interrupt(this.graphicswindow.keyup.value);
        }
    }
    function phaserMousemove() {
        if (this.graphicswindow.mousemove.type === data_unit_1.DATATYPES.DT_FN) {
            this.$interrupt(this.graphicswindow.mousemove.value);
        }
    }
    function phaserMousedown() {
        if (this.graphicswindow.mousedown.type === data_unit_1.DATATYPES.DT_FN) {
            this.$interrupt(this.graphicswindow.mousedown.value);
        }
    }
    function phaserMouseup() {
        if (this.graphicswindow.mouseup.type === data_unit_1.DATATYPES.DT_FN) {
            this.$interrupt(this.graphicswindow.mouseup.value);
        }
    }
});
//# sourceMappingURL=graphicswindow.js.map