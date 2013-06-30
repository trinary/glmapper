console.log(glmapper);


var vs = document.getElementById('vs');
var fs = document.getElementById('fs');

console.log(vs.textContent,fs.textContent);

var scene = glmapper.scene(document.getElementById("mapper")).addVertexShader(vs);
scene.addFragmentShader(fs).programShaders().link();

