uniform float u_color;
varying vec2 v_uv;

void main() 
{
  gl_FragColor = vec4(u_color, 0.0, 0.0, 1.0); // Red color
}