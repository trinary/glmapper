var vs = document.getElementById('vs');
var fs = document.getElementById('fs');

function caller(sc) {
  console.log("lol");
}

var scene = glmapper.scene(document.getElementById("mapper")).addVertexShader(vs);
scene.addFragmentShader(fs)
scene.compileShaders().programShaders().link().clear([1,0,0,1])
var buffer = glmapper.buffer().data([0,1,0,-1,-1,0,0,-1,0]);
console.log("whee", buffer(scene));

scene();

