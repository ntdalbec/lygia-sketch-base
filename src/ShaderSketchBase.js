import { 
  createProgramInfo, 
  createBufferInfoFromArrays, 
  resizeCanvasToDisplaySize,
  setBuffersAndAttributes,
  setUniforms,
  drawBufferInfo
} from "twgl.js";

export default class ShaderSketchBase {
  constructor(canvas, fragmentShader, vertexShader) {
    this.canvas = canvas;
    this.gl = canvas.getContext('webgl2');
    this.fragmentShader = fragmentShader;
    this.vertexShader = vertexShader;
    this.animationFrameId = null;

    this.programInfo = createProgramInfo(this.gl, [this.vertexShader, this.fragmentShader]);
    this.bufferInfo = createBufferInfoFromArrays(this.gl, {
      position: {
        numComponents: 2,
        data: [
          -1, -1,
          1, -1,
          -1,  1,
          -1,  1,
          1, -1,
          1,  1,
        ],
      },
    });

    this.uniforms = {
      u_time: 0,
      u_resolution: [this.canvas.width, this.canvas.height],
      u_mouse: [0, 0],
    };

    this.canvas.addEventListener("mousemove", (event) => {
      this.uniforms.u_mouse = this.getNormalizedMousePosition(event);
    });
  }

  render(time) {
    resizeCanvasToDisplaySize(this.canvas);
    this.update(time);

    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    this.gl.useProgram(this.programInfo.program);
    setBuffersAndAttributes(this.gl, this.programInfo, this.bufferInfo);
    setUniforms(this.programInfo, this.uniforms);
    drawBufferInfo(this.gl, this.bufferInfo);

    this.animationFrameId = requestAnimationFrame(this.render.bind(this));
  }

  update(time) {
    Object.assign(this.uniforms, {
      u_time: time * 0.001,
      u_resolution: [this.canvas.width, this.canvas.height],
    });
  }

  start() {
    this.animationFrameId = requestAnimationFrame(this.render.bind(this));
  }

  stop() {
    cancelAnimationFrame(this.animationFrameId);
  }

  getNormalizedMousePosition(event) {
    return [
      event.offsetX / this.canvas.clientWidth,
      event.offsetY / this.canvas.clientHeight,
    ];
  }
}