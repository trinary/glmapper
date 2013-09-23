glmapper.buffer = function() {
  var buff_buffer,
      type        = "static draw",
      data;

  function buffer() {
    return function(gl) {
      var b = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER,b);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
      return b;
    };
  }

  buffer.type = function(t) {
    if(!arguments.length) return type;
    type = t;
    return buffer;
  };

  buffer.data = function(d) {
    if(!arguments.length) return data;
    data = d;
    return buffer;
  };

  return buffer;
};
