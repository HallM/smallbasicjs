define(["require", "exports", './data-unit', './canvs', './utils'], function (require, exports, data_unit_1, canvs_1, utils_1) {
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
    function keycodeToString(keyCode) {
        if (keyCode >= 65 && keyCode <= 90) {
            return String.fromCharCode(keyCode);
        }
        if (keyCode >= 48 && keyCode <= 57) {
            return 'D' + String.fromCharCode(keyCode);
        }
        if (keyCode >= 96 && keyCode <= 107) {
            return 'NumPad' + (keyCode - 96);
        }
        if (keyCode >= 112 && keyCode <= 123) {
            return 'F' + (keyCode - 111);
        }
        switch (keyCode) {
            case 107:
                return 'Add';
            case 8:
                return 'Back';
            case 20:
                return 'CapsLock';
            case 12:
                return 'Clear';
            case 110:
                return 'Decimal';
            case 46:
                return 'Delete';
            case 111:
                return 'Divide';
            case 35:
                return 'End';
            case 13:
                return 'Enter';
            case 36:
                return 'Home';
            case 45:
                return 'Insert';
            case 18:
                return 'Alt'; // LeftAlt
            case 17:
                return 'Control'; // LeftCtrl
            case 16:
                return 'Shift'; // LeftShift
            case 91:
                return 'LWin';
            case 92:
                return 'RWin';
            case 106:
                return 'Multiply';
            case 34:
                return 'PageDown'; // Next
            case 144:
                return 'NumLock';
            case 220:
                return 'OemBackslash';
            case 221:
                return 'OemCloseBrackets';
            case 188:
                return 'OemComma';
            case 189:
                return 'OemMinus';
            case 219:
                return 'OemOpenBrackets';
            case 190:
                return 'OemPeriod';
            // case :
            //   return 'OemPipe';
            case 187:
                return 'OemPlus';
            case 191:
                return 'OemQuestion';
            case 222:
                return 'OemQuotes';
            case 186:
                return 'OemSemicolon';
            case 191:
                return 'OemTilde';
            case 19:
                return 'Pause';
            case 44:
                return 'PrintScreen';
            case 33:
                return 'PageUp'; // Prior
            case 145:
                return 'Scroll';
            case 93:
                return 'Select';
            case 109:
                return 'Subtract';
            case 9:
                return 'Tab';
            case 32:
                return 'Space';
            case 38:
                return 'Up';
            case 40:
                return 'Down';
            case 37:
                return 'Left';
            case 39:
                return 'Right';
            case 27:
                return 'Escape';
        }
        return '';
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
            impl.show.apply(this);
            var canvs = this.$graphicswindow.canvs;
            var ctx = canvs.bglayer.ctx;
            var width = canvs.width;
            var height = canvs.height;
            ctx.fillStyle = utils_1.colorFromNumber(this.graphicswindow.backgroundcolor.as_num());
            ctx.fillRect(0, 0, width, height);
            // TODO: remove all shapes/sprites too
            // TODO: what happens when adding shape, clear, then try to access shape?
        },
        show: function () {
            if (this.$graphicswindow.element) {
                return;
            }
            var width = this.graphicswindow.width.as_num();
            var height = this.graphicswindow.height.as_num();
            var top = this.graphicswindow.top.as_num();
            var left = this.graphicswindow.left.as_num();
            var el = document.createElement('div');
            el.tabIndex = 1;
            if (el.classList) {
                el.classList.add('graphicswindow');
            }
            else {
                el.className += ' graphicswindow';
            }
            el.style.position = 'absolute';
            el.style.top = top + 'px';
            el.style.left = left + 'px';
            el.style.width = width;
            el.style.height = height;
            var canvs = new canvs_1.Canvs(width, height);
            el.appendChild(canvs.bglayer.canvas);
            el.appendChild(canvs.spritelayer.canvas);
            this.$graphicswindow.canvs = canvs;
            this.$graphicswindow.element = el;
            console.log(el);
            document.body.appendChild(el);
            el.focus();
            // TODO: remove any other event listeners
            var env = this;
            env.$graphicswindow.keydownhandler = function (e) {
                switch (e.keyCode) {
                    case 32:
                        env.$graphicswindow.lastKey.value = 'Space';
                        break;
                    case 38:
                        env.$graphicswindow.lastKey.value = 'Up';
                        break;
                    case 40:
                        env.$graphicswindow.lastKey.value = 'Down';
                        break;
                    case 37:
                        env.$graphicswindow.lastKey.value = 'Left';
                        break;
                    case 39:
                        env.$graphicswindow.lastKey.value = 'Right';
                        break;
                    case 27:
                        env.$graphicswindow.lastKey.value = 'Escape';
                        break;
                }
                if (env.graphicswindow.keydown.type === data_unit_1.DATATYPES.DT_FN) {
                    env.$interrupt(env.graphicswindow.keydown.value);
                }
            };
            env.$graphicswindow.keyuphandler = function (e) {
                switch (e.keyCode) {
                    case 32:
                        env.$graphicswindow.lastKey.value = 'Space';
                        break;
                    case 38:
                        env.$graphicswindow.lastKey.value = 'Up';
                        break;
                    case 40:
                        env.$graphicswindow.lastKey.value = 'Down';
                        break;
                    case 37:
                        env.$graphicswindow.lastKey.value = 'Left';
                        break;
                    case 39:
                        env.$graphicswindow.lastKey.value = 'Right';
                        break;
                    case 27:
                        env.$graphicswindow.lastKey.value = 'Escape';
                        break;
                }
                if (env.graphicswindow.keyup.type === data_unit_1.DATATYPES.DT_FN) {
                    env.$interrupt(env.graphicswindow.keyup.value);
                }
            };
            el.addEventListener('keydown', env.$graphicswindow.keydownhandler, false);
            el.addEventListener('keyup', env.$graphicswindow.keyuphandler, false);
            // TODO: input handling
            // const phaserGame = this.$graphicswindow.phaserGame;
            // phaserGame.input.keyboard.onDownCallback = phaserKeydown.bind(this);
            // phaserGame.input.keyboard.onUpCallback = phaserKeyup.bind(this);
            // phaserGame.input.mouse.enabled = true;
            // phaserGame.input.mouse.mouseDownCallback = phaserMousedown.bind(this);
            // phaserGame.input.mouse.mouseUpCallback = phaserMouseup.bind(this);
            // phaserGame.input.addMoveCallback(phaserMousemove, this);
            // pre-fill the BG
            impl.clear.apply(this);
        },
        hide: function () {
            // const gw = this.$graphicswindow;
            // const element = gw.element;
            // if (element) {
            //   if (gw.keydownhandler) {
            //     element.removeEventListener('keydown', gw.keydownhandler);
            //   }
            //   if (gw.keyuphandler) {
            //     element.removeEventListener('keyup', gw.keyuphandler);
            //   }
            //   if (gw.mousedownhandler) {
            //     element.removeEventListener('mousedown', gw.mousedownhandler);
            //   }
            //   if (gw.mouseuphandler) {
            //     element.removeEventListener('mouseup', gw.mouseuphandler);
            //   }
            //   if (gw.mousemovehandler) {
            //     element.removeEventListener('mousemove', gw.mousemovehandler);
            //   }
            //   if (element.parentNode) {
            //     element.parentNode.removeChild(element);
            //   }
            //   // TODO destroy
            // }
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
            impl.show.apply(this);
            var canvs = this.$graphicswindow.canvs;
            var ctx = canvs.bglayer.ctx;
            ctx.fillStyle = utils_1.colorFromNumber(this.graphicswindow.brushcolor.as_num());
            ctx.fillRect(x.as_num(), y.as_num(), w.as_num(), h.as_num());
        },
        drawrectangle: function (x, y, w, h) {
            impl.show.apply(this);
            var canvs = this.$graphicswindow.canvs;
            var ctx = canvs.bglayer.ctx;
            ctx.strokeStyle = utils_1.colorFromNumber(this.graphicswindow.pencolor.as_num());
            ctx.lineWidth = this.graphicswindow.penwidth.as_num();
            ctx.strokeRect(x.as_num(), y.as_num(), w.as_num(), h.as_num());
        },
        drawline: function (x1, y1, x2, y2) {
            impl.show.apply(this);
            var canvs = this.$graphicswindow.canvs;
            var ctx = canvs.bglayer.ctx;
            ctx.strokeStyle = utils_1.colorFromNumber(this.graphicswindow.pencolor.as_num());
            ctx.lineWidth = this.graphicswindow.penwidth.as_num();
            ctx.beginPath();
            ctx.moveTo(x1.as_num(), y1.as_num());
            ctx.lineTo(x2.as_num(), y2.as_num());
            ctx.stroke();
        },
        drawtext: function (x, y, t) {
            impl.show.apply(this);
            var canvs = this.$graphicswindow.canvs;
            var ctx = canvs.bglayer.ctx;
            var fontString = this.graphicswindow.fontsize.as_num() + 'px ' + this.graphicswindow.fontname.as_string();
            if (this.graphicswindow.fontbold.as_bool()) {
                fontString = 'bold ' + fontString;
            }
            if (this.graphicswindow.fontitalic.as_bool()) {
                fontString = 'italic ' + fontString;
            }
            ctx.fillStyle = utils_1.colorFromNumber(this.graphicswindow.brushcolor.as_num());
            ctx.font = fontString;
            ctx.textBaseline = 'top';
            ctx.fillText(t.as_string(), x.as_num(), y.as_num());
        },
        drawboundtext: function (x, y, w, t) {
            impl.show.apply(this);
            var canvs = this.$graphicswindow.canvs;
            var ctx = canvs.bglayer.ctx;
            var fontString = this.graphicswindow.fontsize.as_num() + 'px ' + this.graphicswindow.fontname.as_string();
            if (this.graphicswindow.fontbold.as_bool()) {
                fontString = 'bold ' + fontString;
            }
            if (this.graphicswindow.fontitalic.as_bool()) {
                fontString = 'italic ' + fontString;
            }
            ctx.fillStyle = utils_1.colorFromNumber(this.graphicswindow.brushcolor.as_num());
            ctx.font = fontString;
            ctx.textBaseline = 'top';
            ctx.fillText(t.as_string(), x.as_num(), y.as_num(), w.as_num());
        },
        drawellipse: function (x, y, w, h) {
            impl.show.apply(this);
            var canvs = this.$graphicswindow.canvs;
            var ctx = canvs.bglayer.ctx;
            ctx.strokeStyle = utils_1.colorFromNumber(this.graphicswindow.pencolor.as_num());
            ctx.lineWidth = this.graphicswindow.penwidth.as_num();
            utils_1.makeEllipsePath(ctx, x.as_num(), y.as_num(), w.as_num(), h.as_num());
            ctx.stroke();
        },
        fillellipse: function (x, y, w, h) {
            impl.show.apply(this);
            var canvs = this.$graphicswindow.canvs;
            var ctx = canvs.bglayer.ctx;
            ctx.fillStyle = utils_1.colorFromNumber(this.graphicswindow.brushcolor.as_num());
            utils_1.makeEllipsePath(ctx, x.as_num(), y.as_num(), w.as_num(), h.as_num());
            ctx.fill();
        },
        drawtriangle: function (x1, y1, x2, y2, x3, y3) {
            impl.show.apply(this);
            var canvs = this.$graphicswindow.canvs;
            var ctx = canvs.bglayer.ctx;
            ctx.strokeStyle = utils_1.colorFromNumber(this.graphicswindow.pencolor.as_num());
            ctx.lineWidth = this.graphicswindow.penwidth.as_num();
            ctx.beginPath();
            ctx.moveTo(x1.as_num(), y1.as_num());
            ctx.lineTo(x2.as_num(), y2.as_num());
            ctx.lineTo(x3.as_num(), y3.as_num());
            ctx.stroke();
        },
        filltriangle: function (x1, y1, x2, y2, x3, y3) {
            impl.show.apply(this);
            var canvs = this.$graphicswindow.canvs;
            var ctx = canvs.bglayer.ctx;
            ctx.fillStyle = utils_1.colorFromNumber(this.graphicswindow.brushcolor.as_num());
            ctx.beginPath();
            ctx.moveTo(x1.as_num(), y1.as_num());
            ctx.lineTo(x2.as_num(), y2.as_num());
            ctx.lineTo(x3.as_num(), y3.as_num());
            ctx.fill();
        },
        drawresizedimage: function (image, x, y, width, height) {
            impl.show.apply(this);
            var canvs = this.$graphicswindow.canvs;
            var ctx = canvs.bglayer.ctx;
            if (image.type !== data_unit_1.DATATYPES.DT_IMAGE) {
                return;
            }
            ctx.drawImage(image.value, x.as_num(), y.as_num(), width.as_num(), height.as_num());
        },
        drawimage: function (image, x, y) {
            impl.show.apply(this);
            var canvs = this.$graphicswindow.canvs;
            var ctx = canvs.bglayer.ctx;
            if (image.type !== data_unit_1.DATATYPES.DT_IMAGE) {
                return;
            }
            ctx.drawImage(image.value, x.as_num(), y.as_num());
        },
        setpixel: function (x, y, color) {
            impl.show.apply(this);
            var canvs = this.$graphicswindow.canvs;
            var ctx = canvs.bglayer.ctx;
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
            impl.show.apply(this);
            var canvs = this.$graphicswindow.canvs;
            var ctx = canvs.bglayer.ctx;
            var xPos = x.as_num();
            var yPos = y.as_num();
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
        var height = new data_unit_1.DataUnit(500, data_unit_1.DATATYPES.DT_NUMBER);
        var width = new data_unit_1.DataUnit(500, data_unit_1.DATATYPES.DT_NUMBER);
        var top = new data_unit_1.DataUnit(100, data_unit_1.DATATYPES.DT_NUMBER);
        var left = new data_unit_1.DataUnit(100, data_unit_1.DATATYPES.DT_NUMBER);
        var penwidth = new data_unit_1.DataUnit(2, data_unit_1.DATATYPES.DT_NUMBER);
        var pencolor = new data_unit_1.DataUnit(0x000000, data_unit_1.DATATYPES.DT_NUMBER);
        var brushcolor = new data_unit_1.DataUnit(0x000000, data_unit_1.DATATYPES.DT_NUMBER);
        var fontitalic = new data_unit_1.DataUnit('false', data_unit_1.DATATYPES.DT_STRING);
        var fontbold = new data_unit_1.DataUnit('false', data_unit_1.DATATYPES.DT_STRING);
        var fontname = new data_unit_1.DataUnit("Comic Sans MS", data_unit_1.DATATYPES.DT_STRING);
        var fontsize = new data_unit_1.DataUnit(16, data_unit_1.DATATYPES.DT_NUMBER);
        width.on_assign(function (value) {
            if (env.$graphicswindow.canvs) {
                env.$graphicswindow.canvs.width = value.as_num();
            }
        });
        height.on_assign(function (value) {
            if (env.$graphicswindow.canvs) {
                env.$graphicswindow.canvs.height = value.as_num();
            }
        });
        top.on_assign(function (value) {
            if (env.$graphicswindow.element) {
                env.$graphicswindow.element.style.top = value.as_num() + 'px';
            }
        });
        left.on_assign(function (value) {
            if (env.$graphicswindow.element) {
                env.$graphicswindow.element.style.left = value.as_num() + 'px';
            }
        });
        backgroundcolor.on_assign(colorToRgb);
        pencolor.on_assign(colorToRgb);
        brushcolor.on_assign(colorToRgb);
        env.$graphicswindow = {
            element: null,
            canvs: null,
            keydownhandler: null,
            keyuphandler: null,
            mousedownhandler: null,
            mouseuphandler: null,
            mousemovehandler: null,
            lastKey: new data_unit_1.DataUnit('None', data_unit_1.DATATYPES.DT_STRING)
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
            top: top,
            left: left,
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
                return env.$graphicswindow.lastKey;
            },
            get mousex() {
                // TODO
                return new data_unit_1.DataUnit();
            },
            get mousey() {
                // TODO
                return new data_unit_1.DataUnit();
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
    // function phaserMousemove() {
    //   if (this.graphicswindow.mousemove.type === DATATYPES.DT_FN) {
    //     this.$interrupt(this.graphicswindow.mousemove.value);
    //   }
    // }
    // function phaserMousedown() {
    //   if (this.graphicswindow.mousedown.type === DATATYPES.DT_FN) {
    //     this.$interrupt(this.graphicswindow.mousedown.value);
    //   }
    // }
    // function phaserMouseup() {
    //   if (this.graphicswindow.mouseup.type === DATATYPES.DT_FN) {
    //     this.$interrupt(this.graphicswindow.mouseup.value);
    //   }
    // }
    function atexit(env) {
        impl.hide.apply(env);
    }
    exports.atexit = atexit;
});
//# sourceMappingURL=graphicswindow.js.map