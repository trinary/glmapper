glmapper = function() {
  var glmapper = {version: "0.0.0"};
glmapper.scene = function(canvas) {
  var scene_context = canvas.context,
      scene_gl = canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ),
      scene_shaders = [];

  function scene(d) {
     console.log("scened.", d); 
  };
  scene.addVertexShader = function(sh) { 
    var shader = scene_gl.createShader(scene_gl.VERTEX_SHADER);
    scene_gl.shaderSource(sh).textContent
    scene_shaders.push(shader);
    return scene;
  }
  scene.addFragmentShader = function(sh) { 
    var shader = scene_gl.createShader(scene_gl.FRAGMENT_SHADER);
    scene_gl.shaderSource(sh).textContent
    scene_shaders.push(shader);
    return scene;
  }
  scene.compileShaders = function() { 
    console.log("compileShaders",scene_shaders);
    scene_shaders.forEach(function(d,i,a) { scene_gl.compileShader(d); }
    return scene;
  }
  scene.addShaders = function() { 
    return scene;:

  }
  return scene;
};

  return glmapper;
}();

