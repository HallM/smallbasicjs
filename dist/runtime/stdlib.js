// import everything in here
define(["require", "exports", './data-unit', './array', './clock', './controls', './desktop', './dictionary', './file', './flickr', './graphicswindow', './imagelist', './math', './mouse', './network', './program', './shapes', './sound', './stack', './text', './textwindow', './timer', './turtle'], function (require, exports, data_unit_1, array, clock, controls, desktop, dictionary, file, flickr, graphicswindow, imagelist, math, mouse, network, program, shapes, sound, stack, text, textwindow, timer, turtle) {
    "use strict";
    exports.DataUnit = data_unit_1.DataUnit;
    exports.DATATYPES = data_unit_1.DATATYPES;
    function api(env) {
        return {
            array: array.api(env),
            clock: clock.api(env),
            controls: controls.api(env),
            desktop: desktop.api(env),
            dictionary: dictionary.api(env),
            file: file.api(env),
            flickr: flickr.api(env),
            graphicswindow: graphicswindow.api(env),
            imagelist: imagelist.api(env),
            math: math.api(env),
            mouse: mouse.api(env),
            network: network.api(env),
            program: program.api(env),
            shapes: shapes.api(env),
            sound: sound.api(env),
            stack: stack.api(env),
            text: text.api(env),
            textwindow: textwindow.api(env),
            timer: timer.api(env),
            turtle: turtle.api(env)
        };
    }
    exports.api = api;
    var impl = {
        array: array.impl,
        clock: clock.impl,
        controls: controls.impl,
        desktop: desktop.impl,
        dictionary: dictionary.impl,
        file: file.impl,
        flickr: flickr.impl,
        graphicswindow: graphicswindow.impl,
        imagelist: imagelist.impl,
        math: math.impl,
        mouse: mouse.impl,
        network: network.impl,
        program: program.impl,
        shapes: shapes.impl,
        sound: sound.impl,
        stack: stack.impl,
        text: text.impl,
        textwindow: textwindow.impl,
        timer: timer.impl,
        turtle: turtle.impl
    };
    exports.impl = impl;
});
//# sourceMappingURL=stdlib.js.map