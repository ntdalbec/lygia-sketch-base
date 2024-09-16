import ShaderSketchBase from "./ShaderSketchBase";
import fragmentShader from "./shaders/frag.glsl";
import vertexShader from "./shaders/vert.glsl";

const canvas = document.querySelector("#canvas");
const sketch = new ShaderSketchBase(canvas, fragmentShader, vertexShader);
sketch.start();
