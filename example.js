var vs = document.getElementById('vs');
var fs = document.getElementById('fs');

function caller(sc) {
  console.log(sc);
}

var scene = glmapper.scene(document.getElementById("mapper")).addVertexShader(vs);
scene.addFragmentShader(fs)
scene.compileShaders().programShaders().link().clear([1,0,0,1]).call(caller);

scene();

