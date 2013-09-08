var vs = document.getElementById('vs');
var fs = document.getElementById('fs');

var scene = glmapper.scene(document.getElementById("mapper")).addVertexShader(vs);
scene.addFragmentShader(fs)
scene.compileShaders().programShaders().link();
scene();
