glmapper
========

A chainable webGL api + data mapping eventually. This is a highly experimental project that is open-ended at this point.

So far
------

A scene function can be invoked that returns a configurable function object represening a webGL scene and its fragment and vector shaders.
Those shaders can be compiled, linked, and added to a gl program.

The future
----------

WebGL is almost too low-level with too many assumptions needing to be made to make a data-mappable API. I'd like to try anyway.  Perhaps some combination of prerequisites about the kind of scene you're drawing, and ES6 generators to produce geometry can make something useful. I don't know yet, but I intend to find out.

