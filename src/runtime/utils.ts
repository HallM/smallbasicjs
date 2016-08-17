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

export {resolvearray, colorFromNumber, makeEllipsePath};
