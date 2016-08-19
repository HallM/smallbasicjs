define(["require", "exports", './data-unit'], function (require, exports, data_unit_1) {
    'use strict';
    function resolvearray(env, aname) {
        if (!env.hasOwnProperty(aname)) {
            env[aname] = new data_unit_1.DataUnit({}, data_unit_1.DATATYPES.DT_ARRAY);
        }
        return env[aname].cast_array();
    }
    exports.resolvearray = resolvearray;
    function colorFromNumber(v) {
        return '#' + ('000000' + v.toString(16)).slice(-6);
    }
    exports.colorFromNumber = colorFromNumber;
    function makeEllipsePath(ctx, x, y, w, h) {
        // thanks to http://stackoverflow.com/a/2173084/4386347
        var kappa = .5522848;
        var ox = (w / 2) * kappa;
        var oy = (h / 2) * kappa;
        var xe = x + w;
        var ye = y + h;
        var xm = x + w / 2;
        var ym = y + h / 2;
        ctx.beginPath();
        ctx.moveTo(x, ym);
        ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
        ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
        ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
        ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
    }
    exports.makeEllipsePath = makeEllipsePath;
    function makeElement(tagName, withClass, canFocus) {
        var el = document.createElement(tagName);
        if (canFocus) {
            el.tabIndex = 1;
        }
        if (withClass && withClass.length) {
            if (el.classList) {
                el.classList.add(withClass);
            }
            else {
                el.className += ' ' + withClass;
            }
        }
        return el;
    }
    function makeWindow(title, top, left, width, height, onClose) {
        var windowpane = makeElement('div', 'windowpane', true);
        windowpane.style.top = top + 'px';
        windowpane.style.left = left + 'px';
        windowpane.style.width = (width + 2) + 'px';
        windowpane.style.height = (height + 28) + 'px';
        var titlebar = makeElement('div', 'windowpane-titlebar');
        var titlediv = makeElement('div', 'windowpane-title');
        titlediv.innerText = title;
        var closebtn = makeElement('button', 'windowpane-titlebar-closebutton');
        closebtn.innerText = 'x';
        var closehandler = function () {
            closebtn.removeEventListener('click', closehandler);
            document.body.removeChild(windowpane);
            if (onClose) {
                onClose();
            }
        };
        closebtn.addEventListener('click', closehandler, false);
        var contentpane = makeElement('div', 'windowpane-contentpane');
        contentpane.style.width = width + 'px';
        contentpane.style.height = height + 'px';
        titlebar.appendChild(titlediv);
        titlebar.appendChild(closebtn);
        windowpane.appendChild(titlebar);
        windowpane.appendChild(contentpane);
        document.body.appendChild(windowpane);
        return [windowpane, contentpane, closehandler];
    }
    exports.makeWindow = makeWindow;
});
//# sourceMappingURL=utils.js.map