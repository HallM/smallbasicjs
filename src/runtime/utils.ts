'use strict';

import {DataUnit, DATATYPES} from './data-unit';

function resolvearray(env: any, aname: string): any {
  if (!env.hasOwnProperty(aname)) {
    env[aname] = new DataUnit({}, DATATYPES.DT_ARRAY);
  }

  return env[aname].cast_array();
}

function colorFromNumber(v: number): string {
  return '#' + ('000000' + v.toString(16)).slice(-6);
}

function makeEllipsePath(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number) {
  // thanks to http://stackoverflow.com/a/2173084/4386347
  const kappa = .5522848;
  const ox = (w / 2) * kappa;
  const oy = (h / 2) * kappa;
  const xe = x + w;
  const ye = y + h;
  const xm = x + w / 2;
  const ym = y + h / 2;

  ctx.beginPath();
  ctx.moveTo(x, ym);
  ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
  ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
  ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
  ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
}

function makeElement(tagName: string, withClass?: string, canFocus?: boolean): HTMLElement {
  const el = document.createElement(tagName);
  if (canFocus) {
    el.tabIndex = 1;
  }

  if (withClass && withClass.length) {
    if (el.classList) {
      el.classList.add(withClass);
    } else {
      el.className += ' ' + withClass;
    }
  }

  return el;
}

function makeWindow(title: string, top: number, left: number, width: number, height: number, onClose?: Function): [HTMLElement, HTMLElement, Function] {
  // TODO: re-using windows, because of DOM memory leak issues
  const windowpane = makeElement('div', 'windowpane', true);
  windowpane.style.top = top + 'px';
  windowpane.style.left = left + 'px';
  windowpane.style.width = (width + 2) + 'px';
  windowpane.style.height = (height + 28) + 'px';

  const titlebar = makeElement('div', 'windowpane-titlebar');
  const titlediv = makeElement('div', 'windowpane-title');
  titlediv.innerText = title;

  const closebtn = makeElement('button', 'windowpane-titlebar-closebutton');
  closebtn.innerText = 'x';

  const closehandler = function() {
    closebtn.removeEventListener('click', closehandler);
    document.body.removeChild(windowpane);

    if (onClose) {
      onClose();
    }
  };
  closebtn.addEventListener('click', closehandler, false);

  const contentpane = makeElement('div', 'windowpane-contentpane');
  contentpane.style.width = width + 'px';
  contentpane.style.height = height + 'px';

  titlebar.appendChild(titlediv);
  titlebar.appendChild(closebtn);

  windowpane.appendChild(titlebar);
  windowpane.appendChild(contentpane);

  document.body.appendChild(windowpane);

  // TODO: need to properly remove these when the window is closed
  // TODO: need to wrap this all in a class. really. this is just... yuck. quick and very dirty POC territory
  let isdragging = false;
  titlebar.addEventListener('mousedown', function(e) {
    // TODO: was it the left button?
    isdragging = true;
  });
  titlebar.addEventListener('mouseup', function(e) {
    // TODO: but was it the left button?
    isdragging = false;
  });
  titlebar.addEventListener('mousemove', function(e) {
    if (isdragging) {
      // TODO: get distance, move the panel
    }
  });

  return [windowpane, contentpane, closehandler];
}

export {resolvearray, colorFromNumber, makeEllipsePath, makeWindow};
