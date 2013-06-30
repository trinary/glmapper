glmapper = function() {
  var glmapper = {version: "0.0.0"};
glmapper.scene = function(canvas) {
  var scene_context = canvas.context,
      scene_gl = canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ),
      scene_shaders = [],
      scene_program = scene_gl.createProgram();
      

  function scene(d) {
     console.log("scened.", d); 
  };
  scene.addVertexShader = function(sh) { 
    var shader = scene_gl.createShader(scene_gl.VERTEX_SHADER);
    scene_gl.shaderSource(shader, sh.textContent);
    scene_shaders.push(shader);
    return scene;
  }
  scene.addFragmentShader = function(sh) { 
    var shader = scene_gl.createShader(scene_gl.FRAGMENT_SHADER);
    scene_gl.shaderSource(shader, sh.textContent);
    scene_shaders.push(shader);
    return scene;
  }
  scene.compileShaders = function() { 
    scene_shaders.forEach(function(d,i,a) { 
      scene_gl.compileShader(d); 
      if (!scene_gl.getShaderParameter(d,scene_gl.COMPILE_STATUS)) {
        throw gl.getShaderInfoLog( d );
      }
    });
    return scene;
  }
  scene.programShaders = function() { 
    scene_shaders.forEach(function(d,i,a) { console.log(d); scene_gl.attachShader(scene_program, d); });
    return scene;
  }
  scene.link = function() { 
    scene_gl.linkProgram( scene_program );
    if ( !scene_gl.getProgramParameter( scene_program, scene_gl.LINK_STATUS ) ) {
      throw scene_gl.getProgramInfoLog( scene_program );
    }
    scene_gl.useProgram( scene_program );
    return scene;
  }
  return scene;
};

  return glmapper;
}();

