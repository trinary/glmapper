glmapper = function() {
  var glmapper = {version: "0.0.0"};
glmapper.scene = function(canvas) {
  var scene_context = canvas.context,
      scene_gl = canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ),
      scene_shaders = [],
      scene_clearcolor = [0,0,0,1],
      scene_enabled = [],
      scene_program = scene_gl.createProgram();

  function scene() {
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
    scene_shaders.forEach(function(d,i,a) { scene_gl.attachShader(scene_program, d); });
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
  scene.clear = function(color) {
    if (!arguments.length) return scene_clearcolor;
    scene_clearcolor = color;
    scene_gl.clearColor(color[0],color[1], color[2],color[3]);
    return scene;
  }
  scene.call = function(cb) {
    cb(scene_gl);
    return scene;
  }

  return scene;
};

glmapper.buffer = function() {
  var buff_buffer = undefined,
      type        = "static draw",
      data        = undefined;
  function buffer() {
    return function(gl) {
      var b = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER,b)
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
      return b;
    }
  }

  buffer.type = function(t) {
    if(!arguments.length) return type;
    type = t;
    return buffer;
  }

  buffer.data = function(d) {
    if(!arguments.length) return data;
    data = d;
    return buffer;
  }

  return buffer;
};
  return glmapper;
}();

