/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/twgl.js/dist/5.x/twgl-full.module.js":
/*!***********************************************************!*\
  !*** ./node_modules/twgl.js/dist/5.x/twgl-full.module.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addExtensionsToContext: () => (/* binding */ addExtensionsToContext),
/* harmony export */   attributes: () => (/* binding */ attributes),
/* harmony export */   bindFramebufferInfo: () => (/* binding */ bindFramebufferInfo),
/* harmony export */   bindTransformFeedbackInfo: () => (/* binding */ bindTransformFeedbackInfo),
/* harmony export */   bindUniformBlock: () => (/* binding */ bindUniformBlock),
/* harmony export */   canFilter: () => (/* binding */ canFilter),
/* harmony export */   canGenerateMipmap: () => (/* binding */ canGenerateMipmap),
/* harmony export */   createAttribsFromArrays: () => (/* binding */ createAttribsFromArrays),
/* harmony export */   createAttributeSetters: () => (/* binding */ createAttributeSetters),
/* harmony export */   createBufferFromArray: () => (/* binding */ createBufferFromArray),
/* harmony export */   createBufferFromTypedArray: () => (/* binding */ createBufferFromTypedArray),
/* harmony export */   createBufferInfoFromArrays: () => (/* binding */ createBufferInfoFromArrays),
/* harmony export */   createBuffersFromArrays: () => (/* binding */ createBuffersFromArrays),
/* harmony export */   createFramebufferInfo: () => (/* binding */ createFramebufferInfo),
/* harmony export */   createProgram: () => (/* binding */ createProgram),
/* harmony export */   createProgramAsync: () => (/* binding */ createProgramAsync),
/* harmony export */   createProgramFromScripts: () => (/* binding */ createProgramFromScripts),
/* harmony export */   createProgramFromSources: () => (/* binding */ createProgramFromSources),
/* harmony export */   createProgramInfo: () => (/* binding */ createProgramInfo),
/* harmony export */   createProgramInfoAsync: () => (/* binding */ createProgramInfoAsync),
/* harmony export */   createProgramInfoFromProgram: () => (/* binding */ createProgramInfoFromProgram),
/* harmony export */   createProgramInfos: () => (/* binding */ createProgramInfos),
/* harmony export */   createProgramInfosAsync: () => (/* binding */ createProgramInfosAsync),
/* harmony export */   createPrograms: () => (/* binding */ createPrograms),
/* harmony export */   createProgramsAsync: () => (/* binding */ createProgramsAsync),
/* harmony export */   createSampler: () => (/* binding */ createSampler),
/* harmony export */   createSamplers: () => (/* binding */ createSamplers),
/* harmony export */   createTexture: () => (/* binding */ createTexture),
/* harmony export */   createTextures: () => (/* binding */ createTextures),
/* harmony export */   createTransformFeedback: () => (/* binding */ createTransformFeedback),
/* harmony export */   createTransformFeedbackInfo: () => (/* binding */ createTransformFeedbackInfo),
/* harmony export */   createUniformBlockInfo: () => (/* binding */ createUniformBlockInfo),
/* harmony export */   createUniformBlockInfoFromProgram: () => (/* binding */ createUniformBlockInfoFromProgram),
/* harmony export */   createUniformBlockSpecFromProgram: () => (/* binding */ createUniformBlockSpecFromProgram),
/* harmony export */   createUniformSetters: () => (/* binding */ createUniformSetters),
/* harmony export */   createVAOAndSetAttributes: () => (/* binding */ createVAOAndSetAttributes),
/* harmony export */   createVAOFromBufferInfo: () => (/* binding */ createVAOFromBufferInfo),
/* harmony export */   createVertexArrayInfo: () => (/* binding */ createVertexArrayInfo),
/* harmony export */   draw: () => (/* binding */ draw),
/* harmony export */   drawBufferInfo: () => (/* binding */ drawBufferInfo),
/* harmony export */   drawObjectList: () => (/* binding */ drawObjectList),
/* harmony export */   framebuffers: () => (/* binding */ framebuffers),
/* harmony export */   getArray_: () => (/* binding */ getArray$1),
/* harmony export */   getBytesPerElementForInternalFormat: () => (/* binding */ getBytesPerElementForInternalFormat),
/* harmony export */   getContext: () => (/* binding */ getContext),
/* harmony export */   getFormatAndTypeForInternalFormat: () => (/* binding */ getFormatAndTypeForInternalFormat),
/* harmony export */   getGLTypeForTypedArray: () => (/* binding */ getGLTypeForTypedArray),
/* harmony export */   getGLTypeForTypedArrayType: () => (/* binding */ getGLTypeForTypedArrayType),
/* harmony export */   getNumComponentsForFormat: () => (/* binding */ getNumComponentsForFormat),
/* harmony export */   getNumComponents_: () => (/* binding */ getNumComponents$1),
/* harmony export */   getTypedArrayTypeForGLType: () => (/* binding */ getTypedArrayTypeForGLType),
/* harmony export */   getWebGLContext: () => (/* binding */ getWebGLContext),
/* harmony export */   glEnumToString: () => (/* binding */ glEnumToString),
/* harmony export */   isArrayBuffer: () => (/* binding */ isArrayBuffer$1),
/* harmony export */   isWebGL1: () => (/* binding */ isWebGL1),
/* harmony export */   isWebGL2: () => (/* binding */ isWebGL2),
/* harmony export */   loadTextureFromUrl: () => (/* binding */ loadTextureFromUrl),
/* harmony export */   m4: () => (/* binding */ m4),
/* harmony export */   primitives: () => (/* binding */ primitives),
/* harmony export */   programs: () => (/* binding */ programs),
/* harmony export */   resizeCanvasToDisplaySize: () => (/* binding */ resizeCanvasToDisplaySize),
/* harmony export */   resizeFramebufferInfo: () => (/* binding */ resizeFramebufferInfo),
/* harmony export */   resizeTexture: () => (/* binding */ resizeTexture),
/* harmony export */   setAttribInfoBufferFromArray: () => (/* binding */ setAttribInfoBufferFromArray),
/* harmony export */   setAttributeDefaults_: () => (/* binding */ setDefaults$2),
/* harmony export */   setAttributePrefix: () => (/* binding */ setAttributePrefix),
/* harmony export */   setAttributes: () => (/* binding */ setAttributes),
/* harmony export */   setBlockUniforms: () => (/* binding */ setBlockUniforms),
/* harmony export */   setBuffersAndAttributes: () => (/* binding */ setBuffersAndAttributes),
/* harmony export */   setDefaultTextureColor: () => (/* binding */ setDefaultTextureColor),
/* harmony export */   setDefaults: () => (/* binding */ setDefaults),
/* harmony export */   setEmptyTexture: () => (/* binding */ setEmptyTexture),
/* harmony export */   setSamplerParameters: () => (/* binding */ setSamplerParameters),
/* harmony export */   setTextureDefaults_: () => (/* binding */ setDefaults$1),
/* harmony export */   setTextureFilteringForSize: () => (/* binding */ setTextureFilteringForSize),
/* harmony export */   setTextureFromArray: () => (/* binding */ setTextureFromArray),
/* harmony export */   setTextureFromElement: () => (/* binding */ setTextureFromElement),
/* harmony export */   setTextureParameters: () => (/* binding */ setTextureParameters),
/* harmony export */   setUniformBlock: () => (/* binding */ setUniformBlock),
/* harmony export */   setUniforms: () => (/* binding */ setUniforms),
/* harmony export */   setUniformsAndBindTextures: () => (/* binding */ setUniformsAndBindTextures),
/* harmony export */   textures: () => (/* binding */ textures),
/* harmony export */   typedarrays: () => (/* binding */ typedarrays),
/* harmony export */   utils: () => (/* binding */ utils),
/* harmony export */   v3: () => (/* binding */ v3),
/* harmony export */   vertexArrays: () => (/* binding */ vertexArrays)
/* harmony export */ });
/* @license twgl.js 5.5.4 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
Available via the MIT license.
see: http://github.com/greggman/twgl.js for details */
/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

/**
 *
 * Vec3 math math functions.
 *
 * Almost all functions take an optional `dst` argument. If it is not passed in the
 * functions will create a new Vec3. In other words you can do this
 *
 *     var v = v3.cross(v1, v2);  // Creates a new Vec3 with the cross product of v1 x v2.
 *
 * or
 *
 *     var v = v3.create();
 *     v3.cross(v1, v2, v);  // Puts the cross product of v1 x v2 in v
 *
 * The first style is often easier but depending on where it's used it generates garbage where
 * as there is almost never allocation with the second style.
 *
 * It is always save to pass any vector as the destination. So for example
 *
 *     v3.cross(v1, v2, v1);  // Puts the cross product of v1 x v2 in v1
 *
 * @module twgl/v3
 */

let VecType = Float32Array;

/**
 * A JavaScript array with 3 values or a Float32Array with 3 values.
 * When created by the library will create the default type which is `Float32Array`
 * but can be set by calling {@link module:twgl/v3.setDefaultType}.
 * @typedef {(number[]|Float32Array)} Vec3
 * @memberOf module:twgl/v3
 */

/**
 * Sets the type this library creates for a Vec3
 * @param {constructor} ctor the constructor for the type. Either `Float32Array` or `Array`
 * @return {constructor} previous constructor for Vec3
 * @memberOf module:twgl/v3
 */
function setDefaultType$1(ctor) {
  const oldType = VecType;
  VecType = ctor;
  return oldType;
}

/**
 * Creates a vec3; may be called with x, y, z to set initial values.
 * @param {number} [x] Initial x value.
 * @param {number} [y] Initial y value.
 * @param {number} [z] Initial z value.
 * @return {module:twgl/v3.Vec3} the created vector
 * @memberOf module:twgl/v3
 */
function create$1(x, y, z) {
  const dst = new VecType(3);
  if (x) {
    dst[0] = x;
  }
  if (y) {
    dst[1] = y;
  }
  if (z) {
    dst[2] = z;
  }
  return dst;
}

/**
 * Adds two vectors; assumes a and b have the same dimension.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} A vector tha tis the sum of a and b.
 * @memberOf module:twgl/v3
 */
function add(a, b, dst) {
  dst = dst || new VecType(3);

  dst[0] = a[0] + b[0];
  dst[1] = a[1] + b[1];
  dst[2] = a[2] + b[2];

  return dst;
}

/**
 * Subtracts two vectors.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} A vector that is the difference of a and b.
 * @memberOf module:twgl/v3
 */
function subtract(a, b, dst) {
  dst = dst || new VecType(3);

  dst[0] = a[0] - b[0];
  dst[1] = a[1] - b[1];
  dst[2] = a[2] - b[2];

  return dst;
}

/**
 * Performs linear interpolation on two vectors.
 * Given vectors a and b and interpolation coefficient t, returns
 * a + t * (b - a).
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {number} t Interpolation coefficient.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} The linear interpolated result.
 * @memberOf module:twgl/v3
 */
function lerp(a, b, t, dst) {
  dst = dst || new VecType(3);

  dst[0] = a[0] + t * (b[0] - a[0]);
  dst[1] = a[1] + t * (b[1] - a[1]);
  dst[2] = a[2] + t * (b[2] - a[2]);

  return dst;
}

/**
 * Performs linear interpolation on two vectors.
 * Given vectors a and b and interpolation coefficient vector t, returns
 * a + t * (b - a).
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} t Interpolation coefficients vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} the linear interpolated result.
 * @memberOf module:twgl/v3
 */
function lerpV(a, b, t, dst) {
  dst = dst || new VecType(3);

  dst[0] = a[0] + t[0] * (b[0] - a[0]);
  dst[1] = a[1] + t[1] * (b[1] - a[1]);
  dst[2] = a[2] + t[2] * (b[2] - a[2]);

  return dst;
}

/**
 * Return max values of two vectors.
 * Given vectors a and b returns
 * [max(a[0], b[0]), max(a[1], b[1]), max(a[2], b[2])].
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} The max components vector.
 * @memberOf module:twgl/v3
 */
function max(a, b, dst) {
  dst = dst || new VecType(3);

  dst[0] = Math.max(a[0], b[0]);
  dst[1] = Math.max(a[1], b[1]);
  dst[2] = Math.max(a[2], b[2]);

  return dst;
}

/**
 * Return min values of two vectors.
 * Given vectors a and b returns
 * [min(a[0], b[0]), min(a[1], b[1]), min(a[2], b[2])].
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} The min components vector.
 * @memberOf module:twgl/v3
 */
function min(a, b, dst) {
  dst = dst || new VecType(3);

  dst[0] = Math.min(a[0], b[0]);
  dst[1] = Math.min(a[1], b[1]);
  dst[2] = Math.min(a[2], b[2]);

  return dst;
}

/**
 * Multiplies a vector by a scalar.
 * @param {module:twgl/v3.Vec3} v The vector.
 * @param {number} k The scalar.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} The scaled vector.
 * @memberOf module:twgl/v3
 */
function mulScalar(v, k, dst) {
  dst = dst || new VecType(3);

  dst[0] = v[0] * k;
  dst[1] = v[1] * k;
  dst[2] = v[2] * k;

  return dst;
}

/**
 * Divides a vector by a scalar.
 * @param {module:twgl/v3.Vec3} v The vector.
 * @param {number} k The scalar.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} The scaled vector.
 * @memberOf module:twgl/v3
 */
function divScalar(v, k, dst) {
  dst = dst || new VecType(3);

  dst[0] = v[0] / k;
  dst[1] = v[1] / k;
  dst[2] = v[2] / k;

  return dst;
}

/**
 * Computes the cross product of two vectors; assumes both vectors have
 * three entries.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} The vector of a cross b.
 * @memberOf module:twgl/v3
 */
function cross(a, b, dst) {
  dst = dst || new VecType(3);

  const t1 = a[2] * b[0] - a[0] * b[2];
  const t2 = a[0] * b[1] - a[1] * b[0];
  dst[0] = a[1] * b[2] - a[2] * b[1];
  dst[1] = t1;
  dst[2] = t2;

  return dst;
}

/**
 * Computes the dot product of two vectors; assumes both vectors have
 * three entries.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @return {number} dot product
 * @memberOf module:twgl/v3
 */
function dot(a, b) {
  return (a[0] * b[0]) + (a[1] * b[1]) + (a[2] * b[2]);
}

/**
 * Computes the length of vector
 * @param {module:twgl/v3.Vec3} v vector.
 * @return {number} length of vector.
 * @memberOf module:twgl/v3
 */
function length$1(v) {
  return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
}

/**
 * Computes the square of the length of vector
 * @param {module:twgl/v3.Vec3} v vector.
 * @return {number} square of the length of vector.
 * @memberOf module:twgl/v3
 */
function lengthSq(v) {
  return v[0] * v[0] + v[1] * v[1] + v[2] * v[2];
}

/**
 * Computes the distance between 2 points
 * @param {module:twgl/v3.Vec3} a vector.
 * @param {module:twgl/v3.Vec3} b vector.
 * @return {number} distance between a and b
 * @memberOf module:twgl/v3
 */
function distance(a, b) {
  const dx = a[0] - b[0];
  const dy = a[1] - b[1];
  const dz = a[2] - b[2];
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

/**
 * Computes the square of the distance between 2 points
 * @param {module:twgl/v3.Vec3} a vector.
 * @param {module:twgl/v3.Vec3} b vector.
 * @return {number} square of the distance between a and b
 * @memberOf module:twgl/v3
 */
function distanceSq(a, b) {
  const dx = a[0] - b[0];
  const dy = a[1] - b[1];
  const dz = a[2] - b[2];
  return dx * dx + dy * dy + dz * dz;
}

/**
 * Divides a vector by its Euclidean length and returns the quotient.
 * @param {module:twgl/v3.Vec3} a The vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} The normalized vector.
 * @memberOf module:twgl/v3
 */
function normalize(a, dst) {
  dst = dst || new VecType(3);

  const lenSq = a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
  const len = Math.sqrt(lenSq);
  if (len > 0.00001) {
    dst[0] = a[0] / len;
    dst[1] = a[1] / len;
    dst[2] = a[2] / len;
  } else {
    dst[0] = 0;
    dst[1] = 0;
    dst[2] = 0;
  }

  return dst;
}

/**
 * Negates a vector.
 * @param {module:twgl/v3.Vec3} v The vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} -v.
 * @memberOf module:twgl/v3
 */
function negate$1(v, dst) {
  dst = dst || new VecType(3);

  dst[0] = -v[0];
  dst[1] = -v[1];
  dst[2] = -v[2];

  return dst;
}

/**
 * Copies a vector.
 * @param {module:twgl/v3.Vec3} v The vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} A copy of v.
 * @memberOf module:twgl/v3
 */
function copy$1(v, dst) {
  dst = dst || new VecType(3);

  dst[0] = v[0];
  dst[1] = v[1];
  dst[2] = v[2];

  return dst;
}

/**
 * Multiplies a vector by another vector (component-wise); assumes a and
 * b have the same length.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} The vector of products of entries of a and
 *     b.
 * @memberOf module:twgl/v3
 */
function multiply$1(a, b, dst) {
  dst = dst || new VecType(3);

  dst[0] = a[0] * b[0];
  dst[1] = a[1] * b[1];
  dst[2] = a[2] * b[2];

  return dst;
}

/**
 * Divides a vector by another vector (component-wise); assumes a and
 * b have the same length.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} The vector of quotients of entries of a and
 *     b.
 * @memberOf module:twgl/v3
 */
function divide(a, b, dst) {
  dst = dst || new VecType(3);

  dst[0] = a[0] / b[0];
  dst[1] = a[1] / b[1];
  dst[2] = a[2] / b[2];

  return dst;
}

var v3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  add: add,
  copy: copy$1,
  create: create$1,
  cross: cross,
  distance: distance,
  distanceSq: distanceSq,
  divide: divide,
  divScalar: divScalar,
  dot: dot,
  lerp: lerp,
  lerpV: lerpV,
  length: length$1,
  lengthSq: lengthSq,
  max: max,
  min: min,
  mulScalar: mulScalar,
  multiply: multiply$1,
  negate: negate$1,
  normalize: normalize,
  setDefaultType: setDefaultType$1,
  subtract: subtract
});

/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

/**
 * 4x4 Matrix math math functions.
 *
 * Almost all functions take an optional `dst` argument. If it is not passed in the
 * functions will create a new matrix. In other words you can do this
 *
 *     const mat = m4.translation([1, 2, 3]);  // Creates a new translation matrix
 *
 * or
 *
 *     const mat = m4.create();
 *     m4.translation([1, 2, 3], mat);  // Puts translation matrix in mat.
 *
 * The first style is often easier but depending on where it's used it generates garbage where
 * as there is almost never allocation with the second style.
 *
 * It is always save to pass any matrix as the destination. So for example
 *
 *     const mat = m4.identity();
 *     const trans = m4.translation([1, 2, 3]);
 *     m4.multiply(mat, trans, mat);  // Multiplies mat * trans and puts result in mat.
 *
 * @module twgl/m4
 */
let MatType = Float32Array;

/**
 * A JavaScript array with 16 values or a Float32Array with 16 values.
 * When created by the library will create the default type which is `Float32Array`
 * but can be set by calling {@link module:twgl/m4.setDefaultType}.
 * @typedef {(number[]|Float32Array)} Mat4
 * @memberOf module:twgl/m4
 */

/**
 * Sets the type this library creates for a Mat4
 * @param {constructor} ctor the constructor for the type. Either `Float32Array` or `Array`
 * @return {constructor} previous constructor for Mat4
 * @memberOf module:twgl/m4
 */
function setDefaultType(ctor) {
  const oldType = MatType;
  MatType = ctor;
  return oldType;
}

/**
 * Negates a matrix.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} -m.
 * @memberOf module:twgl/m4
 */
function negate(m, dst) {
  dst = dst || new MatType(16);

  dst[ 0] = -m[ 0];
  dst[ 1] = -m[ 1];
  dst[ 2] = -m[ 2];
  dst[ 3] = -m[ 3];
  dst[ 4] = -m[ 4];
  dst[ 5] = -m[ 5];
  dst[ 6] = -m[ 6];
  dst[ 7] = -m[ 7];
  dst[ 8] = -m[ 8];
  dst[ 9] = -m[ 9];
  dst[10] = -m[10];
  dst[11] = -m[11];
  dst[12] = -m[12];
  dst[13] = -m[13];
  dst[14] = -m[14];
  dst[15] = -m[15];

  return dst;
}

/**
 * Creates a matrix.
 * @return {module:twgl/m4.Mat4} A new matrix.
 * @memberOf module:twgl/m4
 */
function create() {
  return new MatType(16).fill(0);
}

/**
 * Copies a matrix.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/m4.Mat4} [dst] The matrix. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} A copy of m.
 * @memberOf module:twgl/m4
 */
function copy(m, dst) {
  dst = dst || new MatType(16);

  dst[ 0] = m[ 0];
  dst[ 1] = m[ 1];
  dst[ 2] = m[ 2];
  dst[ 3] = m[ 3];
  dst[ 4] = m[ 4];
  dst[ 5] = m[ 5];
  dst[ 6] = m[ 6];
  dst[ 7] = m[ 7];
  dst[ 8] = m[ 8];
  dst[ 9] = m[ 9];
  dst[10] = m[10];
  dst[11] = m[11];
  dst[12] = m[12];
  dst[13] = m[13];
  dst[14] = m[14];
  dst[15] = m[15];

  return dst;
}

/**
 * Creates an n-by-n identity matrix.
 *
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} An n-by-n identity matrix.
 * @memberOf module:twgl/m4
 */
function identity(dst) {
  dst = dst || new MatType(16);

  dst[ 0] = 1;
  dst[ 1] = 0;
  dst[ 2] = 0;
  dst[ 3] = 0;
  dst[ 4] = 0;
  dst[ 5] = 1;
  dst[ 6] = 0;
  dst[ 7] = 0;
  dst[ 8] = 0;
  dst[ 9] = 0;
  dst[10] = 1;
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;

  return dst;
}

/**
 * Takes the transpose of a matrix.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The transpose of m.
 * @memberOf module:twgl/m4
 */
 function transpose(m, dst) {
  dst = dst || new MatType(16);
  if (dst === m) {
    let t;

    t = m[1];
    m[1] = m[4];
    m[4] = t;

    t = m[2];
    m[2] = m[8];
    m[8] = t;

    t = m[3];
    m[3] = m[12];
    m[12] = t;

    t = m[6];
    m[6] = m[9];
    m[9] = t;

    t = m[7];
    m[7] = m[13];
    m[13] = t;

    t = m[11];
    m[11] = m[14];
    m[14] = t;
    return dst;
  }

  const m00 = m[0 * 4 + 0];
  const m01 = m[0 * 4 + 1];
  const m02 = m[0 * 4 + 2];
  const m03 = m[0 * 4 + 3];
  const m10 = m[1 * 4 + 0];
  const m11 = m[1 * 4 + 1];
  const m12 = m[1 * 4 + 2];
  const m13 = m[1 * 4 + 3];
  const m20 = m[2 * 4 + 0];
  const m21 = m[2 * 4 + 1];
  const m22 = m[2 * 4 + 2];
  const m23 = m[2 * 4 + 3];
  const m30 = m[3 * 4 + 0];
  const m31 = m[3 * 4 + 1];
  const m32 = m[3 * 4 + 2];
  const m33 = m[3 * 4 + 3];

  dst[ 0] = m00;
  dst[ 1] = m10;
  dst[ 2] = m20;
  dst[ 3] = m30;
  dst[ 4] = m01;
  dst[ 5] = m11;
  dst[ 6] = m21;
  dst[ 7] = m31;
  dst[ 8] = m02;
  dst[ 9] = m12;
  dst[10] = m22;
  dst[11] = m32;
  dst[12] = m03;
  dst[13] = m13;
  dst[14] = m23;
  dst[15] = m33;

  return dst;
}

/**
 * Computes the inverse of a 4-by-4 matrix.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The inverse of m.
 * @memberOf module:twgl/m4
 */
function inverse(m, dst) {
  dst = dst || new MatType(16);

  const m00 = m[0 * 4 + 0];
  const m01 = m[0 * 4 + 1];
  const m02 = m[0 * 4 + 2];
  const m03 = m[0 * 4 + 3];
  const m10 = m[1 * 4 + 0];
  const m11 = m[1 * 4 + 1];
  const m12 = m[1 * 4 + 2];
  const m13 = m[1 * 4 + 3];
  const m20 = m[2 * 4 + 0];
  const m21 = m[2 * 4 + 1];
  const m22 = m[2 * 4 + 2];
  const m23 = m[2 * 4 + 3];
  const m30 = m[3 * 4 + 0];
  const m31 = m[3 * 4 + 1];
  const m32 = m[3 * 4 + 2];
  const m33 = m[3 * 4 + 3];
  const tmp_0  = m22 * m33;
  const tmp_1  = m32 * m23;
  const tmp_2  = m12 * m33;
  const tmp_3  = m32 * m13;
  const tmp_4  = m12 * m23;
  const tmp_5  = m22 * m13;
  const tmp_6  = m02 * m33;
  const tmp_7  = m32 * m03;
  const tmp_8  = m02 * m23;
  const tmp_9  = m22 * m03;
  const tmp_10 = m02 * m13;
  const tmp_11 = m12 * m03;
  const tmp_12 = m20 * m31;
  const tmp_13 = m30 * m21;
  const tmp_14 = m10 * m31;
  const tmp_15 = m30 * m11;
  const tmp_16 = m10 * m21;
  const tmp_17 = m20 * m11;
  const tmp_18 = m00 * m31;
  const tmp_19 = m30 * m01;
  const tmp_20 = m00 * m21;
  const tmp_21 = m20 * m01;
  const tmp_22 = m00 * m11;
  const tmp_23 = m10 * m01;

  const t0 = (tmp_0 * m11 + tmp_3 * m21 + tmp_4 * m31) -
      (tmp_1 * m11 + tmp_2 * m21 + tmp_5 * m31);
  const t1 = (tmp_1 * m01 + tmp_6 * m21 + tmp_9 * m31) -
      (tmp_0 * m01 + tmp_7 * m21 + tmp_8 * m31);
  const t2 = (tmp_2 * m01 + tmp_7 * m11 + tmp_10 * m31) -
      (tmp_3 * m01 + tmp_6 * m11 + tmp_11 * m31);
  const t3 = (tmp_5 * m01 + tmp_8 * m11 + tmp_11 * m21) -
      (tmp_4 * m01 + tmp_9 * m11 + tmp_10 * m21);

  const d = 1.0 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3);

  dst[ 0] = d * t0;
  dst[ 1] = d * t1;
  dst[ 2] = d * t2;
  dst[ 3] = d * t3;
  dst[ 4] = d * ((tmp_1 * m10 + tmp_2 * m20 + tmp_5 * m30) -
          (tmp_0 * m10 + tmp_3 * m20 + tmp_4 * m30));
  dst[ 5] = d * ((tmp_0 * m00 + tmp_7 * m20 + tmp_8 * m30) -
          (tmp_1 * m00 + tmp_6 * m20 + tmp_9 * m30));
  dst[ 6] = d * ((tmp_3 * m00 + tmp_6 * m10 + tmp_11 * m30) -
          (tmp_2 * m00 + tmp_7 * m10 + tmp_10 * m30));
  dst[ 7] = d * ((tmp_4 * m00 + tmp_9 * m10 + tmp_10 * m20) -
          (tmp_5 * m00 + tmp_8 * m10 + tmp_11 * m20));
  dst[ 8] = d * ((tmp_12 * m13 + tmp_15 * m23 + tmp_16 * m33) -
          (tmp_13 * m13 + tmp_14 * m23 + tmp_17 * m33));
  dst[ 9] = d * ((tmp_13 * m03 + tmp_18 * m23 + tmp_21 * m33) -
          (tmp_12 * m03 + tmp_19 * m23 + tmp_20 * m33));
  dst[10] = d * ((tmp_14 * m03 + tmp_19 * m13 + tmp_22 * m33) -
          (tmp_15 * m03 + tmp_18 * m13 + tmp_23 * m33));
  dst[11] = d * ((tmp_17 * m03 + tmp_20 * m13 + tmp_23 * m23) -
          (tmp_16 * m03 + tmp_21 * m13 + tmp_22 * m23));
  dst[12] = d * ((tmp_14 * m22 + tmp_17 * m32 + tmp_13 * m12) -
          (tmp_16 * m32 + tmp_12 * m12 + tmp_15 * m22));
  dst[13] = d * ((tmp_20 * m32 + tmp_12 * m02 + tmp_19 * m22) -
          (tmp_18 * m22 + tmp_21 * m32 + tmp_13 * m02));
  dst[14] = d * ((tmp_18 * m12 + tmp_23 * m32 + tmp_15 * m02) -
          (tmp_22 * m32 + tmp_14 * m02 + tmp_19 * m12));
  dst[15] = d * ((tmp_22 * m22 + tmp_16 * m02 + tmp_21 * m12) -
          (tmp_20 * m12 + tmp_23 * m22 + tmp_17 * m02));

  return dst;
}

/**
 * Multiplies two 4-by-4 matrices with a on the left and b on the right
 * @param {module:twgl/m4.Mat4} a The matrix on the left.
 * @param {module:twgl/m4.Mat4} b The matrix on the right.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The matrix product of a and b.
 * @memberOf module:twgl/m4
 */
function multiply(a, b, dst) {
  dst = dst || new MatType(16);

  const a00 = a[0];
  const a01 = a[1];
  const a02 = a[2];
  const a03 = a[3];
  const a10 = a[ 4 + 0];
  const a11 = a[ 4 + 1];
  const a12 = a[ 4 + 2];
  const a13 = a[ 4 + 3];
  const a20 = a[ 8 + 0];
  const a21 = a[ 8 + 1];
  const a22 = a[ 8 + 2];
  const a23 = a[ 8 + 3];
  const a30 = a[12 + 0];
  const a31 = a[12 + 1];
  const a32 = a[12 + 2];
  const a33 = a[12 + 3];
  const b00 = b[0];
  const b01 = b[1];
  const b02 = b[2];
  const b03 = b[3];
  const b10 = b[ 4 + 0];
  const b11 = b[ 4 + 1];
  const b12 = b[ 4 + 2];
  const b13 = b[ 4 + 3];
  const b20 = b[ 8 + 0];
  const b21 = b[ 8 + 1];
  const b22 = b[ 8 + 2];
  const b23 = b[ 8 + 3];
  const b30 = b[12 + 0];
  const b31 = b[12 + 1];
  const b32 = b[12 + 2];
  const b33 = b[12 + 3];

  dst[ 0] = a00 * b00 + a10 * b01 + a20 * b02 + a30 * b03;
  dst[ 1] = a01 * b00 + a11 * b01 + a21 * b02 + a31 * b03;
  dst[ 2] = a02 * b00 + a12 * b01 + a22 * b02 + a32 * b03;
  dst[ 3] = a03 * b00 + a13 * b01 + a23 * b02 + a33 * b03;
  dst[ 4] = a00 * b10 + a10 * b11 + a20 * b12 + a30 * b13;
  dst[ 5] = a01 * b10 + a11 * b11 + a21 * b12 + a31 * b13;
  dst[ 6] = a02 * b10 + a12 * b11 + a22 * b12 + a32 * b13;
  dst[ 7] = a03 * b10 + a13 * b11 + a23 * b12 + a33 * b13;
  dst[ 8] = a00 * b20 + a10 * b21 + a20 * b22 + a30 * b23;
  dst[ 9] = a01 * b20 + a11 * b21 + a21 * b22 + a31 * b23;
  dst[10] = a02 * b20 + a12 * b21 + a22 * b22 + a32 * b23;
  dst[11] = a03 * b20 + a13 * b21 + a23 * b22 + a33 * b23;
  dst[12] = a00 * b30 + a10 * b31 + a20 * b32 + a30 * b33;
  dst[13] = a01 * b30 + a11 * b31 + a21 * b32 + a31 * b33;
  dst[14] = a02 * b30 + a12 * b31 + a22 * b32 + a32 * b33;
  dst[15] = a03 * b30 + a13 * b31 + a23 * b32 + a33 * b33;

  return dst;
}

/**
 * Sets the translation component of a 4-by-4 matrix to the given
 * vector.
 * @param {module:twgl/m4.Mat4} a The matrix.
 * @param {module:twgl/v3.Vec3} v The vector.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The matrix with translation set.
 * @memberOf module:twgl/m4
 */
function setTranslation(a, v, dst) {
  dst = dst || identity();
  if (a !== dst) {
    dst[ 0] = a[ 0];
    dst[ 1] = a[ 1];
    dst[ 2] = a[ 2];
    dst[ 3] = a[ 3];
    dst[ 4] = a[ 4];
    dst[ 5] = a[ 5];
    dst[ 6] = a[ 6];
    dst[ 7] = a[ 7];
    dst[ 8] = a[ 8];
    dst[ 9] = a[ 9];
    dst[10] = a[10];
    dst[11] = a[11];
  }
  dst[12] = v[0];
  dst[13] = v[1];
  dst[14] = v[2];
  dst[15] = 1;
  return dst;
}

/**
 * Returns the translation component of a 4-by-4 matrix as a vector with 3
 * entries.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not passed a new one is created.
 * @return {module:twgl/v3.Vec3} The translation component of m.
 * @memberOf module:twgl/m4
 */
function getTranslation(m, dst) {
  dst = dst || create$1();
  dst[0] = m[12];
  dst[1] = m[13];
  dst[2] = m[14];
  return dst;
}

/**
 * Returns an axis of a 4x4 matrix as a vector with 3 entries
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {number} axis The axis 0 = x, 1 = y, 2 = z;
 * @return {module:twgl/v3.Vec3} [dst] vector.
 * @return {module:twgl/v3.Vec3} The axis component of m.
 * @memberOf module:twgl/m4
 */
function getAxis(m, axis, dst) {
  dst = dst || create$1();
  const off = axis * 4;
  dst[0] = m[off + 0];
  dst[1] = m[off + 1];
  dst[2] = m[off + 2];
  return dst;
}

/**
 * Sets an axis of a 4x4 matrix as a vector with 3 entries
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/v3.Vec3} v the axis vector
 * @param {number} axis The axis  0 = x, 1 = y, 2 = z;
 * @param {module:twgl/m4.Mat4} [dst] The matrix to set. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The matrix with axis set.
 * @memberOf module:twgl/m4
 */
function setAxis(a, v, axis, dst) {
  if (dst !== a) {
    dst = copy(a, dst);
  }
  const off = axis * 4;
  dst[off + 0] = v[0];
  dst[off + 1] = v[1];
  dst[off + 2] = v[2];
  return dst;
}

/**
 * Computes a 4-by-4 perspective transformation matrix given the angular height
 * of the frustum, the aspect ratio, and the near and far clipping planes.  The
 * arguments define a frustum extending in the negative z direction.  The given
 * angle is the vertical angle of the frustum, and the horizontal angle is
 * determined to produce the given aspect ratio.  The arguments near and far are
 * the distances to the near and far clipping planes.  Note that near and far
 * are not z coordinates, but rather they are distances along the negative
 * z-axis.  The matrix generated sends the viewing frustum to the unit box.
 * We assume a unit box extending from -1 to 1 in the x and y dimensions and
 * from 0 to 1 in the z dimension.
 * @param {number} fieldOfViewYInRadians The camera angle from top to bottom (in radians).
 * @param {number} aspect The aspect ratio width / height.
 * @param {number} zNear The depth (negative z coordinate)
 *     of the near clipping plane.
 * @param {number} zFar The depth (negative z coordinate)
 *     of the far clipping plane.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The perspective matrix.
 * @memberOf module:twgl/m4
 */
function perspective(fieldOfViewYInRadians, aspect, zNear, zFar, dst) {
  dst = dst || new MatType(16);

  const f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewYInRadians);
  const rangeInv = 1.0 / (zNear - zFar);

  dst[0]  = f / aspect;
  dst[1]  = 0;
  dst[2]  = 0;
  dst[3]  = 0;

  dst[4]  = 0;
  dst[5]  = f;
  dst[6]  = 0;
  dst[7]  = 0;

  dst[8]  = 0;
  dst[9]  = 0;
  dst[10] = (zNear + zFar) * rangeInv;
  dst[11] = -1;

  dst[12] = 0;
  dst[13] = 0;
  dst[14] = zNear * zFar * rangeInv * 2;
  dst[15] = 0;

  return dst;
}

/**
 * Computes a 4-by-4 orthogonal transformation matrix given the left, right,
 * bottom, and top dimensions of the near clipping plane as well as the
 * near and far clipping plane distances.
 * @param {number} left Left side of the near clipping plane viewport.
 * @param {number} right Right side of the near clipping plane viewport.
 * @param {number} bottom Bottom of the near clipping plane viewport.
 * @param {number} top Top of the near clipping plane viewport.
 * @param {number} near The depth (negative z coordinate)
 *     of the near clipping plane.
 * @param {number} far The depth (negative z coordinate)
 *     of the far clipping plane.
 * @param {module:twgl/m4.Mat4} [dst] Output matrix. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The perspective matrix.
 * @memberOf module:twgl/m4
 */
function ortho(left, right, bottom, top, near, far, dst) {
  dst = dst || new MatType(16);

  dst[0]  = 2 / (right - left);
  dst[1]  = 0;
  dst[2]  = 0;
  dst[3]  = 0;

  dst[4]  = 0;
  dst[5]  = 2 / (top - bottom);
  dst[6]  = 0;
  dst[7]  = 0;

  dst[8]  = 0;
  dst[9]  = 0;
  dst[10] = 2 / (near - far);
  dst[11] = 0;

  dst[12] = (right + left) / (left - right);
  dst[13] = (top + bottom) / (bottom - top);
  dst[14] = (far + near) / (near - far);
  dst[15] = 1;

  return dst;
}

/**
 * Computes a 4-by-4 perspective transformation matrix given the left, right,
 * top, bottom, near and far clipping planes. The arguments define a frustum
 * extending in the negative z direction. The arguments near and far are the
 * distances to the near and far clipping planes. Note that near and far are not
 * z coordinates, but rather they are distances along the negative z-axis. The
 * matrix generated sends the viewing frustum to the unit box. We assume a unit
 * box extending from -1 to 1 in the x and y dimensions and from 0 to 1 in the z
 * dimension.
 * @param {number} left The x coordinate of the left plane of the box.
 * @param {number} right The x coordinate of the right plane of the box.
 * @param {number} bottom The y coordinate of the bottom plane of the box.
 * @param {number} top The y coordinate of the right plane of the box.
 * @param {number} near The negative z coordinate of the near plane of the box.
 * @param {number} far The negative z coordinate of the far plane of the box.
 * @param {module:twgl/m4.Mat4} [dst] Output matrix. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The perspective projection matrix.
 * @memberOf module:twgl/m4
 */
function frustum(left, right, bottom, top, near, far, dst) {
  dst = dst || new MatType(16);

  const dx = (right - left);
  const dy = (top - bottom);
  const dz = (near - far);

  dst[ 0] = 2 * near / dx;
  dst[ 1] = 0;
  dst[ 2] = 0;
  dst[ 3] = 0;
  dst[ 4] = 0;
  dst[ 5] = 2 * near / dy;
  dst[ 6] = 0;
  dst[ 7] = 0;
  dst[ 8] = (left + right) / dx;
  dst[ 9] = (top + bottom) / dy;
  dst[10] = far / dz;
  dst[11] = -1;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = near * far / dz;
  dst[15] = 0;

  return dst;
}

let xAxis;
let yAxis;
let zAxis;

/**
 * Computes a 4-by-4 look-at transformation.
 *
 * This is a matrix which positions the camera itself. If you want
 * a view matrix (a matrix which moves things in front of the camera)
 * take the inverse of this.
 *
 * @param {module:twgl/v3.Vec3} eye The position of the eye.
 * @param {module:twgl/v3.Vec3} target The position meant to be viewed.
 * @param {module:twgl/v3.Vec3} up A vector pointing up.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The look-at matrix.
 * @memberOf module:twgl/m4
 */
function lookAt(eye, target, up, dst) {
  dst = dst || new MatType(16);

  xAxis = xAxis || create$1();
  yAxis = yAxis || create$1();
  zAxis = zAxis || create$1();

  normalize(
      subtract(eye, target, zAxis), zAxis);
  normalize(cross(up, zAxis, xAxis), xAxis);
  normalize(cross(zAxis, xAxis, yAxis), yAxis);

  dst[ 0] = xAxis[0];
  dst[ 1] = xAxis[1];
  dst[ 2] = xAxis[2];
  dst[ 3] = 0;
  dst[ 4] = yAxis[0];
  dst[ 5] = yAxis[1];
  dst[ 6] = yAxis[2];
  dst[ 7] = 0;
  dst[ 8] = zAxis[0];
  dst[ 9] = zAxis[1];
  dst[10] = zAxis[2];
  dst[11] = 0;
  dst[12] = eye[0];
  dst[13] = eye[1];
  dst[14] = eye[2];
  dst[15] = 1;

  return dst;
}

/**
 * Creates a 4-by-4 matrix which translates by the given vector v.
 * @param {module:twgl/v3.Vec3} v The vector by
 *     which to translate.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The translation matrix.
 * @memberOf module:twgl/m4
 */
function translation(v, dst) {
  dst = dst || new MatType(16);

  dst[ 0] = 1;
  dst[ 1] = 0;
  dst[ 2] = 0;
  dst[ 3] = 0;
  dst[ 4] = 0;
  dst[ 5] = 1;
  dst[ 6] = 0;
  dst[ 7] = 0;
  dst[ 8] = 0;
  dst[ 9] = 0;
  dst[10] = 1;
  dst[11] = 0;
  dst[12] = v[0];
  dst[13] = v[1];
  dst[14] = v[2];
  dst[15] = 1;
  return dst;
}

/**
 * Translates the given 4-by-4 matrix by the given vector v.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/v3.Vec3} v The vector by
 *     which to translate.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The translated matrix.
 * @memberOf module:twgl/m4
 */
function translate(m, v, dst) {
  dst = dst || new MatType(16);

  const v0 = v[0];
  const v1 = v[1];
  const v2 = v[2];
  const m00 = m[0];
  const m01 = m[1];
  const m02 = m[2];
  const m03 = m[3];
  const m10 = m[1 * 4 + 0];
  const m11 = m[1 * 4 + 1];
  const m12 = m[1 * 4 + 2];
  const m13 = m[1 * 4 + 3];
  const m20 = m[2 * 4 + 0];
  const m21 = m[2 * 4 + 1];
  const m22 = m[2 * 4 + 2];
  const m23 = m[2 * 4 + 3];
  const m30 = m[3 * 4 + 0];
  const m31 = m[3 * 4 + 1];
  const m32 = m[3 * 4 + 2];
  const m33 = m[3 * 4 + 3];

  if (m !== dst) {
    dst[ 0] = m00;
    dst[ 1] = m01;
    dst[ 2] = m02;
    dst[ 3] = m03;
    dst[ 4] = m10;
    dst[ 5] = m11;
    dst[ 6] = m12;
    dst[ 7] = m13;
    dst[ 8] = m20;
    dst[ 9] = m21;
    dst[10] = m22;
    dst[11] = m23;
  }

  dst[12] = m00 * v0 + m10 * v1 + m20 * v2 + m30;
  dst[13] = m01 * v0 + m11 * v1 + m21 * v2 + m31;
  dst[14] = m02 * v0 + m12 * v1 + m22 * v2 + m32;
  dst[15] = m03 * v0 + m13 * v1 + m23 * v2 + m33;

  return dst;
}

/**
 * Creates a 4-by-4 matrix which rotates around the x-axis by the given angle.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The rotation matrix.
 * @memberOf module:twgl/m4
 */
function rotationX(angleInRadians, dst) {
  dst = dst || new MatType(16);

  const c = Math.cos(angleInRadians);
  const s = Math.sin(angleInRadians);

  dst[ 0] = 1;
  dst[ 1] = 0;
  dst[ 2] = 0;
  dst[ 3] = 0;
  dst[ 4] = 0;
  dst[ 5] = c;
  dst[ 6] = s;
  dst[ 7] = 0;
  dst[ 8] = 0;
  dst[ 9] = -s;
  dst[10] = c;
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;

  return dst;
}

/**
 * Rotates the given 4-by-4 matrix around the x-axis by the given
 * angle.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The rotated matrix.
 * @memberOf module:twgl/m4
 */
function rotateX(m, angleInRadians, dst) {
  dst = dst || new MatType(16);

  const m10 = m[4];
  const m11 = m[5];
  const m12 = m[6];
  const m13 = m[7];
  const m20 = m[8];
  const m21 = m[9];
  const m22 = m[10];
  const m23 = m[11];
  const c = Math.cos(angleInRadians);
  const s = Math.sin(angleInRadians);

  dst[4]  = c * m10 + s * m20;
  dst[5]  = c * m11 + s * m21;
  dst[6]  = c * m12 + s * m22;
  dst[7]  = c * m13 + s * m23;
  dst[8]  = c * m20 - s * m10;
  dst[9]  = c * m21 - s * m11;
  dst[10] = c * m22 - s * m12;
  dst[11] = c * m23 - s * m13;

  if (m !== dst) {
    dst[ 0] = m[ 0];
    dst[ 1] = m[ 1];
    dst[ 2] = m[ 2];
    dst[ 3] = m[ 3];
    dst[12] = m[12];
    dst[13] = m[13];
    dst[14] = m[14];
    dst[15] = m[15];
  }

  return dst;
}

/**
 * Creates a 4-by-4 matrix which rotates around the y-axis by the given angle.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The rotation matrix.
 * @memberOf module:twgl/m4
 */
function rotationY(angleInRadians, dst) {
  dst = dst || new MatType(16);

  const c = Math.cos(angleInRadians);
  const s = Math.sin(angleInRadians);

  dst[ 0] = c;
  dst[ 1] = 0;
  dst[ 2] = -s;
  dst[ 3] = 0;
  dst[ 4] = 0;
  dst[ 5] = 1;
  dst[ 6] = 0;
  dst[ 7] = 0;
  dst[ 8] = s;
  dst[ 9] = 0;
  dst[10] = c;
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;

  return dst;
}

/**
 * Rotates the given 4-by-4 matrix around the y-axis by the given
 * angle.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The rotated matrix.
 * @memberOf module:twgl/m4
 */
function rotateY(m, angleInRadians, dst) {
  dst = dst || new MatType(16);

  const m00 = m[0 * 4 + 0];
  const m01 = m[0 * 4 + 1];
  const m02 = m[0 * 4 + 2];
  const m03 = m[0 * 4 + 3];
  const m20 = m[2 * 4 + 0];
  const m21 = m[2 * 4 + 1];
  const m22 = m[2 * 4 + 2];
  const m23 = m[2 * 4 + 3];
  const c = Math.cos(angleInRadians);
  const s = Math.sin(angleInRadians);

  dst[ 0] = c * m00 - s * m20;
  dst[ 1] = c * m01 - s * m21;
  dst[ 2] = c * m02 - s * m22;
  dst[ 3] = c * m03 - s * m23;
  dst[ 8] = c * m20 + s * m00;
  dst[ 9] = c * m21 + s * m01;
  dst[10] = c * m22 + s * m02;
  dst[11] = c * m23 + s * m03;

  if (m !== dst) {
    dst[ 4] = m[ 4];
    dst[ 5] = m[ 5];
    dst[ 6] = m[ 6];
    dst[ 7] = m[ 7];
    dst[12] = m[12];
    dst[13] = m[13];
    dst[14] = m[14];
    dst[15] = m[15];
  }

  return dst;
}

/**
 * Creates a 4-by-4 matrix which rotates around the z-axis by the given angle.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The rotation matrix.
 * @memberOf module:twgl/m4
 */
function rotationZ(angleInRadians, dst) {
  dst = dst || new MatType(16);

  const c = Math.cos(angleInRadians);
  const s = Math.sin(angleInRadians);

  dst[ 0] = c;
  dst[ 1] = s;
  dst[ 2] = 0;
  dst[ 3] = 0;
  dst[ 4] = -s;
  dst[ 5] = c;
  dst[ 6] = 0;
  dst[ 7] = 0;
  dst[ 8] = 0;
  dst[ 9] = 0;
  dst[10] = 1;
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;

  return dst;
}

/**
 * Rotates the given 4-by-4 matrix around the z-axis by the given
 * angle.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The rotated matrix.
 * @memberOf module:twgl/m4
 */
function rotateZ(m, angleInRadians, dst) {
  dst = dst || new MatType(16);

  const m00 = m[0 * 4 + 0];
  const m01 = m[0 * 4 + 1];
  const m02 = m[0 * 4 + 2];
  const m03 = m[0 * 4 + 3];
  const m10 = m[1 * 4 + 0];
  const m11 = m[1 * 4 + 1];
  const m12 = m[1 * 4 + 2];
  const m13 = m[1 * 4 + 3];
  const c = Math.cos(angleInRadians);
  const s = Math.sin(angleInRadians);

  dst[ 0] = c * m00 + s * m10;
  dst[ 1] = c * m01 + s * m11;
  dst[ 2] = c * m02 + s * m12;
  dst[ 3] = c * m03 + s * m13;
  dst[ 4] = c * m10 - s * m00;
  dst[ 5] = c * m11 - s * m01;
  dst[ 6] = c * m12 - s * m02;
  dst[ 7] = c * m13 - s * m03;

  if (m !== dst) {
    dst[ 8] = m[ 8];
    dst[ 9] = m[ 9];
    dst[10] = m[10];
    dst[11] = m[11];
    dst[12] = m[12];
    dst[13] = m[13];
    dst[14] = m[14];
    dst[15] = m[15];
  }

  return dst;
}

/**
 * Creates a 4-by-4 matrix which rotates around the given axis by the given
 * angle.
 * @param {module:twgl/v3.Vec3} axis The axis
 *     about which to rotate.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} A matrix which rotates angle radians
 *     around the axis.
 * @memberOf module:twgl/m4
 */
function axisRotation(axis, angleInRadians, dst) {
  dst = dst || new MatType(16);

  let x = axis[0];
  let y = axis[1];
  let z = axis[2];
  const n = Math.sqrt(x * x + y * y + z * z);
  x /= n;
  y /= n;
  z /= n;
  const xx = x * x;
  const yy = y * y;
  const zz = z * z;
  const c = Math.cos(angleInRadians);
  const s = Math.sin(angleInRadians);
  const oneMinusCosine = 1 - c;

  dst[ 0] = xx + (1 - xx) * c;
  dst[ 1] = x * y * oneMinusCosine + z * s;
  dst[ 2] = x * z * oneMinusCosine - y * s;
  dst[ 3] = 0;
  dst[ 4] = x * y * oneMinusCosine - z * s;
  dst[ 5] = yy + (1 - yy) * c;
  dst[ 6] = y * z * oneMinusCosine + x * s;
  dst[ 7] = 0;
  dst[ 8] = x * z * oneMinusCosine + y * s;
  dst[ 9] = y * z * oneMinusCosine - x * s;
  dst[10] = zz + (1 - zz) * c;
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;

  return dst;
}

/**
 * Rotates the given 4-by-4 matrix around the given axis by the
 * given angle.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/v3.Vec3} axis The axis
 *     about which to rotate.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The rotated matrix.
 * @memberOf module:twgl/m4
 */
function axisRotate(m, axis, angleInRadians, dst) {
  dst = dst || new MatType(16);

  let x = axis[0];
  let y = axis[1];
  let z = axis[2];
  const n = Math.sqrt(x * x + y * y + z * z);
  x /= n;
  y /= n;
  z /= n;
  const xx = x * x;
  const yy = y * y;
  const zz = z * z;
  const c = Math.cos(angleInRadians);
  const s = Math.sin(angleInRadians);
  const oneMinusCosine = 1 - c;

  const r00 = xx + (1 - xx) * c;
  const r01 = x * y * oneMinusCosine + z * s;
  const r02 = x * z * oneMinusCosine - y * s;
  const r10 = x * y * oneMinusCosine - z * s;
  const r11 = yy + (1 - yy) * c;
  const r12 = y * z * oneMinusCosine + x * s;
  const r20 = x * z * oneMinusCosine + y * s;
  const r21 = y * z * oneMinusCosine - x * s;
  const r22 = zz + (1 - zz) * c;

  const m00 = m[0];
  const m01 = m[1];
  const m02 = m[2];
  const m03 = m[3];
  const m10 = m[4];
  const m11 = m[5];
  const m12 = m[6];
  const m13 = m[7];
  const m20 = m[8];
  const m21 = m[9];
  const m22 = m[10];
  const m23 = m[11];

  dst[ 0] = r00 * m00 + r01 * m10 + r02 * m20;
  dst[ 1] = r00 * m01 + r01 * m11 + r02 * m21;
  dst[ 2] = r00 * m02 + r01 * m12 + r02 * m22;
  dst[ 3] = r00 * m03 + r01 * m13 + r02 * m23;
  dst[ 4] = r10 * m00 + r11 * m10 + r12 * m20;
  dst[ 5] = r10 * m01 + r11 * m11 + r12 * m21;
  dst[ 6] = r10 * m02 + r11 * m12 + r12 * m22;
  dst[ 7] = r10 * m03 + r11 * m13 + r12 * m23;
  dst[ 8] = r20 * m00 + r21 * m10 + r22 * m20;
  dst[ 9] = r20 * m01 + r21 * m11 + r22 * m21;
  dst[10] = r20 * m02 + r21 * m12 + r22 * m22;
  dst[11] = r20 * m03 + r21 * m13 + r22 * m23;

  if (m !== dst) {
    dst[12] = m[12];
    dst[13] = m[13];
    dst[14] = m[14];
    dst[15] = m[15];
  }

  return dst;
}

/**
 * Creates a 4-by-4 matrix which scales in each dimension by an amount given by
 * the corresponding entry in the given vector; assumes the vector has three
 * entries.
 * @param {module:twgl/v3.Vec3} v A vector of
 *     three entries specifying the factor by which to scale in each dimension.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The scaling matrix.
 * @memberOf module:twgl/m4
 */
function scaling(v, dst) {
  dst = dst || new MatType(16);

  dst[ 0] = v[0];
  dst[ 1] = 0;
  dst[ 2] = 0;
  dst[ 3] = 0;
  dst[ 4] = 0;
  dst[ 5] = v[1];
  dst[ 6] = 0;
  dst[ 7] = 0;
  dst[ 8] = 0;
  dst[ 9] = 0;
  dst[10] = v[2];
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;

  return dst;
}

/**
 * Scales the given 4-by-4 matrix in each dimension by an amount
 * given by the corresponding entry in the given vector; assumes the vector has
 * three entries.
 * @param {module:twgl/m4.Mat4} m The matrix to be modified.
 * @param {module:twgl/v3.Vec3} v A vector of three entries specifying the
 *     factor by which to scale in each dimension.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The scaled matrix.
 * @memberOf module:twgl/m4
 */
function scale(m, v, dst) {
  dst = dst || new MatType(16);

  const v0 = v[0];
  const v1 = v[1];
  const v2 = v[2];

  dst[ 0] = v0 * m[0 * 4 + 0];
  dst[ 1] = v0 * m[0 * 4 + 1];
  dst[ 2] = v0 * m[0 * 4 + 2];
  dst[ 3] = v0 * m[0 * 4 + 3];
  dst[ 4] = v1 * m[1 * 4 + 0];
  dst[ 5] = v1 * m[1 * 4 + 1];
  dst[ 6] = v1 * m[1 * 4 + 2];
  dst[ 7] = v1 * m[1 * 4 + 3];
  dst[ 8] = v2 * m[2 * 4 + 0];
  dst[ 9] = v2 * m[2 * 4 + 1];
  dst[10] = v2 * m[2 * 4 + 2];
  dst[11] = v2 * m[2 * 4 + 3];

  if (m !== dst) {
    dst[12] = m[12];
    dst[13] = m[13];
    dst[14] = m[14];
    dst[15] = m[15];
  }

  return dst;
}

/**
 * Takes a 4-by-4 matrix and a vector with 3 entries,
 * interprets the vector as a point, transforms that point by the matrix, and
 * returns the result as a vector with 3 entries.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/v3.Vec3} v The point.
 * @param {module:twgl/v3.Vec3} [dst] optional vec3 to store result. If not passed a new one is created.
 * @return {module:twgl/v3.Vec3} The transformed point.
 * @memberOf module:twgl/m4
 */
function transformPoint(m, v, dst) {
  dst = dst || create$1();
  const v0 = v[0];
  const v1 = v[1];
  const v2 = v[2];
  const d = v0 * m[0 * 4 + 3] + v1 * m[1 * 4 + 3] + v2 * m[2 * 4 + 3] + m[3 * 4 + 3];

  dst[0] = (v0 * m[0 * 4 + 0] + v1 * m[1 * 4 + 0] + v2 * m[2 * 4 + 0] + m[3 * 4 + 0]) / d;
  dst[1] = (v0 * m[0 * 4 + 1] + v1 * m[1 * 4 + 1] + v2 * m[2 * 4 + 1] + m[3 * 4 + 1]) / d;
  dst[2] = (v0 * m[0 * 4 + 2] + v1 * m[1 * 4 + 2] + v2 * m[2 * 4 + 2] + m[3 * 4 + 2]) / d;

  return dst;
}

/**
 * Takes a 4-by-4 matrix and a vector with 3 entries, interprets the vector as a
 * direction, transforms that direction by the matrix, and returns the result;
 * assumes the transformation of 3-dimensional space represented by the matrix
 * is parallel-preserving, i.e. any combination of rotation, scaling and
 * translation, but not a perspective distortion. Returns a vector with 3
 * entries.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/v3.Vec3} v The direction.
 * @param {module:twgl/v3.Vec3} [dst] optional Vec3 to store result. If not passed a new one is created.
 * @return {module:twgl/v3.Vec3} The transformed direction.
 * @memberOf module:twgl/m4
 */
function transformDirection(m, v, dst) {
  dst = dst || create$1();

  const v0 = v[0];
  const v1 = v[1];
  const v2 = v[2];

  dst[0] = v0 * m[0 * 4 + 0] + v1 * m[1 * 4 + 0] + v2 * m[2 * 4 + 0];
  dst[1] = v0 * m[0 * 4 + 1] + v1 * m[1 * 4 + 1] + v2 * m[2 * 4 + 1];
  dst[2] = v0 * m[0 * 4 + 2] + v1 * m[1 * 4 + 2] + v2 * m[2 * 4 + 2];

  return dst;
}

/**
 * Takes a 4-by-4 matrix m and a vector v with 3 entries, interprets the vector
 * as a normal to a surface, and computes a vector which is normal upon
 * transforming that surface by the matrix. The effect of this function is the
 * same as transforming v (as a direction) by the inverse-transpose of m.  This
 * function assumes the transformation of 3-dimensional space represented by the
 * matrix is parallel-preserving, i.e. any combination of rotation, scaling and
 * translation, but not a perspective distortion.  Returns a vector with 3
 * entries.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/v3.Vec3} v The normal.
 * @param {module:twgl/v3.Vec3} [dst] The direction. If not passed a new one is created.
 * @return {module:twgl/v3.Vec3} The transformed normal.
 * @memberOf module:twgl/m4
 */
function transformNormal$1(m, v, dst) {
  dst = dst || create$1();
  const mi = inverse(m);
  const v0 = v[0];
  const v1 = v[1];
  const v2 = v[2];

  dst[0] = v0 * mi[0 * 4 + 0] + v1 * mi[0 * 4 + 1] + v2 * mi[0 * 4 + 2];
  dst[1] = v0 * mi[1 * 4 + 0] + v1 * mi[1 * 4 + 1] + v2 * mi[1 * 4 + 2];
  dst[2] = v0 * mi[2 * 4 + 0] + v1 * mi[2 * 4 + 1] + v2 * mi[2 * 4 + 2];

  return dst;
}

var m4 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  axisRotate: axisRotate,
  axisRotation: axisRotation,
  copy: copy,
  create: create,
  frustum: frustum,
  getAxis: getAxis,
  getTranslation: getTranslation,
  identity: identity,
  inverse: inverse,
  lookAt: lookAt,
  multiply: multiply,
  negate: negate,
  ortho: ortho,
  perspective: perspective,
  rotateX: rotateX,
  rotateY: rotateY,
  rotateZ: rotateZ,
  rotationX: rotationX,
  rotationY: rotationY,
  rotationZ: rotationZ,
  scale: scale,
  scaling: scaling,
  setAxis: setAxis,
  setDefaultType: setDefaultType,
  setTranslation: setTranslation,
  transformDirection: transformDirection,
  transformNormal: transformNormal$1,
  transformPoint: transformPoint,
  translate: translate,
  translation: translation,
  transpose: transpose
});

/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

/* DataType */
const BYTE$2                           = 0x1400;
const UNSIGNED_BYTE$3                  = 0x1401;
const SHORT$2                          = 0x1402;
const UNSIGNED_SHORT$3                 = 0x1403;
const INT$3                            = 0x1404;
const UNSIGNED_INT$3                   = 0x1405;
const FLOAT$3                          = 0x1406;
const UNSIGNED_SHORT_4_4_4_4$1       = 0x8033;
const UNSIGNED_SHORT_5_5_5_1$1       = 0x8034;
const UNSIGNED_SHORT_5_6_5$1         = 0x8363;
const HALF_FLOAT$1                   = 0x140B;
const UNSIGNED_INT_2_10_10_10_REV$1  = 0x8368;
const UNSIGNED_INT_10F_11F_11F_REV$1 = 0x8C3B;
const UNSIGNED_INT_5_9_9_9_REV$1     = 0x8C3E;
const FLOAT_32_UNSIGNED_INT_24_8_REV$1 = 0x8DAD;
const UNSIGNED_INT_24_8$1            = 0x84FA;

const glTypeToTypedArray = {};
{
  const tt = glTypeToTypedArray;
  tt[BYTE$2]                           = Int8Array;
  tt[UNSIGNED_BYTE$3]                  = Uint8Array;
  tt[SHORT$2]                          = Int16Array;
  tt[UNSIGNED_SHORT$3]                 = Uint16Array;
  tt[INT$3]                            = Int32Array;
  tt[UNSIGNED_INT$3]                   = Uint32Array;
  tt[FLOAT$3]                          = Float32Array;
  tt[UNSIGNED_SHORT_4_4_4_4$1]         = Uint16Array;
  tt[UNSIGNED_SHORT_5_5_5_1$1]         = Uint16Array;
  tt[UNSIGNED_SHORT_5_6_5$1]           = Uint16Array;
  tt[HALF_FLOAT$1]                     = Uint16Array;
  tt[UNSIGNED_INT_2_10_10_10_REV$1]    = Uint32Array;
  tt[UNSIGNED_INT_10F_11F_11F_REV$1]   = Uint32Array;
  tt[UNSIGNED_INT_5_9_9_9_REV$1]       = Uint32Array;
  tt[FLOAT_32_UNSIGNED_INT_24_8_REV$1] = Uint32Array;
  tt[UNSIGNED_INT_24_8$1]              = Uint32Array;
}

/**
 * Get the GL type for a typedArray
 * @param {ArrayBufferView} typedArray a typedArray
 * @return {number} the GL type for array. For example pass in an `Int8Array` and `gl.BYTE` will
 *   be returned. Pass in a `Uint32Array` and `gl.UNSIGNED_INT` will be returned
 * @memberOf module:twgl/typedArray
 */
function getGLTypeForTypedArray(typedArray) {
  if (typedArray instanceof Int8Array)         { return BYTE$2; }           // eslint-disable-line
  if (typedArray instanceof Uint8Array)        { return UNSIGNED_BYTE$3; }  // eslint-disable-line
  if (typedArray instanceof Uint8ClampedArray) { return UNSIGNED_BYTE$3; }  // eslint-disable-line
  if (typedArray instanceof Int16Array)        { return SHORT$2; }          // eslint-disable-line
  if (typedArray instanceof Uint16Array)       { return UNSIGNED_SHORT$3; } // eslint-disable-line
  if (typedArray instanceof Int32Array)        { return INT$3; }            // eslint-disable-line
  if (typedArray instanceof Uint32Array)       { return UNSIGNED_INT$3; }   // eslint-disable-line
  if (typedArray instanceof Float32Array)      { return FLOAT$3; }          // eslint-disable-line
  throw new Error('unsupported typed array type');
}

/**
 * Get the GL type for a typedArray type
 * @param {ArrayBufferView} typedArrayType a typedArray constructor
 * @return {number} the GL type for type. For example pass in `Int8Array` and `gl.BYTE` will
 *   be returned. Pass in `Uint32Array` and `gl.UNSIGNED_INT` will be returned
 * @memberOf module:twgl/typedArray
 */
function getGLTypeForTypedArrayType(typedArrayType) {
  if (typedArrayType === Int8Array)         { return BYTE$2; }           // eslint-disable-line
  if (typedArrayType === Uint8Array)        { return UNSIGNED_BYTE$3; }  // eslint-disable-line
  if (typedArrayType === Uint8ClampedArray) { return UNSIGNED_BYTE$3; }  // eslint-disable-line
  if (typedArrayType === Int16Array)        { return SHORT$2; }          // eslint-disable-line
  if (typedArrayType === Uint16Array)       { return UNSIGNED_SHORT$3; } // eslint-disable-line
  if (typedArrayType === Int32Array)        { return INT$3; }            // eslint-disable-line
  if (typedArrayType === Uint32Array)       { return UNSIGNED_INT$3; }   // eslint-disable-line
  if (typedArrayType === Float32Array)      { return FLOAT$3; }          // eslint-disable-line
  throw new Error('unsupported typed array type');
}

/**
 * Get the typed array constructor for a given GL type
 * @param {number} type the GL type. (eg: `gl.UNSIGNED_INT`)
 * @return {function} the constructor for a the corresponding typed array. (eg. `Uint32Array`).
 * @memberOf module:twgl/typedArray
 */
function getTypedArrayTypeForGLType(type) {
  const CTOR = glTypeToTypedArray[type];
  if (!CTOR) {
    throw new Error('unknown gl type');
  }
  return CTOR;
}

const isArrayBuffer$1 = typeof SharedArrayBuffer !== 'undefined'
  ? function isArrayBufferOrSharedArrayBuffer(a) {
    return a && a.buffer && (a.buffer instanceof ArrayBuffer || a.buffer instanceof SharedArrayBuffer);
  }
  : function isArrayBuffer(a) {
    return a && a.buffer && a.buffer instanceof ArrayBuffer;
  };

var typedarrays = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getGLTypeForTypedArray: getGLTypeForTypedArray,
  getGLTypeForTypedArrayType: getGLTypeForTypedArrayType,
  getTypedArrayTypeForGLType: getTypedArrayTypeForGLType,
  isArrayBuffer: isArrayBuffer$1
});

/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

/* eslint no-console: "off" */

/**
 * Copy named properties
 *
 * @param {string[]} names names of properties to copy
 * @param {object} src object to copy properties from
 * @param {object} dst object to copy properties to
 * @private
 */
function copyNamedProperties(names, src, dst) {
  names.forEach(function(name) {
    const value = src[name];
    if (value !== undefined) {
      dst[name] = value;
    }
  });
}

/**
 * Copies properties from source to dest only if a matching key is in dest
 *
 * @param {Object.<string, ?>} src the source
 * @param {Object.<string, ?>} dst the dest
 * @private
 */
function copyExistingProperties(src, dst) {
  Object.keys(dst).forEach(function(key) {
    if (dst.hasOwnProperty(key) && src.hasOwnProperty(key)) {  /* eslint no-prototype-builtins: 0 */
      dst[key] = src[key];
    }
  });
}

function error$1(...args) {
  console.error(...args);
}

function warn$1(...args) {
  console.warn(...args);
}

const isTypeWeakMaps = new Map();

function isType(object, type) {
  if (!object || typeof object !== 'object') {
    return false;
  }
  let weakMap = isTypeWeakMaps.get(type);
  if (!weakMap) {
    weakMap = new WeakMap();
    isTypeWeakMaps.set(type, weakMap);
  }
  let isOfType = weakMap.get(object);
  if (isOfType === undefined) {
    const s = Object.prototype.toString.call(object);
    isOfType = s.substring(8, s.length - 1) === type;
    weakMap.set(object, isOfType);
  }
  return isOfType;
}

function isBuffer(gl, t) {
  return typeof WebGLBuffer !== 'undefined' && isType(t, 'WebGLBuffer');
}

function isRenderbuffer(gl, t) {
  return typeof WebGLRenderbuffer !== 'undefined' && isType(t, 'WebGLRenderbuffer');
}

function isTexture(gl, t) {
  return typeof WebGLTexture !== 'undefined' && isType(t, 'WebGLTexture');
}

function isSampler(gl, t) {
  return typeof WebGLSampler !== 'undefined' && isType(t, 'WebGLSampler');
}

/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

const STATIC_DRAW                  = 0x88e4;
const ARRAY_BUFFER$1                 = 0x8892;
const ELEMENT_ARRAY_BUFFER$2         = 0x8893;
const BUFFER_SIZE                  = 0x8764;

const BYTE$1                         = 0x1400;
const UNSIGNED_BYTE$2                = 0x1401;
const SHORT$1                        = 0x1402;
const UNSIGNED_SHORT$2               = 0x1403;
const INT$2                          = 0x1404;
const UNSIGNED_INT$2                 = 0x1405;
const FLOAT$2                        = 0x1406;
const defaults$2 = {
  attribPrefix: "",
};

/**
 * Sets the default attrib prefix
 *
 * When writing shaders I prefer to name attributes with `a_`, uniforms with `u_` and varyings with `v_`
 * as it makes it clear where they came from. But, when building geometry I prefer using un-prefixed names.
 *
 * In other words I'll create arrays of geometry like this
 *
 *     var arrays = {
 *       position: ...
 *       normal: ...
 *       texcoord: ...
 *     };
 *
 * But need those mapped to attributes and my attributes start with `a_`.
 *
 * @deprecated see {@link module:twgl.setDefaults}
 * @param {string} prefix prefix for attribs
 * @memberOf module:twgl/attributes
 */
function setAttributePrefix(prefix) {
  defaults$2.attribPrefix = prefix;
}

function setDefaults$2(newDefaults) {
  copyExistingProperties(newDefaults, defaults$2);
}

function setBufferFromTypedArray(gl, type, buffer, array, drawType) {
  gl.bindBuffer(type, buffer);
  gl.bufferData(type, array, drawType || STATIC_DRAW);
}

/**
 * Given typed array creates a WebGLBuffer and copies the typed array
 * into it.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {ArrayBuffer|SharedArrayBuffer|ArrayBufferView|WebGLBuffer} typedArray the typed array. Note: If a WebGLBuffer is passed in it will just be returned. No action will be taken
 * @param {number} [type] the GL bind type for the buffer. Default = `gl.ARRAY_BUFFER`.
 * @param {number} [drawType] the GL draw type for the buffer. Default = 'gl.STATIC_DRAW`.
 * @return {WebGLBuffer} the created WebGLBuffer
 * @memberOf module:twgl/attributes
 */
function createBufferFromTypedArray(gl, typedArray, type, drawType) {
  if (isBuffer(gl, typedArray)) {
    return typedArray;
  }
  type = type || ARRAY_BUFFER$1;
  const buffer = gl.createBuffer();
  setBufferFromTypedArray(gl, type, buffer, typedArray, drawType);
  return buffer;
}

function isIndices(name) {
  return name === "indices";
}

// This is really just a guess. Though I can't really imagine using
// anything else? Maybe for some compression?
function getNormalizationForTypedArrayType(typedArrayType) {
  if (typedArrayType === Int8Array)    { return true; }  // eslint-disable-line
  if (typedArrayType === Uint8Array)   { return true; }  // eslint-disable-line
  return false;
}

function getArray$1(array) {
  return array.length ? array : array.data;
}

const texcoordRE = /coord|texture/i;
const colorRE = /color|colour/i;

function guessNumComponentsFromName(name, length) {
  let numComponents;
  if (texcoordRE.test(name)) {
    numComponents = 2;
  } else if (colorRE.test(name)) {
    numComponents = 4;
  } else {
    numComponents = 3;  // position, normals, indices ...
  }

  if (length % numComponents > 0) {
    throw new Error(`Can not guess numComponents for attribute '${name}'. Tried ${numComponents} but ${length} values is not evenly divisible by ${numComponents}. You should specify it.`);
  }

  return numComponents;
}

function getNumComponents$1(array, arrayName, numValues) {
  return array.numComponents || array.size || guessNumComponentsFromName(arrayName, numValues || getArray$1(array).length);
}

function makeTypedArray(array, name) {
  if (isArrayBuffer$1(array)) {
    return array;
  }

  if (isArrayBuffer$1(array.data)) {
    return array.data;
  }

  if (Array.isArray(array)) {
    array = {
      data: array,
    };
  }

  let Type = array.type ? typedArrayTypeFromGLTypeOrTypedArrayCtor(array.type) : undefined;
  if (!Type) {
    if (isIndices(name)) {
      Type = Uint16Array;
    } else {
      Type = Float32Array;
    }
  }
  return new Type(array.data);
}

function glTypeFromGLTypeOrTypedArrayType(glTypeOrTypedArrayCtor) {
  return typeof glTypeOrTypedArrayCtor === 'number'
      ? glTypeOrTypedArrayCtor
      : glTypeOrTypedArrayCtor ? getGLTypeForTypedArrayType(glTypeOrTypedArrayCtor) : FLOAT$2;
}

function typedArrayTypeFromGLTypeOrTypedArrayCtor(glTypeOrTypedArrayCtor) {
  return typeof glTypeOrTypedArrayCtor === 'number'
      ? getTypedArrayTypeForGLType(glTypeOrTypedArrayCtor)
      : glTypeOrTypedArrayCtor || Float32Array;
}

function attribBufferFromBuffer(gl, array/*, arrayName */) {
  return {
    buffer: array.buffer,
    numValues: 2 * 3 * 4,  // safely divided by 2, 3, 4
    type: glTypeFromGLTypeOrTypedArrayType(array.type),
    arrayType: typedArrayTypeFromGLTypeOrTypedArrayCtor(array.type),
  };
}

function attribBufferFromSize(gl, array/*, arrayName*/) {
  const numValues = array.data || array;
  const arrayType = typedArrayTypeFromGLTypeOrTypedArrayCtor(array.type);
  const numBytes = numValues * arrayType.BYTES_PER_ELEMENT;
  const buffer = gl.createBuffer();
  gl.bindBuffer(ARRAY_BUFFER$1, buffer);
  gl.bufferData(ARRAY_BUFFER$1, numBytes, array.drawType || STATIC_DRAW);
  return {
    buffer,
    numValues,
    type: getGLTypeForTypedArrayType(arrayType),
    arrayType,
  };
}

function attribBufferFromArrayLike(gl, array, arrayName) {
  const typedArray = makeTypedArray(array, arrayName);
  return {
    arrayType: typedArray.constructor,
    buffer: createBufferFromTypedArray(gl, typedArray, undefined, array.drawType),
    type: getGLTypeForTypedArray(typedArray),
    numValues: 0,
  };
}

/**
 * The info for an attribute. This is effectively just the arguments to `gl.vertexAttribPointer` plus the WebGLBuffer
 * for the attribute.
 *
 * @typedef {Object} AttribInfo
 * @property {number[]|ArrayBufferView} [value] a constant value for the attribute. Note: if this is set the attribute will be
 *    disabled and set to this constant value and all other values will be ignored.
 * @property {number} [numComponents] the number of components for this attribute.
 * @property {number} [size] synonym for `numComponents`.
 * @property {number} [type] the type of the attribute (eg. `gl.FLOAT`, `gl.UNSIGNED_BYTE`, etc...) Default = `gl.FLOAT`
 * @property {boolean} [normalize] whether or not to normalize the data. Default = false
 * @property {number} [offset] offset into buffer in bytes. Default = 0
 * @property {number} [stride] the stride in bytes per element. Default = 0
 * @property {number} [divisor] the divisor in instances. Default = 0.
 *    Requires WebGL2 or the ANGLE_instanced_arrays extension.
 *    and, if you're using WebGL1 you must have called {@link module:twgl.addExtensionsToContext}
 * @property {WebGLBuffer} buffer the buffer that contains the data for this attribute
 * @property {number} [drawType] the draw type passed to gl.bufferData. Default = gl.STATIC_DRAW
 * @memberOf module:twgl
 */

/**
 * @typedef {(Int8ArrayConstructor|Uint8ArrayConstructor|Int16ArrayConstructor|Uint16ArrayConstructor|Int32ArrayConstructor|Uint32ArrayConstructor|Float32ArrayConstructor)} TypedArrayConstructor
 */

/**
 * Use this type of array spec when TWGL can't guess the type or number of components of an array
 * @typedef {Object} FullArraySpec
 * @property {number[]|ArrayBufferView} [value] a constant value for the attribute. Note: if this is set the attribute will be
 *    disabled and set to this constant value and all other values will be ignored.
 * @property {(number|number[]|ArrayBufferView)} [data] The data of the array. A number alone becomes the number of elements of type.
 * @property {number} [numComponents] number of components for `vertexAttribPointer`. Default is based on the name of the array.
 *    If `coord` is in the name assumes `numComponents = 2`.
 *    If `color` is in the name assumes `numComponents = 4`.
 *    otherwise assumes `numComponents = 3`
 * @property {number|TypedArrayConstructor} [type] type. This is used if `data` is a JavaScript array, or `buffer` is passed in, or `data` is a number.
 *   It can either be the constructor for a typedarray. (eg. `Uint8Array`) OR a WebGL type, (eg `gl.UNSIGNED_BYTE`).
 *   For example if you want colors in a `Uint8Array` you might have a `FullArraySpec` like `{ type: gl.UNSIGNED_BYTE, data: [255,0,255,255, ...], }`.
 * @property {number} [size] synonym for `numComponents`.
 * @property {boolean} [normalize] normalize for `vertexAttribPointer`. Default is true if type is `Int8Array` or `Uint8Array` otherwise false.
 * @property {number} [stride] stride for `vertexAttribPointer`. Default = 0
 * @property {number} [offset] offset for `vertexAttribPointer`. Default = 0
 * @property {number} [divisor] divisor for `vertexAttribDivisor`. Default = 0.
 *     Requires WebGL2 or the ANGLE_instanced_arrays extension.
 *     and, if you using WebGL1 you must have called {@link module:twgl.addExtensionsToContext}
 * @property {string} [attrib] name of attribute this array maps to. Defaults to same name as array prefixed by the default attribPrefix.
 * @property {string} [name] synonym for `attrib`.
 * @property {string} [attribName] synonym for `attrib`.
 * @property {WebGLBuffer} [buffer] Buffer to use for this attribute. This lets you use your own buffer
 *    but you will need to supply `numComponents` and `type`. You can effectively pass an `AttribInfo`
 *    to provide this. Example:
 *
 *         const bufferInfo1 = twgl.createBufferInfoFromArrays(gl, {
 *           position: [1, 2, 3, ... ],
 *         });
 *         const bufferInfo2 = twgl.createBufferInfoFromArrays(gl, {
 *           position: bufferInfo1.attribs.position,  // use the same buffer from bufferInfo1
 *         });
 *
 * @property {number} [drawType] the draw type passed to gl.bufferData. Default = gl.STATIC_DRAW
 * @memberOf module:twgl
 */

/**
 * An individual array in {@link module:twgl.Arrays}
 *
 * When passed to {@link module:twgl.createBufferInfoFromArrays} if an ArraySpec is `number[]` or `ArrayBufferView`
 * the types will be guessed based on the name. `indices` will be `Uint16Array`, everything else will
 * be `Float32Array`. If an ArraySpec is a number it's the number of floats for an empty (zeroed) buffer.
 *
 * @typedef {(number|number[]|ArrayBufferView|module:twgl.FullArraySpec)} ArraySpec
 * @memberOf module:twgl
 */

/**
 * This is a JavaScript object of arrays by name. The names should match your shader's attributes. If your
 * attributes have a common prefix you can specify it by calling {@link module:twgl.setAttributePrefix}.
 *
 *     Bare JavaScript Arrays
 *
 *         var arrays = {
 *            position: [-1, 1, 0],
 *            normal: [0, 1, 0],
 *            ...
 *         }
 *
 *     Bare TypedArrays
 *
 *         var arrays = {
 *            position: new Float32Array([-1, 1, 0]),
 *            color: new Uint8Array([255, 128, 64, 255]),
 *            ...
 *         }
 *
 * *   Will guess at `numComponents` if not specified based on name.
 *
 *     If `coord` is in the name assumes `numComponents = 2`
 *
 *     If `color` is in the name assumes `numComponents = 4`
 *
 *     otherwise assumes `numComponents = 3`
 *
 * Objects with various fields. See {@link module:twgl.FullArraySpec}.
 *
 *     var arrays = {
 *       position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
 *       texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
 *       normal:   { numComponents: 3, data: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],     },
 *       indices:  { numComponents: 3, data: [0, 1, 2, 1, 2, 3],                       },
 *     };
 *
 * @typedef {Object.<string, module:twgl.ArraySpec>} Arrays
 * @memberOf module:twgl
 */


/**
 * Creates a set of attribute data and WebGLBuffers from set of arrays
 *
 * Given
 *
 *      var arrays = {
 *        position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
 *        texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
 *        normal:   { numComponents: 3, data: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],     },
 *        color:    { numComponents: 4, data: [255, 255, 255, 255, 255, 0, 0, 255, 0, 0, 255, 255], type: Uint8Array, },
 *        indices:  { numComponents: 3, data: [0, 1, 2, 1, 2, 3],                       },
 *      };
 *
 * returns something like
 *
 *      var attribs = {
 *        position: { numComponents: 3, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
 *        texcoord: { numComponents: 2, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
 *        normal:   { numComponents: 3, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
 *        color:    { numComponents: 4, type: gl.UNSIGNED_BYTE, normalize: true,  buffer: WebGLBuffer, },
 *      };
 *
 * notes:
 *
 * *   Arrays can take various forms
 *
 *     Bare JavaScript Arrays
 *
 *         var arrays = {
 *            position: [-1, 1, 0],
 *            normal: [0, 1, 0],
 *            ...
 *         }
 *
 *     Bare TypedArrays
 *
 *         var arrays = {
 *            position: new Float32Array([-1, 1, 0]),
 *            color: new Uint8Array([255, 128, 64, 255]),
 *            ...
 *         }
 *
 * *   Will guess at `numComponents` if not specified based on name.
 *
 *     If `coord` is in the name assumes `numComponents = 2`
 *
 *     If `color` is in the name assumes `numComponents = 4`
 *
 *     otherwise assumes `numComponents = 3`
 *
 * @param {WebGLRenderingContext} gl The webgl rendering context.
 * @param {module:twgl.Arrays} arrays The arrays
 * @param {module:twgl.BufferInfo} [srcBufferInfo] a BufferInfo to copy from
 *   This lets you share buffers. Any arrays you supply will override
 *   the buffers from srcBufferInfo.
 * @return {Object.<string, module:twgl.AttribInfo>} the attribs
 * @memberOf module:twgl/attributes
 */
function createAttribsFromArrays(gl, arrays) {
  const attribs = {};
  Object.keys(arrays).forEach(function(arrayName) {
    if (!isIndices(arrayName)) {
      const array = arrays[arrayName];
      const attribName = array.attrib || array.name || array.attribName || (defaults$2.attribPrefix + arrayName);
      if (array.value) {
        if (!Array.isArray(array.value) && !isArrayBuffer$1(array.value)) {
          throw new Error('array.value is not array or typedarray');
        }
        attribs[attribName] = {
          value: array.value,
        };
      } else {
        let fn;
        if (array.buffer && array.buffer instanceof WebGLBuffer) {
          fn = attribBufferFromBuffer;
        } else if (typeof array === "number" || typeof array.data === "number") {
          fn = attribBufferFromSize;
        } else {
          fn = attribBufferFromArrayLike;
        }
        const {buffer, type, numValues, arrayType} = fn(gl, array, arrayName);
        const normalization = array.normalize !== undefined ? array.normalize : getNormalizationForTypedArrayType(arrayType);
        const numComponents = getNumComponents$1(array, arrayName, numValues);
        attribs[attribName] = {
          buffer:        buffer,
          numComponents: numComponents,
          type:          type,
          normalize:     normalization,
          stride:        array.stride || 0,
          offset:        array.offset || 0,
          divisor:       array.divisor === undefined ? undefined : array.divisor,
          drawType:      array.drawType,
        };
      }
    }
  });
  gl.bindBuffer(ARRAY_BUFFER$1, null);
  return attribs;
}

/**
 * Sets the contents of a buffer attached to an attribInfo
 *
 * This is helper function to dynamically update a buffer.
 *
 * Let's say you make a bufferInfo
 *
 *     var arrays = {
 *        position: new Float32Array([0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0]),
 *        texcoord: new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]),
 *        normal:   new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]),
 *        indices:  new Uint16Array([0, 1, 2, 1, 2, 3]),
 *     };
 *     var bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);
 *
 *  And you want to dynamically update the positions. You could do this
 *
 *     // assuming arrays.position has already been updated with new data.
 *     twgl.setAttribInfoBufferFromArray(gl, bufferInfo.attribs.position, arrays.position);
 *
 * @param {WebGLRenderingContext} gl
 * @param {AttribInfo} attribInfo The attribInfo who's buffer contents to set. NOTE: If you have an attribute prefix
 *   the name of the attribute will include the prefix.
 * @param {ArraySpec} array Note: it is arguably inefficient to pass in anything but a typed array because anything
 *    else will have to be converted to a typed array before it can be used by WebGL. During init time that
 *    inefficiency is usually not important but if you're updating data dynamically best to be efficient.
 * @param {number} [offset] an optional offset into the buffer. This is only an offset into the WebGL buffer
 *    not the array. To pass in an offset into the array itself use a typed array and create an `ArrayBufferView`
 *    for the portion of the array you want to use.
 *
 *        var someArray = new Float32Array(1000); // an array with 1000 floats
 *        var someSubArray = new Float32Array(someArray.buffer, offsetInBytes, sizeInUnits); // a view into someArray
 *
 *    Now you can pass `someSubArray` into setAttribInfoBufferFromArray`
 * @memberOf module:twgl/attributes
 */
function setAttribInfoBufferFromArray(gl, attribInfo, array, offset) {
  array = makeTypedArray(array);
  if (offset !== undefined) {
    gl.bindBuffer(ARRAY_BUFFER$1, attribInfo.buffer);
    gl.bufferSubData(ARRAY_BUFFER$1, offset, array);
  } else {
    setBufferFromTypedArray(gl, ARRAY_BUFFER$1, attribInfo.buffer, array, attribInfo.drawType);
  }
}

function getBytesPerValueForGLType(gl, type) {
  if (type === BYTE$1)           return 1;  // eslint-disable-line
  if (type === UNSIGNED_BYTE$2)  return 1;  // eslint-disable-line
  if (type === SHORT$1)          return 2;  // eslint-disable-line
  if (type === UNSIGNED_SHORT$2) return 2;  // eslint-disable-line
  if (type === INT$2)            return 4;  // eslint-disable-line
  if (type === UNSIGNED_INT$2)   return 4;  // eslint-disable-line
  if (type === FLOAT$2)          return 4;  // eslint-disable-line
  return 0;
}

// Tries to get the number of elements from a set of arrays.
const positionKeys = ['position', 'positions', 'a_position'];
function getNumElementsFromNonIndexedArrays(arrays) {
  let key;
  let ii;
  for (ii = 0; ii < positionKeys.length; ++ii) {
    key = positionKeys[ii];
    if (key in arrays) {
      break;
    }
  }
  if (ii === positionKeys.length) {
    key = Object.keys(arrays)[0];
  }
  const array = arrays[key];
  const length = getArray$1(array).length;
  if (length === undefined) {
    return 1;   // There's no arrays
  }
  const numComponents = getNumComponents$1(array, key);
  const numElements = length / numComponents;
  if (length % numComponents > 0) {
    throw new Error(`numComponents ${numComponents} not correct for length ${length}`);
  }
  return numElements;
}

function getNumElementsFromAttributes(gl, attribs) {
  let key;
  let ii;
  for (ii = 0; ii < positionKeys.length; ++ii) {
    key = positionKeys[ii];
    if (key in attribs) {
      break;
    }
    key = defaults$2.attribPrefix + key;
    if (key in attribs) {
      break;
    }
  }
  if (ii === positionKeys.length) {
    key = Object.keys(attribs)[0];
  }
  const attrib = attribs[key];
  if (!attrib.buffer) {
    return 1; // There's no buffer
  }
  gl.bindBuffer(ARRAY_BUFFER$1, attrib.buffer);
  const numBytes = gl.getBufferParameter(ARRAY_BUFFER$1, BUFFER_SIZE);
  gl.bindBuffer(ARRAY_BUFFER$1, null);

  const bytesPerValue = getBytesPerValueForGLType(gl, attrib.type);
  const totalElements = numBytes / bytesPerValue;
  const numComponents = attrib.numComponents || attrib.size;
  // TODO: check stride
  const numElements = totalElements / numComponents;
  if (numElements % 1 !== 0) {
    throw new Error(`numComponents ${numComponents} not correct for length ${length}`);
  }
  return numElements;
}

/**
 * @typedef {Object} BufferInfo
 * @property {number} numElements The number of elements to pass to `gl.drawArrays` or `gl.drawElements`.
 * @property {number} [elementType] The type of indices `UNSIGNED_BYTE`, `UNSIGNED_SHORT` etc..
 * @property {WebGLBuffer} [indices] The indices `ELEMENT_ARRAY_BUFFER` if any indices exist.
 * @property {Object.<string, module:twgl.AttribInfo>} [attribs] The attribs appropriate to call `setAttributes`
 * @memberOf module:twgl
 */

/**
 * Creates a BufferInfo from an object of arrays.
 *
 * This can be passed to {@link module:twgl.setBuffersAndAttributes} and to
 * {@link module:twgl:drawBufferInfo}.
 *
 * Given an object like
 *
 *     var arrays = {
 *       position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
 *       texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
 *       normal:   { numComponents: 3, data: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],     },
 *       indices:  { numComponents: 3, data: [0, 1, 2, 1, 2, 3],                       },
 *     };
 *
 *  Creates an BufferInfo like this
 *
 *     bufferInfo = {
 *       numElements: 4,        // or whatever the number of elements is
 *       indices: WebGLBuffer,  // this property will not exist if there are no indices
 *       attribs: {
 *         position: { buffer: WebGLBuffer, numComponents: 3, },
 *         normal:   { buffer: WebGLBuffer, numComponents: 3, },
 *         texcoord: { buffer: WebGLBuffer, numComponents: 2, },
 *       },
 *     };
 *
 *  The properties of arrays can be JavaScript arrays in which case the number of components
 *  will be guessed.
 *
 *     var arrays = {
 *        position: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0],
 *        texcoord: [0, 0, 0, 1, 1, 0, 1, 1],
 *        normal:   [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
 *        indices:  [0, 1, 2, 1, 2, 3],
 *     };
 *
 *  They can also be TypedArrays
 *
 *     var arrays = {
 *        position: new Float32Array([0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0]),
 *        texcoord: new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]),
 *        normal:   new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]),
 *        indices:  new Uint16Array([0, 1, 2, 1, 2, 3]),
 *     };
 *
 *  Or AugmentedTypedArrays
 *
 *     var positions = createAugmentedTypedArray(3, 4);
 *     var texcoords = createAugmentedTypedArray(2, 4);
 *     var normals   = createAugmentedTypedArray(3, 4);
 *     var indices   = createAugmentedTypedArray(3, 2, Uint16Array);
 *
 *     positions.push([0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0]);
 *     texcoords.push([0, 0, 0, 1, 1, 0, 1, 1]);
 *     normals.push([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]);
 *     indices.push([0, 1, 2, 1, 2, 3]);
 *
 *     var arrays = {
 *        position: positions,
 *        texcoord: texcoords,
 *        normal:   normals,
 *        indices:  indices,
 *     };
 *
 * For the last example it is equivalent to
 *
 *     var bufferInfo = {
 *       attribs: {
 *         position: { numComponents: 3, buffer: gl.createBuffer(), },
 *         texcoord: { numComponents: 2, buffer: gl.createBuffer(), },
 *         normal: { numComponents: 3, buffer: gl.createBuffer(), },
 *       },
 *       indices: gl.createBuffer(),
 *       numElements: 6,
 *     };
 *
 *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.position.buffer);
 *     gl.bufferData(gl.ARRAY_BUFFER, arrays.position, gl.STATIC_DRAW);
 *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.texcoord.buffer);
 *     gl.bufferData(gl.ARRAY_BUFFER, arrays.texcoord, gl.STATIC_DRAW);
 *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.normal.buffer);
 *     gl.bufferData(gl.ARRAY_BUFFER, arrays.normal, gl.STATIC_DRAW);
 *     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bufferInfo.indices);
 *     gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, arrays.indices, gl.STATIC_DRAW);
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {module:twgl.Arrays} arrays Your data
 * @param {module:twgl.BufferInfo} [srcBufferInfo] An existing
 *        buffer info to start from. WebGLBuffers etc specified
 *        in the srcBufferInfo will be used in a new BufferInfo
 *        with any arrays specified overriding the ones in
 *        srcBufferInfo.
 * @return {module:twgl.BufferInfo} A BufferInfo
 * @memberOf module:twgl/attributes
 */
function createBufferInfoFromArrays(gl, arrays, srcBufferInfo) {
  const newAttribs = createAttribsFromArrays(gl, arrays);
  const bufferInfo = Object.assign({}, srcBufferInfo ? srcBufferInfo : {});
  bufferInfo.attribs = Object.assign({}, srcBufferInfo ? srcBufferInfo.attribs : {}, newAttribs);
  const indices = arrays.indices;
  if (indices) {
    const newIndices = makeTypedArray(indices, "indices");
    bufferInfo.indices = createBufferFromTypedArray(gl, newIndices, ELEMENT_ARRAY_BUFFER$2);
    bufferInfo.numElements = newIndices.length;
    bufferInfo.elementType = getGLTypeForTypedArray(newIndices);
  } else if (!bufferInfo.numElements) {
    bufferInfo.numElements = getNumElementsFromAttributes(gl, bufferInfo.attribs);
  }

  return bufferInfo;
}

/**
 * Creates a buffer from an array, typed array, or array spec
 *
 * Given something like this
 *
 *     [1, 2, 3],
 *
 * or
 *
 *     new Uint16Array([1,2,3]);
 *
 * or
 *
 *     {
 *        data: [1, 2, 3],
 *        type: Uint8Array,
 *     }
 *
 * returns a WebGLBuffer that contains the given data.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext.
 * @param {module:twgl.ArraySpec} array an array, typed array, or array spec.
 * @param {string} arrayName name of array. Used to guess the type if type can not be derived otherwise.
 * @return {WebGLBuffer} a WebGLBuffer containing the data in array.
 * @memberOf module:twgl/attributes
 */
function createBufferFromArray(gl, array, arrayName) {
  const type = arrayName === "indices" ? ELEMENT_ARRAY_BUFFER$2 : ARRAY_BUFFER$1;
  const typedArray = makeTypedArray(array, arrayName);
  return createBufferFromTypedArray(gl, typedArray, type);
}

/**
 * Creates buffers from arrays or typed arrays
 *
 * Given something like this
 *
 *     var arrays = {
 *        positions: [1, 2, 3],
 *        normals: [0, 0, 1],
 *     }
 *
 * returns something like
 *
 *     buffers = {
 *       positions: WebGLBuffer,
 *       normals: WebGLBuffer,
 *     }
 *
 * If the buffer is named 'indices' it will be made an ELEMENT_ARRAY_BUFFER.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext.
 * @param {module:twgl.Arrays} arrays
 * @return {Object<string, WebGLBuffer>} returns an object with one WebGLBuffer per array
 * @memberOf module:twgl/attributes
 */
function createBuffersFromArrays(gl, arrays) {
  const buffers = { };
  Object.keys(arrays).forEach(function(key) {
    buffers[key] = createBufferFromArray(gl, arrays[key], key);
  });

  // Ugh!
  if (arrays.indices) {
    buffers.numElements = arrays.indices.length;
    buffers.elementType = getGLTypeForTypedArray(makeTypedArray(arrays.indices));
  } else {
    buffers.numElements = getNumElementsFromNonIndexedArrays(arrays);
  }

  return buffers;
}

var attributes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  createAttribsFromArrays: createAttribsFromArrays,
  createBuffersFromArrays: createBuffersFromArrays,
  createBufferFromArray: createBufferFromArray,
  createBufferFromTypedArray: createBufferFromTypedArray,
  createBufferInfoFromArrays: createBufferInfoFromArrays,
  setAttribInfoBufferFromArray: setAttribInfoBufferFromArray,
  setAttributePrefix: setAttributePrefix,
  setAttributeDefaults_: setDefaults$2,
  getNumComponents_: getNumComponents$1,
  getArray_: getArray$1
});

/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

const getArray = getArray$1;  // eslint-disable-line
const getNumComponents = getNumComponents$1;  // eslint-disable-line

/**
 * @typedef {(Int8Array|Uint8Array|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array)} TypedArray
 */

/**
 * Add `push` to a typed array. It just keeps a 'cursor'
 * and allows use to `push` values into the array so we
 * don't have to manually compute offsets
 * @param {TypedArray} typedArray TypedArray to augment
 * @param {number} numComponents number of components.
 * @private
 */
function augmentTypedArray(typedArray, numComponents) {
  let cursor = 0;
  typedArray.push = function() {
    for (let ii = 0; ii < arguments.length; ++ii) {
      const value = arguments[ii];
      if (value instanceof Array || isArrayBuffer$1(value)) {
        for (let jj = 0; jj < value.length; ++jj) {
          typedArray[cursor++] = value[jj];
        }
      } else {
        typedArray[cursor++] = value;
      }
    }
  };
  typedArray.reset = function(opt_index) {
    cursor = opt_index || 0;
  };
  typedArray.numComponents = numComponents;
  Object.defineProperty(typedArray, 'numElements', {
    get: function() {
      return this.length / this.numComponents | 0;
    },
  });
  return typedArray;
}

/**
 * creates a typed array with a `push` function attached
 * so that you can easily *push* values.
 *
 * `push` can take multiple arguments. If an argument is an array each element
 * of the array will be added to the typed array.
 *
 * Example:
 *
 *     const array = createAugmentedTypedArray(3, 2);  // creates a Float32Array with 6 values
 *     array.push(1, 2, 3);
 *     array.push([4, 5, 6]);
 *     // array now contains [1, 2, 3, 4, 5, 6]
 *
 * Also has `numComponents` and `numElements` properties.
 *
 * @param {number} numComponents number of components
 * @param {number} numElements number of elements. The total size of the array will be `numComponents * numElements`.
 * @param {constructor} opt_type A constructor for the type. Default = `Float32Array`.
 * @return {ArrayBufferView} A typed array.
 * @memberOf module:twgl/primitives
 */
function createAugmentedTypedArray(numComponents, numElements, opt_type) {
  const Type = opt_type || Float32Array;
  return augmentTypedArray(new Type(numComponents * numElements), numComponents);
}

function allButIndices(name) {
  return name !== "indices";
}

/**
 * Given indexed vertices creates a new set of vertices un-indexed by expanding the indexed vertices.
 * @param {Object.<string, TypedArray>} vertices The indexed vertices to deindex
 * @return {Object.<string, TypedArray>} The deindexed vertices
 * @memberOf module:twgl/primitives
 */
function deindexVertices(vertices) {
  const indices = vertices.indices;
  const newVertices = {};
  const numElements = indices.length;

  function expandToUnindexed(channel) {
    const srcBuffer = vertices[channel];
    const numComponents = srcBuffer.numComponents;
    const dstBuffer = createAugmentedTypedArray(numComponents, numElements, srcBuffer.constructor);
    for (let ii = 0; ii < numElements; ++ii) {
      const ndx = indices[ii];
      const offset = ndx * numComponents;
      for (let jj = 0; jj < numComponents; ++jj) {
        dstBuffer.push(srcBuffer[offset + jj]);
      }
    }
    newVertices[channel] = dstBuffer;
  }

  Object.keys(vertices).filter(allButIndices).forEach(expandToUnindexed);

  return newVertices;
}

/**
 * flattens the normals of deindexed vertices in place.
 * @param {Object.<string, TypedArray>} vertices The deindexed vertices who's normals to flatten
 * @return {Object.<string, TypedArray>} The flattened vertices (same as was passed in)
 * @memberOf module:twgl/primitives
 */
function flattenNormals(vertices) {
  if (vertices.indices) {
    throw new Error('can not flatten normals of indexed vertices. deindex them first');
  }

  const normals = vertices.normal;
  const numNormals = normals.length;
  for (let ii = 0; ii < numNormals; ii += 9) {
    // pull out the 3 normals for this triangle
    const nax = normals[ii + 0];
    const nay = normals[ii + 1];
    const naz = normals[ii + 2];

    const nbx = normals[ii + 3];
    const nby = normals[ii + 4];
    const nbz = normals[ii + 5];

    const ncx = normals[ii + 6];
    const ncy = normals[ii + 7];
    const ncz = normals[ii + 8];

    // add them
    let nx = nax + nbx + ncx;
    let ny = nay + nby + ncy;
    let nz = naz + nbz + ncz;

    // normalize them
    const length = Math.sqrt(nx * nx + ny * ny + nz * nz);

    nx /= length;
    ny /= length;
    nz /= length;

    // copy them back in
    normals[ii + 0] = nx;
    normals[ii + 1] = ny;
    normals[ii + 2] = nz;

    normals[ii + 3] = nx;
    normals[ii + 4] = ny;
    normals[ii + 5] = nz;

    normals[ii + 6] = nx;
    normals[ii + 7] = ny;
    normals[ii + 8] = nz;
  }

  return vertices;
}

function applyFuncToV3Array(array, matrix, fn) {
  const len = array.length;
  const tmp = new Float32Array(3);
  for (let ii = 0; ii < len; ii += 3) {
    fn(matrix, [array[ii], array[ii + 1], array[ii + 2]], tmp);
    array[ii    ] = tmp[0];
    array[ii + 1] = tmp[1];
    array[ii + 2] = tmp[2];
  }
}

function transformNormal(mi, v, dst) {
  dst = dst || create$1();
  const v0 = v[0];
  const v1 = v[1];
  const v2 = v[2];

  dst[0] = v0 * mi[0 * 4 + 0] + v1 * mi[0 * 4 + 1] + v2 * mi[0 * 4 + 2];
  dst[1] = v0 * mi[1 * 4 + 0] + v1 * mi[1 * 4 + 1] + v2 * mi[1 * 4 + 2];
  dst[2] = v0 * mi[2 * 4 + 0] + v1 * mi[2 * 4 + 1] + v2 * mi[2 * 4 + 2];

  return dst;
}

/**
 * Reorients directions by the given matrix..
 * @param {(number[]|TypedArray)} array The array. Assumes value floats per element.
 * @param {module:twgl/m4.Mat4} matrix A matrix to multiply by.
 * @return {(number[]|TypedArray)} the same array that was passed in
 * @memberOf module:twgl/primitives
 */
function reorientDirections(array, matrix) {
  applyFuncToV3Array(array, matrix, transformDirection);
  return array;
}

/**
 * Reorients normals by the inverse-transpose of the given
 * matrix..
 * @param {(number[]|TypedArray)} array The array. Assumes value floats per element.
 * @param {module:twgl/m4.Mat4} matrix A matrix to multiply by.
 * @return {(number[]|TypedArray)} the same array that was passed in
 * @memberOf module:twgl/primitives
 */
function reorientNormals(array, matrix) {
  applyFuncToV3Array(array, inverse(matrix), transformNormal);
  return array;
}

/**
 * Reorients positions by the given matrix. In other words, it
 * multiplies each vertex by the given matrix.
 * @param {(number[]|TypedArray)} array The array. Assumes value floats per element.
 * @param {module:twgl/m4.Mat4} matrix A matrix to multiply by.
 * @return {(number[]|TypedArray)} the same array that was passed in
 * @memberOf module:twgl/primitives
 */
function reorientPositions(array, matrix) {
  applyFuncToV3Array(array, matrix, transformPoint);
  return array;
}

/**
 * @typedef {(number[]|TypedArray)} NativeArrayOrTypedArray
 */

/**
 * Reorients arrays by the given matrix. Assumes arrays have
 * names that contains 'pos' could be reoriented as positions,
 * 'binorm' or 'tan' as directions, and 'norm' as normals.
 *
 * @param {Object.<string, NativeArrayOrTypedArray>} arrays The vertices to reorient
 * @param {module:twgl/m4.Mat4} matrix matrix to reorient by.
 * @return {Object.<string, NativeArrayOrTypedArray>} same arrays that were passed in.
 * @memberOf module:twgl/primitives
 */
function reorientVertices(arrays, matrix) {
  Object.keys(arrays).forEach(function(name) {
    const array = arrays[name];
    if (name.indexOf("pos") >= 0) {
      reorientPositions(array, matrix);
    } else if (name.indexOf("tan") >= 0 || name.indexOf("binorm") >= 0) {
      reorientDirections(array, matrix);
    } else if (name.indexOf("norm") >= 0) {
      reorientNormals(array, matrix);
    }
  });
  return arrays;
}

/**
 * Creates XY quad BufferInfo
 *
 * The default with no parameters will return a 2x2 quad with values from -1 to +1.
 * If you want a unit quad with that goes from 0 to 1 you'd call it with
 *
 *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0.5, 0.5);
 *
 * If you want a unit quad centered above 0,0 you'd call it with
 *
 *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0, 0.5);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [size] the size across the quad. Defaults to 2 which means vertices will go from -1 to +1
 * @param {number} [xOffset] the amount to offset the quad in X
 * @param {number} [yOffset] the amount to offset the quad in Y
 * @return {Object.<string, WebGLBuffer>} the created XY Quad BufferInfo
 * @memberOf module:twgl/primitives
 * @function createXYQuadBuffers
 */

/**
 * Creates XY quad Buffers
 *
 * The default with no parameters will return a 2x2 quad with values from -1 to +1.
 * If you want a unit quad with that goes from 0 to 1 you'd call it with
 *
 *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0.5, 0.5);
 *
 * If you want a unit quad centered above 0,0 you'd call it with
 *
 *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0, 0.5);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [size] the size across the quad. Defaults to 2 which means vertices will go from -1 to +1
 * @param {number} [xOffset] the amount to offset the quad in X
 * @param {number} [yOffset] the amount to offset the quad in Y
 * @return {module:twgl.BufferInfo} the created XY Quad buffers
 * @memberOf module:twgl/primitives
 * @function createXYQuadBufferInfo
 */

/**
 * Creates XY quad vertices
 *
 * The default with no parameters will return a 2x2 quad with values from -1 to +1.
 * If you want a unit quad with that goes from 0 to 1 you'd call it with
 *
 *     twgl.primitives.createXYQuadVertices(1, 0.5, 0.5);
 *
 * If you want a unit quad centered above 0,0 you'd call it with
 *
 *     twgl.primitives.createXYQuadVertices(1, 0, 0.5);
 *
 * @param {number} [size] the size across the quad. Defaults to 2 which means vertices will go from -1 to +1
 * @param {number} [xOffset] the amount to offset the quad in X
 * @param {number} [yOffset] the amount to offset the quad in Y
 * @return {Object.<string, TypedArray>} the created XY Quad vertices
 * @memberOf module:twgl/primitives
 */
function createXYQuadVertices(size, xOffset, yOffset) {
  size = size || 2;
  xOffset = xOffset || 0;
  yOffset = yOffset || 0;
  size *= 0.5;
  return {
    position: {
      numComponents: 2,
      data: [
        xOffset + -1 * size, yOffset + -1 * size,
        xOffset +  1 * size, yOffset + -1 * size,
        xOffset + -1 * size, yOffset +  1 * size,
        xOffset +  1 * size, yOffset +  1 * size,
      ],
    },
    normal: [
      0, 0, 1,
      0, 0, 1,
      0, 0, 1,
      0, 0, 1,
    ],
    texcoord: [
      0, 0,
      1, 0,
      0, 1,
      1, 1,
    ],
    indices: [ 0, 1, 2, 2, 1, 3 ],
  };
}

/**
 * Creates XZ plane BufferInfo.
 *
 * The created plane has position, normal, and texcoord data
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [width] Width of the plane. Default = 1
 * @param {number} [depth] Depth of the plane. Default = 1
 * @param {number} [subdivisionsWidth] Number of steps across the plane. Default = 1
 * @param {number} [subdivisionsDepth] Number of steps down the plane. Default = 1
 * @param {module:twgl/m4.Mat4} [matrix] A matrix by which to multiply all the vertices.
 * @return {module:twgl.BufferInfo} The created plane BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createPlaneBufferInfo
 */

/**
 * Creates XZ plane buffers.
 *
 * The created plane has position, normal, and texcoord data
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [width] Width of the plane. Default = 1
 * @param {number} [depth] Depth of the plane. Default = 1
 * @param {number} [subdivisionsWidth] Number of steps across the plane. Default = 1
 * @param {number} [subdivisionsDepth] Number of steps down the plane. Default = 1
 * @param {module:twgl/m4.Mat4} [matrix] A matrix by which to multiply all the vertices.
 * @return {Object.<string, WebGLBuffer>} The created plane buffers.
 * @memberOf module:twgl/primitives
 * @function createPlaneBuffers
 */

/**
 * Creates XZ plane vertices.
 *
 * The created plane has position, normal, and texcoord data
 *
 * @param {number} [width] Width of the plane. Default = 1
 * @param {number} [depth] Depth of the plane. Default = 1
 * @param {number} [subdivisionsWidth] Number of steps across the plane. Default = 1
 * @param {number} [subdivisionsDepth] Number of steps down the plane. Default = 1
 * @param {module:twgl/m4.Mat4} [matrix] A matrix by which to multiply all the vertices.
 * @return {Object.<string, TypedArray>} The created plane vertices.
 * @memberOf module:twgl/primitives
 */
function createPlaneVertices(
    width,
    depth,
    subdivisionsWidth,
    subdivisionsDepth,
    matrix) {
  width = width || 1;
  depth = depth || 1;
  subdivisionsWidth = subdivisionsWidth || 1;
  subdivisionsDepth = subdivisionsDepth || 1;
  matrix = matrix || identity();

  const numVertices = (subdivisionsWidth + 1) * (subdivisionsDepth + 1);
  const positions = createAugmentedTypedArray(3, numVertices);
  const normals = createAugmentedTypedArray(3, numVertices);
  const texcoords = createAugmentedTypedArray(2, numVertices);

  for (let z = 0; z <= subdivisionsDepth; z++) {
    for (let x = 0; x <= subdivisionsWidth; x++) {
      const u = x / subdivisionsWidth;
      const v = z / subdivisionsDepth;
      positions.push(
          width * u - width * 0.5,
          0,
          depth * v - depth * 0.5);
      normals.push(0, 1, 0);
      texcoords.push(u, v);
    }
  }

  const numVertsAcross = subdivisionsWidth + 1;
  const indices = createAugmentedTypedArray(
      3, subdivisionsWidth * subdivisionsDepth * 2, Uint16Array);

  for (let z = 0; z < subdivisionsDepth; z++) {  // eslint-disable-line
    for (let x = 0; x < subdivisionsWidth; x++) {  // eslint-disable-line
      // Make triangle 1 of quad.
      indices.push(
          (z + 0) * numVertsAcross + x,
          (z + 1) * numVertsAcross + x,
          (z + 0) * numVertsAcross + x + 1);

      // Make triangle 2 of quad.
      indices.push(
          (z + 1) * numVertsAcross + x,
          (z + 1) * numVertsAcross + x + 1,
          (z + 0) * numVertsAcross + x + 1);
    }
  }

  const arrays = reorientVertices({
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices,
  }, matrix);
  return arrays;
}

/**
 * Creates sphere BufferInfo.
 *
 * The created sphere has position, normal, and texcoord data
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius radius of the sphere.
 * @param {number} subdivisionsAxis number of steps around the sphere.
 * @param {number} subdivisionsHeight number of vertically on the sphere.
 * @param {number} [opt_startLatitudeInRadians] where to start the
 *     top of the sphere. Default = 0.
 * @param {number} [opt_endLatitudeInRadians] Where to end the
 *     bottom of the sphere. Default = Math.PI.
 * @param {number} [opt_startLongitudeInRadians] where to start
 *     wrapping the sphere. Default = 0.
 * @param {number} [opt_endLongitudeInRadians] where to end
 *     wrapping the sphere. Default = 2 * Math.PI.
 * @return {module:twgl.BufferInfo} The created sphere BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createSphereBufferInfo
 */

/**
 * Creates sphere buffers.
 *
 * The created sphere has position, normal, and texcoord data
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius radius of the sphere.
 * @param {number} subdivisionsAxis number of steps around the sphere.
 * @param {number} subdivisionsHeight number of vertically on the sphere.
 * @param {number} [opt_startLatitudeInRadians] where to start the
 *     top of the sphere. Default = 0.
 * @param {number} [opt_endLatitudeInRadians] Where to end the
 *     bottom of the sphere. Default = Math.PI.
 * @param {number} [opt_startLongitudeInRadians] where to start
 *     wrapping the sphere. Default = 0.
 * @param {number} [opt_endLongitudeInRadians] where to end
 *     wrapping the sphere. Default = 2 * Math.PI.
 * @return {Object.<string, WebGLBuffer>} The created sphere buffers.
 * @memberOf module:twgl/primitives
 * @function createSphereBuffers
 */

/**
 * Creates sphere vertices.
 *
 * The created sphere has position, normal, and texcoord data
 *
 * @param {number} radius radius of the sphere.
 * @param {number} subdivisionsAxis number of steps around the sphere.
 * @param {number} subdivisionsHeight number of vertically on the sphere.
 * @param {number} [opt_startLatitudeInRadians] where to start the
 *     top of the sphere. Default = 0.
 * @param {number} [opt_endLatitudeInRadians] Where to end the
 *     bottom of the sphere. Default = Math.PI.
 * @param {number} [opt_startLongitudeInRadians] where to start
 *     wrapping the sphere. Default = 0.
 * @param {number} [opt_endLongitudeInRadians] where to end
 *     wrapping the sphere. Default = 2 * Math.PI.
 * @return {Object.<string, TypedArray>} The created sphere vertices.
 * @memberOf module:twgl/primitives
 */
function createSphereVertices(
    radius,
    subdivisionsAxis,
    subdivisionsHeight,
    opt_startLatitudeInRadians,
    opt_endLatitudeInRadians,
    opt_startLongitudeInRadians,
    opt_endLongitudeInRadians) {
  if (subdivisionsAxis <= 0 || subdivisionsHeight <= 0) {
    throw new Error('subdivisionAxis and subdivisionHeight must be > 0');
  }

  opt_startLatitudeInRadians = opt_startLatitudeInRadians || 0;
  opt_endLatitudeInRadians = opt_endLatitudeInRadians || Math.PI;
  opt_startLongitudeInRadians = opt_startLongitudeInRadians || 0;
  opt_endLongitudeInRadians = opt_endLongitudeInRadians || (Math.PI * 2);

  const latRange = opt_endLatitudeInRadians - opt_startLatitudeInRadians;
  const longRange = opt_endLongitudeInRadians - opt_startLongitudeInRadians;

  // We are going to generate our sphere by iterating through its
  // spherical coordinates and generating 2 triangles for each quad on a
  // ring of the sphere.
  const numVertices = (subdivisionsAxis + 1) * (subdivisionsHeight + 1);
  const positions = createAugmentedTypedArray(3, numVertices);
  const normals   = createAugmentedTypedArray(3, numVertices);
  const texcoords = createAugmentedTypedArray(2, numVertices);

  // Generate the individual vertices in our vertex buffer.
  for (let y = 0; y <= subdivisionsHeight; y++) {
    for (let x = 0; x <= subdivisionsAxis; x++) {
      // Generate a vertex based on its spherical coordinates
      const u = x / subdivisionsAxis;
      const v = y / subdivisionsHeight;
      const theta = longRange * u + opt_startLongitudeInRadians;
      const phi = latRange * v + opt_startLatitudeInRadians;
      const sinTheta = Math.sin(theta);
      const cosTheta = Math.cos(theta);
      const sinPhi = Math.sin(phi);
      const cosPhi = Math.cos(phi);
      const ux = cosTheta * sinPhi;
      const uy = cosPhi;
      const uz = sinTheta * sinPhi;
      positions.push(radius * ux, radius * uy, radius * uz);
      normals.push(ux, uy, uz);
      texcoords.push(1 - u, v);
    }
  }

  const numVertsAround = subdivisionsAxis + 1;
  const indices = createAugmentedTypedArray(3, subdivisionsAxis * subdivisionsHeight * 2, Uint16Array);
  for (let x = 0; x < subdivisionsAxis; x++) {  // eslint-disable-line
    for (let y = 0; y < subdivisionsHeight; y++) {  // eslint-disable-line
      // Make triangle 1 of quad.
      indices.push(
          (y + 0) * numVertsAround + x,
          (y + 0) * numVertsAround + x + 1,
          (y + 1) * numVertsAround + x);

      // Make triangle 2 of quad.
      indices.push(
          (y + 1) * numVertsAround + x,
          (y + 0) * numVertsAround + x + 1,
          (y + 1) * numVertsAround + x + 1);
    }
  }

  return {
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices,
  };
}

/**
 * Array of the indices of corners of each face of a cube.
 * @type {Array.<number[]>}
 * @private
 */
const CUBE_FACE_INDICES = [
  [3, 7, 5, 1],  // right
  [6, 2, 0, 4],  // left
  [6, 7, 3, 2],  // ??
  [0, 1, 5, 4],  // ??
  [7, 6, 4, 5],  // front
  [2, 3, 1, 0],  // back
];

/**
 * Creates a BufferInfo for a cube.
 *
 * The cube is created around the origin. (-size / 2, size / 2).
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [size] width, height and depth of the cube.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createCubeBufferInfo
 */

/**
 * Creates the buffers and indices for a cube.
 *
 * The cube is created around the origin. (-size / 2, size / 2).
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [size] width, height and depth of the cube.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createCubeBuffers
 */

/**
 * Creates the vertices and indices for a cube.
 *
 * The cube is created around the origin. (-size / 2, size / 2).
 *
 * @param {number} [size] width, height and depth of the cube.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */
function createCubeVertices(size) {
  size = size || 1;
  const k = size / 2;

  const cornerVertices = [
    [-k, -k, -k],
    [+k, -k, -k],
    [-k, +k, -k],
    [+k, +k, -k],
    [-k, -k, +k],
    [+k, -k, +k],
    [-k, +k, +k],
    [+k, +k, +k],
  ];

  const faceNormals = [
    [+1, +0, +0],
    [-1, +0, +0],
    [+0, +1, +0],
    [+0, -1, +0],
    [+0, +0, +1],
    [+0, +0, -1],
  ];

  const uvCoords = [
    [1, 0],
    [0, 0],
    [0, 1],
    [1, 1],
  ];

  const numVertices = 6 * 4;
  const positions = createAugmentedTypedArray(3, numVertices);
  const normals   = createAugmentedTypedArray(3, numVertices);
  const texcoords = createAugmentedTypedArray(2 , numVertices);
  const indices   = createAugmentedTypedArray(3, 6 * 2, Uint16Array);

  for (let f = 0; f < 6; ++f) {
    const faceIndices = CUBE_FACE_INDICES[f];
    for (let v = 0; v < 4; ++v) {
      const position = cornerVertices[faceIndices[v]];
      const normal = faceNormals[f];
      const uv = uvCoords[v];

      // Each face needs all four vertices because the normals and texture
      // coordinates are not all the same.
      positions.push(position);
      normals.push(normal);
      texcoords.push(uv);

    }
    // Two triangles make a square face.
    const offset = 4 * f;
    indices.push(offset + 0, offset + 1, offset + 2);
    indices.push(offset + 0, offset + 2, offset + 3);
  }

  return {
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices,
  };
}

/**
 * Creates a BufferInfo for a truncated cone, which is like a cylinder
 * except that it has different top and bottom radii. A truncated cone
 * can also be used to create cylinders and regular cones. The
 * truncated cone will be created centered about the origin, with the
 * y axis as its vertical axis.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} bottomRadius Bottom radius of truncated cone.
 * @param {number} topRadius Top radius of truncated cone.
 * @param {number} height Height of truncated cone.
 * @param {number} radialSubdivisions The number of subdivisions around the
 *     truncated cone.
 * @param {number} verticalSubdivisions The number of subdivisions down the
 *     truncated cone.
 * @param {boolean} [opt_topCap] Create top cap. Default = true.
 * @param {boolean} [opt_bottomCap] Create bottom cap. Default = true.
 * @return {module:twgl.BufferInfo} The created cone BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createTruncatedConeBufferInfo
 */

/**
 * Creates buffers for a truncated cone, which is like a cylinder
 * except that it has different top and bottom radii. A truncated cone
 * can also be used to create cylinders and regular cones. The
 * truncated cone will be created centered about the origin, with the
 * y axis as its vertical axis.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} bottomRadius Bottom radius of truncated cone.
 * @param {number} topRadius Top radius of truncated cone.
 * @param {number} height Height of truncated cone.
 * @param {number} radialSubdivisions The number of subdivisions around the
 *     truncated cone.
 * @param {number} verticalSubdivisions The number of subdivisions down the
 *     truncated cone.
 * @param {boolean} [opt_topCap] Create top cap. Default = true.
 * @param {boolean} [opt_bottomCap] Create bottom cap. Default = true.
 * @return {Object.<string, WebGLBuffer>} The created cone buffers.
 * @memberOf module:twgl/primitives
 * @function createTruncatedConeBuffers
 */

/**
 * Creates vertices for a truncated cone, which is like a cylinder
 * except that it has different top and bottom radii. A truncated cone
 * can also be used to create cylinders and regular cones. The
 * truncated cone will be created centered about the origin, with the
 * y axis as its vertical axis. .
 *
 * @param {number} bottomRadius Bottom radius of truncated cone.
 * @param {number} topRadius Top radius of truncated cone.
 * @param {number} height Height of truncated cone.
 * @param {number} radialSubdivisions The number of subdivisions around the
 *     truncated cone.
 * @param {number} verticalSubdivisions The number of subdivisions down the
 *     truncated cone.
 * @param {boolean} [opt_topCap] Create top cap. Default = true.
 * @param {boolean} [opt_bottomCap] Create bottom cap. Default = true.
 * @return {Object.<string, TypedArray>} The created cone vertices.
 * @memberOf module:twgl/primitives
 */
function createTruncatedConeVertices(
    bottomRadius,
    topRadius,
    height,
    radialSubdivisions,
    verticalSubdivisions,
    opt_topCap,
    opt_bottomCap) {
  if (radialSubdivisions < 3) {
    throw new Error('radialSubdivisions must be 3 or greater');
  }

  if (verticalSubdivisions < 1) {
    throw new Error('verticalSubdivisions must be 1 or greater');
  }

  const topCap = (opt_topCap === undefined) ? true : opt_topCap;
  const bottomCap = (opt_bottomCap === undefined) ? true : opt_bottomCap;

  const extra = (topCap ? 2 : 0) + (bottomCap ? 2 : 0);

  const numVertices = (radialSubdivisions + 1) * (verticalSubdivisions + 1 + extra);
  const positions = createAugmentedTypedArray(3, numVertices);
  const normals   = createAugmentedTypedArray(3, numVertices);
  const texcoords = createAugmentedTypedArray(2, numVertices);
  const indices   = createAugmentedTypedArray(3, radialSubdivisions * (verticalSubdivisions + extra / 2) * 2, Uint16Array);

  const vertsAroundEdge = radialSubdivisions + 1;

  // The slant of the cone is constant across its surface
  const slant = Math.atan2(bottomRadius - topRadius, height);
  const cosSlant = Math.cos(slant);
  const sinSlant = Math.sin(slant);

  const start = topCap ? -2 : 0;
  const end = verticalSubdivisions + (bottomCap ? 2 : 0);

  for (let yy = start; yy <= end; ++yy) {
    let v = yy / verticalSubdivisions;
    let y = height * v;
    let ringRadius;
    if (yy < 0) {
      y = 0;
      v = 1;
      ringRadius = bottomRadius;
    } else if (yy > verticalSubdivisions) {
      y = height;
      v = 1;
      ringRadius = topRadius;
    } else {
      ringRadius = bottomRadius +
        (topRadius - bottomRadius) * (yy / verticalSubdivisions);
    }
    if (yy === -2 || yy === verticalSubdivisions + 2) {
      ringRadius = 0;
      v = 0;
    }
    y -= height / 2;
    for (let ii = 0; ii < vertsAroundEdge; ++ii) {
      const sin = Math.sin(ii * Math.PI * 2 / radialSubdivisions);
      const cos = Math.cos(ii * Math.PI * 2 / radialSubdivisions);
      positions.push(sin * ringRadius, y, cos * ringRadius);
      if (yy < 0) {
        normals.push(0, -1, 0);
      } else if (yy > verticalSubdivisions) {
        normals.push(0, 1, 0);
      } else if (ringRadius === 0.0) {
        normals.push(0, 0, 0);
      } else {
        normals.push(sin * cosSlant, sinSlant, cos * cosSlant);
      }
      texcoords.push((ii / radialSubdivisions), 1 - v);
    }
  }

  for (let yy = 0; yy < verticalSubdivisions + extra; ++yy) {  // eslint-disable-line
    if (yy === 1 && topCap || yy === verticalSubdivisions + extra - 2 && bottomCap) {
      continue;
    }
    for (let ii = 0; ii < radialSubdivisions; ++ii) {  // eslint-disable-line
      indices.push(vertsAroundEdge * (yy + 0) + 0 + ii,
                   vertsAroundEdge * (yy + 0) + 1 + ii,
                   vertsAroundEdge * (yy + 1) + 1 + ii);
      indices.push(vertsAroundEdge * (yy + 0) + 0 + ii,
                   vertsAroundEdge * (yy + 1) + 1 + ii,
                   vertsAroundEdge * (yy + 1) + 0 + ii);
    }
  }

  return {
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices,
  };
}

/**
 * Expands RLE data
 * @param {number[]} rleData data in format of run-length, x, y, z, run-length, x, y, z
 * @param {number[]} [padding] value to add each entry with.
 * @return {number[]} the expanded rleData
 * @private
 */
function expandRLEData(rleData, padding) {
  padding = padding || [];
  const data = [];
  for (let ii = 0; ii < rleData.length; ii += 4) {
    const runLength = rleData[ii];
    const element = rleData.slice(ii + 1, ii + 4);
    element.push.apply(element, padding);
    for (let jj = 0; jj < runLength; ++jj) {
      data.push.apply(data, element);
    }
  }
  return data;
}

/**
 * Creates 3D 'F' BufferInfo.
 * An 'F' is useful because you can easily tell which way it is oriented.
 * The created 'F' has position, normal, texcoord, and color buffers.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function create3DFBufferInfo
 */

/**
 * Creates 3D 'F' buffers.
 * An 'F' is useful because you can easily tell which way it is oriented.
 * The created 'F' has position, normal, texcoord, and color buffers.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function create3DFBuffers
 */

/**
 * Creates 3D 'F' vertices.
 * An 'F' is useful because you can easily tell which way it is oriented.
 * The created 'F' has position, normal, texcoord, and color arrays.
 *
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */
function create3DFVertices() {

  const positions = [
    // left column front
    0,   0,  0,
    0, 150,  0,
    30,   0,  0,
    0, 150,  0,
    30, 150,  0,
    30,   0,  0,

    // top rung front
    30,   0,  0,
    30,  30,  0,
    100,   0,  0,
    30,  30,  0,
    100,  30,  0,
    100,   0,  0,

    // middle rung front
    30,  60,  0,
    30,  90,  0,
    67,  60,  0,
    30,  90,  0,
    67,  90,  0,
    67,  60,  0,

    // left column back
      0,   0,  30,
     30,   0,  30,
      0, 150,  30,
      0, 150,  30,
     30,   0,  30,
     30, 150,  30,

    // top rung back
     30,   0,  30,
    100,   0,  30,
     30,  30,  30,
     30,  30,  30,
    100,   0,  30,
    100,  30,  30,

    // middle rung back
     30,  60,  30,
     67,  60,  30,
     30,  90,  30,
     30,  90,  30,
     67,  60,  30,
     67,  90,  30,

    // top
      0,   0,   0,
    100,   0,   0,
    100,   0,  30,
      0,   0,   0,
    100,   0,  30,
      0,   0,  30,

    // top rung front
    100,   0,   0,
    100,  30,   0,
    100,  30,  30,
    100,   0,   0,
    100,  30,  30,
    100,   0,  30,

    // under top rung
    30,   30,   0,
    30,   30,  30,
    100,  30,  30,
    30,   30,   0,
    100,  30,  30,
    100,  30,   0,

    // between top rung and middle
    30,   30,   0,
    30,   60,  30,
    30,   30,  30,
    30,   30,   0,
    30,   60,   0,
    30,   60,  30,

    // top of middle rung
    30,   60,   0,
    67,   60,  30,
    30,   60,  30,
    30,   60,   0,
    67,   60,   0,
    67,   60,  30,

    // front of middle rung
    67,   60,   0,
    67,   90,  30,
    67,   60,  30,
    67,   60,   0,
    67,   90,   0,
    67,   90,  30,

    // bottom of middle rung.
    30,   90,   0,
    30,   90,  30,
    67,   90,  30,
    30,   90,   0,
    67,   90,  30,
    67,   90,   0,

    // front of bottom
    30,   90,   0,
    30,  150,  30,
    30,   90,  30,
    30,   90,   0,
    30,  150,   0,
    30,  150,  30,

    // bottom
    0,   150,   0,
    0,   150,  30,
    30,  150,  30,
    0,   150,   0,
    30,  150,  30,
    30,  150,   0,

    // left side
    0,   0,   0,
    0,   0,  30,
    0, 150,  30,
    0,   0,   0,
    0, 150,  30,
    0, 150,   0,
  ];

  const texcoords = [
    // left column front
    0.22, 0.19,
    0.22, 0.79,
    0.34, 0.19,
    0.22, 0.79,
    0.34, 0.79,
    0.34, 0.19,

    // top rung front
    0.34, 0.19,
    0.34, 0.31,
    0.62, 0.19,
    0.34, 0.31,
    0.62, 0.31,
    0.62, 0.19,

    // middle rung front
    0.34, 0.43,
    0.34, 0.55,
    0.49, 0.43,
    0.34, 0.55,
    0.49, 0.55,
    0.49, 0.43,

    // left column back
    0, 0,
    1, 0,
    0, 1,
    0, 1,
    1, 0,
    1, 1,

    // top rung back
    0, 0,
    1, 0,
    0, 1,
    0, 1,
    1, 0,
    1, 1,

    // middle rung back
    0, 0,
    1, 0,
    0, 1,
    0, 1,
    1, 0,
    1, 1,

    // top
    0, 0,
    1, 0,
    1, 1,
    0, 0,
    1, 1,
    0, 1,

    // top rung front
    0, 0,
    1, 0,
    1, 1,
    0, 0,
    1, 1,
    0, 1,

    // under top rung
    0, 0,
    0, 1,
    1, 1,
    0, 0,
    1, 1,
    1, 0,

    // between top rung and middle
    0, 0,
    1, 1,
    0, 1,
    0, 0,
    1, 0,
    1, 1,

    // top of middle rung
    0, 0,
    1, 1,
    0, 1,
    0, 0,
    1, 0,
    1, 1,

    // front of middle rung
    0, 0,
    1, 1,
    0, 1,
    0, 0,
    1, 0,
    1, 1,

    // bottom of middle rung.
    0, 0,
    0, 1,
    1, 1,
    0, 0,
    1, 1,
    1, 0,

    // front of bottom
    0, 0,
    1, 1,
    0, 1,
    0, 0,
    1, 0,
    1, 1,

    // bottom
    0, 0,
    0, 1,
    1, 1,
    0, 0,
    1, 1,
    1, 0,

    // left side
    0, 0,
    0, 1,
    1, 1,
    0, 0,
    1, 1,
    1, 0,
  ];

  const normals = expandRLEData([
    // left column front
    // top rung front
    // middle rung front
    18, 0, 0, 1,

    // left column back
    // top rung back
    // middle rung back
    18, 0, 0, -1,

    // top
    6, 0, 1, 0,

    // top rung front
    6, 1, 0, 0,

    // under top rung
    6, 0, -1, 0,

    // between top rung and middle
    6, 1, 0, 0,

    // top of middle rung
    6, 0, 1, 0,

    // front of middle rung
    6, 1, 0, 0,

    // bottom of middle rung.
    6, 0, -1, 0,

    // front of bottom
    6, 1, 0, 0,

    // bottom
    6, 0, -1, 0,

    // left side
    6, -1, 0, 0,
  ]);

  const colors = expandRLEData([
        // left column front
        // top rung front
        // middle rung front
      18, 200,  70, 120,

        // left column back
        // top rung back
        // middle rung back
      18, 80, 70, 200,

        // top
      6, 70, 200, 210,

        // top rung front
      6, 200, 200, 70,

        // under top rung
      6, 210, 100, 70,

        // between top rung and middle
      6, 210, 160, 70,

        // top of middle rung
      6, 70, 180, 210,

        // front of middle rung
      6, 100, 70, 210,

        // bottom of middle rung.
      6, 76, 210, 100,

        // front of bottom
      6, 140, 210, 80,

        // bottom
      6, 90, 130, 110,

        // left side
      6, 160, 160, 220,
  ], [255]);

  const numVerts = positions.length / 3;

  const arrays = {
    position: createAugmentedTypedArray(3, numVerts),
    texcoord: createAugmentedTypedArray(2,  numVerts),
    normal: createAugmentedTypedArray(3, numVerts),
    color: createAugmentedTypedArray(4, numVerts, Uint8Array),
    indices: createAugmentedTypedArray(3, numVerts / 3, Uint16Array),
  };

  arrays.position.push(positions);
  arrays.texcoord.push(texcoords);
  arrays.normal.push(normals);
  arrays.color.push(colors);

  for (let ii = 0; ii < numVerts; ++ii) {
    arrays.indices.push(ii);
  }

  return arrays;
}

/**
 * Creates crescent BufferInfo.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} verticalRadius The vertical radius of the crescent.
 * @param {number} outerRadius The outer radius of the crescent.
 * @param {number} innerRadius The inner radius of the crescent.
 * @param {number} thickness The thickness of the crescent.
 * @param {number} subdivisionsDown number of steps around the crescent.
 * @param {number} [startOffset] Where to start arc. Default 0.
 * @param {number} [endOffset] Where to end arg. Default 1.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createCresentBufferInfo
 */

/**
 * Creates crescent buffers.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} verticalRadius The vertical radius of the crescent.
 * @param {number} outerRadius The outer radius of the crescent.
 * @param {number} innerRadius The inner radius of the crescent.
 * @param {number} thickness The thickness of the crescent.
 * @param {number} subdivisionsDown number of steps around the crescent.
 * @param {number} [startOffset] Where to start arc. Default 0.
 * @param {number} [endOffset] Where to end arg. Default 1.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createCresentBuffers
 */

/**
 * Creates crescent vertices.
 *
 * @param {number} verticalRadius The vertical radius of the crescent.
 * @param {number} outerRadius The outer radius of the crescent.
 * @param {number} innerRadius The inner radius of the crescent.
 * @param {number} thickness The thickness of the crescent.
 * @param {number} subdivisionsDown number of steps around the crescent.
 * @param {number} [startOffset] Where to start arc. Default 0.
 * @param {number} [endOffset] Where to end arg. Default 1.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 * @function createCresentBuffers
 */

/**
 * Creates crescent BufferInfo.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} verticalRadius The vertical radius of the crescent.
 * @param {number} outerRadius The outer radius of the crescent.
 * @param {number} innerRadius The inner radius of the crescent.
 * @param {number} thickness The thickness of the crescent.
 * @param {number} subdivisionsDown number of steps around the crescent.
 * @param {number} [startOffset] Where to start arc. Default 0.
 * @param {number} [endOffset] Where to end arg. Default 1.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createCrescentBufferInfo
 */

/**
 * Creates crescent buffers.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} verticalRadius The vertical radius of the crescent.
 * @param {number} outerRadius The outer radius of the crescent.
 * @param {number} innerRadius The inner radius of the crescent.
 * @param {number} thickness The thickness of the crescent.
 * @param {number} subdivisionsDown number of steps around the crescent.
 * @param {number} [startOffset] Where to start arc. Default 0.
 * @param {number} [endOffset] Where to end arg. Default 1.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createCrescentBuffers
 */

/**
 * Creates crescent vertices.
 *
 * @param {number} verticalRadius The vertical radius of the crescent.
 * @param {number} outerRadius The outer radius of the crescent.
 * @param {number} innerRadius The inner radius of the crescent.
 * @param {number} thickness The thickness of the crescent.
 * @param {number} subdivisionsDown number of steps around the crescent.
 * @param {number} [startOffset] Where to start arc. Default 0.
 * @param {number} [endOffset] Where to end arg. Default 1.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */
 function createCrescentVertices(
    verticalRadius,
    outerRadius,
    innerRadius,
    thickness,
    subdivisionsDown,
    startOffset,
    endOffset) {
  if (subdivisionsDown <= 0) {
    throw new Error('subdivisionDown must be > 0');
  }

  startOffset = startOffset || 0;
  endOffset   = endOffset || 1;

  const subdivisionsThick = 2;

  const offsetRange = endOffset - startOffset;
  const numVertices = (subdivisionsDown + 1) * 2 * (2 + subdivisionsThick);
  const positions   = createAugmentedTypedArray(3, numVertices);
  const normals     = createAugmentedTypedArray(3, numVertices);
  const texcoords   = createAugmentedTypedArray(2, numVertices);

  function lerp(a, b, s) {
    return a + (b - a) * s;
  }

  function createArc(arcRadius, x, normalMult, normalAdd, uMult, uAdd) {
    for (let z = 0; z <= subdivisionsDown; z++) {
      const uBack = x / (subdivisionsThick - 1);
      const v = z / subdivisionsDown;
      const xBack = (uBack - 0.5) * 2;
      const angle = (startOffset + (v * offsetRange)) * Math.PI;
      const s = Math.sin(angle);
      const c = Math.cos(angle);
      const radius = lerp(verticalRadius, arcRadius, s);
      const px = xBack * thickness;
      const py = c * verticalRadius;
      const pz = s * radius;
      positions.push(px, py, pz);
      const n = add(multiply$1([0, s, c], normalMult), normalAdd);
      normals.push(n);
      texcoords.push(uBack * uMult + uAdd, v);
    }
  }

  // Generate the individual vertices in our vertex buffer.
  for (let x = 0; x < subdivisionsThick; x++) {
    const uBack = (x / (subdivisionsThick - 1) - 0.5) * 2;
    createArc(outerRadius, x, [1, 1, 1], [0,     0, 0], 1, 0);
    createArc(outerRadius, x, [0, 0, 0], [uBack, 0, 0], 0, 0);
    createArc(innerRadius, x, [1, 1, 1], [0,     0, 0], 1, 0);
    createArc(innerRadius, x, [0, 0, 0], [uBack, 0, 0], 0, 1);
  }

  // Do outer surface.
  const indices = createAugmentedTypedArray(3, (subdivisionsDown * 2) * (2 + subdivisionsThick), Uint16Array);

  function createSurface(leftArcOffset, rightArcOffset) {
    for (let z = 0; z < subdivisionsDown; ++z) {
      // Make triangle 1 of quad.
      indices.push(
          leftArcOffset + z + 0,
          leftArcOffset + z + 1,
          rightArcOffset + z + 0);

      // Make triangle 2 of quad.
      indices.push(
          leftArcOffset + z + 1,
          rightArcOffset + z + 1,
          rightArcOffset + z + 0);
    }
  }

  const numVerticesDown = subdivisionsDown + 1;
  // front
  createSurface(numVerticesDown * 0, numVerticesDown * 4);
  // right
  createSurface(numVerticesDown * 5, numVerticesDown * 7);
  // back
  createSurface(numVerticesDown * 6, numVerticesDown * 2);
  // left
  createSurface(numVerticesDown * 3, numVerticesDown * 1);

  return {
    position: positions,
    normal:   normals,
    texcoord: texcoords,
    indices:  indices,
  };
}

/**
 * Creates cylinder BufferInfo. The cylinder will be created around the origin
 * along the y-axis.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius Radius of cylinder.
 * @param {number} height Height of cylinder.
 * @param {number} radialSubdivisions The number of subdivisions around the cylinder.
 * @param {number} verticalSubdivisions The number of subdivisions down the cylinder.
 * @param {boolean} [topCap] Create top cap. Default = true.
 * @param {boolean} [bottomCap] Create bottom cap. Default = true.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createCylinderBufferInfo
 */

 /**
  * Creates cylinder buffers. The cylinder will be created around the origin
  * along the y-axis.
  *
  * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
  * @param {number} radius Radius of cylinder.
  * @param {number} height Height of cylinder.
  * @param {number} radialSubdivisions The number of subdivisions around the cylinder.
  * @param {number} verticalSubdivisions The number of subdivisions down the cylinder.
  * @param {boolean} [topCap] Create top cap. Default = true.
  * @param {boolean} [bottomCap] Create bottom cap. Default = true.
  * @return {Object.<string, WebGLBuffer>} The created buffers.
  * @memberOf module:twgl/primitives
  * @function createCylinderBuffers
  */

 /**
  * Creates cylinder vertices. The cylinder will be created around the origin
  * along the y-axis.
  *
  * @param {number} radius Radius of cylinder.
  * @param {number} height Height of cylinder.
  * @param {number} radialSubdivisions The number of subdivisions around the cylinder.
  * @param {number} verticalSubdivisions The number of subdivisions down the cylinder.
  * @param {boolean} [topCap] Create top cap. Default = true.
  * @param {boolean} [bottomCap] Create bottom cap. Default = true.
  * @return {Object.<string, TypedArray>} The created vertices.
  * @memberOf module:twgl/primitives
  */
function createCylinderVertices(
    radius,
    height,
    radialSubdivisions,
    verticalSubdivisions,
    topCap,
    bottomCap) {
  return createTruncatedConeVertices(
      radius,
      radius,
      height,
      radialSubdivisions,
      verticalSubdivisions,
      topCap,
      bottomCap);
}

/**
 * Creates BufferInfo for a torus
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius radius of center of torus circle.
 * @param {number} thickness radius of torus ring.
 * @param {number} radialSubdivisions The number of subdivisions around the torus.
 * @param {number} bodySubdivisions The number of subdivisions around the body torus.
 * @param {boolean} [startAngle] start angle in radians. Default = 0.
 * @param {boolean} [endAngle] end angle in radians. Default = Math.PI * 2.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createTorusBufferInfo
 */

/**
 * Creates buffers for a torus
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius radius of center of torus circle.
 * @param {number} thickness radius of torus ring.
 * @param {number} radialSubdivisions The number of subdivisions around the torus.
 * @param {number} bodySubdivisions The number of subdivisions around the body torus.
 * @param {boolean} [startAngle] start angle in radians. Default = 0.
 * @param {boolean} [endAngle] end angle in radians. Default = Math.PI * 2.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createTorusBuffers
 */

/**
 * Creates vertices for a torus
 *
 * @param {number} radius radius of center of torus circle.
 * @param {number} thickness radius of torus ring.
 * @param {number} radialSubdivisions The number of subdivisions around the torus.
 * @param {number} bodySubdivisions The number of subdivisions around the body torus.
 * @param {boolean} [startAngle] start angle in radians. Default = 0.
 * @param {boolean} [endAngle] end angle in radians. Default = Math.PI * 2.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */
function createTorusVertices(
    radius,
    thickness,
    radialSubdivisions,
    bodySubdivisions,
    startAngle,
    endAngle) {
  if (radialSubdivisions < 3) {
    throw new Error('radialSubdivisions must be 3 or greater');
  }

  if (bodySubdivisions < 3) {
    throw new Error('verticalSubdivisions must be 3 or greater');
  }

  startAngle = startAngle || 0;
  endAngle = endAngle || Math.PI * 2;
  const range = endAngle - startAngle;

  const radialParts = radialSubdivisions + 1;
  const bodyParts   = bodySubdivisions + 1;
  const numVertices = radialParts * bodyParts;
  const positions   = createAugmentedTypedArray(3, numVertices);
  const normals     = createAugmentedTypedArray(3, numVertices);
  const texcoords   = createAugmentedTypedArray(2, numVertices);
  const indices     = createAugmentedTypedArray(3, (radialSubdivisions) * (bodySubdivisions) * 2, Uint16Array);

  for (let slice = 0; slice < bodyParts; ++slice) {
    const v = slice / bodySubdivisions;
    const sliceAngle = v * Math.PI * 2;
    const sliceSin = Math.sin(sliceAngle);
    const ringRadius = radius + sliceSin * thickness;
    const ny = Math.cos(sliceAngle);
    const y = ny * thickness;
    for (let ring = 0; ring < radialParts; ++ring) {
      const u = ring / radialSubdivisions;
      const ringAngle = startAngle + u * range;
      const xSin = Math.sin(ringAngle);
      const zCos = Math.cos(ringAngle);
      const x = xSin * ringRadius;
      const z = zCos * ringRadius;
      const nx = xSin * sliceSin;
      const nz = zCos * sliceSin;
      positions.push(x, y, z);
      normals.push(nx, ny, nz);
      texcoords.push(u, 1 - v);
    }
  }

  for (let slice = 0; slice < bodySubdivisions; ++slice) {  // eslint-disable-line
    for (let ring = 0; ring < radialSubdivisions; ++ring) {  // eslint-disable-line
      const nextRingIndex  = 1 + ring;
      const nextSliceIndex = 1 + slice;
      indices.push(radialParts * slice          + ring,
                   radialParts * nextSliceIndex + ring,
                   radialParts * slice          + nextRingIndex);
      indices.push(radialParts * nextSliceIndex + ring,
                   radialParts * nextSliceIndex + nextRingIndex,
                   radialParts * slice          + nextRingIndex);
    }
  }

  return {
    position: positions,
    normal:   normals,
    texcoord: texcoords,
    indices:  indices,
  };
}


/**
 * Creates a disc BufferInfo. The disc will be in the xz plane, centered at
 * the origin. When creating, at least 3 divisions, or pie
 * pieces, need to be specified, otherwise the triangles making
 * up the disc will be degenerate. You can also specify the
 * number of radial pieces `stacks`. A value of 1 for
 * stacks will give you a simple disc of pie pieces.  If you
 * want to create an annulus you can set `innerRadius` to a
 * value > 0. Finally, `stackPower` allows you to have the widths
 * increase or decrease as you move away from the center. This
 * is particularly useful when using the disc as a ground plane
 * with a fixed camera such that you don't need the resolution
 * of small triangles near the perimeter. For example, a value
 * of 2 will produce stacks whose outside radius increases with
 * the square of the stack index. A value of 1 will give uniform
 * stacks.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius Radius of the ground plane.
 * @param {number} divisions Number of triangles in the ground plane (at least 3).
 * @param {number} [stacks] Number of radial divisions (default=1).
 * @param {number} [innerRadius] Default 0.
 * @param {number} [stackPower] Power to raise stack size to for decreasing width.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createDiscBufferInfo
 */

/**
 * Creates disc buffers. The disc will be in the xz plane, centered at
 * the origin. When creating, at least 3 divisions, or pie
 * pieces, need to be specified, otherwise the triangles making
 * up the disc will be degenerate. You can also specify the
 * number of radial pieces `stacks`. A value of 1 for
 * stacks will give you a simple disc of pie pieces.  If you
 * want to create an annulus you can set `innerRadius` to a
 * value > 0. Finally, `stackPower` allows you to have the widths
 * increase or decrease as you move away from the center. This
 * is particularly useful when using the disc as a ground plane
 * with a fixed camera such that you don't need the resolution
 * of small triangles near the perimeter. For example, a value
 * of 2 will produce stacks whose outside radius increases with
 * the square of the stack index. A value of 1 will give uniform
 * stacks.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius Radius of the ground plane.
 * @param {number} divisions Number of triangles in the ground plane (at least 3).
 * @param {number} [stacks] Number of radial divisions (default=1).
 * @param {number} [innerRadius] Default 0.
 * @param {number} [stackPower] Power to raise stack size to for decreasing width.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createDiscBuffers
 */

/**
 * Creates disc vertices. The disc will be in the xz plane, centered at
 * the origin. When creating, at least 3 divisions, or pie
 * pieces, need to be specified, otherwise the triangles making
 * up the disc will be degenerate. You can also specify the
 * number of radial pieces `stacks`. A value of 1 for
 * stacks will give you a simple disc of pie pieces.  If you
 * want to create an annulus you can set `innerRadius` to a
 * value > 0. Finally, `stackPower` allows you to have the widths
 * increase or decrease as you move away from the center. This
 * is particularly useful when using the disc as a ground plane
 * with a fixed camera such that you don't need the resolution
 * of small triangles near the perimeter. For example, a value
 * of 2 will produce stacks whose outside radius increases with
 * the square of the stack index. A value of 1 will give uniform
 * stacks.
 *
 * @param {number} radius Radius of the ground plane.
 * @param {number} divisions Number of triangles in the ground plane (at least 3).
 * @param {number} [stacks] Number of radial divisions (default=1).
 * @param {number} [innerRadius] Default 0.
 * @param {number} [stackPower] Power to raise stack size to for decreasing width.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */
function createDiscVertices(
    radius,
    divisions,
    stacks,
    innerRadius,
    stackPower) {
  if (divisions < 3) {
    throw new Error('divisions must be at least 3');
  }

  stacks = stacks ? stacks : 1;
  stackPower = stackPower ? stackPower : 1;
  innerRadius = innerRadius ? innerRadius : 0;

  // Note: We don't share the center vertex because that would
  // mess up texture coordinates.
  const numVertices = (divisions + 1) * (stacks + 1);

  const positions = createAugmentedTypedArray(3, numVertices);
  const normals   = createAugmentedTypedArray(3, numVertices);
  const texcoords = createAugmentedTypedArray(2, numVertices);
  const indices   = createAugmentedTypedArray(3, stacks * divisions * 2, Uint16Array);

  let firstIndex = 0;
  const radiusSpan = radius - innerRadius;
  const pointsPerStack = divisions + 1;

  // Build the disk one stack at a time.
  for (let stack = 0; stack <= stacks; ++stack) {
    const stackRadius = innerRadius + radiusSpan * Math.pow(stack / stacks, stackPower);

    for (let i = 0; i <= divisions; ++i) {
      const theta = 2.0 * Math.PI * i / divisions;
      const x = stackRadius * Math.cos(theta);
      const z = stackRadius * Math.sin(theta);

      positions.push(x, 0, z);
      normals.push(0, 1, 0);
      texcoords.push(1 - (i / divisions), stack / stacks);
      if (stack > 0 && i !== divisions) {
        // a, b, c and d are the indices of the vertices of a quad.  unless
        // the current stack is the one closest to the center, in which case
        // the vertices a and b connect to the center vertex.
        const a = firstIndex + (i + 1);
        const b = firstIndex + i;
        const c = firstIndex + i - pointsPerStack;
        const d = firstIndex + (i + 1) - pointsPerStack;

        // Make a quad of the vertices a, b, c, d.
        indices.push(a, b, c);
        indices.push(a, c, d);
      }
    }

    firstIndex += divisions + 1;
  }

  return {
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices,
  };
}

/**
 * creates a random integer between 0 and range - 1 inclusive.
 * @param {number} range
 * @return {number} random value between 0 and range - 1 inclusive.
 * @private
 */
function randInt(range) {
  return Math.random() * range | 0;
}

/**
 * Used to supply random colors
 * @callback RandomColorFunc
 * @param {number} ndx index of triangle/quad if unindexed or index of vertex if indexed
 * @param {number} channel 0 = red, 1 = green, 2 = blue, 3 = alpha
 * @return {number} a number from 0 to 255
 * @memberOf module:twgl/primitives
 */

/**
 * @typedef {Object} RandomVerticesOptions
 * @property {number} [vertsPerColor] Defaults to 3 for non-indexed vertices
 * @property {module:twgl/primitives.RandomColorFunc} [rand] A function to generate random numbers
 * @memberOf module:twgl/primitives
 */

/**
 * Creates an augmentedTypedArray of random vertex colors.
 * If the vertices are indexed (have an indices array) then will
 * just make random colors. Otherwise assumes they are triangles
 * and makes one random color for every 3 vertices.
 * @param {Object.<string, AugmentedTypedArray>} vertices Vertices as returned from one of the createXXXVertices functions.
 * @param {module:twgl/primitives.RandomVerticesOptions} [options] options.
 * @return {Object.<string, AugmentedTypedArray>} same vertices as passed in with `color` added.
 * @memberOf module:twgl/primitives
 */
function makeRandomVertexColors(vertices, options) {
  options = options || {};
  const numElements = vertices.position.numElements;
  const vColors = createAugmentedTypedArray(4, numElements, Uint8Array);
  const rand = options.rand || function(ndx, channel) {
    return channel < 3 ? randInt(256) : 255;
  };
  vertices.color = vColors;
  if (vertices.indices) {
    // just make random colors if index
    for (let ii = 0; ii < numElements; ++ii) {
      vColors.push(rand(ii, 0), rand(ii, 1), rand(ii, 2), rand(ii, 3));
    }
  } else {
    // make random colors per triangle
    const numVertsPerColor = options.vertsPerColor || 3;
    const numSets = numElements / numVertsPerColor;
    for (let ii = 0; ii < numSets; ++ii) {  // eslint-disable-line
      const color = [rand(ii, 0), rand(ii, 1), rand(ii, 2), rand(ii, 3)];
      for (let jj = 0; jj < numVertsPerColor; ++jj) {
        vColors.push(color);
      }
    }
  }
  return vertices;
}

/**
 * creates a function that calls fn to create vertices and then
 * creates a buffers for them
 * @private
 */
function createBufferFunc(fn) {
  return function(gl) {
    const arrays = fn.apply(this, Array.prototype.slice.call(arguments, 1));
    return createBuffersFromArrays(gl, arrays);
  };
}

/**
 * creates a function that calls fn to create vertices and then
 * creates a bufferInfo object for them
 * @private
 */
function createBufferInfoFunc(fn) {
  return function(gl) {
    const arrays = fn.apply(null,  Array.prototype.slice.call(arguments, 1));
    return createBufferInfoFromArrays(gl, arrays);
  };
}

const arraySpecPropertyNames = [
  "numComponents",
  "size",
  "type",
  "normalize",
  "stride",
  "offset",
  "attrib",
  "name",
  "attribName",
];

/**
 * Copy elements from one array to another
 *
 * @param {Array|TypedArray} src source array
 * @param {Array|TypedArray} dst dest array
 * @param {number} dstNdx index in dest to copy src
 * @param {number} [offset] offset to add to copied values
 * @private
 */
function copyElements(src, dst, dstNdx, offset) {
  offset = offset || 0;
  const length = src.length;
  for (let ii = 0; ii < length; ++ii) {
    dst[dstNdx + ii] = src[ii] + offset;
  }
}

/**
 * Creates an array of the same time
 *
 * @param {(number[]|ArrayBufferView|module:twgl.FullArraySpec)} srcArray array who's type to copy
 * @param {number} length size of new array
 * @return {(number[]|ArrayBufferView|module:twgl.FullArraySpec)} array with same type as srcArray
 * @private
 */
function createArrayOfSameType(srcArray, length) {
  const arraySrc = getArray(srcArray);
  const newArray = new arraySrc.constructor(length);
  let newArraySpec = newArray;
  // If it appears to have been augmented make new one augmented
  if (arraySrc.numComponents && arraySrc.numElements) {
    augmentTypedArray(newArray, arraySrc.numComponents);
  }
  // If it was a full spec make new one a full spec
  if (srcArray.data) {
    newArraySpec = {
      data: newArray,
    };
    copyNamedProperties(arraySpecPropertyNames, srcArray, newArraySpec);
  }
  return newArraySpec;
}

/**
 * Concatenates sets of vertices
 *
 * Assumes the vertices match in composition. For example
 * if one set of vertices has positions, normals, and indices
 * all sets of vertices must have positions, normals, and indices
 * and of the same type.
 *
 * Example:
 *
 *      const cubeVertices = twgl.primitives.createCubeVertices(2);
 *      const sphereVertices = twgl.primitives.createSphereVertices(1, 10, 10);
 *      // move the sphere 2 units up
 *      twgl.primitives.reorientVertices(
 *          sphereVertices, twgl.m4.translation([0, 2, 0]));
 *      // merge the sphere with the cube
 *      const cubeSphereVertices = twgl.primitives.concatVertices(
 *          [cubeVertices, sphereVertices]);
 *      // turn them into WebGL buffers and attrib data
 *      const bufferInfo = twgl.createBufferInfoFromArrays(gl, cubeSphereVertices);
 *
 * @param {module:twgl.Arrays[]} arrays Array of arrays of vertices
 * @return {module:twgl.Arrays} The concatenated vertices.
 * @memberOf module:twgl/primitives
 */
function concatVertices(arrayOfArrays) {
  const names = {};
  let baseName;
  // get names of all arrays.
  // and numElements for each set of vertices
  for (let ii = 0; ii < arrayOfArrays.length; ++ii) {
    const arrays = arrayOfArrays[ii];
    Object.keys(arrays).forEach(function(name) {  // eslint-disable-line
      if (!names[name]) {
        names[name] = [];
      }
      if (!baseName && name !== 'indices') {
        baseName = name;
      }
      const arrayInfo = arrays[name];
      const numComponents = getNumComponents(arrayInfo, name);
      const array = getArray(arrayInfo);
      const numElements = array.length / numComponents;
      names[name].push(numElements);
    });
  }

  // compute length of combined array
  // and return one for reference
  function getLengthOfCombinedArrays(name) {
    let length = 0;
    let arraySpec;
    for (let ii = 0; ii < arrayOfArrays.length; ++ii) {
      const arrays = arrayOfArrays[ii];
      const arrayInfo = arrays[name];
      const array = getArray(arrayInfo);
      length += array.length;
      if (!arraySpec || arrayInfo.data) {
        arraySpec = arrayInfo;
      }
    }
    return {
      length: length,
      spec: arraySpec,
    };
  }

  function copyArraysToNewArray(name, base, newArray) {
    let baseIndex = 0;
    let offset = 0;
    for (let ii = 0; ii < arrayOfArrays.length; ++ii) {
      const arrays = arrayOfArrays[ii];
      const arrayInfo = arrays[name];
      const array = getArray(arrayInfo);
      if (name === 'indices') {
        copyElements(array, newArray, offset, baseIndex);
        baseIndex += base[ii];
      } else {
        copyElements(array, newArray, offset);
      }
      offset += array.length;
    }
  }

  const base = names[baseName];

  const newArrays = {};
  Object.keys(names).forEach(function(name) {
    const info = getLengthOfCombinedArrays(name);
    const newArraySpec = createArrayOfSameType(info.spec, info.length);
    copyArraysToNewArray(name, base, getArray(newArraySpec));
    newArrays[name] = newArraySpec;
  });
  return newArrays;
}

/**
 * Creates a duplicate set of vertices
 *
 * This is useful for calling reorientVertices when you
 * also want to keep the original available
 *
 * @param {module:twgl.Arrays} arrays of vertices
 * @return {module:twgl.Arrays} The duplicated vertices.
 * @memberOf module:twgl/primitives
 */
function duplicateVertices(arrays) {
  const newArrays = {};
  Object.keys(arrays).forEach(function(name) {
    const arraySpec = arrays[name];
    const srcArray = getArray(arraySpec);
    const newArraySpec = createArrayOfSameType(arraySpec, srcArray.length);
    copyElements(srcArray, getArray(newArraySpec), 0);
    newArrays[name] = newArraySpec;
  });
  return newArrays;
}

const create3DFBufferInfo = createBufferInfoFunc(create3DFVertices);
const create3DFBuffers = createBufferFunc(create3DFVertices);
const createCubeBufferInfo = createBufferInfoFunc(createCubeVertices);
const createCubeBuffers = createBufferFunc(createCubeVertices);
const createPlaneBufferInfo = createBufferInfoFunc(createPlaneVertices);
const createPlaneBuffers = createBufferFunc(createPlaneVertices);
const createSphereBufferInfo = createBufferInfoFunc(createSphereVertices);
const createSphereBuffers = createBufferFunc(createSphereVertices);
const createTruncatedConeBufferInfo = createBufferInfoFunc(createTruncatedConeVertices);
const createTruncatedConeBuffers = createBufferFunc(createTruncatedConeVertices);
const createXYQuadBufferInfo = createBufferInfoFunc(createXYQuadVertices);
const createXYQuadBuffers = createBufferFunc(createXYQuadVertices);
const createCrescentBufferInfo = createBufferInfoFunc(createCrescentVertices);
const createCrescentBuffers = createBufferFunc(createCrescentVertices);
const createCylinderBufferInfo = createBufferInfoFunc(createCylinderVertices);
const createCylinderBuffers = createBufferFunc(createCylinderVertices);
const createTorusBufferInfo = createBufferInfoFunc(createTorusVertices);
const createTorusBuffers = createBufferFunc(createTorusVertices);
const createDiscBufferInfo = createBufferInfoFunc(createDiscVertices);
const createDiscBuffers = createBufferFunc(createDiscVertices);

// these were mis-spelled until 4.12
const createCresentBufferInfo = createCrescentBufferInfo;
const createCresentBuffers = createCrescentBuffers;
const createCresentVertices = createCrescentVertices;

var primitives = /*#__PURE__*/Object.freeze({
  __proto__: null,
  create3DFBufferInfo: create3DFBufferInfo,
  create3DFBuffers: create3DFBuffers,
  create3DFVertices: create3DFVertices,
  createAugmentedTypedArray: createAugmentedTypedArray,
  createCubeBufferInfo: createCubeBufferInfo,
  createCubeBuffers: createCubeBuffers,
  createCubeVertices: createCubeVertices,
  createPlaneBufferInfo: createPlaneBufferInfo,
  createPlaneBuffers: createPlaneBuffers,
  createPlaneVertices: createPlaneVertices,
  createSphereBufferInfo: createSphereBufferInfo,
  createSphereBuffers: createSphereBuffers,
  createSphereVertices: createSphereVertices,
  createTruncatedConeBufferInfo: createTruncatedConeBufferInfo,
  createTruncatedConeBuffers: createTruncatedConeBuffers,
  createTruncatedConeVertices: createTruncatedConeVertices,
  createXYQuadBufferInfo: createXYQuadBufferInfo,
  createXYQuadBuffers: createXYQuadBuffers,
  createXYQuadVertices: createXYQuadVertices,
  createCresentBufferInfo: createCresentBufferInfo,
  createCresentBuffers: createCresentBuffers,
  createCresentVertices: createCresentVertices,
  createCrescentBufferInfo: createCrescentBufferInfo,
  createCrescentBuffers: createCrescentBuffers,
  createCrescentVertices: createCrescentVertices,
  createCylinderBufferInfo: createCylinderBufferInfo,
  createCylinderBuffers: createCylinderBuffers,
  createCylinderVertices: createCylinderVertices,
  createTorusBufferInfo: createTorusBufferInfo,
  createTorusBuffers: createTorusBuffers,
  createTorusVertices: createTorusVertices,
  createDiscBufferInfo: createDiscBufferInfo,
  createDiscBuffers: createDiscBuffers,
  createDiscVertices: createDiscVertices,
  deindexVertices: deindexVertices,
  flattenNormals: flattenNormals,
  makeRandomVertexColors: makeRandomVertexColors,
  reorientDirections: reorientDirections,
  reorientNormals: reorientNormals,
  reorientPositions: reorientPositions,
  reorientVertices: reorientVertices,
  concatVertices: concatVertices,
  duplicateVertices: duplicateVertices
});

/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

/**
 * Gets the gl version as a number
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @return {number} version of gl
 * @private
 */
//function getVersionAsNumber(gl) {
//  return parseFloat(gl.getParameter(gl.VERSION).substr(6));
//}

/**
 * Check if context is WebGL 2.0
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @return {bool} true if it's WebGL 2.0
 * @memberOf module:twgl
 */
function isWebGL2(gl) {
  // This is the correct check but it's slow
  //  return gl.getParameter(gl.VERSION).indexOf("WebGL 2.0") === 0;
  // This might also be the correct check but I'm assuming it's slow-ish
  // return gl instanceof WebGL2RenderingContext;
  return !!gl.texStorage2D;
}

/**
 * Check if context is WebGL 1.0
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @return {bool} true if it's WebGL 1.0
 * @memberOf module:twgl
 */
function isWebGL1(gl) {
  // This is the correct check but it's slow
  // const version = getVersionAsNumber(gl);
  // return version <= 1.0 && version > 0.0;  // because as of 2016/5 Edge returns 0.96
  // This might also be the correct check but I'm assuming it's slow-ish
  // return gl instanceof WebGLRenderingContext;
  return !gl.texStorage2D;
}

/**
 * Gets a string for WebGL enum
 *
 * Note: Several enums are the same. Without more
 * context (which function) it's impossible to always
 * give the correct enum. As it is, for matching values
 * it gives all enums. Checking the WebGL2RenderingContext
 * that means
 *
 *      0     = ZERO | POINT | NONE | NO_ERROR
 *      1     = ONE | LINES | SYNC_FLUSH_COMMANDS_BIT
 *      32777 = BLEND_EQUATION_RGB | BLEND_EQUATION_RGB
 *      36662 = COPY_READ_BUFFER | COPY_READ_BUFFER_BINDING
 *      36663 = COPY_WRITE_BUFFER | COPY_WRITE_BUFFER_BINDING
 *      36006 = FRAMEBUFFER_BINDING | DRAW_FRAMEBUFFER_BINDING
 *
 * It's also not useful for bits really unless you pass in individual bits.
 * In other words
 *
 *     const bits = gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT;
 *     twgl.glEnumToString(gl, bits);  // not going to work
 *
 * Note that some enums only exist on extensions. If you
 * want them to show up you need to pass the extension at least
 * once. For example
 *
 *     const ext = gl.getExtension('WEBGL_compressed_texture_s3tc');
 *     if (ext) {
 *        twgl.glEnumToString(ext, 0);  // just prime the function
 *
 *        ..later..
 *
 *        const internalFormat = ext.COMPRESSED_RGB_S3TC_DXT1_EXT;
 *        console.log(twgl.glEnumToString(gl, internalFormat));
 *
 * Notice I didn't have to pass the extension the second time. This means
 * you can have place that generically gets an enum for texture formats for example.
 * and as long as you primed the function with the extensions
 *
 * If you're using `twgl.addExtensionsToContext` to enable your extensions
 * then twgl will automatically get the extension's enums.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext or any extension object
 * @param {number} value the value of the enum you want to look up.
 * @return {string} enum string or hex value
 * @memberOf module:twgl
 * @function glEnumToString
 */
const glEnumToString = (function() {
  const haveEnumsForType = {};
  const enums = {};

  function addEnums(gl) {
    const type = gl.constructor.name;
    if (!haveEnumsForType[type]) {
      for (const key in gl) {
        if (typeof gl[key] === 'number') {
          const existing = enums[gl[key]];
          enums[gl[key]] = existing ? `${existing} | ${key}` : key;
        }
      }
      haveEnumsForType[type] = true;
    }
  }

  return function glEnumToString(gl, value) {
    addEnums(gl);
    return enums[value] || (typeof value === 'number' ? `0x${value.toString(16)}` : value);
  };
}());

var utils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  glEnumToString: glEnumToString,
  isWebGL1: isWebGL1,
  isWebGL2: isWebGL2
});

/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
const defaults$1 = {
  textureColor: new Uint8Array([128, 192, 255, 255]),
  textureOptions: {},
  crossOrigin: undefined,
};
const isArrayBuffer = isArrayBuffer$1;

// Should we make this on demand?
const getShared2DContext = function() {
  let s_ctx;
  return function getShared2DContext() {
    s_ctx = s_ctx ||
        ((typeof document !== 'undefined' && document.createElement)
          ? document.createElement("canvas").getContext("2d")
          : null);
    return s_ctx;
  };
}();

// NOTE: Chrome supports 2D canvas in a Worker (behind flag as of v64 but
//       not only does Firefox NOT support it but Firefox freezes immediately
//       if you try to create one instead of just returning null and continuing.
//  : (global.OffscreenCanvas && (new global.OffscreenCanvas(1, 1)).getContext("2d"));  // OffscreenCanvas may not support 2d

// NOTE: We can maybe remove some of the need for the 2d canvas. In WebGL2
// we can use the various unpack settings. Otherwise we could try using
// the ability of an ImageBitmap to be cut. Unfortunately cutting an ImageBitmap
// is async and the current TWGL code expects a non-Async result though that
// might not be a problem. ImageBitmap though is not available in Edge or Safari
// as of 2018-01-02

/* PixelFormat */
const ALPHA                          = 0x1906;
const RGB                            = 0x1907;
const RGBA$1                           = 0x1908;
const LUMINANCE                      = 0x1909;
const LUMINANCE_ALPHA                = 0x190A;
const DEPTH_COMPONENT$1                = 0x1902;
const DEPTH_STENCIL$1                  = 0x84F9;

/* TextureWrapMode */
// const REPEAT                         = 0x2901;
// const MIRRORED_REPEAT                = 0x8370;
const CLAMP_TO_EDGE$1                  = 0x812f;

/* TextureMagFilter */
const NEAREST                        = 0x2600;
const LINEAR$1                         = 0x2601;

/* TextureMinFilter */
// const NEAREST_MIPMAP_NEAREST         = 0x2700;
// const LINEAR_MIPMAP_NEAREST          = 0x2701;
// const NEAREST_MIPMAP_LINEAR          = 0x2702;
// const LINEAR_MIPMAP_LINEAR           = 0x2703;

/* Texture Target */
const TEXTURE_2D$2                     = 0x0de1;
const TEXTURE_CUBE_MAP$1               = 0x8513;
const TEXTURE_3D$1                     = 0x806f;
const TEXTURE_2D_ARRAY$1               = 0x8c1a;

/* Cubemap Targets */
const TEXTURE_CUBE_MAP_POSITIVE_X    = 0x8515;
const TEXTURE_CUBE_MAP_NEGATIVE_X    = 0x8516;
const TEXTURE_CUBE_MAP_POSITIVE_Y    = 0x8517;
const TEXTURE_CUBE_MAP_NEGATIVE_Y    = 0x8518;
const TEXTURE_CUBE_MAP_POSITIVE_Z    = 0x8519;
const TEXTURE_CUBE_MAP_NEGATIVE_Z    = 0x851a;

/* Texture Parameters */
const TEXTURE_MIN_FILTER             = 0x2801;
const TEXTURE_MAG_FILTER             = 0x2800;
const TEXTURE_WRAP_S                 = 0x2802;
const TEXTURE_WRAP_T                 = 0x2803;
const TEXTURE_WRAP_R                 = 0x8072;
const TEXTURE_MIN_LOD                = 0x813a;
const TEXTURE_MAX_LOD                = 0x813b;
const TEXTURE_BASE_LEVEL             = 0x813c;
const TEXTURE_MAX_LEVEL              = 0x813d;
const TEXTURE_COMPARE_MODE           = 0x884C;
const TEXTURE_COMPARE_FUNC           = 0x884D;

/* Pixel store */
const UNPACK_ALIGNMENT                   = 0x0cf5;
const UNPACK_ROW_LENGTH                  = 0x0cf2;
const UNPACK_IMAGE_HEIGHT                = 0x806e;
const UNPACK_SKIP_PIXELS                 = 0x0cf4;
const UNPACK_SKIP_ROWS                   = 0x0cf3;
const UNPACK_SKIP_IMAGES                 = 0x806d;
const UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243;
const UNPACK_PREMULTIPLY_ALPHA_WEBGL     = 0x9241;
const UNPACK_FLIP_Y_WEBGL                = 0x9240;

const R8                           = 0x8229;
const R8_SNORM                     = 0x8F94;
const R16F                         = 0x822D;
const R32F                         = 0x822E;
const R8UI                         = 0x8232;
const R8I                          = 0x8231;
const RG16UI                       = 0x823A;
const RG16I                        = 0x8239;
const RG32UI                       = 0x823C;
const RG32I                        = 0x823B;
const RG8                          = 0x822B;
const RG8_SNORM                    = 0x8F95;
const RG16F                        = 0x822F;
const RG32F                        = 0x8230;
const RG8UI                        = 0x8238;
const RG8I                         = 0x8237;
const R16UI                        = 0x8234;
const R16I                         = 0x8233;
const R32UI                        = 0x8236;
const R32I                         = 0x8235;
const RGB8                         = 0x8051;
const SRGB8                        = 0x8C41;
const RGB565$1                       = 0x8D62;
const RGB8_SNORM                   = 0x8F96;
const R11F_G11F_B10F               = 0x8C3A;
const RGB9_E5                      = 0x8C3D;
const RGB16F                       = 0x881B;
const RGB32F                       = 0x8815;
const RGB8UI                       = 0x8D7D;
const RGB8I                        = 0x8D8F;
const RGB16UI                      = 0x8D77;
const RGB16I                       = 0x8D89;
const RGB32UI                      = 0x8D71;
const RGB32I                       = 0x8D83;
const RGBA8                        = 0x8058;
const SRGB8_ALPHA8                 = 0x8C43;
const RGBA8_SNORM                  = 0x8F97;
const RGB5_A1$1                      = 0x8057;
const RGBA4$1                        = 0x8056;
const RGB10_A2                     = 0x8059;
const RGBA16F                      = 0x881A;
const RGBA32F                      = 0x8814;
const RGBA8UI                      = 0x8D7C;
const RGBA8I                       = 0x8D8E;
const RGB10_A2UI                   = 0x906F;
const RGBA16UI                     = 0x8D76;
const RGBA16I                      = 0x8D88;
const RGBA32I                      = 0x8D82;
const RGBA32UI                     = 0x8D70;

const DEPTH_COMPONENT16$1            = 0x81A5;
const DEPTH_COMPONENT24$1            = 0x81A6;
const DEPTH_COMPONENT32F$1           = 0x8CAC;
const DEPTH32F_STENCIL8$1            = 0x8CAD;
const DEPTH24_STENCIL8$1             = 0x88F0;

/* DataType */
const BYTE                         = 0x1400;
const UNSIGNED_BYTE$1                = 0x1401;
const SHORT                        = 0x1402;
const UNSIGNED_SHORT$1               = 0x1403;
const INT$1                          = 0x1404;
const UNSIGNED_INT$1                 = 0x1405;
const FLOAT$1                        = 0x1406;
const UNSIGNED_SHORT_4_4_4_4       = 0x8033;
const UNSIGNED_SHORT_5_5_5_1       = 0x8034;
const UNSIGNED_SHORT_5_6_5         = 0x8363;
const HALF_FLOAT                   = 0x140B;
const HALF_FLOAT_OES               = 0x8D61;  // Thanks Khronos for making this different >:(
const UNSIGNED_INT_2_10_10_10_REV  = 0x8368;
const UNSIGNED_INT_10F_11F_11F_REV = 0x8C3B;
const UNSIGNED_INT_5_9_9_9_REV     = 0x8C3E;
const FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8DAD;
const UNSIGNED_INT_24_8            = 0x84FA;

const RG                           = 0x8227;
const RG_INTEGER                   = 0x8228;
const RED                          = 0x1903;
const RED_INTEGER                  = 0x8D94;
const RGB_INTEGER                  = 0x8D98;
const RGBA_INTEGER                 = 0x8D99;

const formatInfo = {};
{
  // NOTE: this is named `numColorComponents` vs `numComponents` so we can let Uglify mangle
  // the name.
  const f = formatInfo;
  f[ALPHA]           = { numColorComponents: 1, };
  f[LUMINANCE]       = { numColorComponents: 1, };
  f[LUMINANCE_ALPHA] = { numColorComponents: 2, };
  f[RGB]             = { numColorComponents: 3, };
  f[RGBA$1]            = { numColorComponents: 4, };
  f[RED]             = { numColorComponents: 1, };
  f[RED_INTEGER]     = { numColorComponents: 1, };
  f[RG]              = { numColorComponents: 2, };
  f[RG_INTEGER]      = { numColorComponents: 2, };
  f[RGB]             = { numColorComponents: 3, };
  f[RGB_INTEGER]     = { numColorComponents: 3, };
  f[RGBA$1]            = { numColorComponents: 4, };
  f[RGBA_INTEGER]    = { numColorComponents: 4, };
  f[DEPTH_COMPONENT$1] = { numColorComponents: 1, };
  f[DEPTH_STENCIL$1]   = { numColorComponents: 2, };
}

/**
 * @typedef {Object} TextureFormatDetails
 * @property {number} textureFormat format to pass texImage2D and similar functions.
 * @property {boolean} colorRenderable true if you can render to this format of texture.
 * @property {boolean} textureFilterable true if you can filter the texture, false if you can ony use `NEAREST`.
 * @property {number[]} type Array of possible types you can pass to texImage2D and similar function
 * @property {Object.<number,number>} bytesPerElementMap A map of types to bytes per element
 * @private
 */

let s_textureInternalFormatInfo;
function getTextureInternalFormatInfo(internalFormat) {
  if (!s_textureInternalFormatInfo) {
    // NOTE: these properties need unique names so we can let Uglify mangle the name.
    const t = {};
    // unsized formats
    t[ALPHA]              = { textureFormat: ALPHA,           colorRenderable: true,  textureFilterable: true,  bytesPerElement: [1, 2, 2, 4],        type: [UNSIGNED_BYTE$1, HALF_FLOAT, HALF_FLOAT_OES, FLOAT$1], };
    t[LUMINANCE]          = { textureFormat: LUMINANCE,       colorRenderable: true,  textureFilterable: true,  bytesPerElement: [1, 2, 2, 4],        type: [UNSIGNED_BYTE$1, HALF_FLOAT, HALF_FLOAT_OES, FLOAT$1], };
    t[LUMINANCE_ALPHA]    = { textureFormat: LUMINANCE_ALPHA, colorRenderable: true,  textureFilterable: true,  bytesPerElement: [2, 4, 4, 8],        type: [UNSIGNED_BYTE$1, HALF_FLOAT, HALF_FLOAT_OES, FLOAT$1], };
    t[RGB]                = { textureFormat: RGB,             colorRenderable: true,  textureFilterable: true,  bytesPerElement: [3, 6, 6, 12, 2],    type: [UNSIGNED_BYTE$1, HALF_FLOAT, HALF_FLOAT_OES, FLOAT$1, UNSIGNED_SHORT_5_6_5], };
    t[RGBA$1]               = { textureFormat: RGBA$1,            colorRenderable: true,  textureFilterable: true,  bytesPerElement: [4, 8, 8, 16, 2, 2], type: [UNSIGNED_BYTE$1, HALF_FLOAT, HALF_FLOAT_OES, FLOAT$1, UNSIGNED_SHORT_4_4_4_4, UNSIGNED_SHORT_5_5_5_1], };
    t[DEPTH_COMPONENT$1]    = { textureFormat: DEPTH_COMPONENT$1, colorRenderable: true,  textureFilterable: false, bytesPerElement: [2, 4],              type: [UNSIGNED_INT$1, UNSIGNED_SHORT$1], };

    // sized formats
    t[R8]                 = { textureFormat: RED,             colorRenderable: true,  textureFilterable: true,  bytesPerElement: [1],        type: [UNSIGNED_BYTE$1], };
    t[R8_SNORM]           = { textureFormat: RED,             colorRenderable: false, textureFilterable: true,  bytesPerElement: [1],        type: [BYTE], };
    t[R16F]               = { textureFormat: RED,             colorRenderable: false, textureFilterable: true,  bytesPerElement: [4, 2],     type: [FLOAT$1, HALF_FLOAT], };
    t[R32F]               = { textureFormat: RED,             colorRenderable: false, textureFilterable: false, bytesPerElement: [4],        type: [FLOAT$1], };
    t[R8UI]               = { textureFormat: RED_INTEGER,     colorRenderable: true,  textureFilterable: false, bytesPerElement: [1],        type: [UNSIGNED_BYTE$1], };
    t[R8I]                = { textureFormat: RED_INTEGER,     colorRenderable: true,  textureFilterable: false, bytesPerElement: [1],        type: [BYTE], };
    t[R16UI]              = { textureFormat: RED_INTEGER,     colorRenderable: true,  textureFilterable: false, bytesPerElement: [2],        type: [UNSIGNED_SHORT$1], };
    t[R16I]               = { textureFormat: RED_INTEGER,     colorRenderable: true,  textureFilterable: false, bytesPerElement: [2],        type: [SHORT], };
    t[R32UI]              = { textureFormat: RED_INTEGER,     colorRenderable: true,  textureFilterable: false, bytesPerElement: [4],        type: [UNSIGNED_INT$1], };
    t[R32I]               = { textureFormat: RED_INTEGER,     colorRenderable: true,  textureFilterable: false, bytesPerElement: [4],        type: [INT$1], };
    t[RG8]                = { textureFormat: RG,              colorRenderable: true,  textureFilterable: true,  bytesPerElement: [2],        type: [UNSIGNED_BYTE$1], };
    t[RG8_SNORM]          = { textureFormat: RG,              colorRenderable: false, textureFilterable: true,  bytesPerElement: [2],        type: [BYTE], };
    t[RG16F]              = { textureFormat: RG,              colorRenderable: false, textureFilterable: true,  bytesPerElement: [8, 4],     type: [FLOAT$1, HALF_FLOAT], };
    t[RG32F]              = { textureFormat: RG,              colorRenderable: false, textureFilterable: false, bytesPerElement: [8],        type: [FLOAT$1], };
    t[RG8UI]              = { textureFormat: RG_INTEGER,      colorRenderable: true,  textureFilterable: false, bytesPerElement: [2],        type: [UNSIGNED_BYTE$1], };
    t[RG8I]               = { textureFormat: RG_INTEGER,      colorRenderable: true,  textureFilterable: false, bytesPerElement: [2],        type: [BYTE], };
    t[RG16UI]             = { textureFormat: RG_INTEGER,      colorRenderable: true,  textureFilterable: false, bytesPerElement: [4],        type: [UNSIGNED_SHORT$1], };
    t[RG16I]              = { textureFormat: RG_INTEGER,      colorRenderable: true,  textureFilterable: false, bytesPerElement: [4],        type: [SHORT], };
    t[RG32UI]             = { textureFormat: RG_INTEGER,      colorRenderable: true,  textureFilterable: false, bytesPerElement: [8],        type: [UNSIGNED_INT$1], };
    t[RG32I]              = { textureFormat: RG_INTEGER,      colorRenderable: true,  textureFilterable: false, bytesPerElement: [8],        type: [INT$1], };
    t[RGB8]               = { textureFormat: RGB,             colorRenderable: true,  textureFilterable: true,  bytesPerElement: [3],        type: [UNSIGNED_BYTE$1], };
    t[SRGB8]              = { textureFormat: RGB,             colorRenderable: false, textureFilterable: true,  bytesPerElement: [3],        type: [UNSIGNED_BYTE$1], };
    t[RGB565$1]             = { textureFormat: RGB,             colorRenderable: true,  textureFilterable: true,  bytesPerElement: [3, 2],     type: [UNSIGNED_BYTE$1, UNSIGNED_SHORT_5_6_5], };
    t[RGB8_SNORM]         = { textureFormat: RGB,             colorRenderable: false, textureFilterable: true,  bytesPerElement: [3],        type: [BYTE], };
    t[R11F_G11F_B10F]     = { textureFormat: RGB,             colorRenderable: false, textureFilterable: true,  bytesPerElement: [12, 6, 4], type: [FLOAT$1, HALF_FLOAT, UNSIGNED_INT_10F_11F_11F_REV], };
    t[RGB9_E5]            = { textureFormat: RGB,             colorRenderable: false, textureFilterable: true,  bytesPerElement: [12, 6, 4], type: [FLOAT$1, HALF_FLOAT, UNSIGNED_INT_5_9_9_9_REV], };
    t[RGB16F]             = { textureFormat: RGB,             colorRenderable: false, textureFilterable: true,  bytesPerElement: [12, 6],    type: [FLOAT$1, HALF_FLOAT], };
    t[RGB32F]             = { textureFormat: RGB,             colorRenderable: false, textureFilterable: false, bytesPerElement: [12],       type: [FLOAT$1], };
    t[RGB8UI]             = { textureFormat: RGB_INTEGER,     colorRenderable: false, textureFilterable: false, bytesPerElement: [3],        type: [UNSIGNED_BYTE$1], };
    t[RGB8I]              = { textureFormat: RGB_INTEGER,     colorRenderable: false, textureFilterable: false, bytesPerElement: [3],        type: [BYTE], };
    t[RGB16UI]            = { textureFormat: RGB_INTEGER,     colorRenderable: false, textureFilterable: false, bytesPerElement: [6],        type: [UNSIGNED_SHORT$1], };
    t[RGB16I]             = { textureFormat: RGB_INTEGER,     colorRenderable: false, textureFilterable: false, bytesPerElement: [6],        type: [SHORT], };
    t[RGB32UI]            = { textureFormat: RGB_INTEGER,     colorRenderable: false, textureFilterable: false, bytesPerElement: [12],       type: [UNSIGNED_INT$1], };
    t[RGB32I]             = { textureFormat: RGB_INTEGER,     colorRenderable: false, textureFilterable: false, bytesPerElement: [12],       type: [INT$1], };
    t[RGBA8]              = { textureFormat: RGBA$1,            colorRenderable: true,  textureFilterable: true,  bytesPerElement: [4],        type: [UNSIGNED_BYTE$1], };
    t[SRGB8_ALPHA8]       = { textureFormat: RGBA$1,            colorRenderable: true,  textureFilterable: true,  bytesPerElement: [4],        type: [UNSIGNED_BYTE$1], };
    t[RGBA8_SNORM]        = { textureFormat: RGBA$1,            colorRenderable: false, textureFilterable: true,  bytesPerElement: [4],        type: [BYTE], };
    t[RGB5_A1$1]            = { textureFormat: RGBA$1,            colorRenderable: true,  textureFilterable: true,  bytesPerElement: [4, 2, 4],  type: [UNSIGNED_BYTE$1, UNSIGNED_SHORT_5_5_5_1, UNSIGNED_INT_2_10_10_10_REV], };
    t[RGBA4$1]              = { textureFormat: RGBA$1,            colorRenderable: true,  textureFilterable: true,  bytesPerElement: [4, 2],     type: [UNSIGNED_BYTE$1, UNSIGNED_SHORT_4_4_4_4], };
    t[RGB10_A2]           = { textureFormat: RGBA$1,            colorRenderable: true,  textureFilterable: true,  bytesPerElement: [4],        type: [UNSIGNED_INT_2_10_10_10_REV], };
    t[RGBA16F]            = { textureFormat: RGBA$1,            colorRenderable: false, textureFilterable: true,  bytesPerElement: [16, 8],    type: [FLOAT$1, HALF_FLOAT], };
    t[RGBA32F]            = { textureFormat: RGBA$1,            colorRenderable: false, textureFilterable: false, bytesPerElement: [16],       type: [FLOAT$1], };
    t[RGBA8UI]            = { textureFormat: RGBA_INTEGER,    colorRenderable: true,  textureFilterable: false, bytesPerElement: [4],        type: [UNSIGNED_BYTE$1], };
    t[RGBA8I]             = { textureFormat: RGBA_INTEGER,    colorRenderable: true,  textureFilterable: false, bytesPerElement: [4],        type: [BYTE], };
    t[RGB10_A2UI]         = { textureFormat: RGBA_INTEGER,    colorRenderable: true,  textureFilterable: false, bytesPerElement: [4],        type: [UNSIGNED_INT_2_10_10_10_REV], };
    t[RGBA16UI]           = { textureFormat: RGBA_INTEGER,    colorRenderable: true,  textureFilterable: false, bytesPerElement: [8],        type: [UNSIGNED_SHORT$1], };
    t[RGBA16I]            = { textureFormat: RGBA_INTEGER,    colorRenderable: true,  textureFilterable: false, bytesPerElement: [8],        type: [SHORT], };
    t[RGBA32I]            = { textureFormat: RGBA_INTEGER,    colorRenderable: true,  textureFilterable: false, bytesPerElement: [16],       type: [INT$1], };
    t[RGBA32UI]           = { textureFormat: RGBA_INTEGER,    colorRenderable: true,  textureFilterable: false, bytesPerElement: [16],       type: [UNSIGNED_INT$1], };
    // Sized Internal
    t[DEPTH_COMPONENT16$1]  = { textureFormat: DEPTH_COMPONENT$1, colorRenderable: true,  textureFilterable: false, bytesPerElement: [2, 4],     type: [UNSIGNED_SHORT$1, UNSIGNED_INT$1], };
    t[DEPTH_COMPONENT24$1]  = { textureFormat: DEPTH_COMPONENT$1, colorRenderable: true,  textureFilterable: false, bytesPerElement: [4],        type: [UNSIGNED_INT$1], };
    t[DEPTH_COMPONENT32F$1] = { textureFormat: DEPTH_COMPONENT$1, colorRenderable: true,  textureFilterable: false, bytesPerElement: [4],        type: [FLOAT$1], };
    t[DEPTH24_STENCIL8$1]   = { textureFormat: DEPTH_STENCIL$1,   colorRenderable: true,  textureFilterable: false, bytesPerElement: [4],        type: [UNSIGNED_INT_24_8], };
    t[DEPTH32F_STENCIL8$1]  = { textureFormat: DEPTH_STENCIL$1,   colorRenderable: true,  textureFilterable: false, bytesPerElement: [4],        type: [FLOAT_32_UNSIGNED_INT_24_8_REV], };

    Object.keys(t).forEach(function(internalFormat) {
      const info = t[internalFormat];
      info.bytesPerElementMap = {};
      info.bytesPerElement.forEach(function(bytesPerElement, ndx) {
        const type = info.type[ndx];
        info.bytesPerElementMap[type] = bytesPerElement;
      });
    });
    s_textureInternalFormatInfo = t;
  }
  return s_textureInternalFormatInfo[internalFormat];
}

/**
 * Gets the number of bytes per element for a given internalFormat / type
 * @param {number} internalFormat The internalFormat parameter from texImage2D etc..
 * @param {number} type The type parameter for texImage2D etc..
 * @return {number} the number of bytes per element for the given internalFormat, type combo
 * @memberOf module:twgl/textures
 */
function getBytesPerElementForInternalFormat(internalFormat, type) {
  const info = getTextureInternalFormatInfo(internalFormat);
  if (!info) {
    throw "unknown internal format";
  }
  const bytesPerElement = info.bytesPerElementMap[type];
  if (bytesPerElement === undefined) {
    throw "unknown internal format";
  }
  return bytesPerElement;
}

/**
 * Info related to a specific texture internalFormat as returned
 * from {@link module:twgl/textures.getFormatAndTypeForInternalFormat}.
 *
 * @typedef {Object} TextureFormatInfo
 * @property {number} format Format to pass to texImage2D and related functions
 * @property {number} type Type to pass to texImage2D and related functions
 * @memberOf module:twgl/textures
 */

/**
 * Gets the format and type for a given internalFormat
 *
 * @param {number} internalFormat The internal format
 * @return {module:twgl/textures.TextureFormatInfo} the corresponding format and type,
 * @memberOf module:twgl/textures
 */
function getFormatAndTypeForInternalFormat(internalFormat) {
  const info = getTextureInternalFormatInfo(internalFormat);
  if (!info) {
    throw "unknown internal format";
  }
  return {
    format: info.textureFormat,
    type: info.type[0],
  };
}

/**
 * Returns true if value is power of 2
 * @param {number} value number to check.
 * @return true if value is power of 2
 * @private
 */
function isPowerOf2(value) {
  return (value & (value - 1)) === 0;
}

/**
 * Gets whether or not we can generate mips for the given
 * internal format.
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {number} width The width parameter from texImage2D etc..
 * @param {number} height The height parameter from texImage2D etc..
 * @param {number} internalFormat The internalFormat parameter from texImage2D etc..
 * @return {boolean} true if we can generate mips
 * @memberOf module:twgl/textures
 */
function canGenerateMipmap(gl, width, height, internalFormat) {
  if (!isWebGL2(gl)) {
    return isPowerOf2(width) && isPowerOf2(height);
  }
  const info = getTextureInternalFormatInfo(internalFormat);
  if (!info) {
    throw "unknown internal format";
  }
  return info.colorRenderable && info.textureFilterable;
}

/**
 * Gets whether or not we can generate mips for the given format
 * @param {number} internalFormat The internalFormat parameter from texImage2D etc..
 * @return {boolean} true if we can generate mips
 * @memberOf module:twgl/textures
 */
function canFilter(internalFormat) {
  const info = getTextureInternalFormatInfo(internalFormat);
  if (!info) {
    throw "unknown internal format";
  }
  return info.textureFilterable;
}

/**
 * Gets the number of components for a given image format.
 * @param {number} format the format.
 * @return {number} the number of components for the format.
 * @memberOf module:twgl/textures
 */
function getNumComponentsForFormat(format) {
  const info = formatInfo[format];
  if (!info) {
    throw "unknown format: " + format;
  }
  return info.numColorComponents;
}

/**
 * Gets the texture type for a given array type.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @return {number} the gl texture type
 * @private
 */
function getTextureTypeForArrayType(gl, src, defaultType) {
  if (isArrayBuffer(src)) {
    return getGLTypeForTypedArray(src);
  }
  return defaultType || UNSIGNED_BYTE$1;
}

function guessDimensions(gl, target, width, height, numElements) {
  if (numElements % 1 !== 0) {
    throw "can't guess dimensions";
  }
  if (!width && !height) {
    const size = Math.sqrt(numElements / (target === TEXTURE_CUBE_MAP$1 ? 6 : 1));
    if (size % 1 === 0) {
      width = size;
      height = size;
    } else {
      width = numElements;
      height = 1;
    }
  } else if (!height) {
    height = numElements / width;
    if (height % 1) {
      throw "can't guess dimensions";
    }
  } else if (!width) {
    width = numElements / height;
    if (width % 1) {
      throw "can't guess dimensions";
    }
  }
  return {
    width: width,
    height: height,
  };
}

/**
 * Sets the default texture color.
 *
 * The default texture color is used when loading textures from
 * urls. Because the URL will be loaded async we'd like to be
 * able to use the texture immediately. By putting a 1x1 pixel
 * color in the texture we can start using the texture before
 * the URL has loaded.
 *
 * @param {number[]} color Array of 4 values in the range 0 to 1
 * @deprecated see {@link module:twgl.setDefaults}
 * @memberOf module:twgl/textures
 */
function setDefaultTextureColor(color) {
  defaults$1.textureColor = new Uint8Array([color[0] * 255, color[1] * 255, color[2] * 255, color[3] * 255]);
}

function setDefaults$1(newDefaults) {
  copyExistingProperties(newDefaults, defaults$1);
  if (newDefaults.textureColor) {
    setDefaultTextureColor(newDefaults.textureColor);
  }
}

/**
 * A function to generate the source for a texture.
 * @callback TextureFunc
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {module:twgl.TextureOptions} options the texture options
 * @return {*} Returns any of the things documented for `src` for {@link module:twgl.TextureOptions}.
 * @memberOf module:twgl
 */

/**
 * Texture options passed to most texture functions. Each function will use whatever options
 * are appropriate for its needs. This lets you pass the same options to all functions.
 *
 * Note: A `TexImageSource` is defined in the WebGL spec as a `HTMLImageElement`, `HTMLVideoElement`,
 * `HTMLCanvasElement`, `ImageBitmap`, or `ImageData`.
 *
 * @typedef {Object} TextureOptions
 * @property {number} [target] the type of texture `gl.TEXTURE_2D` or `gl.TEXTURE_CUBE_MAP`. Defaults to `gl.TEXTURE_2D`.
 * @property {number} [level] the mip level to affect. Defaults to 0. Note, if set auto will be considered false unless explicitly set to true.
 * @property {number} [width] the width of the texture. Only used if src is an array or typed array or null.
 * @property {number} [height] the height of a texture. Only used if src is an array or typed array or null.
 * @property {number} [depth] the depth of a texture. Only used if src is an array or type array or null and target is `TEXTURE_3D` .
 * @property {number} [min] the min filter setting (eg. `gl.LINEAR`). Defaults to `gl.NEAREST_MIPMAP_LINEAR`
 *     or if texture is not a power of 2 on both dimensions then defaults to `gl.LINEAR`.
 * @property {number} [mag] the mag filter setting (eg. `gl.LINEAR`). Defaults to `gl.LINEAR`
 * @property {number} [minMag] both the min and mag filter settings.
 * @property {number} [internalFormat] internal format for texture. Defaults to `gl.RGBA`
 * @property {number} [format] format for texture. Defaults to `gl.RGBA`.
 * @property {number} [type] type for texture. Defaults to `gl.UNSIGNED_BYTE` unless `src` is ArrayBufferView. If `src`
 *     is ArrayBufferView defaults to type that matches ArrayBufferView type.
 * @property {number} [wrap] Texture wrapping for both S and T (and R if TEXTURE_3D or WebGLSampler). Defaults to `gl.REPEAT` for 2D unless src is WebGL1 and src not npot and `gl.CLAMP_TO_EDGE` for cube
 * @property {number} [wrapS] Texture wrapping for S. Defaults to `gl.REPEAT` and `gl.CLAMP_TO_EDGE` for cube. If set takes precedence over `wrap`.
 * @property {number} [wrapT] Texture wrapping for T. Defaults to `gl.REPEAT` and `gl.CLAMP_TO_EDGE` for cube. If set takes precedence over `wrap`.
 * @property {number} [wrapR] Texture wrapping for R. Defaults to `gl.REPEAT` and `gl.CLAMP_TO_EDGE` for cube. If set takes precedence over `wrap`.
 * @property {number} [minLod] TEXTURE_MIN_LOD setting
 * @property {number} [maxLod] TEXTURE_MAX_LOD setting
 * @property {number} [baseLevel] TEXTURE_BASE_LEVEL setting
 * @property {number} [maxLevel] TEXTURE_MAX_LEVEL setting
 * @property {number} [compareFunc] TEXTURE_COMPARE_FUNC setting
 * @property {number} [compareMode] TEXTURE_COMPARE_MODE setting
 * @property {number} [unpackAlignment] The `gl.UNPACK_ALIGNMENT` used when uploading an array. Defaults to 1.
 * @property {number[]|ArrayBufferView} [color] Color to initialize this texture with if loading an image asynchronously.
 *     The default use a blue 1x1 pixel texture. You can set another default by calling `twgl.setDefaults`
 *     or you can set an individual texture's initial color by setting this property. Example: `[1, .5, .5, 1]` = pink
 * @property {number} [premultiplyAlpha] Whether or not to premultiply alpha. Defaults to whatever the current setting is.
 *     This lets you set it once before calling `twgl.createTexture` or `twgl.createTextures` and only override
 *     the current setting for specific textures.
 * @property {number} [flipY] Whether or not to flip the texture vertically on upload. Defaults to whatever the current setting is.
 *     This lets you set it once before calling `twgl.createTexture` or `twgl.createTextures` and only override
 *     the current setting for specific textures.
 * @property {number} [colorspaceConversion] Whether or not to let the browser do colorspace conversion of the texture on upload. Defaults to whatever the current setting is.
 *     This lets you set it once before calling `twgl.createTexture` or `twgl.createTextures` and only override
 *     the current setting for specific textures.
 * @property {boolean} [auto] If `undefined` or `true`, in WebGL1, texture filtering is set automatically for non-power of 2 images and
 *    mips are generated for power of 2 images. In WebGL2 mips are generated if they can be. Note: if `level` is set above
 *    then then `auto` is assumed to be `false` unless explicity set to `true`.
 * @property {number[]} [cubeFaceOrder] The order that cube faces are pulled out of an img or set of images. The default is
 *
 *     [gl.TEXTURE_CUBE_MAP_POSITIVE_X,
 *      gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
 *      gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
 *      gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
 *      gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
 *      gl.TEXTURE_CUBE_MAP_NEGATIVE_Z]
 *
 * @property {(number[]|ArrayBufferView|TexImageSource|TexImageSource[]|string|string[]|module:twgl.TextureFunc)} [src] source for texture
 *
 *    If `string` then it's assumed to be a URL to an image. The image will be downloaded async. A usable
 *    1x1 pixel texture will be returned immediately. The texture will be updated once the image has downloaded.
 *    If `target` is `gl.TEXTURE_CUBE_MAP` will attempt to divide image into 6 square pieces. 1x6, 6x1, 3x2, 2x3.
 *    The pieces will be uploaded in `cubeFaceOrder`
 *
 *    If `string[]` or `TexImageSource[]` and target is `gl.TEXTURE_CUBE_MAP` then it must have 6 entries, one for each face of a cube map.
 *
 *    If `string[]` or `TexImageSource[]` and target is `gl.TEXTURE_2D_ARRAY` then each entry is a slice of the a 2d array texture
 *    and will be scaled to the specified width and height OR to the size of the first image that loads.
 *
 *    If `TexImageSource` then it wil be used immediately to create the contents of the texture. Examples `HTMLImageElement`,
 *    `HTMLCanvasElement`, `HTMLVideoElement`.
 *
 *    If `number[]` or `ArrayBufferView` it's assumed to be data for a texture. If `width` or `height` is
 *    not specified it is guessed as follows. First the number of elements is computed by `src.length / numComponents`
 *    where `numComponents` is derived from `format`. If `target` is `gl.TEXTURE_CUBE_MAP` then `numElements` is divided
 *    by 6. Then
 *
 *    *   If neither `width` nor `height` are specified and `sqrt(numElements)` is an integer then width and height
 *        are set to `sqrt(numElements)`. Otherwise `width = numElements` and `height = 1`.
 *
 *    *   If only one of `width` or `height` is specified then the other equals `numElements / specifiedDimension`.
 *
 * If `number[]` will be converted to `type`.
 *
 * If `src` is a function it will be called with a `WebGLRenderingContext` and these options.
 * Whatever it returns is subject to these rules. So it can return a string url, an `HTMLElement`
 * an array etc...
 *
 * If `src` is undefined then an empty texture will be created of size `width` by `height`.
 *
 * @property {string} [crossOrigin] What to set the crossOrigin property of images when they are downloaded.
 *    default: undefined. Also see {@link module:twgl.setDefaults}.
 *
 * @memberOf module:twgl
 */

/**
 * Sets any packing state that will be set based on the options.
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @private
 */
function setPackState(gl, options) {
  if (options.colorspaceConversion !== undefined) {
    gl.pixelStorei(UNPACK_COLORSPACE_CONVERSION_WEBGL, options.colorspaceConversion);
  }
  if (options.premultiplyAlpha !== undefined) {
    gl.pixelStorei(UNPACK_PREMULTIPLY_ALPHA_WEBGL, options.premultiplyAlpha);
  }
  if (options.flipY !== undefined) {
    gl.pixelStorei(UNPACK_FLIP_Y_WEBGL, options.flipY);
  }
}

/**
 * Set skip state to defaults
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @private
 */
function setSkipStateToDefault(gl) {
  gl.pixelStorei(UNPACK_ALIGNMENT, 4);
  if (isWebGL2(gl)) {
    gl.pixelStorei(UNPACK_ROW_LENGTH, 0);
    gl.pixelStorei(UNPACK_IMAGE_HEIGHT, 0);
    gl.pixelStorei(UNPACK_SKIP_PIXELS, 0);
    gl.pixelStorei(UNPACK_SKIP_ROWS, 0);
    gl.pixelStorei(UNPACK_SKIP_IMAGES, 0);
  }
}

/**
 * Sets the parameters of a texture or sampler
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {number|WebGLSampler} target texture target or sampler
 * @param {function()} parameteriFn texParameteri or samplerParameteri fn
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @private
 */
function setTextureSamplerParameters(gl, target, parameteriFn, options) {
  if (options.minMag) {
    parameteriFn.call(gl, target, TEXTURE_MIN_FILTER, options.minMag);
    parameteriFn.call(gl, target, TEXTURE_MAG_FILTER, options.minMag);
  }
  if (options.min) {
    parameteriFn.call(gl, target, TEXTURE_MIN_FILTER, options.min);
  }
  if (options.mag) {
    parameteriFn.call(gl, target, TEXTURE_MAG_FILTER, options.mag);
  }
  if (options.wrap) {
    parameteriFn.call(gl, target, TEXTURE_WRAP_S, options.wrap);
    parameteriFn.call(gl, target, TEXTURE_WRAP_T, options.wrap);
    if (target === TEXTURE_3D$1 || isSampler(gl, target)) {
      parameteriFn.call(gl, target, TEXTURE_WRAP_R, options.wrap);
    }
  }
  if (options.wrapR) {
    parameteriFn.call(gl, target, TEXTURE_WRAP_R, options.wrapR);
  }
  if (options.wrapS) {
    parameteriFn.call(gl, target, TEXTURE_WRAP_S, options.wrapS);
  }
  if (options.wrapT) {
    parameteriFn.call(gl, target, TEXTURE_WRAP_T, options.wrapT);
  }
  if (options.minLod !== undefined) {
    parameteriFn.call(gl, target, TEXTURE_MIN_LOD, options.minLod);
  }
  if (options.maxLod !== undefined) {
    parameteriFn.call(gl, target, TEXTURE_MAX_LOD, options.maxLod);
  }
  if (options.baseLevel !== undefined) {
    parameteriFn.call(gl, target, TEXTURE_BASE_LEVEL, options.baseLevel);
  }
  if (options.maxLevel !== undefined) {
    parameteriFn.call(gl, target, TEXTURE_MAX_LEVEL, options.maxLevel);
  }
  if (options.compareFunc !== undefined) {
    parameteriFn.call(gl, target, TEXTURE_COMPARE_FUNC, options.compareFunc);
  }
  if (options.compareMode !== undefined) {
    parameteriFn.call(gl, target, TEXTURE_COMPARE_MODE, options.compareMode);
  }
}

/**
 * Sets the texture parameters of a texture.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @memberOf module:twgl/textures
 */
function setTextureParameters(gl, tex, options) {
  const target = options.target || TEXTURE_2D$2;
  gl.bindTexture(target, tex);
  setTextureSamplerParameters(gl, target, gl.texParameteri, options);
}

/**
 * Sets the sampler parameters of a sampler.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLSampler} sampler the WebGLSampler to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @memberOf module:twgl/textures
 */
function setSamplerParameters(gl, sampler, options) {
  setTextureSamplerParameters(gl, sampler, gl.samplerParameteri, options);
}

/**
 * Creates a new sampler object and sets parameters.
 *
 * Example:
 *
 *      const sampler = twgl.createSampler(gl, {
 *        minMag: gl.NEAREST,         // sets both TEXTURE_MIN_FILTER and TEXTURE_MAG_FILTER
 *        wrap: gl.CLAMP_TO_NEAREST,  // sets both TEXTURE_WRAP_S and TEXTURE_WRAP_T and TEXTURE_WRAP_R
 *      });
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {Object.<string,module:twgl.TextureOptions>} options A object of TextureOptions one per sampler.
 * @return {Object.<string,WebGLSampler>} the created samplers by name
 * @private
 */
function createSampler(gl, options) {
  const sampler = gl.createSampler();
  setSamplerParameters(gl, sampler, options);
  return sampler;
}

/**
 * Creates a multiple sampler objects and sets parameters on each.
 *
 * Example:
 *
 *      const samplers = twgl.createSamplers(gl, {
 *        nearest: {
 *          minMag: gl.NEAREST,
 *        },
 *        nearestClampS: {
 *          minMag: gl.NEAREST,
 *          wrapS: gl.CLAMP_TO_NEAREST,
 *        },
 *        linear: {
 *          minMag: gl.LINEAR,
 *        },
 *        nearestClamp: {
 *          minMag: gl.NEAREST,
 *          wrap: gl.CLAMP_TO_EDGE,
 *        },
 *        linearClamp: {
 *          minMag: gl.LINEAR,
 *          wrap: gl.CLAMP_TO_EDGE,
 *        },
 *        linearClampT: {
 *          minMag: gl.LINEAR,
 *          wrapT: gl.CLAMP_TO_EDGE,
 *        },
 *      });
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set on the sampler
 * @private
 */
function createSamplers(gl, samplerOptions) {
  const samplers = {};
  Object.keys(samplerOptions).forEach(function(name) {
    samplers[name] = createSampler(gl, samplerOptions[name]);
  });
  return samplers;
}

/**
 * Makes a 1x1 pixel
 * If no color is passed in uses the default color which can be set by calling `setDefaultTextureColor`.
 * @param {(number[]|ArrayBufferView)} [color] The color using 0-1 values
 * @return {Uint8Array} Unit8Array with color.
 * @private
 */
function make1Pixel(color) {
  color = color || defaults$1.textureColor;
  if (isArrayBuffer(color)) {
    return color;
  }
  return new Uint8Array([color[0] * 255, color[1] * 255, color[2] * 255, color[3] * 255]);
}

/**
 * Sets filtering or generates mips for texture based on width or height
 * If width or height is not passed in uses `options.width` and//or `options.height`
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @param {number} [width] width of texture
 * @param {number} [height] height of texture
 * @param {number} [internalFormat] The internalFormat parameter from texImage2D etc..
 * @memberOf module:twgl/textures
 */
function setTextureFilteringForSize(gl, tex, options, width, height, internalFormat) {
  options = options || defaults$1.textureOptions;
  internalFormat = internalFormat || RGBA$1;
  const target = options.target || TEXTURE_2D$2;
  width = width || options.width;
  height = height || options.height;
  gl.bindTexture(target, tex);
  if (canGenerateMipmap(gl, width, height, internalFormat)) {
    gl.generateMipmap(target);
  } else {
    const filtering = canFilter(internalFormat) ? LINEAR$1 : NEAREST;
    gl.texParameteri(target, TEXTURE_MIN_FILTER, filtering);
    gl.texParameteri(target, TEXTURE_MAG_FILTER, filtering);
    gl.texParameteri(target, TEXTURE_WRAP_S, CLAMP_TO_EDGE$1);
    gl.texParameteri(target, TEXTURE_WRAP_T, CLAMP_TO_EDGE$1);
  }
}

function shouldAutomaticallySetTextureFilteringForSize(options) {
  return options.auto === true || (options.auto === undefined && options.level === undefined);
}

/**
 * Gets an array of cubemap face enums
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @return {number[]} cubemap face enums
 * @private
 */
function getCubeFaceOrder(gl, options) {
  options = options || {};
  return options.cubeFaceOrder || [
      TEXTURE_CUBE_MAP_POSITIVE_X,
      TEXTURE_CUBE_MAP_NEGATIVE_X,
      TEXTURE_CUBE_MAP_POSITIVE_Y,
      TEXTURE_CUBE_MAP_NEGATIVE_Y,
      TEXTURE_CUBE_MAP_POSITIVE_Z,
      TEXTURE_CUBE_MAP_NEGATIVE_Z,
    ];
}

/**
 * @typedef {Object} FaceInfo
 * @property {number} face gl enum for texImage2D
 * @property {number} ndx face index (0 - 5) into source data
 * @ignore
 */

/**
 * Gets an array of FaceInfos
 * There's a bug in some NVidia drivers that will crash the driver if
 * `gl.TEXTURE_CUBE_MAP_POSITIVE_X` is not uploaded first. So, we take
 * the user's desired order from his faces to WebGL and make sure we
 * do the faces in WebGL order
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @return {FaceInfo[]} cubemap face infos. Arguably the `face` property of each element is redundant but
 *    it's needed internally to sort the array of `ndx` properties by `face`.
 * @private
 */
function getCubeFacesWithNdx(gl, options) {
  const faces = getCubeFaceOrder(gl, options);
  // work around bug in NVidia drivers. We have to upload the first face first else the driver crashes :(
  const facesWithNdx = faces.map(function(face, ndx) {
    return { face: face, ndx: ndx };
  });
  facesWithNdx.sort(function(a, b) {
    return a.face - b.face;
  });
  return facesWithNdx;
}

/**
 * Set a texture from the contents of an element. Will also set
 * texture filtering or generate mips based on the dimensions of the element
 * unless `options.auto === false`. If `target === gl.TEXTURE_CUBE_MAP` will
 * attempt to slice image into 1x6, 2x3, 3x2, or 6x1 images, one for each face.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {HTMLElement} element a canvas, img, or video element.
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @memberOf module:twgl/textures
 * @kind function
 */
function setTextureFromElement(gl, tex, element, options) {
  options = options || defaults$1.textureOptions;
  const target = options.target || TEXTURE_2D$2;
  const level = options.level || 0;
  let width = element.width;
  let height = element.height;
  const internalFormat = options.internalFormat || options.format || RGBA$1;
  const formatType = getFormatAndTypeForInternalFormat(internalFormat);
  const format = options.format || formatType.format;
  const type = options.type || formatType.type;
  setPackState(gl, options);
  gl.bindTexture(target, tex);
  if (target === TEXTURE_CUBE_MAP$1) {
    // guess the parts
    const imgWidth  = element.width;
    const imgHeight = element.height;
    let size;
    let slices;
    if (imgWidth / 6 === imgHeight) {
      // It's 6x1
      size = imgHeight;
      slices = [0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0];
    } else if (imgHeight / 6 === imgWidth) {
      // It's 1x6
      size = imgWidth;
      slices = [0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5];
    } else if (imgWidth / 3 === imgHeight / 2) {
      // It's 3x2
      size = imgWidth / 3;
      slices = [0, 0, 1, 0, 2, 0, 0, 1, 1, 1, 2, 1];
    } else if (imgWidth / 2 === imgHeight / 3) {
      // It's 2x3
      size = imgWidth / 2;
      slices = [0, 0, 1, 0, 0, 1, 1, 1, 0, 2, 1, 2];
    } else {
      throw "can't figure out cube map from element: " + (element.src ? element.src : element.nodeName);
    }
    const ctx = getShared2DContext();
    if (ctx) {
      ctx.canvas.width = size;
      ctx.canvas.height = size;
      width = size;
      height = size;
      getCubeFacesWithNdx(gl, options).forEach(function(f) {
        const xOffset = slices[f.ndx * 2 + 0] * size;
        const yOffset = slices[f.ndx * 2 + 1] * size;
        ctx.drawImage(element, xOffset, yOffset, size, size, 0, 0, size, size);
        gl.texImage2D(f.face, level, internalFormat, format, type, ctx.canvas);
      });
      // Free up the canvas memory
      ctx.canvas.width = 1;
      ctx.canvas.height = 1;
    } else if (typeof createImageBitmap !== 'undefined') {
      // NOTE: It seems like we should prefer ImageBitmap because unlike canvas it's
      // note lossy? (alpha is not premultiplied? although I'm not sure what
      width = size;
      height = size;
      getCubeFacesWithNdx(gl, options).forEach(function(f) {
        const xOffset = slices[f.ndx * 2 + 0] * size;
        const yOffset = slices[f.ndx * 2 + 1] * size;
        // We can't easily use a default texture color here as it would have to match
        // the type across all faces where as with a 2D one there's only one face
        // so we're replacing everything all at once. It also has to be the correct size.
        // On the other hand we need all faces to be the same size so as one face loads
        // the rest match else the texture will be un-renderable.
        gl.texImage2D(f.face, level, internalFormat, size, size, 0, format, type, null);
        createImageBitmap(element, xOffset, yOffset, size, size, {
          premultiplyAlpha: 'none',
          colorSpaceConversion: 'none',
        })
        .then(function(imageBitmap) {
          setPackState(gl, options);
          gl.bindTexture(target, tex);
          gl.texImage2D(f.face, level, internalFormat, format, type, imageBitmap);
          if (shouldAutomaticallySetTextureFilteringForSize(options)) {
            setTextureFilteringForSize(gl, tex, options, width, height, internalFormat);
          }
        });
      });
    }
  } else if (target === TEXTURE_3D$1 || target === TEXTURE_2D_ARRAY$1) {
    const smallest = Math.min(element.width, element.height);
    const largest = Math.max(element.width, element.height);
    const depth = largest / smallest;
    if (depth % 1 !== 0) {
      throw "can not compute 3D dimensions of element";
    }
    const xMult = element.width  === largest ? 1 : 0;
    const yMult = element.height === largest ? 1 : 0;
    gl.pixelStorei(UNPACK_ALIGNMENT, 1);
    gl.pixelStorei(UNPACK_ROW_LENGTH, element.width);
    gl.pixelStorei(UNPACK_IMAGE_HEIGHT, 0);
    gl.pixelStorei(UNPACK_SKIP_IMAGES, 0);
    gl.texImage3D(target, level, internalFormat, smallest, smallest, smallest, 0, format, type, null);
    for (let d = 0; d < depth; ++d) {
      const srcX = d * smallest * xMult;
      const srcY = d * smallest * yMult;
      gl.pixelStorei(UNPACK_SKIP_PIXELS, srcX);
      gl.pixelStorei(UNPACK_SKIP_ROWS, srcY);
      gl.texSubImage3D(target, level, 0, 0, d, smallest, smallest, 1, format, type, element);
    }
    setSkipStateToDefault(gl);
  } else {
    gl.texImage2D(target, level, internalFormat, format, type, element);
  }
  if (shouldAutomaticallySetTextureFilteringForSize(options)) {
    setTextureFilteringForSize(gl, tex, options, width, height, internalFormat);
  }
  setTextureParameters(gl, tex, options);
}

function noop() {
}

/**
 * Checks whether the url's origin is the same so that we can set the `crossOrigin`
 * @param {string} url url to image
 * @returns {boolean} true if the window's origin is the same as image's url
 * @private
 */
function urlIsSameOrigin(url) {
  if (typeof document !== 'undefined') {
    // for IE really
    const a = document.createElement('a');
    a.href = url;
    return a.hostname === location.hostname &&
           a.port     === location.port &&
           a.protocol === location.protocol;
  } else {
    const localOrigin = (new URL(location.href)).origin;
    const urlOrigin = (new URL(url, location.href)).origin;
    return urlOrigin === localOrigin;
  }
}

function setToAnonymousIfUndefinedAndURLIsNotSameOrigin(url, crossOrigin) {
  return crossOrigin === undefined && !urlIsSameOrigin(url)
     ? 'anonymous'
     : crossOrigin;
}

/**
 * Loads an image
 * @param {string} url url to image
 * @param {string} crossOrigin
 * @param {function(err, img)} [callback] a callback that's passed an error and the image. The error will be non-null
 *     if there was an error
 * @return {HTMLImageElement} the image being loaded.
 * @private
 */
function loadImage(url, crossOrigin, callback) {
  callback = callback || noop;
  let img;
  crossOrigin = crossOrigin !== undefined ? crossOrigin : defaults$1.crossOrigin;
  crossOrigin = setToAnonymousIfUndefinedAndURLIsNotSameOrigin(url, crossOrigin);
  if (typeof Image !== 'undefined') {
    img = new Image();
    if (crossOrigin !== undefined) {
      img.crossOrigin = crossOrigin;
    }

    const clearEventHandlers = function clearEventHandlers() {
      img.removeEventListener('error', onError);  // eslint-disable-line
      img.removeEventListener('load', onLoad);  // eslint-disable-line
      img = null;
    };

    const onError = function onError() {
      const msg = "couldn't load image: " + url;
      error$1(msg);
      callback(msg, img);
      clearEventHandlers();
    };

    const onLoad = function onLoad() {
      callback(null, img);
      clearEventHandlers();
    };

    img.addEventListener('error', onError);
    img.addEventListener('load', onLoad);
    img.src = url;
    return img;
  } else if (typeof ImageBitmap !== 'undefined') {
    let err;
    let bm;
    const cb = function cb() {
      callback(err, bm);
    };

    const options = {};
    if (crossOrigin) {
      options.mode = 'cors'; // TODO: not sure how to translate image.crossOrigin
    }
    fetch(url, options).then(function(response) {
      if (!response.ok) {
        throw response;
      }
      return response.blob();
    }).then(function(blob) {
      return createImageBitmap(blob, {
        premultiplyAlpha: 'none',
        colorSpaceConversion: 'none',
      });
    }).then(function(bitmap) {
      // not sure if this works. We don't want
      // to catch the user's error. So, call
      // the callback in a timeout so we're
      // not in this scope inside the promise.
      bm = bitmap;
      setTimeout(cb);
    }).catch(function(e) {
      err = e;
      setTimeout(cb);
    });
    img = null;
  }
  return img;
}

/**
 * check if object is a TexImageSource
 *
 * @param {Object} obj Object to test
 * @return {boolean} true if object is a TexImageSource
 * @private
 */
function isTexImageSource(obj) {
  return (typeof ImageBitmap !== 'undefined' && obj instanceof ImageBitmap) ||
         (typeof ImageData !== 'undefined'  && obj instanceof ImageData) ||
         (typeof HTMLElement !== 'undefined'  && obj instanceof HTMLElement);
}

/**
 * if obj is an TexImageSource then just
 * uses it otherwise if obj is a string
 * then load it first.
 *
 * @param {string|TexImageSource} obj
 * @param {string} crossOrigin
 * @param {function(err, img)} [callback] a callback that's passed an error and the image. The error will be non-null
 *     if there was an error
 * @private
 */
function loadAndUseImage(obj, crossOrigin, callback) {
  if (isTexImageSource(obj)) {
    setTimeout(function() {
      callback(null, obj);
    });
    return obj;
  }

  return loadImage(obj, crossOrigin, callback);
}

/**
 * Sets a texture to a 1x1 pixel color. If `options.color === false` is nothing happens. If it's not set
 * the default texture color is used which can be set by calling `setDefaultTextureColor`.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @memberOf module:twgl/textures
 * @private
 */
function setTextureTo1PixelColor(gl, tex, options) {
  options = options || defaults$1.textureOptions;
  const target = options.target || TEXTURE_2D$2;
  gl.bindTexture(target, tex);
  if (options.color === false) {
    return;
  }
  // Assume it's a URL
  // Put 1x1 pixels in texture. That makes it renderable immediately regardless of filtering.
  const color = make1Pixel(options.color);
  if (target === TEXTURE_CUBE_MAP$1) {
    for (let ii = 0; ii < 6; ++ii) {
      gl.texImage2D(TEXTURE_CUBE_MAP_POSITIVE_X + ii, 0, RGBA$1, 1, 1, 0, RGBA$1, UNSIGNED_BYTE$1, color);
    }
  } else if (target === TEXTURE_3D$1 || target === TEXTURE_2D_ARRAY$1) {
    gl.texImage3D(target, 0, RGBA$1, 1, 1, 1, 0, RGBA$1, UNSIGNED_BYTE$1, color);
  } else {
    gl.texImage2D(target, 0, RGBA$1, 1, 1, 0, RGBA$1, UNSIGNED_BYTE$1, color);
  }
}

/**
 * The src image(s) used to create a texture.
 *
 * When you call {@link module:twgl.createTexture} or {@link module:twgl.createTextures}
 * you can pass in urls for images to load into the textures. If it's a single url
 * then this will be a single HTMLImageElement. If it's an array of urls used for a cubemap
 * this will be a corresponding array of images for the cubemap.
 *
 * @typedef {HTMLImageElement|HTMLImageElement[]} TextureSrc
 * @memberOf module:twgl
 */

/**
 * A callback for when an image finished downloading and been uploaded into a texture
 * @callback TextureReadyCallback
 * @param {*} err If truthy there was an error.
 * @param {WebGLTexture} texture the texture.
 * @param {module:twgl.TextureSrc} source image(s) used to as the src for the texture
 * @memberOf module:twgl
 */

/**
 * A callback for when all images have finished downloading and been uploaded into their respective textures
 * @callback TexturesReadyCallback
 * @param {*} err If truthy there was an error.
 * @param {Object.<string, WebGLTexture>} textures the created textures by name. Same as returned by {@link module:twgl.createTextures}.
 * @param {Object.<string, module:twgl.TextureSrc>} sources the image(s) used for the texture by name.
 * @memberOf module:twgl
 */

/**
 * A callback for when an image finished downloading and been uploaded into a texture
 * @callback CubemapReadyCallback
 * @param {*} err If truthy there was an error.
 * @param {WebGLTexture} tex the texture.
 * @param {HTMLImageElement[]} imgs the images for each face.
 * @memberOf module:twgl
 */

/**
 * A callback for when an image finished downloading and been uploaded into a texture
 * @callback ThreeDReadyCallback
 * @param {*} err If truthy there was an error.
 * @param {WebGLTexture} tex the texture.
 * @param {HTMLImageElement[]} imgs the images for each slice.
 * @memberOf module:twgl
 */

/**
 * Loads a texture from an image from a Url as specified in `options.src`
 * If `options.color !== false` will set the texture to a 1x1 pixel color so that the texture is
 * immediately useable. It will be updated with the contents of the image once the image has finished
 * downloading. Filtering options will be set as appropriate for image unless `options.auto === false`.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 * @param {module:twgl.TextureReadyCallback} [callback] A function to be called when the image has finished loading. err will
 *    be non null if there was an error.
 * @return {HTMLImageElement} the image being downloaded.
 * @memberOf module:twgl/textures
 */
function loadTextureFromUrl(gl, tex, options, callback) {
  callback = callback || noop;
  options = options || defaults$1.textureOptions;
  setTextureTo1PixelColor(gl, tex, options);
  // Because it's async we need to copy the options.
  options = Object.assign({}, options);
  const img = loadAndUseImage(options.src, options.crossOrigin, function(err, img) {
    if (err) {
      callback(err, tex, img);
    } else {
      setTextureFromElement(gl, tex, img, options);
      callback(null, tex, img);
    }
  });
  return img;
}

/**
 * Loads a cubemap from 6 urls or TexImageSources as specified in `options.src`. Will set the cubemap to a 1x1 pixel color
 * so that it is usable immediately unless `option.color === false`.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @param {module:twgl.CubemapReadyCallback} [callback] A function to be called when all the images have finished loading. err will
 *    be non null if there was an error.
 * @memberOf module:twgl/textures
 * @private
 */
function loadCubemapFromUrls(gl, tex, options, callback) {
  callback = callback || noop;
  const urls = options.src;
  if (urls.length !== 6) {
    throw "there must be 6 urls for a cubemap";
  }
  const level = options.level || 0;
  const internalFormat = options.internalFormat || options.format || RGBA$1;
  const formatType = getFormatAndTypeForInternalFormat(internalFormat);
  const format = options.format || formatType.format;
  const type = options.type || UNSIGNED_BYTE$1;
  const target = options.target || TEXTURE_2D$2;
  if (target !== TEXTURE_CUBE_MAP$1) {
    throw "target must be TEXTURE_CUBE_MAP";
  }
  setTextureTo1PixelColor(gl, tex, options);
  // Because it's async we need to copy the options.
  options = Object.assign({}, options);
  let numToLoad = 6;
  const errors = [];
  const faces = getCubeFaceOrder(gl, options);
  let imgs;  // eslint-disable-line

  function uploadImg(faceTarget) {
    return function(err, img) {
      --numToLoad;
      if (err) {
        errors.push(err);
      } else {
        if (img.width !== img.height) {
          errors.push("cubemap face img is not a square: " + img.src);
        } else {
          setPackState(gl, options);
          gl.bindTexture(target, tex);

          // So assuming this is the first image we now have one face that's img sized
          // and 5 faces that are 1x1 pixel so size the other faces
          if (numToLoad === 5) {
            // use the default order
            getCubeFaceOrder().forEach(function(otherTarget) {
              // Should we re-use the same face or a color?
              gl.texImage2D(otherTarget, level, internalFormat, format, type, img);
            });
          } else {
            gl.texImage2D(faceTarget, level, internalFormat, format, type, img);
          }

          if (shouldAutomaticallySetTextureFilteringForSize(options)) {
            gl.generateMipmap(target);
          }
        }
      }

      if (numToLoad === 0) {
        callback(errors.length ? errors : undefined, tex, imgs);
      }
    };
  }

  imgs = urls.map(function(url, ndx) {
    return loadAndUseImage(url, options.crossOrigin, uploadImg(faces[ndx]));
  });
}

/**
 * Loads a 2d array or 3d texture from urls OR TexImageSources as specified in `options.src`.
 * Will set the texture to a 1x1 pixel color
 * so that it is usable immediately unless `option.color === false`.
 *
 * If the width and height is not specified the width and height of the first
 * image loaded will be used. Note that since images are loaded async
 * which image downloads first is unknown.
 *
 * If an image is not the same size as the width and height it will be scaled
 * to that width and height.
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @param {module:twgl.ThreeDReadyCallback} [callback] A function to be called when all the images have finished loading. err will
 *    be non null if there was an error.
 * @memberOf module:twgl/textures
 * @private
 */
function loadSlicesFromUrls(gl, tex, options, callback) {
  callback = callback || noop;
  const urls = options.src;
  const internalFormat = options.internalFormat || options.format || RGBA$1;
  const formatType = getFormatAndTypeForInternalFormat(internalFormat);
  const format = options.format || formatType.format;
  const type = options.type || UNSIGNED_BYTE$1;
  const target = options.target || TEXTURE_2D_ARRAY$1;
  if (target !== TEXTURE_3D$1 && target !== TEXTURE_2D_ARRAY$1) {
    throw "target must be TEXTURE_3D or TEXTURE_2D_ARRAY";
  }
  setTextureTo1PixelColor(gl, tex, options);
  // Because it's async we need to copy the options.
  options = Object.assign({}, options);
  let numToLoad = urls.length;
  const errors = [];
  let imgs;  // eslint-disable-line
  const level = options.level || 0;
  let width = options.width;
  let height = options.height;
  const depth = urls.length;
  let firstImage = true;

  function uploadImg(slice) {
    return function(err, img) {
      --numToLoad;
      if (err) {
        errors.push(err);
      } else {
        setPackState(gl, options);
        gl.bindTexture(target, tex);

        if (firstImage) {
          firstImage = false;
          width = options.width || img.width;
          height = options.height || img.height;
          gl.texImage3D(target, level, internalFormat, width, height, depth, 0, format, type, null);

          // put it in every slice otherwise some slices will be 0,0,0,0
          for (let s = 0; s < depth; ++s) {
            gl.texSubImage3D(target, level, 0, 0, s, width, height, 1, format, type, img);
          }
        } else {
          let src = img;
          let ctx;
          if (img.width !== width || img.height !== height) {
            // Size the image to fix
            ctx = getShared2DContext();
            src = ctx.canvas;
            ctx.canvas.width = width;
            ctx.canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
          }

          gl.texSubImage3D(target, level, 0, 0, slice, width, height, 1, format, type, src);

          // free the canvas memory
          if (ctx && src === ctx.canvas) {
            ctx.canvas.width = 0;
            ctx.canvas.height = 0;
          }
        }

        if (shouldAutomaticallySetTextureFilteringForSize(options)) {
          gl.generateMipmap(target);
        }
      }

      if (numToLoad === 0) {
        callback(errors.length ? errors : undefined, tex, imgs);
      }
    };
  }

  imgs = urls.map(function(url, ndx) {
    return loadAndUseImage(url, options.crossOrigin, uploadImg(ndx));
  });
}

/**
 * Sets a texture from an array or typed array. If the width or height is not provided will attempt to
 * guess the size. See {@link module:twgl.TextureOptions}.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {(number[]|ArrayBufferView)} src An array or typed arry with texture data.
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @memberOf module:twgl/textures
 */
function setTextureFromArray(gl, tex, src, options) {
  options = options || defaults$1.textureOptions;
  const target = options.target || TEXTURE_2D$2;
  gl.bindTexture(target, tex);
  let width = options.width;
  let height = options.height;
  let depth = options.depth;
  const level = options.level || 0;
  const internalFormat = options.internalFormat || options.format || RGBA$1;
  const formatType = getFormatAndTypeForInternalFormat(internalFormat);
  const format = options.format || formatType.format;
  const type = options.type || getTextureTypeForArrayType(gl, src, formatType.type);
  if (!isArrayBuffer(src)) {
    const Type = getTypedArrayTypeForGLType(type);
    src = new Type(src);
  } else if (src instanceof Uint8ClampedArray) {
    src = new Uint8Array(src.buffer);
  }

  const bytesPerElement = getBytesPerElementForInternalFormat(internalFormat, type);
  const numElements = src.byteLength / bytesPerElement;  // TODO: check UNPACK_ALIGNMENT?
  if (numElements % 1) {
    throw "length wrong size for format: " + glEnumToString(gl, format);
  }
  let dimensions;
  if (target === TEXTURE_3D$1 || target === TEXTURE_2D_ARRAY$1) {
    if (!width && !height && !depth) {
      const size = Math.cbrt(numElements);
      if (size % 1 !== 0) {
        throw "can't guess cube size of array of numElements: " + numElements;
      }
      width = size;
      height = size;
      depth = size;
    } else if (width && (!height || !depth)) {
      dimensions = guessDimensions(gl, target, height, depth, numElements / width);
      height = dimensions.width;
      depth = dimensions.height;
    } else if (height && (!width || !depth)) {
      dimensions = guessDimensions(gl, target, width, depth, numElements / height);
      width = dimensions.width;
      depth = dimensions.height;
    } else {
      dimensions = guessDimensions(gl, target, width, height, numElements / depth);
      width = dimensions.width;
      height = dimensions.height;
    }
  } else {
    dimensions = guessDimensions(gl, target, width, height, numElements);
    width = dimensions.width;
    height = dimensions.height;
  }
  setSkipStateToDefault(gl);
  gl.pixelStorei(UNPACK_ALIGNMENT, options.unpackAlignment || 1);
  setPackState(gl, options);
  if (target === TEXTURE_CUBE_MAP$1) {
    const elementsPerElement = bytesPerElement / src.BYTES_PER_ELEMENT;
    const faceSize = numElements / 6 * elementsPerElement;

    getCubeFacesWithNdx(gl, options).forEach(f => {
      const offset = faceSize * f.ndx;
      const data = src.subarray(offset, offset + faceSize);
      gl.texImage2D(f.face, level, internalFormat, width, height, 0, format, type, data);
    });
  } else if (target === TEXTURE_3D$1 || target === TEXTURE_2D_ARRAY$1) {
    gl.texImage3D(target, level, internalFormat, width, height, depth, 0, format, type, src);
  } else {
    gl.texImage2D(target, level, internalFormat, width, height, 0, format, type, src);
  }
  return {
    width: width,
    height: height,
    depth: depth,
    type: type,
  };
}

/**
 * Sets a texture with no contents of a certain size. In other words calls `gl.texImage2D` with `null`.
 * You must set `options.width` and `options.height`.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @memberOf module:twgl/textures
 */
function setEmptyTexture(gl, tex, options) {
  const target = options.target || TEXTURE_2D$2;
  gl.bindTexture(target, tex);
  const level = options.level || 0;
  const internalFormat = options.internalFormat || options.format || RGBA$1;
  const formatType = getFormatAndTypeForInternalFormat(internalFormat);
  const format = options.format || formatType.format;
  const type = options.type || formatType.type;
  setPackState(gl, options);
  if (target === TEXTURE_CUBE_MAP$1) {
    for (let ii = 0; ii < 6; ++ii) {
      gl.texImage2D(TEXTURE_CUBE_MAP_POSITIVE_X + ii, level, internalFormat, options.width, options.height, 0, format, type, null);
    }
  } else if (target === TEXTURE_3D$1 || target === TEXTURE_2D_ARRAY$1) {
    gl.texImage3D(target, level, internalFormat, options.width, options.height, options.depth, 0, format, type, null);
  } else {
    gl.texImage2D(target, level, internalFormat, options.width, options.height, 0, format, type, null);
  }
}

/**
 * Creates a texture based on the options passed in.
 *
 * Note: may reset UNPACK_ALIGNMENT, UNPACK_ROW_LENGTH, UNPACK_IMAGE_HEIGHT, UNPACK_SKIP_IMAGES
 * UNPACK_SKIP_PIXELS, and UNPACK_SKIP_ROWS
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 * @param {module:twgl.TextureReadyCallback} [callback] A callback called when an image has been downloaded and uploaded to the texture.
 * @return {WebGLTexture} the created texture.
 * @memberOf module:twgl/textures
 */
function createTexture(gl, options, callback) {
  callback = callback || noop;
  options = options || defaults$1.textureOptions;
  const tex = gl.createTexture();
  const target = options.target || TEXTURE_2D$2;
  let width  = options.width  || 1;
  let height = options.height || 1;
  const internalFormat = options.internalFormat || RGBA$1;
  gl.bindTexture(target, tex);
  if (target === TEXTURE_CUBE_MAP$1) {
    // this should have been the default for cubemaps :(
    gl.texParameteri(target, TEXTURE_WRAP_S, CLAMP_TO_EDGE$1);
    gl.texParameteri(target, TEXTURE_WRAP_T, CLAMP_TO_EDGE$1);
  }
  let src = options.src;
  if (src) {
    if (typeof src === "function") {
      src = src(gl, options);
    }
    if (typeof (src) === "string") {
      loadTextureFromUrl(gl, tex, options, callback);
    } else if (isArrayBuffer(src) ||
               (Array.isArray(src) && (
                    typeof src[0] === 'number' ||
                    Array.isArray(src[0]) ||
                    isArrayBuffer(src[0]))
               )
              ) {
      const dimensions = setTextureFromArray(gl, tex, src, options);
      width  = dimensions.width;
      height = dimensions.height;
    } else if (Array.isArray(src) && (typeof (src[0]) === 'string' || isTexImageSource(src[0]))) {
      if (target === TEXTURE_CUBE_MAP$1) {
        loadCubemapFromUrls(gl, tex, options, callback);
      } else {
        loadSlicesFromUrls(gl, tex, options, callback);
      }
    } else { // if (isTexImageSource(src))
      setTextureFromElement(gl, tex, src, options);
      width  = src.width;
      height = src.height;
    }
  } else {
    setEmptyTexture(gl, tex, options);
  }
  if (shouldAutomaticallySetTextureFilteringForSize(options)) {
    setTextureFilteringForSize(gl, tex, options, width, height, internalFormat);
  }
  setTextureParameters(gl, tex, options);
  return tex;
}

/**
 * Resizes a texture based on the options passed in.
 *
 * Note: This is not a generic resize anything function.
 * It's mostly used by {@link module:twgl.resizeFramebufferInfo}
 * It will use `options.src` if it exists to try to determine a `type`
 * otherwise it will assume `gl.UNSIGNED_BYTE`. No data is provided
 * for the texture. Texture parameters will be set accordingly
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the texture to resize
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @param {number} [width] the new width. If not passed in will use `options.width`
 * @param {number} [height] the new height. If not passed in will use `options.height`
 * @param {number} [depth] the new depth. If not passed in will use `options.depth`
 * @memberOf module:twgl/textures
 */
function resizeTexture(gl, tex, options, width, height, depth) {
  width = width || options.width;
  height = height || options.height;
  depth = depth || options.depth;
  const target = options.target || TEXTURE_2D$2;
  gl.bindTexture(target, tex);
  const level = options.level || 0;
  const internalFormat = options.internalFormat || options.format || RGBA$1;
  const formatType = getFormatAndTypeForInternalFormat(internalFormat);
  const format = options.format || formatType.format;
  let type;
  const src = options.src;
  if (!src) {
    type = options.type || formatType.type;
  } else if (isArrayBuffer(src) || (Array.isArray(src) && typeof (src[0]) === 'number')) {
    type = options.type || getTextureTypeForArrayType(gl, src, formatType.type);
  } else {
    type = options.type || formatType.type;
  }
  if (target === TEXTURE_CUBE_MAP$1) {
    for (let ii = 0; ii < 6; ++ii) {
      gl.texImage2D(TEXTURE_CUBE_MAP_POSITIVE_X + ii, level, internalFormat, width, height, 0, format, type, null);
    }
  } else if (target === TEXTURE_3D$1 || target === TEXTURE_2D_ARRAY$1) {
    gl.texImage3D(target, level, internalFormat, width, height, depth, 0, format, type, null);
  } else {
    gl.texImage2D(target, level, internalFormat, width, height, 0, format, type, null);
  }
}

/**
 * Check if a src is an async request.
 * if src is a string we're going to download an image
 * if src is an array of strings we're going to download cubemap images
 * @param {*} src The src from a TextureOptions
 * @returns {bool} true if src is async.
 * @private
 */
function isAsyncSrc(src) {
  return typeof src === 'string' ||
         (Array.isArray(src) && typeof src[0] === 'string');
}

/**
 * Creates a bunch of textures based on the passed in options.
 *
 * Example:
 *
 *     const textures = twgl.createTextures(gl, {
 *       // a power of 2 image
 *       hftIcon: { src: "images/hft-icon-16.png", mag: gl.NEAREST },
 *       // a non-power of 2 image
 *       clover: { src: "images/clover.jpg" },
 *       // From a canvas
 *       fromCanvas: { src: ctx.canvas },
 *       // A cubemap from 6 images
 *       yokohama: {
 *         target: gl.TEXTURE_CUBE_MAP,
 *         src: [
 *           'images/yokohama/posx.jpg',
 *           'images/yokohama/negx.jpg',
 *           'images/yokohama/posy.jpg',
 *           'images/yokohama/negy.jpg',
 *           'images/yokohama/posz.jpg',
 *           'images/yokohama/negz.jpg',
 *         ],
 *       },
 *       // A cubemap from 1 image (can be 1x6, 2x3, 3x2, 6x1)
 *       goldengate: {
 *         target: gl.TEXTURE_CUBE_MAP,
 *         src: 'images/goldengate.jpg',
 *       },
 *       // A 2x2 pixel texture from a JavaScript array
 *       checker: {
 *         mag: gl.NEAREST,
 *         min: gl.LINEAR,
 *         src: [
 *           255,255,255,255,
 *           192,192,192,255,
 *           192,192,192,255,
 *           255,255,255,255,
 *         ],
 *       },
 *       // a 1x2 pixel texture from a typed array.
 *       stripe: {
 *         mag: gl.NEAREST,
 *         min: gl.LINEAR,
 *         format: gl.LUMINANCE,
 *         src: new Uint8Array([
 *           255,
 *           128,
 *           255,
 *           128,
 *           255,
 *           128,
 *           255,
 *           128,
 *         ]),
 *         width: 1,
 *       },
 *     });
 *
 * Now
 *
 * *   `textures.hftIcon` will be a 2d texture
 * *   `textures.clover` will be a 2d texture
 * *   `textures.fromCanvas` will be a 2d texture
 * *   `textures.yohohama` will be a cubemap texture
 * *   `textures.goldengate` will be a cubemap texture
 * *   `textures.checker` will be a 2d texture
 * *   `textures.stripe` will be a 2d texture
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {Object.<string,module:twgl.TextureOptions>} options A object of TextureOptions one per texture.
 * @param {module:twgl.TexturesReadyCallback} [callback] A callback called when all textures have been downloaded.
 * @return {Object.<string,WebGLTexture>} the created textures by name
 * @memberOf module:twgl/textures
 */
function createTextures(gl, textureOptions, callback) {
  callback = callback || noop;
  let numDownloading = 0;
  const errors = [];
  const textures = {};
  const images = {};

  function callCallbackIfReady() {
    if (numDownloading === 0) {
      setTimeout(function() {
        callback(errors.length ? errors : undefined, textures, images);
      }, 0);
    }
  }

  Object.keys(textureOptions).forEach(function(name) {
    const options = textureOptions[name];
    let onLoadFn;
    if (isAsyncSrc(options.src)) {
      onLoadFn = function(err, tex, img) {
        images[name] = img;
        --numDownloading;
        if (err) {
          errors.push(err);
        }
        callCallbackIfReady();
      };
      ++numDownloading;
    }
    textures[name] = createTexture(gl, options, onLoadFn);
  });

  // queue the callback if there are no images to download.
  // We do this because if your code is structured to wait for
  // images to download but then you comment out all the async
  // images your code would break.
  callCallbackIfReady();

  return textures;
}

var textures = /*#__PURE__*/Object.freeze({
  __proto__: null,
  setTextureDefaults_: setDefaults$1,
  createSampler: createSampler,
  createSamplers: createSamplers,
  setSamplerParameters: setSamplerParameters,
  createTexture: createTexture,
  setEmptyTexture: setEmptyTexture,
  setTextureFromArray: setTextureFromArray,
  loadTextureFromUrl: loadTextureFromUrl,
  setTextureFromElement: setTextureFromElement,
  setTextureFilteringForSize: setTextureFilteringForSize,
  setTextureParameters: setTextureParameters,
  setDefaultTextureColor: setDefaultTextureColor,
  createTextures: createTextures,
  resizeTexture: resizeTexture,
  canGenerateMipmap: canGenerateMipmap,
  canFilter: canFilter,
  getNumComponentsForFormat: getNumComponentsForFormat,
  getBytesPerElementForInternalFormat: getBytesPerElementForInternalFormat,
  getFormatAndTypeForInternalFormat: getFormatAndTypeForInternalFormat
});

/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

/**
 * Low level shader program related functions
 *
 * You should generally not need to use these functions. They are provided
 * for those cases where you're doing something out of the ordinary
 * and you need lower level access.
 *
 * For backward compatibility they are available at both `twgl.programs` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/programs
 */

const error = error$1;
const warn = warn$1;
function getElementById(id) {
  return (typeof document !== 'undefined' && document.getElementById)
      ? document.getElementById(id)
      : null;
}

const TEXTURE0                       = 0x84c0;
const DYNAMIC_DRAW                   = 0x88e8;

const ARRAY_BUFFER                   = 0x8892;
const ELEMENT_ARRAY_BUFFER$1           = 0x8893;
const UNIFORM_BUFFER                 = 0x8a11;
const TRANSFORM_FEEDBACK_BUFFER      = 0x8c8e;

const TRANSFORM_FEEDBACK             = 0x8e22;

const COMPILE_STATUS                 = 0x8b81;
const LINK_STATUS                    = 0x8b82;
const FRAGMENT_SHADER                = 0x8b30;
const VERTEX_SHADER                  = 0x8b31;
const SEPARATE_ATTRIBS               = 0x8c8d;

const ACTIVE_UNIFORMS                = 0x8b86;
const ACTIVE_ATTRIBUTES              = 0x8b89;
const TRANSFORM_FEEDBACK_VARYINGS    = 0x8c83;
const ACTIVE_UNIFORM_BLOCKS          = 0x8a36;
const UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER   = 0x8a44;
const UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 0x8a46;
const UNIFORM_BLOCK_DATA_SIZE                     = 0x8a40;
const UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES        = 0x8a43;

const FLOAT                         = 0x1406;
const FLOAT_VEC2                    = 0x8B50;
const FLOAT_VEC3                    = 0x8B51;
const FLOAT_VEC4                    = 0x8B52;
const INT                           = 0x1404;
const INT_VEC2                      = 0x8B53;
const INT_VEC3                      = 0x8B54;
const INT_VEC4                      = 0x8B55;
const BOOL                          = 0x8B56;
const BOOL_VEC2                     = 0x8B57;
const BOOL_VEC3                     = 0x8B58;
const BOOL_VEC4                     = 0x8B59;
const FLOAT_MAT2                    = 0x8B5A;
const FLOAT_MAT3                    = 0x8B5B;
const FLOAT_MAT4                    = 0x8B5C;
const SAMPLER_2D                    = 0x8B5E;
const SAMPLER_CUBE                  = 0x8B60;
const SAMPLER_3D                    = 0x8B5F;
const SAMPLER_2D_SHADOW             = 0x8B62;
const FLOAT_MAT2x3                  = 0x8B65;
const FLOAT_MAT2x4                  = 0x8B66;
const FLOAT_MAT3x2                  = 0x8B67;
const FLOAT_MAT3x4                  = 0x8B68;
const FLOAT_MAT4x2                  = 0x8B69;
const FLOAT_MAT4x3                  = 0x8B6A;
const SAMPLER_2D_ARRAY              = 0x8DC1;
const SAMPLER_2D_ARRAY_SHADOW       = 0x8DC4;
const SAMPLER_CUBE_SHADOW           = 0x8DC5;
const UNSIGNED_INT                  = 0x1405;
const UNSIGNED_INT_VEC2             = 0x8DC6;
const UNSIGNED_INT_VEC3             = 0x8DC7;
const UNSIGNED_INT_VEC4             = 0x8DC8;
const INT_SAMPLER_2D                = 0x8DCA;
const INT_SAMPLER_3D                = 0x8DCB;
const INT_SAMPLER_CUBE              = 0x8DCC;
const INT_SAMPLER_2D_ARRAY          = 0x8DCF;
const UNSIGNED_INT_SAMPLER_2D       = 0x8DD2;
const UNSIGNED_INT_SAMPLER_3D       = 0x8DD3;
const UNSIGNED_INT_SAMPLER_CUBE     = 0x8DD4;
const UNSIGNED_INT_SAMPLER_2D_ARRAY = 0x8DD7;

const TEXTURE_2D$1                    = 0x0DE1;
const TEXTURE_CUBE_MAP              = 0x8513;
const TEXTURE_3D                    = 0x806F;
const TEXTURE_2D_ARRAY              = 0x8C1A;

const typeMap = {};

/**
 * Returns the corresponding bind point for a given sampler type
 * @private
 */
function getBindPointForSamplerType(gl, type) {
  return typeMap[type].bindPoint;
}

// This kind of sucks! If you could compose functions as in `var fn = gl[name];`
// this code could be a lot smaller but that is sadly really slow (T_T)

function floatSetter(gl, location) {
  return function(v) {
    gl.uniform1f(location, v);
  };
}

function floatArraySetter(gl, location) {
  return function(v) {
    gl.uniform1fv(location, v);
  };
}

function floatVec2Setter(gl, location) {
  return function(v) {
    gl.uniform2fv(location, v);
  };
}

function floatVec3Setter(gl, location) {
  return function(v) {
    gl.uniform3fv(location, v);
  };
}

function floatVec4Setter(gl, location) {
  return function(v) {
    gl.uniform4fv(location, v);
  };
}

function intSetter(gl, location) {
  return function(v) {
    gl.uniform1i(location, v);
  };
}

function intArraySetter(gl, location) {
  return function(v) {
    gl.uniform1iv(location, v);
  };
}

function intVec2Setter(gl, location) {
  return function(v) {
    gl.uniform2iv(location, v);
  };
}

function intVec3Setter(gl, location) {
  return function(v) {
    gl.uniform3iv(location, v);
  };
}

function intVec4Setter(gl, location) {
  return function(v) {
    gl.uniform4iv(location, v);
  };
}

function uintSetter(gl, location) {
  return function(v) {
    gl.uniform1ui(location, v);
  };
}

function uintArraySetter(gl, location) {
  return function(v) {
    gl.uniform1uiv(location, v);
  };
}

function uintVec2Setter(gl, location) {
  return function(v) {
    gl.uniform2uiv(location, v);
  };
}

function uintVec3Setter(gl, location) {
  return function(v) {
    gl.uniform3uiv(location, v);
  };
}

function uintVec4Setter(gl, location) {
  return function(v) {
    gl.uniform4uiv(location, v);
  };
}

function floatMat2Setter(gl, location) {
  return function(v) {
    gl.uniformMatrix2fv(location, false, v);
  };
}

function floatMat3Setter(gl, location) {
  return function(v) {
    gl.uniformMatrix3fv(location, false, v);
  };
}

function floatMat4Setter(gl, location) {
  return function(v) {
    gl.uniformMatrix4fv(location, false, v);
  };
}

function floatMat23Setter(gl, location) {
  return function(v) {
    gl.uniformMatrix2x3fv(location, false, v);
  };
}

function floatMat32Setter(gl, location) {
  return function(v) {
    gl.uniformMatrix3x2fv(location, false, v);
  };
}

function floatMat24Setter(gl, location) {
  return function(v) {
    gl.uniformMatrix2x4fv(location, false, v);
  };
}

function floatMat42Setter(gl, location) {
  return function(v) {
    gl.uniformMatrix4x2fv(location, false, v);
  };
}

function floatMat34Setter(gl, location) {
  return function(v) {
    gl.uniformMatrix3x4fv(location, false, v);
  };
}

function floatMat43Setter(gl, location) {
  return function(v) {
    gl.uniformMatrix4x3fv(location, false, v);
  };
}

function samplerSetter(gl, type, unit, location) {
  const bindPoint = getBindPointForSamplerType(gl, type);
  return isWebGL2(gl) ? function(textureOrPair) {
    let texture;
    let sampler;
    if (!textureOrPair || isTexture(gl, textureOrPair)) {
      texture = textureOrPair;
      sampler = null;
    } else {
      texture = textureOrPair.texture;
      sampler = textureOrPair.sampler;
    }
    gl.uniform1i(location, unit);
    gl.activeTexture(TEXTURE0 + unit);
    gl.bindTexture(bindPoint, texture);
    gl.bindSampler(unit, sampler);
  } : function(texture) {
    gl.uniform1i(location, unit);
    gl.activeTexture(TEXTURE0 + unit);
    gl.bindTexture(bindPoint, texture);
  };
}

function samplerArraySetter(gl, type, unit, location, size) {
  const bindPoint = getBindPointForSamplerType(gl, type);
  const units = new Int32Array(size);
  for (let ii = 0; ii < size; ++ii) {
    units[ii] = unit + ii;
  }

  return isWebGL2(gl) ? function(textures) {
    gl.uniform1iv(location, units);
    textures.forEach(function(textureOrPair, index) {
      gl.activeTexture(TEXTURE0 + units[index]);
      let texture;
      let sampler;
      if (!textureOrPair || isTexture(gl, textureOrPair)) {
        texture = textureOrPair;
        sampler = null;
      } else {
        texture = textureOrPair.texture;
        sampler = textureOrPair.sampler;
      }
      gl.bindSampler(unit, sampler);
      gl.bindTexture(bindPoint, texture);
    });
  } : function(textures) {
    gl.uniform1iv(location, units);
    textures.forEach(function(texture, index) {
      gl.activeTexture(TEXTURE0 + units[index]);
      gl.bindTexture(bindPoint, texture);
    });
  };
}

typeMap[FLOAT]                         = { Type: Float32Array, size:  4, setter: floatSetter,      arraySetter: floatArraySetter, };
typeMap[FLOAT_VEC2]                    = { Type: Float32Array, size:  8, setter: floatVec2Setter,  cols: 2, };
typeMap[FLOAT_VEC3]                    = { Type: Float32Array, size: 12, setter: floatVec3Setter,  cols: 3, };
typeMap[FLOAT_VEC4]                    = { Type: Float32Array, size: 16, setter: floatVec4Setter,  cols: 4, };
typeMap[INT]                           = { Type: Int32Array,   size:  4, setter: intSetter,        arraySetter: intArraySetter, };
typeMap[INT_VEC2]                      = { Type: Int32Array,   size:  8, setter: intVec2Setter,    cols: 2, };
typeMap[INT_VEC3]                      = { Type: Int32Array,   size: 12, setter: intVec3Setter,    cols: 3, };
typeMap[INT_VEC4]                      = { Type: Int32Array,   size: 16, setter: intVec4Setter,    cols: 4, };
typeMap[UNSIGNED_INT]                  = { Type: Uint32Array,  size:  4, setter: uintSetter,       arraySetter: uintArraySetter, };
typeMap[UNSIGNED_INT_VEC2]             = { Type: Uint32Array,  size:  8, setter: uintVec2Setter,   cols: 2, };
typeMap[UNSIGNED_INT_VEC3]             = { Type: Uint32Array,  size: 12, setter: uintVec3Setter,   cols: 3, };
typeMap[UNSIGNED_INT_VEC4]             = { Type: Uint32Array,  size: 16, setter: uintVec4Setter,   cols: 4, };
typeMap[BOOL]                          = { Type: Uint32Array,  size:  4, setter: intSetter,        arraySetter: intArraySetter, };
typeMap[BOOL_VEC2]                     = { Type: Uint32Array,  size:  8, setter: intVec2Setter,    cols: 2, };
typeMap[BOOL_VEC3]                     = { Type: Uint32Array,  size: 12, setter: intVec3Setter,    cols: 3, };
typeMap[BOOL_VEC4]                     = { Type: Uint32Array,  size: 16, setter: intVec4Setter,    cols: 4, };
typeMap[FLOAT_MAT2]                    = { Type: Float32Array, size: 32, setter: floatMat2Setter,  rows: 2, cols: 2, };
typeMap[FLOAT_MAT3]                    = { Type: Float32Array, size: 48, setter: floatMat3Setter,  rows: 3, cols: 3, };
typeMap[FLOAT_MAT4]                    = { Type: Float32Array, size: 64, setter: floatMat4Setter,  rows: 4, cols: 4, };
typeMap[FLOAT_MAT2x3]                  = { Type: Float32Array, size: 32, setter: floatMat23Setter, rows: 2, cols: 3, };
typeMap[FLOAT_MAT2x4]                  = { Type: Float32Array, size: 32, setter: floatMat24Setter, rows: 2, cols: 4, };
typeMap[FLOAT_MAT3x2]                  = { Type: Float32Array, size: 48, setter: floatMat32Setter, rows: 3, cols: 2, };
typeMap[FLOAT_MAT3x4]                  = { Type: Float32Array, size: 48, setter: floatMat34Setter, rows: 3, cols: 4, };
typeMap[FLOAT_MAT4x2]                  = { Type: Float32Array, size: 64, setter: floatMat42Setter, rows: 4, cols: 2, };
typeMap[FLOAT_MAT4x3]                  = { Type: Float32Array, size: 64, setter: floatMat43Setter, rows: 4, cols: 3, };
typeMap[SAMPLER_2D]                    = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D$1,       };
typeMap[SAMPLER_CUBE]                  = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP, };
typeMap[SAMPLER_3D]                    = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_3D,       };
typeMap[SAMPLER_2D_SHADOW]             = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D$1,       };
typeMap[SAMPLER_2D_ARRAY]              = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY, };
typeMap[SAMPLER_2D_ARRAY_SHADOW]       = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY, };
typeMap[SAMPLER_CUBE_SHADOW]           = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP, };
typeMap[INT_SAMPLER_2D]                = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D$1,       };
typeMap[INT_SAMPLER_3D]                = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_3D,       };
typeMap[INT_SAMPLER_CUBE]              = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP, };
typeMap[INT_SAMPLER_2D_ARRAY]          = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY, };
typeMap[UNSIGNED_INT_SAMPLER_2D]       = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D$1,       };
typeMap[UNSIGNED_INT_SAMPLER_3D]       = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_3D,       };
typeMap[UNSIGNED_INT_SAMPLER_CUBE]     = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP, };
typeMap[UNSIGNED_INT_SAMPLER_2D_ARRAY] = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY, };

function floatAttribSetter(gl, index) {
  return function(b) {
    if (b.value) {
      gl.disableVertexAttribArray(index);
      switch (b.value.length) {
        case 4:
          gl.vertexAttrib4fv(index, b.value);
          break;
        case 3:
          gl.vertexAttrib3fv(index, b.value);
          break;
        case 2:
          gl.vertexAttrib2fv(index, b.value);
          break;
        case 1:
          gl.vertexAttrib1fv(index, b.value);
          break;
        default:
          throw new Error('the length of a float constant value must be between 1 and 4!');
      }
    } else {
      gl.bindBuffer(ARRAY_BUFFER, b.buffer);
      gl.enableVertexAttribArray(index);
      gl.vertexAttribPointer(
          index, b.numComponents || b.size, b.type || FLOAT, b.normalize || false, b.stride || 0, b.offset || 0);
      if (gl.vertexAttribDivisor) {
        gl.vertexAttribDivisor(index, b.divisor || 0);
      }
    }
  };
}

function intAttribSetter(gl, index) {
  return function(b) {
    if (b.value) {
      gl.disableVertexAttribArray(index);
      if (b.value.length === 4) {
        gl.vertexAttrib4iv(index, b.value);
      } else {
        throw new Error('The length of an integer constant value must be 4!');
      }
    } else {
      gl.bindBuffer(ARRAY_BUFFER, b.buffer);
      gl.enableVertexAttribArray(index);
      gl.vertexAttribIPointer(
          index, b.numComponents || b.size, b.type || INT, b.stride || 0, b.offset || 0);
      if (gl.vertexAttribDivisor) {
        gl.vertexAttribDivisor(index, b.divisor || 0);
      }
    }
  };
}

function uintAttribSetter(gl, index) {
  return function(b) {
    if (b.value) {
      gl.disableVertexAttribArray(index);
      if (b.value.length === 4) {
        gl.vertexAttrib4uiv(index, b.value);
      } else {
        throw new Error('The length of an unsigned integer constant value must be 4!');
      }
    } else {
      gl.bindBuffer(ARRAY_BUFFER, b.buffer);
      gl.enableVertexAttribArray(index);
      gl.vertexAttribIPointer(
          index, b.numComponents || b.size, b.type || UNSIGNED_INT, b.stride || 0, b.offset || 0);
      if (gl.vertexAttribDivisor) {
        gl.vertexAttribDivisor(index, b.divisor || 0);
      }
    }
  };
}

function matAttribSetter(gl, index, typeInfo) {
  const defaultSize = typeInfo.size;
  const count = typeInfo.count;

  return function(b) {
    gl.bindBuffer(ARRAY_BUFFER, b.buffer);
    const numComponents = b.size || b.numComponents || defaultSize;
    const size = numComponents / count;
    const type = b.type || FLOAT;
    const typeInfo = typeMap[type];
    const stride = typeInfo.size * numComponents;
    const normalize = b.normalize || false;
    const offset = b.offset || 0;
    const rowOffset = stride / count;
    for (let i = 0; i < count; ++i) {
      gl.enableVertexAttribArray(index + i);
      gl.vertexAttribPointer(
          index + i, size, type, normalize, stride, offset + rowOffset * i);
      if (gl.vertexAttribDivisor) {
        gl.vertexAttribDivisor(index + i, b.divisor || 0);
      }
    }
  };
}



const attrTypeMap = {};
attrTypeMap[FLOAT]             = { size:  4, setter: floatAttribSetter, };
attrTypeMap[FLOAT_VEC2]        = { size:  8, setter: floatAttribSetter, };
attrTypeMap[FLOAT_VEC3]        = { size: 12, setter: floatAttribSetter, };
attrTypeMap[FLOAT_VEC4]        = { size: 16, setter: floatAttribSetter, };
attrTypeMap[INT]               = { size:  4, setter: intAttribSetter,   };
attrTypeMap[INT_VEC2]          = { size:  8, setter: intAttribSetter,   };
attrTypeMap[INT_VEC3]          = { size: 12, setter: intAttribSetter,   };
attrTypeMap[INT_VEC4]          = { size: 16, setter: intAttribSetter,   };
attrTypeMap[UNSIGNED_INT]      = { size:  4, setter: uintAttribSetter,  };
attrTypeMap[UNSIGNED_INT_VEC2] = { size:  8, setter: uintAttribSetter,  };
attrTypeMap[UNSIGNED_INT_VEC3] = { size: 12, setter: uintAttribSetter,  };
attrTypeMap[UNSIGNED_INT_VEC4] = { size: 16, setter: uintAttribSetter,  };
attrTypeMap[BOOL]              = { size:  4, setter: intAttribSetter,   };
attrTypeMap[BOOL_VEC2]         = { size:  8, setter: intAttribSetter,   };
attrTypeMap[BOOL_VEC3]         = { size: 12, setter: intAttribSetter,   };
attrTypeMap[BOOL_VEC4]         = { size: 16, setter: intAttribSetter,   };
attrTypeMap[FLOAT_MAT2]        = { size:  4, setter: matAttribSetter,   count: 2, };
attrTypeMap[FLOAT_MAT3]        = { size:  9, setter: matAttribSetter,   count: 3, };
attrTypeMap[FLOAT_MAT4]        = { size: 16, setter: matAttribSetter,   count: 4, };

const errorRE = /ERROR:\s*\d+:(\d+)/gi;
function addLineNumbersWithError(src, log = '', lineOffset = 0) {
  // Note: Error message formats are not defined by any spec so this may or may not work.
  const matches = [...log.matchAll(errorRE)];
  const lineNoToErrorMap = new Map(matches.map((m, ndx) => {
    const lineNo = parseInt(m[1]);
    const next = matches[ndx + 1];
    const end = next ? next.index : log.length;
    const msg = log.substring(m.index, end);
    return [lineNo - 1, msg];
  }));
  return src.split('\n').map((line, lineNo) => {
    const err = lineNoToErrorMap.get(lineNo);
    return `${lineNo + 1 + lineOffset}: ${line}${err ? `\n\n^^^ ${err}` : ''}`;
  }).join('\n');
}

/**
 * Error Callback
 * @callback ErrorCallback
 * @param {string} msg error message.
 * @param {number} [lineOffset] amount to add to line number
 * @memberOf module:twgl
 */

/**
 * Program Callback
 * @callback ProgramCallback
 * @param {string} [err] error message, falsy if no error
 * @param {WebGLProgram|module:twgl.ProgramInfo} [result] the program or programInfo
 */

const spaceRE = /^[ \t]*\n/;

/**
 * Remove the first end of line because WebGL 2.0 requires
 * #version 300 es
 * as the first line. No whitespace allowed before that line
 * so
 *
 * <script>
 * #version 300 es
 * </script>
 *
 * Has one line before it which is invalid according to GLSL ES 3.00
 *
 * @param {string} shaderSource The source of the shader
 * @returns {{shaderSource: string, lineOffset: number}}
 * @private
 */
function prepShaderSource(shaderSource) {
  let lineOffset = 0;
  if (spaceRE.test(shaderSource)) {
    lineOffset = 1;
    shaderSource = shaderSource.replace(spaceRE, '');
  }
  return {lineOffset, shaderSource};
}

/**
 * @param {module:twgl.ProgramOptions} progOptions
 * @param {string} msg
 * @return null
 * @private
 */
function reportError(progOptions, msg) {
  progOptions.errorCallback(msg);
  if (progOptions.callback) {
    setTimeout(() => {
      progOptions.callback(`${msg}\n${progOptions.errors.join('\n')}`);
    });
  }
  return null;
}

/**
 * Check Shader status
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {number} shaderType The shader type
 * @param {WebGLShader} shader The shader
 * @param {ErrorCallback} [errFn] function to receive error message.
 * @return {string} errors or empty string
 * @private
 */
function checkShaderStatus(gl, shaderType, shader, errFn) {
  errFn = errFn || error;
  // Check the compile status
  const compiled = gl.getShaderParameter(shader, COMPILE_STATUS);
  if (!compiled) {
    // Something went wrong during compilation; get the error
    const lastError = gl.getShaderInfoLog(shader);
    const {lineOffset, shaderSource} = prepShaderSource(gl.getShaderSource(shader));
    const error = `${addLineNumbersWithError(shaderSource, lastError, lineOffset)}\nError compiling ${glEnumToString(gl, shaderType)}: ${lastError}`;
    errFn(error);
    return error;
  }
  return '';
}

/**
 * @typedef {Object} FullProgramSpec
 * @property {string[]} shaders the shader source or element ids.
 * @property {function(string)} [errorCallback] callback for errors
 * @property {Object.<string,number>|string[]} [attribLocations] a attribute name to location map, or array of attribute names where index = location.
 * @property {(module:twgl.BufferInfo|Object.<string,module:twgl.AttribInfo>|string[])} [transformFeedbackVaryings] If passed
 *   a BufferInfo will use the attribs names inside. If passed an object of AttribInfos will use the names from that object. Otherwise
 *   you can pass an array of names.
 * @property {number} [transformFeedbackMode] the mode to pass `gl.transformFeedbackVaryings`. Defaults to `SEPARATE_ATTRIBS`.
 * @property {ProgramCallback} [callback] callback for async program compilation.
 * @memberOf module:twgl
 */

/**
 * @typedef {string[]|module:twgl.FullProgramSpec} ProgramSpec
 * @memberOf module:twgl
 */

/**
 * @typedef {Object} ProgramOptions
 * @property {function(string)} [errorCallback] callback for errors
 * @property {Object.<string,number>|string[]} [attribLocations] a attribute name to location map, or array of attribute names where index = location.
 * @property {(module:twgl.BufferInfo|Object.<string,module:twgl.AttribInfo>|string[])} [transformFeedbackVaryings] If passed
 *   a BufferInfo will use the attribs names inside. If passed an object of AttribInfos will use the names from that object. Otherwise
 *   you can pass an array of names.
 * @property {number} [transformFeedbackMode] the mode to pass `gl.transformFeedbackVaryings`. Defaults to `SEPARATE_ATTRIBS`.
 * @property {ProgramCallback} [callback] callback for async program compilation.
 * @memberOf module:twgl
 */

/**
 * Gets the program options based on all these optional arguments
 * @param {module:twgl.ProgramOptions|string[]} [opt_attribs] Options for the program or an array of attribs names. Locations will be assigned by index if not passed in
 * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
 * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {module:twgl.ProgramOptions} an instance of ProgramOptions based on the arguments passed in
 * @private
 */
function getProgramOptions(opt_attribs, opt_locations, opt_errorCallback) {
  let transformFeedbackVaryings;
  let transformFeedbackMode;
  let callback;
  if (typeof opt_locations === 'function') {
    opt_errorCallback = opt_locations;
    opt_locations = undefined;
  }
  if (typeof opt_attribs === 'function') {
    opt_errorCallback = opt_attribs;
    opt_attribs = undefined;
  } else if (opt_attribs && !Array.isArray(opt_attribs)) {
    const opt = opt_attribs;
    opt_errorCallback = opt.errorCallback;
    opt_attribs = opt.attribLocations;
    transformFeedbackVaryings = opt.transformFeedbackVaryings;
    transformFeedbackMode = opt.transformFeedbackMode;
    callback = opt.callback;
  }

  const errorCallback = opt_errorCallback || error;
  const errors = [];
  const options = {
    errorCallback(msg, ...args) {
      errors.push(msg);
      errorCallback(msg, ...args);
    },
    transformFeedbackVaryings,
    transformFeedbackMode,
    callback,
    errors,
  };

  {
    let attribLocations = {};
    if (Array.isArray(opt_attribs)) {
      opt_attribs.forEach(function(attrib,  ndx) {
        attribLocations[attrib] = opt_locations ? opt_locations[ndx] : ndx;
      });
    } else {
      attribLocations = opt_attribs || {};
    }
    options.attribLocations = attribLocations;
  }

  return options;
}

const defaultShaderType = [
  "VERTEX_SHADER",
  "FRAGMENT_SHADER",
];

function getShaderTypeFromScriptType(gl, scriptType) {
  if (scriptType.indexOf("frag") >= 0) {
    return FRAGMENT_SHADER;
  } else if (scriptType.indexOf("vert") >= 0) {
    return VERTEX_SHADER;
  }
  return undefined;
}

function deleteProgramAndShaders(gl, program, notThese) {
  const shaders = gl.getAttachedShaders(program);
  for (const shader of shaders) {
    if (notThese.has(shader)) {
      gl.deleteShader(shader);
    }
  }
  gl.deleteProgram(program);
}

const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

function createProgramNoCheck(gl, shaders, programOptions) {
  const program = gl.createProgram();
  const {
    attribLocations,
    transformFeedbackVaryings,
    transformFeedbackMode,
  } = getProgramOptions(programOptions);

  for (let ndx = 0; ndx < shaders.length; ++ndx) {
    let shader = shaders[ndx];
    if (typeof shader === 'string') {
      const elem = getElementById(shader);
      const src = elem ? elem.text : shader;
      let type = gl[defaultShaderType[ndx]];
      if (elem && elem.type) {
        type = getShaderTypeFromScriptType(gl, elem.type) || type;
      }
      shader = gl.createShader(type);
      gl.shaderSource(shader, prepShaderSource(src).shaderSource);
      gl.compileShader(shader);
      gl.attachShader(program, shader);
    }
  }

  Object.entries(attribLocations).forEach(([attrib, loc]) => gl.bindAttribLocation(program, loc, attrib));

  {
    let varyings = transformFeedbackVaryings;
    if (varyings) {
      if (varyings.attribs) {
        varyings = varyings.attribs;
      }
      if (!Array.isArray(varyings)) {
        varyings = Object.keys(varyings);
      }
      gl.transformFeedbackVaryings(program, varyings, transformFeedbackMode || SEPARATE_ATTRIBS);
    }
  }

  gl.linkProgram(program);
  return program;
}

/**
 * Creates a program, attaches (and/or compiles) shaders, binds attrib locations, links the
 * program.
 *
 * NOTE: There are 4 signatures for this function
 *
 *     twgl.createProgram(gl, [vs, fs], options);
 *     twgl.createProgram(gl, [vs, fs], opt_errFunc);
 *     twgl.createProgram(gl, [vs, fs], opt_attribs, opt_errFunc);
 *     twgl.createProgram(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {WebGLShader[]|string[]} shaders The shaders to attach, or element ids for their source, or strings that contain their source
 * @param {module:twgl.ProgramOptions|string[]|module:twgl.ErrorCallback} [opt_attribs] Options for the program or an array of attribs names or an error callback. Locations will be assigned by index if not passed in
 * @param {number[]|module:twgl.ErrorCallback} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations or an error callback.
 * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {WebGLProgram?} the created program or null if error of a callback was provided.
 * @memberOf module:twgl/programs
 */
function createProgram(
    gl, shaders, opt_attribs, opt_locations, opt_errorCallback) {
  // This code is really convoluted, because it may or may not be async
  // Maybe it would be better to have a separate function
  const progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
  const shaderSet = new Set(shaders);
  const program = createProgramNoCheck(gl, shaders, progOptions);

  function hasErrors(gl, program) {
    const errors = getProgramErrors(gl, program, progOptions.errorCallback);
    if (errors) {
      deleteProgramAndShaders(gl, program, shaderSet);
    }
    return errors;
  }

  if (progOptions.callback) {
    waitForProgramLinkCompletionAsync(gl, program).then(() => {
      const errors = hasErrors(gl, program);
      progOptions.callback(errors, errors ? undefined : program);
    });
    return undefined;
  }

  return hasErrors(gl, program) ? undefined : program;
}

/**
 * This only works because the functions it wraps the first 2 arguments
 * are gl and any, followed by things that become programOptions
 * @private
 */
function wrapCallbackFnToAsyncFn(fn) {
  return function(gl, arg1, ...args) {
    return new Promise((resolve, reject) => {
      const programOptions = getProgramOptions(...args);
      programOptions.callback = (err, program) => {
        if (err) {
          reject(err);
        } else {
          resolve(program);
        }
      };
      fn(gl, arg1, programOptions);
    });
  };
}

/**
 * Same as createProgram but returns a promise
 *
 * NOTE: There are 4 signatures for this function
 *
 *     twgl.createProgramAsync(gl, [vs, fs], options);
 *     twgl.createProgramAsync(gl, [vs, fs], opt_errFunc);
 *     twgl.createProgramAsync(gl, [vs, fs], opt_attribs, opt_errFunc);
 *     twgl.createProgramAsync(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
 *
 * @function
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {WebGLShader[]|string[]} shaders The shaders to attach, or element ids for their source, or strings that contain their source
 * @param {module:twgl.ProgramOptions|string[]|module:twgl.ErrorCallback} [opt_attribs] Options for the program or an array of attribs names or an error callback. Locations will be assigned by index if not passed in
 * @param {number[]|module:twgl.ErrorCallback} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations or an error callback.
 * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {Promise<WebGLProgram>} The created program
 * @memberOf module:twgl/programs
 */
const createProgramAsync = wrapCallbackFnToAsyncFn(createProgram);

/**
 * Same as createProgramInfo but returns a promise
 * @function
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {string[]} shaderSources Array of sources for the
 *        shaders or ids. The first is assumed to be the vertex shader,
 *        the second the fragment shader.
 * @param {module:twgl.ProgramOptions|string[]|module:twgl.ErrorCallback} [opt_attribs] Options for the program or an array of attribs names or an error callback. Locations will be assigned by index if not passed in
 * @param {number[]|module:twgl.ErrorCallback} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations or an error callback.
 * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {Promise<module:twgl.ProgramInfo>} The created ProgramInfo
 * @memberOf module:twgl/programs
 */
const createProgramInfoAsync = wrapCallbackFnToAsyncFn(createProgramInfo);

async function waitForProgramLinkCompletionAsync(gl, program) {
  const ext = gl.getExtension('KHR_parallel_shader_compile');
  const checkFn = ext
      ? (gl, program) => gl.getProgramParameter(program, ext.COMPLETION_STATUS_KHR)
      : () => true;

  let waitTime = 0;
  do {
    await wait(waitTime);  // must wait at least once
    waitTime = 1000 / 60;
  } while (!checkFn(gl, program));
}

async function waitForAllProgramsLinkCompletionAsync(gl, programs) {
  for (const program of Object.values(programs)) {
    await waitForProgramLinkCompletionAsync(gl, program);
  }
}

/**
 * Check a program's link status
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {WebGLProgram} program Program to check
 * @param {ErrorCallback} [errFn] func for errors
 * @return {string?} errors if program is failed, else undefined
 * @private
 */
function getProgramErrors(gl, program, errFn) {
  errFn = errFn || error;
  // Check the link status
  const linked = gl.getProgramParameter(program, LINK_STATUS);
  if (!linked) {
    // something went wrong with the link
    const lastError = gl.getProgramInfoLog(program);
    errFn(`Error in program linking: ${lastError}`);
    // print any errors from these shaders
    const shaders = gl.getAttachedShaders(program);
    const errors = shaders.map(shader => checkShaderStatus(gl, gl.getShaderParameter(shader, gl.SHADER_TYPE), shader, errFn));
    return `${lastError}\n${errors.filter(_ => _).join('\n')}`;
  }
  return undefined;
}

/**
 * Creates a program from 2 script tags.
 *
 * NOTE: There are 4 signatures for this function
 *
 *     twgl.createProgramFromScripts(gl, [vs, fs], opt_options);
 *     twgl.createProgramFromScripts(gl, [vs, fs], opt_errFunc);
 *     twgl.createProgramFromScripts(gl, [vs, fs], opt_attribs, opt_errFunc);
 *     twgl.createProgramFromScripts(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {string[]} shaderScriptIds Array of ids of the script
 *        tags for the shaders. The first is assumed to be the
 *        vertex shader, the second the fragment shader.
 * @param {module:twgl.ProgramOptions|string[]|module:twgl.ErrorCallback} [opt_attribs] Options for the program or an array of attribs names or an error callback. Locations will be assigned by index if not passed in
 * @param {number[]|module:twgl.ErrorCallback} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations or an error callback.
 * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {WebGLProgram?} the created program or null if error or a callback was provided.
 * @memberOf module:twgl/programs
 */
function createProgramFromScripts(
    gl, shaderScriptIds, opt_attribs, opt_locations, opt_errorCallback) {
  const progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
  const shaders = [];
  for (const scriptId of shaderScriptIds) {
    const shaderScript = getElementById(scriptId);
    if (!shaderScript) {
      return reportError(progOptions, `unknown script element: ${scriptId}`);
    }
    shaders.push(shaderScript.text);
  }
  return createProgram(gl, shaders, progOptions);
}

/**
 * Creates a program from 2 sources.
 *
 * NOTE: There are 4 signatures for this function
 *
 *     twgl.createProgramFromSource(gl, [vs, fs], opt_options);
 *     twgl.createProgramFromSource(gl, [vs, fs], opt_errFunc);
 *     twgl.createProgramFromSource(gl, [vs, fs], opt_attribs, opt_errFunc);
 *     twgl.createProgramFromSource(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {string[]} shaderSources Array of sources for the
 *        shaders. The first is assumed to be the vertex shader,
 *        the second the fragment shader.
 * @param {module:twgl.ProgramOptions|string[]|module:twgl.ErrorCallback} [opt_attribs] Options for the program or an array of attribs names or an error callback. Locations will be assigned by index if not passed in
 * @param {number[]|module:twgl.ErrorCallback} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations or an error callback.
 * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {WebGLProgram?} the created program or null if error or a callback was provided.
 * @memberOf module:twgl/programs
 */
function createProgramFromSources(
    gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
  return createProgram(gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback);
}

/**
 * Returns true if attribute/uniform is a reserved/built in
 *
 * It makes no sense to me why GL returns these because it's
 * illegal to call `gl.getUniformLocation` and `gl.getAttribLocation`
 * with names that start with `gl_` (and `webgl_` in WebGL)
 *
 * I can only assume they are there because they might count
 * when computing the number of uniforms/attributes used when you want to
 * know if you are near the limit. That doesn't really make sense
 * to me but the fact that these get returned are in the spec.
 *
 * @param {WebGLActiveInfo} info As returned from `gl.getActiveUniform` or
 *    `gl.getActiveAttrib`.
 * @return {bool} true if it's reserved
 * @private
 */
function isBuiltIn(info) {
  const name = info.name;
  return name.startsWith("gl_") || name.startsWith("webgl_");
}

const tokenRE = /(\.|\[|]|\w+)/g;
const isDigit = s => s >= '0' && s <= '9';
function addSetterToUniformTree(fullPath, setter, node, uniformSetters) {
  const tokens = fullPath.split(tokenRE).filter(s => s !== '');
  let tokenNdx = 0;
  let path = '';

  for (;;) {
    const token = tokens[tokenNdx++];  // has to be name or number
    path += token;
    const isArrayIndex = isDigit(token[0]);
    const accessor = isArrayIndex
        ? parseInt(token)
        : token;
    if (isArrayIndex) {
      path += tokens[tokenNdx++];  // skip ']'
    }
    const isLastToken = tokenNdx === tokens.length;
    if (isLastToken) {
      node[accessor] = setter;
      break;
    } else {
      const token = tokens[tokenNdx++];  // has to be . or [
      const isArray = token === '[';
      const child = node[accessor] || (isArray ? [] : {});
      node[accessor] = child;
      node = child;
      uniformSetters[path] = uniformSetters[path] || function(node) {
        return function(value) {
          setUniformTree(node, value);
        };
      }(child);
      path += token;
    }
  }
}

/**
 * Creates setter functions for all uniforms of a shader
 * program.
 *
 * @see {@link module:twgl.setUniforms}
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {WebGLProgram} program the program to create setters for.
 * @returns {Object.<string, function>} an object with a setter by name for each uniform
 * @memberOf module:twgl/programs
 */
function createUniformSetters(gl, program) {
  let textureUnit = 0;

  /**
   * Creates a setter for a uniform of the given program with it's
   * location embedded in the setter.
   * @param {WebGLProgram} program
   * @param {WebGLUniformInfo} uniformInfo
   * @returns {function} the created setter.
   */
  function createUniformSetter(program, uniformInfo, location) {
    const isArray = uniformInfo.name.endsWith("[0]");
    const type = uniformInfo.type;
    const typeInfo = typeMap[type];
    if (!typeInfo) {
      throw new Error(`unknown type: 0x${type.toString(16)}`); // we should never get here.
    }
    let setter;
    if (typeInfo.bindPoint) {
      // it's a sampler
      const unit = textureUnit;
      textureUnit += uniformInfo.size;
      if (isArray) {
        setter = typeInfo.arraySetter(gl, type, unit, location, uniformInfo.size);
      } else {
        setter = typeInfo.setter(gl, type, unit, location, uniformInfo.size);
      }
    } else {
      if (typeInfo.arraySetter && isArray) {
        setter = typeInfo.arraySetter(gl, location);
      } else {
        setter = typeInfo.setter(gl, location);
      }
    }
    setter.location = location;
    return setter;
  }

  const uniformSetters = {};
  const uniformTree = {};
  const numUniforms = gl.getProgramParameter(program, ACTIVE_UNIFORMS);

  for (let ii = 0; ii < numUniforms; ++ii) {
    const uniformInfo = gl.getActiveUniform(program, ii);
    if (isBuiltIn(uniformInfo)) {
      continue;
    }
    let name = uniformInfo.name;
    // remove the array suffix.
    if (name.endsWith("[0]")) {
      name = name.substr(0, name.length - 3);
    }
    const location = gl.getUniformLocation(program, uniformInfo.name);
    // the uniform will have no location if it's in a uniform block
    if (location) {
      const setter = createUniformSetter(program, uniformInfo, location);
      uniformSetters[name] = setter;
      addSetterToUniformTree(name, setter, uniformTree, uniformSetters);
    }
  }

  return uniformSetters;
}

/**
 * @typedef {Object} TransformFeedbackInfo
 * @property {number} index index of transform feedback
 * @property {number} type GL type
 * @property {number} size 1 - 4
 * @memberOf module:twgl
 */

/**
 * Create TransformFeedbackInfo for passing to bindTransformFeedbackInfo.
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {WebGLProgram} program an existing WebGLProgram.
 * @return {Object<string, module:twgl.TransformFeedbackInfo>}
 * @memberOf module:twgl
 */
function createTransformFeedbackInfo(gl, program) {
  const info = {};
  const numVaryings = gl.getProgramParameter(program, TRANSFORM_FEEDBACK_VARYINGS);
  for (let ii = 0; ii < numVaryings; ++ii) {
    const varying = gl.getTransformFeedbackVarying(program, ii);
    info[varying.name] = {
      index: ii,
      type: varying.type,
      size: varying.size,
    };
  }
  return info;
}

/**
 * Binds buffers for transform feedback.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {(module:twgl.ProgramInfo|Object<string, module:twgl.TransformFeedbackInfo>)} transformFeedbackInfo A ProgramInfo or TransformFeedbackInfo.
 * @param {(module:twgl.BufferInfo|Object<string, module:twgl.AttribInfo>)} [bufferInfo] A BufferInfo or set of AttribInfos.
 * @memberOf module:twgl
 */
function bindTransformFeedbackInfo(gl, transformFeedbackInfo, bufferInfo) {
  if (transformFeedbackInfo.transformFeedbackInfo) {
    transformFeedbackInfo = transformFeedbackInfo.transformFeedbackInfo;
  }
  if (bufferInfo.attribs) {
    bufferInfo = bufferInfo.attribs;
  }
  for (const name in bufferInfo) {
    const varying = transformFeedbackInfo[name];
    if (varying) {
      const buf = bufferInfo[name];
      if (buf.offset) {
        gl.bindBufferRange(TRANSFORM_FEEDBACK_BUFFER, varying.index, buf.buffer, buf.offset, buf.size);
      } else {
        gl.bindBufferBase(TRANSFORM_FEEDBACK_BUFFER, varying.index, buf.buffer);
      }
    }
  }
}

/**
 * Creates a transform feedback and sets the buffers
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {module:twgl.ProgramInfo} programInfo A ProgramInfo as returned from {@link module:twgl.createProgramInfo}
 * @param {(module:twgl.BufferInfo|Object<string, module:twgl.AttribInfo>)} [bufferInfo] A BufferInfo or set of AttribInfos.
 * @return {WebGLTransformFeedback} the created transform feedback
 * @memberOf module:twgl
 */
function createTransformFeedback(gl, programInfo, bufferInfo) {
  const tf = gl.createTransformFeedback();
  gl.bindTransformFeedback(TRANSFORM_FEEDBACK, tf);
  gl.useProgram(programInfo.program);
  bindTransformFeedbackInfo(gl, programInfo, bufferInfo);
  gl.bindTransformFeedback(TRANSFORM_FEEDBACK, null);
  return tf;
}

/**
 * @typedef {Object} UniformData
 * @property {string} name The name of the uniform
 * @property {number} type The WebGL type enum for this uniform
 * @property {number} size The number of elements for this uniform
 * @property {number} blockNdx The block index this uniform appears in
 * @property {number} offset The byte offset in the block for this uniform's value
 * @memberOf module:twgl
 */

/**
 * The specification for one UniformBlockObject
 *
 * @typedef {Object} BlockSpec
 * @property {number} index The index of the block.
 * @property {number} size The size in bytes needed for the block
 * @property {number[]} uniformIndices The indices of the uniforms used by the block. These indices
 *    correspond to entries in a UniformData array in the {@link module:twgl.UniformBlockSpec}.
 * @property {bool} usedByVertexShader Self explanatory
 * @property {bool} usedByFragmentShader Self explanatory
 * @property {bool} used Self explanatory
 * @memberOf module:twgl
 */

/**
 * A `UniformBlockSpec` represents the data needed to create and bind
 * UniformBlockObjects for a given program
 *
 * @typedef {Object} UniformBlockSpec
 * @property {Object.<string, module:twgl.BlockSpec>} blockSpecs The BlockSpec for each block by block name
 * @property {UniformData[]} uniformData An array of data for each uniform by uniform index.
 * @memberOf module:twgl
 */

/**
 * Creates a UniformBlockSpec for the given program.
 *
 * A UniformBlockSpec represents the data needed to create and bind
 * UniformBlockObjects
 *
 * @param {WebGL2RenderingContext} gl A WebGL2 Rendering Context
 * @param {WebGLProgram} program A WebGLProgram for a successfully linked program
 * @return {module:twgl.UniformBlockSpec} The created UniformBlockSpec
 * @memberOf module:twgl/programs
 */
function createUniformBlockSpecFromProgram(gl, program) {
  const numUniforms = gl.getProgramParameter(program, ACTIVE_UNIFORMS);
  const uniformData = [];
  const uniformIndices = [];

  for (let ii = 0; ii < numUniforms; ++ii) {
    uniformIndices.push(ii);
    uniformData.push({});
    const uniformInfo = gl.getActiveUniform(program, ii);
    uniformData[ii].name = uniformInfo.name;
  }

  [
    [ "UNIFORM_TYPE", "type" ],
    [ "UNIFORM_SIZE", "size" ],  // num elements
    [ "UNIFORM_BLOCK_INDEX", "blockNdx" ],
    [ "UNIFORM_OFFSET", "offset", ],
  ].forEach(function(pair) {
    const pname = pair[0];
    const key = pair[1];
    gl.getActiveUniforms(program, uniformIndices, gl[pname]).forEach(function(value, ndx) {
      uniformData[ndx][key] = value;
    });
  });

  const blockSpecs = {};

  const numUniformBlocks = gl.getProgramParameter(program, ACTIVE_UNIFORM_BLOCKS);
  for (let ii = 0; ii < numUniformBlocks; ++ii) {
    const name = gl.getActiveUniformBlockName(program, ii);
    const blockSpec = {
      index: gl.getUniformBlockIndex(program, name),
      usedByVertexShader: gl.getActiveUniformBlockParameter(program, ii, UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER),
      usedByFragmentShader: gl.getActiveUniformBlockParameter(program, ii, UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER),
      size: gl.getActiveUniformBlockParameter(program, ii, UNIFORM_BLOCK_DATA_SIZE),
      uniformIndices: gl.getActiveUniformBlockParameter(program, ii, UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES),
    };
    blockSpec.used = blockSpec.usedByVertexShader || blockSpec.usedByFragmentShader;
    blockSpecs[name] = blockSpec;
  }

  return {
    blockSpecs: blockSpecs,
    uniformData: uniformData,
  };
}

const arraySuffixRE = /\[\d+\]\.$/;  // better way to check?

const pad = (v, padding) => ((v + (padding - 1)) / padding | 0) * padding;

function createUniformBlockUniformSetter(view, isArray, rows, cols) {
  if (isArray || rows) {
    cols = cols || 1;
    const numElements = view.length;
    const totalRows = numElements / 4;
    return function(value) {
      let dst = 0;
      let src = 0;
      for (let row = 0; row < totalRows; ++row) {
        for (let col = 0; col < cols; ++col) {
          view[dst++] = value[src++];
        }
        dst += 4 - cols;
      }
    };
  } else {
    return function(value) {
      if (value.length) {
        view.set(value);
      } else {
        view[0] = value;
      }
    };
  }
}

/**
 * Represents a UniformBlockObject including an ArrayBuffer with all the uniform values
 * and a corresponding WebGLBuffer to hold those values on the GPU
 *
 * @typedef {Object} UniformBlockInfo
 * @property {string} name The name of the block
 * @property {ArrayBuffer} array The array buffer that contains the uniform values
 * @property {Float32Array} asFloat A float view on the array buffer. This is useful
 *    inspecting the contents of the buffer in the debugger.
 * @property {WebGLBuffer} buffer A WebGL buffer that will hold a copy of the uniform values for rendering.
 * @property {number} [offset] offset into buffer
 * @property {Object<string, ArrayBufferView>} uniforms A uniform name to ArrayBufferView map.
 *   each Uniform has a correctly typed `ArrayBufferView` into array at the correct offset
 *   and length of that uniform. So for example a float uniform would have a 1 float `Float32Array`
 *   view. A single mat4 would have a 16 element `Float32Array` view. An ivec2 would have an
 *   `Int32Array` view, etc.
 * @property {Object<string, function>} setters A setter for this uniform.
 *   The reason to use setters is elements of arrays are padded to vec4 sizes which
 *   means if you want to set an array of 4 floats you'd need to set 16 values
 *   (or set elements 0, 4, 8, 12). In other words
 *   `someBlockInfo.uniforms.some4FloatArrayUniform.set([0, , , , 1, , , , 2, , , , 3])`
 *   where as the setter handles just passing in [0, 1, 2, 3] either directly as in
 *   `someBlockInfo.setter.some4FloatArrayUniform.set([0, 1, 2, 3])` (not recommended)
 *   or via {@link module:twgl.setBlockUniforms}
 * @memberOf module:twgl
 */

/**
 * Creates a `UniformBlockInfo` for the specified block
 *
 * Note: **If the blockName matches no existing blocks a warning is printed to the console and a dummy
 * `UniformBlockInfo` is returned**. This is because when debugging GLSL
 * it is common to comment out large portions of a shader or for example set
 * the final output to a constant. When that happens blocks get optimized out.
 * If this function did not create dummy blocks your code would crash when debugging.
 *
 * @param {WebGL2RenderingContext} gl A WebGL2RenderingContext
 * @param {WebGLProgram} program A WebGLProgram
 * @param {module:twgl.UniformBlockSpec} uniformBlockSpec. A UniformBlockSpec as returned
 *     from {@link module:twgl.createUniformBlockSpecFromProgram}.
 * @param {string} blockName The name of the block.
 * @return {module:twgl.UniformBlockInfo} The created UniformBlockInfo
 * @memberOf module:twgl/programs
 */
function createUniformBlockInfoFromProgram(gl, program, uniformBlockSpec, blockName) {
  const blockSpecs = uniformBlockSpec.blockSpecs;
  const uniformData = uniformBlockSpec.uniformData;
  const blockSpec = blockSpecs[blockName];
  if (!blockSpec) {
    warn("no uniform block object named:", blockName);
    return {
      name: blockName,
      uniforms: {},
    };
  }
  const array = new ArrayBuffer(blockSpec.size);
  const buffer = gl.createBuffer();
  const uniformBufferIndex = blockSpec.index;
  gl.bindBuffer(UNIFORM_BUFFER, buffer);
  gl.uniformBlockBinding(program, blockSpec.index, uniformBufferIndex);

  let prefix = blockName + ".";
  if (arraySuffixRE.test(prefix)) {
    prefix = prefix.replace(arraySuffixRE, ".");
  }
  const uniforms = {};
  const setters = {};
  const setterTree = {};
  blockSpec.uniformIndices.forEach(function(uniformNdx) {
    const data = uniformData[uniformNdx];
    let name = data.name;
    if (name.startsWith(prefix)) {
      name = name.substr(prefix.length);
    }
    const isArray = name.endsWith('[0]');
    if (isArray) {
      name = name.substr(0, name.length - 3);
    }
    const typeInfo = typeMap[data.type];
    const Type = typeInfo.Type;
    const byteLength = isArray
        ? pad(typeInfo.size, 16) * data.size
        : typeInfo.size * data.size;
    const uniformView = new Type(array, data.offset, byteLength / Type.BYTES_PER_ELEMENT);
    uniforms[name] = uniformView;
    // Note: I'm not sure what to do here. The original
    // idea was to create TypedArray views into each part
    // of the block. This is useful, for example if you have
    // a block with { mat4: model; mat4 view; mat4 projection; }
    // you'll get a Float32Array for each one suitable for
    // passing to most JS math libraries including twgl's and glMatrix.js.
    //
    // But, if you have a an array of structures, especially if that
    // array is large, you get a whole bunch of TypedArray views.
    // Every one of them has overhead and switching between them all
    // is probably a cache miss. In that case it would really be better
    // to just have one view (asFloat) and have all the setters
    // just reference the correct portion. But, then you can't easily
    // treat a matrix, or a vec4, as a standalone thing like you can
    // with all the views.
    //
    // Another problem with the views is they are not shared. With
    // uniforms you have one set of setters. With UniformBlockInfo
    // you have a set of setters *pre block instance*. That's because
    // TypedArray views can't be mapped to different buffers.
    //
    // My gut right now is if you really want the speed and compactness
    // then you should probably roll your own solution. TWGL's goal
    // here is ease of use as AFAICT there is no simple generic efficient
    // solution.
    const setter = createUniformBlockUniformSetter(uniformView, isArray, typeInfo.rows, typeInfo.cols);
    setters[name] = setter;
    addSetterToUniformTree(name, setter, setterTree, setters);
  });
  return {
    name: blockName,
    array,
    asFloat: new Float32Array(array),  // for debugging
    buffer,
    uniforms,
    setters,
  };
}

/**
 * Creates a `UniformBlockInfo` for the specified block
 *
 * Note: **If the blockName matches no existing blocks a warning is printed to the console and a dummy
 * `UniformBlockInfo` is returned**. This is because when debugging GLSL
 * it is common to comment out large portions of a shader or for example set
 * the final output to a constant. When that happens blocks get optimized out.
 * If this function did not create dummy blocks your code would crash when debugging.
 *
 * @param {WebGL2RenderingContext} gl A WebGL2RenderingContext
 * @param {module:twgl.ProgramInfo} programInfo a `ProgramInfo`
 *     as returned from {@link module:twgl.createProgramInfo}
 * @param {string} blockName The name of the block.
 * @return {module:twgl.UniformBlockInfo} The created UniformBlockInfo
 * @memberOf module:twgl/programs
 */
function createUniformBlockInfo(gl, programInfo, blockName) {
  return createUniformBlockInfoFromProgram(gl, programInfo.program, programInfo.uniformBlockSpec, blockName);
}

/**
 * Binds a uniform block to the matching uniform block point.
 * Matches by blocks by name so blocks must have the same name not just the same
 * structure.
 *
 * If you have changed any values and you upload the values into the corresponding WebGLBuffer
 * call {@link module:twgl.setUniformBlock} instead.
 *
 * @param {WebGL2RenderingContext} gl A WebGL 2 rendering context.
 * @param {(module:twgl.ProgramInfo|module:twgl.UniformBlockSpec)} programInfo a `ProgramInfo`
 *     as returned from {@link module:twgl.createProgramInfo} or or `UniformBlockSpec` as
 *     returned from {@link module:twgl.createUniformBlockSpecFromProgram}.
 * @param {module:twgl.UniformBlockInfo} uniformBlockInfo a `UniformBlockInfo` as returned from
 *     {@link module:twgl.createUniformBlockInfo}.
 * @return {bool} true if buffer was bound. If the programInfo has no block with the same block name
 *     no buffer is bound.
 * @memberOf module:twgl/programs
 */
function bindUniformBlock(gl, programInfo, uniformBlockInfo) {
  const uniformBlockSpec = programInfo.uniformBlockSpec || programInfo;
  const blockSpec = uniformBlockSpec.blockSpecs[uniformBlockInfo.name];
  if (blockSpec) {
    const bufferBindIndex = blockSpec.index;
    gl.bindBufferRange(UNIFORM_BUFFER, bufferBindIndex, uniformBlockInfo.buffer, uniformBlockInfo.offset || 0, uniformBlockInfo.array.byteLength);
    return true;
  }
  return false;
}

/**
 * Uploads the current uniform values to the corresponding WebGLBuffer
 * and binds that buffer to the program's corresponding bind point for the uniform block object.
 *
 * If you haven't changed any values and you only need to bind the uniform block object
 * call {@link module:twgl.bindUniformBlock} instead.
 *
 * @param {WebGL2RenderingContext} gl A WebGL 2 rendering context.
 * @param {(module:twgl.ProgramInfo|module:twgl.UniformBlockSpec)} programInfo a `ProgramInfo`
 *     as returned from {@link module:twgl.createProgramInfo} or or `UniformBlockSpec` as
 *     returned from {@link module:twgl.createUniformBlockSpecFromProgram}.
 * @param {module:twgl.UniformBlockInfo} uniformBlockInfo a `UniformBlockInfo` as returned from
 *     {@link module:twgl.createUniformBlockInfo}.
 * @memberOf module:twgl/programs
 */
function setUniformBlock(gl, programInfo, uniformBlockInfo) {
  if (bindUniformBlock(gl, programInfo, uniformBlockInfo)) {
    gl.bufferData(UNIFORM_BUFFER, uniformBlockInfo.array, DYNAMIC_DRAW);
  }
}

/**
 * Sets values of a uniform block object
 *
 * @param {module:twgl.UniformBlockInfo} uniformBlockInfo A UniformBlockInfo as returned by {@link module:twgl.createUniformBlockInfo}.
 * @param {Object.<string, ?>} values A uniform name to value map where the value is correct for the given
 *    type of uniform. So for example given a block like
 *
 *       uniform SomeBlock {
 *         float someFloat;
 *         vec2 someVec2;
 *         vec3 someVec3Array[2];
 *         int someInt;
 *       }
 *
 *  You can set the values of the uniform block with
 *
 *       twgl.setBlockUniforms(someBlockInfo, {
 *          someFloat: 12.3,
 *          someVec2: [1, 2],
 *          someVec3Array: [1, 2, 3, 4, 5, 6],
 *          someInt: 5,
 *       }
 *
 *  Arrays can be JavaScript arrays or typed arrays
 *
 *  You can also fill out structure and array values either via
 *  shortcut. Example
 *
 *     // -- in shader --
 *     struct Light {
 *       float intensity;
 *       vec4 color;
 *       float nearFar[2];
 *     };
 *     uniform Lights {
 *       Light lights[2];
 *     };
 *
 *     // in JavaScript
 *
 *     twgl.setBlockUniforms(someBlockInfo, {
 *       lights: [
 *         { intensity: 5.0, color: [1, 0, 0, 1], nearFar[0.1, 10] },
 *         { intensity: 2.0, color: [0, 0, 1, 1], nearFar[0.2, 15] },
 *       ],
 *     });
 *
 *   or the more traditional way
 *
 *     twgl.setBlockUniforms(someBlockInfo, {
 *       "lights[0].intensity": 5.0,
 *       "lights[0].color": [1, 0, 0, 1],
 *       "lights[0].nearFar": [0.1, 10],
 *       "lights[1].intensity": 2.0,
 *       "lights[1].color": [0, 0, 1, 1],
 *       "lights[1].nearFar": [0.2, 15],
 *     });
 *
 *   You can also specify partial paths
 *
 *     twgl.setBlockUniforms(someBlockInfo, {
 *       'lights[1]': { intensity: 5.0, color: [1, 0, 0, 1], nearFar[0.2, 15] },
 *     });
 *
 *   But you can not specify leaf array indices.
 *
 *     twgl.setBlockUniforms(someBlockInfo, {
 *       'lights[1].nearFar[1]': 15,     // BAD! nearFar is a leaf
 *       'lights[1].nearFar': [0.2, 15], // GOOD
 *     });
 *
 *  **IMPORTANT!**, packing in a UniformBlock is unintuitive.
 *  For example the actual layout of `someVec3Array` above in memory
 *  is `1, 2, 3, unused, 4, 5, 6, unused`. twgl takes in 6 values
 *  as shown about and copies them, skipping the padding. This might
 *  be confusing if you're already familiar with Uniform blocks.
 *
 *  If you want to deal with the padding yourself you can access the array
 *  buffer views directly. eg:
 *
 *      someBlockInfo.someVec3Array.set([1, 2, 3, 0, 4, 5, 6, 0]);
 *
 *  Any name that doesn't match will be ignored
 * @memberOf module:twgl/programs
 */
function setBlockUniforms(uniformBlockInfo, values) {
  const setters = uniformBlockInfo.setters;
  for (const name in values) {
    const setter = setters[name];
    if (setter) {
      const value = values[name];
      setter(value);
    }
  }
}

function setUniformTree(tree, values) {
  for (const name in values) {
    const prop = tree[name];
    if (typeof prop === 'function') {
      prop(values[name]);
    } else {
      setUniformTree(tree[name], values[name]);
    }
  }
}

/**
 * Set uniforms and binds related textures.
 *
 * example:
 *
 *     const programInfo = createProgramInfo(
 *         gl, ["some-vs", "some-fs"]);
 *
 *     const tex1 = gl.createTexture();
 *     const tex2 = gl.createTexture();
 *
 *     ... assume we setup the textures with data ...
 *
 *     const uniforms = {
 *       u_someSampler: tex1,
 *       u_someOtherSampler: tex2,
 *       u_someColor: [1,0,0,1],
 *       u_somePosition: [0,1,1],
 *       u_someMatrix: [
 *         1,0,0,0,
 *         0,1,0,0,
 *         0,0,1,0,
 *         0,0,0,0,
 *       ],
 *     };
 *
 *     gl.useProgram(programInfo.program);
 *
 * This will automatically bind the textures AND set the
 * uniforms.
 *
 *     twgl.setUniforms(programInfo, uniforms);
 *
 * For the example above it is equivalent to
 *
 *     let texUnit = 0;
 *     gl.activeTexture(gl.TEXTURE0 + texUnit);
 *     gl.bindTexture(gl.TEXTURE_2D, tex1);
 *     gl.uniform1i(u_someSamplerLocation, texUnit++);
 *     gl.activeTexture(gl.TEXTURE0 + texUnit);
 *     gl.bindTexture(gl.TEXTURE_2D, tex2);
 *     gl.uniform1i(u_someSamplerLocation, texUnit++);
 *     gl.uniform4fv(u_someColorLocation, [1, 0, 0, 1]);
 *     gl.uniform3fv(u_somePositionLocation, [0, 1, 1]);
 *     gl.uniformMatrix4fv(u_someMatrix, false, [
 *         1,0,0,0,
 *         0,1,0,0,
 *         0,0,1,0,
 *         0,0,0,0,
 *       ]);
 *
 * Note it is perfectly reasonable to call `setUniforms` multiple times. For example
 *
 *     const uniforms = {
 *       u_someSampler: tex1,
 *       u_someOtherSampler: tex2,
 *     };
 *
 *     const moreUniforms {
 *       u_someColor: [1,0,0,1],
 *       u_somePosition: [0,1,1],
 *       u_someMatrix: [
 *         1,0,0,0,
 *         0,1,0,0,
 *         0,0,1,0,
 *         0,0,0,0,
 *       ],
 *     };
 *
 *     twgl.setUniforms(programInfo, uniforms);
 *     twgl.setUniforms(programInfo, moreUniforms);
 *
 * You can also add WebGLSamplers to uniform samplers as in
 *
 *     const uniforms = {
 *       u_someSampler: {
 *         texture: someWebGLTexture,
 *         sampler: someWebGLSampler,
 *       },
 *     };
 *
 * In which case both the sampler and texture will be bound to the
 * same unit.
 *
 * @param {(module:twgl.ProgramInfo|Object.<string, function>)} setters a `ProgramInfo` as returned from `createProgramInfo` or the setters returned from
 *        `createUniformSetters`.
 * @param {Object.<string, ?>} values an object with values for the
 *        uniforms.
 *   You can pass multiple objects by putting them in an array or by calling with more arguments.For example
 *
 *     const sharedUniforms = {
 *       u_fogNear: 10,
 *       u_projection: ...
 *       ...
 *     };
 *
 *     const localUniforms = {
 *       u_world: ...
 *       u_diffuseColor: ...
 *     };
 *
 *     twgl.setUniforms(programInfo, sharedUniforms, localUniforms);
 *
 *     // is the same as
 *
 *     twgl.setUniforms(programInfo, [sharedUniforms, localUniforms]);
 *
 *     // is the same as
 *
 *     twgl.setUniforms(programInfo, sharedUniforms);
 *     twgl.setUniforms(programInfo, localUniforms};
 *
 *   You can also fill out structure and array values either via
 *   shortcut. Example
 *
 *     // -- in shader --
 *     struct Light {
 *       float intensity;
 *       vec4 color;
 *       float nearFar[2];
 *     };
 *     uniform Light lights[2];
 *
 *     // in JavaScript
 *
 *     twgl.setUniforms(programInfo, {
 *       lights: [
 *         { intensity: 5.0, color: [1, 0, 0, 1], nearFar[0.1, 10] },
 *         { intensity: 2.0, color: [0, 0, 1, 1], nearFar[0.2, 15] },
 *       ],
 *     });
 *
 *   or the more traditional way
 *
 *     twgl.setUniforms(programInfo, {
 *       "lights[0].intensity": 5.0,
 *       "lights[0].color": [1, 0, 0, 1],
 *       "lights[0].nearFar": [0.1, 10],
 *       "lights[1].intensity": 2.0,
 *       "lights[1].color": [0, 0, 1, 1],
 *       "lights[1].nearFar": [0.2, 15],
 *     });
 *
 *   You can also specify partial paths
 *
 *     twgl.setUniforms(programInfo, {
 *       'lights[1]': { intensity: 5.0, color: [1, 0, 0, 1], nearFar[0.2, 15] },
 *     });
 *
 *   But you can not specify leaf array indices
 *
 *     twgl.setUniforms(programInfo, {
 *       'lights[1].nearFar[1]': 15,     // BAD! nearFar is a leaf
 *       'lights[1].nearFar': [0.2, 15], // GOOD
 *     });
 *
 * @memberOf module:twgl/programs
 */
function setUniforms(setters, ...args) {  // eslint-disable-line
  const actualSetters = setters.uniformSetters || setters;
  const numArgs = args.length;
  for (let aNdx = 0; aNdx < numArgs; ++aNdx) {
    const values = args[aNdx];
    if (Array.isArray(values)) {
      const numValues = values.length;
      for (let ii = 0; ii < numValues; ++ii) {
        setUniforms(actualSetters, values[ii]);
      }
    } else {
      for (const name in values) {
        const setter = actualSetters[name];
        if (setter) {
          setter(values[name]);
        }
      }
    }
  }
}

/**
 * Alias for `setUniforms`
 * @function
 * @param {(module:twgl.ProgramInfo|Object.<string, function>)} setters a `ProgramInfo` as returned from `createProgramInfo` or the setters returned from
 *        `createUniformSetters`.
 * @param {Object.<string, ?>} values an object with values for the
 * @memberOf module:twgl/programs
 */
const setUniformsAndBindTextures = setUniforms;

/**
 * Creates setter functions for all attributes of a shader
 * program. You can pass this to {@link module:twgl.setBuffersAndAttributes} to set all your buffers and attributes.
 *
 * @see {@link module:twgl.setAttributes} for example
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {WebGLProgram} program the program to create setters for.
 * @return {Object.<string, function>} an object with a setter for each attribute by name.
 * @memberOf module:twgl/programs
 */
function createAttributeSetters(gl, program) {
  const attribSetters = {
  };

  const numAttribs = gl.getProgramParameter(program, ACTIVE_ATTRIBUTES);
  for (let ii = 0; ii < numAttribs; ++ii) {
    const attribInfo = gl.getActiveAttrib(program, ii);
    if (isBuiltIn(attribInfo)) {
      continue;
    }
    const index = gl.getAttribLocation(program, attribInfo.name);
    const typeInfo = attrTypeMap[attribInfo.type];
    const setter = typeInfo.setter(gl, index, typeInfo);
    setter.location = index;
    attribSetters[attribInfo.name] = setter;
  }

  return attribSetters;
}

/**
 * Sets attributes and binds buffers (deprecated... use {@link module:twgl.setBuffersAndAttributes})
 *
 * Example:
 *
 *     const program = createProgramFromScripts(
 *         gl, ["some-vs", "some-fs");
 *
 *     const attribSetters = createAttributeSetters(program);
 *
 *     const positionBuffer = gl.createBuffer();
 *     const texcoordBuffer = gl.createBuffer();
 *
 *     const attribs = {
 *       a_position: {buffer: positionBuffer, numComponents: 3},
 *       a_texcoord: {buffer: texcoordBuffer, numComponents: 2},
 *     };
 *
 *     gl.useProgram(program);
 *
 * This will automatically bind the buffers AND set the
 * attributes.
 *
 *     setAttributes(attribSetters, attribs);
 *
 * Properties of attribs. For each attrib you can add
 * properties:
 *
 * *   type: the type of data in the buffer. Default = gl.FLOAT
 * *   normalize: whether or not to normalize the data. Default = false
 * *   stride: the stride. Default = 0
 * *   offset: offset into the buffer. Default = 0
 * *   divisor: the divisor for instances. Default = undefined
 *
 * For example if you had 3 value float positions, 2 value
 * float texcoord and 4 value uint8 colors you'd setup your
 * attribs like this
 *
 *     const attribs = {
 *       a_position: {buffer: positionBuffer, numComponents: 3},
 *       a_texcoord: {buffer: texcoordBuffer, numComponents: 2},
 *       a_color: {
 *         buffer: colorBuffer,
 *         numComponents: 4,
 *         type: gl.UNSIGNED_BYTE,
 *         normalize: true,
 *       },
 *     };
 *
 * @param {Object.<string, function>} setters Attribute setters as returned from createAttributeSetters
 * @param {Object.<string, module:twgl.AttribInfo>} buffers AttribInfos mapped by attribute name.
 * @memberOf module:twgl/programs
 * @deprecated use {@link module:twgl.setBuffersAndAttributes}
 * @private
 */
function setAttributes(setters, buffers) {
  for (const name in buffers) {
    const setter = setters[name];
    if (setter) {
      setter(buffers[name]);
    }
  }
}

/**
 * Sets attributes and buffers including the `ELEMENT_ARRAY_BUFFER` if appropriate
 *
 * Example:
 *
 *     const programInfo = createProgramInfo(
 *         gl, ["some-vs", "some-fs");
 *
 *     const arrays = {
 *       position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
 *       texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
 *     };
 *
 *     const bufferInfo = createBufferInfoFromArrays(gl, arrays);
 *
 *     gl.useProgram(programInfo.program);
 *
 * This will automatically bind the buffers AND set the
 * attributes.
 *
 *     setBuffersAndAttributes(gl, programInfo, bufferInfo);
 *
 * For the example above it is equivalent to
 *
 *     gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
 *     gl.enableVertexAttribArray(a_positionLocation);
 *     gl.vertexAttribPointer(a_positionLocation, 3, gl.FLOAT, false, 0, 0);
 *     gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
 *     gl.enableVertexAttribArray(a_texcoordLocation);
 *     gl.vertexAttribPointer(a_texcoordLocation, 4, gl.FLOAT, false, 0, 0);
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext.
 * @param {(module:twgl.ProgramInfo|Object.<string, function>)} setters A `ProgramInfo` as returned from {@link module:twgl.createProgramInfo} or Attribute setters as returned from {@link module:twgl.createAttributeSetters}
 * @param {(module:twgl.BufferInfo|module:twgl.VertexArrayInfo)} buffers a `BufferInfo` as returned from {@link module:twgl.createBufferInfoFromArrays}.
 *   or a `VertexArrayInfo` as returned from {@link module:twgl.createVertexArrayInfo}
 * @memberOf module:twgl/programs
 */
function setBuffersAndAttributes(gl, programInfo, buffers) {
  if (buffers.vertexArrayObject) {
    gl.bindVertexArray(buffers.vertexArrayObject);
  } else {
    setAttributes(programInfo.attribSetters || programInfo, buffers.attribs);
    if (buffers.indices) {
      gl.bindBuffer(ELEMENT_ARRAY_BUFFER$1, buffers.indices);
    }
  }
}

/**
 * @typedef {Object} ProgramInfo
 * @property {WebGLProgram} program A shader program
 * @property {Object<string, function>} uniformSetters object of setters as returned from createUniformSetters,
 * @property {Object<string, function>} attribSetters object of setters as returned from createAttribSetters,
 * @property {module:twgl.UniformBlockSpec} [uniformBlockSpec] a uniform block spec for making UniformBlockInfos with createUniformBlockInfo etc..
 * @property {Object<string, module:twgl.TransformFeedbackInfo>} [transformFeedbackInfo] info for transform feedbacks
 * @memberOf module:twgl
 */

/**
 * Creates a ProgramInfo from an existing program.
 *
 * A ProgramInfo contains
 *
 *     programInfo = {
 *        program: WebGLProgram,
 *        uniformSetters: object of setters as returned from createUniformSetters,
 *        attribSetters: object of setters as returned from createAttribSetters,
 *     }
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {WebGLProgram} program an existing WebGLProgram.
 * @return {module:twgl.ProgramInfo} The created ProgramInfo.
 * @memberOf module:twgl/programs
 */
function createProgramInfoFromProgram(gl, program) {
  const uniformSetters = createUniformSetters(gl, program);
  const attribSetters = createAttributeSetters(gl, program);
  const programInfo = {
    program,
    uniformSetters,
    attribSetters,
  };

  if (isWebGL2(gl)) {
    programInfo.uniformBlockSpec = createUniformBlockSpecFromProgram(gl, program);
    programInfo.transformFeedbackInfo = createTransformFeedbackInfo(gl, program);
  }

  return programInfo;
}

const notIdRE = /\s|{|}|;/;

/**
 * Creates a ProgramInfo from 2 sources.
 *
 * A ProgramInfo contains
 *
 *     programInfo = {
 *        program: WebGLProgram,
 *        uniformSetters: object of setters as returned from createUniformSetters,
 *        attribSetters: object of setters as returned from createAttribSetters,
 *     }
 *
 * NOTE: There are 4 signatures for this function
 *
 *     twgl.createProgramInfo(gl, [vs, fs], options);
 *     twgl.createProgramInfo(gl, [vs, fs], opt_errFunc);
 *     twgl.createProgramInfo(gl, [vs, fs], opt_attribs, opt_errFunc);
 *     twgl.createProgramInfo(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {string[]} shaderSources Array of sources for the
 *        shaders or ids. The first is assumed to be the vertex shader,
 *        the second the fragment shader.
 * @param {module:twgl.ProgramOptions|string[]|module:twgl.ErrorCallback} [opt_attribs] Options for the program or an array of attribs names or an error callback. Locations will be assigned by index if not passed in
 * @param {number[]|module:twgl.ErrorCallback} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations or an error callback.
 * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {module:twgl.ProgramInfo?} The created ProgramInfo or null if it failed to link or compile
 * @memberOf module:twgl/programs
 */
function createProgramInfo(
    gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
  const progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
  const errors = [];
  shaderSources = shaderSources.map(function(source) {
    // Lets assume if there is no \n it's an id
    if (!notIdRE.test(source)) {
      const script = getElementById(source);
      if (!script) {
        const err = `no element with id: ${source}`;
        progOptions.errorCallback(err);
        errors.push(err);
      } else {
        source = script.text;
      }
    }
    return source;
  });

  if (errors.length) {
    return reportError(progOptions, '');
  }

  const origCallback = progOptions.callback;
  if (origCallback) {
    progOptions.callback = (err, program) => {
      origCallback(err, err ? undefined : createProgramInfoFromProgram(gl, program));
    };
  }

  const program = createProgramFromSources(gl, shaderSources, progOptions);
  if (!program) {
    return null;
  }

  return createProgramInfoFromProgram(gl, program);
}

function checkAllPrograms(gl, programs, programSpecs, noDeleteShadersSet, programOptions) {
  // check errors for everything.
  for (const [name, program] of Object.entries(programs)) {
    const options = {...programOptions};
    const spec = programSpecs[name];
    if (!Array.isArray(spec)) {
      Object.assign(options, spec);
    }
    const errors = getProgramErrors(gl, program, options.errorCallback);
    if (errors) {
      // delete everything we created
      for (const program of Object.values(programs)) {
        const shaders = gl.getAttachedShaders(program);
        gl.deleteProgram(program);
        for (const shader of shaders) {
          // Don't delete it if we didn't create it.
          if (!noDeleteShadersSet.has(shader)) {
            gl.deleteShader(shader);
          }
        }
      }
      return errors;
    }
  }

  return undefined;
}

/**
 * Creates multiple programs
 *
 * Note: the reason this function exists is because the fastest way to create multiple
 * programs in WebGL is to create and compile all shaders and link all programs and only
 * afterwards check if they succeeded. In that way, giving all your shaders
 *
 * @see {@link module:twgl.createProgram}
 *
 * Example:
 *
 *     const programs = twgl.createPrograms(gl, {
 *       lambert: [lambertVS, lambertFS],
 *       phong: [phongVS, phoneFS],
 *       particles: {
 *         shaders: [particlesVS, particlesFS],
 *         transformFeedbackVaryings: ['position', 'velocity'],
 *       },
 *     });
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {Object.<string, module:twgl.ProgramSpec>} programSpecs An object of ProgramSpecs, one per program.
 * @param {module:twgl.ProgramOptions} [programOptions] options to apply to all programs
 * @return {Object.<string, WebGLProgram>?} the created programInfos by name
 */
function createPrograms(gl, programSpecs, programOptions = {}) {
  // Remember existing shaders so that if there is an error we don't delete them
  const noDeleteShadersSet = new Set();

  // compile and link everything
  const programs = Object.fromEntries(Object.entries(programSpecs).map(([name, spec]) => {
    const options = {...programOptions};
    const shaders = Array.isArray(spec) ? spec : spec.shaders;
    if (!Array.isArray(spec)) {
      Object.assign(options, spec);
    }
    shaders.forEach(noDeleteShadersSet.add, noDeleteShadersSet);
    return [name, createProgramNoCheck(gl, shaders, options)];
  }));

  if (programOptions.callback) {
    waitForAllProgramsLinkCompletionAsync(gl, programs).then(() => {
      const errors = checkAllPrograms(gl, programs, programSpecs, noDeleteShadersSet, programOptions);
      programOptions.callback(errors, errors ? undefined : programs);
    });
    return undefined;
  }

  const errors = checkAllPrograms(gl, programs, programSpecs, noDeleteShadersSet, programOptions);
  return errors ? undefined : programs;
}

/**
 * Creates multiple programInfos
 *
 * Note: the reason this function exists is because the fastest way to create multiple
 * programs in WebGL is to create and compile all shaders and link all programs and only
 * afterwards check if they succeeded. In that way, giving all your shaders
 *
 * @see {@link module:twgl.createProgramInfo}
 *
 * Examples:
 *
 *     const programInfos = twgl.createProgramInfos(gl, {
 *       lambert: [lambertVS, lambertFS],
 *       phong: [phongVS, phoneFS],
 *       particles: {
 *         shaders: [particlesVS, particlesFS],
 *         transformFeedbackVaryings: ['position', 'velocity'],
 *       },
 *     });
 *
 * or
 *
 *     const {lambert, phong, particles} = twgl.createProgramInfos(gl, {
 *       lambert: [lambertVS, lambertFS],
 *       phong: [phongVS, phoneFS],
 *       particles: {
 *         shaders: [particlesVS, particlesFS],
 *         transformFeedbackVaryings: ['position', 'velocity'],
 *       },
 *     });
 *
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {Object.<string, module:twgl.ProgramSpec>} programSpecs An object of ProgramSpecs, one per program.
 * @param {module:twgl.ProgramOptions} [programOptions] options to apply to all programs
 * @return {Object.<string, module:twgl.ProgramInfo>?} the created programInfos by name
 */
function createProgramInfos(gl, programSpecs, programOptions) {
  programOptions = getProgramOptions(programOptions);

  function createProgramInfosForPrograms(gl, programs) {
    return Object.fromEntries(Object.entries(programs).map(([name, program]) =>
      [name, createProgramInfoFromProgram(gl, program)]
    ));
  }

  const origCallback = programOptions.callback;
  if (origCallback) {
    programOptions.callback = (err, programs) => {
      origCallback(err, err ? undefined : createProgramInfosForPrograms(gl, programs));
    };
  }

  const programs = createPrograms(gl, programSpecs, programOptions);
  if (origCallback || !programs) {
    return undefined;
  }

  return createProgramInfosForPrograms(gl, programs);
}

/**
 * Creates multiple programs asynchronously
 *
 * @see {@link module:twgl.createProgramAsync}
 *
 * Example:
 *
 *     const programs = await twgl.createProgramsAsync(gl, {
 *       lambert: [lambertVS, lambertFS],
 *       phong: [phongVS, phoneFS],
 *       particles: {
 *         shaders: [particlesVS, particlesFS],
 *         transformFeedbackVaryings: ['position', 'velocity'],
 *       },
 *     });
 *
 * @function
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {Object.<string, module:twgl.ProgramSpec>} programSpecs An object of ProgramSpecs, one per program.
 * @param {module:twgl.ProgramOptions} [programOptions] options to apply to all programs
 * @return {Object.<string, WebGLProgram>?} the created programInfos by name
 */
const createProgramsAsync = wrapCallbackFnToAsyncFn(createPrograms);

/**
 * Creates multiple programInfos asynchronously
 *
 * @see {@link module:twgl.createProgramInfoAsync}
 *
 * Example:
 *
 *     const programInfos = await twgl.createProgramInfosAsync(gl, {
 *       lambert: [lambertVS, lambertFS],
 *       phong: [phongVS, phoneFS],
 *       particles: {
 *         shaders: [particlesVS, particlesFS],
 *         transformFeedbackVaryings: ['position', 'velocity'],
 *       },
 *     });
 *
 * @function
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {Object.<string, module:twgl.ProgramSpec>} programSpecs An object of ProgramSpecs, one per program.
 * @param {module:twgl.ProgramOptions} [programOptions] options to apply to all programs
 * @return {Promise<Object.<string, module:twgl.ProgramInfo>>} the created programInfos by name
 */
const createProgramInfosAsync = wrapCallbackFnToAsyncFn(createProgramInfos);

var programs = /*#__PURE__*/Object.freeze({
  __proto__: null,
  createAttributeSetters: createAttributeSetters,
  createProgram: createProgram,
  createProgramAsync: createProgramAsync,
  createPrograms: createPrograms,
  createProgramsAsync: createProgramsAsync,
  createProgramFromScripts: createProgramFromScripts,
  createProgramFromSources: createProgramFromSources,
  createProgramInfo: createProgramInfo,
  createProgramInfoAsync: createProgramInfoAsync,
  createProgramInfos: createProgramInfos,
  createProgramInfosAsync: createProgramInfosAsync,
  createProgramInfoFromProgram: createProgramInfoFromProgram,
  createUniformSetters: createUniformSetters,
  createUniformBlockSpecFromProgram: createUniformBlockSpecFromProgram,
  createUniformBlockInfoFromProgram: createUniformBlockInfoFromProgram,
  createUniformBlockInfo: createUniformBlockInfo,
  createTransformFeedback: createTransformFeedback,
  createTransformFeedbackInfo: createTransformFeedbackInfo,
  bindTransformFeedbackInfo: bindTransformFeedbackInfo,
  setAttributes: setAttributes,
  setBuffersAndAttributes: setBuffersAndAttributes,
  setUniforms: setUniforms,
  setUniformsAndBindTextures: setUniformsAndBindTextures,
  setUniformBlock: setUniformBlock,
  setBlockUniforms: setBlockUniforms,
  bindUniformBlock: bindUniformBlock
});

/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

const TRIANGLES                      = 0x0004;
const UNSIGNED_SHORT                 = 0x1403;

/**
 * Drawing related functions
 *
 * For backward compatibility they are available at both `twgl.draw` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/draw
 */

/**
 * Calls `gl.drawElements` or `gl.drawArrays`, whichever is appropriate
 *
 * normally you'd call `gl.drawElements` or `gl.drawArrays` yourself
 * but calling this means if you switch from indexed data to non-indexed
 * data you don't have to remember to update your draw call.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {(module:twgl.BufferInfo|module:twgl.VertexArrayInfo)} bufferInfo A BufferInfo as returned from {@link module:twgl.createBufferInfoFromArrays} or
 *   a VertexArrayInfo as returned from {@link module:twgl.createVertexArrayInfo}
 * @param {number} [type] eg (gl.TRIANGLES, gl.LINES, gl.POINTS, gl.TRIANGLE_STRIP, ...). Defaults to `gl.TRIANGLES`
 * @param {number} [count] An optional count. Defaults to bufferInfo.numElements
 * @param {number} [offset] An optional offset. Defaults to 0.
 * @param {number} [instanceCount] An optional instanceCount. if set then `drawArraysInstanced` or `drawElementsInstanced` will be called
 * @memberOf module:twgl/draw
 */
function drawBufferInfo(gl, bufferInfo, type, count, offset, instanceCount) {
  type = type === undefined ? TRIANGLES : type;
  const indices = bufferInfo.indices;
  const elementType = bufferInfo.elementType;
  const numElements = count === undefined ? bufferInfo.numElements : count;
  offset = offset === undefined ? 0 : offset;
  if (elementType || indices) {
    if (instanceCount !== undefined) {
      gl.drawElementsInstanced(type, numElements, elementType === undefined ? UNSIGNED_SHORT : bufferInfo.elementType, offset, instanceCount);
    } else {
      gl.drawElements(type, numElements, elementType === undefined ? UNSIGNED_SHORT : bufferInfo.elementType, offset);
    }
  } else {
    if (instanceCount !== undefined) {
      gl.drawArraysInstanced(type, offset, numElements, instanceCount);
    } else {
      gl.drawArrays(type, offset, numElements);
    }
  }
}

/**
 * A DrawObject is useful for putting objects in to an array and passing them to {@link module:twgl.drawObjectList}.
 *
 * You need either a `BufferInfo` or a `VertexArrayInfo`.
 *
 * @typedef {Object} DrawObject
 * @property {boolean} [active] whether or not to draw. Default = `true` (must be `false` to be not true). In other words `undefined` = `true`
 * @property {number} [type] type to draw eg. `gl.TRIANGLES`, `gl.LINES`, etc...
 * @property {module:twgl.ProgramInfo} programInfo A ProgramInfo as returned from {@link module:twgl.createProgramInfo}
 * @property {module:twgl.BufferInfo} [bufferInfo] A BufferInfo as returned from {@link module:twgl.createBufferInfoFromArrays}
 * @property {module:twgl.VertexArrayInfo} [vertexArrayInfo] A VertexArrayInfo as returned from {@link module:twgl.createVertexArrayInfo}
 * @property {Object<string, ?>} uniforms The values for the uniforms.
 *   You can pass multiple objects by putting them in an array. For example
 *
 *     var sharedUniforms = {
 *       u_fogNear: 10,
 *       u_projection: ...
 *       ...
 *     };
 *
 *     var localUniforms = {
 *       u_world: ...
 *       u_diffuseColor: ...
 *     };
 *
 *     var drawObj = {
 *       ...
 *       uniforms: [sharedUniforms, localUniforms],
 *     };
 *
 * @property {number} [offset] the offset to pass to `gl.drawArrays` or `gl.drawElements`. Defaults to 0.
 * @property {number} [count] the count to pass to `gl.drawArrays` or `gl.drawElements`. Defaults to bufferInfo.numElements.
 * @property {number} [instanceCount] the number of instances. Defaults to undefined.
 * @memberOf module:twgl
 */

/**
 * Draws a list of objects
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {DrawObject[]} objectsToDraw an array of objects to draw.
 * @memberOf module:twgl/draw
 */
function drawObjectList(gl, objectsToDraw) {
  let lastUsedProgramInfo = null;
  let lastUsedBufferInfo = null;

  objectsToDraw.forEach(function(object) {
    if (object.active === false) {
      return;
    }

    const programInfo = object.programInfo;
    const bufferInfo = object.vertexArrayInfo || object.bufferInfo;
    let bindBuffers = false;
    const type = object.type === undefined ? TRIANGLES : object.type;

    if (programInfo !== lastUsedProgramInfo) {
      lastUsedProgramInfo = programInfo;
      gl.useProgram(programInfo.program);

      // We have to rebind buffers when changing programs because we
      // only bind buffers the program uses. So if 2 programs use the same
      // bufferInfo but the 1st one uses only positions the when the
      // we switch to the 2nd one some of the attributes will not be on.
      bindBuffers = true;
    }

    // Setup all the needed attributes.
    if (bindBuffers || bufferInfo !== lastUsedBufferInfo) {
      if (lastUsedBufferInfo && lastUsedBufferInfo.vertexArrayObject && !bufferInfo.vertexArrayObject) {
        gl.bindVertexArray(null);
      }
      lastUsedBufferInfo = bufferInfo;
      setBuffersAndAttributes(gl, programInfo, bufferInfo);
    }

    // Set the uniforms.
    setUniforms(programInfo, object.uniforms);

    // Draw
    drawBufferInfo(gl, bufferInfo, type, object.count, object.offset, object.instanceCount);
  });

  if (lastUsedBufferInfo && lastUsedBufferInfo.vertexArrayObject) {
    gl.bindVertexArray(null);
  }
}

var draw = /*#__PURE__*/Object.freeze({
  __proto__: null,
  drawBufferInfo: drawBufferInfo,
  drawObjectList: drawObjectList
});

/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

const FRAMEBUFFER                    = 0x8d40;
const RENDERBUFFER                   = 0x8d41;
const TEXTURE_2D                     = 0x0de1;

const UNSIGNED_BYTE                  = 0x1401;

/* PixelFormat */
const DEPTH_COMPONENT                = 0x1902;
const RGBA                           = 0x1908;
const DEPTH_COMPONENT24              = 0x81a6;
const DEPTH_COMPONENT32F             = 0x8cac;
const DEPTH24_STENCIL8               = 0x88f0;
const DEPTH32F_STENCIL8              = 0x8cad;

/* Framebuffer Object. */
const RGBA4                          = 0x8056;
const RGB5_A1                        = 0x8057;
const RGB565                         = 0x8D62;
const DEPTH_COMPONENT16              = 0x81A5;
const STENCIL_INDEX                  = 0x1901;
const STENCIL_INDEX8                 = 0x8D48;
const DEPTH_STENCIL                  = 0x84F9;
const COLOR_ATTACHMENT0              = 0x8CE0;
const DEPTH_ATTACHMENT               = 0x8D00;
const STENCIL_ATTACHMENT             = 0x8D20;
const DEPTH_STENCIL_ATTACHMENT       = 0x821A;

/* TextureWrapMode */
const CLAMP_TO_EDGE                  = 0x812F;

/* TextureMagFilter */
const LINEAR                         = 0x2601;

/**
 * The options for a framebuffer attachment.
 *
 * Note: For a `format` that is a texture include all the texture
 * options from {@link module:twgl.TextureOptions} for example
 * `min`, `mag`, `clamp`, etc... Note that unlike {@link module:twgl.TextureOptions}
 * `auto` defaults to `false` for attachment textures but `min` and `mag` default
 * to `gl.LINEAR` and `wrap` defaults to `CLAMP_TO_EDGE`
 *
 * @typedef {Object} AttachmentOptions
 * @property {number} [attachmentPoint] The attachment point. Defaults
 *   to `gl.COLOR_ATTACHMENT0 + ndx` unless type is a depth or stencil type
 *   then it's gl.DEPTH_ATTACHMENT or `gl.DEPTH_STENCIL_ATTACHMENT` depending
 *   on the format or attachment type.
 * @property {number} [format] The format. If one of `gl.RGBA4`,
 *   `gl.RGB565`, `gl.RGB5_A1`, `gl.DEPTH_COMPONENT16`,
 *   `gl.STENCIL_INDEX8` or `gl.DEPTH_STENCIL` then will create a
 *   renderbuffer. Otherwise will create a texture. Default = `gl.RGBA`
 * @property {number} [type] The type. Used for texture. Default = `gl.UNSIGNED_BYTE`.
 * @property {number} [target] The texture target for `gl.framebufferTexture2D`.
 *   Defaults to `gl.TEXTURE_2D`. Set to appropriate face for cube maps.
 * @property {number} [samples] The number of samples. Default = 1
 * @property {number} [level] level for `gl.framebufferTexture2D`. Defaults to 0.
 * @property {number} [layer] layer for `gl.framebufferTextureLayer`. Defaults to undefined.
 *   If set then `gl.framebufferTextureLayer` is called, if not then `gl.framebufferTexture2D`
 * @property {(WebGLRenderbuffer | WebGLTexture)} [attachment] An existing renderbuffer or texture.
 *    If provided will attach this Object. This allows you to share
 *    attachments across framebuffers.
 * @memberOf module:twgl
 * @mixes module:twgl.TextureOptions
 */

const defaultAttachments = [
  { format: RGBA, type: UNSIGNED_BYTE, min: LINEAR, wrap: CLAMP_TO_EDGE, },
  { format: DEPTH_STENCIL, },
];

const attachmentsByFormat = {};
attachmentsByFormat[DEPTH_STENCIL] = DEPTH_STENCIL_ATTACHMENT;
attachmentsByFormat[STENCIL_INDEX] = STENCIL_ATTACHMENT;
attachmentsByFormat[STENCIL_INDEX8] = STENCIL_ATTACHMENT;
attachmentsByFormat[DEPTH_COMPONENT] = DEPTH_ATTACHMENT;
attachmentsByFormat[DEPTH_COMPONENT16] = DEPTH_ATTACHMENT;
attachmentsByFormat[DEPTH_COMPONENT24] = DEPTH_ATTACHMENT;
attachmentsByFormat[DEPTH_COMPONENT32F] = DEPTH_ATTACHMENT;
attachmentsByFormat[DEPTH24_STENCIL8] = DEPTH_STENCIL_ATTACHMENT;
attachmentsByFormat[DEPTH32F_STENCIL8] = DEPTH_STENCIL_ATTACHMENT;

function getAttachmentPointForFormat(format, internalFormat) {
  return attachmentsByFormat[format] || attachmentsByFormat[internalFormat];
}

const renderbufferFormats = {};
renderbufferFormats[RGBA4] = true;
renderbufferFormats[RGB5_A1] = true;
renderbufferFormats[RGB565] = true;
renderbufferFormats[DEPTH_STENCIL] = true;
renderbufferFormats[DEPTH_COMPONENT16] = true;
renderbufferFormats[STENCIL_INDEX] = true;
renderbufferFormats[STENCIL_INDEX8] = true;

function isRenderbufferFormat(format) {
  return renderbufferFormats[format];
}

const MAX_COLOR_ATTACHMENT_POINTS = 32;  // even an 3090 only supports 8 but WebGL/OpenGL ES define constants for 32

function isColorAttachmentPoint(attachmentPoint) {
  return attachmentPoint >= COLOR_ATTACHMENT0 && attachmentPoint < COLOR_ATTACHMENT0 + MAX_COLOR_ATTACHMENT_POINTS;
}

/**
 * @typedef {Object} FramebufferInfo
 * @property {WebGLFramebuffer} framebuffer The WebGLFramebuffer for this framebufferInfo
 * @property {Array.<(WebGLRenderbuffer | WebGLTexture)>} attachments The created attachments in the same order as passed in to {@link module:twgl.createFramebufferInfo}.
 * @property {number} width The width of the framebuffer and its attachments
 * @property {number} height The width of the framebuffer and its attachments
 * @memberOf module:twgl
 */

/**
 * Creates a framebuffer and attachments.
 *
 * This returns a {@link module:twgl.FramebufferInfo} because it needs to return the attachments as well as the framebuffer.
 * It also leaves the framebuffer it just created as the currently bound `FRAMEBUFFER`.
 * Note: If this is WebGL2 or if you called {@link module:twgl.addExtensionsToContext} then it will set the drawBuffers
 * to `[COLOR_ATTACHMENT0, COLOR_ATTACHMENT1, ...]` for how ever many color attachments were created.
 *
 * The simplest usage
 *
 *     // create an RGBA/UNSIGNED_BYTE texture and DEPTH_STENCIL renderbuffer
 *     const fbi = twgl.createFramebufferInfo(gl);
 *
 * More complex usage
 *
 *     // create an RGB565 renderbuffer and a STENCIL_INDEX8 renderbuffer
 *     const attachments = [
 *       { format: RGB565, mag: NEAREST },
 *       { format: STENCIL_INDEX8 },
 *     ]
 *     const fbi = twgl.createFramebufferInfo(gl, attachments);
 *
 * Passing in a specific size
 *
 *     const width = 256;
 *     const height = 256;
 *     const fbi = twgl.createFramebufferInfo(gl, attachments, width, height);
 *
 * **Note!!** It is up to you to check if the framebuffer is renderable by calling `gl.checkFramebufferStatus`.
 * [WebGL1 only guarantees 3 combinations of attachments work](https://www.khronos.org/registry/webgl/specs/latest/1.0/#6.6).
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.AttachmentOptions[]} [attachments] which attachments to create. If not provided the default is a framebuffer with an
 *    `RGBA`, `UNSIGNED_BYTE` texture `COLOR_ATTACHMENT0` and a `DEPTH_STENCIL` renderbuffer `DEPTH_STENCIL_ATTACHMENT`.
 * @param {number} [width] the width for the attachments. Default = size of drawingBuffer
 * @param {number} [height] the height for the attachments. Default = size of drawingBuffer
 * @return {module:twgl.FramebufferInfo} the framebuffer and attachments.
 * @memberOf module:twgl/framebuffers
 */
function createFramebufferInfo(gl, attachments, width, height) {
  const target = FRAMEBUFFER;
  const fb = gl.createFramebuffer();
  gl.bindFramebuffer(target, fb);
  width  = width  || gl.drawingBufferWidth;
  height = height || gl.drawingBufferHeight;
  attachments = attachments || defaultAttachments;
  const usedColorAttachmentsPoints = [];
  const framebufferInfo = {
    framebuffer: fb,
    attachments: [],
    width: width,
    height: height,
  };

  attachments.forEach(function(attachmentOptions, i) {
    let attachment = attachmentOptions.attachment;
    const samples = attachmentOptions.samples;
    const format = attachmentOptions.format;
    let attachmentPoint = attachmentOptions.attachmentPoint || getAttachmentPointForFormat(format, attachmentOptions.internalFormat);
    if (!attachmentPoint) {
      attachmentPoint = COLOR_ATTACHMENT0 + i;
    }
    if (isColorAttachmentPoint(attachmentPoint)) {
      usedColorAttachmentsPoints.push(attachmentPoint);
    }
    if (!attachment) {
      if (samples !== undefined || isRenderbufferFormat(format)) {
        attachment = gl.createRenderbuffer();
        gl.bindRenderbuffer(RENDERBUFFER, attachment);
        if (samples > 1) {
          gl.renderbufferStorageMultisample(RENDERBUFFER, samples, format, width, height);
        } else {
          gl.renderbufferStorage(RENDERBUFFER, format, width, height);
        }
      } else {
        const textureOptions = Object.assign({}, attachmentOptions);
        textureOptions.width = width;
        textureOptions.height = height;
        if (textureOptions.auto === undefined) {
          textureOptions.auto = false;
          textureOptions.min = textureOptions.min || textureOptions.minMag || LINEAR;
          textureOptions.mag = textureOptions.mag || textureOptions.minMag || LINEAR;
          textureOptions.wrapS = textureOptions.wrapS || textureOptions.wrap || CLAMP_TO_EDGE;
          textureOptions.wrapT = textureOptions.wrapT || textureOptions.wrap || CLAMP_TO_EDGE;
        }
        attachment = createTexture(gl, textureOptions);
      }
    }
    if (isRenderbuffer(gl, attachment)) {
      gl.framebufferRenderbuffer(target, attachmentPoint, RENDERBUFFER, attachment);
    } else if (isTexture(gl, attachment)) {
      if (attachmentOptions.layer !== undefined) {
        gl.framebufferTextureLayer(
          target,
          attachmentPoint,
          attachment,
          attachmentOptions.level || 0,
          attachmentOptions.layer);
      } else {
        gl.framebufferTexture2D(
            target,
            attachmentPoint,
            attachmentOptions.target || TEXTURE_2D,
            attachment,
            attachmentOptions.level || 0);
      }
    } else {
      throw new Error('unknown attachment type');
    }
    framebufferInfo.attachments.push(attachment);
  });
  if (gl.drawBuffers) {
    gl.drawBuffers(usedColorAttachmentsPoints);
  }
  return framebufferInfo;
}

/**
 * Resizes the attachments of a framebuffer.
 *
 * You need to pass in the same `attachments` as you passed in {@link module:twgl.createFramebufferInfo}
 * because TWGL has no idea the format/type of each attachment.
 *
 * The simplest usage
 *
 *     // create an RGBA/UNSIGNED_BYTE texture and DEPTH_STENCIL renderbuffer
 *     const fbi = twgl.createFramebufferInfo(gl);
 *
 *     ...
 *
 *     function render() {
 *       if (twgl.resizeCanvasToDisplaySize(gl.canvas)) {
 *         // resize the attachments
 *         twgl.resizeFramebufferInfo(gl, fbi);
 *       }
 *
 * More complex usage
 *
 *     // create an RGB565 renderbuffer and a STENCIL_INDEX8 renderbuffer
 *     const attachments = [
 *       { format: RGB565, mag: NEAREST },
 *       { format: STENCIL_INDEX8 },
 *     ]
 *     const fbi = twgl.createFramebufferInfo(gl, attachments);
 *
 *     ...
 *
 *     function render() {
 *       if (twgl.resizeCanvasToDisplaySize(gl.canvas)) {
 *         // resize the attachments to match
 *         twgl.resizeFramebufferInfo(gl, fbi, attachments);
 *       }
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.FramebufferInfo} framebufferInfo a framebufferInfo as returned from {@link module:twgl.createFramebufferInfo}.
 * @param {module:twgl.AttachmentOptions[]} [attachments] the same attachments options as passed to {@link module:twgl.createFramebufferInfo}.
 * @param {number} [width] the width for the attachments. Default = size of drawingBuffer
 * @param {number} [height] the height for the attachments. Default = size of drawingBuffer
 * @memberOf module:twgl/framebuffers
 */
function resizeFramebufferInfo(gl, framebufferInfo, attachments, width, height) {
  width  = width  || gl.drawingBufferWidth;
  height = height || gl.drawingBufferHeight;
  framebufferInfo.width = width;
  framebufferInfo.height = height;
  attachments = attachments || defaultAttachments;
  attachments.forEach(function(attachmentOptions, ndx) {
    const attachment = framebufferInfo.attachments[ndx];
    const format = attachmentOptions.format;
    const samples = attachmentOptions.samples;
    if (samples !== undefined || isRenderbuffer(gl, attachment)) {
      gl.bindRenderbuffer(RENDERBUFFER, attachment);
      if (samples > 1) {
        gl.renderbufferStorageMultisample(RENDERBUFFER, samples, format, width, height);
      } else {
        gl.renderbufferStorage(RENDERBUFFER, format, width, height);
      }
    } else if (isTexture(gl, attachment)) {
      resizeTexture(gl, attachment, attachmentOptions, width, height);
    } else {
      throw new Error('unknown attachment type');
    }
  });
}

/**
 * Binds a framebuffer
 *
 * This function pretty much solely exists because I spent hours
 * trying to figure out why something I wrote wasn't working only
 * to realize I forget to set the viewport dimensions.
 * My hope is this function will fix that.
 *
 * It is effectively the same as
 *
 *     gl.bindFramebuffer(gl.FRAMEBUFFER, someFramebufferInfo.framebuffer);
 *     gl.viewport(0, 0, someFramebufferInfo.width, someFramebufferInfo.height);
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.FramebufferInfo|null} [framebufferInfo] a framebufferInfo as returned from {@link module:twgl.createFramebufferInfo}.
 *   If falsy will bind the canvas.
 * @param {number} [target] The target. If not passed `gl.FRAMEBUFFER` will be used.
 * @memberOf module:twgl/framebuffers
 */

function bindFramebufferInfo(gl, framebufferInfo, target) {
  target = target || FRAMEBUFFER;
  if (framebufferInfo) {
    gl.bindFramebuffer(target, framebufferInfo.framebuffer);
    gl.viewport(0, 0, framebufferInfo.width, framebufferInfo.height);
  } else {
    gl.bindFramebuffer(target, null);
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  }
}

var framebuffers = /*#__PURE__*/Object.freeze({
  __proto__: null,
  bindFramebufferInfo: bindFramebufferInfo,
  createFramebufferInfo: createFramebufferInfo,
  resizeFramebufferInfo: resizeFramebufferInfo
});

/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

/**
 * vertex array object related functions
 *
 * You should generally not need to use these functions. They are provided
 * for those cases where you're doing something out of the ordinary
 * and you need lower level access.
 *
 * For backward compatibility they are available at both `twgl.attributes` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/vertexArrays
 */

const ELEMENT_ARRAY_BUFFER           = 0x8893;

/**
 * @typedef {Object} VertexArrayInfo
 * @property {number} numElements The number of elements to pass to `gl.drawArrays` or `gl.drawElements`.
 * @property {number} [elementType] The type of indices `UNSIGNED_BYTE`, `UNSIGNED_SHORT` etc..
 * @property {WebGLVertexArrayObject} [vertexArrayObject] a vertex array object
 * @memberOf module:twgl
 */

/**
 * Creates a VertexArrayInfo from a BufferInfo and one or more ProgramInfos
 *
 * This can be passed to {@link module:twgl.setBuffersAndAttributes} and to
 * {@link module:twgl:drawBufferInfo}.
 *
 * > **IMPORTANT:** Vertex Array Objects are **not** a direct analog for a BufferInfo. Vertex Array Objects
 *   assign buffers to specific attributes at creation time. That means they can only be used with programs
 *   who's attributes use the same attribute locations for the same purposes.
 *
 * > Bind your attribute locations by passing an array of attribute names to {@link module:twgl.createProgramInfo}
 *   or use WebGL 2's GLSL ES 3's `layout(location = <num>)` to make sure locations match.
 *
 * also
 *
 * > **IMPORTANT:** After calling twgl.setBuffersAndAttribute with a BufferInfo that uses a Vertex Array Object
 *   that Vertex Array Object will be bound. That means **ANY MANIPULATION OF ELEMENT_ARRAY_BUFFER or ATTRIBUTES**
 *   will affect the Vertex Array Object state.
 *
 * > Call `gl.bindVertexArray(null)` to get back manipulating the global attributes and ELEMENT_ARRAY_BUFFER.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {module:twgl.ProgramInfo|module:twgl.ProgramInfo[]} programInfo a programInfo or array of programInfos
 * @param {module:twgl.BufferInfo} bufferInfo BufferInfo as returned from createBufferInfoFromArrays etc...
 *
 *    You need to make sure every attribute that will be used is bound. So for example assume shader 1
 *    uses attributes A, B, C and shader 2 uses attributes A, B, D. If you only pass in the programInfo
 *    for shader 1 then only attributes A, B, and C will have their attributes set because TWGL doesn't
 *    now attribute D's location.
 *
 *    So, you can pass in both shader 1 and shader 2's programInfo
 *
 * @return {module:twgl.VertexArrayInfo} The created VertexArrayInfo
 *
 * @memberOf module:twgl/vertexArrays
 */
function createVertexArrayInfo(gl, programInfos, bufferInfo) {
  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao);
  if (!programInfos.length) {
    programInfos = [programInfos];
  }
  programInfos.forEach(function(programInfo) {
    setBuffersAndAttributes(gl, programInfo, bufferInfo);
  });
  gl.bindVertexArray(null);
  return {
    numElements: bufferInfo.numElements,
    elementType: bufferInfo.elementType,
    vertexArrayObject: vao,
  };
}

/**
 * Creates a vertex array object and then sets the attributes on it
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {Object.<string, function>} setters Attribute setters as returned from createAttributeSetters
 * @param {Object.<string, module:twgl.AttribInfo>} attribs AttribInfos mapped by attribute name.
 * @param {WebGLBuffer} [indices] an optional ELEMENT_ARRAY_BUFFER of indices
 *
 * @return {WebGLVertexArrayObject|null} The created WebGLVertexArrayObject
 *
 * @memberOf module:twgl/vertexArrays
 */
function createVAOAndSetAttributes(gl, setters, attribs, indices) {
  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao);
  setAttributes(setters, attribs);
  if (indices) {
    gl.bindBuffer(ELEMENT_ARRAY_BUFFER, indices);
  }
  // We unbind this because otherwise any change to ELEMENT_ARRAY_BUFFER
  // like when creating buffers for other stuff will mess up this VAO's binding
  gl.bindVertexArray(null);
  return vao;
}

/**
 * Creates a vertex array object and then sets the attributes
 * on it
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {Object.<string, function>| module:twgl.ProgramInfo} programInfo as returned from createProgramInfo or Attribute setters as returned from createAttributeSetters
 * @param {module:twgl.BufferInfo} bufferInfo BufferInfo as returned from createBufferInfoFromArrays etc...
 * @param {WebGLBuffer} [indices] an optional ELEMENT_ARRAY_BUFFER of indices
 *
 * @return {WebGLVertexArrayObject|null} The created WebGLVertexArrayObject
 *
 * @memberOf module:twgl/vertexArrays
 */
function createVAOFromBufferInfo(gl, programInfo, bufferInfo) {
  return createVAOAndSetAttributes(gl, programInfo.attribSetters || programInfo, bufferInfo.attribs, bufferInfo.indices);
}

var vertexArrays = /*#__PURE__*/Object.freeze({
  __proto__: null,
  createVertexArrayInfo: createVertexArrayInfo,
  createVAOAndSetAttributes: createVAOAndSetAttributes,
  createVAOFromBufferInfo: createVAOFromBufferInfo
});

/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
const defaults = {
  addExtensionsToContext: true,
};

/**
 * Various default settings for twgl.
 *
 * Note: You can call this any number of times. Example:
 *
 *     twgl.setDefaults({ textureColor: [1, 0, 0, 1] });
 *     twgl.setDefaults({ attribPrefix: 'a_' });
 *
 * is equivalent to
 *
 *     twgl.setDefaults({
 *       textureColor: [1, 0, 0, 1],
 *       attribPrefix: 'a_',
 *     });
 *
 * @typedef {Object} Defaults
 * @property {string} [attribPrefix] The prefix to stick on attributes
 *
 *   When writing shaders I prefer to name attributes with `a_`, uniforms with `u_` and varyings with `v_`
 *   as it makes it clear where they came from. But, when building geometry I prefer using un-prefixed names.
 *
 *   In other words I'll create arrays of geometry like this
 *
 *       const arrays = {
 *         position: ...
 *         normal: ...
 *         texcoord: ...
 *       };
 *
 *   But need those mapped to attributes and my attributes start with `a_`.
 *
 *   Default: `""`
 *
 * @property {number[]} [textureColor] Array of 4 values in the range 0 to 1
 *
 *   The default texture color is used when loading textures from
 *   urls. Because the URL will be loaded async we'd like to be
 *   able to use the texture immediately. By putting a 1x1 pixel
 *   color in the texture we can start using the texture before
 *   the URL has loaded.
 *
 *   Default: `[0.5, 0.75, 1, 1]`
 *
 * @property {string} [crossOrigin]
 *
 *   If not undefined sets the crossOrigin attribute on images
 *   that twgl creates when downloading images for textures.
 *
 *   Also see {@link module:twgl.TextureOptions}.
 *
 * @property {bool} [addExtensionsToContext]
 *
 *   If true, then, when twgl will try to add any supported WebGL extensions
 *   directly to the context under their normal GL names. For example
 *   if ANGLE_instances_arrays exists then twgl would enable it,
 *   add the functions `vertexAttribDivisor`, `drawArraysInstanced`,
 *   `drawElementsInstanced`, and the constant `VERTEX_ATTRIB_ARRAY_DIVISOR`
 *   to the `WebGLRenderingContext`.
 *
 * @memberOf module:twgl
 */

/**
 * Sets various defaults for twgl.
 *
 * In the interest of terseness which is kind of the point
 * of twgl I've integrated a few of the older functions here
 *
 * @param {module:twgl.Defaults} newDefaults The default settings.
 * @memberOf module:twgl
 */
function setDefaults(newDefaults) {
  copyExistingProperties(newDefaults, defaults);
  setDefaults$2(newDefaults);  // eslint-disable-line
  setDefaults$1(newDefaults);  // eslint-disable-line
}

const prefixRE = /^(.*?)_/;
function addExtensionToContext(gl, extensionName) {
  glEnumToString(gl, 0);
  const ext = gl.getExtension(extensionName);
  if (ext) {
    const enums = {};
    const fnSuffix = prefixRE.exec(extensionName)[1];
    const enumSuffix = '_' + fnSuffix;
    for (const key in ext) {
      const value = ext[key];
      const isFunc = typeof (value) === 'function';
      const suffix = isFunc ? fnSuffix : enumSuffix;
      let name = key;
      // examples of where this is not true are WEBGL_compressed_texture_s3tc
      // and WEBGL_compressed_texture_pvrtc
      if (key.endsWith(suffix)) {
        name = key.substring(0, key.length - suffix.length);
      }
      if (gl[name] !== undefined) {
        if (!isFunc && gl[name] !== value) {
          warn$1(name, gl[name], value, key);
        }
      } else {
        if (isFunc) {
          gl[name] = function(origFn) {
            return function() {
              return origFn.apply(ext, arguments);
            };
          }(value);
        } else {
          gl[name] = value;
          enums[name] = value;
        }
      }
    }
    // pass the modified enums to glEnumToString
    enums.constructor = {
      name: ext.constructor.name,
    };
    glEnumToString(enums, 0);
  }
  return ext;
}

/*
 * If you're wondering why the code doesn't just iterate
 * over all extensions using `gl.getExtensions` is that it's possible
 * some future extension is incompatible with this code. Rather than
 * have thing suddenly break it seems better to manually add to this
 * list.
 *
 */
const supportedExtensions = [
  'ANGLE_instanced_arrays',
  'EXT_blend_minmax',
  'EXT_color_buffer_float',
  'EXT_color_buffer_half_float',
  'EXT_disjoint_timer_query',
  'EXT_disjoint_timer_query_webgl2',
  'EXT_frag_depth',
  'EXT_sRGB',
  'EXT_shader_texture_lod',
  'EXT_texture_filter_anisotropic',
  'OES_element_index_uint',
  'OES_standard_derivatives',
  'OES_texture_float',
  'OES_texture_float_linear',
  'OES_texture_half_float',
  'OES_texture_half_float_linear',
  'OES_vertex_array_object',
  'WEBGL_color_buffer_float',
  'WEBGL_compressed_texture_atc',
  'WEBGL_compressed_texture_etc1',
  'WEBGL_compressed_texture_pvrtc',
  'WEBGL_compressed_texture_s3tc',
  'WEBGL_compressed_texture_s3tc_srgb',
  'WEBGL_depth_texture',
  'WEBGL_draw_buffers',
];

/**
 * Attempts to enable all of the following extensions
 * and add their functions and constants to the
 * `WebGLRenderingContext` using their normal non-extension like names.
 *
 *      ANGLE_instanced_arrays
 *      EXT_blend_minmax
 *      EXT_color_buffer_float
 *      EXT_color_buffer_half_float
 *      EXT_disjoint_timer_query
 *      EXT_disjoint_timer_query_webgl2
 *      EXT_frag_depth
 *      EXT_sRGB
 *      EXT_shader_texture_lod
 *      EXT_texture_filter_anisotropic
 *      OES_element_index_uint
 *      OES_standard_derivatives
 *      OES_texture_float
 *      OES_texture_float_linear
 *      OES_texture_half_float
 *      OES_texture_half_float_linear
 *      OES_vertex_array_object
 *      WEBGL_color_buffer_float
 *      WEBGL_compressed_texture_atc
 *      WEBGL_compressed_texture_etc1
 *      WEBGL_compressed_texture_pvrtc
 *      WEBGL_compressed_texture_s3tc
 *      WEBGL_compressed_texture_s3tc_srgb
 *      WEBGL_depth_texture
 *      WEBGL_draw_buffers
 *
 * For example if `ANGLE_instanced_arrays` exists then the functions
 * `drawArraysInstanced`, `drawElementsInstanced`, `vertexAttribDivisor`
 * and the constant `VERTEX_ATTRIB_ARRAY_DIVISOR` are added to the
 * `WebGLRenderingContext`.
 *
 * Note that if you want to know if the extension exists you should
 * probably call `gl.getExtension` for each extension. Alternatively
 * you can check for the existence of the functions or constants that
 * are expected to be added. For example
 *
 *    if (gl.drawBuffers) {
 *      // Either WEBGL_draw_buffers was enabled OR you're running in WebGL2
 *      ....
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @memberOf module:twgl
 */
function addExtensionsToContext(gl) {
  for (let ii = 0; ii < supportedExtensions.length; ++ii) {
    addExtensionToContext(gl, supportedExtensions[ii]);
  }
}

/**
 * Creates a webgl context.
 * @param {HTMLCanvasElement} canvas The canvas tag to get
 *     context from. If one is not passed in one will be
 *     created.
 * @return {WebGLRenderingContext} The created context.
 * @private
 */
function create3DContext(canvas, opt_attribs) {
  const names = ["webgl", "experimental-webgl"];
  let context = null;
  for (let ii = 0; ii < names.length; ++ii) {
    context = canvas.getContext(names[ii], opt_attribs);
    if (context) {
      if (defaults.addExtensionsToContext) {
        addExtensionsToContext(context);
      }
      break;
    }
  }
  return context;
}

/**
 * Gets a WebGL1 context.
 *
 * Note: Will attempt to enable Vertex Array Objects
 * and add WebGL2 entry points. (unless you first set defaults with
 * `twgl.setDefaults({enableVertexArrayObjects: false})`;
 *
 * @param {HTMLCanvasElement} canvas a canvas element.
 * @param {WebGLContextAttributes} [opt_attribs] optional webgl context creation attributes
 * @return {WebGLRenderingContext} The created context.
 * @memberOf module:twgl
 * @deprecated
 * @private
 */
function getWebGLContext(canvas, opt_attribs) {
  const gl = create3DContext(canvas, opt_attribs);
  return gl;
}

/**
 * Creates a webgl context.
 *
 * Will return a WebGL2 context if possible.
 *
 * You can check if it's WebGL2 with
 *
 *     twgl.isWebGL2(gl);
 *
 * @param {HTMLCanvasElement} canvas The canvas tag to get
 *     context from. If one is not passed in one will be
 *     created.
 * @return {WebGLRenderingContext} The created context.
 */
function createContext(canvas, opt_attribs) {
  const names = ["webgl2", "webgl", "experimental-webgl"];
  let context = null;
  for (let ii = 0; ii < names.length; ++ii) {
    context = canvas.getContext(names[ii], opt_attribs);
    if (context) {
      if (defaults.addExtensionsToContext) {
        addExtensionsToContext(context);
      }
      break;
    }
  }
  return context;
}

/**
 * Gets a WebGL context.  Will create a WebGL2 context if possible.
 *
 * You can check if it's WebGL2 with
 *
 *    function isWebGL2(gl) {
 *      return gl.getParameter(gl.VERSION).indexOf("WebGL 2.0 ") == 0;
 *    }
 *
 * Note: For a WebGL1 context will attempt to enable Vertex Array Objects
 * and add WebGL2 entry points. (unless you first set defaults with
 * `twgl.setDefaults({enableVertexArrayObjects: false})`;
 *
 * @param {HTMLCanvasElement} canvas a canvas element.
 * @param {WebGLContextAttributes} [opt_attribs] optional webgl context creation attributes
 * @return {WebGLRenderingContext} The created context.
 * @memberOf module:twgl
 */
function getContext(canvas, opt_attribs) {
  const gl = createContext(canvas, opt_attribs);
  return gl;
}

/**
 * Resize a canvas to match the size it's displayed.
 * @param {HTMLCanvasElement} canvas The canvas to resize.
 * @param {number} [multiplier] So you can pass in `window.devicePixelRatio` or other scale value if you want to.
 * @return {boolean} true if the canvas was resized.
 * @memberOf module:twgl
 */
function resizeCanvasToDisplaySize(canvas, multiplier) {
  multiplier = multiplier || 1;
  multiplier = Math.max(0, multiplier);
  const width  = canvas.clientWidth  * multiplier | 0;
  const height = canvas.clientHeight * multiplier | 0;
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
    return true;
  }
  return false;
}




/***/ }),

/***/ "./src/shaders/frag.glsl":
/*!*******************************!*\
  !*** ./src/shaders/frag.glsl ***!
  \*******************************/
/***/ ((module) => {

module.exports = "#version 300 es\r\n\r\nprecision mediump float;\r\n\r\nout vec4 fragColor;\r\n\r\nvoid main() {\r\n  fragColor = vec4(1.0, 0.0, 0.0, 1.0);\r\n}"

/***/ }),

/***/ "./src/shaders/vert.glsl":
/*!*******************************!*\
  !*** ./src/shaders/vert.glsl ***!
  \*******************************/
/***/ ((module) => {

module.exports = "#version 300 es\r\n\r\nin vec3 position;\r\nout vec4 fragPosition;\r\n\r\nvoid main() {\r\n  fragPosition = vec4(position, 1.0);\r\n  gl_Position = fragPosition;\r\n}"

/***/ }),

/***/ "./src/ShaderSketch.js":
/*!*****************************!*\
  !*** ./src/ShaderSketch.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShaderSketch)
/* harmony export */ });
/* harmony import */ var twgl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! twgl.js */ "./node_modules/twgl.js/dist/5.x/twgl-full.module.js");


class ShaderSketch {
  constructor(canvas, fragmentShader, vertexShader) {
    this.gl = this.canvas.getContext('webgl2');
    this.fragmentShader = fragmentShader;
    this.vertexShader = vertexShader;
    this.animationFrameId = null;

    this.programInfo = (0,twgl_js__WEBPACK_IMPORTED_MODULE_0__.createProgramInfo)(this.gl, [this.vertexShader, this.fragmentShader]);
    this.bufferInfo = (0,twgl_js__WEBPACK_IMPORTED_MODULE_0__.createBufferInfoFromArrays)(this.gl, {
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
  }

  render(time) {
    (0,twgl_js__WEBPACK_IMPORTED_MODULE_0__.resizeCanvasToDisplaySize)(this.canvas);
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    this.gl.useProgram(this.programInfo.program);
    (0,twgl_js__WEBPACK_IMPORTED_MODULE_0__.setBuffersAndAttributes)(this.gl, this.programInfo, this.bufferInfo);
    (0,twgl_js__WEBPACK_IMPORTED_MODULE_0__.setUniforms)(this.programInfo, { u_resolution: [this.canvas.width, this.canvas.height] });
    (0,twgl_js__WEBPACK_IMPORTED_MODULE_0__.drawBufferInfo)(this.gl, this.bufferInfo);

    this.animationFrameId = requestAnimationFrame(this.render.bind(this));
  }

  start() {
    this.animationFrameId = requestAnimationFrame(this.render.bind(this));
  }

  stop() {
    cancelAnimationFrame(this.animationFrameId);
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShaderSketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShaderSketch */ "./src/ShaderSketch.js");
/* harmony import */ var _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shaders/frag.glsl */ "./src/shaders/frag.glsl");
/* harmony import */ var _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/vert.glsl */ "./src/shaders/vert.glsl");
/* harmony import */ var _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2__);




const canvas = document.querySelector("#canvas");
const sketch = new _ShaderSketch__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, (_shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_1___default()), (_shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_2___default()));
sketch.start();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsb0NBQW9DO0FBQ2xFLGFBQWEseUJBQXlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixZQUFZLGFBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxxQkFBcUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCLFdBQVcscUJBQXFCO0FBQ2hDLFdBQVcscUJBQXFCO0FBQ2hDLFdBQVcscUJBQXFCO0FBQ2hDLFlBQVkscUJBQXFCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLHFCQUFxQjtBQUNoQyxZQUFZLHFCQUFxQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUJBQXFCO0FBQ2hDLFdBQVcscUJBQXFCO0FBQ2hDLFdBQVcsUUFBUTtBQUNuQixXQUFXLHFCQUFxQjtBQUNoQyxZQUFZLHFCQUFxQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUJBQXFCO0FBQ2hDLFdBQVcscUJBQXFCO0FBQ2hDLFdBQVcscUJBQXFCO0FBQ2hDLFdBQVcscUJBQXFCO0FBQ2hDLFlBQVkscUJBQXFCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyxxQkFBcUI7QUFDaEMsWUFBWSxxQkFBcUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLHFCQUFxQjtBQUNoQyxZQUFZLHFCQUFxQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyxRQUFRO0FBQ25CLFdBQVcscUJBQXFCO0FBQ2hDLFlBQVkscUJBQXFCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLFFBQVE7QUFDbkIsV0FBVyxxQkFBcUI7QUFDaEMsWUFBWSxxQkFBcUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLHFCQUFxQjtBQUNoQyxZQUFZLHFCQUFxQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLHFCQUFxQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLHFCQUFxQjtBQUNoQyxZQUFZLHFCQUFxQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUJBQXFCO0FBQ2hDLFlBQVkscUJBQXFCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcscUJBQXFCO0FBQ2hDLFdBQVcscUJBQXFCO0FBQ2hDLFlBQVkscUJBQXFCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyxxQkFBcUI7QUFDaEMsWUFBWSxxQkFBcUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLHFCQUFxQjtBQUNoQyxZQUFZLHFCQUFxQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyxxQkFBcUI7QUFDaEMsWUFBWSxxQkFBcUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUJBQXFCO0FBQ2hDLFdBQVcscUJBQXFCO0FBQ2hDLFlBQVkscUJBQXFCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyxRQUFRO0FBQ25CLFlBQVkscUJBQXFCO0FBQ2pDLFlBQVkscUJBQXFCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLFFBQVE7QUFDbkIsV0FBVyxxQkFBcUI7QUFDaEMsWUFBWSxxQkFBcUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFdBQVcscUJBQXFCO0FBQ2hDLFlBQVkscUJBQXFCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQyxZQUFZLHFCQUFxQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcscUJBQXFCO0FBQ2hDLFlBQVkscUJBQXFCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUJBQXFCO0FBQ2hDLFdBQVcscUJBQXFCO0FBQ2hDLFdBQVcscUJBQXFCO0FBQ2hDLFdBQVcscUJBQXFCO0FBQ2hDLFlBQVkscUJBQXFCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQztBQUNBLFdBQVcscUJBQXFCO0FBQ2hDLFlBQVkscUJBQXFCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyxxQkFBcUI7QUFDaEM7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQyxZQUFZLHFCQUFxQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLHFCQUFxQjtBQUNoQyxZQUFZLHFCQUFxQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyxRQUFRO0FBQ25CLFdBQVcscUJBQXFCO0FBQ2hDLFlBQVkscUJBQXFCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcscUJBQXFCO0FBQ2hDLFlBQVkscUJBQXFCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLFFBQVE7QUFDbkIsV0FBVyxxQkFBcUI7QUFDaEMsWUFBWSxxQkFBcUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxxQkFBcUI7QUFDaEMsWUFBWSxxQkFBcUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUJBQXFCO0FBQ2hDLFdBQVcsUUFBUTtBQUNuQixXQUFXLHFCQUFxQjtBQUNoQyxZQUFZLHFCQUFxQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxQkFBcUI7QUFDaEM7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxxQkFBcUI7QUFDaEMsWUFBWSxxQkFBcUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUJBQXFCO0FBQ2hDLFdBQVcscUJBQXFCO0FBQ2hDO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcscUJBQXFCO0FBQ2hDLFlBQVkscUJBQXFCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQztBQUNBLFdBQVcscUJBQXFCO0FBQ2hDLFlBQVkscUJBQXFCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBLFdBQVcscUJBQXFCO0FBQ2hDLFdBQVcscUJBQXFCO0FBQ2hDO0FBQ0EsV0FBVyxxQkFBcUI7QUFDaEMsWUFBWSxxQkFBcUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUJBQXFCO0FBQ2hDLFdBQVcscUJBQXFCO0FBQ2hDLFdBQVcscUJBQXFCO0FBQ2hDLFlBQVkscUJBQXFCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLHFCQUFxQjtBQUNoQyxZQUFZLHFCQUFxQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyxxQkFBcUI7QUFDaEMsWUFBWSxxQkFBcUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCwyQkFBMkI7QUFDNUUsaURBQWlELDJCQUEyQjtBQUM1RSxpREFBaUQsMkJBQTJCO0FBQzVFLGlEQUFpRCwyQkFBMkI7QUFDNUUsaURBQWlELDJCQUEyQjtBQUM1RSxpREFBaUQsMkJBQTJCO0FBQzVFLGlEQUFpRCwyQkFBMkI7QUFDNUUsaURBQWlELDJCQUEyQjtBQUM1RTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QixZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsMkJBQTJCO0FBQ3pFLDhDQUE4QywyQkFBMkI7QUFDekUsOENBQThDLDJCQUEyQjtBQUN6RSw4Q0FBOEMsMkJBQTJCO0FBQ3pFLDhDQUE4QywyQkFBMkI7QUFDekUsOENBQThDLDJCQUEyQjtBQUN6RSw4Q0FBOEMsMkJBQTJCO0FBQ3pFLDhDQUE4QywyQkFBMkI7QUFDekU7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksVUFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG9CQUFvQjtBQUMvQixXQUFXLG9CQUFvQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFD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QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyx1QkFBdUI7QUFDbEMsWUFBWSx3QkFBd0I7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHVCQUF1QjtBQUNsQyxZQUFZLDhCQUE4QjtBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkJBQTZCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsb0JBQW9CO0FBQy9CLFlBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyx1QkFBdUI7QUFDbEMsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsdUJBQXVCO0FBQ2xDLFlBQVksTUFBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsdUJBQXVCO0FBQ2xDLFlBQVksTUFBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyx1QkFBdUI7QUFDbEMsV0FBVyw0Q0FBNEM7QUFDdkQsV0FBVyxtQ0FBbUM7QUFDOUMsWUFBWSw4QkFBOEI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtQkFBbUI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtFQUErRTtBQUMvRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFdBQVc7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSwyQ0FBMkM7QUFDM0MsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQywyQ0FBMkM7QUFDM0MsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQywyQ0FBMkM7QUFDM0MsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQywyQ0FBMkM7QUFDM0MsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQywyQ0FBMkM7QUFDM0MsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQywyQ0FBMkM7QUFDM0MsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQywyQ0FBMkM7QUFDM0MsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQywyQ0FBMkM7QUFDM0MsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQywyQ0FBMkM7QUFDM0MsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQywyQ0FBMkM7QUFDM0MsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQywyQ0FBMkM7QUFDM0MsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQywyQ0FBMkM7QUFDM0MsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQywyQ0FBMkM7QUFDM0MsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQywyQ0FBMkM7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscURBQXFEO0FBQ2hFO0FBQ0EsV0FBVyxvQkFBb0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHVEQUF1RDtBQUNwRSxhQUFhLHVEQUF1RDtBQUNwRTtBQUNBLFFBQVE7QUFDUjtBQUNB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O0FBQy9DO0FBQ0E7QUFDQSxtQkFBbUIscURBQVksU0FBUywyREFBYyxFQUFFLDJEQUFZO0FBQ3BFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbHlnaWEtc2tldGNoLWJhc2UvLi9ub2RlX21vZHVsZXMvdHdnbC5qcy9kaXN0LzUueC90d2dsLWZ1bGwubW9kdWxlLmpzIiwid2VicGFjazovL2x5Z2lhLXNrZXRjaC1iYXNlLy4vc3JjL3NoYWRlcnMvZnJhZy5nbHNsIiwid2VicGFjazovL2x5Z2lhLXNrZXRjaC1iYXNlLy4vc3JjL3NoYWRlcnMvdmVydC5nbHNsIiwid2VicGFjazovL2x5Z2lhLXNrZXRjaC1iYXNlLy4vc3JjL1NoYWRlclNrZXRjaC5qcyIsIndlYnBhY2s6Ly9seWdpYS1za2V0Y2gtYmFzZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9seWdpYS1za2V0Y2gtYmFzZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9seWdpYS1za2V0Y2gtYmFzZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbHlnaWEtc2tldGNoLWJhc2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9seWdpYS1za2V0Y2gtYmFzZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2x5Z2lhLXNrZXRjaC1iYXNlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIEBsaWNlbnNlIHR3Z2wuanMgNS41LjQgQ29weXJpZ2h0IChjKSAyMDE1LCBHcmVnZyBUYXZhcmVzIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5BdmFpbGFibGUgdmlhIHRoZSBNSVQgbGljZW5zZS5cbnNlZTogaHR0cDovL2dpdGh1Yi5jb20vZ3JlZ2dtYW4vdHdnbC5qcyBmb3IgZGV0YWlscyAqL1xuLypcbiAqIENvcHlyaWdodCAyMDE5IEdyZWdnIFRhdmFyZXNcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuICogY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLFxuICogdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvblxuICogdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsXG4gKiBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAqIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMXG4gKiBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVJcbiAqIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqXG4gKiBWZWMzIG1hdGggbWF0aCBmdW5jdGlvbnMuXG4gKlxuICogQWxtb3N0IGFsbCBmdW5jdGlvbnMgdGFrZSBhbiBvcHRpb25hbCBgZHN0YCBhcmd1bWVudC4gSWYgaXQgaXMgbm90IHBhc3NlZCBpbiB0aGVcbiAqIGZ1bmN0aW9ucyB3aWxsIGNyZWF0ZSBhIG5ldyBWZWMzLiBJbiBvdGhlciB3b3JkcyB5b3UgY2FuIGRvIHRoaXNcbiAqXG4gKiAgICAgdmFyIHYgPSB2My5jcm9zcyh2MSwgdjIpOyAgLy8gQ3JlYXRlcyBhIG5ldyBWZWMzIHdpdGggdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdjEgeCB2Mi5cbiAqXG4gKiBvclxuICpcbiAqICAgICB2YXIgdiA9IHYzLmNyZWF0ZSgpO1xuICogICAgIHYzLmNyb3NzKHYxLCB2Miwgdik7ICAvLyBQdXRzIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHYxIHggdjIgaW4gdlxuICpcbiAqIFRoZSBmaXJzdCBzdHlsZSBpcyBvZnRlbiBlYXNpZXIgYnV0IGRlcGVuZGluZyBvbiB3aGVyZSBpdCdzIHVzZWQgaXQgZ2VuZXJhdGVzIGdhcmJhZ2Ugd2hlcmVcbiAqIGFzIHRoZXJlIGlzIGFsbW9zdCBuZXZlciBhbGxvY2F0aW9uIHdpdGggdGhlIHNlY29uZCBzdHlsZS5cbiAqXG4gKiBJdCBpcyBhbHdheXMgc2F2ZSB0byBwYXNzIGFueSB2ZWN0b3IgYXMgdGhlIGRlc3RpbmF0aW9uLiBTbyBmb3IgZXhhbXBsZVxuICpcbiAqICAgICB2My5jcm9zcyh2MSwgdjIsIHYxKTsgIC8vIFB1dHMgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdjEgeCB2MiBpbiB2MVxuICpcbiAqIEBtb2R1bGUgdHdnbC92M1xuICovXG5cbmxldCBWZWNUeXBlID0gRmxvYXQzMkFycmF5O1xuXG4vKipcbiAqIEEgSmF2YVNjcmlwdCBhcnJheSB3aXRoIDMgdmFsdWVzIG9yIGEgRmxvYXQzMkFycmF5IHdpdGggMyB2YWx1ZXMuXG4gKiBXaGVuIGNyZWF0ZWQgYnkgdGhlIGxpYnJhcnkgd2lsbCBjcmVhdGUgdGhlIGRlZmF1bHQgdHlwZSB3aGljaCBpcyBgRmxvYXQzMkFycmF5YFxuICogYnV0IGNhbiBiZSBzZXQgYnkgY2FsbGluZyB7QGxpbmsgbW9kdWxlOnR3Z2wvdjMuc2V0RGVmYXVsdFR5cGV9LlxuICogQHR5cGVkZWYgeyhudW1iZXJbXXxGbG9hdDMyQXJyYXkpfSBWZWMzXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdjNcbiAqL1xuXG4vKipcbiAqIFNldHMgdGhlIHR5cGUgdGhpcyBsaWJyYXJ5IGNyZWF0ZXMgZm9yIGEgVmVjM1xuICogQHBhcmFtIHtjb25zdHJ1Y3Rvcn0gY3RvciB0aGUgY29uc3RydWN0b3IgZm9yIHRoZSB0eXBlLiBFaXRoZXIgYEZsb2F0MzJBcnJheWAgb3IgYEFycmF5YFxuICogQHJldHVybiB7Y29uc3RydWN0b3J9IHByZXZpb3VzIGNvbnN0cnVjdG9yIGZvciBWZWMzXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdjNcbiAqL1xuZnVuY3Rpb24gc2V0RGVmYXVsdFR5cGUkMShjdG9yKSB7XG4gIGNvbnN0IG9sZFR5cGUgPSBWZWNUeXBlO1xuICBWZWNUeXBlID0gY3RvcjtcbiAgcmV0dXJuIG9sZFR5cGU7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHZlYzM7IG1heSBiZSBjYWxsZWQgd2l0aCB4LCB5LCB6IHRvIHNldCBpbml0aWFsIHZhbHVlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbeF0gSW5pdGlhbCB4IHZhbHVlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt5XSBJbml0aWFsIHkgdmFsdWUuXG4gKiBAcGFyYW0ge251bWJlcn0gW3pdIEluaXRpYWwgeiB2YWx1ZS5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL3YzLlZlYzN9IHRoZSBjcmVhdGVkIHZlY3RvclxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3YzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZSQxKHgsIHksIHopIHtcbiAgY29uc3QgZHN0ID0gbmV3IFZlY1R5cGUoMyk7XG4gIGlmICh4KSB7XG4gICAgZHN0WzBdID0geDtcbiAgfVxuICBpZiAoeSkge1xuICAgIGRzdFsxXSA9IHk7XG4gIH1cbiAgaWYgKHopIHtcbiAgICBkc3RbMl0gPSB6O1xuICB9XG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogQWRkcyB0d28gdmVjdG9yczsgYXNzdW1lcyBhIGFuZCBiIGhhdmUgdGhlIHNhbWUgZGltZW5zaW9uLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBhIE9wZXJhbmQgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBiIE9wZXJhbmQgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBbZHN0XSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC92My5WZWMzfSBBIHZlY3RvciB0aGEgdGlzIHRoZSBzdW0gb2YgYSBhbmQgYi5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC92M1xuICovXG5mdW5jdGlvbiBhZGQoYSwgYiwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgVmVjVHlwZSgzKTtcblxuICBkc3RbMF0gPSBhWzBdICsgYlswXTtcbiAgZHN0WzFdID0gYVsxXSArIGJbMV07XG4gIGRzdFsyXSA9IGFbMl0gKyBiWzJdO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogU3VidHJhY3RzIHR3byB2ZWN0b3JzLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBhIE9wZXJhbmQgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBiIE9wZXJhbmQgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBbZHN0XSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC92My5WZWMzfSBBIHZlY3RvciB0aGF0IGlzIHRoZSBkaWZmZXJlbmNlIG9mIGEgYW5kIGIuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdjNcbiAqL1xuZnVuY3Rpb24gc3VidHJhY3QoYSwgYiwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgVmVjVHlwZSgzKTtcblxuICBkc3RbMF0gPSBhWzBdIC0gYlswXTtcbiAgZHN0WzFdID0gYVsxXSAtIGJbMV07XG4gIGRzdFsyXSA9IGFbMl0gLSBiWzJdO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgbGluZWFyIGludGVycG9sYXRpb24gb24gdHdvIHZlY3RvcnMuXG4gKiBHaXZlbiB2ZWN0b3JzIGEgYW5kIGIgYW5kIGludGVycG9sYXRpb24gY29lZmZpY2llbnQgdCwgcmV0dXJuc1xuICogYSArIHQgKiAoYiAtIGEpLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBhIE9wZXJhbmQgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBiIE9wZXJhbmQgdmVjdG9yLlxuICogQHBhcmFtIHtudW1iZXJ9IHQgSW50ZXJwb2xhdGlvbiBjb2VmZmljaWVudC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gW2RzdF0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gVGhlIGxpbmVhciBpbnRlcnBvbGF0ZWQgcmVzdWx0LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3YzXG4gKi9cbmZ1bmN0aW9uIGxlcnAoYSwgYiwgdCwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgVmVjVHlwZSgzKTtcblxuICBkc3RbMF0gPSBhWzBdICsgdCAqIChiWzBdIC0gYVswXSk7XG4gIGRzdFsxXSA9IGFbMV0gKyB0ICogKGJbMV0gLSBhWzFdKTtcbiAgZHN0WzJdID0gYVsyXSArIHQgKiAoYlsyXSAtIGFbMl0pO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgbGluZWFyIGludGVycG9sYXRpb24gb24gdHdvIHZlY3RvcnMuXG4gKiBHaXZlbiB2ZWN0b3JzIGEgYW5kIGIgYW5kIGludGVycG9sYXRpb24gY29lZmZpY2llbnQgdmVjdG9yIHQsIHJldHVybnNcbiAqIGEgKyB0ICogKGIgLSBhKS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gYSBPcGVyYW5kIHZlY3Rvci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gYiBPcGVyYW5kIHZlY3Rvci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gdCBJbnRlcnBvbGF0aW9uIGNvZWZmaWNpZW50cyB2ZWN0b3IuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFtkc3RdIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL3YzLlZlYzN9IHRoZSBsaW5lYXIgaW50ZXJwb2xhdGVkIHJlc3VsdC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC92M1xuICovXG5mdW5jdGlvbiBsZXJwVihhLCBiLCB0LCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBWZWNUeXBlKDMpO1xuXG4gIGRzdFswXSA9IGFbMF0gKyB0WzBdICogKGJbMF0gLSBhWzBdKTtcbiAgZHN0WzFdID0gYVsxXSArIHRbMV0gKiAoYlsxXSAtIGFbMV0pO1xuICBkc3RbMl0gPSBhWzJdICsgdFsyXSAqIChiWzJdIC0gYVsyXSk7XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBSZXR1cm4gbWF4IHZhbHVlcyBvZiB0d28gdmVjdG9ycy5cbiAqIEdpdmVuIHZlY3RvcnMgYSBhbmQgYiByZXR1cm5zXG4gKiBbbWF4KGFbMF0sIGJbMF0pLCBtYXgoYVsxXSwgYlsxXSksIG1heChhWzJdLCBiWzJdKV0uXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IGEgT3BlcmFuZCB2ZWN0b3IuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IGIgT3BlcmFuZCB2ZWN0b3IuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFtkc3RdIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFRoZSBtYXggY29tcG9uZW50cyB2ZWN0b3IuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdjNcbiAqL1xuZnVuY3Rpb24gbWF4KGEsIGIsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IFZlY1R5cGUoMyk7XG5cbiAgZHN0WzBdID0gTWF0aC5tYXgoYVswXSwgYlswXSk7XG4gIGRzdFsxXSA9IE1hdGgubWF4KGFbMV0sIGJbMV0pO1xuICBkc3RbMl0gPSBNYXRoLm1heChhWzJdLCBiWzJdKTtcblxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIFJldHVybiBtaW4gdmFsdWVzIG9mIHR3byB2ZWN0b3JzLlxuICogR2l2ZW4gdmVjdG9ycyBhIGFuZCBiIHJldHVybnNcbiAqIFttaW4oYVswXSwgYlswXSksIG1pbihhWzFdLCBiWzFdKSwgbWluKGFbMl0sIGJbMl0pXS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gYSBPcGVyYW5kIHZlY3Rvci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gYiBPcGVyYW5kIHZlY3Rvci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gW2RzdF0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gVGhlIG1pbiBjb21wb25lbnRzIHZlY3Rvci5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC92M1xuICovXG5mdW5jdGlvbiBtaW4oYSwgYiwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgVmVjVHlwZSgzKTtcblxuICBkc3RbMF0gPSBNYXRoLm1pbihhWzBdLCBiWzBdKTtcbiAgZHN0WzFdID0gTWF0aC5taW4oYVsxXSwgYlsxXSk7XG4gIGRzdFsyXSA9IE1hdGgubWluKGFbMl0sIGJbMl0pO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogTXVsdGlwbGllcyBhIHZlY3RvciBieSBhIHNjYWxhci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gdiBUaGUgdmVjdG9yLlxuICogQHBhcmFtIHtudW1iZXJ9IGsgVGhlIHNjYWxhci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gW2RzdF0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gVGhlIHNjYWxlZCB2ZWN0b3IuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdjNcbiAqL1xuZnVuY3Rpb24gbXVsU2NhbGFyKHYsIGssIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IFZlY1R5cGUoMyk7XG5cbiAgZHN0WzBdID0gdlswXSAqIGs7XG4gIGRzdFsxXSA9IHZbMV0gKiBrO1xuICBkc3RbMl0gPSB2WzJdICogaztcblxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIERpdmlkZXMgYSB2ZWN0b3IgYnkgYSBzY2FsYXIuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IHYgVGhlIHZlY3Rvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBrIFRoZSBzY2FsYXIuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFtkc3RdIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFRoZSBzY2FsZWQgdmVjdG9yLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3YzXG4gKi9cbmZ1bmN0aW9uIGRpdlNjYWxhcih2LCBrLCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBWZWNUeXBlKDMpO1xuXG4gIGRzdFswXSA9IHZbMF0gLyBrO1xuICBkc3RbMV0gPSB2WzFdIC8gaztcbiAgZHN0WzJdID0gdlsyXSAvIGs7XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB0d28gdmVjdG9yczsgYXNzdW1lcyBib3RoIHZlY3RvcnMgaGF2ZVxuICogdGhyZWUgZW50cmllcy5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gYSBPcGVyYW5kIHZlY3Rvci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gYiBPcGVyYW5kIHZlY3Rvci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gW2RzdF0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gVGhlIHZlY3RvciBvZiBhIGNyb3NzIGIuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdjNcbiAqL1xuZnVuY3Rpb24gY3Jvc3MoYSwgYiwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgVmVjVHlwZSgzKTtcblxuICBjb25zdCB0MSA9IGFbMl0gKiBiWzBdIC0gYVswXSAqIGJbMl07XG4gIGNvbnN0IHQyID0gYVswXSAqIGJbMV0gLSBhWzFdICogYlswXTtcbiAgZHN0WzBdID0gYVsxXSAqIGJbMl0gLSBhWzJdICogYlsxXTtcbiAgZHN0WzFdID0gdDE7XG4gIGRzdFsyXSA9IHQyO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWN0b3JzOyBhc3N1bWVzIGJvdGggdmVjdG9ycyBoYXZlXG4gKiB0aHJlZSBlbnRyaWVzLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBhIE9wZXJhbmQgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBiIE9wZXJhbmQgdmVjdG9yLlxuICogQHJldHVybiB7bnVtYmVyfSBkb3QgcHJvZHVjdFxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3YzXG4gKi9cbmZ1bmN0aW9uIGRvdChhLCBiKSB7XG4gIHJldHVybiAoYVswXSAqIGJbMF0pICsgKGFbMV0gKiBiWzFdKSArIChhWzJdICogYlsyXSk7XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGxlbmd0aCBvZiB2ZWN0b3JcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gdiB2ZWN0b3IuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGxlbmd0aCBvZiB2ZWN0b3IuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdjNcbiAqL1xuZnVuY3Rpb24gbGVuZ3RoJDEodikge1xuICByZXR1cm4gTWF0aC5zcXJ0KHZbMF0gKiB2WzBdICsgdlsxXSAqIHZbMV0gKyB2WzJdICogdlsyXSk7XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIHNxdWFyZSBvZiB0aGUgbGVuZ3RoIG9mIHZlY3RvclxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSB2IHZlY3Rvci5cbiAqIEByZXR1cm4ge251bWJlcn0gc3F1YXJlIG9mIHRoZSBsZW5ndGggb2YgdmVjdG9yLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3YzXG4gKi9cbmZ1bmN0aW9uIGxlbmd0aFNxKHYpIHtcbiAgcmV0dXJuIHZbMF0gKiB2WzBdICsgdlsxXSAqIHZbMV0gKyB2WzJdICogdlsyXTtcbn1cblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAyIHBvaW50c1xuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBhIHZlY3Rvci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gYiB2ZWN0b3IuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3YzXG4gKi9cbmZ1bmN0aW9uIGRpc3RhbmNlKGEsIGIpIHtcbiAgY29uc3QgZHggPSBhWzBdIC0gYlswXTtcbiAgY29uc3QgZHkgPSBhWzFdIC0gYlsxXTtcbiAgY29uc3QgZHogPSBhWzJdIC0gYlsyXTtcbiAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSArIGR6ICogZHopO1xufVxuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBzcXVhcmUgb2YgdGhlIGRpc3RhbmNlIGJldHdlZW4gMiBwb2ludHNcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gYSB2ZWN0b3IuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IGIgdmVjdG9yLlxuICogQHJldHVybiB7bnVtYmVyfSBzcXVhcmUgb2YgdGhlIGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3YzXG4gKi9cbmZ1bmN0aW9uIGRpc3RhbmNlU3EoYSwgYikge1xuICBjb25zdCBkeCA9IGFbMF0gLSBiWzBdO1xuICBjb25zdCBkeSA9IGFbMV0gLSBiWzFdO1xuICBjb25zdCBkeiA9IGFbMl0gLSBiWzJdO1xuICByZXR1cm4gZHggKiBkeCArIGR5ICogZHkgKyBkeiAqIGR6O1xufVxuXG4vKipcbiAqIERpdmlkZXMgYSB2ZWN0b3IgYnkgaXRzIEV1Y2xpZGVhbiBsZW5ndGggYW5kIHJldHVybnMgdGhlIHF1b3RpZW50LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBhIFRoZSB2ZWN0b3IuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFtkc3RdIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFRoZSBub3JtYWxpemVkIHZlY3Rvci5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC92M1xuICovXG5mdW5jdGlvbiBub3JtYWxpemUoYSwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgVmVjVHlwZSgzKTtcblxuICBjb25zdCBsZW5TcSA9IGFbMF0gKiBhWzBdICsgYVsxXSAqIGFbMV0gKyBhWzJdICogYVsyXTtcbiAgY29uc3QgbGVuID0gTWF0aC5zcXJ0KGxlblNxKTtcbiAgaWYgKGxlbiA+IDAuMDAwMDEpIHtcbiAgICBkc3RbMF0gPSBhWzBdIC8gbGVuO1xuICAgIGRzdFsxXSA9IGFbMV0gLyBsZW47XG4gICAgZHN0WzJdID0gYVsyXSAvIGxlbjtcbiAgfSBlbHNlIHtcbiAgICBkc3RbMF0gPSAwO1xuICAgIGRzdFsxXSA9IDA7XG4gICAgZHN0WzJdID0gMDtcbiAgfVxuXG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogTmVnYXRlcyBhIHZlY3Rvci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gdiBUaGUgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBbZHN0XSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC92My5WZWMzfSAtdi5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC92M1xuICovXG5mdW5jdGlvbiBuZWdhdGUkMSh2LCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBWZWNUeXBlKDMpO1xuXG4gIGRzdFswXSA9IC12WzBdO1xuICBkc3RbMV0gPSAtdlsxXTtcbiAgZHN0WzJdID0gLXZbMl07XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBDb3BpZXMgYSB2ZWN0b3IuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IHYgVGhlIHZlY3Rvci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gW2RzdF0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gQSBjb3B5IG9mIHYuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdjNcbiAqL1xuZnVuY3Rpb24gY29weSQxKHYsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IFZlY1R5cGUoMyk7XG5cbiAgZHN0WzBdID0gdlswXTtcbiAgZHN0WzFdID0gdlsxXTtcbiAgZHN0WzJdID0gdlsyXTtcblxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIE11bHRpcGxpZXMgYSB2ZWN0b3IgYnkgYW5vdGhlciB2ZWN0b3IgKGNvbXBvbmVudC13aXNlKTsgYXNzdW1lcyBhIGFuZFxuICogYiBoYXZlIHRoZSBzYW1lIGxlbmd0aC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gYSBPcGVyYW5kIHZlY3Rvci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gYiBPcGVyYW5kIHZlY3Rvci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gW2RzdF0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gVGhlIHZlY3RvciBvZiBwcm9kdWN0cyBvZiBlbnRyaWVzIG9mIGEgYW5kXG4gKiAgICAgYi5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC92M1xuICovXG5mdW5jdGlvbiBtdWx0aXBseSQxKGEsIGIsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IFZlY1R5cGUoMyk7XG5cbiAgZHN0WzBdID0gYVswXSAqIGJbMF07XG4gIGRzdFsxXSA9IGFbMV0gKiBiWzFdO1xuICBkc3RbMl0gPSBhWzJdICogYlsyXTtcblxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIERpdmlkZXMgYSB2ZWN0b3IgYnkgYW5vdGhlciB2ZWN0b3IgKGNvbXBvbmVudC13aXNlKTsgYXNzdW1lcyBhIGFuZFxuICogYiBoYXZlIHRoZSBzYW1lIGxlbmd0aC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gYSBPcGVyYW5kIHZlY3Rvci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gYiBPcGVyYW5kIHZlY3Rvci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gW2RzdF0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gVGhlIHZlY3RvciBvZiBxdW90aWVudHMgb2YgZW50cmllcyBvZiBhIGFuZFxuICogICAgIGIuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdjNcbiAqL1xuZnVuY3Rpb24gZGl2aWRlKGEsIGIsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IFZlY1R5cGUoMyk7XG5cbiAgZHN0WzBdID0gYVswXSAvIGJbMF07XG4gIGRzdFsxXSA9IGFbMV0gLyBiWzFdO1xuICBkc3RbMl0gPSBhWzJdIC8gYlsyXTtcblxuICByZXR1cm4gZHN0O1xufVxuXG52YXIgdjMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgYWRkOiBhZGQsXG4gIGNvcHk6IGNvcHkkMSxcbiAgY3JlYXRlOiBjcmVhdGUkMSxcbiAgY3Jvc3M6IGNyb3NzLFxuICBkaXN0YW5jZTogZGlzdGFuY2UsXG4gIGRpc3RhbmNlU3E6IGRpc3RhbmNlU3EsXG4gIGRpdmlkZTogZGl2aWRlLFxuICBkaXZTY2FsYXI6IGRpdlNjYWxhcixcbiAgZG90OiBkb3QsXG4gIGxlcnA6IGxlcnAsXG4gIGxlcnBWOiBsZXJwVixcbiAgbGVuZ3RoOiBsZW5ndGgkMSxcbiAgbGVuZ3RoU3E6IGxlbmd0aFNxLFxuICBtYXg6IG1heCxcbiAgbWluOiBtaW4sXG4gIG11bFNjYWxhcjogbXVsU2NhbGFyLFxuICBtdWx0aXBseTogbXVsdGlwbHkkMSxcbiAgbmVnYXRlOiBuZWdhdGUkMSxcbiAgbm9ybWFsaXplOiBub3JtYWxpemUsXG4gIHNldERlZmF1bHRUeXBlOiBzZXREZWZhdWx0VHlwZSQxLFxuICBzdWJ0cmFjdDogc3VidHJhY3Rcbn0pO1xuXG4vKlxuICogQ29weXJpZ2h0IDIwMTkgR3JlZ2cgVGF2YXJlc1xuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4gKiBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksXG4gKiB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uXG4gKiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSxcbiAqIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuICogU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTExcbiAqIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUlxuICogREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKlxuICogNHg0IE1hdHJpeCBtYXRoIG1hdGggZnVuY3Rpb25zLlxuICpcbiAqIEFsbW9zdCBhbGwgZnVuY3Rpb25zIHRha2UgYW4gb3B0aW9uYWwgYGRzdGAgYXJndW1lbnQuIElmIGl0IGlzIG5vdCBwYXNzZWQgaW4gdGhlXG4gKiBmdW5jdGlvbnMgd2lsbCBjcmVhdGUgYSBuZXcgbWF0cml4LiBJbiBvdGhlciB3b3JkcyB5b3UgY2FuIGRvIHRoaXNcbiAqXG4gKiAgICAgY29uc3QgbWF0ID0gbTQudHJhbnNsYXRpb24oWzEsIDIsIDNdKTsgIC8vIENyZWF0ZXMgYSBuZXcgdHJhbnNsYXRpb24gbWF0cml4XG4gKlxuICogb3JcbiAqXG4gKiAgICAgY29uc3QgbWF0ID0gbTQuY3JlYXRlKCk7XG4gKiAgICAgbTQudHJhbnNsYXRpb24oWzEsIDIsIDNdLCBtYXQpOyAgLy8gUHV0cyB0cmFuc2xhdGlvbiBtYXRyaXggaW4gbWF0LlxuICpcbiAqIFRoZSBmaXJzdCBzdHlsZSBpcyBvZnRlbiBlYXNpZXIgYnV0IGRlcGVuZGluZyBvbiB3aGVyZSBpdCdzIHVzZWQgaXQgZ2VuZXJhdGVzIGdhcmJhZ2Ugd2hlcmVcbiAqIGFzIHRoZXJlIGlzIGFsbW9zdCBuZXZlciBhbGxvY2F0aW9uIHdpdGggdGhlIHNlY29uZCBzdHlsZS5cbiAqXG4gKiBJdCBpcyBhbHdheXMgc2F2ZSB0byBwYXNzIGFueSBtYXRyaXggYXMgdGhlIGRlc3RpbmF0aW9uLiBTbyBmb3IgZXhhbXBsZVxuICpcbiAqICAgICBjb25zdCBtYXQgPSBtNC5pZGVudGl0eSgpO1xuICogICAgIGNvbnN0IHRyYW5zID0gbTQudHJhbnNsYXRpb24oWzEsIDIsIDNdKTtcbiAqICAgICBtNC5tdWx0aXBseShtYXQsIHRyYW5zLCBtYXQpOyAgLy8gTXVsdGlwbGllcyBtYXQgKiB0cmFucyBhbmQgcHV0cyByZXN1bHQgaW4gbWF0LlxuICpcbiAqIEBtb2R1bGUgdHdnbC9tNFxuICovXG5sZXQgTWF0VHlwZSA9IEZsb2F0MzJBcnJheTtcblxuLyoqXG4gKiBBIEphdmFTY3JpcHQgYXJyYXkgd2l0aCAxNiB2YWx1ZXMgb3IgYSBGbG9hdDMyQXJyYXkgd2l0aCAxNiB2YWx1ZXMuXG4gKiBXaGVuIGNyZWF0ZWQgYnkgdGhlIGxpYnJhcnkgd2lsbCBjcmVhdGUgdGhlIGRlZmF1bHQgdHlwZSB3aGljaCBpcyBgRmxvYXQzMkFycmF5YFxuICogYnV0IGNhbiBiZSBzZXQgYnkgY2FsbGluZyB7QGxpbmsgbW9kdWxlOnR3Z2wvbTQuc2V0RGVmYXVsdFR5cGV9LlxuICogQHR5cGVkZWYgeyhudW1iZXJbXXxGbG9hdDMyQXJyYXkpfSBNYXQ0XG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuXG4vKipcbiAqIFNldHMgdGhlIHR5cGUgdGhpcyBsaWJyYXJ5IGNyZWF0ZXMgZm9yIGEgTWF0NFxuICogQHBhcmFtIHtjb25zdHJ1Y3Rvcn0gY3RvciB0aGUgY29uc3RydWN0b3IgZm9yIHRoZSB0eXBlLiBFaXRoZXIgYEZsb2F0MzJBcnJheWAgb3IgYEFycmF5YFxuICogQHJldHVybiB7Y29uc3RydWN0b3J9IHByZXZpb3VzIGNvbnN0cnVjdG9yIGZvciBNYXQ0XG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuZnVuY3Rpb24gc2V0RGVmYXVsdFR5cGUoY3Rvcikge1xuICBjb25zdCBvbGRUeXBlID0gTWF0VHlwZTtcbiAgTWF0VHlwZSA9IGN0b3I7XG4gIHJldHVybiBvbGRUeXBlO1xufVxuXG4vKipcbiAqIE5lZ2F0ZXMgYSBtYXRyaXguXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IG0gVGhlIG1hdHJpeC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gLW0uXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuZnVuY3Rpb24gbmVnYXRlKG0sIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMTYpO1xuXG4gIGRzdFsgMF0gPSAtbVsgMF07XG4gIGRzdFsgMV0gPSAtbVsgMV07XG4gIGRzdFsgMl0gPSAtbVsgMl07XG4gIGRzdFsgM10gPSAtbVsgM107XG4gIGRzdFsgNF0gPSAtbVsgNF07XG4gIGRzdFsgNV0gPSAtbVsgNV07XG4gIGRzdFsgNl0gPSAtbVsgNl07XG4gIGRzdFsgN10gPSAtbVsgN107XG4gIGRzdFsgOF0gPSAtbVsgOF07XG4gIGRzdFsgOV0gPSAtbVsgOV07XG4gIGRzdFsxMF0gPSAtbVsxMF07XG4gIGRzdFsxMV0gPSAtbVsxMV07XG4gIGRzdFsxMl0gPSAtbVsxMl07XG4gIGRzdFsxM10gPSAtbVsxM107XG4gIGRzdFsxNF0gPSAtbVsxNF07XG4gIGRzdFsxNV0gPSAtbVsxNV07XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4LlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gQSBuZXcgbWF0cml4LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgcmV0dXJuIG5ldyBNYXRUeXBlKDE2KS5maWxsKDApO1xufVxuXG4vKipcbiAqIENvcGllcyBhIG1hdHJpeC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gbSBUaGUgbWF0cml4LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBbZHN0XSBUaGUgbWF0cml4LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gQSBjb3B5IG9mIG0uXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuZnVuY3Rpb24gY29weShtLCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBNYXRUeXBlKDE2KTtcblxuICBkc3RbIDBdID0gbVsgMF07XG4gIGRzdFsgMV0gPSBtWyAxXTtcbiAgZHN0WyAyXSA9IG1bIDJdO1xuICBkc3RbIDNdID0gbVsgM107XG4gIGRzdFsgNF0gPSBtWyA0XTtcbiAgZHN0WyA1XSA9IG1bIDVdO1xuICBkc3RbIDZdID0gbVsgNl07XG4gIGRzdFsgN10gPSBtWyA3XTtcbiAgZHN0WyA4XSA9IG1bIDhdO1xuICBkc3RbIDldID0gbVsgOV07XG4gIGRzdFsxMF0gPSBtWzEwXTtcbiAgZHN0WzExXSA9IG1bMTFdO1xuICBkc3RbMTJdID0gbVsxMl07XG4gIGRzdFsxM10gPSBtWzEzXTtcbiAgZHN0WzE0XSA9IG1bMTRdO1xuICBkc3RbMTVdID0gbVsxNV07XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIG4tYnktbiBpZGVudGl0eSBtYXRyaXguXG4gKlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBbZHN0XSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBBbiBuLWJ5LW4gaWRlbnRpdHkgbWF0cml4LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMTYpO1xuXG4gIGRzdFsgMF0gPSAxO1xuICBkc3RbIDFdID0gMDtcbiAgZHN0WyAyXSA9IDA7XG4gIGRzdFsgM10gPSAwO1xuICBkc3RbIDRdID0gMDtcbiAgZHN0WyA1XSA9IDE7XG4gIGRzdFsgNl0gPSAwO1xuICBkc3RbIDddID0gMDtcbiAgZHN0WyA4XSA9IDA7XG4gIGRzdFsgOV0gPSAwO1xuICBkc3RbMTBdID0gMTtcbiAgZHN0WzExXSA9IDA7XG4gIGRzdFsxMl0gPSAwO1xuICBkc3RbMTNdID0gMDtcbiAgZHN0WzE0XSA9IDA7XG4gIGRzdFsxNV0gPSAxO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogVGFrZXMgdGhlIHRyYW5zcG9zZSBvZiBhIG1hdHJpeC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gbSBUaGUgbWF0cml4LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBbZHN0XSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBUaGUgdHJhbnNwb3NlIG9mIG0uXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuIGZ1bmN0aW9uIHRyYW5zcG9zZShtLCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBNYXRUeXBlKDE2KTtcbiAgaWYgKGRzdCA9PT0gbSkge1xuICAgIGxldCB0O1xuXG4gICAgdCA9IG1bMV07XG4gICAgbVsxXSA9IG1bNF07XG4gICAgbVs0XSA9IHQ7XG5cbiAgICB0ID0gbVsyXTtcbiAgICBtWzJdID0gbVs4XTtcbiAgICBtWzhdID0gdDtcblxuICAgIHQgPSBtWzNdO1xuICAgIG1bM10gPSBtWzEyXTtcbiAgICBtWzEyXSA9IHQ7XG5cbiAgICB0ID0gbVs2XTtcbiAgICBtWzZdID0gbVs5XTtcbiAgICBtWzldID0gdDtcblxuICAgIHQgPSBtWzddO1xuICAgIG1bN10gPSBtWzEzXTtcbiAgICBtWzEzXSA9IHQ7XG5cbiAgICB0ID0gbVsxMV07XG4gICAgbVsxMV0gPSBtWzE0XTtcbiAgICBtWzE0XSA9IHQ7XG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIGNvbnN0IG0wMCA9IG1bMCAqIDQgKyAwXTtcbiAgY29uc3QgbTAxID0gbVswICogNCArIDFdO1xuICBjb25zdCBtMDIgPSBtWzAgKiA0ICsgMl07XG4gIGNvbnN0IG0wMyA9IG1bMCAqIDQgKyAzXTtcbiAgY29uc3QgbTEwID0gbVsxICogNCArIDBdO1xuICBjb25zdCBtMTEgPSBtWzEgKiA0ICsgMV07XG4gIGNvbnN0IG0xMiA9IG1bMSAqIDQgKyAyXTtcbiAgY29uc3QgbTEzID0gbVsxICogNCArIDNdO1xuICBjb25zdCBtMjAgPSBtWzIgKiA0ICsgMF07XG4gIGNvbnN0IG0yMSA9IG1bMiAqIDQgKyAxXTtcbiAgY29uc3QgbTIyID0gbVsyICogNCArIDJdO1xuICBjb25zdCBtMjMgPSBtWzIgKiA0ICsgM107XG4gIGNvbnN0IG0zMCA9IG1bMyAqIDQgKyAwXTtcbiAgY29uc3QgbTMxID0gbVszICogNCArIDFdO1xuICBjb25zdCBtMzIgPSBtWzMgKiA0ICsgMl07XG4gIGNvbnN0IG0zMyA9IG1bMyAqIDQgKyAzXTtcblxuICBkc3RbIDBdID0gbTAwO1xuICBkc3RbIDFdID0gbTEwO1xuICBkc3RbIDJdID0gbTIwO1xuICBkc3RbIDNdID0gbTMwO1xuICBkc3RbIDRdID0gbTAxO1xuICBkc3RbIDVdID0gbTExO1xuICBkc3RbIDZdID0gbTIxO1xuICBkc3RbIDddID0gbTMxO1xuICBkc3RbIDhdID0gbTAyO1xuICBkc3RbIDldID0gbTEyO1xuICBkc3RbMTBdID0gbTIyO1xuICBkc3RbMTFdID0gbTMyO1xuICBkc3RbMTJdID0gbTAzO1xuICBkc3RbMTNdID0gbTEzO1xuICBkc3RbMTRdID0gbTIzO1xuICBkc3RbMTVdID0gbTMzO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGludmVyc2Ugb2YgYSA0LWJ5LTQgbWF0cml4LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBtIFRoZSBtYXRyaXguXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL200Lk1hdDR9IFRoZSBpbnZlcnNlIG9mIG0uXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuZnVuY3Rpb24gaW52ZXJzZShtLCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBNYXRUeXBlKDE2KTtcblxuICBjb25zdCBtMDAgPSBtWzAgKiA0ICsgMF07XG4gIGNvbnN0IG0wMSA9IG1bMCAqIDQgKyAxXTtcbiAgY29uc3QgbTAyID0gbVswICogNCArIDJdO1xuICBjb25zdCBtMDMgPSBtWzAgKiA0ICsgM107XG4gIGNvbnN0IG0xMCA9IG1bMSAqIDQgKyAwXTtcbiAgY29uc3QgbTExID0gbVsxICogNCArIDFdO1xuICBjb25zdCBtMTIgPSBtWzEgKiA0ICsgMl07XG4gIGNvbnN0IG0xMyA9IG1bMSAqIDQgKyAzXTtcbiAgY29uc3QgbTIwID0gbVsyICogNCArIDBdO1xuICBjb25zdCBtMjEgPSBtWzIgKiA0ICsgMV07XG4gIGNvbnN0IG0yMiA9IG1bMiAqIDQgKyAyXTtcbiAgY29uc3QgbTIzID0gbVsyICogNCArIDNdO1xuICBjb25zdCBtMzAgPSBtWzMgKiA0ICsgMF07XG4gIGNvbnN0IG0zMSA9IG1bMyAqIDQgKyAxXTtcbiAgY29uc3QgbTMyID0gbVszICogNCArIDJdO1xuICBjb25zdCBtMzMgPSBtWzMgKiA0ICsgM107XG4gIGNvbnN0IHRtcF8wICA9IG0yMiAqIG0zMztcbiAgY29uc3QgdG1wXzEgID0gbTMyICogbTIzO1xuICBjb25zdCB0bXBfMiAgPSBtMTIgKiBtMzM7XG4gIGNvbnN0IHRtcF8zICA9IG0zMiAqIG0xMztcbiAgY29uc3QgdG1wXzQgID0gbTEyICogbTIzO1xuICBjb25zdCB0bXBfNSAgPSBtMjIgKiBtMTM7XG4gIGNvbnN0IHRtcF82ICA9IG0wMiAqIG0zMztcbiAgY29uc3QgdG1wXzcgID0gbTMyICogbTAzO1xuICBjb25zdCB0bXBfOCAgPSBtMDIgKiBtMjM7XG4gIGNvbnN0IHRtcF85ICA9IG0yMiAqIG0wMztcbiAgY29uc3QgdG1wXzEwID0gbTAyICogbTEzO1xuICBjb25zdCB0bXBfMTEgPSBtMTIgKiBtMDM7XG4gIGNvbnN0IHRtcF8xMiA9IG0yMCAqIG0zMTtcbiAgY29uc3QgdG1wXzEzID0gbTMwICogbTIxO1xuICBjb25zdCB0bXBfMTQgPSBtMTAgKiBtMzE7XG4gIGNvbnN0IHRtcF8xNSA9IG0zMCAqIG0xMTtcbiAgY29uc3QgdG1wXzE2ID0gbTEwICogbTIxO1xuICBjb25zdCB0bXBfMTcgPSBtMjAgKiBtMTE7XG4gIGNvbnN0IHRtcF8xOCA9IG0wMCAqIG0zMTtcbiAgY29uc3QgdG1wXzE5ID0gbTMwICogbTAxO1xuICBjb25zdCB0bXBfMjAgPSBtMDAgKiBtMjE7XG4gIGNvbnN0IHRtcF8yMSA9IG0yMCAqIG0wMTtcbiAgY29uc3QgdG1wXzIyID0gbTAwICogbTExO1xuICBjb25zdCB0bXBfMjMgPSBtMTAgKiBtMDE7XG5cbiAgY29uc3QgdDAgPSAodG1wXzAgKiBtMTEgKyB0bXBfMyAqIG0yMSArIHRtcF80ICogbTMxKSAtXG4gICAgICAodG1wXzEgKiBtMTEgKyB0bXBfMiAqIG0yMSArIHRtcF81ICogbTMxKTtcbiAgY29uc3QgdDEgPSAodG1wXzEgKiBtMDEgKyB0bXBfNiAqIG0yMSArIHRtcF85ICogbTMxKSAtXG4gICAgICAodG1wXzAgKiBtMDEgKyB0bXBfNyAqIG0yMSArIHRtcF84ICogbTMxKTtcbiAgY29uc3QgdDIgPSAodG1wXzIgKiBtMDEgKyB0bXBfNyAqIG0xMSArIHRtcF8xMCAqIG0zMSkgLVxuICAgICAgKHRtcF8zICogbTAxICsgdG1wXzYgKiBtMTEgKyB0bXBfMTEgKiBtMzEpO1xuICBjb25zdCB0MyA9ICh0bXBfNSAqIG0wMSArIHRtcF84ICogbTExICsgdG1wXzExICogbTIxKSAtXG4gICAgICAodG1wXzQgKiBtMDEgKyB0bXBfOSAqIG0xMSArIHRtcF8xMCAqIG0yMSk7XG5cbiAgY29uc3QgZCA9IDEuMCAvIChtMDAgKiB0MCArIG0xMCAqIHQxICsgbTIwICogdDIgKyBtMzAgKiB0Myk7XG5cbiAgZHN0WyAwXSA9IGQgKiB0MDtcbiAgZHN0WyAxXSA9IGQgKiB0MTtcbiAgZHN0WyAyXSA9IGQgKiB0MjtcbiAgZHN0WyAzXSA9IGQgKiB0MztcbiAgZHN0WyA0XSA9IGQgKiAoKHRtcF8xICogbTEwICsgdG1wXzIgKiBtMjAgKyB0bXBfNSAqIG0zMCkgLVxuICAgICAgICAgICh0bXBfMCAqIG0xMCArIHRtcF8zICogbTIwICsgdG1wXzQgKiBtMzApKTtcbiAgZHN0WyA1XSA9IGQgKiAoKHRtcF8wICogbTAwICsgdG1wXzcgKiBtMjAgKyB0bXBfOCAqIG0zMCkgLVxuICAgICAgICAgICh0bXBfMSAqIG0wMCArIHRtcF82ICogbTIwICsgdG1wXzkgKiBtMzApKTtcbiAgZHN0WyA2XSA9IGQgKiAoKHRtcF8zICogbTAwICsgdG1wXzYgKiBtMTAgKyB0bXBfMTEgKiBtMzApIC1cbiAgICAgICAgICAodG1wXzIgKiBtMDAgKyB0bXBfNyAqIG0xMCArIHRtcF8xMCAqIG0zMCkpO1xuICBkc3RbIDddID0gZCAqICgodG1wXzQgKiBtMDAgKyB0bXBfOSAqIG0xMCArIHRtcF8xMCAqIG0yMCkgLVxuICAgICAgICAgICh0bXBfNSAqIG0wMCArIHRtcF84ICogbTEwICsgdG1wXzExICogbTIwKSk7XG4gIGRzdFsgOF0gPSBkICogKCh0bXBfMTIgKiBtMTMgKyB0bXBfMTUgKiBtMjMgKyB0bXBfMTYgKiBtMzMpIC1cbiAgICAgICAgICAodG1wXzEzICogbTEzICsgdG1wXzE0ICogbTIzICsgdG1wXzE3ICogbTMzKSk7XG4gIGRzdFsgOV0gPSBkICogKCh0bXBfMTMgKiBtMDMgKyB0bXBfMTggKiBtMjMgKyB0bXBfMjEgKiBtMzMpIC1cbiAgICAgICAgICAodG1wXzEyICogbTAzICsgdG1wXzE5ICogbTIzICsgdG1wXzIwICogbTMzKSk7XG4gIGRzdFsxMF0gPSBkICogKCh0bXBfMTQgKiBtMDMgKyB0bXBfMTkgKiBtMTMgKyB0bXBfMjIgKiBtMzMpIC1cbiAgICAgICAgICAodG1wXzE1ICogbTAzICsgdG1wXzE4ICogbTEzICsgdG1wXzIzICogbTMzKSk7XG4gIGRzdFsxMV0gPSBkICogKCh0bXBfMTcgKiBtMDMgKyB0bXBfMjAgKiBtMTMgKyB0bXBfMjMgKiBtMjMpIC1cbiAgICAgICAgICAodG1wXzE2ICogbTAzICsgdG1wXzIxICogbTEzICsgdG1wXzIyICogbTIzKSk7XG4gIGRzdFsxMl0gPSBkICogKCh0bXBfMTQgKiBtMjIgKyB0bXBfMTcgKiBtMzIgKyB0bXBfMTMgKiBtMTIpIC1cbiAgICAgICAgICAodG1wXzE2ICogbTMyICsgdG1wXzEyICogbTEyICsgdG1wXzE1ICogbTIyKSk7XG4gIGRzdFsxM10gPSBkICogKCh0bXBfMjAgKiBtMzIgKyB0bXBfMTIgKiBtMDIgKyB0bXBfMTkgKiBtMjIpIC1cbiAgICAgICAgICAodG1wXzE4ICogbTIyICsgdG1wXzIxICogbTMyICsgdG1wXzEzICogbTAyKSk7XG4gIGRzdFsxNF0gPSBkICogKCh0bXBfMTggKiBtMTIgKyB0bXBfMjMgKiBtMzIgKyB0bXBfMTUgKiBtMDIpIC1cbiAgICAgICAgICAodG1wXzIyICogbTMyICsgdG1wXzE0ICogbTAyICsgdG1wXzE5ICogbTEyKSk7XG4gIGRzdFsxNV0gPSBkICogKCh0bXBfMjIgKiBtMjIgKyB0bXBfMTYgKiBtMDIgKyB0bXBfMjEgKiBtMTIpIC1cbiAgICAgICAgICAodG1wXzIwICogbTEyICsgdG1wXzIzICogbTIyICsgdG1wXzE3ICogbTAyKSk7XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byA0LWJ5LTQgbWF0cmljZXMgd2l0aCBhIG9uIHRoZSBsZWZ0IGFuZCBiIG9uIHRoZSByaWdodFxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBhIFRoZSBtYXRyaXggb24gdGhlIGxlZnQuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IGIgVGhlIG1hdHJpeCBvbiB0aGUgcmlnaHQuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL200Lk1hdDR9IFRoZSBtYXRyaXggcHJvZHVjdCBvZiBhIGFuZCBiLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cbmZ1bmN0aW9uIG11bHRpcGx5KGEsIGIsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMTYpO1xuXG4gIGNvbnN0IGEwMCA9IGFbMF07XG4gIGNvbnN0IGEwMSA9IGFbMV07XG4gIGNvbnN0IGEwMiA9IGFbMl07XG4gIGNvbnN0IGEwMyA9IGFbM107XG4gIGNvbnN0IGExMCA9IGFbIDQgKyAwXTtcbiAgY29uc3QgYTExID0gYVsgNCArIDFdO1xuICBjb25zdCBhMTIgPSBhWyA0ICsgMl07XG4gIGNvbnN0IGExMyA9IGFbIDQgKyAzXTtcbiAgY29uc3QgYTIwID0gYVsgOCArIDBdO1xuICBjb25zdCBhMjEgPSBhWyA4ICsgMV07XG4gIGNvbnN0IGEyMiA9IGFbIDggKyAyXTtcbiAgY29uc3QgYTIzID0gYVsgOCArIDNdO1xuICBjb25zdCBhMzAgPSBhWzEyICsgMF07XG4gIGNvbnN0IGEzMSA9IGFbMTIgKyAxXTtcbiAgY29uc3QgYTMyID0gYVsxMiArIDJdO1xuICBjb25zdCBhMzMgPSBhWzEyICsgM107XG4gIGNvbnN0IGIwMCA9IGJbMF07XG4gIGNvbnN0IGIwMSA9IGJbMV07XG4gIGNvbnN0IGIwMiA9IGJbMl07XG4gIGNvbnN0IGIwMyA9IGJbM107XG4gIGNvbnN0IGIxMCA9IGJbIDQgKyAwXTtcbiAgY29uc3QgYjExID0gYlsgNCArIDFdO1xuICBjb25zdCBiMTIgPSBiWyA0ICsgMl07XG4gIGNvbnN0IGIxMyA9IGJbIDQgKyAzXTtcbiAgY29uc3QgYjIwID0gYlsgOCArIDBdO1xuICBjb25zdCBiMjEgPSBiWyA4ICsgMV07XG4gIGNvbnN0IGIyMiA9IGJbIDggKyAyXTtcbiAgY29uc3QgYjIzID0gYlsgOCArIDNdO1xuICBjb25zdCBiMzAgPSBiWzEyICsgMF07XG4gIGNvbnN0IGIzMSA9IGJbMTIgKyAxXTtcbiAgY29uc3QgYjMyID0gYlsxMiArIDJdO1xuICBjb25zdCBiMzMgPSBiWzEyICsgM107XG5cbiAgZHN0WyAwXSA9IGEwMCAqIGIwMCArIGExMCAqIGIwMSArIGEyMCAqIGIwMiArIGEzMCAqIGIwMztcbiAgZHN0WyAxXSA9IGEwMSAqIGIwMCArIGExMSAqIGIwMSArIGEyMSAqIGIwMiArIGEzMSAqIGIwMztcbiAgZHN0WyAyXSA9IGEwMiAqIGIwMCArIGExMiAqIGIwMSArIGEyMiAqIGIwMiArIGEzMiAqIGIwMztcbiAgZHN0WyAzXSA9IGEwMyAqIGIwMCArIGExMyAqIGIwMSArIGEyMyAqIGIwMiArIGEzMyAqIGIwMztcbiAgZHN0WyA0XSA9IGEwMCAqIGIxMCArIGExMCAqIGIxMSArIGEyMCAqIGIxMiArIGEzMCAqIGIxMztcbiAgZHN0WyA1XSA9IGEwMSAqIGIxMCArIGExMSAqIGIxMSArIGEyMSAqIGIxMiArIGEzMSAqIGIxMztcbiAgZHN0WyA2XSA9IGEwMiAqIGIxMCArIGExMiAqIGIxMSArIGEyMiAqIGIxMiArIGEzMiAqIGIxMztcbiAgZHN0WyA3XSA9IGEwMyAqIGIxMCArIGExMyAqIGIxMSArIGEyMyAqIGIxMiArIGEzMyAqIGIxMztcbiAgZHN0WyA4XSA9IGEwMCAqIGIyMCArIGExMCAqIGIyMSArIGEyMCAqIGIyMiArIGEzMCAqIGIyMztcbiAgZHN0WyA5XSA9IGEwMSAqIGIyMCArIGExMSAqIGIyMSArIGEyMSAqIGIyMiArIGEzMSAqIGIyMztcbiAgZHN0WzEwXSA9IGEwMiAqIGIyMCArIGExMiAqIGIyMSArIGEyMiAqIGIyMiArIGEzMiAqIGIyMztcbiAgZHN0WzExXSA9IGEwMyAqIGIyMCArIGExMyAqIGIyMSArIGEyMyAqIGIyMiArIGEzMyAqIGIyMztcbiAgZHN0WzEyXSA9IGEwMCAqIGIzMCArIGExMCAqIGIzMSArIGEyMCAqIGIzMiArIGEzMCAqIGIzMztcbiAgZHN0WzEzXSA9IGEwMSAqIGIzMCArIGExMSAqIGIzMSArIGEyMSAqIGIzMiArIGEzMSAqIGIzMztcbiAgZHN0WzE0XSA9IGEwMiAqIGIzMCArIGExMiAqIGIzMSArIGEyMiAqIGIzMiArIGEzMiAqIGIzMztcbiAgZHN0WzE1XSA9IGEwMyAqIGIzMCArIGExMyAqIGIzMSArIGEyMyAqIGIzMiArIGEzMyAqIGIzMztcblxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIFNldHMgdGhlIHRyYW5zbGF0aW9uIGNvbXBvbmVudCBvZiBhIDQtYnktNCBtYXRyaXggdG8gdGhlIGdpdmVuXG4gKiB2ZWN0b3IuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IGEgVGhlIG1hdHJpeC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gdiBUaGUgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBbZHN0XSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBUaGUgbWF0cml4IHdpdGggdHJhbnNsYXRpb24gc2V0LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cbmZ1bmN0aW9uIHNldFRyYW5zbGF0aW9uKGEsIHYsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgaWRlbnRpdHkoKTtcbiAgaWYgKGEgIT09IGRzdCkge1xuICAgIGRzdFsgMF0gPSBhWyAwXTtcbiAgICBkc3RbIDFdID0gYVsgMV07XG4gICAgZHN0WyAyXSA9IGFbIDJdO1xuICAgIGRzdFsgM10gPSBhWyAzXTtcbiAgICBkc3RbIDRdID0gYVsgNF07XG4gICAgZHN0WyA1XSA9IGFbIDVdO1xuICAgIGRzdFsgNl0gPSBhWyA2XTtcbiAgICBkc3RbIDddID0gYVsgN107XG4gICAgZHN0WyA4XSA9IGFbIDhdO1xuICAgIGRzdFsgOV0gPSBhWyA5XTtcbiAgICBkc3RbMTBdID0gYVsxMF07XG4gICAgZHN0WzExXSA9IGFbMTFdO1xuICB9XG4gIGRzdFsxMl0gPSB2WzBdO1xuICBkc3RbMTNdID0gdlsxXTtcbiAgZHN0WzE0XSA9IHZbMl07XG4gIGRzdFsxNV0gPSAxO1xuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHRyYW5zbGF0aW9uIGNvbXBvbmVudCBvZiBhIDQtYnktNCBtYXRyaXggYXMgYSB2ZWN0b3Igd2l0aCAzXG4gKiBlbnRyaWVzLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBtIFRoZSBtYXRyaXguXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFtkc3RdIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFRoZSB0cmFuc2xhdGlvbiBjb21wb25lbnQgb2YgbS5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5mdW5jdGlvbiBnZXRUcmFuc2xhdGlvbihtLCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IGNyZWF0ZSQxKCk7XG4gIGRzdFswXSA9IG1bMTJdO1xuICBkc3RbMV0gPSBtWzEzXTtcbiAgZHN0WzJdID0gbVsxNF07XG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogUmV0dXJucyBhbiBheGlzIG9mIGEgNHg0IG1hdHJpeCBhcyBhIHZlY3RvciB3aXRoIDMgZW50cmllc1xuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBtIFRoZSBtYXRyaXguXG4gKiBAcGFyYW0ge251bWJlcn0gYXhpcyBUaGUgYXhpcyAwID0geCwgMSA9IHksIDIgPSB6O1xuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gW2RzdF0gdmVjdG9yLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gVGhlIGF4aXMgY29tcG9uZW50IG9mIG0uXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuZnVuY3Rpb24gZ2V0QXhpcyhtLCBheGlzLCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IGNyZWF0ZSQxKCk7XG4gIGNvbnN0IG9mZiA9IGF4aXMgKiA0O1xuICBkc3RbMF0gPSBtW29mZiArIDBdO1xuICBkc3RbMV0gPSBtW29mZiArIDFdO1xuICBkc3RbMl0gPSBtW29mZiArIDJdO1xuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIFNldHMgYW4gYXhpcyBvZiBhIDR4NCBtYXRyaXggYXMgYSB2ZWN0b3Igd2l0aCAzIGVudHJpZXNcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gbSBUaGUgbWF0cml4LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSB2IHRoZSBheGlzIHZlY3RvclxuICogQHBhcmFtIHtudW1iZXJ9IGF4aXMgVGhlIGF4aXMgIDAgPSB4LCAxID0geSwgMiA9IHo7XG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIFRoZSBtYXRyaXggdG8gc2V0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gVGhlIG1hdHJpeCB3aXRoIGF4aXMgc2V0LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cbmZ1bmN0aW9uIHNldEF4aXMoYSwgdiwgYXhpcywgZHN0KSB7XG4gIGlmIChkc3QgIT09IGEpIHtcbiAgICBkc3QgPSBjb3B5KGEsIGRzdCk7XG4gIH1cbiAgY29uc3Qgb2ZmID0gYXhpcyAqIDQ7XG4gIGRzdFtvZmYgKyAwXSA9IHZbMF07XG4gIGRzdFtvZmYgKyAxXSA9IHZbMV07XG4gIGRzdFtvZmYgKyAyXSA9IHZbMl07XG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgYSA0LWJ5LTQgcGVyc3BlY3RpdmUgdHJhbnNmb3JtYXRpb24gbWF0cml4IGdpdmVuIHRoZSBhbmd1bGFyIGhlaWdodFxuICogb2YgdGhlIGZydXN0dW0sIHRoZSBhc3BlY3QgcmF0aW8sIGFuZCB0aGUgbmVhciBhbmQgZmFyIGNsaXBwaW5nIHBsYW5lcy4gIFRoZVxuICogYXJndW1lbnRzIGRlZmluZSBhIGZydXN0dW0gZXh0ZW5kaW5nIGluIHRoZSBuZWdhdGl2ZSB6IGRpcmVjdGlvbi4gIFRoZSBnaXZlblxuICogYW5nbGUgaXMgdGhlIHZlcnRpY2FsIGFuZ2xlIG9mIHRoZSBmcnVzdHVtLCBhbmQgdGhlIGhvcml6b250YWwgYW5nbGUgaXNcbiAqIGRldGVybWluZWQgdG8gcHJvZHVjZSB0aGUgZ2l2ZW4gYXNwZWN0IHJhdGlvLiAgVGhlIGFyZ3VtZW50cyBuZWFyIGFuZCBmYXIgYXJlXG4gKiB0aGUgZGlzdGFuY2VzIHRvIHRoZSBuZWFyIGFuZCBmYXIgY2xpcHBpbmcgcGxhbmVzLiAgTm90ZSB0aGF0IG5lYXIgYW5kIGZhclxuICogYXJlIG5vdCB6IGNvb3JkaW5hdGVzLCBidXQgcmF0aGVyIHRoZXkgYXJlIGRpc3RhbmNlcyBhbG9uZyB0aGUgbmVnYXRpdmVcbiAqIHotYXhpcy4gIFRoZSBtYXRyaXggZ2VuZXJhdGVkIHNlbmRzIHRoZSB2aWV3aW5nIGZydXN0dW0gdG8gdGhlIHVuaXQgYm94LlxuICogV2UgYXNzdW1lIGEgdW5pdCBib3ggZXh0ZW5kaW5nIGZyb20gLTEgdG8gMSBpbiB0aGUgeCBhbmQgeSBkaW1lbnNpb25zIGFuZFxuICogZnJvbSAwIHRvIDEgaW4gdGhlIHogZGltZW5zaW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IGZpZWxkT2ZWaWV3WUluUmFkaWFucyBUaGUgY2FtZXJhIGFuZ2xlIGZyb20gdG9wIHRvIGJvdHRvbSAoaW4gcmFkaWFucykuXG4gKiBAcGFyYW0ge251bWJlcn0gYXNwZWN0IFRoZSBhc3BlY3QgcmF0aW8gd2lkdGggLyBoZWlnaHQuXG4gKiBAcGFyYW0ge251bWJlcn0gek5lYXIgVGhlIGRlcHRoIChuZWdhdGl2ZSB6IGNvb3JkaW5hdGUpXG4gKiAgICAgb2YgdGhlIG5lYXIgY2xpcHBpbmcgcGxhbmUuXG4gKiBAcGFyYW0ge251bWJlcn0gekZhciBUaGUgZGVwdGggKG5lZ2F0aXZlIHogY29vcmRpbmF0ZSlcbiAqICAgICBvZiB0aGUgZmFyIGNsaXBwaW5nIHBsYW5lLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBbZHN0XSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBUaGUgcGVyc3BlY3RpdmUgbWF0cml4LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cbmZ1bmN0aW9uIHBlcnNwZWN0aXZlKGZpZWxkT2ZWaWV3WUluUmFkaWFucywgYXNwZWN0LCB6TmVhciwgekZhciwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG5cbiAgY29uc3QgZiA9IE1hdGgudGFuKE1hdGguUEkgKiAwLjUgLSAwLjUgKiBmaWVsZE9mVmlld1lJblJhZGlhbnMpO1xuICBjb25zdCByYW5nZUludiA9IDEuMCAvICh6TmVhciAtIHpGYXIpO1xuXG4gIGRzdFswXSAgPSBmIC8gYXNwZWN0O1xuICBkc3RbMV0gID0gMDtcbiAgZHN0WzJdICA9IDA7XG4gIGRzdFszXSAgPSAwO1xuXG4gIGRzdFs0XSAgPSAwO1xuICBkc3RbNV0gID0gZjtcbiAgZHN0WzZdICA9IDA7XG4gIGRzdFs3XSAgPSAwO1xuXG4gIGRzdFs4XSAgPSAwO1xuICBkc3RbOV0gID0gMDtcbiAgZHN0WzEwXSA9ICh6TmVhciArIHpGYXIpICogcmFuZ2VJbnY7XG4gIGRzdFsxMV0gPSAtMTtcblxuICBkc3RbMTJdID0gMDtcbiAgZHN0WzEzXSA9IDA7XG4gIGRzdFsxNF0gPSB6TmVhciAqIHpGYXIgKiByYW5nZUludiAqIDI7XG4gIGRzdFsxNV0gPSAwO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgYSA0LWJ5LTQgb3J0aG9nb25hbCB0cmFuc2Zvcm1hdGlvbiBtYXRyaXggZ2l2ZW4gdGhlIGxlZnQsIHJpZ2h0LFxuICogYm90dG9tLCBhbmQgdG9wIGRpbWVuc2lvbnMgb2YgdGhlIG5lYXIgY2xpcHBpbmcgcGxhbmUgYXMgd2VsbCBhcyB0aGVcbiAqIG5lYXIgYW5kIGZhciBjbGlwcGluZyBwbGFuZSBkaXN0YW5jZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gbGVmdCBMZWZ0IHNpZGUgb2YgdGhlIG5lYXIgY2xpcHBpbmcgcGxhbmUgdmlld3BvcnQuXG4gKiBAcGFyYW0ge251bWJlcn0gcmlnaHQgUmlnaHQgc2lkZSBvZiB0aGUgbmVhciBjbGlwcGluZyBwbGFuZSB2aWV3cG9ydC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBib3R0b20gQm90dG9tIG9mIHRoZSBuZWFyIGNsaXBwaW5nIHBsYW5lIHZpZXdwb3J0LlxuICogQHBhcmFtIHtudW1iZXJ9IHRvcCBUb3Agb2YgdGhlIG5lYXIgY2xpcHBpbmcgcGxhbmUgdmlld3BvcnQuXG4gKiBAcGFyYW0ge251bWJlcn0gbmVhciBUaGUgZGVwdGggKG5lZ2F0aXZlIHogY29vcmRpbmF0ZSlcbiAqICAgICBvZiB0aGUgbmVhciBjbGlwcGluZyBwbGFuZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmYXIgVGhlIGRlcHRoIChuZWdhdGl2ZSB6IGNvb3JkaW5hdGUpXG4gKiAgICAgb2YgdGhlIGZhciBjbGlwcGluZyBwbGFuZS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gT3V0cHV0IG1hdHJpeC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL200Lk1hdDR9IFRoZSBwZXJzcGVjdGl2ZSBtYXRyaXguXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuZnVuY3Rpb24gb3J0aG8obGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMTYpO1xuXG4gIGRzdFswXSAgPSAyIC8gKHJpZ2h0IC0gbGVmdCk7XG4gIGRzdFsxXSAgPSAwO1xuICBkc3RbMl0gID0gMDtcbiAgZHN0WzNdICA9IDA7XG5cbiAgZHN0WzRdICA9IDA7XG4gIGRzdFs1XSAgPSAyIC8gKHRvcCAtIGJvdHRvbSk7XG4gIGRzdFs2XSAgPSAwO1xuICBkc3RbN10gID0gMDtcblxuICBkc3RbOF0gID0gMDtcbiAgZHN0WzldICA9IDA7XG4gIGRzdFsxMF0gPSAyIC8gKG5lYXIgLSBmYXIpO1xuICBkc3RbMTFdID0gMDtcblxuICBkc3RbMTJdID0gKHJpZ2h0ICsgbGVmdCkgLyAobGVmdCAtIHJpZ2h0KTtcbiAgZHN0WzEzXSA9ICh0b3AgKyBib3R0b20pIC8gKGJvdHRvbSAtIHRvcCk7XG4gIGRzdFsxNF0gPSAoZmFyICsgbmVhcikgLyAobmVhciAtIGZhcik7XG4gIGRzdFsxNV0gPSAxO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgYSA0LWJ5LTQgcGVyc3BlY3RpdmUgdHJhbnNmb3JtYXRpb24gbWF0cml4IGdpdmVuIHRoZSBsZWZ0LCByaWdodCxcbiAqIHRvcCwgYm90dG9tLCBuZWFyIGFuZCBmYXIgY2xpcHBpbmcgcGxhbmVzLiBUaGUgYXJndW1lbnRzIGRlZmluZSBhIGZydXN0dW1cbiAqIGV4dGVuZGluZyBpbiB0aGUgbmVnYXRpdmUgeiBkaXJlY3Rpb24uIFRoZSBhcmd1bWVudHMgbmVhciBhbmQgZmFyIGFyZSB0aGVcbiAqIGRpc3RhbmNlcyB0byB0aGUgbmVhciBhbmQgZmFyIGNsaXBwaW5nIHBsYW5lcy4gTm90ZSB0aGF0IG5lYXIgYW5kIGZhciBhcmUgbm90XG4gKiB6IGNvb3JkaW5hdGVzLCBidXQgcmF0aGVyIHRoZXkgYXJlIGRpc3RhbmNlcyBhbG9uZyB0aGUgbmVnYXRpdmUgei1heGlzLiBUaGVcbiAqIG1hdHJpeCBnZW5lcmF0ZWQgc2VuZHMgdGhlIHZpZXdpbmcgZnJ1c3R1bSB0byB0aGUgdW5pdCBib3guIFdlIGFzc3VtZSBhIHVuaXRcbiAqIGJveCBleHRlbmRpbmcgZnJvbSAtMSB0byAxIGluIHRoZSB4IGFuZCB5IGRpbWVuc2lvbnMgYW5kIGZyb20gMCB0byAxIGluIHRoZSB6XG4gKiBkaW1lbnNpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gbGVmdCBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBsZWZ0IHBsYW5lIG9mIHRoZSBib3guXG4gKiBAcGFyYW0ge251bWJlcn0gcmlnaHQgVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgcmlnaHQgcGxhbmUgb2YgdGhlIGJveC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBib3R0b20gVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgYm90dG9tIHBsYW5lIG9mIHRoZSBib3guXG4gKiBAcGFyYW0ge251bWJlcn0gdG9wIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIHJpZ2h0IHBsYW5lIG9mIHRoZSBib3guXG4gKiBAcGFyYW0ge251bWJlcn0gbmVhciBUaGUgbmVnYXRpdmUgeiBjb29yZGluYXRlIG9mIHRoZSBuZWFyIHBsYW5lIG9mIHRoZSBib3guXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIFRoZSBuZWdhdGl2ZSB6IGNvb3JkaW5hdGUgb2YgdGhlIGZhciBwbGFuZSBvZiB0aGUgYm94LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBbZHN0XSBPdXRwdXQgbWF0cml4LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gVGhlIHBlcnNwZWN0aXZlIHByb2plY3Rpb24gbWF0cml4LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cbmZ1bmN0aW9uIGZydXN0dW0obGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMTYpO1xuXG4gIGNvbnN0IGR4ID0gKHJpZ2h0IC0gbGVmdCk7XG4gIGNvbnN0IGR5ID0gKHRvcCAtIGJvdHRvbSk7XG4gIGNvbnN0IGR6ID0gKG5lYXIgLSBmYXIpO1xuXG4gIGRzdFsgMF0gPSAyICogbmVhciAvIGR4O1xuICBkc3RbIDFdID0gMDtcbiAgZHN0WyAyXSA9IDA7XG4gIGRzdFsgM10gPSAwO1xuICBkc3RbIDRdID0gMDtcbiAgZHN0WyA1XSA9IDIgKiBuZWFyIC8gZHk7XG4gIGRzdFsgNl0gPSAwO1xuICBkc3RbIDddID0gMDtcbiAgZHN0WyA4XSA9IChsZWZ0ICsgcmlnaHQpIC8gZHg7XG4gIGRzdFsgOV0gPSAodG9wICsgYm90dG9tKSAvIGR5O1xuICBkc3RbMTBdID0gZmFyIC8gZHo7XG4gIGRzdFsxMV0gPSAtMTtcbiAgZHN0WzEyXSA9IDA7XG4gIGRzdFsxM10gPSAwO1xuICBkc3RbMTRdID0gbmVhciAqIGZhciAvIGR6O1xuICBkc3RbMTVdID0gMDtcblxuICByZXR1cm4gZHN0O1xufVxuXG5sZXQgeEF4aXM7XG5sZXQgeUF4aXM7XG5sZXQgekF4aXM7XG5cbi8qKlxuICogQ29tcHV0ZXMgYSA0LWJ5LTQgbG9vay1hdCB0cmFuc2Zvcm1hdGlvbi5cbiAqXG4gKiBUaGlzIGlzIGEgbWF0cml4IHdoaWNoIHBvc2l0aW9ucyB0aGUgY2FtZXJhIGl0c2VsZi4gSWYgeW91IHdhbnRcbiAqIGEgdmlldyBtYXRyaXggKGEgbWF0cml4IHdoaWNoIG1vdmVzIHRoaW5ncyBpbiBmcm9udCBvZiB0aGUgY2FtZXJhKVxuICogdGFrZSB0aGUgaW52ZXJzZSBvZiB0aGlzLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gZXllIFRoZSBwb3NpdGlvbiBvZiB0aGUgZXllLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSB0YXJnZXQgVGhlIHBvc2l0aW9uIG1lYW50IHRvIGJlIHZpZXdlZC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gdXAgQSB2ZWN0b3IgcG9pbnRpbmcgdXAuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL200Lk1hdDR9IFRoZSBsb29rLWF0IG1hdHJpeC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5mdW5jdGlvbiBsb29rQXQoZXllLCB0YXJnZXQsIHVwLCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBNYXRUeXBlKDE2KTtcblxuICB4QXhpcyA9IHhBeGlzIHx8IGNyZWF0ZSQxKCk7XG4gIHlBeGlzID0geUF4aXMgfHwgY3JlYXRlJDEoKTtcbiAgekF4aXMgPSB6QXhpcyB8fCBjcmVhdGUkMSgpO1xuXG4gIG5vcm1hbGl6ZShcbiAgICAgIHN1YnRyYWN0KGV5ZSwgdGFyZ2V0LCB6QXhpcyksIHpBeGlzKTtcbiAgbm9ybWFsaXplKGNyb3NzKHVwLCB6QXhpcywgeEF4aXMpLCB4QXhpcyk7XG4gIG5vcm1hbGl6ZShjcm9zcyh6QXhpcywgeEF4aXMsIHlBeGlzKSwgeUF4aXMpO1xuXG4gIGRzdFsgMF0gPSB4QXhpc1swXTtcbiAgZHN0WyAxXSA9IHhBeGlzWzFdO1xuICBkc3RbIDJdID0geEF4aXNbMl07XG4gIGRzdFsgM10gPSAwO1xuICBkc3RbIDRdID0geUF4aXNbMF07XG4gIGRzdFsgNV0gPSB5QXhpc1sxXTtcbiAgZHN0WyA2XSA9IHlBeGlzWzJdO1xuICBkc3RbIDddID0gMDtcbiAgZHN0WyA4XSA9IHpBeGlzWzBdO1xuICBkc3RbIDldID0gekF4aXNbMV07XG4gIGRzdFsxMF0gPSB6QXhpc1syXTtcbiAgZHN0WzExXSA9IDA7XG4gIGRzdFsxMl0gPSBleWVbMF07XG4gIGRzdFsxM10gPSBleWVbMV07XG4gIGRzdFsxNF0gPSBleWVbMl07XG4gIGRzdFsxNV0gPSAxO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIDQtYnktNCBtYXRyaXggd2hpY2ggdHJhbnNsYXRlcyBieSB0aGUgZ2l2ZW4gdmVjdG9yIHYuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IHYgVGhlIHZlY3RvciBieVxuICogICAgIHdoaWNoIHRvIHRyYW5zbGF0ZS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gVGhlIHRyYW5zbGF0aW9uIG1hdHJpeC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5mdW5jdGlvbiB0cmFuc2xhdGlvbih2LCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBNYXRUeXBlKDE2KTtcblxuICBkc3RbIDBdID0gMTtcbiAgZHN0WyAxXSA9IDA7XG4gIGRzdFsgMl0gPSAwO1xuICBkc3RbIDNdID0gMDtcbiAgZHN0WyA0XSA9IDA7XG4gIGRzdFsgNV0gPSAxO1xuICBkc3RbIDZdID0gMDtcbiAgZHN0WyA3XSA9IDA7XG4gIGRzdFsgOF0gPSAwO1xuICBkc3RbIDldID0gMDtcbiAgZHN0WzEwXSA9IDE7XG4gIGRzdFsxMV0gPSAwO1xuICBkc3RbMTJdID0gdlswXTtcbiAgZHN0WzEzXSA9IHZbMV07XG4gIGRzdFsxNF0gPSB2WzJdO1xuICBkc3RbMTVdID0gMTtcbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBnaXZlbiA0LWJ5LTQgbWF0cml4IGJ5IHRoZSBnaXZlbiB2ZWN0b3Igdi5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gbSBUaGUgbWF0cml4LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSB2IFRoZSB2ZWN0b3IgYnlcbiAqICAgICB3aGljaCB0byB0cmFuc2xhdGUuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL200Lk1hdDR9IFRoZSB0cmFuc2xhdGVkIG1hdHJpeC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5mdW5jdGlvbiB0cmFuc2xhdGUobSwgdiwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG5cbiAgY29uc3QgdjAgPSB2WzBdO1xuICBjb25zdCB2MSA9IHZbMV07XG4gIGNvbnN0IHYyID0gdlsyXTtcbiAgY29uc3QgbTAwID0gbVswXTtcbiAgY29uc3QgbTAxID0gbVsxXTtcbiAgY29uc3QgbTAyID0gbVsyXTtcbiAgY29uc3QgbTAzID0gbVszXTtcbiAgY29uc3QgbTEwID0gbVsxICogNCArIDBdO1xuICBjb25zdCBtMTEgPSBtWzEgKiA0ICsgMV07XG4gIGNvbnN0IG0xMiA9IG1bMSAqIDQgKyAyXTtcbiAgY29uc3QgbTEzID0gbVsxICogNCArIDNdO1xuICBjb25zdCBtMjAgPSBtWzIgKiA0ICsgMF07XG4gIGNvbnN0IG0yMSA9IG1bMiAqIDQgKyAxXTtcbiAgY29uc3QgbTIyID0gbVsyICogNCArIDJdO1xuICBjb25zdCBtMjMgPSBtWzIgKiA0ICsgM107XG4gIGNvbnN0IG0zMCA9IG1bMyAqIDQgKyAwXTtcbiAgY29uc3QgbTMxID0gbVszICogNCArIDFdO1xuICBjb25zdCBtMzIgPSBtWzMgKiA0ICsgMl07XG4gIGNvbnN0IG0zMyA9IG1bMyAqIDQgKyAzXTtcblxuICBpZiAobSAhPT0gZHN0KSB7XG4gICAgZHN0WyAwXSA9IG0wMDtcbiAgICBkc3RbIDFdID0gbTAxO1xuICAgIGRzdFsgMl0gPSBtMDI7XG4gICAgZHN0WyAzXSA9IG0wMztcbiAgICBkc3RbIDRdID0gbTEwO1xuICAgIGRzdFsgNV0gPSBtMTE7XG4gICAgZHN0WyA2XSA9IG0xMjtcbiAgICBkc3RbIDddID0gbTEzO1xuICAgIGRzdFsgOF0gPSBtMjA7XG4gICAgZHN0WyA5XSA9IG0yMTtcbiAgICBkc3RbMTBdID0gbTIyO1xuICAgIGRzdFsxMV0gPSBtMjM7XG4gIH1cblxuICBkc3RbMTJdID0gbTAwICogdjAgKyBtMTAgKiB2MSArIG0yMCAqIHYyICsgbTMwO1xuICBkc3RbMTNdID0gbTAxICogdjAgKyBtMTEgKiB2MSArIG0yMSAqIHYyICsgbTMxO1xuICBkc3RbMTRdID0gbTAyICogdjAgKyBtMTIgKiB2MSArIG0yMiAqIHYyICsgbTMyO1xuICBkc3RbMTVdID0gbTAzICogdjAgKyBtMTMgKiB2MSArIG0yMyAqIHYyICsgbTMzO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIDQtYnktNCBtYXRyaXggd2hpY2ggcm90YXRlcyBhcm91bmQgdGhlIHgtYXhpcyBieSB0aGUgZ2l2ZW4gYW5nbGUuXG4gKiBAcGFyYW0ge251bWJlcn0gYW5nbGVJblJhZGlhbnMgVGhlIGFuZ2xlIGJ5IHdoaWNoIHRvIHJvdGF0ZSAoaW4gcmFkaWFucykuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL200Lk1hdDR9IFRoZSByb3RhdGlvbiBtYXRyaXguXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuZnVuY3Rpb24gcm90YXRpb25YKGFuZ2xlSW5SYWRpYW5zLCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBNYXRUeXBlKDE2KTtcblxuICBjb25zdCBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICBjb25zdCBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuXG4gIGRzdFsgMF0gPSAxO1xuICBkc3RbIDFdID0gMDtcbiAgZHN0WyAyXSA9IDA7XG4gIGRzdFsgM10gPSAwO1xuICBkc3RbIDRdID0gMDtcbiAgZHN0WyA1XSA9IGM7XG4gIGRzdFsgNl0gPSBzO1xuICBkc3RbIDddID0gMDtcbiAgZHN0WyA4XSA9IDA7XG4gIGRzdFsgOV0gPSAtcztcbiAgZHN0WzEwXSA9IGM7XG4gIGRzdFsxMV0gPSAwO1xuICBkc3RbMTJdID0gMDtcbiAgZHN0WzEzXSA9IDA7XG4gIGRzdFsxNF0gPSAwO1xuICBkc3RbMTVdID0gMTtcblxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIFJvdGF0ZXMgdGhlIGdpdmVuIDQtYnktNCBtYXRyaXggYXJvdW5kIHRoZSB4LWF4aXMgYnkgdGhlIGdpdmVuXG4gKiBhbmdsZS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gbSBUaGUgbWF0cml4LlxuICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlSW5SYWRpYW5zIFRoZSBhbmdsZSBieSB3aGljaCB0byByb3RhdGUgKGluIHJhZGlhbnMpLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBbZHN0XSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBUaGUgcm90YXRlZCBtYXRyaXguXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuZnVuY3Rpb24gcm90YXRlWChtLCBhbmdsZUluUmFkaWFucywgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG5cbiAgY29uc3QgbTEwID0gbVs0XTtcbiAgY29uc3QgbTExID0gbVs1XTtcbiAgY29uc3QgbTEyID0gbVs2XTtcbiAgY29uc3QgbTEzID0gbVs3XTtcbiAgY29uc3QgbTIwID0gbVs4XTtcbiAgY29uc3QgbTIxID0gbVs5XTtcbiAgY29uc3QgbTIyID0gbVsxMF07XG4gIGNvbnN0IG0yMyA9IG1bMTFdO1xuICBjb25zdCBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICBjb25zdCBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuXG4gIGRzdFs0XSAgPSBjICogbTEwICsgcyAqIG0yMDtcbiAgZHN0WzVdICA9IGMgKiBtMTEgKyBzICogbTIxO1xuICBkc3RbNl0gID0gYyAqIG0xMiArIHMgKiBtMjI7XG4gIGRzdFs3XSAgPSBjICogbTEzICsgcyAqIG0yMztcbiAgZHN0WzhdICA9IGMgKiBtMjAgLSBzICogbTEwO1xuICBkc3RbOV0gID0gYyAqIG0yMSAtIHMgKiBtMTE7XG4gIGRzdFsxMF0gPSBjICogbTIyIC0gcyAqIG0xMjtcbiAgZHN0WzExXSA9IGMgKiBtMjMgLSBzICogbTEzO1xuXG4gIGlmIChtICE9PSBkc3QpIHtcbiAgICBkc3RbIDBdID0gbVsgMF07XG4gICAgZHN0WyAxXSA9IG1bIDFdO1xuICAgIGRzdFsgMl0gPSBtWyAyXTtcbiAgICBkc3RbIDNdID0gbVsgM107XG4gICAgZHN0WzEyXSA9IG1bMTJdO1xuICAgIGRzdFsxM10gPSBtWzEzXTtcbiAgICBkc3RbMTRdID0gbVsxNF07XG4gICAgZHN0WzE1XSA9IG1bMTVdO1xuICB9XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgNC1ieS00IG1hdHJpeCB3aGljaCByb3RhdGVzIGFyb3VuZCB0aGUgeS1heGlzIGJ5IHRoZSBnaXZlbiBhbmdsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZUluUmFkaWFucyBUaGUgYW5nbGUgYnkgd2hpY2ggdG8gcm90YXRlIChpbiByYWRpYW5zKS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gVGhlIHJvdGF0aW9uIG1hdHJpeC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5mdW5jdGlvbiByb3RhdGlvblkoYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMTYpO1xuXG4gIGNvbnN0IGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gIGNvbnN0IHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG5cbiAgZHN0WyAwXSA9IGM7XG4gIGRzdFsgMV0gPSAwO1xuICBkc3RbIDJdID0gLXM7XG4gIGRzdFsgM10gPSAwO1xuICBkc3RbIDRdID0gMDtcbiAgZHN0WyA1XSA9IDE7XG4gIGRzdFsgNl0gPSAwO1xuICBkc3RbIDddID0gMDtcbiAgZHN0WyA4XSA9IHM7XG4gIGRzdFsgOV0gPSAwO1xuICBkc3RbMTBdID0gYztcbiAgZHN0WzExXSA9IDA7XG4gIGRzdFsxMl0gPSAwO1xuICBkc3RbMTNdID0gMDtcbiAgZHN0WzE0XSA9IDA7XG4gIGRzdFsxNV0gPSAxO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogUm90YXRlcyB0aGUgZ2l2ZW4gNC1ieS00IG1hdHJpeCBhcm91bmQgdGhlIHktYXhpcyBieSB0aGUgZ2l2ZW5cbiAqIGFuZ2xlLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBtIFRoZSBtYXRyaXguXG4gKiBAcGFyYW0ge251bWJlcn0gYW5nbGVJblJhZGlhbnMgVGhlIGFuZ2xlIGJ5IHdoaWNoIHRvIHJvdGF0ZSAoaW4gcmFkaWFucykuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL200Lk1hdDR9IFRoZSByb3RhdGVkIG1hdHJpeC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5mdW5jdGlvbiByb3RhdGVZKG0sIGFuZ2xlSW5SYWRpYW5zLCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBNYXRUeXBlKDE2KTtcblxuICBjb25zdCBtMDAgPSBtWzAgKiA0ICsgMF07XG4gIGNvbnN0IG0wMSA9IG1bMCAqIDQgKyAxXTtcbiAgY29uc3QgbTAyID0gbVswICogNCArIDJdO1xuICBjb25zdCBtMDMgPSBtWzAgKiA0ICsgM107XG4gIGNvbnN0IG0yMCA9IG1bMiAqIDQgKyAwXTtcbiAgY29uc3QgbTIxID0gbVsyICogNCArIDFdO1xuICBjb25zdCBtMjIgPSBtWzIgKiA0ICsgMl07XG4gIGNvbnN0IG0yMyA9IG1bMiAqIDQgKyAzXTtcbiAgY29uc3QgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgY29uc3QgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcblxuICBkc3RbIDBdID0gYyAqIG0wMCAtIHMgKiBtMjA7XG4gIGRzdFsgMV0gPSBjICogbTAxIC0gcyAqIG0yMTtcbiAgZHN0WyAyXSA9IGMgKiBtMDIgLSBzICogbTIyO1xuICBkc3RbIDNdID0gYyAqIG0wMyAtIHMgKiBtMjM7XG4gIGRzdFsgOF0gPSBjICogbTIwICsgcyAqIG0wMDtcbiAgZHN0WyA5XSA9IGMgKiBtMjEgKyBzICogbTAxO1xuICBkc3RbMTBdID0gYyAqIG0yMiArIHMgKiBtMDI7XG4gIGRzdFsxMV0gPSBjICogbTIzICsgcyAqIG0wMztcblxuICBpZiAobSAhPT0gZHN0KSB7XG4gICAgZHN0WyA0XSA9IG1bIDRdO1xuICAgIGRzdFsgNV0gPSBtWyA1XTtcbiAgICBkc3RbIDZdID0gbVsgNl07XG4gICAgZHN0WyA3XSA9IG1bIDddO1xuICAgIGRzdFsxMl0gPSBtWzEyXTtcbiAgICBkc3RbMTNdID0gbVsxM107XG4gICAgZHN0WzE0XSA9IG1bMTRdO1xuICAgIGRzdFsxNV0gPSBtWzE1XTtcbiAgfVxuXG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIDQtYnktNCBtYXRyaXggd2hpY2ggcm90YXRlcyBhcm91bmQgdGhlIHotYXhpcyBieSB0aGUgZ2l2ZW4gYW5nbGUuXG4gKiBAcGFyYW0ge251bWJlcn0gYW5nbGVJblJhZGlhbnMgVGhlIGFuZ2xlIGJ5IHdoaWNoIHRvIHJvdGF0ZSAoaW4gcmFkaWFucykuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL200Lk1hdDR9IFRoZSByb3RhdGlvbiBtYXRyaXguXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuZnVuY3Rpb24gcm90YXRpb25aKGFuZ2xlSW5SYWRpYW5zLCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBNYXRUeXBlKDE2KTtcblxuICBjb25zdCBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICBjb25zdCBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuXG4gIGRzdFsgMF0gPSBjO1xuICBkc3RbIDFdID0gcztcbiAgZHN0WyAyXSA9IDA7XG4gIGRzdFsgM10gPSAwO1xuICBkc3RbIDRdID0gLXM7XG4gIGRzdFsgNV0gPSBjO1xuICBkc3RbIDZdID0gMDtcbiAgZHN0WyA3XSA9IDA7XG4gIGRzdFsgOF0gPSAwO1xuICBkc3RbIDldID0gMDtcbiAgZHN0WzEwXSA9IDE7XG4gIGRzdFsxMV0gPSAwO1xuICBkc3RbMTJdID0gMDtcbiAgZHN0WzEzXSA9IDA7XG4gIGRzdFsxNF0gPSAwO1xuICBkc3RbMTVdID0gMTtcblxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIFJvdGF0ZXMgdGhlIGdpdmVuIDQtYnktNCBtYXRyaXggYXJvdW5kIHRoZSB6LWF4aXMgYnkgdGhlIGdpdmVuXG4gKiBhbmdsZS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gbSBUaGUgbWF0cml4LlxuICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlSW5SYWRpYW5zIFRoZSBhbmdsZSBieSB3aGljaCB0byByb3RhdGUgKGluIHJhZGlhbnMpLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBbZHN0XSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBUaGUgcm90YXRlZCBtYXRyaXguXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuZnVuY3Rpb24gcm90YXRlWihtLCBhbmdsZUluUmFkaWFucywgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG5cbiAgY29uc3QgbTAwID0gbVswICogNCArIDBdO1xuICBjb25zdCBtMDEgPSBtWzAgKiA0ICsgMV07XG4gIGNvbnN0IG0wMiA9IG1bMCAqIDQgKyAyXTtcbiAgY29uc3QgbTAzID0gbVswICogNCArIDNdO1xuICBjb25zdCBtMTAgPSBtWzEgKiA0ICsgMF07XG4gIGNvbnN0IG0xMSA9IG1bMSAqIDQgKyAxXTtcbiAgY29uc3QgbTEyID0gbVsxICogNCArIDJdO1xuICBjb25zdCBtMTMgPSBtWzEgKiA0ICsgM107XG4gIGNvbnN0IGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gIGNvbnN0IHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG5cbiAgZHN0WyAwXSA9IGMgKiBtMDAgKyBzICogbTEwO1xuICBkc3RbIDFdID0gYyAqIG0wMSArIHMgKiBtMTE7XG4gIGRzdFsgMl0gPSBjICogbTAyICsgcyAqIG0xMjtcbiAgZHN0WyAzXSA9IGMgKiBtMDMgKyBzICogbTEzO1xuICBkc3RbIDRdID0gYyAqIG0xMCAtIHMgKiBtMDA7XG4gIGRzdFsgNV0gPSBjICogbTExIC0gcyAqIG0wMTtcbiAgZHN0WyA2XSA9IGMgKiBtMTIgLSBzICogbTAyO1xuICBkc3RbIDddID0gYyAqIG0xMyAtIHMgKiBtMDM7XG5cbiAgaWYgKG0gIT09IGRzdCkge1xuICAgIGRzdFsgOF0gPSBtWyA4XTtcbiAgICBkc3RbIDldID0gbVsgOV07XG4gICAgZHN0WzEwXSA9IG1bMTBdO1xuICAgIGRzdFsxMV0gPSBtWzExXTtcbiAgICBkc3RbMTJdID0gbVsxMl07XG4gICAgZHN0WzEzXSA9IG1bMTNdO1xuICAgIGRzdFsxNF0gPSBtWzE0XTtcbiAgICBkc3RbMTVdID0gbVsxNV07XG4gIH1cblxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSA0LWJ5LTQgbWF0cml4IHdoaWNoIHJvdGF0ZXMgYXJvdW5kIHRoZSBnaXZlbiBheGlzIGJ5IHRoZSBnaXZlblxuICogYW5nbGUuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IGF4aXMgVGhlIGF4aXNcbiAqICAgICBhYm91dCB3aGljaCB0byByb3RhdGUuXG4gKiBAcGFyYW0ge251bWJlcn0gYW5nbGVJblJhZGlhbnMgVGhlIGFuZ2xlIGJ5IHdoaWNoIHRvIHJvdGF0ZSAoaW4gcmFkaWFucykuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL200Lk1hdDR9IEEgbWF0cml4IHdoaWNoIHJvdGF0ZXMgYW5nbGUgcmFkaWFuc1xuICogICAgIGFyb3VuZCB0aGUgYXhpcy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5mdW5jdGlvbiBheGlzUm90YXRpb24oYXhpcywgYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMTYpO1xuXG4gIGxldCB4ID0gYXhpc1swXTtcbiAgbGV0IHkgPSBheGlzWzFdO1xuICBsZXQgeiA9IGF4aXNbMl07XG4gIGNvbnN0IG4gPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcbiAgeCAvPSBuO1xuICB5IC89IG47XG4gIHogLz0gbjtcbiAgY29uc3QgeHggPSB4ICogeDtcbiAgY29uc3QgeXkgPSB5ICogeTtcbiAgY29uc3QgenogPSB6ICogejtcbiAgY29uc3QgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgY29uc3QgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgY29uc3Qgb25lTWludXNDb3NpbmUgPSAxIC0gYztcblxuICBkc3RbIDBdID0geHggKyAoMSAtIHh4KSAqIGM7XG4gIGRzdFsgMV0gPSB4ICogeSAqIG9uZU1pbnVzQ29zaW5lICsgeiAqIHM7XG4gIGRzdFsgMl0gPSB4ICogeiAqIG9uZU1pbnVzQ29zaW5lIC0geSAqIHM7XG4gIGRzdFsgM10gPSAwO1xuICBkc3RbIDRdID0geCAqIHkgKiBvbmVNaW51c0Nvc2luZSAtIHogKiBzO1xuICBkc3RbIDVdID0geXkgKyAoMSAtIHl5KSAqIGM7XG4gIGRzdFsgNl0gPSB5ICogeiAqIG9uZU1pbnVzQ29zaW5lICsgeCAqIHM7XG4gIGRzdFsgN10gPSAwO1xuICBkc3RbIDhdID0geCAqIHogKiBvbmVNaW51c0Nvc2luZSArIHkgKiBzO1xuICBkc3RbIDldID0geSAqIHogKiBvbmVNaW51c0Nvc2luZSAtIHggKiBzO1xuICBkc3RbMTBdID0genogKyAoMSAtIHp6KSAqIGM7XG4gIGRzdFsxMV0gPSAwO1xuICBkc3RbMTJdID0gMDtcbiAgZHN0WzEzXSA9IDA7XG4gIGRzdFsxNF0gPSAwO1xuICBkc3RbMTVdID0gMTtcblxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIFJvdGF0ZXMgdGhlIGdpdmVuIDQtYnktNCBtYXRyaXggYXJvdW5kIHRoZSBnaXZlbiBheGlzIGJ5IHRoZVxuICogZ2l2ZW4gYW5nbGUuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IG0gVGhlIG1hdHJpeC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gYXhpcyBUaGUgYXhpc1xuICogICAgIGFib3V0IHdoaWNoIHRvIHJvdGF0ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZUluUmFkaWFucyBUaGUgYW5nbGUgYnkgd2hpY2ggdG8gcm90YXRlIChpbiByYWRpYW5zKS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gVGhlIHJvdGF0ZWQgbWF0cml4LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cbmZ1bmN0aW9uIGF4aXNSb3RhdGUobSwgYXhpcywgYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMTYpO1xuXG4gIGxldCB4ID0gYXhpc1swXTtcbiAgbGV0IHkgPSBheGlzWzFdO1xuICBsZXQgeiA9IGF4aXNbMl07XG4gIGNvbnN0IG4gPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcbiAgeCAvPSBuO1xuICB5IC89IG47XG4gIHogLz0gbjtcbiAgY29uc3QgeHggPSB4ICogeDtcbiAgY29uc3QgeXkgPSB5ICogeTtcbiAgY29uc3QgenogPSB6ICogejtcbiAgY29uc3QgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgY29uc3QgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgY29uc3Qgb25lTWludXNDb3NpbmUgPSAxIC0gYztcblxuICBjb25zdCByMDAgPSB4eCArICgxIC0geHgpICogYztcbiAgY29uc3QgcjAxID0geCAqIHkgKiBvbmVNaW51c0Nvc2luZSArIHogKiBzO1xuICBjb25zdCByMDIgPSB4ICogeiAqIG9uZU1pbnVzQ29zaW5lIC0geSAqIHM7XG4gIGNvbnN0IHIxMCA9IHggKiB5ICogb25lTWludXNDb3NpbmUgLSB6ICogcztcbiAgY29uc3QgcjExID0geXkgKyAoMSAtIHl5KSAqIGM7XG4gIGNvbnN0IHIxMiA9IHkgKiB6ICogb25lTWludXNDb3NpbmUgKyB4ICogcztcbiAgY29uc3QgcjIwID0geCAqIHogKiBvbmVNaW51c0Nvc2luZSArIHkgKiBzO1xuICBjb25zdCByMjEgPSB5ICogeiAqIG9uZU1pbnVzQ29zaW5lIC0geCAqIHM7XG4gIGNvbnN0IHIyMiA9IHp6ICsgKDEgLSB6eikgKiBjO1xuXG4gIGNvbnN0IG0wMCA9IG1bMF07XG4gIGNvbnN0IG0wMSA9IG1bMV07XG4gIGNvbnN0IG0wMiA9IG1bMl07XG4gIGNvbnN0IG0wMyA9IG1bM107XG4gIGNvbnN0IG0xMCA9IG1bNF07XG4gIGNvbnN0IG0xMSA9IG1bNV07XG4gIGNvbnN0IG0xMiA9IG1bNl07XG4gIGNvbnN0IG0xMyA9IG1bN107XG4gIGNvbnN0IG0yMCA9IG1bOF07XG4gIGNvbnN0IG0yMSA9IG1bOV07XG4gIGNvbnN0IG0yMiA9IG1bMTBdO1xuICBjb25zdCBtMjMgPSBtWzExXTtcblxuICBkc3RbIDBdID0gcjAwICogbTAwICsgcjAxICogbTEwICsgcjAyICogbTIwO1xuICBkc3RbIDFdID0gcjAwICogbTAxICsgcjAxICogbTExICsgcjAyICogbTIxO1xuICBkc3RbIDJdID0gcjAwICogbTAyICsgcjAxICogbTEyICsgcjAyICogbTIyO1xuICBkc3RbIDNdID0gcjAwICogbTAzICsgcjAxICogbTEzICsgcjAyICogbTIzO1xuICBkc3RbIDRdID0gcjEwICogbTAwICsgcjExICogbTEwICsgcjEyICogbTIwO1xuICBkc3RbIDVdID0gcjEwICogbTAxICsgcjExICogbTExICsgcjEyICogbTIxO1xuICBkc3RbIDZdID0gcjEwICogbTAyICsgcjExICogbTEyICsgcjEyICogbTIyO1xuICBkc3RbIDddID0gcjEwICogbTAzICsgcjExICogbTEzICsgcjEyICogbTIzO1xuICBkc3RbIDhdID0gcjIwICogbTAwICsgcjIxICogbTEwICsgcjIyICogbTIwO1xuICBkc3RbIDldID0gcjIwICogbTAxICsgcjIxICogbTExICsgcjIyICogbTIxO1xuICBkc3RbMTBdID0gcjIwICogbTAyICsgcjIxICogbTEyICsgcjIyICogbTIyO1xuICBkc3RbMTFdID0gcjIwICogbTAzICsgcjIxICogbTEzICsgcjIyICogbTIzO1xuXG4gIGlmIChtICE9PSBkc3QpIHtcbiAgICBkc3RbMTJdID0gbVsxMl07XG4gICAgZHN0WzEzXSA9IG1bMTNdO1xuICAgIGRzdFsxNF0gPSBtWzE0XTtcbiAgICBkc3RbMTVdID0gbVsxNV07XG4gIH1cblxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSA0LWJ5LTQgbWF0cml4IHdoaWNoIHNjYWxlcyBpbiBlYWNoIGRpbWVuc2lvbiBieSBhbiBhbW91bnQgZ2l2ZW4gYnlcbiAqIHRoZSBjb3JyZXNwb25kaW5nIGVudHJ5IGluIHRoZSBnaXZlbiB2ZWN0b3I7IGFzc3VtZXMgdGhlIHZlY3RvciBoYXMgdGhyZWVcbiAqIGVudHJpZXMuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IHYgQSB2ZWN0b3Igb2ZcbiAqICAgICB0aHJlZSBlbnRyaWVzIHNwZWNpZnlpbmcgdGhlIGZhY3RvciBieSB3aGljaCB0byBzY2FsZSBpbiBlYWNoIGRpbWVuc2lvbi5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gVGhlIHNjYWxpbmcgbWF0cml4LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cbmZ1bmN0aW9uIHNjYWxpbmcodiwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG5cbiAgZHN0WyAwXSA9IHZbMF07XG4gIGRzdFsgMV0gPSAwO1xuICBkc3RbIDJdID0gMDtcbiAgZHN0WyAzXSA9IDA7XG4gIGRzdFsgNF0gPSAwO1xuICBkc3RbIDVdID0gdlsxXTtcbiAgZHN0WyA2XSA9IDA7XG4gIGRzdFsgN10gPSAwO1xuICBkc3RbIDhdID0gMDtcbiAgZHN0WyA5XSA9IDA7XG4gIGRzdFsxMF0gPSB2WzJdO1xuICBkc3RbMTFdID0gMDtcbiAgZHN0WzEyXSA9IDA7XG4gIGRzdFsxM10gPSAwO1xuICBkc3RbMTRdID0gMDtcbiAgZHN0WzE1XSA9IDE7XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBTY2FsZXMgdGhlIGdpdmVuIDQtYnktNCBtYXRyaXggaW4gZWFjaCBkaW1lbnNpb24gYnkgYW4gYW1vdW50XG4gKiBnaXZlbiBieSB0aGUgY29ycmVzcG9uZGluZyBlbnRyeSBpbiB0aGUgZ2l2ZW4gdmVjdG9yOyBhc3N1bWVzIHRoZSB2ZWN0b3IgaGFzXG4gKiB0aHJlZSBlbnRyaWVzLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBtIFRoZSBtYXRyaXggdG8gYmUgbW9kaWZpZWQuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IHYgQSB2ZWN0b3Igb2YgdGhyZWUgZW50cmllcyBzcGVjaWZ5aW5nIHRoZVxuICogICAgIGZhY3RvciBieSB3aGljaCB0byBzY2FsZSBpbiBlYWNoIGRpbWVuc2lvbi5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gVGhlIHNjYWxlZCBtYXRyaXguXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuZnVuY3Rpb24gc2NhbGUobSwgdiwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG5cbiAgY29uc3QgdjAgPSB2WzBdO1xuICBjb25zdCB2MSA9IHZbMV07XG4gIGNvbnN0IHYyID0gdlsyXTtcblxuICBkc3RbIDBdID0gdjAgKiBtWzAgKiA0ICsgMF07XG4gIGRzdFsgMV0gPSB2MCAqIG1bMCAqIDQgKyAxXTtcbiAgZHN0WyAyXSA9IHYwICogbVswICogNCArIDJdO1xuICBkc3RbIDNdID0gdjAgKiBtWzAgKiA0ICsgM107XG4gIGRzdFsgNF0gPSB2MSAqIG1bMSAqIDQgKyAwXTtcbiAgZHN0WyA1XSA9IHYxICogbVsxICogNCArIDFdO1xuICBkc3RbIDZdID0gdjEgKiBtWzEgKiA0ICsgMl07XG4gIGRzdFsgN10gPSB2MSAqIG1bMSAqIDQgKyAzXTtcbiAgZHN0WyA4XSA9IHYyICogbVsyICogNCArIDBdO1xuICBkc3RbIDldID0gdjIgKiBtWzIgKiA0ICsgMV07XG4gIGRzdFsxMF0gPSB2MiAqIG1bMiAqIDQgKyAyXTtcbiAgZHN0WzExXSA9IHYyICogbVsyICogNCArIDNdO1xuXG4gIGlmIChtICE9PSBkc3QpIHtcbiAgICBkc3RbMTJdID0gbVsxMl07XG4gICAgZHN0WzEzXSA9IG1bMTNdO1xuICAgIGRzdFsxNF0gPSBtWzE0XTtcbiAgICBkc3RbMTVdID0gbVsxNV07XG4gIH1cblxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIFRha2VzIGEgNC1ieS00IG1hdHJpeCBhbmQgYSB2ZWN0b3Igd2l0aCAzIGVudHJpZXMsXG4gKiBpbnRlcnByZXRzIHRoZSB2ZWN0b3IgYXMgYSBwb2ludCwgdHJhbnNmb3JtcyB0aGF0IHBvaW50IGJ5IHRoZSBtYXRyaXgsIGFuZFxuICogcmV0dXJucyB0aGUgcmVzdWx0IGFzIGEgdmVjdG9yIHdpdGggMyBlbnRyaWVzLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBtIFRoZSBtYXRyaXguXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IHYgVGhlIHBvaW50LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBbZHN0XSBvcHRpb25hbCB2ZWMzIHRvIHN0b3JlIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFRoZSB0cmFuc2Zvcm1lZCBwb2ludC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5mdW5jdGlvbiB0cmFuc2Zvcm1Qb2ludChtLCB2LCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IGNyZWF0ZSQxKCk7XG4gIGNvbnN0IHYwID0gdlswXTtcbiAgY29uc3QgdjEgPSB2WzFdO1xuICBjb25zdCB2MiA9IHZbMl07XG4gIGNvbnN0IGQgPSB2MCAqIG1bMCAqIDQgKyAzXSArIHYxICogbVsxICogNCArIDNdICsgdjIgKiBtWzIgKiA0ICsgM10gKyBtWzMgKiA0ICsgM107XG5cbiAgZHN0WzBdID0gKHYwICogbVswICogNCArIDBdICsgdjEgKiBtWzEgKiA0ICsgMF0gKyB2MiAqIG1bMiAqIDQgKyAwXSArIG1bMyAqIDQgKyAwXSkgLyBkO1xuICBkc3RbMV0gPSAodjAgKiBtWzAgKiA0ICsgMV0gKyB2MSAqIG1bMSAqIDQgKyAxXSArIHYyICogbVsyICogNCArIDFdICsgbVszICogNCArIDFdKSAvIGQ7XG4gIGRzdFsyXSA9ICh2MCAqIG1bMCAqIDQgKyAyXSArIHYxICogbVsxICogNCArIDJdICsgdjIgKiBtWzIgKiA0ICsgMl0gKyBtWzMgKiA0ICsgMl0pIC8gZDtcblxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIFRha2VzIGEgNC1ieS00IG1hdHJpeCBhbmQgYSB2ZWN0b3Igd2l0aCAzIGVudHJpZXMsIGludGVycHJldHMgdGhlIHZlY3RvciBhcyBhXG4gKiBkaXJlY3Rpb24sIHRyYW5zZm9ybXMgdGhhdCBkaXJlY3Rpb24gYnkgdGhlIG1hdHJpeCwgYW5kIHJldHVybnMgdGhlIHJlc3VsdDtcbiAqIGFzc3VtZXMgdGhlIHRyYW5zZm9ybWF0aW9uIG9mIDMtZGltZW5zaW9uYWwgc3BhY2UgcmVwcmVzZW50ZWQgYnkgdGhlIG1hdHJpeFxuICogaXMgcGFyYWxsZWwtcHJlc2VydmluZywgaS5lLiBhbnkgY29tYmluYXRpb24gb2Ygcm90YXRpb24sIHNjYWxpbmcgYW5kXG4gKiB0cmFuc2xhdGlvbiwgYnV0IG5vdCBhIHBlcnNwZWN0aXZlIGRpc3RvcnRpb24uIFJldHVybnMgYSB2ZWN0b3Igd2l0aCAzXG4gKiBlbnRyaWVzLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBtIFRoZSBtYXRyaXguXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IHYgVGhlIGRpcmVjdGlvbi5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gW2RzdF0gb3B0aW9uYWwgVmVjMyB0byBzdG9yZSByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC92My5WZWMzfSBUaGUgdHJhbnNmb3JtZWQgZGlyZWN0aW9uLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybURpcmVjdGlvbihtLCB2LCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IGNyZWF0ZSQxKCk7XG5cbiAgY29uc3QgdjAgPSB2WzBdO1xuICBjb25zdCB2MSA9IHZbMV07XG4gIGNvbnN0IHYyID0gdlsyXTtcblxuICBkc3RbMF0gPSB2MCAqIG1bMCAqIDQgKyAwXSArIHYxICogbVsxICogNCArIDBdICsgdjIgKiBtWzIgKiA0ICsgMF07XG4gIGRzdFsxXSA9IHYwICogbVswICogNCArIDFdICsgdjEgKiBtWzEgKiA0ICsgMV0gKyB2MiAqIG1bMiAqIDQgKyAxXTtcbiAgZHN0WzJdID0gdjAgKiBtWzAgKiA0ICsgMl0gKyB2MSAqIG1bMSAqIDQgKyAyXSArIHYyICogbVsyICogNCArIDJdO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogVGFrZXMgYSA0LWJ5LTQgbWF0cml4IG0gYW5kIGEgdmVjdG9yIHYgd2l0aCAzIGVudHJpZXMsIGludGVycHJldHMgdGhlIHZlY3RvclxuICogYXMgYSBub3JtYWwgdG8gYSBzdXJmYWNlLCBhbmQgY29tcHV0ZXMgYSB2ZWN0b3Igd2hpY2ggaXMgbm9ybWFsIHVwb25cbiAqIHRyYW5zZm9ybWluZyB0aGF0IHN1cmZhY2UgYnkgdGhlIG1hdHJpeC4gVGhlIGVmZmVjdCBvZiB0aGlzIGZ1bmN0aW9uIGlzIHRoZVxuICogc2FtZSBhcyB0cmFuc2Zvcm1pbmcgdiAoYXMgYSBkaXJlY3Rpb24pIGJ5IHRoZSBpbnZlcnNlLXRyYW5zcG9zZSBvZiBtLiAgVGhpc1xuICogZnVuY3Rpb24gYXNzdW1lcyB0aGUgdHJhbnNmb3JtYXRpb24gb2YgMy1kaW1lbnNpb25hbCBzcGFjZSByZXByZXNlbnRlZCBieSB0aGVcbiAqIG1hdHJpeCBpcyBwYXJhbGxlbC1wcmVzZXJ2aW5nLCBpLmUuIGFueSBjb21iaW5hdGlvbiBvZiByb3RhdGlvbiwgc2NhbGluZyBhbmRcbiAqIHRyYW5zbGF0aW9uLCBidXQgbm90IGEgcGVyc3BlY3RpdmUgZGlzdG9ydGlvbi4gIFJldHVybnMgYSB2ZWN0b3Igd2l0aCAzXG4gKiBlbnRyaWVzLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBtIFRoZSBtYXRyaXguXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IHYgVGhlIG5vcm1hbC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gW2RzdF0gVGhlIGRpcmVjdGlvbi4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFRoZSB0cmFuc2Zvcm1lZCBub3JtYWwuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuZnVuY3Rpb24gdHJhbnNmb3JtTm9ybWFsJDEobSwgdiwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBjcmVhdGUkMSgpO1xuICBjb25zdCBtaSA9IGludmVyc2UobSk7XG4gIGNvbnN0IHYwID0gdlswXTtcbiAgY29uc3QgdjEgPSB2WzFdO1xuICBjb25zdCB2MiA9IHZbMl07XG5cbiAgZHN0WzBdID0gdjAgKiBtaVswICogNCArIDBdICsgdjEgKiBtaVswICogNCArIDFdICsgdjIgKiBtaVswICogNCArIDJdO1xuICBkc3RbMV0gPSB2MCAqIG1pWzEgKiA0ICsgMF0gKyB2MSAqIG1pWzEgKiA0ICsgMV0gKyB2MiAqIG1pWzEgKiA0ICsgMl07XG4gIGRzdFsyXSA9IHYwICogbWlbMiAqIDQgKyAwXSArIHYxICogbWlbMiAqIDQgKyAxXSArIHYyICogbWlbMiAqIDQgKyAyXTtcblxuICByZXR1cm4gZHN0O1xufVxuXG52YXIgbTQgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgYXhpc1JvdGF0ZTogYXhpc1JvdGF0ZSxcbiAgYXhpc1JvdGF0aW9uOiBheGlzUm90YXRpb24sXG4gIGNvcHk6IGNvcHksXG4gIGNyZWF0ZTogY3JlYXRlLFxuICBmcnVzdHVtOiBmcnVzdHVtLFxuICBnZXRBeGlzOiBnZXRBeGlzLFxuICBnZXRUcmFuc2xhdGlvbjogZ2V0VHJhbnNsYXRpb24sXG4gIGlkZW50aXR5OiBpZGVudGl0eSxcbiAgaW52ZXJzZTogaW52ZXJzZSxcbiAgbG9va0F0OiBsb29rQXQsXG4gIG11bHRpcGx5OiBtdWx0aXBseSxcbiAgbmVnYXRlOiBuZWdhdGUsXG4gIG9ydGhvOiBvcnRobyxcbiAgcGVyc3BlY3RpdmU6IHBlcnNwZWN0aXZlLFxuICByb3RhdGVYOiByb3RhdGVYLFxuICByb3RhdGVZOiByb3RhdGVZLFxuICByb3RhdGVaOiByb3RhdGVaLFxuICByb3RhdGlvblg6IHJvdGF0aW9uWCxcbiAgcm90YXRpb25ZOiByb3RhdGlvblksXG4gIHJvdGF0aW9uWjogcm90YXRpb25aLFxuICBzY2FsZTogc2NhbGUsXG4gIHNjYWxpbmc6IHNjYWxpbmcsXG4gIHNldEF4aXM6IHNldEF4aXMsXG4gIHNldERlZmF1bHRUeXBlOiBzZXREZWZhdWx0VHlwZSxcbiAgc2V0VHJhbnNsYXRpb246IHNldFRyYW5zbGF0aW9uLFxuICB0cmFuc2Zvcm1EaXJlY3Rpb246IHRyYW5zZm9ybURpcmVjdGlvbixcbiAgdHJhbnNmb3JtTm9ybWFsOiB0cmFuc2Zvcm1Ob3JtYWwkMSxcbiAgdHJhbnNmb3JtUG9pbnQ6IHRyYW5zZm9ybVBvaW50LFxuICB0cmFuc2xhdGU6IHRyYW5zbGF0ZSxcbiAgdHJhbnNsYXRpb246IHRyYW5zbGF0aW9uLFxuICB0cmFuc3Bvc2U6IHRyYW5zcG9zZVxufSk7XG5cbi8qXG4gKiBDb3B5cmlnaHQgMjAxOSBHcmVnZyBUYXZhcmVzXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbiAqIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSxcbiAqIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb25cbiAqIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLFxuICogYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4gKiBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTFxuICogVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSXG4gKiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogRGF0YVR5cGUgKi9cbmNvbnN0IEJZVEUkMiAgICAgICAgICAgICAgICAgICAgICAgICAgID0gMHgxNDAwO1xuY29uc3QgVU5TSUdORURfQllURSQzICAgICAgICAgICAgICAgICAgPSAweDE0MDE7XG5jb25zdCBTSE9SVCQyICAgICAgICAgICAgICAgICAgICAgICAgICA9IDB4MTQwMjtcbmNvbnN0IFVOU0lHTkVEX1NIT1JUJDMgICAgICAgICAgICAgICAgID0gMHgxNDAzO1xuY29uc3QgSU5UJDMgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAweDE0MDQ7XG5jb25zdCBVTlNJR05FRF9JTlQkMyAgICAgICAgICAgICAgICAgICA9IDB4MTQwNTtcbmNvbnN0IEZMT0FUJDMgICAgICAgICAgICAgICAgICAgICAgICAgID0gMHgxNDA2O1xuY29uc3QgVU5TSUdORURfU0hPUlRfNF80XzRfNCQxICAgICAgID0gMHg4MDMzO1xuY29uc3QgVU5TSUdORURfU0hPUlRfNV81XzVfMSQxICAgICAgID0gMHg4MDM0O1xuY29uc3QgVU5TSUdORURfU0hPUlRfNV82XzUkMSAgICAgICAgID0gMHg4MzYzO1xuY29uc3QgSEFMRl9GTE9BVCQxICAgICAgICAgICAgICAgICAgID0gMHgxNDBCO1xuY29uc3QgVU5TSUdORURfSU5UXzJfMTBfMTBfMTBfUkVWJDEgID0gMHg4MzY4O1xuY29uc3QgVU5TSUdORURfSU5UXzEwRl8xMUZfMTFGX1JFViQxID0gMHg4QzNCO1xuY29uc3QgVU5TSUdORURfSU5UXzVfOV85XzlfUkVWJDEgICAgID0gMHg4QzNFO1xuY29uc3QgRkxPQVRfMzJfVU5TSUdORURfSU5UXzI0XzhfUkVWJDEgPSAweDhEQUQ7XG5jb25zdCBVTlNJR05FRF9JTlRfMjRfOCQxICAgICAgICAgICAgPSAweDg0RkE7XG5cbmNvbnN0IGdsVHlwZVRvVHlwZWRBcnJheSA9IHt9O1xue1xuICBjb25zdCB0dCA9IGdsVHlwZVRvVHlwZWRBcnJheTtcbiAgdHRbQllURSQyXSAgICAgICAgICAgICAgICAgICAgICAgICAgID0gSW50OEFycmF5O1xuICB0dFtVTlNJR05FRF9CWVRFJDNdICAgICAgICAgICAgICAgICAgPSBVaW50OEFycmF5O1xuICB0dFtTSE9SVCQyXSAgICAgICAgICAgICAgICAgICAgICAgICAgPSBJbnQxNkFycmF5O1xuICB0dFtVTlNJR05FRF9TSE9SVCQzXSAgICAgICAgICAgICAgICAgPSBVaW50MTZBcnJheTtcbiAgdHRbSU5UJDNdICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gSW50MzJBcnJheTtcbiAgdHRbVU5TSUdORURfSU5UJDNdICAgICAgICAgICAgICAgICAgID0gVWludDMyQXJyYXk7XG4gIHR0W0ZMT0FUJDNdICAgICAgICAgICAgICAgICAgICAgICAgICA9IEZsb2F0MzJBcnJheTtcbiAgdHRbVU5TSUdORURfU0hPUlRfNF80XzRfNCQxXSAgICAgICAgID0gVWludDE2QXJyYXk7XG4gIHR0W1VOU0lHTkVEX1NIT1JUXzVfNV81XzEkMV0gICAgICAgICA9IFVpbnQxNkFycmF5O1xuICB0dFtVTlNJR05FRF9TSE9SVF81XzZfNSQxXSAgICAgICAgICAgPSBVaW50MTZBcnJheTtcbiAgdHRbSEFMRl9GTE9BVCQxXSAgICAgICAgICAgICAgICAgICAgID0gVWludDE2QXJyYXk7XG4gIHR0W1VOU0lHTkVEX0lOVF8yXzEwXzEwXzEwX1JFViQxXSAgICA9IFVpbnQzMkFycmF5O1xuICB0dFtVTlNJR05FRF9JTlRfMTBGXzExRl8xMUZfUkVWJDFdICAgPSBVaW50MzJBcnJheTtcbiAgdHRbVU5TSUdORURfSU5UXzVfOV85XzlfUkVWJDFdICAgICAgID0gVWludDMyQXJyYXk7XG4gIHR0W0ZMT0FUXzMyX1VOU0lHTkVEX0lOVF8yNF84X1JFViQxXSA9IFVpbnQzMkFycmF5O1xuICB0dFtVTlNJR05FRF9JTlRfMjRfOCQxXSAgICAgICAgICAgICAgPSBVaW50MzJBcnJheTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIEdMIHR5cGUgZm9yIGEgdHlwZWRBcnJheVxuICogQHBhcmFtIHtBcnJheUJ1ZmZlclZpZXd9IHR5cGVkQXJyYXkgYSB0eXBlZEFycmF5XG4gKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBHTCB0eXBlIGZvciBhcnJheS4gRm9yIGV4YW1wbGUgcGFzcyBpbiBhbiBgSW50OEFycmF5YCBhbmQgYGdsLkJZVEVgIHdpbGxcbiAqICAgYmUgcmV0dXJuZWQuIFBhc3MgaW4gYSBgVWludDMyQXJyYXlgIGFuZCBgZ2wuVU5TSUdORURfSU5UYCB3aWxsIGJlIHJldHVybmVkXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdHlwZWRBcnJheVxuICovXG5mdW5jdGlvbiBnZXRHTFR5cGVGb3JUeXBlZEFycmF5KHR5cGVkQXJyYXkpIHtcbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBJbnQ4QXJyYXkpICAgICAgICAgeyByZXR1cm4gQllURSQyOyB9ICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgVWludDhBcnJheSkgICAgICAgIHsgcmV0dXJuIFVOU0lHTkVEX0JZVEUkMzsgfSAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBpZiAodHlwZWRBcnJheSBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5KSB7IHJldHVybiBVTlNJR05FRF9CWVRFJDM7IH0gIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBJbnQxNkFycmF5KSAgICAgICAgeyByZXR1cm4gU0hPUlQkMjsgfSAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgVWludDE2QXJyYXkpICAgICAgIHsgcmV0dXJuIFVOU0lHTkVEX1NIT1JUJDM7IH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBpZiAodHlwZWRBcnJheSBpbnN0YW5jZW9mIEludDMyQXJyYXkpICAgICAgICB7IHJldHVybiBJTlQkMzsgfSAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBVaW50MzJBcnJheSkgICAgICAgeyByZXR1cm4gVU5TSUdORURfSU5UJDM7IH0gICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgRmxvYXQzMkFycmF5KSAgICAgIHsgcmV0dXJuIEZMT0FUJDM7IH0gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICB0aHJvdyBuZXcgRXJyb3IoJ3Vuc3VwcG9ydGVkIHR5cGVkIGFycmF5IHR5cGUnKTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIEdMIHR5cGUgZm9yIGEgdHlwZWRBcnJheSB0eXBlXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyVmlld30gdHlwZWRBcnJheVR5cGUgYSB0eXBlZEFycmF5IGNvbnN0cnVjdG9yXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBHTCB0eXBlIGZvciB0eXBlLiBGb3IgZXhhbXBsZSBwYXNzIGluIGBJbnQ4QXJyYXlgIGFuZCBgZ2wuQllURWAgd2lsbFxuICogICBiZSByZXR1cm5lZC4gUGFzcyBpbiBgVWludDMyQXJyYXlgIGFuZCBgZ2wuVU5TSUdORURfSU5UYCB3aWxsIGJlIHJldHVybmVkXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdHlwZWRBcnJheVxuICovXG5mdW5jdGlvbiBnZXRHTFR5cGVGb3JUeXBlZEFycmF5VHlwZSh0eXBlZEFycmF5VHlwZSkge1xuICBpZiAodHlwZWRBcnJheVR5cGUgPT09IEludDhBcnJheSkgICAgICAgICB7IHJldHVybiBCWVRFJDI7IH0gICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaWYgKHR5cGVkQXJyYXlUeXBlID09PSBVaW50OEFycmF5KSAgICAgICAgeyByZXR1cm4gVU5TSUdORURfQllURSQzOyB9ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGlmICh0eXBlZEFycmF5VHlwZSA9PT0gVWludDhDbGFtcGVkQXJyYXkpIHsgcmV0dXJuIFVOU0lHTkVEX0JZVEUkMzsgfSAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBpZiAodHlwZWRBcnJheVR5cGUgPT09IEludDE2QXJyYXkpICAgICAgICB7IHJldHVybiBTSE9SVCQyOyB9ICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaWYgKHR5cGVkQXJyYXlUeXBlID09PSBVaW50MTZBcnJheSkgICAgICAgeyByZXR1cm4gVU5TSUdORURfU0hPUlQkMzsgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGlmICh0eXBlZEFycmF5VHlwZSA9PT0gSW50MzJBcnJheSkgICAgICAgIHsgcmV0dXJuIElOVCQzOyB9ICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBpZiAodHlwZWRBcnJheVR5cGUgPT09IFVpbnQzMkFycmF5KSAgICAgICB7IHJldHVybiBVTlNJR05FRF9JTlQkMzsgfSAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaWYgKHR5cGVkQXJyYXlUeXBlID09PSBGbG9hdDMyQXJyYXkpICAgICAgeyByZXR1cm4gRkxPQVQkMzsgfSAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIHRocm93IG5ldyBFcnJvcigndW5zdXBwb3J0ZWQgdHlwZWQgYXJyYXkgdHlwZScpO1xufVxuXG4vKipcbiAqIEdldCB0aGUgdHlwZWQgYXJyYXkgY29uc3RydWN0b3IgZm9yIGEgZ2l2ZW4gR0wgdHlwZVxuICogQHBhcmFtIHtudW1iZXJ9IHR5cGUgdGhlIEdMIHR5cGUuIChlZzogYGdsLlVOU0lHTkVEX0lOVGApXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn0gdGhlIGNvbnN0cnVjdG9yIGZvciBhIHRoZSBjb3JyZXNwb25kaW5nIHR5cGVkIGFycmF5LiAoZWcuIGBVaW50MzJBcnJheWApLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3R5cGVkQXJyYXlcbiAqL1xuZnVuY3Rpb24gZ2V0VHlwZWRBcnJheVR5cGVGb3JHTFR5cGUodHlwZSkge1xuICBjb25zdCBDVE9SID0gZ2xUeXBlVG9UeXBlZEFycmF5W3R5cGVdO1xuICBpZiAoIUNUT1IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gZ2wgdHlwZScpO1xuICB9XG4gIHJldHVybiBDVE9SO1xufVxuXG5jb25zdCBpc0FycmF5QnVmZmVyJDEgPSB0eXBlb2YgU2hhcmVkQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnXG4gID8gZnVuY3Rpb24gaXNBcnJheUJ1ZmZlck9yU2hhcmVkQXJyYXlCdWZmZXIoYSkge1xuICAgIHJldHVybiBhICYmIGEuYnVmZmVyICYmIChhLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyIHx8IGEuYnVmZmVyIGluc3RhbmNlb2YgU2hhcmVkQXJyYXlCdWZmZXIpO1xuICB9XG4gIDogZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcihhKSB7XG4gICAgcmV0dXJuIGEgJiYgYS5idWZmZXIgJiYgYS5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcjtcbiAgfTtcblxudmFyIHR5cGVkYXJyYXlzID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGdldEdMVHlwZUZvclR5cGVkQXJyYXk6IGdldEdMVHlwZUZvclR5cGVkQXJyYXksXG4gIGdldEdMVHlwZUZvclR5cGVkQXJyYXlUeXBlOiBnZXRHTFR5cGVGb3JUeXBlZEFycmF5VHlwZSxcbiAgZ2V0VHlwZWRBcnJheVR5cGVGb3JHTFR5cGU6IGdldFR5cGVkQXJyYXlUeXBlRm9yR0xUeXBlLFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyJDFcbn0pO1xuXG4vKlxuICogQ29weXJpZ2h0IDIwMTkgR3JlZ2cgVGF2YXJlc1xuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4gKiBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksXG4gKiB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uXG4gKiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSxcbiAqIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuICogU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTExcbiAqIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUlxuICogREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludCBuby1jb25zb2xlOiBcIm9mZlwiICovXG5cbi8qKlxuICogQ29weSBuYW1lZCBwcm9wZXJ0aWVzXG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0gbmFtZXMgbmFtZXMgb2YgcHJvcGVydGllcyB0byBjb3B5XG4gKiBAcGFyYW0ge29iamVjdH0gc3JjIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtvYmplY3R9IGRzdCBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjb3B5TmFtZWRQcm9wZXJ0aWVzKG5hbWVzLCBzcmMsIGRzdCkge1xuICBuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHNyY1tuYW1lXTtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZHN0W25hbWVdID0gdmFsdWU7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBmcm9tIHNvdXJjZSB0byBkZXN0IG9ubHkgaWYgYSBtYXRjaGluZyBrZXkgaXMgaW4gZGVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsID8+fSBzcmMgdGhlIHNvdXJjZVxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgPz59IGRzdCB0aGUgZGVzdFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY29weUV4aXN0aW5nUHJvcGVydGllcyhzcmMsIGRzdCkge1xuICBPYmplY3Qua2V5cyhkc3QpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKGRzdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHNyYy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7ICAvKiBlc2xpbnQgbm8tcHJvdG90eXBlLWJ1aWx0aW5zOiAwICovXG4gICAgICBkc3Rba2V5XSA9IHNyY1trZXldO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVycm9yJDEoLi4uYXJncykge1xuICBjb25zb2xlLmVycm9yKC4uLmFyZ3MpO1xufVxuXG5mdW5jdGlvbiB3YXJuJDEoLi4uYXJncykge1xuICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG59XG5cbmNvbnN0IGlzVHlwZVdlYWtNYXBzID0gbmV3IE1hcCgpO1xuXG5mdW5jdGlvbiBpc1R5cGUob2JqZWN0LCB0eXBlKSB7XG4gIGlmICghb2JqZWN0IHx8IHR5cGVvZiBvYmplY3QgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGxldCB3ZWFrTWFwID0gaXNUeXBlV2Vha01hcHMuZ2V0KHR5cGUpO1xuICBpZiAoIXdlYWtNYXApIHtcbiAgICB3ZWFrTWFwID0gbmV3IFdlYWtNYXAoKTtcbiAgICBpc1R5cGVXZWFrTWFwcy5zZXQodHlwZSwgd2Vha01hcCk7XG4gIH1cbiAgbGV0IGlzT2ZUeXBlID0gd2Vha01hcC5nZXQob2JqZWN0KTtcbiAgaWYgKGlzT2ZUeXBlID09PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBzID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCk7XG4gICAgaXNPZlR5cGUgPSBzLnN1YnN0cmluZyg4LCBzLmxlbmd0aCAtIDEpID09PSB0eXBlO1xuICAgIHdlYWtNYXAuc2V0KG9iamVjdCwgaXNPZlR5cGUpO1xuICB9XG4gIHJldHVybiBpc09mVHlwZTtcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIoZ2wsIHQpIHtcbiAgcmV0dXJuIHR5cGVvZiBXZWJHTEJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNUeXBlKHQsICdXZWJHTEJ1ZmZlcicpO1xufVxuXG5mdW5jdGlvbiBpc1JlbmRlcmJ1ZmZlcihnbCwgdCkge1xuICByZXR1cm4gdHlwZW9mIFdlYkdMUmVuZGVyYnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiBpc1R5cGUodCwgJ1dlYkdMUmVuZGVyYnVmZmVyJyk7XG59XG5cbmZ1bmN0aW9uIGlzVGV4dHVyZShnbCwgdCkge1xuICByZXR1cm4gdHlwZW9mIFdlYkdMVGV4dHVyZSAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNUeXBlKHQsICdXZWJHTFRleHR1cmUnKTtcbn1cblxuZnVuY3Rpb24gaXNTYW1wbGVyKGdsLCB0KSB7XG4gIHJldHVybiB0eXBlb2YgV2ViR0xTYW1wbGVyICE9PSAndW5kZWZpbmVkJyAmJiBpc1R5cGUodCwgJ1dlYkdMU2FtcGxlcicpO1xufVxuXG4vKlxuICogQ29weXJpZ2h0IDIwMTkgR3JlZ2cgVGF2YXJlc1xuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4gKiBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksXG4gKiB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uXG4gKiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSxcbiAqIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuICogU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTExcbiAqIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUlxuICogREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmNvbnN0IFNUQVRJQ19EUkFXICAgICAgICAgICAgICAgICAgPSAweDg4ZTQ7XG5jb25zdCBBUlJBWV9CVUZGRVIkMSAgICAgICAgICAgICAgICAgPSAweDg4OTI7XG5jb25zdCBFTEVNRU5UX0FSUkFZX0JVRkZFUiQyICAgICAgICAgPSAweDg4OTM7XG5jb25zdCBCVUZGRVJfU0laRSAgICAgICAgICAgICAgICAgID0gMHg4NzY0O1xuXG5jb25zdCBCWVRFJDEgICAgICAgICAgICAgICAgICAgICAgICAgPSAweDE0MDA7XG5jb25zdCBVTlNJR05FRF9CWVRFJDIgICAgICAgICAgICAgICAgPSAweDE0MDE7XG5jb25zdCBTSE9SVCQxICAgICAgICAgICAgICAgICAgICAgICAgPSAweDE0MDI7XG5jb25zdCBVTlNJR05FRF9TSE9SVCQyICAgICAgICAgICAgICAgPSAweDE0MDM7XG5jb25zdCBJTlQkMiAgICAgICAgICAgICAgICAgICAgICAgICAgPSAweDE0MDQ7XG5jb25zdCBVTlNJR05FRF9JTlQkMiAgICAgICAgICAgICAgICAgPSAweDE0MDU7XG5jb25zdCBGTE9BVCQyICAgICAgICAgICAgICAgICAgICAgICAgPSAweDE0MDY7XG5jb25zdCBkZWZhdWx0cyQyID0ge1xuICBhdHRyaWJQcmVmaXg6IFwiXCIsXG59O1xuXG4vKipcbiAqIFNldHMgdGhlIGRlZmF1bHQgYXR0cmliIHByZWZpeFxuICpcbiAqIFdoZW4gd3JpdGluZyBzaGFkZXJzIEkgcHJlZmVyIHRvIG5hbWUgYXR0cmlidXRlcyB3aXRoIGBhX2AsIHVuaWZvcm1zIHdpdGggYHVfYCBhbmQgdmFyeWluZ3Mgd2l0aCBgdl9gXG4gKiBhcyBpdCBtYWtlcyBpdCBjbGVhciB3aGVyZSB0aGV5IGNhbWUgZnJvbS4gQnV0LCB3aGVuIGJ1aWxkaW5nIGdlb21ldHJ5IEkgcHJlZmVyIHVzaW5nIHVuLXByZWZpeGVkIG5hbWVzLlxuICpcbiAqIEluIG90aGVyIHdvcmRzIEknbGwgY3JlYXRlIGFycmF5cyBvZiBnZW9tZXRyeSBsaWtlIHRoaXNcbiAqXG4gKiAgICAgdmFyIGFycmF5cyA9IHtcbiAqICAgICAgIHBvc2l0aW9uOiAuLi5cbiAqICAgICAgIG5vcm1hbDogLi4uXG4gKiAgICAgICB0ZXhjb29yZDogLi4uXG4gKiAgICAgfTtcbiAqXG4gKiBCdXQgbmVlZCB0aG9zZSBtYXBwZWQgdG8gYXR0cmlidXRlcyBhbmQgbXkgYXR0cmlidXRlcyBzdGFydCB3aXRoIGBhX2AuXG4gKlxuICogQGRlcHJlY2F0ZWQgc2VlIHtAbGluayBtb2R1bGU6dHdnbC5zZXREZWZhdWx0c31cbiAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXggcHJlZml4IGZvciBhdHRyaWJzXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvYXR0cmlidXRlc1xuICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVQcmVmaXgocHJlZml4KSB7XG4gIGRlZmF1bHRzJDIuYXR0cmliUHJlZml4ID0gcHJlZml4O1xufVxuXG5mdW5jdGlvbiBzZXREZWZhdWx0cyQyKG5ld0RlZmF1bHRzKSB7XG4gIGNvcHlFeGlzdGluZ1Byb3BlcnRpZXMobmV3RGVmYXVsdHMsIGRlZmF1bHRzJDIpO1xufVxuXG5mdW5jdGlvbiBzZXRCdWZmZXJGcm9tVHlwZWRBcnJheShnbCwgdHlwZSwgYnVmZmVyLCBhcnJheSwgZHJhd1R5cGUpIHtcbiAgZ2wuYmluZEJ1ZmZlcih0eXBlLCBidWZmZXIpO1xuICBnbC5idWZmZXJEYXRhKHR5cGUsIGFycmF5LCBkcmF3VHlwZSB8fCBTVEFUSUNfRFJBVyk7XG59XG5cbi8qKlxuICogR2l2ZW4gdHlwZWQgYXJyYXkgY3JlYXRlcyBhIFdlYkdMQnVmZmVyIGFuZCBjb3BpZXMgdGhlIHR5cGVkIGFycmF5XG4gKiBpbnRvIGl0LlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBBIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcnxTaGFyZWRBcnJheUJ1ZmZlcnxBcnJheUJ1ZmZlclZpZXd8V2ViR0xCdWZmZXJ9IHR5cGVkQXJyYXkgdGhlIHR5cGVkIGFycmF5LiBOb3RlOiBJZiBhIFdlYkdMQnVmZmVyIGlzIHBhc3NlZCBpbiBpdCB3aWxsIGp1c3QgYmUgcmV0dXJuZWQuIE5vIGFjdGlvbiB3aWxsIGJlIHRha2VuXG4gKiBAcGFyYW0ge251bWJlcn0gW3R5cGVdIHRoZSBHTCBiaW5kIHR5cGUgZm9yIHRoZSBidWZmZXIuIERlZmF1bHQgPSBgZ2wuQVJSQVlfQlVGRkVSYC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZHJhd1R5cGVdIHRoZSBHTCBkcmF3IHR5cGUgZm9yIHRoZSBidWZmZXIuIERlZmF1bHQgPSAnZ2wuU1RBVElDX0RSQVdgLlxuICogQHJldHVybiB7V2ViR0xCdWZmZXJ9IHRoZSBjcmVhdGVkIFdlYkdMQnVmZmVyXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvYXR0cmlidXRlc1xuICovXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXJGcm9tVHlwZWRBcnJheShnbCwgdHlwZWRBcnJheSwgdHlwZSwgZHJhd1R5cGUpIHtcbiAgaWYgKGlzQnVmZmVyKGdsLCB0eXBlZEFycmF5KSkge1xuICAgIHJldHVybiB0eXBlZEFycmF5O1xuICB9XG4gIHR5cGUgPSB0eXBlIHx8IEFSUkFZX0JVRkZFUiQxO1xuICBjb25zdCBidWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgc2V0QnVmZmVyRnJvbVR5cGVkQXJyYXkoZ2wsIHR5cGUsIGJ1ZmZlciwgdHlwZWRBcnJheSwgZHJhd1R5cGUpO1xuICByZXR1cm4gYnVmZmVyO1xufVxuXG5mdW5jdGlvbiBpc0luZGljZXMobmFtZSkge1xuICByZXR1cm4gbmFtZSA9PT0gXCJpbmRpY2VzXCI7XG59XG5cbi8vIFRoaXMgaXMgcmVhbGx5IGp1c3QgYSBndWVzcy4gVGhvdWdoIEkgY2FuJ3QgcmVhbGx5IGltYWdpbmUgdXNpbmdcbi8vIGFueXRoaW5nIGVsc2U/IE1heWJlIGZvciBzb21lIGNvbXByZXNzaW9uP1xuZnVuY3Rpb24gZ2V0Tm9ybWFsaXphdGlvbkZvclR5cGVkQXJyYXlUeXBlKHR5cGVkQXJyYXlUeXBlKSB7XG4gIGlmICh0eXBlZEFycmF5VHlwZSA9PT0gSW50OEFycmF5KSAgICB7IHJldHVybiB0cnVlOyB9ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGlmICh0eXBlZEFycmF5VHlwZSA9PT0gVWludDhBcnJheSkgICB7IHJldHVybiB0cnVlOyB9ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0QXJyYXkkMShhcnJheSkge1xuICByZXR1cm4gYXJyYXkubGVuZ3RoID8gYXJyYXkgOiBhcnJheS5kYXRhO1xufVxuXG5jb25zdCB0ZXhjb29yZFJFID0gL2Nvb3JkfHRleHR1cmUvaTtcbmNvbnN0IGNvbG9yUkUgPSAvY29sb3J8Y29sb3VyL2k7XG5cbmZ1bmN0aW9uIGd1ZXNzTnVtQ29tcG9uZW50c0Zyb21OYW1lKG5hbWUsIGxlbmd0aCkge1xuICBsZXQgbnVtQ29tcG9uZW50cztcbiAgaWYgKHRleGNvb3JkUkUudGVzdChuYW1lKSkge1xuICAgIG51bUNvbXBvbmVudHMgPSAyO1xuICB9IGVsc2UgaWYgKGNvbG9yUkUudGVzdChuYW1lKSkge1xuICAgIG51bUNvbXBvbmVudHMgPSA0O1xuICB9IGVsc2Uge1xuICAgIG51bUNvbXBvbmVudHMgPSAzOyAgLy8gcG9zaXRpb24sIG5vcm1hbHMsIGluZGljZXMgLi4uXG4gIH1cblxuICBpZiAobGVuZ3RoICUgbnVtQ29tcG9uZW50cyA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENhbiBub3QgZ3Vlc3MgbnVtQ29tcG9uZW50cyBmb3IgYXR0cmlidXRlICcke25hbWV9Jy4gVHJpZWQgJHtudW1Db21wb25lbnRzfSBidXQgJHtsZW5ndGh9IHZhbHVlcyBpcyBub3QgZXZlbmx5IGRpdmlzaWJsZSBieSAke251bUNvbXBvbmVudHN9LiBZb3Ugc2hvdWxkIHNwZWNpZnkgaXQuYCk7XG4gIH1cblxuICByZXR1cm4gbnVtQ29tcG9uZW50cztcbn1cblxuZnVuY3Rpb24gZ2V0TnVtQ29tcG9uZW50cyQxKGFycmF5LCBhcnJheU5hbWUsIG51bVZhbHVlcykge1xuICByZXR1cm4gYXJyYXkubnVtQ29tcG9uZW50cyB8fCBhcnJheS5zaXplIHx8IGd1ZXNzTnVtQ29tcG9uZW50c0Zyb21OYW1lKGFycmF5TmFtZSwgbnVtVmFsdWVzIHx8IGdldEFycmF5JDEoYXJyYXkpLmxlbmd0aCk7XG59XG5cbmZ1bmN0aW9uIG1ha2VUeXBlZEFycmF5KGFycmF5LCBuYW1lKSB7XG4gIGlmIChpc0FycmF5QnVmZmVyJDEoYXJyYXkpKSB7XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgaWYgKGlzQXJyYXlCdWZmZXIkMShhcnJheS5kYXRhKSkge1xuICAgIHJldHVybiBhcnJheS5kYXRhO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG4gICAgYXJyYXkgPSB7XG4gICAgICBkYXRhOiBhcnJheSxcbiAgICB9O1xuICB9XG5cbiAgbGV0IFR5cGUgPSBhcnJheS50eXBlID8gdHlwZWRBcnJheVR5cGVGcm9tR0xUeXBlT3JUeXBlZEFycmF5Q3RvcihhcnJheS50eXBlKSA6IHVuZGVmaW5lZDtcbiAgaWYgKCFUeXBlKSB7XG4gICAgaWYgKGlzSW5kaWNlcyhuYW1lKSkge1xuICAgICAgVHlwZSA9IFVpbnQxNkFycmF5O1xuICAgIH0gZWxzZSB7XG4gICAgICBUeXBlID0gRmxvYXQzMkFycmF5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3IFR5cGUoYXJyYXkuZGF0YSk7XG59XG5cbmZ1bmN0aW9uIGdsVHlwZUZyb21HTFR5cGVPclR5cGVkQXJyYXlUeXBlKGdsVHlwZU9yVHlwZWRBcnJheUN0b3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBnbFR5cGVPclR5cGVkQXJyYXlDdG9yID09PSAnbnVtYmVyJ1xuICAgICAgPyBnbFR5cGVPclR5cGVkQXJyYXlDdG9yXG4gICAgICA6IGdsVHlwZU9yVHlwZWRBcnJheUN0b3IgPyBnZXRHTFR5cGVGb3JUeXBlZEFycmF5VHlwZShnbFR5cGVPclR5cGVkQXJyYXlDdG9yKSA6IEZMT0FUJDI7XG59XG5cbmZ1bmN0aW9uIHR5cGVkQXJyYXlUeXBlRnJvbUdMVHlwZU9yVHlwZWRBcnJheUN0b3IoZ2xUeXBlT3JUeXBlZEFycmF5Q3Rvcikge1xuICByZXR1cm4gdHlwZW9mIGdsVHlwZU9yVHlwZWRBcnJheUN0b3IgPT09ICdudW1iZXInXG4gICAgICA/IGdldFR5cGVkQXJyYXlUeXBlRm9yR0xUeXBlKGdsVHlwZU9yVHlwZWRBcnJheUN0b3IpXG4gICAgICA6IGdsVHlwZU9yVHlwZWRBcnJheUN0b3IgfHwgRmxvYXQzMkFycmF5O1xufVxuXG5mdW5jdGlvbiBhdHRyaWJCdWZmZXJGcm9tQnVmZmVyKGdsLCBhcnJheS8qLCBhcnJheU5hbWUgKi8pIHtcbiAgcmV0dXJuIHtcbiAgICBidWZmZXI6IGFycmF5LmJ1ZmZlcixcbiAgICBudW1WYWx1ZXM6IDIgKiAzICogNCwgIC8vIHNhZmVseSBkaXZpZGVkIGJ5IDIsIDMsIDRcbiAgICB0eXBlOiBnbFR5cGVGcm9tR0xUeXBlT3JUeXBlZEFycmF5VHlwZShhcnJheS50eXBlKSxcbiAgICBhcnJheVR5cGU6IHR5cGVkQXJyYXlUeXBlRnJvbUdMVHlwZU9yVHlwZWRBcnJheUN0b3IoYXJyYXkudHlwZSksXG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJpYkJ1ZmZlckZyb21TaXplKGdsLCBhcnJheS8qLCBhcnJheU5hbWUqLykge1xuICBjb25zdCBudW1WYWx1ZXMgPSBhcnJheS5kYXRhIHx8IGFycmF5O1xuICBjb25zdCBhcnJheVR5cGUgPSB0eXBlZEFycmF5VHlwZUZyb21HTFR5cGVPclR5cGVkQXJyYXlDdG9yKGFycmF5LnR5cGUpO1xuICBjb25zdCBudW1CeXRlcyA9IG51bVZhbHVlcyAqIGFycmF5VHlwZS5CWVRFU19QRVJfRUxFTUVOVDtcbiAgY29uc3QgYnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gIGdsLmJpbmRCdWZmZXIoQVJSQVlfQlVGRkVSJDEsIGJ1ZmZlcik7XG4gIGdsLmJ1ZmZlckRhdGEoQVJSQVlfQlVGRkVSJDEsIG51bUJ5dGVzLCBhcnJheS5kcmF3VHlwZSB8fCBTVEFUSUNfRFJBVyk7XG4gIHJldHVybiB7XG4gICAgYnVmZmVyLFxuICAgIG51bVZhbHVlcyxcbiAgICB0eXBlOiBnZXRHTFR5cGVGb3JUeXBlZEFycmF5VHlwZShhcnJheVR5cGUpLFxuICAgIGFycmF5VHlwZSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0cmliQnVmZmVyRnJvbUFycmF5TGlrZShnbCwgYXJyYXksIGFycmF5TmFtZSkge1xuICBjb25zdCB0eXBlZEFycmF5ID0gbWFrZVR5cGVkQXJyYXkoYXJyYXksIGFycmF5TmFtZSk7XG4gIHJldHVybiB7XG4gICAgYXJyYXlUeXBlOiB0eXBlZEFycmF5LmNvbnN0cnVjdG9yLFxuICAgIGJ1ZmZlcjogY3JlYXRlQnVmZmVyRnJvbVR5cGVkQXJyYXkoZ2wsIHR5cGVkQXJyYXksIHVuZGVmaW5lZCwgYXJyYXkuZHJhd1R5cGUpLFxuICAgIHR5cGU6IGdldEdMVHlwZUZvclR5cGVkQXJyYXkodHlwZWRBcnJheSksXG4gICAgbnVtVmFsdWVzOiAwLFxuICB9O1xufVxuXG4vKipcbiAqIFRoZSBpbmZvIGZvciBhbiBhdHRyaWJ1dGUuIFRoaXMgaXMgZWZmZWN0aXZlbHkganVzdCB0aGUgYXJndW1lbnRzIHRvIGBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyYCBwbHVzIHRoZSBXZWJHTEJ1ZmZlclxuICogZm9yIHRoZSBhdHRyaWJ1dGUuXG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gQXR0cmliSW5mb1xuICogQHByb3BlcnR5IHtudW1iZXJbXXxBcnJheUJ1ZmZlclZpZXd9IFt2YWx1ZV0gYSBjb25zdGFudCB2YWx1ZSBmb3IgdGhlIGF0dHJpYnV0ZS4gTm90ZTogaWYgdGhpcyBpcyBzZXQgdGhlIGF0dHJpYnV0ZSB3aWxsIGJlXG4gKiAgICBkaXNhYmxlZCBhbmQgc2V0IHRvIHRoaXMgY29uc3RhbnQgdmFsdWUgYW5kIGFsbCBvdGhlciB2YWx1ZXMgd2lsbCBiZSBpZ25vcmVkLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtudW1Db21wb25lbnRzXSB0aGUgbnVtYmVyIG9mIGNvbXBvbmVudHMgZm9yIHRoaXMgYXR0cmlidXRlLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtzaXplXSBzeW5vbnltIGZvciBgbnVtQ29tcG9uZW50c2AuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3R5cGVdIHRoZSB0eXBlIG9mIHRoZSBhdHRyaWJ1dGUgKGVnLiBgZ2wuRkxPQVRgLCBgZ2wuVU5TSUdORURfQllURWAsIGV0Yy4uLikgRGVmYXVsdCA9IGBnbC5GTE9BVGBcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW25vcm1hbGl6ZV0gd2hldGhlciBvciBub3QgdG8gbm9ybWFsaXplIHRoZSBkYXRhLiBEZWZhdWx0ID0gZmFsc2VcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbb2Zmc2V0XSBvZmZzZXQgaW50byBidWZmZXIgaW4gYnl0ZXMuIERlZmF1bHQgPSAwXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3N0cmlkZV0gdGhlIHN0cmlkZSBpbiBieXRlcyBwZXIgZWxlbWVudC4gRGVmYXVsdCA9IDBcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbZGl2aXNvcl0gdGhlIGRpdmlzb3IgaW4gaW5zdGFuY2VzLiBEZWZhdWx0ID0gMC5cbiAqICAgIFJlcXVpcmVzIFdlYkdMMiBvciB0aGUgQU5HTEVfaW5zdGFuY2VkX2FycmF5cyBleHRlbnNpb24uXG4gKiAgICBhbmQsIGlmIHlvdSdyZSB1c2luZyBXZWJHTDEgeW91IG11c3QgaGF2ZSBjYWxsZWQge0BsaW5rIG1vZHVsZTp0d2dsLmFkZEV4dGVuc2lvbnNUb0NvbnRleHR9XG4gKiBAcHJvcGVydHkge1dlYkdMQnVmZmVyfSBidWZmZXIgdGhlIGJ1ZmZlciB0aGF0IGNvbnRhaW5zIHRoZSBkYXRhIGZvciB0aGlzIGF0dHJpYnV0ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtkcmF3VHlwZV0gdGhlIGRyYXcgdHlwZSBwYXNzZWQgdG8gZ2wuYnVmZmVyRGF0YS4gRGVmYXVsdCA9IGdsLlNUQVRJQ19EUkFXXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsoSW50OEFycmF5Q29uc3RydWN0b3J8VWludDhBcnJheUNvbnN0cnVjdG9yfEludDE2QXJyYXlDb25zdHJ1Y3RvcnxVaW50MTZBcnJheUNvbnN0cnVjdG9yfEludDMyQXJyYXlDb25zdHJ1Y3RvcnxVaW50MzJBcnJheUNvbnN0cnVjdG9yfEZsb2F0MzJBcnJheUNvbnN0cnVjdG9yKX0gVHlwZWRBcnJheUNvbnN0cnVjdG9yXG4gKi9cblxuLyoqXG4gKiBVc2UgdGhpcyB0eXBlIG9mIGFycmF5IHNwZWMgd2hlbiBUV0dMIGNhbid0IGd1ZXNzIHRoZSB0eXBlIG9yIG51bWJlciBvZiBjb21wb25lbnRzIG9mIGFuIGFycmF5XG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBGdWxsQXJyYXlTcGVjXG4gKiBAcHJvcGVydHkge251bWJlcltdfEFycmF5QnVmZmVyVmlld30gW3ZhbHVlXSBhIGNvbnN0YW50IHZhbHVlIGZvciB0aGUgYXR0cmlidXRlLiBOb3RlOiBpZiB0aGlzIGlzIHNldCB0aGUgYXR0cmlidXRlIHdpbGwgYmVcbiAqICAgIGRpc2FibGVkIGFuZCBzZXQgdG8gdGhpcyBjb25zdGFudCB2YWx1ZSBhbmQgYWxsIG90aGVyIHZhbHVlcyB3aWxsIGJlIGlnbm9yZWQuXG4gKiBAcHJvcGVydHkgeyhudW1iZXJ8bnVtYmVyW118QXJyYXlCdWZmZXJWaWV3KX0gW2RhdGFdIFRoZSBkYXRhIG9mIHRoZSBhcnJheS4gQSBudW1iZXIgYWxvbmUgYmVjb21lcyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIG9mIHR5cGUuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW251bUNvbXBvbmVudHNdIG51bWJlciBvZiBjb21wb25lbnRzIGZvciBgdmVydGV4QXR0cmliUG9pbnRlcmAuIERlZmF1bHQgaXMgYmFzZWQgb24gdGhlIG5hbWUgb2YgdGhlIGFycmF5LlxuICogICAgSWYgYGNvb3JkYCBpcyBpbiB0aGUgbmFtZSBhc3N1bWVzIGBudW1Db21wb25lbnRzID0gMmAuXG4gKiAgICBJZiBgY29sb3JgIGlzIGluIHRoZSBuYW1lIGFzc3VtZXMgYG51bUNvbXBvbmVudHMgPSA0YC5cbiAqICAgIG90aGVyd2lzZSBhc3N1bWVzIGBudW1Db21wb25lbnRzID0gM2BcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfFR5cGVkQXJyYXlDb25zdHJ1Y3Rvcn0gW3R5cGVdIHR5cGUuIFRoaXMgaXMgdXNlZCBpZiBgZGF0YWAgaXMgYSBKYXZhU2NyaXB0IGFycmF5LCBvciBgYnVmZmVyYCBpcyBwYXNzZWQgaW4sIG9yIGBkYXRhYCBpcyBhIG51bWJlci5cbiAqICAgSXQgY2FuIGVpdGhlciBiZSB0aGUgY29uc3RydWN0b3IgZm9yIGEgdHlwZWRhcnJheS4gKGVnLiBgVWludDhBcnJheWApIE9SIGEgV2ViR0wgdHlwZSwgKGVnIGBnbC5VTlNJR05FRF9CWVRFYCkuXG4gKiAgIEZvciBleGFtcGxlIGlmIHlvdSB3YW50IGNvbG9ycyBpbiBhIGBVaW50OEFycmF5YCB5b3UgbWlnaHQgaGF2ZSBhIGBGdWxsQXJyYXlTcGVjYCBsaWtlIGB7IHR5cGU6IGdsLlVOU0lHTkVEX0JZVEUsIGRhdGE6IFsyNTUsMCwyNTUsMjU1LCAuLi5dLCB9YC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbc2l6ZV0gc3lub255bSBmb3IgYG51bUNvbXBvbmVudHNgLlxuICogQHByb3BlcnR5IHtib29sZWFufSBbbm9ybWFsaXplXSBub3JtYWxpemUgZm9yIGB2ZXJ0ZXhBdHRyaWJQb2ludGVyYC4gRGVmYXVsdCBpcyB0cnVlIGlmIHR5cGUgaXMgYEludDhBcnJheWAgb3IgYFVpbnQ4QXJyYXlgIG90aGVyd2lzZSBmYWxzZS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbc3RyaWRlXSBzdHJpZGUgZm9yIGB2ZXJ0ZXhBdHRyaWJQb2ludGVyYC4gRGVmYXVsdCA9IDBcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbb2Zmc2V0XSBvZmZzZXQgZm9yIGB2ZXJ0ZXhBdHRyaWJQb2ludGVyYC4gRGVmYXVsdCA9IDBcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbZGl2aXNvcl0gZGl2aXNvciBmb3IgYHZlcnRleEF0dHJpYkRpdmlzb3JgLiBEZWZhdWx0ID0gMC5cbiAqICAgICBSZXF1aXJlcyBXZWJHTDIgb3IgdGhlIEFOR0xFX2luc3RhbmNlZF9hcnJheXMgZXh0ZW5zaW9uLlxuICogICAgIGFuZCwgaWYgeW91IHVzaW5nIFdlYkdMMSB5b3UgbXVzdCBoYXZlIGNhbGxlZCB7QGxpbmsgbW9kdWxlOnR3Z2wuYWRkRXh0ZW5zaW9uc1RvQ29udGV4dH1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbYXR0cmliXSBuYW1lIG9mIGF0dHJpYnV0ZSB0aGlzIGFycmF5IG1hcHMgdG8uIERlZmF1bHRzIHRvIHNhbWUgbmFtZSBhcyBhcnJheSBwcmVmaXhlZCBieSB0aGUgZGVmYXVsdCBhdHRyaWJQcmVmaXguXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW25hbWVdIHN5bm9ueW0gZm9yIGBhdHRyaWJgLlxuICogQHByb3BlcnR5IHtzdHJpbmd9IFthdHRyaWJOYW1lXSBzeW5vbnltIGZvciBgYXR0cmliYC5cbiAqIEBwcm9wZXJ0eSB7V2ViR0xCdWZmZXJ9IFtidWZmZXJdIEJ1ZmZlciB0byB1c2UgZm9yIHRoaXMgYXR0cmlidXRlLiBUaGlzIGxldHMgeW91IHVzZSB5b3VyIG93biBidWZmZXJcbiAqICAgIGJ1dCB5b3Ugd2lsbCBuZWVkIHRvIHN1cHBseSBgbnVtQ29tcG9uZW50c2AgYW5kIGB0eXBlYC4gWW91IGNhbiBlZmZlY3RpdmVseSBwYXNzIGFuIGBBdHRyaWJJbmZvYFxuICogICAgdG8gcHJvdmlkZSB0aGlzLiBFeGFtcGxlOlxuICpcbiAqICAgICAgICAgY29uc3QgYnVmZmVySW5mbzEgPSB0d2dsLmNyZWF0ZUJ1ZmZlckluZm9Gcm9tQXJyYXlzKGdsLCB7XG4gKiAgICAgICAgICAgcG9zaXRpb246IFsxLCAyLCAzLCAuLi4gXSxcbiAqICAgICAgICAgfSk7XG4gKiAgICAgICAgIGNvbnN0IGJ1ZmZlckluZm8yID0gdHdnbC5jcmVhdGVCdWZmZXJJbmZvRnJvbUFycmF5cyhnbCwge1xuICogICAgICAgICAgIHBvc2l0aW9uOiBidWZmZXJJbmZvMS5hdHRyaWJzLnBvc2l0aW9uLCAgLy8gdXNlIHRoZSBzYW1lIGJ1ZmZlciBmcm9tIGJ1ZmZlckluZm8xXG4gKiAgICAgICAgIH0pO1xuICpcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbZHJhd1R5cGVdIHRoZSBkcmF3IHR5cGUgcGFzc2VkIHRvIGdsLmJ1ZmZlckRhdGEuIERlZmF1bHQgPSBnbC5TVEFUSUNfRFJBV1xuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuLyoqXG4gKiBBbiBpbmRpdmlkdWFsIGFycmF5IGluIHtAbGluayBtb2R1bGU6dHdnbC5BcnJheXN9XG4gKlxuICogV2hlbiBwYXNzZWQgdG8ge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZUJ1ZmZlckluZm9Gcm9tQXJyYXlzfSBpZiBhbiBBcnJheVNwZWMgaXMgYG51bWJlcltdYCBvciBgQXJyYXlCdWZmZXJWaWV3YFxuICogdGhlIHR5cGVzIHdpbGwgYmUgZ3Vlc3NlZCBiYXNlZCBvbiB0aGUgbmFtZS4gYGluZGljZXNgIHdpbGwgYmUgYFVpbnQxNkFycmF5YCwgZXZlcnl0aGluZyBlbHNlIHdpbGxcbiAqIGJlIGBGbG9hdDMyQXJyYXlgLiBJZiBhbiBBcnJheVNwZWMgaXMgYSBudW1iZXIgaXQncyB0aGUgbnVtYmVyIG9mIGZsb2F0cyBmb3IgYW4gZW1wdHkgKHplcm9lZCkgYnVmZmVyLlxuICpcbiAqIEB0eXBlZGVmIHsobnVtYmVyfG51bWJlcltdfEFycmF5QnVmZmVyVmlld3xtb2R1bGU6dHdnbC5GdWxsQXJyYXlTcGVjKX0gQXJyYXlTcGVjXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG4vKipcbiAqIFRoaXMgaXMgYSBKYXZhU2NyaXB0IG9iamVjdCBvZiBhcnJheXMgYnkgbmFtZS4gVGhlIG5hbWVzIHNob3VsZCBtYXRjaCB5b3VyIHNoYWRlcidzIGF0dHJpYnV0ZXMuIElmIHlvdXJcbiAqIGF0dHJpYnV0ZXMgaGF2ZSBhIGNvbW1vbiBwcmVmaXggeW91IGNhbiBzcGVjaWZ5IGl0IGJ5IGNhbGxpbmcge0BsaW5rIG1vZHVsZTp0d2dsLnNldEF0dHJpYnV0ZVByZWZpeH0uXG4gKlxuICogICAgIEJhcmUgSmF2YVNjcmlwdCBBcnJheXNcbiAqXG4gKiAgICAgICAgIHZhciBhcnJheXMgPSB7XG4gKiAgICAgICAgICAgIHBvc2l0aW9uOiBbLTEsIDEsIDBdLFxuICogICAgICAgICAgICBub3JtYWw6IFswLCAxLCAwXSxcbiAqICAgICAgICAgICAgLi4uXG4gKiAgICAgICAgIH1cbiAqXG4gKiAgICAgQmFyZSBUeXBlZEFycmF5c1xuICpcbiAqICAgICAgICAgdmFyIGFycmF5cyA9IHtcbiAqICAgICAgICAgICAgcG9zaXRpb246IG5ldyBGbG9hdDMyQXJyYXkoWy0xLCAxLCAwXSksXG4gKiAgICAgICAgICAgIGNvbG9yOiBuZXcgVWludDhBcnJheShbMjU1LCAxMjgsIDY0LCAyNTVdKSxcbiAqICAgICAgICAgICAgLi4uXG4gKiAgICAgICAgIH1cbiAqXG4gKiAqICAgV2lsbCBndWVzcyBhdCBgbnVtQ29tcG9uZW50c2AgaWYgbm90IHNwZWNpZmllZCBiYXNlZCBvbiBuYW1lLlxuICpcbiAqICAgICBJZiBgY29vcmRgIGlzIGluIHRoZSBuYW1lIGFzc3VtZXMgYG51bUNvbXBvbmVudHMgPSAyYFxuICpcbiAqICAgICBJZiBgY29sb3JgIGlzIGluIHRoZSBuYW1lIGFzc3VtZXMgYG51bUNvbXBvbmVudHMgPSA0YFxuICpcbiAqICAgICBvdGhlcndpc2UgYXNzdW1lcyBgbnVtQ29tcG9uZW50cyA9IDNgXG4gKlxuICogT2JqZWN0cyB3aXRoIHZhcmlvdXMgZmllbGRzLiBTZWUge0BsaW5rIG1vZHVsZTp0d2dsLkZ1bGxBcnJheVNwZWN9LlxuICpcbiAqICAgICB2YXIgYXJyYXlzID0ge1xuICogICAgICAgcG9zaXRpb246IHsgbnVtQ29tcG9uZW50czogMywgZGF0YTogWzAsIDAsIDAsIDEwLCAwLCAwLCAwLCAxMCwgMCwgMTAsIDEwLCAwXSwgfSxcbiAqICAgICAgIHRleGNvb3JkOiB7IG51bUNvbXBvbmVudHM6IDIsIGRhdGE6IFswLCAwLCAwLCAxLCAxLCAwLCAxLCAxXSwgICAgICAgICAgICAgICAgIH0sXG4gKiAgICAgICBub3JtYWw6ICAgeyBudW1Db21wb25lbnRzOiAzLCBkYXRhOiBbMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMV0sICAgICB9LFxuICogICAgICAgaW5kaWNlczogIHsgbnVtQ29tcG9uZW50czogMywgZGF0YTogWzAsIDEsIDIsIDEsIDIsIDNdLCAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAqICAgICB9O1xuICpcbiAqIEB0eXBlZGVmIHtPYmplY3QuPHN0cmluZywgbW9kdWxlOnR3Z2wuQXJyYXlTcGVjPn0gQXJyYXlzXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG5cbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvZiBhdHRyaWJ1dGUgZGF0YSBhbmQgV2ViR0xCdWZmZXJzIGZyb20gc2V0IG9mIGFycmF5c1xuICpcbiAqIEdpdmVuXG4gKlxuICogICAgICB2YXIgYXJyYXlzID0ge1xuICogICAgICAgIHBvc2l0aW9uOiB7IG51bUNvbXBvbmVudHM6IDMsIGRhdGE6IFswLCAwLCAwLCAxMCwgMCwgMCwgMCwgMTAsIDAsIDEwLCAxMCwgMF0sIH0sXG4gKiAgICAgICAgdGV4Y29vcmQ6IHsgbnVtQ29tcG9uZW50czogMiwgZGF0YTogWzAsIDAsIDAsIDEsIDEsIDAsIDEsIDFdLCAgICAgICAgICAgICAgICAgfSxcbiAqICAgICAgICBub3JtYWw6ICAgeyBudW1Db21wb25lbnRzOiAzLCBkYXRhOiBbMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMV0sICAgICB9LFxuICogICAgICAgIGNvbG9yOiAgICB7IG51bUNvbXBvbmVudHM6IDQsIGRhdGE6IFsyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMCwgMCwgMjU1LCAwLCAwLCAyNTUsIDI1NV0sIHR5cGU6IFVpbnQ4QXJyYXksIH0sXG4gKiAgICAgICAgaW5kaWNlczogIHsgbnVtQ29tcG9uZW50czogMywgZGF0YTogWzAsIDEsIDIsIDEsIDIsIDNdLCAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAqICAgICAgfTtcbiAqXG4gKiByZXR1cm5zIHNvbWV0aGluZyBsaWtlXG4gKlxuICogICAgICB2YXIgYXR0cmlicyA9IHtcbiAqICAgICAgICBwb3NpdGlvbjogeyBudW1Db21wb25lbnRzOiAzLCB0eXBlOiBnbC5GTE9BVCwgICAgICAgICBub3JtYWxpemU6IGZhbHNlLCBidWZmZXI6IFdlYkdMQnVmZmVyLCB9LFxuICogICAgICAgIHRleGNvb3JkOiB7IG51bUNvbXBvbmVudHM6IDIsIHR5cGU6IGdsLkZMT0FULCAgICAgICAgIG5vcm1hbGl6ZTogZmFsc2UsIGJ1ZmZlcjogV2ViR0xCdWZmZXIsIH0sXG4gKiAgICAgICAgbm9ybWFsOiAgIHsgbnVtQ29tcG9uZW50czogMywgdHlwZTogZ2wuRkxPQVQsICAgICAgICAgbm9ybWFsaXplOiBmYWxzZSwgYnVmZmVyOiBXZWJHTEJ1ZmZlciwgfSxcbiAqICAgICAgICBjb2xvcjogICAgeyBudW1Db21wb25lbnRzOiA0LCB0eXBlOiBnbC5VTlNJR05FRF9CWVRFLCBub3JtYWxpemU6IHRydWUsICBidWZmZXI6IFdlYkdMQnVmZmVyLCB9LFxuICogICAgICB9O1xuICpcbiAqIG5vdGVzOlxuICpcbiAqICogICBBcnJheXMgY2FuIHRha2UgdmFyaW91cyBmb3Jtc1xuICpcbiAqICAgICBCYXJlIEphdmFTY3JpcHQgQXJyYXlzXG4gKlxuICogICAgICAgICB2YXIgYXJyYXlzID0ge1xuICogICAgICAgICAgICBwb3NpdGlvbjogWy0xLCAxLCAwXSxcbiAqICAgICAgICAgICAgbm9ybWFsOiBbMCwgMSwgMF0sXG4gKiAgICAgICAgICAgIC4uLlxuICogICAgICAgICB9XG4gKlxuICogICAgIEJhcmUgVHlwZWRBcnJheXNcbiAqXG4gKiAgICAgICAgIHZhciBhcnJheXMgPSB7XG4gKiAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgRmxvYXQzMkFycmF5KFstMSwgMSwgMF0pLFxuICogICAgICAgICAgICBjb2xvcjogbmV3IFVpbnQ4QXJyYXkoWzI1NSwgMTI4LCA2NCwgMjU1XSksXG4gKiAgICAgICAgICAgIC4uLlxuICogICAgICAgICB9XG4gKlxuICogKiAgIFdpbGwgZ3Vlc3MgYXQgYG51bUNvbXBvbmVudHNgIGlmIG5vdCBzcGVjaWZpZWQgYmFzZWQgb24gbmFtZS5cbiAqXG4gKiAgICAgSWYgYGNvb3JkYCBpcyBpbiB0aGUgbmFtZSBhc3N1bWVzIGBudW1Db21wb25lbnRzID0gMmBcbiAqXG4gKiAgICAgSWYgYGNvbG9yYCBpcyBpbiB0aGUgbmFtZSBhc3N1bWVzIGBudW1Db21wb25lbnRzID0gNGBcbiAqXG4gKiAgICAgb3RoZXJ3aXNlIGFzc3VtZXMgYG51bUNvbXBvbmVudHMgPSAzYFxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgd2ViZ2wgcmVuZGVyaW5nIGNvbnRleHQuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLkFycmF5c30gYXJyYXlzIFRoZSBhcnJheXNcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuQnVmZmVySW5mb30gW3NyY0J1ZmZlckluZm9dIGEgQnVmZmVySW5mbyB0byBjb3B5IGZyb21cbiAqICAgVGhpcyBsZXRzIHlvdSBzaGFyZSBidWZmZXJzLiBBbnkgYXJyYXlzIHlvdSBzdXBwbHkgd2lsbCBvdmVycmlkZVxuICogICB0aGUgYnVmZmVycyBmcm9tIHNyY0J1ZmZlckluZm8uXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgbW9kdWxlOnR3Z2wuQXR0cmliSW5mbz59IHRoZSBhdHRyaWJzXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvYXR0cmlidXRlc1xuICovXG5mdW5jdGlvbiBjcmVhdGVBdHRyaWJzRnJvbUFycmF5cyhnbCwgYXJyYXlzKSB7XG4gIGNvbnN0IGF0dHJpYnMgPSB7fTtcbiAgT2JqZWN0LmtleXMoYXJyYXlzKS5mb3JFYWNoKGZ1bmN0aW9uKGFycmF5TmFtZSkge1xuICAgIGlmICghaXNJbmRpY2VzKGFycmF5TmFtZSkpIHtcbiAgICAgIGNvbnN0IGFycmF5ID0gYXJyYXlzW2FycmF5TmFtZV07XG4gICAgICBjb25zdCBhdHRyaWJOYW1lID0gYXJyYXkuYXR0cmliIHx8IGFycmF5Lm5hbWUgfHwgYXJyYXkuYXR0cmliTmFtZSB8fCAoZGVmYXVsdHMkMi5hdHRyaWJQcmVmaXggKyBhcnJheU5hbWUpO1xuICAgICAgaWYgKGFycmF5LnZhbHVlKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheS52YWx1ZSkgJiYgIWlzQXJyYXlCdWZmZXIkMShhcnJheS52YWx1ZSkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FycmF5LnZhbHVlIGlzIG5vdCBhcnJheSBvciB0eXBlZGFycmF5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgYXR0cmlic1thdHRyaWJOYW1lXSA9IHtcbiAgICAgICAgICB2YWx1ZTogYXJyYXkudmFsdWUsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZm47XG4gICAgICAgIGlmIChhcnJheS5idWZmZXIgJiYgYXJyYXkuYnVmZmVyIGluc3RhbmNlb2YgV2ViR0xCdWZmZXIpIHtcbiAgICAgICAgICBmbiA9IGF0dHJpYkJ1ZmZlckZyb21CdWZmZXI7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGFycmF5ID09PSBcIm51bWJlclwiIHx8IHR5cGVvZiBhcnJheS5kYXRhID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgZm4gPSBhdHRyaWJCdWZmZXJGcm9tU2l6ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmbiA9IGF0dHJpYkJ1ZmZlckZyb21BcnJheUxpa2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qge2J1ZmZlciwgdHlwZSwgbnVtVmFsdWVzLCBhcnJheVR5cGV9ID0gZm4oZ2wsIGFycmF5LCBhcnJheU5hbWUpO1xuICAgICAgICBjb25zdCBub3JtYWxpemF0aW9uID0gYXJyYXkubm9ybWFsaXplICE9PSB1bmRlZmluZWQgPyBhcnJheS5ub3JtYWxpemUgOiBnZXROb3JtYWxpemF0aW9uRm9yVHlwZWRBcnJheVR5cGUoYXJyYXlUeXBlKTtcbiAgICAgICAgY29uc3QgbnVtQ29tcG9uZW50cyA9IGdldE51bUNvbXBvbmVudHMkMShhcnJheSwgYXJyYXlOYW1lLCBudW1WYWx1ZXMpO1xuICAgICAgICBhdHRyaWJzW2F0dHJpYk5hbWVdID0ge1xuICAgICAgICAgIGJ1ZmZlcjogICAgICAgIGJ1ZmZlcixcbiAgICAgICAgICBudW1Db21wb25lbnRzOiBudW1Db21wb25lbnRzLFxuICAgICAgICAgIHR5cGU6ICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgbm9ybWFsaXplOiAgICAgbm9ybWFsaXphdGlvbixcbiAgICAgICAgICBzdHJpZGU6ICAgICAgICBhcnJheS5zdHJpZGUgfHwgMCxcbiAgICAgICAgICBvZmZzZXQ6ICAgICAgICBhcnJheS5vZmZzZXQgfHwgMCxcbiAgICAgICAgICBkaXZpc29yOiAgICAgICBhcnJheS5kaXZpc29yID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBhcnJheS5kaXZpc29yLFxuICAgICAgICAgIGRyYXdUeXBlOiAgICAgIGFycmF5LmRyYXdUeXBlLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGdsLmJpbmRCdWZmZXIoQVJSQVlfQlVGRkVSJDEsIG51bGwpO1xuICByZXR1cm4gYXR0cmlicztcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBjb250ZW50cyBvZiBhIGJ1ZmZlciBhdHRhY2hlZCB0byBhbiBhdHRyaWJJbmZvXG4gKlxuICogVGhpcyBpcyBoZWxwZXIgZnVuY3Rpb24gdG8gZHluYW1pY2FsbHkgdXBkYXRlIGEgYnVmZmVyLlxuICpcbiAqIExldCdzIHNheSB5b3UgbWFrZSBhIGJ1ZmZlckluZm9cbiAqXG4gKiAgICAgdmFyIGFycmF5cyA9IHtcbiAqICAgICAgICBwb3NpdGlvbjogbmV3IEZsb2F0MzJBcnJheShbMCwgMCwgMCwgMTAsIDAsIDAsIDAsIDEwLCAwLCAxMCwgMTAsIDBdKSxcbiAqICAgICAgICB0ZXhjb29yZDogbmV3IEZsb2F0MzJBcnJheShbMCwgMCwgMCwgMSwgMSwgMCwgMSwgMV0pLFxuICogICAgICAgIG5vcm1hbDogICBuZXcgRmxvYXQzMkFycmF5KFswLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxXSksXG4gKiAgICAgICAgaW5kaWNlczogIG5ldyBVaW50MTZBcnJheShbMCwgMSwgMiwgMSwgMiwgM10pLFxuICogICAgIH07XG4gKiAgICAgdmFyIGJ1ZmZlckluZm8gPSB0d2dsLmNyZWF0ZUJ1ZmZlckluZm9Gcm9tQXJyYXlzKGdsLCBhcnJheXMpO1xuICpcbiAqICBBbmQgeW91IHdhbnQgdG8gZHluYW1pY2FsbHkgdXBkYXRlIHRoZSBwb3NpdGlvbnMuIFlvdSBjb3VsZCBkbyB0aGlzXG4gKlxuICogICAgIC8vIGFzc3VtaW5nIGFycmF5cy5wb3NpdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHVwZGF0ZWQgd2l0aCBuZXcgZGF0YS5cbiAqICAgICB0d2dsLnNldEF0dHJpYkluZm9CdWZmZXJGcm9tQXJyYXkoZ2wsIGJ1ZmZlckluZm8uYXR0cmlicy5wb3NpdGlvbiwgYXJyYXlzLnBvc2l0aW9uKTtcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2xcbiAqIEBwYXJhbSB7QXR0cmliSW5mb30gYXR0cmliSW5mbyBUaGUgYXR0cmliSW5mbyB3aG8ncyBidWZmZXIgY29udGVudHMgdG8gc2V0LiBOT1RFOiBJZiB5b3UgaGF2ZSBhbiBhdHRyaWJ1dGUgcHJlZml4XG4gKiAgIHRoZSBuYW1lIG9mIHRoZSBhdHRyaWJ1dGUgd2lsbCBpbmNsdWRlIHRoZSBwcmVmaXguXG4gKiBAcGFyYW0ge0FycmF5U3BlY30gYXJyYXkgTm90ZTogaXQgaXMgYXJndWFibHkgaW5lZmZpY2llbnQgdG8gcGFzcyBpbiBhbnl0aGluZyBidXQgYSB0eXBlZCBhcnJheSBiZWNhdXNlIGFueXRoaW5nXG4gKiAgICBlbHNlIHdpbGwgaGF2ZSB0byBiZSBjb252ZXJ0ZWQgdG8gYSB0eXBlZCBhcnJheSBiZWZvcmUgaXQgY2FuIGJlIHVzZWQgYnkgV2ViR0wuIER1cmluZyBpbml0IHRpbWUgdGhhdFxuICogICAgaW5lZmZpY2llbmN5IGlzIHVzdWFsbHkgbm90IGltcG9ydGFudCBidXQgaWYgeW91J3JlIHVwZGF0aW5nIGRhdGEgZHluYW1pY2FsbHkgYmVzdCB0byBiZSBlZmZpY2llbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29mZnNldF0gYW4gb3B0aW9uYWwgb2Zmc2V0IGludG8gdGhlIGJ1ZmZlci4gVGhpcyBpcyBvbmx5IGFuIG9mZnNldCBpbnRvIHRoZSBXZWJHTCBidWZmZXJcbiAqICAgIG5vdCB0aGUgYXJyYXkuIFRvIHBhc3MgaW4gYW4gb2Zmc2V0IGludG8gdGhlIGFycmF5IGl0c2VsZiB1c2UgYSB0eXBlZCBhcnJheSBhbmQgY3JlYXRlIGFuIGBBcnJheUJ1ZmZlclZpZXdgXG4gKiAgICBmb3IgdGhlIHBvcnRpb24gb2YgdGhlIGFycmF5IHlvdSB3YW50IHRvIHVzZS5cbiAqXG4gKiAgICAgICAgdmFyIHNvbWVBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoMTAwMCk7IC8vIGFuIGFycmF5IHdpdGggMTAwMCBmbG9hdHNcbiAqICAgICAgICB2YXIgc29tZVN1YkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShzb21lQXJyYXkuYnVmZmVyLCBvZmZzZXRJbkJ5dGVzLCBzaXplSW5Vbml0cyk7IC8vIGEgdmlldyBpbnRvIHNvbWVBcnJheVxuICpcbiAqICAgIE5vdyB5b3UgY2FuIHBhc3MgYHNvbWVTdWJBcnJheWAgaW50byBzZXRBdHRyaWJJbmZvQnVmZmVyRnJvbUFycmF5YFxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL2F0dHJpYnV0ZXNcbiAqL1xuZnVuY3Rpb24gc2V0QXR0cmliSW5mb0J1ZmZlckZyb21BcnJheShnbCwgYXR0cmliSW5mbywgYXJyYXksIG9mZnNldCkge1xuICBhcnJheSA9IG1ha2VUeXBlZEFycmF5KGFycmF5KTtcbiAgaWYgKG9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZ2wuYmluZEJ1ZmZlcihBUlJBWV9CVUZGRVIkMSwgYXR0cmliSW5mby5idWZmZXIpO1xuICAgIGdsLmJ1ZmZlclN1YkRhdGEoQVJSQVlfQlVGRkVSJDEsIG9mZnNldCwgYXJyYXkpO1xuICB9IGVsc2Uge1xuICAgIHNldEJ1ZmZlckZyb21UeXBlZEFycmF5KGdsLCBBUlJBWV9CVUZGRVIkMSwgYXR0cmliSW5mby5idWZmZXIsIGFycmF5LCBhdHRyaWJJbmZvLmRyYXdUeXBlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRCeXRlc1BlclZhbHVlRm9yR0xUeXBlKGdsLCB0eXBlKSB7XG4gIGlmICh0eXBlID09PSBCWVRFJDEpICAgICAgICAgICByZXR1cm4gMTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaWYgKHR5cGUgPT09IFVOU0lHTkVEX0JZVEUkMikgIHJldHVybiAxOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBpZiAodHlwZSA9PT0gU0hPUlQkMSkgICAgICAgICAgcmV0dXJuIDI7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGlmICh0eXBlID09PSBVTlNJR05FRF9TSE9SVCQyKSByZXR1cm4gMjsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaWYgKHR5cGUgPT09IElOVCQyKSAgICAgICAgICAgIHJldHVybiA0OyAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBpZiAodHlwZSA9PT0gVU5TSUdORURfSU5UJDIpICAgcmV0dXJuIDQ7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGlmICh0eXBlID09PSBGTE9BVCQyKSAgICAgICAgICByZXR1cm4gNDsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgcmV0dXJuIDA7XG59XG5cbi8vIFRyaWVzIHRvIGdldCB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGZyb20gYSBzZXQgb2YgYXJyYXlzLlxuY29uc3QgcG9zaXRpb25LZXlzID0gWydwb3NpdGlvbicsICdwb3NpdGlvbnMnLCAnYV9wb3NpdGlvbiddO1xuZnVuY3Rpb24gZ2V0TnVtRWxlbWVudHNGcm9tTm9uSW5kZXhlZEFycmF5cyhhcnJheXMpIHtcbiAgbGV0IGtleTtcbiAgbGV0IGlpO1xuICBmb3IgKGlpID0gMDsgaWkgPCBwb3NpdGlvbktleXMubGVuZ3RoOyArK2lpKSB7XG4gICAga2V5ID0gcG9zaXRpb25LZXlzW2lpXTtcbiAgICBpZiAoa2V5IGluIGFycmF5cykge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGlmIChpaSA9PT0gcG9zaXRpb25LZXlzLmxlbmd0aCkge1xuICAgIGtleSA9IE9iamVjdC5rZXlzKGFycmF5cylbMF07XG4gIH1cbiAgY29uc3QgYXJyYXkgPSBhcnJheXNba2V5XTtcbiAgY29uc3QgbGVuZ3RoID0gZ2V0QXJyYXkkMShhcnJheSkubGVuZ3RoO1xuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gMTsgICAvLyBUaGVyZSdzIG5vIGFycmF5c1xuICB9XG4gIGNvbnN0IG51bUNvbXBvbmVudHMgPSBnZXROdW1Db21wb25lbnRzJDEoYXJyYXksIGtleSk7XG4gIGNvbnN0IG51bUVsZW1lbnRzID0gbGVuZ3RoIC8gbnVtQ29tcG9uZW50cztcbiAgaWYgKGxlbmd0aCAlIG51bUNvbXBvbmVudHMgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBudW1Db21wb25lbnRzICR7bnVtQ29tcG9uZW50c30gbm90IGNvcnJlY3QgZm9yIGxlbmd0aCAke2xlbmd0aH1gKTtcbiAgfVxuICByZXR1cm4gbnVtRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGdldE51bUVsZW1lbnRzRnJvbUF0dHJpYnV0ZXMoZ2wsIGF0dHJpYnMpIHtcbiAgbGV0IGtleTtcbiAgbGV0IGlpO1xuICBmb3IgKGlpID0gMDsgaWkgPCBwb3NpdGlvbktleXMubGVuZ3RoOyArK2lpKSB7XG4gICAga2V5ID0gcG9zaXRpb25LZXlzW2lpXTtcbiAgICBpZiAoa2V5IGluIGF0dHJpYnMpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBrZXkgPSBkZWZhdWx0cyQyLmF0dHJpYlByZWZpeCArIGtleTtcbiAgICBpZiAoa2V5IGluIGF0dHJpYnMpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBpZiAoaWkgPT09IHBvc2l0aW9uS2V5cy5sZW5ndGgpIHtcbiAgICBrZXkgPSBPYmplY3Qua2V5cyhhdHRyaWJzKVswXTtcbiAgfVxuICBjb25zdCBhdHRyaWIgPSBhdHRyaWJzW2tleV07XG4gIGlmICghYXR0cmliLmJ1ZmZlcikge1xuICAgIHJldHVybiAxOyAvLyBUaGVyZSdzIG5vIGJ1ZmZlclxuICB9XG4gIGdsLmJpbmRCdWZmZXIoQVJSQVlfQlVGRkVSJDEsIGF0dHJpYi5idWZmZXIpO1xuICBjb25zdCBudW1CeXRlcyA9IGdsLmdldEJ1ZmZlclBhcmFtZXRlcihBUlJBWV9CVUZGRVIkMSwgQlVGRkVSX1NJWkUpO1xuICBnbC5iaW5kQnVmZmVyKEFSUkFZX0JVRkZFUiQxLCBudWxsKTtcblxuICBjb25zdCBieXRlc1BlclZhbHVlID0gZ2V0Qnl0ZXNQZXJWYWx1ZUZvckdMVHlwZShnbCwgYXR0cmliLnR5cGUpO1xuICBjb25zdCB0b3RhbEVsZW1lbnRzID0gbnVtQnl0ZXMgLyBieXRlc1BlclZhbHVlO1xuICBjb25zdCBudW1Db21wb25lbnRzID0gYXR0cmliLm51bUNvbXBvbmVudHMgfHwgYXR0cmliLnNpemU7XG4gIC8vIFRPRE86IGNoZWNrIHN0cmlkZVxuICBjb25zdCBudW1FbGVtZW50cyA9IHRvdGFsRWxlbWVudHMgLyBudW1Db21wb25lbnRzO1xuICBpZiAobnVtRWxlbWVudHMgJSAxICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBudW1Db21wb25lbnRzICR7bnVtQ29tcG9uZW50c30gbm90IGNvcnJlY3QgZm9yIGxlbmd0aCAke2xlbmd0aH1gKTtcbiAgfVxuICByZXR1cm4gbnVtRWxlbWVudHM7XG59XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gQnVmZmVySW5mb1xuICogQHByb3BlcnR5IHtudW1iZXJ9IG51bUVsZW1lbnRzIFRoZSBudW1iZXIgb2YgZWxlbWVudHMgdG8gcGFzcyB0byBgZ2wuZHJhd0FycmF5c2Agb3IgYGdsLmRyYXdFbGVtZW50c2AuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2VsZW1lbnRUeXBlXSBUaGUgdHlwZSBvZiBpbmRpY2VzIGBVTlNJR05FRF9CWVRFYCwgYFVOU0lHTkVEX1NIT1JUYCBldGMuLlxuICogQHByb3BlcnR5IHtXZWJHTEJ1ZmZlcn0gW2luZGljZXNdIFRoZSBpbmRpY2VzIGBFTEVNRU5UX0FSUkFZX0JVRkZFUmAgaWYgYW55IGluZGljZXMgZXhpc3QuXG4gKiBAcHJvcGVydHkge09iamVjdC48c3RyaW5nLCBtb2R1bGU6dHdnbC5BdHRyaWJJbmZvPn0gW2F0dHJpYnNdIFRoZSBhdHRyaWJzIGFwcHJvcHJpYXRlIHRvIGNhbGwgYHNldEF0dHJpYnV0ZXNgXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBCdWZmZXJJbmZvIGZyb20gYW4gb2JqZWN0IG9mIGFycmF5cy5cbiAqXG4gKiBUaGlzIGNhbiBiZSBwYXNzZWQgdG8ge0BsaW5rIG1vZHVsZTp0d2dsLnNldEJ1ZmZlcnNBbmRBdHRyaWJ1dGVzfSBhbmQgdG9cbiAqIHtAbGluayBtb2R1bGU6dHdnbDpkcmF3QnVmZmVySW5mb30uXG4gKlxuICogR2l2ZW4gYW4gb2JqZWN0IGxpa2VcbiAqXG4gKiAgICAgdmFyIGFycmF5cyA9IHtcbiAqICAgICAgIHBvc2l0aW9uOiB7IG51bUNvbXBvbmVudHM6IDMsIGRhdGE6IFswLCAwLCAwLCAxMCwgMCwgMCwgMCwgMTAsIDAsIDEwLCAxMCwgMF0sIH0sXG4gKiAgICAgICB0ZXhjb29yZDogeyBudW1Db21wb25lbnRzOiAyLCBkYXRhOiBbMCwgMCwgMCwgMSwgMSwgMCwgMSwgMV0sICAgICAgICAgICAgICAgICB9LFxuICogICAgICAgbm9ybWFsOiAgIHsgbnVtQ29tcG9uZW50czogMywgZGF0YTogWzAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDFdLCAgICAgfSxcbiAqICAgICAgIGluZGljZXM6ICB7IG51bUNvbXBvbmVudHM6IDMsIGRhdGE6IFswLCAxLCAyLCAxLCAyLCAzXSwgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gKiAgICAgfTtcbiAqXG4gKiAgQ3JlYXRlcyBhbiBCdWZmZXJJbmZvIGxpa2UgdGhpc1xuICpcbiAqICAgICBidWZmZXJJbmZvID0ge1xuICogICAgICAgbnVtRWxlbWVudHM6IDQsICAgICAgICAvLyBvciB3aGF0ZXZlciB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGlzXG4gKiAgICAgICBpbmRpY2VzOiBXZWJHTEJ1ZmZlciwgIC8vIHRoaXMgcHJvcGVydHkgd2lsbCBub3QgZXhpc3QgaWYgdGhlcmUgYXJlIG5vIGluZGljZXNcbiAqICAgICAgIGF0dHJpYnM6IHtcbiAqICAgICAgICAgcG9zaXRpb246IHsgYnVmZmVyOiBXZWJHTEJ1ZmZlciwgbnVtQ29tcG9uZW50czogMywgfSxcbiAqICAgICAgICAgbm9ybWFsOiAgIHsgYnVmZmVyOiBXZWJHTEJ1ZmZlciwgbnVtQ29tcG9uZW50czogMywgfSxcbiAqICAgICAgICAgdGV4Y29vcmQ6IHsgYnVmZmVyOiBXZWJHTEJ1ZmZlciwgbnVtQ29tcG9uZW50czogMiwgfSxcbiAqICAgICAgIH0sXG4gKiAgICAgfTtcbiAqXG4gKiAgVGhlIHByb3BlcnRpZXMgb2YgYXJyYXlzIGNhbiBiZSBKYXZhU2NyaXB0IGFycmF5cyBpbiB3aGljaCBjYXNlIHRoZSBudW1iZXIgb2YgY29tcG9uZW50c1xuICogIHdpbGwgYmUgZ3Vlc3NlZC5cbiAqXG4gKiAgICAgdmFyIGFycmF5cyA9IHtcbiAqICAgICAgICBwb3NpdGlvbjogWzAsIDAsIDAsIDEwLCAwLCAwLCAwLCAxMCwgMCwgMTAsIDEwLCAwXSxcbiAqICAgICAgICB0ZXhjb29yZDogWzAsIDAsIDAsIDEsIDEsIDAsIDEsIDFdLFxuICogICAgICAgIG5vcm1hbDogICBbMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMV0sXG4gKiAgICAgICAgaW5kaWNlczogIFswLCAxLCAyLCAxLCAyLCAzXSxcbiAqICAgICB9O1xuICpcbiAqICBUaGV5IGNhbiBhbHNvIGJlIFR5cGVkQXJyYXlzXG4gKlxuICogICAgIHZhciBhcnJheXMgPSB7XG4gKiAgICAgICAgcG9zaXRpb246IG5ldyBGbG9hdDMyQXJyYXkoWzAsIDAsIDAsIDEwLCAwLCAwLCAwLCAxMCwgMCwgMTAsIDEwLCAwXSksXG4gKiAgICAgICAgdGV4Y29vcmQ6IG5ldyBGbG9hdDMyQXJyYXkoWzAsIDAsIDAsIDEsIDEsIDAsIDEsIDFdKSxcbiAqICAgICAgICBub3JtYWw6ICAgbmV3IEZsb2F0MzJBcnJheShbMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMV0pLFxuICogICAgICAgIGluZGljZXM6ICBuZXcgVWludDE2QXJyYXkoWzAsIDEsIDIsIDEsIDIsIDNdKSxcbiAqICAgICB9O1xuICpcbiAqICBPciBBdWdtZW50ZWRUeXBlZEFycmF5c1xuICpcbiAqICAgICB2YXIgcG9zaXRpb25zID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCA0KTtcbiAqICAgICB2YXIgdGV4Y29vcmRzID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgyLCA0KTtcbiAqICAgICB2YXIgbm9ybWFscyAgID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCA0KTtcbiAqICAgICB2YXIgaW5kaWNlcyAgID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCAyLCBVaW50MTZBcnJheSk7XG4gKlxuICogICAgIHBvc2l0aW9ucy5wdXNoKFswLCAwLCAwLCAxMCwgMCwgMCwgMCwgMTAsIDAsIDEwLCAxMCwgMF0pO1xuICogICAgIHRleGNvb3Jkcy5wdXNoKFswLCAwLCAwLCAxLCAxLCAwLCAxLCAxXSk7XG4gKiAgICAgbm9ybWFscy5wdXNoKFswLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxXSk7XG4gKiAgICAgaW5kaWNlcy5wdXNoKFswLCAxLCAyLCAxLCAyLCAzXSk7XG4gKlxuICogICAgIHZhciBhcnJheXMgPSB7XG4gKiAgICAgICAgcG9zaXRpb246IHBvc2l0aW9ucyxcbiAqICAgICAgICB0ZXhjb29yZDogdGV4Y29vcmRzLFxuICogICAgICAgIG5vcm1hbDogICBub3JtYWxzLFxuICogICAgICAgIGluZGljZXM6ICBpbmRpY2VzLFxuICogICAgIH07XG4gKlxuICogRm9yIHRoZSBsYXN0IGV4YW1wbGUgaXQgaXMgZXF1aXZhbGVudCB0b1xuICpcbiAqICAgICB2YXIgYnVmZmVySW5mbyA9IHtcbiAqICAgICAgIGF0dHJpYnM6IHtcbiAqICAgICAgICAgcG9zaXRpb246IHsgbnVtQ29tcG9uZW50czogMywgYnVmZmVyOiBnbC5jcmVhdGVCdWZmZXIoKSwgfSxcbiAqICAgICAgICAgdGV4Y29vcmQ6IHsgbnVtQ29tcG9uZW50czogMiwgYnVmZmVyOiBnbC5jcmVhdGVCdWZmZXIoKSwgfSxcbiAqICAgICAgICAgbm9ybWFsOiB7IG51bUNvbXBvbmVudHM6IDMsIGJ1ZmZlcjogZ2wuY3JlYXRlQnVmZmVyKCksIH0sXG4gKiAgICAgICB9LFxuICogICAgICAgaW5kaWNlczogZ2wuY3JlYXRlQnVmZmVyKCksXG4gKiAgICAgICBudW1FbGVtZW50czogNixcbiAqICAgICB9O1xuICpcbiAqICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmZmVySW5mby5hdHRyaWJzLnBvc2l0aW9uLmJ1ZmZlcik7XG4gKiAgICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIGFycmF5cy5wb3NpdGlvbiwgZ2wuU1RBVElDX0RSQVcpO1xuICogICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBidWZmZXJJbmZvLmF0dHJpYnMudGV4Y29vcmQuYnVmZmVyKTtcbiAqICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgYXJyYXlzLnRleGNvb3JkLCBnbC5TVEFUSUNfRFJBVyk7XG4gKiAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlckluZm8uYXR0cmlicy5ub3JtYWwuYnVmZmVyKTtcbiAqICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgYXJyYXlzLm5vcm1hbCwgZ2wuU1RBVElDX0RSQVcpO1xuICogICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIGJ1ZmZlckluZm8uaW5kaWNlcyk7XG4gKiAgICAgZ2wuYnVmZmVyRGF0YShnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgYXJyYXlzLmluZGljZXMsIGdsLlNUQVRJQ19EUkFXKTtcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgQSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuQXJyYXlzfSBhcnJheXMgWW91ciBkYXRhXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLkJ1ZmZlckluZm99IFtzcmNCdWZmZXJJbmZvXSBBbiBleGlzdGluZ1xuICogICAgICAgIGJ1ZmZlciBpbmZvIHRvIHN0YXJ0IGZyb20uIFdlYkdMQnVmZmVycyBldGMgc3BlY2lmaWVkXG4gKiAgICAgICAgaW4gdGhlIHNyY0J1ZmZlckluZm8gd2lsbCBiZSB1c2VkIGluIGEgbmV3IEJ1ZmZlckluZm9cbiAqICAgICAgICB3aXRoIGFueSBhcnJheXMgc3BlY2lmaWVkIG92ZXJyaWRpbmcgdGhlIG9uZXMgaW5cbiAqICAgICAgICBzcmNCdWZmZXJJbmZvLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wuQnVmZmVySW5mb30gQSBCdWZmZXJJbmZvXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvYXR0cmlidXRlc1xuICovXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXJJbmZvRnJvbUFycmF5cyhnbCwgYXJyYXlzLCBzcmNCdWZmZXJJbmZvKSB7XG4gIGNvbnN0IG5ld0F0dHJpYnMgPSBjcmVhdGVBdHRyaWJzRnJvbUFycmF5cyhnbCwgYXJyYXlzKTtcbiAgY29uc3QgYnVmZmVySW5mbyA9IE9iamVjdC5hc3NpZ24oe30sIHNyY0J1ZmZlckluZm8gPyBzcmNCdWZmZXJJbmZvIDoge30pO1xuICBidWZmZXJJbmZvLmF0dHJpYnMgPSBPYmplY3QuYXNzaWduKHt9LCBzcmNCdWZmZXJJbmZvID8gc3JjQnVmZmVySW5mby5hdHRyaWJzIDoge30sIG5ld0F0dHJpYnMpO1xuICBjb25zdCBpbmRpY2VzID0gYXJyYXlzLmluZGljZXM7XG4gIGlmIChpbmRpY2VzKSB7XG4gICAgY29uc3QgbmV3SW5kaWNlcyA9IG1ha2VUeXBlZEFycmF5KGluZGljZXMsIFwiaW5kaWNlc1wiKTtcbiAgICBidWZmZXJJbmZvLmluZGljZXMgPSBjcmVhdGVCdWZmZXJGcm9tVHlwZWRBcnJheShnbCwgbmV3SW5kaWNlcywgRUxFTUVOVF9BUlJBWV9CVUZGRVIkMik7XG4gICAgYnVmZmVySW5mby5udW1FbGVtZW50cyA9IG5ld0luZGljZXMubGVuZ3RoO1xuICAgIGJ1ZmZlckluZm8uZWxlbWVudFR5cGUgPSBnZXRHTFR5cGVGb3JUeXBlZEFycmF5KG5ld0luZGljZXMpO1xuICB9IGVsc2UgaWYgKCFidWZmZXJJbmZvLm51bUVsZW1lbnRzKSB7XG4gICAgYnVmZmVySW5mby5udW1FbGVtZW50cyA9IGdldE51bUVsZW1lbnRzRnJvbUF0dHJpYnV0ZXMoZ2wsIGJ1ZmZlckluZm8uYXR0cmlicyk7XG4gIH1cblxuICByZXR1cm4gYnVmZmVySW5mbztcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgYnVmZmVyIGZyb20gYW4gYXJyYXksIHR5cGVkIGFycmF5LCBvciBhcnJheSBzcGVjXG4gKlxuICogR2l2ZW4gc29tZXRoaW5nIGxpa2UgdGhpc1xuICpcbiAqICAgICBbMSwgMiwgM10sXG4gKlxuICogb3JcbiAqXG4gKiAgICAgbmV3IFVpbnQxNkFycmF5KFsxLDIsM10pO1xuICpcbiAqIG9yXG4gKlxuICogICAgIHtcbiAqICAgICAgICBkYXRhOiBbMSwgMiwgM10sXG4gKiAgICAgICAgdHlwZTogVWludDhBcnJheSxcbiAqICAgICB9XG4gKlxuICogcmV0dXJucyBhIFdlYkdMQnVmZmVyIHRoYXQgY29udGFpbnMgdGhlIGdpdmVuIGRhdGEuXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIEEgV2ViR0xSZW5kZXJpbmdDb250ZXh0LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5BcnJheVNwZWN9IGFycmF5IGFuIGFycmF5LCB0eXBlZCBhcnJheSwgb3IgYXJyYXkgc3BlYy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhcnJheU5hbWUgbmFtZSBvZiBhcnJheS4gVXNlZCB0byBndWVzcyB0aGUgdHlwZSBpZiB0eXBlIGNhbiBub3QgYmUgZGVyaXZlZCBvdGhlcndpc2UuXG4gKiBAcmV0dXJuIHtXZWJHTEJ1ZmZlcn0gYSBXZWJHTEJ1ZmZlciBjb250YWluaW5nIHRoZSBkYXRhIGluIGFycmF5LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL2F0dHJpYnV0ZXNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQnVmZmVyRnJvbUFycmF5KGdsLCBhcnJheSwgYXJyYXlOYW1lKSB7XG4gIGNvbnN0IHR5cGUgPSBhcnJheU5hbWUgPT09IFwiaW5kaWNlc1wiID8gRUxFTUVOVF9BUlJBWV9CVUZGRVIkMiA6IEFSUkFZX0JVRkZFUiQxO1xuICBjb25zdCB0eXBlZEFycmF5ID0gbWFrZVR5cGVkQXJyYXkoYXJyYXksIGFycmF5TmFtZSk7XG4gIHJldHVybiBjcmVhdGVCdWZmZXJGcm9tVHlwZWRBcnJheShnbCwgdHlwZWRBcnJheSwgdHlwZSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBidWZmZXJzIGZyb20gYXJyYXlzIG9yIHR5cGVkIGFycmF5c1xuICpcbiAqIEdpdmVuIHNvbWV0aGluZyBsaWtlIHRoaXNcbiAqXG4gKiAgICAgdmFyIGFycmF5cyA9IHtcbiAqICAgICAgICBwb3NpdGlvbnM6IFsxLCAyLCAzXSxcbiAqICAgICAgICBub3JtYWxzOiBbMCwgMCwgMV0sXG4gKiAgICAgfVxuICpcbiAqIHJldHVybnMgc29tZXRoaW5nIGxpa2VcbiAqXG4gKiAgICAgYnVmZmVycyA9IHtcbiAqICAgICAgIHBvc2l0aW9uczogV2ViR0xCdWZmZXIsXG4gKiAgICAgICBub3JtYWxzOiBXZWJHTEJ1ZmZlcixcbiAqICAgICB9XG4gKlxuICogSWYgdGhlIGJ1ZmZlciBpcyBuYW1lZCAnaW5kaWNlcycgaXQgd2lsbCBiZSBtYWRlIGFuIEVMRU1FTlRfQVJSQVlfQlVGRkVSLlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBBIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuQXJyYXlzfSBhcnJheXNcbiAqIEByZXR1cm4ge09iamVjdDxzdHJpbmcsIFdlYkdMQnVmZmVyPn0gcmV0dXJucyBhbiBvYmplY3Qgd2l0aCBvbmUgV2ViR0xCdWZmZXIgcGVyIGFycmF5XG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvYXR0cmlidXRlc1xuICovXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXJzRnJvbUFycmF5cyhnbCwgYXJyYXlzKSB7XG4gIGNvbnN0IGJ1ZmZlcnMgPSB7IH07XG4gIE9iamVjdC5rZXlzKGFycmF5cykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBidWZmZXJzW2tleV0gPSBjcmVhdGVCdWZmZXJGcm9tQXJyYXkoZ2wsIGFycmF5c1trZXldLCBrZXkpO1xuICB9KTtcblxuICAvLyBVZ2ghXG4gIGlmIChhcnJheXMuaW5kaWNlcykge1xuICAgIGJ1ZmZlcnMubnVtRWxlbWVudHMgPSBhcnJheXMuaW5kaWNlcy5sZW5ndGg7XG4gICAgYnVmZmVycy5lbGVtZW50VHlwZSA9IGdldEdMVHlwZUZvclR5cGVkQXJyYXkobWFrZVR5cGVkQXJyYXkoYXJyYXlzLmluZGljZXMpKTtcbiAgfSBlbHNlIHtcbiAgICBidWZmZXJzLm51bUVsZW1lbnRzID0gZ2V0TnVtRWxlbWVudHNGcm9tTm9uSW5kZXhlZEFycmF5cyhhcnJheXMpO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZmZlcnM7XG59XG5cbnZhciBhdHRyaWJ1dGVzID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGNyZWF0ZUF0dHJpYnNGcm9tQXJyYXlzOiBjcmVhdGVBdHRyaWJzRnJvbUFycmF5cyxcbiAgY3JlYXRlQnVmZmVyc0Zyb21BcnJheXM6IGNyZWF0ZUJ1ZmZlcnNGcm9tQXJyYXlzLFxuICBjcmVhdGVCdWZmZXJGcm9tQXJyYXk6IGNyZWF0ZUJ1ZmZlckZyb21BcnJheSxcbiAgY3JlYXRlQnVmZmVyRnJvbVR5cGVkQXJyYXk6IGNyZWF0ZUJ1ZmZlckZyb21UeXBlZEFycmF5LFxuICBjcmVhdGVCdWZmZXJJbmZvRnJvbUFycmF5czogY3JlYXRlQnVmZmVySW5mb0Zyb21BcnJheXMsXG4gIHNldEF0dHJpYkluZm9CdWZmZXJGcm9tQXJyYXk6IHNldEF0dHJpYkluZm9CdWZmZXJGcm9tQXJyYXksXG4gIHNldEF0dHJpYnV0ZVByZWZpeDogc2V0QXR0cmlidXRlUHJlZml4LFxuICBzZXRBdHRyaWJ1dGVEZWZhdWx0c186IHNldERlZmF1bHRzJDIsXG4gIGdldE51bUNvbXBvbmVudHNfOiBnZXROdW1Db21wb25lbnRzJDEsXG4gIGdldEFycmF5XzogZ2V0QXJyYXkkMVxufSk7XG5cbi8qXG4gKiBDb3B5cmlnaHQgMjAxOSBHcmVnZyBUYXZhcmVzXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbiAqIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSxcbiAqIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb25cbiAqIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLFxuICogYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4gKiBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTFxuICogVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSXG4gKiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuY29uc3QgZ2V0QXJyYXkgPSBnZXRBcnJheSQxOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuY29uc3QgZ2V0TnVtQ29tcG9uZW50cyA9IGdldE51bUNvbXBvbmVudHMkMTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuLyoqXG4gKiBAdHlwZWRlZiB7KEludDhBcnJheXxVaW50OEFycmF5fEludDE2QXJyYXl8VWludDE2QXJyYXl8SW50MzJBcnJheXxVaW50MzJBcnJheXxGbG9hdDMyQXJyYXkpfSBUeXBlZEFycmF5XG4gKi9cblxuLyoqXG4gKiBBZGQgYHB1c2hgIHRvIGEgdHlwZWQgYXJyYXkuIEl0IGp1c3Qga2VlcHMgYSAnY3Vyc29yJ1xuICogYW5kIGFsbG93cyB1c2UgdG8gYHB1c2hgIHZhbHVlcyBpbnRvIHRoZSBhcnJheSBzbyB3ZVxuICogZG9uJ3QgaGF2ZSB0byBtYW51YWxseSBjb21wdXRlIG9mZnNldHNcbiAqIEBwYXJhbSB7VHlwZWRBcnJheX0gdHlwZWRBcnJheSBUeXBlZEFycmF5IHRvIGF1Z21lbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1Db21wb25lbnRzIG51bWJlciBvZiBjb21wb25lbnRzLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYXVnbWVudFR5cGVkQXJyYXkodHlwZWRBcnJheSwgbnVtQ29tcG9uZW50cykge1xuICBsZXQgY3Vyc29yID0gMDtcbiAgdHlwZWRBcnJheS5wdXNoID0gZnVuY3Rpb24oKSB7XG4gICAgZm9yIChsZXQgaWkgPSAwOyBpaSA8IGFyZ3VtZW50cy5sZW5ndGg7ICsraWkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gYXJndW1lbnRzW2lpXTtcbiAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5IHx8IGlzQXJyYXlCdWZmZXIkMSh2YWx1ZSkpIHtcbiAgICAgICAgZm9yIChsZXQgamogPSAwOyBqaiA8IHZhbHVlLmxlbmd0aDsgKytqaikge1xuICAgICAgICAgIHR5cGVkQXJyYXlbY3Vyc29yKytdID0gdmFsdWVbampdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlZEFycmF5W2N1cnNvcisrXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgdHlwZWRBcnJheS5yZXNldCA9IGZ1bmN0aW9uKG9wdF9pbmRleCkge1xuICAgIGN1cnNvciA9IG9wdF9pbmRleCB8fCAwO1xuICB9O1xuICB0eXBlZEFycmF5Lm51bUNvbXBvbmVudHMgPSBudW1Db21wb25lbnRzO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodHlwZWRBcnJheSwgJ251bUVsZW1lbnRzJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5sZW5ndGggLyB0aGlzLm51bUNvbXBvbmVudHMgfCAwO1xuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gdHlwZWRBcnJheTtcbn1cblxuLyoqXG4gKiBjcmVhdGVzIGEgdHlwZWQgYXJyYXkgd2l0aCBhIGBwdXNoYCBmdW5jdGlvbiBhdHRhY2hlZFxuICogc28gdGhhdCB5b3UgY2FuIGVhc2lseSAqcHVzaCogdmFsdWVzLlxuICpcbiAqIGBwdXNoYCBjYW4gdGFrZSBtdWx0aXBsZSBhcmd1bWVudHMuIElmIGFuIGFyZ3VtZW50IGlzIGFuIGFycmF5IGVhY2ggZWxlbWVudFxuICogb2YgdGhlIGFycmF5IHdpbGwgYmUgYWRkZWQgdG8gdGhlIHR5cGVkIGFycmF5LlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIGNvbnN0IGFycmF5ID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCAyKTsgIC8vIGNyZWF0ZXMgYSBGbG9hdDMyQXJyYXkgd2l0aCA2IHZhbHVlc1xuICogICAgIGFycmF5LnB1c2goMSwgMiwgMyk7XG4gKiAgICAgYXJyYXkucHVzaChbNCwgNSwgNl0pO1xuICogICAgIC8vIGFycmF5IG5vdyBjb250YWlucyBbMSwgMiwgMywgNCwgNSwgNl1cbiAqXG4gKiBBbHNvIGhhcyBgbnVtQ29tcG9uZW50c2AgYW5kIGBudW1FbGVtZW50c2AgcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtQ29tcG9uZW50cyBudW1iZXIgb2YgY29tcG9uZW50c1xuICogQHBhcmFtIHtudW1iZXJ9IG51bUVsZW1lbnRzIG51bWJlciBvZiBlbGVtZW50cy4gVGhlIHRvdGFsIHNpemUgb2YgdGhlIGFycmF5IHdpbGwgYmUgYG51bUNvbXBvbmVudHMgKiBudW1FbGVtZW50c2AuXG4gKiBAcGFyYW0ge2NvbnN0cnVjdG9yfSBvcHRfdHlwZSBBIGNvbnN0cnVjdG9yIGZvciB0aGUgdHlwZS4gRGVmYXVsdCA9IGBGbG9hdDMyQXJyYXlgLlxuICogQHJldHVybiB7QXJyYXlCdWZmZXJWaWV3fSBBIHR5cGVkIGFycmF5LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheShudW1Db21wb25lbnRzLCBudW1FbGVtZW50cywgb3B0X3R5cGUpIHtcbiAgY29uc3QgVHlwZSA9IG9wdF90eXBlIHx8IEZsb2F0MzJBcnJheTtcbiAgcmV0dXJuIGF1Z21lbnRUeXBlZEFycmF5KG5ldyBUeXBlKG51bUNvbXBvbmVudHMgKiBudW1FbGVtZW50cyksIG51bUNvbXBvbmVudHMpO1xufVxuXG5mdW5jdGlvbiBhbGxCdXRJbmRpY2VzKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUgIT09IFwiaW5kaWNlc1wiO1xufVxuXG4vKipcbiAqIEdpdmVuIGluZGV4ZWQgdmVydGljZXMgY3JlYXRlcyBhIG5ldyBzZXQgb2YgdmVydGljZXMgdW4taW5kZXhlZCBieSBleHBhbmRpbmcgdGhlIGluZGV4ZWQgdmVydGljZXMuXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBUeXBlZEFycmF5Pn0gdmVydGljZXMgVGhlIGluZGV4ZWQgdmVydGljZXMgdG8gZGVpbmRleFxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIFR5cGVkQXJyYXk+fSBUaGUgZGVpbmRleGVkIHZlcnRpY2VzXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICovXG5mdW5jdGlvbiBkZWluZGV4VmVydGljZXModmVydGljZXMpIHtcbiAgY29uc3QgaW5kaWNlcyA9IHZlcnRpY2VzLmluZGljZXM7XG4gIGNvbnN0IG5ld1ZlcnRpY2VzID0ge307XG4gIGNvbnN0IG51bUVsZW1lbnRzID0gaW5kaWNlcy5sZW5ndGg7XG5cbiAgZnVuY3Rpb24gZXhwYW5kVG9VbmluZGV4ZWQoY2hhbm5lbCkge1xuICAgIGNvbnN0IHNyY0J1ZmZlciA9IHZlcnRpY2VzW2NoYW5uZWxdO1xuICAgIGNvbnN0IG51bUNvbXBvbmVudHMgPSBzcmNCdWZmZXIubnVtQ29tcG9uZW50cztcbiAgICBjb25zdCBkc3RCdWZmZXIgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KG51bUNvbXBvbmVudHMsIG51bUVsZW1lbnRzLCBzcmNCdWZmZXIuY29uc3RydWN0b3IpO1xuICAgIGZvciAobGV0IGlpID0gMDsgaWkgPCBudW1FbGVtZW50czsgKytpaSkge1xuICAgICAgY29uc3QgbmR4ID0gaW5kaWNlc1tpaV07XG4gICAgICBjb25zdCBvZmZzZXQgPSBuZHggKiBudW1Db21wb25lbnRzO1xuICAgICAgZm9yIChsZXQgamogPSAwOyBqaiA8IG51bUNvbXBvbmVudHM7ICsramopIHtcbiAgICAgICAgZHN0QnVmZmVyLnB1c2goc3JjQnVmZmVyW29mZnNldCArIGpqXSk7XG4gICAgICB9XG4gICAgfVxuICAgIG5ld1ZlcnRpY2VzW2NoYW5uZWxdID0gZHN0QnVmZmVyO1xuICB9XG5cbiAgT2JqZWN0LmtleXModmVydGljZXMpLmZpbHRlcihhbGxCdXRJbmRpY2VzKS5mb3JFYWNoKGV4cGFuZFRvVW5pbmRleGVkKTtcblxuICByZXR1cm4gbmV3VmVydGljZXM7XG59XG5cbi8qKlxuICogZmxhdHRlbnMgdGhlIG5vcm1hbHMgb2YgZGVpbmRleGVkIHZlcnRpY2VzIGluIHBsYWNlLlxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgVHlwZWRBcnJheT59IHZlcnRpY2VzIFRoZSBkZWluZGV4ZWQgdmVydGljZXMgd2hvJ3Mgbm9ybWFscyB0byBmbGF0dGVuXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgVHlwZWRBcnJheT59IFRoZSBmbGF0dGVuZWQgdmVydGljZXMgKHNhbWUgYXMgd2FzIHBhc3NlZCBpbilcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKi9cbmZ1bmN0aW9uIGZsYXR0ZW5Ob3JtYWxzKHZlcnRpY2VzKSB7XG4gIGlmICh2ZXJ0aWNlcy5pbmRpY2VzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjYW4gbm90IGZsYXR0ZW4gbm9ybWFscyBvZiBpbmRleGVkIHZlcnRpY2VzLiBkZWluZGV4IHRoZW0gZmlyc3QnKTtcbiAgfVxuXG4gIGNvbnN0IG5vcm1hbHMgPSB2ZXJ0aWNlcy5ub3JtYWw7XG4gIGNvbnN0IG51bU5vcm1hbHMgPSBub3JtYWxzLmxlbmd0aDtcbiAgZm9yIChsZXQgaWkgPSAwOyBpaSA8IG51bU5vcm1hbHM7IGlpICs9IDkpIHtcbiAgICAvLyBwdWxsIG91dCB0aGUgMyBub3JtYWxzIGZvciB0aGlzIHRyaWFuZ2xlXG4gICAgY29uc3QgbmF4ID0gbm9ybWFsc1tpaSArIDBdO1xuICAgIGNvbnN0IG5heSA9IG5vcm1hbHNbaWkgKyAxXTtcbiAgICBjb25zdCBuYXogPSBub3JtYWxzW2lpICsgMl07XG5cbiAgICBjb25zdCBuYnggPSBub3JtYWxzW2lpICsgM107XG4gICAgY29uc3QgbmJ5ID0gbm9ybWFsc1tpaSArIDRdO1xuICAgIGNvbnN0IG5ieiA9IG5vcm1hbHNbaWkgKyA1XTtcblxuICAgIGNvbnN0IG5jeCA9IG5vcm1hbHNbaWkgKyA2XTtcbiAgICBjb25zdCBuY3kgPSBub3JtYWxzW2lpICsgN107XG4gICAgY29uc3QgbmN6ID0gbm9ybWFsc1tpaSArIDhdO1xuXG4gICAgLy8gYWRkIHRoZW1cbiAgICBsZXQgbnggPSBuYXggKyBuYnggKyBuY3g7XG4gICAgbGV0IG55ID0gbmF5ICsgbmJ5ICsgbmN5O1xuICAgIGxldCBueiA9IG5heiArIG5ieiArIG5jejtcblxuICAgIC8vIG5vcm1hbGl6ZSB0aGVtXG4gICAgY29uc3QgbGVuZ3RoID0gTWF0aC5zcXJ0KG54ICogbnggKyBueSAqIG55ICsgbnogKiBueik7XG5cbiAgICBueCAvPSBsZW5ndGg7XG4gICAgbnkgLz0gbGVuZ3RoO1xuICAgIG56IC89IGxlbmd0aDtcblxuICAgIC8vIGNvcHkgdGhlbSBiYWNrIGluXG4gICAgbm9ybWFsc1tpaSArIDBdID0gbng7XG4gICAgbm9ybWFsc1tpaSArIDFdID0gbnk7XG4gICAgbm9ybWFsc1tpaSArIDJdID0gbno7XG5cbiAgICBub3JtYWxzW2lpICsgM10gPSBueDtcbiAgICBub3JtYWxzW2lpICsgNF0gPSBueTtcbiAgICBub3JtYWxzW2lpICsgNV0gPSBuejtcblxuICAgIG5vcm1hbHNbaWkgKyA2XSA9IG54O1xuICAgIG5vcm1hbHNbaWkgKyA3XSA9IG55O1xuICAgIG5vcm1hbHNbaWkgKyA4XSA9IG56O1xuICB9XG5cbiAgcmV0dXJuIHZlcnRpY2VzO1xufVxuXG5mdW5jdGlvbiBhcHBseUZ1bmNUb1YzQXJyYXkoYXJyYXksIG1hdHJpeCwgZm4pIHtcbiAgY29uc3QgbGVuID0gYXJyYXkubGVuZ3RoO1xuICBjb25zdCB0bXAgPSBuZXcgRmxvYXQzMkFycmF5KDMpO1xuICBmb3IgKGxldCBpaSA9IDA7IGlpIDwgbGVuOyBpaSArPSAzKSB7XG4gICAgZm4obWF0cml4LCBbYXJyYXlbaWldLCBhcnJheVtpaSArIDFdLCBhcnJheVtpaSArIDJdXSwgdG1wKTtcbiAgICBhcnJheVtpaSAgICBdID0gdG1wWzBdO1xuICAgIGFycmF5W2lpICsgMV0gPSB0bXBbMV07XG4gICAgYXJyYXlbaWkgKyAyXSA9IHRtcFsyXTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Ob3JtYWwobWksIHYsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgY3JlYXRlJDEoKTtcbiAgY29uc3QgdjAgPSB2WzBdO1xuICBjb25zdCB2MSA9IHZbMV07XG4gIGNvbnN0IHYyID0gdlsyXTtcblxuICBkc3RbMF0gPSB2MCAqIG1pWzAgKiA0ICsgMF0gKyB2MSAqIG1pWzAgKiA0ICsgMV0gKyB2MiAqIG1pWzAgKiA0ICsgMl07XG4gIGRzdFsxXSA9IHYwICogbWlbMSAqIDQgKyAwXSArIHYxICogbWlbMSAqIDQgKyAxXSArIHYyICogbWlbMSAqIDQgKyAyXTtcbiAgZHN0WzJdID0gdjAgKiBtaVsyICogNCArIDBdICsgdjEgKiBtaVsyICogNCArIDFdICsgdjIgKiBtaVsyICogNCArIDJdO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogUmVvcmllbnRzIGRpcmVjdGlvbnMgYnkgdGhlIGdpdmVuIG1hdHJpeC4uXG4gKiBAcGFyYW0geyhudW1iZXJbXXxUeXBlZEFycmF5KX0gYXJyYXkgVGhlIGFycmF5LiBBc3N1bWVzIHZhbHVlIGZsb2F0cyBwZXIgZWxlbWVudC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gbWF0cml4IEEgbWF0cml4IHRvIG11bHRpcGx5IGJ5LlxuICogQHJldHVybiB7KG51bWJlcltdfFR5cGVkQXJyYXkpfSB0aGUgc2FtZSBhcnJheSB0aGF0IHdhcyBwYXNzZWQgaW5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKi9cbmZ1bmN0aW9uIHJlb3JpZW50RGlyZWN0aW9ucyhhcnJheSwgbWF0cml4KSB7XG4gIGFwcGx5RnVuY1RvVjNBcnJheShhcnJheSwgbWF0cml4LCB0cmFuc2Zvcm1EaXJlY3Rpb24pO1xuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogUmVvcmllbnRzIG5vcm1hbHMgYnkgdGhlIGludmVyc2UtdHJhbnNwb3NlIG9mIHRoZSBnaXZlblxuICogbWF0cml4Li5cbiAqIEBwYXJhbSB7KG51bWJlcltdfFR5cGVkQXJyYXkpfSBhcnJheSBUaGUgYXJyYXkuIEFzc3VtZXMgdmFsdWUgZmxvYXRzIHBlciBlbGVtZW50LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBtYXRyaXggQSBtYXRyaXggdG8gbXVsdGlwbHkgYnkuXG4gKiBAcmV0dXJuIHsobnVtYmVyW118VHlwZWRBcnJheSl9IHRoZSBzYW1lIGFycmF5IHRoYXQgd2FzIHBhc3NlZCBpblxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqL1xuZnVuY3Rpb24gcmVvcmllbnROb3JtYWxzKGFycmF5LCBtYXRyaXgpIHtcbiAgYXBwbHlGdW5jVG9WM0FycmF5KGFycmF5LCBpbnZlcnNlKG1hdHJpeCksIHRyYW5zZm9ybU5vcm1hbCk7XG4gIHJldHVybiBhcnJheTtcbn1cblxuLyoqXG4gKiBSZW9yaWVudHMgcG9zaXRpb25zIGJ5IHRoZSBnaXZlbiBtYXRyaXguIEluIG90aGVyIHdvcmRzLCBpdFxuICogbXVsdGlwbGllcyBlYWNoIHZlcnRleCBieSB0aGUgZ2l2ZW4gbWF0cml4LlxuICogQHBhcmFtIHsobnVtYmVyW118VHlwZWRBcnJheSl9IGFycmF5IFRoZSBhcnJheS4gQXNzdW1lcyB2YWx1ZSBmbG9hdHMgcGVyIGVsZW1lbnQuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IG1hdHJpeCBBIG1hdHJpeCB0byBtdWx0aXBseSBieS5cbiAqIEByZXR1cm4geyhudW1iZXJbXXxUeXBlZEFycmF5KX0gdGhlIHNhbWUgYXJyYXkgdGhhdCB3YXMgcGFzc2VkIGluXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICovXG5mdW5jdGlvbiByZW9yaWVudFBvc2l0aW9ucyhhcnJheSwgbWF0cml4KSB7XG4gIGFwcGx5RnVuY1RvVjNBcnJheShhcnJheSwgbWF0cml4LCB0cmFuc2Zvcm1Qb2ludCk7XG4gIHJldHVybiBhcnJheTtcbn1cblxuLyoqXG4gKiBAdHlwZWRlZiB7KG51bWJlcltdfFR5cGVkQXJyYXkpfSBOYXRpdmVBcnJheU9yVHlwZWRBcnJheVxuICovXG5cbi8qKlxuICogUmVvcmllbnRzIGFycmF5cyBieSB0aGUgZ2l2ZW4gbWF0cml4LiBBc3N1bWVzIGFycmF5cyBoYXZlXG4gKiBuYW1lcyB0aGF0IGNvbnRhaW5zICdwb3MnIGNvdWxkIGJlIHJlb3JpZW50ZWQgYXMgcG9zaXRpb25zLFxuICogJ2Jpbm9ybScgb3IgJ3RhbicgYXMgZGlyZWN0aW9ucywgYW5kICdub3JtJyBhcyBub3JtYWxzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIE5hdGl2ZUFycmF5T3JUeXBlZEFycmF5Pn0gYXJyYXlzIFRoZSB2ZXJ0aWNlcyB0byByZW9yaWVudFxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBtYXRyaXggbWF0cml4IHRvIHJlb3JpZW50IGJ5LlxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIE5hdGl2ZUFycmF5T3JUeXBlZEFycmF5Pn0gc2FtZSBhcnJheXMgdGhhdCB3ZXJlIHBhc3NlZCBpbi5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKi9cbmZ1bmN0aW9uIHJlb3JpZW50VmVydGljZXMoYXJyYXlzLCBtYXRyaXgpIHtcbiAgT2JqZWN0LmtleXMoYXJyYXlzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBjb25zdCBhcnJheSA9IGFycmF5c1tuYW1lXTtcbiAgICBpZiAobmFtZS5pbmRleE9mKFwicG9zXCIpID49IDApIHtcbiAgICAgIHJlb3JpZW50UG9zaXRpb25zKGFycmF5LCBtYXRyaXgpO1xuICAgIH0gZWxzZSBpZiAobmFtZS5pbmRleE9mKFwidGFuXCIpID49IDAgfHwgbmFtZS5pbmRleE9mKFwiYmlub3JtXCIpID49IDApIHtcbiAgICAgIHJlb3JpZW50RGlyZWN0aW9ucyhhcnJheSwgbWF0cml4KTtcbiAgICB9IGVsc2UgaWYgKG5hbWUuaW5kZXhPZihcIm5vcm1cIikgPj0gMCkge1xuICAgICAgcmVvcmllbnROb3JtYWxzKGFycmF5LCBtYXRyaXgpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhcnJheXM7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBYWSBxdWFkIEJ1ZmZlckluZm9cbiAqXG4gKiBUaGUgZGVmYXVsdCB3aXRoIG5vIHBhcmFtZXRlcnMgd2lsbCByZXR1cm4gYSAyeDIgcXVhZCB3aXRoIHZhbHVlcyBmcm9tIC0xIHRvICsxLlxuICogSWYgeW91IHdhbnQgYSB1bml0IHF1YWQgd2l0aCB0aGF0IGdvZXMgZnJvbSAwIHRvIDEgeW91J2QgY2FsbCBpdCB3aXRoXG4gKlxuICogICAgIHR3Z2wucHJpbWl0aXZlcy5jcmVhdGVYWVF1YWRCdWZmZXJJbmZvKGdsLCAxLCAwLjUsIDAuNSk7XG4gKlxuICogSWYgeW91IHdhbnQgYSB1bml0IHF1YWQgY2VudGVyZWQgYWJvdmUgMCwwIHlvdSdkIGNhbGwgaXQgd2l0aFxuICpcbiAqICAgICB0d2dsLnByaW1pdGl2ZXMuY3JlYXRlWFlRdWFkQnVmZmVySW5mbyhnbCwgMSwgMCwgMC41KTtcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2l6ZV0gdGhlIHNpemUgYWNyb3NzIHRoZSBxdWFkLiBEZWZhdWx0cyB0byAyIHdoaWNoIG1lYW5zIHZlcnRpY2VzIHdpbGwgZ28gZnJvbSAtMSB0byArMVxuICogQHBhcmFtIHtudW1iZXJ9IFt4T2Zmc2V0XSB0aGUgYW1vdW50IHRvIG9mZnNldCB0aGUgcXVhZCBpbiBYXG4gKiBAcGFyYW0ge251bWJlcn0gW3lPZmZzZXRdIHRoZSBhbW91bnQgdG8gb2Zmc2V0IHRoZSBxdWFkIGluIFlcbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBXZWJHTEJ1ZmZlcj59IHRoZSBjcmVhdGVkIFhZIFF1YWQgQnVmZmVySW5mb1xuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqIEBmdW5jdGlvbiBjcmVhdGVYWVF1YWRCdWZmZXJzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIFhZIHF1YWQgQnVmZmVyc1xuICpcbiAqIFRoZSBkZWZhdWx0IHdpdGggbm8gcGFyYW1ldGVycyB3aWxsIHJldHVybiBhIDJ4MiBxdWFkIHdpdGggdmFsdWVzIGZyb20gLTEgdG8gKzEuXG4gKiBJZiB5b3Ugd2FudCBhIHVuaXQgcXVhZCB3aXRoIHRoYXQgZ29lcyBmcm9tIDAgdG8gMSB5b3UnZCBjYWxsIGl0IHdpdGhcbiAqXG4gKiAgICAgdHdnbC5wcmltaXRpdmVzLmNyZWF0ZVhZUXVhZEJ1ZmZlckluZm8oZ2wsIDEsIDAuNSwgMC41KTtcbiAqXG4gKiBJZiB5b3Ugd2FudCBhIHVuaXQgcXVhZCBjZW50ZXJlZCBhYm92ZSAwLDAgeW91J2QgY2FsbCBpdCB3aXRoXG4gKlxuICogICAgIHR3Z2wucHJpbWl0aXZlcy5jcmVhdGVYWVF1YWRCdWZmZXJJbmZvKGdsLCAxLCAwLCAwLjUpO1xuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtzaXplXSB0aGUgc2l6ZSBhY3Jvc3MgdGhlIHF1YWQuIERlZmF1bHRzIHRvIDIgd2hpY2ggbWVhbnMgdmVydGljZXMgd2lsbCBnbyBmcm9tIC0xIHRvICsxXG4gKiBAcGFyYW0ge251bWJlcn0gW3hPZmZzZXRdIHRoZSBhbW91bnQgdG8gb2Zmc2V0IHRoZSBxdWFkIGluIFhcbiAqIEBwYXJhbSB7bnVtYmVyfSBbeU9mZnNldF0gdGhlIGFtb3VudCB0byBvZmZzZXQgdGhlIHF1YWQgaW4gWVxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wuQnVmZmVySW5mb30gdGhlIGNyZWF0ZWQgWFkgUXVhZCBidWZmZXJzXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICogQGZ1bmN0aW9uIGNyZWF0ZVhZUXVhZEJ1ZmZlckluZm9cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgWFkgcXVhZCB2ZXJ0aWNlc1xuICpcbiAqIFRoZSBkZWZhdWx0IHdpdGggbm8gcGFyYW1ldGVycyB3aWxsIHJldHVybiBhIDJ4MiBxdWFkIHdpdGggdmFsdWVzIGZyb20gLTEgdG8gKzEuXG4gKiBJZiB5b3Ugd2FudCBhIHVuaXQgcXVhZCB3aXRoIHRoYXQgZ29lcyBmcm9tIDAgdG8gMSB5b3UnZCBjYWxsIGl0IHdpdGhcbiAqXG4gKiAgICAgdHdnbC5wcmltaXRpdmVzLmNyZWF0ZVhZUXVhZFZlcnRpY2VzKDEsIDAuNSwgMC41KTtcbiAqXG4gKiBJZiB5b3Ugd2FudCBhIHVuaXQgcXVhZCBjZW50ZXJlZCBhYm92ZSAwLDAgeW91J2QgY2FsbCBpdCB3aXRoXG4gKlxuICogICAgIHR3Z2wucHJpbWl0aXZlcy5jcmVhdGVYWVF1YWRWZXJ0aWNlcygxLCAwLCAwLjUpO1xuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2l6ZV0gdGhlIHNpemUgYWNyb3NzIHRoZSBxdWFkLiBEZWZhdWx0cyB0byAyIHdoaWNoIG1lYW5zIHZlcnRpY2VzIHdpbGwgZ28gZnJvbSAtMSB0byArMVxuICogQHBhcmFtIHtudW1iZXJ9IFt4T2Zmc2V0XSB0aGUgYW1vdW50IHRvIG9mZnNldCB0aGUgcXVhZCBpbiBYXG4gKiBAcGFyYW0ge251bWJlcn0gW3lPZmZzZXRdIHRoZSBhbW91bnQgdG8gb2Zmc2V0IHRoZSBxdWFkIGluIFlcbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBUeXBlZEFycmF5Pn0gdGhlIGNyZWF0ZWQgWFkgUXVhZCB2ZXJ0aWNlc1xuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlWFlRdWFkVmVydGljZXMoc2l6ZSwgeE9mZnNldCwgeU9mZnNldCkge1xuICBzaXplID0gc2l6ZSB8fCAyO1xuICB4T2Zmc2V0ID0geE9mZnNldCB8fCAwO1xuICB5T2Zmc2V0ID0geU9mZnNldCB8fCAwO1xuICBzaXplICo9IDAuNTtcbiAgcmV0dXJuIHtcbiAgICBwb3NpdGlvbjoge1xuICAgICAgbnVtQ29tcG9uZW50czogMixcbiAgICAgIGRhdGE6IFtcbiAgICAgICAgeE9mZnNldCArIC0xICogc2l6ZSwgeU9mZnNldCArIC0xICogc2l6ZSxcbiAgICAgICAgeE9mZnNldCArICAxICogc2l6ZSwgeU9mZnNldCArIC0xICogc2l6ZSxcbiAgICAgICAgeE9mZnNldCArIC0xICogc2l6ZSwgeU9mZnNldCArICAxICogc2l6ZSxcbiAgICAgICAgeE9mZnNldCArICAxICogc2l6ZSwgeU9mZnNldCArICAxICogc2l6ZSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBub3JtYWw6IFtcbiAgICAgIDAsIDAsIDEsXG4gICAgICAwLCAwLCAxLFxuICAgICAgMCwgMCwgMSxcbiAgICAgIDAsIDAsIDEsXG4gICAgXSxcbiAgICB0ZXhjb29yZDogW1xuICAgICAgMCwgMCxcbiAgICAgIDEsIDAsXG4gICAgICAwLCAxLFxuICAgICAgMSwgMSxcbiAgICBdLFxuICAgIGluZGljZXM6IFsgMCwgMSwgMiwgMiwgMSwgMyBdLFxuICB9O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgWFogcGxhbmUgQnVmZmVySW5mby5cbiAqXG4gKiBUaGUgY3JlYXRlZCBwbGFuZSBoYXMgcG9zaXRpb24sIG5vcm1hbCwgYW5kIHRleGNvb3JkIGRhdGFcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2lkdGhdIFdpZHRoIG9mIHRoZSBwbGFuZS4gRGVmYXVsdCA9IDFcbiAqIEBwYXJhbSB7bnVtYmVyfSBbZGVwdGhdIERlcHRoIG9mIHRoZSBwbGFuZS4gRGVmYXVsdCA9IDFcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3ViZGl2aXNpb25zV2lkdGhdIE51bWJlciBvZiBzdGVwcyBhY3Jvc3MgdGhlIHBsYW5lLiBEZWZhdWx0ID0gMVxuICogQHBhcmFtIHtudW1iZXJ9IFtzdWJkaXZpc2lvbnNEZXB0aF0gTnVtYmVyIG9mIHN0ZXBzIGRvd24gdGhlIHBsYW5lLiBEZWZhdWx0ID0gMVxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBbbWF0cml4XSBBIG1hdHJpeCBieSB3aGljaCB0byBtdWx0aXBseSBhbGwgdGhlIHZlcnRpY2VzLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wuQnVmZmVySW5mb30gVGhlIGNyZWF0ZWQgcGxhbmUgQnVmZmVySW5mby5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKiBAZnVuY3Rpb24gY3JlYXRlUGxhbmVCdWZmZXJJbmZvXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIFhaIHBsYW5lIGJ1ZmZlcnMuXG4gKlxuICogVGhlIGNyZWF0ZWQgcGxhbmUgaGFzIHBvc2l0aW9uLCBub3JtYWwsIGFuZCB0ZXhjb29yZCBkYXRhXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dpZHRoXSBXaWR0aCBvZiB0aGUgcGxhbmUuIERlZmF1bHQgPSAxXG4gKiBAcGFyYW0ge251bWJlcn0gW2RlcHRoXSBEZXB0aCBvZiB0aGUgcGxhbmUuIERlZmF1bHQgPSAxXG4gKiBAcGFyYW0ge251bWJlcn0gW3N1YmRpdmlzaW9uc1dpZHRoXSBOdW1iZXIgb2Ygc3RlcHMgYWNyb3NzIHRoZSBwbGFuZS4gRGVmYXVsdCA9IDFcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3ViZGl2aXNpb25zRGVwdGhdIE51bWJlciBvZiBzdGVwcyBkb3duIHRoZSBwbGFuZS4gRGVmYXVsdCA9IDFcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW21hdHJpeF0gQSBtYXRyaXggYnkgd2hpY2ggdG8gbXVsdGlwbHkgYWxsIHRoZSB2ZXJ0aWNlcy5cbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBXZWJHTEJ1ZmZlcj59IFRoZSBjcmVhdGVkIHBsYW5lIGJ1ZmZlcnMuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICogQGZ1bmN0aW9uIGNyZWF0ZVBsYW5lQnVmZmVyc1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyBYWiBwbGFuZSB2ZXJ0aWNlcy5cbiAqXG4gKiBUaGUgY3JlYXRlZCBwbGFuZSBoYXMgcG9zaXRpb24sIG5vcm1hbCwgYW5kIHRleGNvb3JkIGRhdGFcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gW3dpZHRoXSBXaWR0aCBvZiB0aGUgcGxhbmUuIERlZmF1bHQgPSAxXG4gKiBAcGFyYW0ge251bWJlcn0gW2RlcHRoXSBEZXB0aCBvZiB0aGUgcGxhbmUuIERlZmF1bHQgPSAxXG4gKiBAcGFyYW0ge251bWJlcn0gW3N1YmRpdmlzaW9uc1dpZHRoXSBOdW1iZXIgb2Ygc3RlcHMgYWNyb3NzIHRoZSBwbGFuZS4gRGVmYXVsdCA9IDFcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3ViZGl2aXNpb25zRGVwdGhdIE51bWJlciBvZiBzdGVwcyBkb3duIHRoZSBwbGFuZS4gRGVmYXVsdCA9IDFcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW21hdHJpeF0gQSBtYXRyaXggYnkgd2hpY2ggdG8gbXVsdGlwbHkgYWxsIHRoZSB2ZXJ0aWNlcy5cbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBUeXBlZEFycmF5Pn0gVGhlIGNyZWF0ZWQgcGxhbmUgdmVydGljZXMuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICovXG5mdW5jdGlvbiBjcmVhdGVQbGFuZVZlcnRpY2VzKFxuICAgIHdpZHRoLFxuICAgIGRlcHRoLFxuICAgIHN1YmRpdmlzaW9uc1dpZHRoLFxuICAgIHN1YmRpdmlzaW9uc0RlcHRoLFxuICAgIG1hdHJpeCkge1xuICB3aWR0aCA9IHdpZHRoIHx8IDE7XG4gIGRlcHRoID0gZGVwdGggfHwgMTtcbiAgc3ViZGl2aXNpb25zV2lkdGggPSBzdWJkaXZpc2lvbnNXaWR0aCB8fCAxO1xuICBzdWJkaXZpc2lvbnNEZXB0aCA9IHN1YmRpdmlzaW9uc0RlcHRoIHx8IDE7XG4gIG1hdHJpeCA9IG1hdHJpeCB8fCBpZGVudGl0eSgpO1xuXG4gIGNvbnN0IG51bVZlcnRpY2VzID0gKHN1YmRpdmlzaW9uc1dpZHRoICsgMSkgKiAoc3ViZGl2aXNpb25zRGVwdGggKyAxKTtcbiAgY29uc3QgcG9zaXRpb25zID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCBudW1WZXJ0aWNlcyk7XG4gIGNvbnN0IG5vcm1hbHMgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDMsIG51bVZlcnRpY2VzKTtcbiAgY29uc3QgdGV4Y29vcmRzID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgyLCBudW1WZXJ0aWNlcyk7XG5cbiAgZm9yIChsZXQgeiA9IDA7IHogPD0gc3ViZGl2aXNpb25zRGVwdGg7IHorKykge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDw9IHN1YmRpdmlzaW9uc1dpZHRoOyB4KyspIHtcbiAgICAgIGNvbnN0IHUgPSB4IC8gc3ViZGl2aXNpb25zV2lkdGg7XG4gICAgICBjb25zdCB2ID0geiAvIHN1YmRpdmlzaW9uc0RlcHRoO1xuICAgICAgcG9zaXRpb25zLnB1c2goXG4gICAgICAgICAgd2lkdGggKiB1IC0gd2lkdGggKiAwLjUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBkZXB0aCAqIHYgLSBkZXB0aCAqIDAuNSk7XG4gICAgICBub3JtYWxzLnB1c2goMCwgMSwgMCk7XG4gICAgICB0ZXhjb29yZHMucHVzaCh1LCB2KTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBudW1WZXJ0c0Fjcm9zcyA9IHN1YmRpdmlzaW9uc1dpZHRoICsgMTtcbiAgY29uc3QgaW5kaWNlcyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoXG4gICAgICAzLCBzdWJkaXZpc2lvbnNXaWR0aCAqIHN1YmRpdmlzaW9uc0RlcHRoICogMiwgVWludDE2QXJyYXkpO1xuXG4gIGZvciAobGV0IHogPSAwOyB6IDwgc3ViZGl2aXNpb25zRGVwdGg7IHorKykgeyAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgc3ViZGl2aXNpb25zV2lkdGg7IHgrKykgeyAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgLy8gTWFrZSB0cmlhbmdsZSAxIG9mIHF1YWQuXG4gICAgICBpbmRpY2VzLnB1c2goXG4gICAgICAgICAgKHogKyAwKSAqIG51bVZlcnRzQWNyb3NzICsgeCxcbiAgICAgICAgICAoeiArIDEpICogbnVtVmVydHNBY3Jvc3MgKyB4LFxuICAgICAgICAgICh6ICsgMCkgKiBudW1WZXJ0c0Fjcm9zcyArIHggKyAxKTtcblxuICAgICAgLy8gTWFrZSB0cmlhbmdsZSAyIG9mIHF1YWQuXG4gICAgICBpbmRpY2VzLnB1c2goXG4gICAgICAgICAgKHogKyAxKSAqIG51bVZlcnRzQWNyb3NzICsgeCxcbiAgICAgICAgICAoeiArIDEpICogbnVtVmVydHNBY3Jvc3MgKyB4ICsgMSxcbiAgICAgICAgICAoeiArIDApICogbnVtVmVydHNBY3Jvc3MgKyB4ICsgMSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgYXJyYXlzID0gcmVvcmllbnRWZXJ0aWNlcyh7XG4gICAgcG9zaXRpb246IHBvc2l0aW9ucyxcbiAgICBub3JtYWw6IG5vcm1hbHMsXG4gICAgdGV4Y29vcmQ6IHRleGNvb3JkcyxcbiAgICBpbmRpY2VzOiBpbmRpY2VzLFxuICB9LCBtYXRyaXgpO1xuICByZXR1cm4gYXJyYXlzO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgc3BoZXJlIEJ1ZmZlckluZm8uXG4gKlxuICogVGhlIGNyZWF0ZWQgc3BoZXJlIGhhcyBwb3NpdGlvbiwgbm9ybWFsLCBhbmQgdGV4Y29vcmQgZGF0YVxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGl1cyByYWRpdXMgb2YgdGhlIHNwaGVyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdWJkaXZpc2lvbnNBeGlzIG51bWJlciBvZiBzdGVwcyBhcm91bmQgdGhlIHNwaGVyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdWJkaXZpc2lvbnNIZWlnaHQgbnVtYmVyIG9mIHZlcnRpY2FsbHkgb24gdGhlIHNwaGVyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0X3N0YXJ0TGF0aXR1ZGVJblJhZGlhbnNdIHdoZXJlIHRvIHN0YXJ0IHRoZVxuICogICAgIHRvcCBvZiB0aGUgc3BoZXJlLiBEZWZhdWx0ID0gMC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0X2VuZExhdGl0dWRlSW5SYWRpYW5zXSBXaGVyZSB0byBlbmQgdGhlXG4gKiAgICAgYm90dG9tIG9mIHRoZSBzcGhlcmUuIERlZmF1bHQgPSBNYXRoLlBJLlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRfc3RhcnRMb25naXR1ZGVJblJhZGlhbnNdIHdoZXJlIHRvIHN0YXJ0XG4gKiAgICAgd3JhcHBpbmcgdGhlIHNwaGVyZS4gRGVmYXVsdCA9IDAuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdF9lbmRMb25naXR1ZGVJblJhZGlhbnNdIHdoZXJlIHRvIGVuZFxuICogICAgIHdyYXBwaW5nIHRoZSBzcGhlcmUuIERlZmF1bHQgPSAyICogTWF0aC5QSS5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsLkJ1ZmZlckluZm99IFRoZSBjcmVhdGVkIHNwaGVyZSBCdWZmZXJJbmZvLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqIEBmdW5jdGlvbiBjcmVhdGVTcGhlcmVCdWZmZXJJbmZvXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIHNwaGVyZSBidWZmZXJzLlxuICpcbiAqIFRoZSBjcmVhdGVkIHNwaGVyZSBoYXMgcG9zaXRpb24sIG5vcm1hbCwgYW5kIHRleGNvb3JkIGRhdGFcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgcmFkaXVzIG9mIHRoZSBzcGhlcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gc3ViZGl2aXNpb25zQXhpcyBudW1iZXIgb2Ygc3RlcHMgYXJvdW5kIHRoZSBzcGhlcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gc3ViZGl2aXNpb25zSGVpZ2h0IG51bWJlciBvZiB2ZXJ0aWNhbGx5IG9uIHRoZSBzcGhlcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdF9zdGFydExhdGl0dWRlSW5SYWRpYW5zXSB3aGVyZSB0byBzdGFydCB0aGVcbiAqICAgICB0b3Agb2YgdGhlIHNwaGVyZS4gRGVmYXVsdCA9IDAuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdF9lbmRMYXRpdHVkZUluUmFkaWFuc10gV2hlcmUgdG8gZW5kIHRoZVxuICogICAgIGJvdHRvbSBvZiB0aGUgc3BoZXJlLiBEZWZhdWx0ID0gTWF0aC5QSS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0X3N0YXJ0TG9uZ2l0dWRlSW5SYWRpYW5zXSB3aGVyZSB0byBzdGFydFxuICogICAgIHdyYXBwaW5nIHRoZSBzcGhlcmUuIERlZmF1bHQgPSAwLlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRfZW5kTG9uZ2l0dWRlSW5SYWRpYW5zXSB3aGVyZSB0byBlbmRcbiAqICAgICB3cmFwcGluZyB0aGUgc3BoZXJlLiBEZWZhdWx0ID0gMiAqIE1hdGguUEkuXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgV2ViR0xCdWZmZXI+fSBUaGUgY3JlYXRlZCBzcGhlcmUgYnVmZmVycy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKiBAZnVuY3Rpb24gY3JlYXRlU3BoZXJlQnVmZmVyc1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyBzcGhlcmUgdmVydGljZXMuXG4gKlxuICogVGhlIGNyZWF0ZWQgc3BoZXJlIGhhcyBwb3NpdGlvbiwgbm9ybWFsLCBhbmQgdGV4Y29vcmQgZGF0YVxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgcmFkaXVzIG9mIHRoZSBzcGhlcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gc3ViZGl2aXNpb25zQXhpcyBudW1iZXIgb2Ygc3RlcHMgYXJvdW5kIHRoZSBzcGhlcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gc3ViZGl2aXNpb25zSGVpZ2h0IG51bWJlciBvZiB2ZXJ0aWNhbGx5IG9uIHRoZSBzcGhlcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdF9zdGFydExhdGl0dWRlSW5SYWRpYW5zXSB3aGVyZSB0byBzdGFydCB0aGVcbiAqICAgICB0b3Agb2YgdGhlIHNwaGVyZS4gRGVmYXVsdCA9IDAuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdF9lbmRMYXRpdHVkZUluUmFkaWFuc10gV2hlcmUgdG8gZW5kIHRoZVxuICogICAgIGJvdHRvbSBvZiB0aGUgc3BoZXJlLiBEZWZhdWx0ID0gTWF0aC5QSS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0X3N0YXJ0TG9uZ2l0dWRlSW5SYWRpYW5zXSB3aGVyZSB0byBzdGFydFxuICogICAgIHdyYXBwaW5nIHRoZSBzcGhlcmUuIERlZmF1bHQgPSAwLlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRfZW5kTG9uZ2l0dWRlSW5SYWRpYW5zXSB3aGVyZSB0byBlbmRcbiAqICAgICB3cmFwcGluZyB0aGUgc3BoZXJlLiBEZWZhdWx0ID0gMiAqIE1hdGguUEkuXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgVHlwZWRBcnJheT59IFRoZSBjcmVhdGVkIHNwaGVyZSB2ZXJ0aWNlcy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVNwaGVyZVZlcnRpY2VzKFxuICAgIHJhZGl1cyxcbiAgICBzdWJkaXZpc2lvbnNBeGlzLFxuICAgIHN1YmRpdmlzaW9uc0hlaWdodCxcbiAgICBvcHRfc3RhcnRMYXRpdHVkZUluUmFkaWFucyxcbiAgICBvcHRfZW5kTGF0aXR1ZGVJblJhZGlhbnMsXG4gICAgb3B0X3N0YXJ0TG9uZ2l0dWRlSW5SYWRpYW5zLFxuICAgIG9wdF9lbmRMb25naXR1ZGVJblJhZGlhbnMpIHtcbiAgaWYgKHN1YmRpdmlzaW9uc0F4aXMgPD0gMCB8fCBzdWJkaXZpc2lvbnNIZWlnaHQgPD0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc3ViZGl2aXNpb25BeGlzIGFuZCBzdWJkaXZpc2lvbkhlaWdodCBtdXN0IGJlID4gMCcpO1xuICB9XG5cbiAgb3B0X3N0YXJ0TGF0aXR1ZGVJblJhZGlhbnMgPSBvcHRfc3RhcnRMYXRpdHVkZUluUmFkaWFucyB8fCAwO1xuICBvcHRfZW5kTGF0aXR1ZGVJblJhZGlhbnMgPSBvcHRfZW5kTGF0aXR1ZGVJblJhZGlhbnMgfHwgTWF0aC5QSTtcbiAgb3B0X3N0YXJ0TG9uZ2l0dWRlSW5SYWRpYW5zID0gb3B0X3N0YXJ0TG9uZ2l0dWRlSW5SYWRpYW5zIHx8IDA7XG4gIG9wdF9lbmRMb25naXR1ZGVJblJhZGlhbnMgPSBvcHRfZW5kTG9uZ2l0dWRlSW5SYWRpYW5zIHx8IChNYXRoLlBJICogMik7XG5cbiAgY29uc3QgbGF0UmFuZ2UgPSBvcHRfZW5kTGF0aXR1ZGVJblJhZGlhbnMgLSBvcHRfc3RhcnRMYXRpdHVkZUluUmFkaWFucztcbiAgY29uc3QgbG9uZ1JhbmdlID0gb3B0X2VuZExvbmdpdHVkZUluUmFkaWFucyAtIG9wdF9zdGFydExvbmdpdHVkZUluUmFkaWFucztcblxuICAvLyBXZSBhcmUgZ29pbmcgdG8gZ2VuZXJhdGUgb3VyIHNwaGVyZSBieSBpdGVyYXRpbmcgdGhyb3VnaCBpdHNcbiAgLy8gc3BoZXJpY2FsIGNvb3JkaW5hdGVzIGFuZCBnZW5lcmF0aW5nIDIgdHJpYW5nbGVzIGZvciBlYWNoIHF1YWQgb24gYVxuICAvLyByaW5nIG9mIHRoZSBzcGhlcmUuXG4gIGNvbnN0IG51bVZlcnRpY2VzID0gKHN1YmRpdmlzaW9uc0F4aXMgKyAxKSAqIChzdWJkaXZpc2lvbnNIZWlnaHQgKyAxKTtcbiAgY29uc3QgcG9zaXRpb25zID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCBudW1WZXJ0aWNlcyk7XG4gIGNvbnN0IG5vcm1hbHMgICA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgbnVtVmVydGljZXMpO1xuICBjb25zdCB0ZXhjb29yZHMgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDIsIG51bVZlcnRpY2VzKTtcblxuICAvLyBHZW5lcmF0ZSB0aGUgaW5kaXZpZHVhbCB2ZXJ0aWNlcyBpbiBvdXIgdmVydGV4IGJ1ZmZlci5cbiAgZm9yIChsZXQgeSA9IDA7IHkgPD0gc3ViZGl2aXNpb25zSGVpZ2h0OyB5KyspIHtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8PSBzdWJkaXZpc2lvbnNBeGlzOyB4KyspIHtcbiAgICAgIC8vIEdlbmVyYXRlIGEgdmVydGV4IGJhc2VkIG9uIGl0cyBzcGhlcmljYWwgY29vcmRpbmF0ZXNcbiAgICAgIGNvbnN0IHUgPSB4IC8gc3ViZGl2aXNpb25zQXhpcztcbiAgICAgIGNvbnN0IHYgPSB5IC8gc3ViZGl2aXNpb25zSGVpZ2h0O1xuICAgICAgY29uc3QgdGhldGEgPSBsb25nUmFuZ2UgKiB1ICsgb3B0X3N0YXJ0TG9uZ2l0dWRlSW5SYWRpYW5zO1xuICAgICAgY29uc3QgcGhpID0gbGF0UmFuZ2UgKiB2ICsgb3B0X3N0YXJ0TGF0aXR1ZGVJblJhZGlhbnM7XG4gICAgICBjb25zdCBzaW5UaGV0YSA9IE1hdGguc2luKHRoZXRhKTtcbiAgICAgIGNvbnN0IGNvc1RoZXRhID0gTWF0aC5jb3ModGhldGEpO1xuICAgICAgY29uc3Qgc2luUGhpID0gTWF0aC5zaW4ocGhpKTtcbiAgICAgIGNvbnN0IGNvc1BoaSA9IE1hdGguY29zKHBoaSk7XG4gICAgICBjb25zdCB1eCA9IGNvc1RoZXRhICogc2luUGhpO1xuICAgICAgY29uc3QgdXkgPSBjb3NQaGk7XG4gICAgICBjb25zdCB1eiA9IHNpblRoZXRhICogc2luUGhpO1xuICAgICAgcG9zaXRpb25zLnB1c2gocmFkaXVzICogdXgsIHJhZGl1cyAqIHV5LCByYWRpdXMgKiB1eik7XG4gICAgICBub3JtYWxzLnB1c2godXgsIHV5LCB1eik7XG4gICAgICB0ZXhjb29yZHMucHVzaCgxIC0gdSwgdik7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbnVtVmVydHNBcm91bmQgPSBzdWJkaXZpc2lvbnNBeGlzICsgMTtcbiAgY29uc3QgaW5kaWNlcyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgc3ViZGl2aXNpb25zQXhpcyAqIHN1YmRpdmlzaW9uc0hlaWdodCAqIDIsIFVpbnQxNkFycmF5KTtcbiAgZm9yIChsZXQgeCA9IDA7IHggPCBzdWJkaXZpc2lvbnNBeGlzOyB4KyspIHsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHN1YmRpdmlzaW9uc0hlaWdodDsgeSsrKSB7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAvLyBNYWtlIHRyaWFuZ2xlIDEgb2YgcXVhZC5cbiAgICAgIGluZGljZXMucHVzaChcbiAgICAgICAgICAoeSArIDApICogbnVtVmVydHNBcm91bmQgKyB4LFxuICAgICAgICAgICh5ICsgMCkgKiBudW1WZXJ0c0Fyb3VuZCArIHggKyAxLFxuICAgICAgICAgICh5ICsgMSkgKiBudW1WZXJ0c0Fyb3VuZCArIHgpO1xuXG4gICAgICAvLyBNYWtlIHRyaWFuZ2xlIDIgb2YgcXVhZC5cbiAgICAgIGluZGljZXMucHVzaChcbiAgICAgICAgICAoeSArIDEpICogbnVtVmVydHNBcm91bmQgKyB4LFxuICAgICAgICAgICh5ICsgMCkgKiBudW1WZXJ0c0Fyb3VuZCArIHggKyAxLFxuICAgICAgICAgICh5ICsgMSkgKiBudW1WZXJ0c0Fyb3VuZCArIHggKyAxKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBvc2l0aW9uOiBwb3NpdGlvbnMsXG4gICAgbm9ybWFsOiBub3JtYWxzLFxuICAgIHRleGNvb3JkOiB0ZXhjb29yZHMsXG4gICAgaW5kaWNlczogaW5kaWNlcyxcbiAgfTtcbn1cblxuLyoqXG4gKiBBcnJheSBvZiB0aGUgaW5kaWNlcyBvZiBjb3JuZXJzIG9mIGVhY2ggZmFjZSBvZiBhIGN1YmUuXG4gKiBAdHlwZSB7QXJyYXkuPG51bWJlcltdPn1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IENVQkVfRkFDRV9JTkRJQ0VTID0gW1xuICBbMywgNywgNSwgMV0sICAvLyByaWdodFxuICBbNiwgMiwgMCwgNF0sICAvLyBsZWZ0XG4gIFs2LCA3LCAzLCAyXSwgIC8vID8/XG4gIFswLCAxLCA1LCA0XSwgIC8vID8/XG4gIFs3LCA2LCA0LCA1XSwgIC8vIGZyb250XG4gIFsyLCAzLCAxLCAwXSwgIC8vIGJhY2tcbl07XG5cbi8qKlxuICogQ3JlYXRlcyBhIEJ1ZmZlckluZm8gZm9yIGEgY3ViZS5cbiAqXG4gKiBUaGUgY3ViZSBpcyBjcmVhdGVkIGFyb3VuZCB0aGUgb3JpZ2luLiAoLXNpemUgLyAyLCBzaXplIC8gMikuXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3NpemVdIHdpZHRoLCBoZWlnaHQgYW5kIGRlcHRoIG9mIHRoZSBjdWJlLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wuQnVmZmVySW5mb30gVGhlIGNyZWF0ZWQgQnVmZmVySW5mby5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKiBAZnVuY3Rpb24gY3JlYXRlQ3ViZUJ1ZmZlckluZm9cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgdGhlIGJ1ZmZlcnMgYW5kIGluZGljZXMgZm9yIGEgY3ViZS5cbiAqXG4gKiBUaGUgY3ViZSBpcyBjcmVhdGVkIGFyb3VuZCB0aGUgb3JpZ2luLiAoLXNpemUgLyAyLCBzaXplIC8gMikuXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3NpemVdIHdpZHRoLCBoZWlnaHQgYW5kIGRlcHRoIG9mIHRoZSBjdWJlLlxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIFdlYkdMQnVmZmVyPn0gVGhlIGNyZWF0ZWQgYnVmZmVycy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKiBAZnVuY3Rpb24gY3JlYXRlQ3ViZUJ1ZmZlcnNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgdGhlIHZlcnRpY2VzIGFuZCBpbmRpY2VzIGZvciBhIGN1YmUuXG4gKlxuICogVGhlIGN1YmUgaXMgY3JlYXRlZCBhcm91bmQgdGhlIG9yaWdpbi4gKC1zaXplIC8gMiwgc2l6ZSAvIDIpLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2l6ZV0gd2lkdGgsIGhlaWdodCBhbmQgZGVwdGggb2YgdGhlIGN1YmUuXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgVHlwZWRBcnJheT59IFRoZSBjcmVhdGVkIHZlcnRpY2VzLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ3ViZVZlcnRpY2VzKHNpemUpIHtcbiAgc2l6ZSA9IHNpemUgfHwgMTtcbiAgY29uc3QgayA9IHNpemUgLyAyO1xuXG4gIGNvbnN0IGNvcm5lclZlcnRpY2VzID0gW1xuICAgIFstaywgLWssIC1rXSxcbiAgICBbK2ssIC1rLCAta10sXG4gICAgWy1rLCAraywgLWtdLFxuICAgIFsraywgK2ssIC1rXSxcbiAgICBbLWssIC1rLCAra10sXG4gICAgWytrLCAtaywgK2tdLFxuICAgIFstaywgK2ssICtrXSxcbiAgICBbK2ssICtrLCAra10sXG4gIF07XG5cbiAgY29uc3QgZmFjZU5vcm1hbHMgPSBbXG4gICAgWysxLCArMCwgKzBdLFxuICAgIFstMSwgKzAsICswXSxcbiAgICBbKzAsICsxLCArMF0sXG4gICAgWyswLCAtMSwgKzBdLFxuICAgIFsrMCwgKzAsICsxXSxcbiAgICBbKzAsICswLCAtMV0sXG4gIF07XG5cbiAgY29uc3QgdXZDb29yZHMgPSBbXG4gICAgWzEsIDBdLFxuICAgIFswLCAwXSxcbiAgICBbMCwgMV0sXG4gICAgWzEsIDFdLFxuICBdO1xuXG4gIGNvbnN0IG51bVZlcnRpY2VzID0gNiAqIDQ7XG4gIGNvbnN0IHBvc2l0aW9ucyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgbnVtVmVydGljZXMpO1xuICBjb25zdCBub3JtYWxzICAgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDMsIG51bVZlcnRpY2VzKTtcbiAgY29uc3QgdGV4Y29vcmRzID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgyICwgbnVtVmVydGljZXMpO1xuICBjb25zdCBpbmRpY2VzICAgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDMsIDYgKiAyLCBVaW50MTZBcnJheSk7XG5cbiAgZm9yIChsZXQgZiA9IDA7IGYgPCA2OyArK2YpIHtcbiAgICBjb25zdCBmYWNlSW5kaWNlcyA9IENVQkVfRkFDRV9JTkRJQ0VTW2ZdO1xuICAgIGZvciAobGV0IHYgPSAwOyB2IDwgNDsgKyt2KSB7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IGNvcm5lclZlcnRpY2VzW2ZhY2VJbmRpY2VzW3ZdXTtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGZhY2VOb3JtYWxzW2ZdO1xuICAgICAgY29uc3QgdXYgPSB1dkNvb3Jkc1t2XTtcblxuICAgICAgLy8gRWFjaCBmYWNlIG5lZWRzIGFsbCBmb3VyIHZlcnRpY2VzIGJlY2F1c2UgdGhlIG5vcm1hbHMgYW5kIHRleHR1cmVcbiAgICAgIC8vIGNvb3JkaW5hdGVzIGFyZSBub3QgYWxsIHRoZSBzYW1lLlxuICAgICAgcG9zaXRpb25zLnB1c2gocG9zaXRpb24pO1xuICAgICAgbm9ybWFscy5wdXNoKG5vcm1hbCk7XG4gICAgICB0ZXhjb29yZHMucHVzaCh1dik7XG5cbiAgICB9XG4gICAgLy8gVHdvIHRyaWFuZ2xlcyBtYWtlIGEgc3F1YXJlIGZhY2UuXG4gICAgY29uc3Qgb2Zmc2V0ID0gNCAqIGY7XG4gICAgaW5kaWNlcy5wdXNoKG9mZnNldCArIDAsIG9mZnNldCArIDEsIG9mZnNldCArIDIpO1xuICAgIGluZGljZXMucHVzaChvZmZzZXQgKyAwLCBvZmZzZXQgKyAyLCBvZmZzZXQgKyAzKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcG9zaXRpb246IHBvc2l0aW9ucyxcbiAgICBub3JtYWw6IG5vcm1hbHMsXG4gICAgdGV4Y29vcmQ6IHRleGNvb3JkcyxcbiAgICBpbmRpY2VzOiBpbmRpY2VzLFxuICB9O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBCdWZmZXJJbmZvIGZvciBhIHRydW5jYXRlZCBjb25lLCB3aGljaCBpcyBsaWtlIGEgY3lsaW5kZXJcbiAqIGV4Y2VwdCB0aGF0IGl0IGhhcyBkaWZmZXJlbnQgdG9wIGFuZCBib3R0b20gcmFkaWkuIEEgdHJ1bmNhdGVkIGNvbmVcbiAqIGNhbiBhbHNvIGJlIHVzZWQgdG8gY3JlYXRlIGN5bGluZGVycyBhbmQgcmVndWxhciBjb25lcy4gVGhlXG4gKiB0cnVuY2F0ZWQgY29uZSB3aWxsIGJlIGNyZWF0ZWQgY2VudGVyZWQgYWJvdXQgdGhlIG9yaWdpbiwgd2l0aCB0aGVcbiAqIHkgYXhpcyBhcyBpdHMgdmVydGljYWwgYXhpcy5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBib3R0b21SYWRpdXMgQm90dG9tIHJhZGl1cyBvZiB0cnVuY2F0ZWQgY29uZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0b3BSYWRpdXMgVG9wIHJhZGl1cyBvZiB0cnVuY2F0ZWQgY29uZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgSGVpZ2h0IG9mIHRydW5jYXRlZCBjb25lLlxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGlhbFN1YmRpdmlzaW9ucyBUaGUgbnVtYmVyIG9mIHN1YmRpdmlzaW9ucyBhcm91bmQgdGhlXG4gKiAgICAgdHJ1bmNhdGVkIGNvbmUuXG4gKiBAcGFyYW0ge251bWJlcn0gdmVydGljYWxTdWJkaXZpc2lvbnMgVGhlIG51bWJlciBvZiBzdWJkaXZpc2lvbnMgZG93biB0aGVcbiAqICAgICB0cnVuY2F0ZWQgY29uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdF90b3BDYXBdIENyZWF0ZSB0b3AgY2FwLiBEZWZhdWx0ID0gdHJ1ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdF9ib3R0b21DYXBdIENyZWF0ZSBib3R0b20gY2FwLiBEZWZhdWx0ID0gdHJ1ZS5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsLkJ1ZmZlckluZm99IFRoZSBjcmVhdGVkIGNvbmUgQnVmZmVySW5mby5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKiBAZnVuY3Rpb24gY3JlYXRlVHJ1bmNhdGVkQ29uZUJ1ZmZlckluZm9cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYnVmZmVycyBmb3IgYSB0cnVuY2F0ZWQgY29uZSwgd2hpY2ggaXMgbGlrZSBhIGN5bGluZGVyXG4gKiBleGNlcHQgdGhhdCBpdCBoYXMgZGlmZmVyZW50IHRvcCBhbmQgYm90dG9tIHJhZGlpLiBBIHRydW5jYXRlZCBjb25lXG4gKiBjYW4gYWxzbyBiZSB1c2VkIHRvIGNyZWF0ZSBjeWxpbmRlcnMgYW5kIHJlZ3VsYXIgY29uZXMuIFRoZVxuICogdHJ1bmNhdGVkIGNvbmUgd2lsbCBiZSBjcmVhdGVkIGNlbnRlcmVkIGFib3V0IHRoZSBvcmlnaW4sIHdpdGggdGhlXG4gKiB5IGF4aXMgYXMgaXRzIHZlcnRpY2FsIGF4aXMuXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gYm90dG9tUmFkaXVzIEJvdHRvbSByYWRpdXMgb2YgdHJ1bmNhdGVkIGNvbmUuXG4gKiBAcGFyYW0ge251bWJlcn0gdG9wUmFkaXVzIFRvcCByYWRpdXMgb2YgdHJ1bmNhdGVkIGNvbmUuXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IEhlaWdodCBvZiB0cnVuY2F0ZWQgY29uZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpYWxTdWJkaXZpc2lvbnMgVGhlIG51bWJlciBvZiBzdWJkaXZpc2lvbnMgYXJvdW5kIHRoZVxuICogICAgIHRydW5jYXRlZCBjb25lLlxuICogQHBhcmFtIHtudW1iZXJ9IHZlcnRpY2FsU3ViZGl2aXNpb25zIFRoZSBudW1iZXIgb2Ygc3ViZGl2aXNpb25zIGRvd24gdGhlXG4gKiAgICAgdHJ1bmNhdGVkIGNvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRfdG9wQ2FwXSBDcmVhdGUgdG9wIGNhcC4gRGVmYXVsdCA9IHRydWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRfYm90dG9tQ2FwXSBDcmVhdGUgYm90dG9tIGNhcC4gRGVmYXVsdCA9IHRydWUuXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgV2ViR0xCdWZmZXI+fSBUaGUgY3JlYXRlZCBjb25lIGJ1ZmZlcnMuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICogQGZ1bmN0aW9uIGNyZWF0ZVRydW5jYXRlZENvbmVCdWZmZXJzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIHZlcnRpY2VzIGZvciBhIHRydW5jYXRlZCBjb25lLCB3aGljaCBpcyBsaWtlIGEgY3lsaW5kZXJcbiAqIGV4Y2VwdCB0aGF0IGl0IGhhcyBkaWZmZXJlbnQgdG9wIGFuZCBib3R0b20gcmFkaWkuIEEgdHJ1bmNhdGVkIGNvbmVcbiAqIGNhbiBhbHNvIGJlIHVzZWQgdG8gY3JlYXRlIGN5bGluZGVycyBhbmQgcmVndWxhciBjb25lcy4gVGhlXG4gKiB0cnVuY2F0ZWQgY29uZSB3aWxsIGJlIGNyZWF0ZWQgY2VudGVyZWQgYWJvdXQgdGhlIG9yaWdpbiwgd2l0aCB0aGVcbiAqIHkgYXhpcyBhcyBpdHMgdmVydGljYWwgYXhpcy4gLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBib3R0b21SYWRpdXMgQm90dG9tIHJhZGl1cyBvZiB0cnVuY2F0ZWQgY29uZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0b3BSYWRpdXMgVG9wIHJhZGl1cyBvZiB0cnVuY2F0ZWQgY29uZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgSGVpZ2h0IG9mIHRydW5jYXRlZCBjb25lLlxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGlhbFN1YmRpdmlzaW9ucyBUaGUgbnVtYmVyIG9mIHN1YmRpdmlzaW9ucyBhcm91bmQgdGhlXG4gKiAgICAgdHJ1bmNhdGVkIGNvbmUuXG4gKiBAcGFyYW0ge251bWJlcn0gdmVydGljYWxTdWJkaXZpc2lvbnMgVGhlIG51bWJlciBvZiBzdWJkaXZpc2lvbnMgZG93biB0aGVcbiAqICAgICB0cnVuY2F0ZWQgY29uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdF90b3BDYXBdIENyZWF0ZSB0b3AgY2FwLiBEZWZhdWx0ID0gdHJ1ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdF9ib3R0b21DYXBdIENyZWF0ZSBib3R0b20gY2FwLiBEZWZhdWx0ID0gdHJ1ZS5cbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBUeXBlZEFycmF5Pn0gVGhlIGNyZWF0ZWQgY29uZSB2ZXJ0aWNlcy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVRydW5jYXRlZENvbmVWZXJ0aWNlcyhcbiAgICBib3R0b21SYWRpdXMsXG4gICAgdG9wUmFkaXVzLFxuICAgIGhlaWdodCxcbiAgICByYWRpYWxTdWJkaXZpc2lvbnMsXG4gICAgdmVydGljYWxTdWJkaXZpc2lvbnMsXG4gICAgb3B0X3RvcENhcCxcbiAgICBvcHRfYm90dG9tQ2FwKSB7XG4gIGlmIChyYWRpYWxTdWJkaXZpc2lvbnMgPCAzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdyYWRpYWxTdWJkaXZpc2lvbnMgbXVzdCBiZSAzIG9yIGdyZWF0ZXInKTtcbiAgfVxuXG4gIGlmICh2ZXJ0aWNhbFN1YmRpdmlzaW9ucyA8IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3ZlcnRpY2FsU3ViZGl2aXNpb25zIG11c3QgYmUgMSBvciBncmVhdGVyJyk7XG4gIH1cblxuICBjb25zdCB0b3BDYXAgPSAob3B0X3RvcENhcCA9PT0gdW5kZWZpbmVkKSA/IHRydWUgOiBvcHRfdG9wQ2FwO1xuICBjb25zdCBib3R0b21DYXAgPSAob3B0X2JvdHRvbUNhcCA9PT0gdW5kZWZpbmVkKSA/IHRydWUgOiBvcHRfYm90dG9tQ2FwO1xuXG4gIGNvbnN0IGV4dHJhID0gKHRvcENhcCA/IDIgOiAwKSArIChib3R0b21DYXAgPyAyIDogMCk7XG5cbiAgY29uc3QgbnVtVmVydGljZXMgPSAocmFkaWFsU3ViZGl2aXNpb25zICsgMSkgKiAodmVydGljYWxTdWJkaXZpc2lvbnMgKyAxICsgZXh0cmEpO1xuICBjb25zdCBwb3NpdGlvbnMgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDMsIG51bVZlcnRpY2VzKTtcbiAgY29uc3Qgbm9ybWFscyAgID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCBudW1WZXJ0aWNlcyk7XG4gIGNvbnN0IHRleGNvb3JkcyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMiwgbnVtVmVydGljZXMpO1xuICBjb25zdCBpbmRpY2VzICAgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDMsIHJhZGlhbFN1YmRpdmlzaW9ucyAqICh2ZXJ0aWNhbFN1YmRpdmlzaW9ucyArIGV4dHJhIC8gMikgKiAyLCBVaW50MTZBcnJheSk7XG5cbiAgY29uc3QgdmVydHNBcm91bmRFZGdlID0gcmFkaWFsU3ViZGl2aXNpb25zICsgMTtcblxuICAvLyBUaGUgc2xhbnQgb2YgdGhlIGNvbmUgaXMgY29uc3RhbnQgYWNyb3NzIGl0cyBzdXJmYWNlXG4gIGNvbnN0IHNsYW50ID0gTWF0aC5hdGFuMihib3R0b21SYWRpdXMgLSB0b3BSYWRpdXMsIGhlaWdodCk7XG4gIGNvbnN0IGNvc1NsYW50ID0gTWF0aC5jb3Moc2xhbnQpO1xuICBjb25zdCBzaW5TbGFudCA9IE1hdGguc2luKHNsYW50KTtcblxuICBjb25zdCBzdGFydCA9IHRvcENhcCA/IC0yIDogMDtcbiAgY29uc3QgZW5kID0gdmVydGljYWxTdWJkaXZpc2lvbnMgKyAoYm90dG9tQ2FwID8gMiA6IDApO1xuXG4gIGZvciAobGV0IHl5ID0gc3RhcnQ7IHl5IDw9IGVuZDsgKyt5eSkge1xuICAgIGxldCB2ID0geXkgLyB2ZXJ0aWNhbFN1YmRpdmlzaW9ucztcbiAgICBsZXQgeSA9IGhlaWdodCAqIHY7XG4gICAgbGV0IHJpbmdSYWRpdXM7XG4gICAgaWYgKHl5IDwgMCkge1xuICAgICAgeSA9IDA7XG4gICAgICB2ID0gMTtcbiAgICAgIHJpbmdSYWRpdXMgPSBib3R0b21SYWRpdXM7XG4gICAgfSBlbHNlIGlmICh5eSA+IHZlcnRpY2FsU3ViZGl2aXNpb25zKSB7XG4gICAgICB5ID0gaGVpZ2h0O1xuICAgICAgdiA9IDE7XG4gICAgICByaW5nUmFkaXVzID0gdG9wUmFkaXVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByaW5nUmFkaXVzID0gYm90dG9tUmFkaXVzICtcbiAgICAgICAgKHRvcFJhZGl1cyAtIGJvdHRvbVJhZGl1cykgKiAoeXkgLyB2ZXJ0aWNhbFN1YmRpdmlzaW9ucyk7XG4gICAgfVxuICAgIGlmICh5eSA9PT0gLTIgfHwgeXkgPT09IHZlcnRpY2FsU3ViZGl2aXNpb25zICsgMikge1xuICAgICAgcmluZ1JhZGl1cyA9IDA7XG4gICAgICB2ID0gMDtcbiAgICB9XG4gICAgeSAtPSBoZWlnaHQgLyAyO1xuICAgIGZvciAobGV0IGlpID0gMDsgaWkgPCB2ZXJ0c0Fyb3VuZEVkZ2U7ICsraWkpIHtcbiAgICAgIGNvbnN0IHNpbiA9IE1hdGguc2luKGlpICogTWF0aC5QSSAqIDIgLyByYWRpYWxTdWJkaXZpc2lvbnMpO1xuICAgICAgY29uc3QgY29zID0gTWF0aC5jb3MoaWkgKiBNYXRoLlBJICogMiAvIHJhZGlhbFN1YmRpdmlzaW9ucyk7XG4gICAgICBwb3NpdGlvbnMucHVzaChzaW4gKiByaW5nUmFkaXVzLCB5LCBjb3MgKiByaW5nUmFkaXVzKTtcbiAgICAgIGlmICh5eSA8IDApIHtcbiAgICAgICAgbm9ybWFscy5wdXNoKDAsIC0xLCAwKTtcbiAgICAgIH0gZWxzZSBpZiAoeXkgPiB2ZXJ0aWNhbFN1YmRpdmlzaW9ucykge1xuICAgICAgICBub3JtYWxzLnB1c2goMCwgMSwgMCk7XG4gICAgICB9IGVsc2UgaWYgKHJpbmdSYWRpdXMgPT09IDAuMCkge1xuICAgICAgICBub3JtYWxzLnB1c2goMCwgMCwgMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub3JtYWxzLnB1c2goc2luICogY29zU2xhbnQsIHNpblNsYW50LCBjb3MgKiBjb3NTbGFudCk7XG4gICAgICB9XG4gICAgICB0ZXhjb29yZHMucHVzaCgoaWkgLyByYWRpYWxTdWJkaXZpc2lvbnMpLCAxIC0gdik7XG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgeXkgPSAwOyB5eSA8IHZlcnRpY2FsU3ViZGl2aXNpb25zICsgZXh0cmE7ICsreXkpIHsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBpZiAoeXkgPT09IDEgJiYgdG9wQ2FwIHx8IHl5ID09PSB2ZXJ0aWNhbFN1YmRpdmlzaW9ucyArIGV4dHJhIC0gMiAmJiBib3R0b21DYXApIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBmb3IgKGxldCBpaSA9IDA7IGlpIDwgcmFkaWFsU3ViZGl2aXNpb25zOyArK2lpKSB7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICBpbmRpY2VzLnB1c2godmVydHNBcm91bmRFZGdlICogKHl5ICsgMCkgKyAwICsgaWksXG4gICAgICAgICAgICAgICAgICAgdmVydHNBcm91bmRFZGdlICogKHl5ICsgMCkgKyAxICsgaWksXG4gICAgICAgICAgICAgICAgICAgdmVydHNBcm91bmRFZGdlICogKHl5ICsgMSkgKyAxICsgaWkpO1xuICAgICAgaW5kaWNlcy5wdXNoKHZlcnRzQXJvdW5kRWRnZSAqICh5eSArIDApICsgMCArIGlpLFxuICAgICAgICAgICAgICAgICAgIHZlcnRzQXJvdW5kRWRnZSAqICh5eSArIDEpICsgMSArIGlpLFxuICAgICAgICAgICAgICAgICAgIHZlcnRzQXJvdW5kRWRnZSAqICh5eSArIDEpICsgMCArIGlpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBvc2l0aW9uOiBwb3NpdGlvbnMsXG4gICAgbm9ybWFsOiBub3JtYWxzLFxuICAgIHRleGNvb3JkOiB0ZXhjb29yZHMsXG4gICAgaW5kaWNlczogaW5kaWNlcyxcbiAgfTtcbn1cblxuLyoqXG4gKiBFeHBhbmRzIFJMRSBkYXRhXG4gKiBAcGFyYW0ge251bWJlcltdfSBybGVEYXRhIGRhdGEgaW4gZm9ybWF0IG9mIHJ1bi1sZW5ndGgsIHgsIHksIHosIHJ1bi1sZW5ndGgsIHgsIHksIHpcbiAqIEBwYXJhbSB7bnVtYmVyW119IFtwYWRkaW5nXSB2YWx1ZSB0byBhZGQgZWFjaCBlbnRyeSB3aXRoLlxuICogQHJldHVybiB7bnVtYmVyW119IHRoZSBleHBhbmRlZCBybGVEYXRhXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBleHBhbmRSTEVEYXRhKHJsZURhdGEsIHBhZGRpbmcpIHtcbiAgcGFkZGluZyA9IHBhZGRpbmcgfHwgW107XG4gIGNvbnN0IGRhdGEgPSBbXTtcbiAgZm9yIChsZXQgaWkgPSAwOyBpaSA8IHJsZURhdGEubGVuZ3RoOyBpaSArPSA0KSB7XG4gICAgY29uc3QgcnVuTGVuZ3RoID0gcmxlRGF0YVtpaV07XG4gICAgY29uc3QgZWxlbWVudCA9IHJsZURhdGEuc2xpY2UoaWkgKyAxLCBpaSArIDQpO1xuICAgIGVsZW1lbnQucHVzaC5hcHBseShlbGVtZW50LCBwYWRkaW5nKTtcbiAgICBmb3IgKGxldCBqaiA9IDA7IGpqIDwgcnVuTGVuZ3RoOyArK2pqKSB7XG4gICAgICBkYXRhLnB1c2guYXBwbHkoZGF0YSwgZWxlbWVudCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgM0QgJ0YnIEJ1ZmZlckluZm8uXG4gKiBBbiAnRicgaXMgdXNlZnVsIGJlY2F1c2UgeW91IGNhbiBlYXNpbHkgdGVsbCB3aGljaCB3YXkgaXQgaXMgb3JpZW50ZWQuXG4gKiBUaGUgY3JlYXRlZCAnRicgaGFzIHBvc2l0aW9uLCBub3JtYWwsIHRleGNvb3JkLCBhbmQgY29sb3IgYnVmZmVycy5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsLkJ1ZmZlckluZm99IFRoZSBjcmVhdGVkIEJ1ZmZlckluZm8uXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICogQGZ1bmN0aW9uIGNyZWF0ZTNERkJ1ZmZlckluZm9cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgM0QgJ0YnIGJ1ZmZlcnMuXG4gKiBBbiAnRicgaXMgdXNlZnVsIGJlY2F1c2UgeW91IGNhbiBlYXNpbHkgdGVsbCB3aGljaCB3YXkgaXQgaXMgb3JpZW50ZWQuXG4gKiBUaGUgY3JlYXRlZCAnRicgaGFzIHBvc2l0aW9uLCBub3JtYWwsIHRleGNvb3JkLCBhbmQgY29sb3IgYnVmZmVycy5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBXZWJHTEJ1ZmZlcj59IFRoZSBjcmVhdGVkIGJ1ZmZlcnMuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICogQGZ1bmN0aW9uIGNyZWF0ZTNERkJ1ZmZlcnNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgM0QgJ0YnIHZlcnRpY2VzLlxuICogQW4gJ0YnIGlzIHVzZWZ1bCBiZWNhdXNlIHlvdSBjYW4gZWFzaWx5IHRlbGwgd2hpY2ggd2F5IGl0IGlzIG9yaWVudGVkLlxuICogVGhlIGNyZWF0ZWQgJ0YnIGhhcyBwb3NpdGlvbiwgbm9ybWFsLCB0ZXhjb29yZCwgYW5kIGNvbG9yIGFycmF5cy5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgVHlwZWRBcnJheT59IFRoZSBjcmVhdGVkIHZlcnRpY2VzLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlM0RGVmVydGljZXMoKSB7XG5cbiAgY29uc3QgcG9zaXRpb25zID0gW1xuICAgIC8vIGxlZnQgY29sdW1uIGZyb250XG4gICAgMCwgICAwLCAgMCxcbiAgICAwLCAxNTAsICAwLFxuICAgIDMwLCAgIDAsICAwLFxuICAgIDAsIDE1MCwgIDAsXG4gICAgMzAsIDE1MCwgIDAsXG4gICAgMzAsICAgMCwgIDAsXG5cbiAgICAvLyB0b3AgcnVuZyBmcm9udFxuICAgIDMwLCAgIDAsICAwLFxuICAgIDMwLCAgMzAsICAwLFxuICAgIDEwMCwgICAwLCAgMCxcbiAgICAzMCwgIDMwLCAgMCxcbiAgICAxMDAsICAzMCwgIDAsXG4gICAgMTAwLCAgIDAsICAwLFxuXG4gICAgLy8gbWlkZGxlIHJ1bmcgZnJvbnRcbiAgICAzMCwgIDYwLCAgMCxcbiAgICAzMCwgIDkwLCAgMCxcbiAgICA2NywgIDYwLCAgMCxcbiAgICAzMCwgIDkwLCAgMCxcbiAgICA2NywgIDkwLCAgMCxcbiAgICA2NywgIDYwLCAgMCxcblxuICAgIC8vIGxlZnQgY29sdW1uIGJhY2tcbiAgICAgIDAsICAgMCwgIDMwLFxuICAgICAzMCwgICAwLCAgMzAsXG4gICAgICAwLCAxNTAsICAzMCxcbiAgICAgIDAsIDE1MCwgIDMwLFxuICAgICAzMCwgICAwLCAgMzAsXG4gICAgIDMwLCAxNTAsICAzMCxcblxuICAgIC8vIHRvcCBydW5nIGJhY2tcbiAgICAgMzAsICAgMCwgIDMwLFxuICAgIDEwMCwgICAwLCAgMzAsXG4gICAgIDMwLCAgMzAsICAzMCxcbiAgICAgMzAsICAzMCwgIDMwLFxuICAgIDEwMCwgICAwLCAgMzAsXG4gICAgMTAwLCAgMzAsICAzMCxcblxuICAgIC8vIG1pZGRsZSBydW5nIGJhY2tcbiAgICAgMzAsICA2MCwgIDMwLFxuICAgICA2NywgIDYwLCAgMzAsXG4gICAgIDMwLCAgOTAsICAzMCxcbiAgICAgMzAsICA5MCwgIDMwLFxuICAgICA2NywgIDYwLCAgMzAsXG4gICAgIDY3LCAgOTAsICAzMCxcblxuICAgIC8vIHRvcFxuICAgICAgMCwgICAwLCAgIDAsXG4gICAgMTAwLCAgIDAsICAgMCxcbiAgICAxMDAsICAgMCwgIDMwLFxuICAgICAgMCwgICAwLCAgIDAsXG4gICAgMTAwLCAgIDAsICAzMCxcbiAgICAgIDAsICAgMCwgIDMwLFxuXG4gICAgLy8gdG9wIHJ1bmcgZnJvbnRcbiAgICAxMDAsICAgMCwgICAwLFxuICAgIDEwMCwgIDMwLCAgIDAsXG4gICAgMTAwLCAgMzAsICAzMCxcbiAgICAxMDAsICAgMCwgICAwLFxuICAgIDEwMCwgIDMwLCAgMzAsXG4gICAgMTAwLCAgIDAsICAzMCxcblxuICAgIC8vIHVuZGVyIHRvcCBydW5nXG4gICAgMzAsICAgMzAsICAgMCxcbiAgICAzMCwgICAzMCwgIDMwLFxuICAgIDEwMCwgIDMwLCAgMzAsXG4gICAgMzAsICAgMzAsICAgMCxcbiAgICAxMDAsICAzMCwgIDMwLFxuICAgIDEwMCwgIDMwLCAgIDAsXG5cbiAgICAvLyBiZXR3ZWVuIHRvcCBydW5nIGFuZCBtaWRkbGVcbiAgICAzMCwgICAzMCwgICAwLFxuICAgIDMwLCAgIDYwLCAgMzAsXG4gICAgMzAsICAgMzAsICAzMCxcbiAgICAzMCwgICAzMCwgICAwLFxuICAgIDMwLCAgIDYwLCAgIDAsXG4gICAgMzAsICAgNjAsICAzMCxcblxuICAgIC8vIHRvcCBvZiBtaWRkbGUgcnVuZ1xuICAgIDMwLCAgIDYwLCAgIDAsXG4gICAgNjcsICAgNjAsICAzMCxcbiAgICAzMCwgICA2MCwgIDMwLFxuICAgIDMwLCAgIDYwLCAgIDAsXG4gICAgNjcsICAgNjAsICAgMCxcbiAgICA2NywgICA2MCwgIDMwLFxuXG4gICAgLy8gZnJvbnQgb2YgbWlkZGxlIHJ1bmdcbiAgICA2NywgICA2MCwgICAwLFxuICAgIDY3LCAgIDkwLCAgMzAsXG4gICAgNjcsICAgNjAsICAzMCxcbiAgICA2NywgICA2MCwgICAwLFxuICAgIDY3LCAgIDkwLCAgIDAsXG4gICAgNjcsICAgOTAsICAzMCxcblxuICAgIC8vIGJvdHRvbSBvZiBtaWRkbGUgcnVuZy5cbiAgICAzMCwgICA5MCwgICAwLFxuICAgIDMwLCAgIDkwLCAgMzAsXG4gICAgNjcsICAgOTAsICAzMCxcbiAgICAzMCwgICA5MCwgICAwLFxuICAgIDY3LCAgIDkwLCAgMzAsXG4gICAgNjcsICAgOTAsICAgMCxcblxuICAgIC8vIGZyb250IG9mIGJvdHRvbVxuICAgIDMwLCAgIDkwLCAgIDAsXG4gICAgMzAsICAxNTAsICAzMCxcbiAgICAzMCwgICA5MCwgIDMwLFxuICAgIDMwLCAgIDkwLCAgIDAsXG4gICAgMzAsICAxNTAsICAgMCxcbiAgICAzMCwgIDE1MCwgIDMwLFxuXG4gICAgLy8gYm90dG9tXG4gICAgMCwgICAxNTAsICAgMCxcbiAgICAwLCAgIDE1MCwgIDMwLFxuICAgIDMwLCAgMTUwLCAgMzAsXG4gICAgMCwgICAxNTAsICAgMCxcbiAgICAzMCwgIDE1MCwgIDMwLFxuICAgIDMwLCAgMTUwLCAgIDAsXG5cbiAgICAvLyBsZWZ0IHNpZGVcbiAgICAwLCAgIDAsICAgMCxcbiAgICAwLCAgIDAsICAzMCxcbiAgICAwLCAxNTAsICAzMCxcbiAgICAwLCAgIDAsICAgMCxcbiAgICAwLCAxNTAsICAzMCxcbiAgICAwLCAxNTAsICAgMCxcbiAgXTtcblxuICBjb25zdCB0ZXhjb29yZHMgPSBbXG4gICAgLy8gbGVmdCBjb2x1bW4gZnJvbnRcbiAgICAwLjIyLCAwLjE5LFxuICAgIDAuMjIsIDAuNzksXG4gICAgMC4zNCwgMC4xOSxcbiAgICAwLjIyLCAwLjc5LFxuICAgIDAuMzQsIDAuNzksXG4gICAgMC4zNCwgMC4xOSxcblxuICAgIC8vIHRvcCBydW5nIGZyb250XG4gICAgMC4zNCwgMC4xOSxcbiAgICAwLjM0LCAwLjMxLFxuICAgIDAuNjIsIDAuMTksXG4gICAgMC4zNCwgMC4zMSxcbiAgICAwLjYyLCAwLjMxLFxuICAgIDAuNjIsIDAuMTksXG5cbiAgICAvLyBtaWRkbGUgcnVuZyBmcm9udFxuICAgIDAuMzQsIDAuNDMsXG4gICAgMC4zNCwgMC41NSxcbiAgICAwLjQ5LCAwLjQzLFxuICAgIDAuMzQsIDAuNTUsXG4gICAgMC40OSwgMC41NSxcbiAgICAwLjQ5LCAwLjQzLFxuXG4gICAgLy8gbGVmdCBjb2x1bW4gYmFja1xuICAgIDAsIDAsXG4gICAgMSwgMCxcbiAgICAwLCAxLFxuICAgIDAsIDEsXG4gICAgMSwgMCxcbiAgICAxLCAxLFxuXG4gICAgLy8gdG9wIHJ1bmcgYmFja1xuICAgIDAsIDAsXG4gICAgMSwgMCxcbiAgICAwLCAxLFxuICAgIDAsIDEsXG4gICAgMSwgMCxcbiAgICAxLCAxLFxuXG4gICAgLy8gbWlkZGxlIHJ1bmcgYmFja1xuICAgIDAsIDAsXG4gICAgMSwgMCxcbiAgICAwLCAxLFxuICAgIDAsIDEsXG4gICAgMSwgMCxcbiAgICAxLCAxLFxuXG4gICAgLy8gdG9wXG4gICAgMCwgMCxcbiAgICAxLCAwLFxuICAgIDEsIDEsXG4gICAgMCwgMCxcbiAgICAxLCAxLFxuICAgIDAsIDEsXG5cbiAgICAvLyB0b3AgcnVuZyBmcm9udFxuICAgIDAsIDAsXG4gICAgMSwgMCxcbiAgICAxLCAxLFxuICAgIDAsIDAsXG4gICAgMSwgMSxcbiAgICAwLCAxLFxuXG4gICAgLy8gdW5kZXIgdG9wIHJ1bmdcbiAgICAwLCAwLFxuICAgIDAsIDEsXG4gICAgMSwgMSxcbiAgICAwLCAwLFxuICAgIDEsIDEsXG4gICAgMSwgMCxcblxuICAgIC8vIGJldHdlZW4gdG9wIHJ1bmcgYW5kIG1pZGRsZVxuICAgIDAsIDAsXG4gICAgMSwgMSxcbiAgICAwLCAxLFxuICAgIDAsIDAsXG4gICAgMSwgMCxcbiAgICAxLCAxLFxuXG4gICAgLy8gdG9wIG9mIG1pZGRsZSBydW5nXG4gICAgMCwgMCxcbiAgICAxLCAxLFxuICAgIDAsIDEsXG4gICAgMCwgMCxcbiAgICAxLCAwLFxuICAgIDEsIDEsXG5cbiAgICAvLyBmcm9udCBvZiBtaWRkbGUgcnVuZ1xuICAgIDAsIDAsXG4gICAgMSwgMSxcbiAgICAwLCAxLFxuICAgIDAsIDAsXG4gICAgMSwgMCxcbiAgICAxLCAxLFxuXG4gICAgLy8gYm90dG9tIG9mIG1pZGRsZSBydW5nLlxuICAgIDAsIDAsXG4gICAgMCwgMSxcbiAgICAxLCAxLFxuICAgIDAsIDAsXG4gICAgMSwgMSxcbiAgICAxLCAwLFxuXG4gICAgLy8gZnJvbnQgb2YgYm90dG9tXG4gICAgMCwgMCxcbiAgICAxLCAxLFxuICAgIDAsIDEsXG4gICAgMCwgMCxcbiAgICAxLCAwLFxuICAgIDEsIDEsXG5cbiAgICAvLyBib3R0b21cbiAgICAwLCAwLFxuICAgIDAsIDEsXG4gICAgMSwgMSxcbiAgICAwLCAwLFxuICAgIDEsIDEsXG4gICAgMSwgMCxcblxuICAgIC8vIGxlZnQgc2lkZVxuICAgIDAsIDAsXG4gICAgMCwgMSxcbiAgICAxLCAxLFxuICAgIDAsIDAsXG4gICAgMSwgMSxcbiAgICAxLCAwLFxuICBdO1xuXG4gIGNvbnN0IG5vcm1hbHMgPSBleHBhbmRSTEVEYXRhKFtcbiAgICAvLyBsZWZ0IGNvbHVtbiBmcm9udFxuICAgIC8vIHRvcCBydW5nIGZyb250XG4gICAgLy8gbWlkZGxlIHJ1bmcgZnJvbnRcbiAgICAxOCwgMCwgMCwgMSxcblxuICAgIC8vIGxlZnQgY29sdW1uIGJhY2tcbiAgICAvLyB0b3AgcnVuZyBiYWNrXG4gICAgLy8gbWlkZGxlIHJ1bmcgYmFja1xuICAgIDE4LCAwLCAwLCAtMSxcblxuICAgIC8vIHRvcFxuICAgIDYsIDAsIDEsIDAsXG5cbiAgICAvLyB0b3AgcnVuZyBmcm9udFxuICAgIDYsIDEsIDAsIDAsXG5cbiAgICAvLyB1bmRlciB0b3AgcnVuZ1xuICAgIDYsIDAsIC0xLCAwLFxuXG4gICAgLy8gYmV0d2VlbiB0b3AgcnVuZyBhbmQgbWlkZGxlXG4gICAgNiwgMSwgMCwgMCxcblxuICAgIC8vIHRvcCBvZiBtaWRkbGUgcnVuZ1xuICAgIDYsIDAsIDEsIDAsXG5cbiAgICAvLyBmcm9udCBvZiBtaWRkbGUgcnVuZ1xuICAgIDYsIDEsIDAsIDAsXG5cbiAgICAvLyBib3R0b20gb2YgbWlkZGxlIHJ1bmcuXG4gICAgNiwgMCwgLTEsIDAsXG5cbiAgICAvLyBmcm9udCBvZiBib3R0b21cbiAgICA2LCAxLCAwLCAwLFxuXG4gICAgLy8gYm90dG9tXG4gICAgNiwgMCwgLTEsIDAsXG5cbiAgICAvLyBsZWZ0IHNpZGVcbiAgICA2LCAtMSwgMCwgMCxcbiAgXSk7XG5cbiAgY29uc3QgY29sb3JzID0gZXhwYW5kUkxFRGF0YShbXG4gICAgICAgIC8vIGxlZnQgY29sdW1uIGZyb250XG4gICAgICAgIC8vIHRvcCBydW5nIGZyb250XG4gICAgICAgIC8vIG1pZGRsZSBydW5nIGZyb250XG4gICAgICAxOCwgMjAwLCAgNzAsIDEyMCxcblxuICAgICAgICAvLyBsZWZ0IGNvbHVtbiBiYWNrXG4gICAgICAgIC8vIHRvcCBydW5nIGJhY2tcbiAgICAgICAgLy8gbWlkZGxlIHJ1bmcgYmFja1xuICAgICAgMTgsIDgwLCA3MCwgMjAwLFxuXG4gICAgICAgIC8vIHRvcFxuICAgICAgNiwgNzAsIDIwMCwgMjEwLFxuXG4gICAgICAgIC8vIHRvcCBydW5nIGZyb250XG4gICAgICA2LCAyMDAsIDIwMCwgNzAsXG5cbiAgICAgICAgLy8gdW5kZXIgdG9wIHJ1bmdcbiAgICAgIDYsIDIxMCwgMTAwLCA3MCxcblxuICAgICAgICAvLyBiZXR3ZWVuIHRvcCBydW5nIGFuZCBtaWRkbGVcbiAgICAgIDYsIDIxMCwgMTYwLCA3MCxcblxuICAgICAgICAvLyB0b3Agb2YgbWlkZGxlIHJ1bmdcbiAgICAgIDYsIDcwLCAxODAsIDIxMCxcblxuICAgICAgICAvLyBmcm9udCBvZiBtaWRkbGUgcnVuZ1xuICAgICAgNiwgMTAwLCA3MCwgMjEwLFxuXG4gICAgICAgIC8vIGJvdHRvbSBvZiBtaWRkbGUgcnVuZy5cbiAgICAgIDYsIDc2LCAyMTAsIDEwMCxcblxuICAgICAgICAvLyBmcm9udCBvZiBib3R0b21cbiAgICAgIDYsIDE0MCwgMjEwLCA4MCxcblxuICAgICAgICAvLyBib3R0b21cbiAgICAgIDYsIDkwLCAxMzAsIDExMCxcblxuICAgICAgICAvLyBsZWZ0IHNpZGVcbiAgICAgIDYsIDE2MCwgMTYwLCAyMjAsXG4gIF0sIFsyNTVdKTtcblxuICBjb25zdCBudW1WZXJ0cyA9IHBvc2l0aW9ucy5sZW5ndGggLyAzO1xuXG4gIGNvbnN0IGFycmF5cyA9IHtcbiAgICBwb3NpdGlvbjogY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCBudW1WZXJ0cyksXG4gICAgdGV4Y29vcmQ6IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMiwgIG51bVZlcnRzKSxcbiAgICBub3JtYWw6IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgbnVtVmVydHMpLFxuICAgIGNvbG9yOiBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDQsIG51bVZlcnRzLCBVaW50OEFycmF5KSxcbiAgICBpbmRpY2VzOiBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDMsIG51bVZlcnRzIC8gMywgVWludDE2QXJyYXkpLFxuICB9O1xuXG4gIGFycmF5cy5wb3NpdGlvbi5wdXNoKHBvc2l0aW9ucyk7XG4gIGFycmF5cy50ZXhjb29yZC5wdXNoKHRleGNvb3Jkcyk7XG4gIGFycmF5cy5ub3JtYWwucHVzaChub3JtYWxzKTtcbiAgYXJyYXlzLmNvbG9yLnB1c2goY29sb3JzKTtcblxuICBmb3IgKGxldCBpaSA9IDA7IGlpIDwgbnVtVmVydHM7ICsraWkpIHtcbiAgICBhcnJheXMuaW5kaWNlcy5wdXNoKGlpKTtcbiAgfVxuXG4gIHJldHVybiBhcnJheXM7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBjcmVzY2VudCBCdWZmZXJJbmZvLlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IHZlcnRpY2FsUmFkaXVzIFRoZSB2ZXJ0aWNhbCByYWRpdXMgb2YgdGhlIGNyZXNjZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IG91dGVyUmFkaXVzIFRoZSBvdXRlciByYWRpdXMgb2YgdGhlIGNyZXNjZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IGlubmVyUmFkaXVzIFRoZSBpbm5lciByYWRpdXMgb2YgdGhlIGNyZXNjZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IHRoaWNrbmVzcyBUaGUgdGhpY2tuZXNzIG9mIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdWJkaXZpc2lvbnNEb3duIG51bWJlciBvZiBzdGVwcyBhcm91bmQgdGhlIGNyZXNjZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydE9mZnNldF0gV2hlcmUgdG8gc3RhcnQgYXJjLiBEZWZhdWx0IDAuXG4gKiBAcGFyYW0ge251bWJlcn0gW2VuZE9mZnNldF0gV2hlcmUgdG8gZW5kIGFyZy4gRGVmYXVsdCAxLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wuQnVmZmVySW5mb30gVGhlIGNyZWF0ZWQgQnVmZmVySW5mby5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKiBAZnVuY3Rpb24gY3JlYXRlQ3Jlc2VudEJ1ZmZlckluZm9cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgY3Jlc2NlbnQgYnVmZmVycy5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB2ZXJ0aWNhbFJhZGl1cyBUaGUgdmVydGljYWwgcmFkaXVzIG9mIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvdXRlclJhZGl1cyBUaGUgb3V0ZXIgcmFkaXVzIG9mIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbm5lclJhZGl1cyBUaGUgaW5uZXIgcmFkaXVzIG9mIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0aGlja25lc3MgVGhlIHRoaWNrbmVzcyBvZiB0aGUgY3Jlc2NlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gc3ViZGl2aXNpb25zRG93biBudW1iZXIgb2Ygc3RlcHMgYXJvdW5kIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnRPZmZzZXRdIFdoZXJlIHRvIHN0YXJ0IGFyYy4gRGVmYXVsdCAwLlxuICogQHBhcmFtIHtudW1iZXJ9IFtlbmRPZmZzZXRdIFdoZXJlIHRvIGVuZCBhcmcuIERlZmF1bHQgMS5cbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBXZWJHTEJ1ZmZlcj59IFRoZSBjcmVhdGVkIGJ1ZmZlcnMuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICogQGZ1bmN0aW9uIGNyZWF0ZUNyZXNlbnRCdWZmZXJzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGNyZXNjZW50IHZlcnRpY2VzLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB2ZXJ0aWNhbFJhZGl1cyBUaGUgdmVydGljYWwgcmFkaXVzIG9mIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvdXRlclJhZGl1cyBUaGUgb3V0ZXIgcmFkaXVzIG9mIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbm5lclJhZGl1cyBUaGUgaW5uZXIgcmFkaXVzIG9mIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0aGlja25lc3MgVGhlIHRoaWNrbmVzcyBvZiB0aGUgY3Jlc2NlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gc3ViZGl2aXNpb25zRG93biBudW1iZXIgb2Ygc3RlcHMgYXJvdW5kIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnRPZmZzZXRdIFdoZXJlIHRvIHN0YXJ0IGFyYy4gRGVmYXVsdCAwLlxuICogQHBhcmFtIHtudW1iZXJ9IFtlbmRPZmZzZXRdIFdoZXJlIHRvIGVuZCBhcmcuIERlZmF1bHQgMS5cbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBUeXBlZEFycmF5Pn0gVGhlIGNyZWF0ZWQgdmVydGljZXMuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICogQGZ1bmN0aW9uIGNyZWF0ZUNyZXNlbnRCdWZmZXJzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGNyZXNjZW50IEJ1ZmZlckluZm8uXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gdmVydGljYWxSYWRpdXMgVGhlIHZlcnRpY2FsIHJhZGl1cyBvZiB0aGUgY3Jlc2NlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gb3V0ZXJSYWRpdXMgVGhlIG91dGVyIHJhZGl1cyBvZiB0aGUgY3Jlc2NlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5uZXJSYWRpdXMgVGhlIGlubmVyIHJhZGl1cyBvZiB0aGUgY3Jlc2NlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gdGhpY2tuZXNzIFRoZSB0aGlja25lc3Mgb2YgdGhlIGNyZXNjZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IHN1YmRpdmlzaW9uc0Rvd24gbnVtYmVyIG9mIHN0ZXBzIGFyb3VuZCB0aGUgY3Jlc2NlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0T2Zmc2V0XSBXaGVyZSB0byBzdGFydCBhcmMuIERlZmF1bHQgMC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kT2Zmc2V0XSBXaGVyZSB0byBlbmQgYXJnLiBEZWZhdWx0IDEuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC5CdWZmZXJJbmZvfSBUaGUgY3JlYXRlZCBCdWZmZXJJbmZvLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqIEBmdW5jdGlvbiBjcmVhdGVDcmVzY2VudEJ1ZmZlckluZm9cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgY3Jlc2NlbnQgYnVmZmVycy5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB2ZXJ0aWNhbFJhZGl1cyBUaGUgdmVydGljYWwgcmFkaXVzIG9mIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvdXRlclJhZGl1cyBUaGUgb3V0ZXIgcmFkaXVzIG9mIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbm5lclJhZGl1cyBUaGUgaW5uZXIgcmFkaXVzIG9mIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0aGlja25lc3MgVGhlIHRoaWNrbmVzcyBvZiB0aGUgY3Jlc2NlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gc3ViZGl2aXNpb25zRG93biBudW1iZXIgb2Ygc3RlcHMgYXJvdW5kIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnRPZmZzZXRdIFdoZXJlIHRvIHN0YXJ0IGFyYy4gRGVmYXVsdCAwLlxuICogQHBhcmFtIHtudW1iZXJ9IFtlbmRPZmZzZXRdIFdoZXJlIHRvIGVuZCBhcmcuIERlZmF1bHQgMS5cbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBXZWJHTEJ1ZmZlcj59IFRoZSBjcmVhdGVkIGJ1ZmZlcnMuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICogQGZ1bmN0aW9uIGNyZWF0ZUNyZXNjZW50QnVmZmVyc1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyBjcmVzY2VudCB2ZXJ0aWNlcy5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gdmVydGljYWxSYWRpdXMgVGhlIHZlcnRpY2FsIHJhZGl1cyBvZiB0aGUgY3Jlc2NlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gb3V0ZXJSYWRpdXMgVGhlIG91dGVyIHJhZGl1cyBvZiB0aGUgY3Jlc2NlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5uZXJSYWRpdXMgVGhlIGlubmVyIHJhZGl1cyBvZiB0aGUgY3Jlc2NlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gdGhpY2tuZXNzIFRoZSB0aGlja25lc3Mgb2YgdGhlIGNyZXNjZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IHN1YmRpdmlzaW9uc0Rvd24gbnVtYmVyIG9mIHN0ZXBzIGFyb3VuZCB0aGUgY3Jlc2NlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0T2Zmc2V0XSBXaGVyZSB0byBzdGFydCBhcmMuIERlZmF1bHQgMC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kT2Zmc2V0XSBXaGVyZSB0byBlbmQgYXJnLiBEZWZhdWx0IDEuXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgVHlwZWRBcnJheT59IFRoZSBjcmVhdGVkIHZlcnRpY2VzLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqL1xuIGZ1bmN0aW9uIGNyZWF0ZUNyZXNjZW50VmVydGljZXMoXG4gICAgdmVydGljYWxSYWRpdXMsXG4gICAgb3V0ZXJSYWRpdXMsXG4gICAgaW5uZXJSYWRpdXMsXG4gICAgdGhpY2tuZXNzLFxuICAgIHN1YmRpdmlzaW9uc0Rvd24sXG4gICAgc3RhcnRPZmZzZXQsXG4gICAgZW5kT2Zmc2V0KSB7XG4gIGlmIChzdWJkaXZpc2lvbnNEb3duIDw9IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3N1YmRpdmlzaW9uRG93biBtdXN0IGJlID4gMCcpO1xuICB9XG5cbiAgc3RhcnRPZmZzZXQgPSBzdGFydE9mZnNldCB8fCAwO1xuICBlbmRPZmZzZXQgICA9IGVuZE9mZnNldCB8fCAxO1xuXG4gIGNvbnN0IHN1YmRpdmlzaW9uc1RoaWNrID0gMjtcblxuICBjb25zdCBvZmZzZXRSYW5nZSA9IGVuZE9mZnNldCAtIHN0YXJ0T2Zmc2V0O1xuICBjb25zdCBudW1WZXJ0aWNlcyA9IChzdWJkaXZpc2lvbnNEb3duICsgMSkgKiAyICogKDIgKyBzdWJkaXZpc2lvbnNUaGljayk7XG4gIGNvbnN0IHBvc2l0aW9ucyAgID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCBudW1WZXJ0aWNlcyk7XG4gIGNvbnN0IG5vcm1hbHMgICAgID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCBudW1WZXJ0aWNlcyk7XG4gIGNvbnN0IHRleGNvb3JkcyAgID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgyLCBudW1WZXJ0aWNlcyk7XG5cbiAgZnVuY3Rpb24gbGVycChhLCBiLCBzKSB7XG4gICAgcmV0dXJuIGEgKyAoYiAtIGEpICogcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFyYyhhcmNSYWRpdXMsIHgsIG5vcm1hbE11bHQsIG5vcm1hbEFkZCwgdU11bHQsIHVBZGQpIHtcbiAgICBmb3IgKGxldCB6ID0gMDsgeiA8PSBzdWJkaXZpc2lvbnNEb3duOyB6KyspIHtcbiAgICAgIGNvbnN0IHVCYWNrID0geCAvIChzdWJkaXZpc2lvbnNUaGljayAtIDEpO1xuICAgICAgY29uc3QgdiA9IHogLyBzdWJkaXZpc2lvbnNEb3duO1xuICAgICAgY29uc3QgeEJhY2sgPSAodUJhY2sgLSAwLjUpICogMjtcbiAgICAgIGNvbnN0IGFuZ2xlID0gKHN0YXJ0T2Zmc2V0ICsgKHYgKiBvZmZzZXRSYW5nZSkpICogTWF0aC5QSTtcbiAgICAgIGNvbnN0IHMgPSBNYXRoLnNpbihhbmdsZSk7XG4gICAgICBjb25zdCBjID0gTWF0aC5jb3MoYW5nbGUpO1xuICAgICAgY29uc3QgcmFkaXVzID0gbGVycCh2ZXJ0aWNhbFJhZGl1cywgYXJjUmFkaXVzLCBzKTtcbiAgICAgIGNvbnN0IHB4ID0geEJhY2sgKiB0aGlja25lc3M7XG4gICAgICBjb25zdCBweSA9IGMgKiB2ZXJ0aWNhbFJhZGl1cztcbiAgICAgIGNvbnN0IHB6ID0gcyAqIHJhZGl1cztcbiAgICAgIHBvc2l0aW9ucy5wdXNoKHB4LCBweSwgcHopO1xuICAgICAgY29uc3QgbiA9IGFkZChtdWx0aXBseSQxKFswLCBzLCBjXSwgbm9ybWFsTXVsdCksIG5vcm1hbEFkZCk7XG4gICAgICBub3JtYWxzLnB1c2gobik7XG4gICAgICB0ZXhjb29yZHMucHVzaCh1QmFjayAqIHVNdWx0ICsgdUFkZCwgdik7XG4gICAgfVxuICB9XG5cbiAgLy8gR2VuZXJhdGUgdGhlIGluZGl2aWR1YWwgdmVydGljZXMgaW4gb3VyIHZlcnRleCBidWZmZXIuXG4gIGZvciAobGV0IHggPSAwOyB4IDwgc3ViZGl2aXNpb25zVGhpY2s7IHgrKykge1xuICAgIGNvbnN0IHVCYWNrID0gKHggLyAoc3ViZGl2aXNpb25zVGhpY2sgLSAxKSAtIDAuNSkgKiAyO1xuICAgIGNyZWF0ZUFyYyhvdXRlclJhZGl1cywgeCwgWzEsIDEsIDFdLCBbMCwgICAgIDAsIDBdLCAxLCAwKTtcbiAgICBjcmVhdGVBcmMob3V0ZXJSYWRpdXMsIHgsIFswLCAwLCAwXSwgW3VCYWNrLCAwLCAwXSwgMCwgMCk7XG4gICAgY3JlYXRlQXJjKGlubmVyUmFkaXVzLCB4LCBbMSwgMSwgMV0sIFswLCAgICAgMCwgMF0sIDEsIDApO1xuICAgIGNyZWF0ZUFyYyhpbm5lclJhZGl1cywgeCwgWzAsIDAsIDBdLCBbdUJhY2ssIDAsIDBdLCAwLCAxKTtcbiAgfVxuXG4gIC8vIERvIG91dGVyIHN1cmZhY2UuXG4gIGNvbnN0IGluZGljZXMgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDMsIChzdWJkaXZpc2lvbnNEb3duICogMikgKiAoMiArIHN1YmRpdmlzaW9uc1RoaWNrKSwgVWludDE2QXJyYXkpO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN1cmZhY2UobGVmdEFyY09mZnNldCwgcmlnaHRBcmNPZmZzZXQpIHtcbiAgICBmb3IgKGxldCB6ID0gMDsgeiA8IHN1YmRpdmlzaW9uc0Rvd247ICsreikge1xuICAgICAgLy8gTWFrZSB0cmlhbmdsZSAxIG9mIHF1YWQuXG4gICAgICBpbmRpY2VzLnB1c2goXG4gICAgICAgICAgbGVmdEFyY09mZnNldCArIHogKyAwLFxuICAgICAgICAgIGxlZnRBcmNPZmZzZXQgKyB6ICsgMSxcbiAgICAgICAgICByaWdodEFyY09mZnNldCArIHogKyAwKTtcblxuICAgICAgLy8gTWFrZSB0cmlhbmdsZSAyIG9mIHF1YWQuXG4gICAgICBpbmRpY2VzLnB1c2goXG4gICAgICAgICAgbGVmdEFyY09mZnNldCArIHogKyAxLFxuICAgICAgICAgIHJpZ2h0QXJjT2Zmc2V0ICsgeiArIDEsXG4gICAgICAgICAgcmlnaHRBcmNPZmZzZXQgKyB6ICsgMCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbnVtVmVydGljZXNEb3duID0gc3ViZGl2aXNpb25zRG93biArIDE7XG4gIC8vIGZyb250XG4gIGNyZWF0ZVN1cmZhY2UobnVtVmVydGljZXNEb3duICogMCwgbnVtVmVydGljZXNEb3duICogNCk7XG4gIC8vIHJpZ2h0XG4gIGNyZWF0ZVN1cmZhY2UobnVtVmVydGljZXNEb3duICogNSwgbnVtVmVydGljZXNEb3duICogNyk7XG4gIC8vIGJhY2tcbiAgY3JlYXRlU3VyZmFjZShudW1WZXJ0aWNlc0Rvd24gKiA2LCBudW1WZXJ0aWNlc0Rvd24gKiAyKTtcbiAgLy8gbGVmdFxuICBjcmVhdGVTdXJmYWNlKG51bVZlcnRpY2VzRG93biAqIDMsIG51bVZlcnRpY2VzRG93biAqIDEpO1xuXG4gIHJldHVybiB7XG4gICAgcG9zaXRpb246IHBvc2l0aW9ucyxcbiAgICBub3JtYWw6ICAgbm9ybWFscyxcbiAgICB0ZXhjb29yZDogdGV4Y29vcmRzLFxuICAgIGluZGljZXM6ICBpbmRpY2VzLFxuICB9O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgY3lsaW5kZXIgQnVmZmVySW5mby4gVGhlIGN5bGluZGVyIHdpbGwgYmUgY3JlYXRlZCBhcm91bmQgdGhlIG9yaWdpblxuICogYWxvbmcgdGhlIHktYXhpcy5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgUmFkaXVzIG9mIGN5bGluZGVyLlxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBIZWlnaHQgb2YgY3lsaW5kZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaWFsU3ViZGl2aXNpb25zIFRoZSBudW1iZXIgb2Ygc3ViZGl2aXNpb25zIGFyb3VuZCB0aGUgY3lsaW5kZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gdmVydGljYWxTdWJkaXZpc2lvbnMgVGhlIG51bWJlciBvZiBzdWJkaXZpc2lvbnMgZG93biB0aGUgY3lsaW5kZXIuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt0b3BDYXBdIENyZWF0ZSB0b3AgY2FwLiBEZWZhdWx0ID0gdHJ1ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2JvdHRvbUNhcF0gQ3JlYXRlIGJvdHRvbSBjYXAuIERlZmF1bHQgPSB0cnVlLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wuQnVmZmVySW5mb30gVGhlIGNyZWF0ZWQgQnVmZmVySW5mby5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKiBAZnVuY3Rpb24gY3JlYXRlQ3lsaW5kZXJCdWZmZXJJbmZvXG4gKi9cblxuIC8qKlxuICAqIENyZWF0ZXMgY3lsaW5kZXIgYnVmZmVycy4gVGhlIGN5bGluZGVyIHdpbGwgYmUgY3JlYXRlZCBhcm91bmQgdGhlIG9yaWdpblxuICAqIGFsb25nIHRoZSB5LWF4aXMuXG4gICpcbiAgKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAgKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzIFJhZGl1cyBvZiBjeWxpbmRlci5cbiAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IEhlaWdodCBvZiBjeWxpbmRlci5cbiAgKiBAcGFyYW0ge251bWJlcn0gcmFkaWFsU3ViZGl2aXNpb25zIFRoZSBudW1iZXIgb2Ygc3ViZGl2aXNpb25zIGFyb3VuZCB0aGUgY3lsaW5kZXIuXG4gICogQHBhcmFtIHtudW1iZXJ9IHZlcnRpY2FsU3ViZGl2aXNpb25zIFRoZSBudW1iZXIgb2Ygc3ViZGl2aXNpb25zIGRvd24gdGhlIGN5bGluZGVyLlxuICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3RvcENhcF0gQ3JlYXRlIHRvcCBjYXAuIERlZmF1bHQgPSB0cnVlLlxuICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2JvdHRvbUNhcF0gQ3JlYXRlIGJvdHRvbSBjYXAuIERlZmF1bHQgPSB0cnVlLlxuICAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBXZWJHTEJ1ZmZlcj59IFRoZSBjcmVhdGVkIGJ1ZmZlcnMuXG4gICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAgKiBAZnVuY3Rpb24gY3JlYXRlQ3lsaW5kZXJCdWZmZXJzXG4gICovXG5cbiAvKipcbiAgKiBDcmVhdGVzIGN5bGluZGVyIHZlcnRpY2VzLiBUaGUgY3lsaW5kZXIgd2lsbCBiZSBjcmVhdGVkIGFyb3VuZCB0aGUgb3JpZ2luXG4gICogYWxvbmcgdGhlIHktYXhpcy5cbiAgKlxuICAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgUmFkaXVzIG9mIGN5bGluZGVyLlxuICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgSGVpZ2h0IG9mIGN5bGluZGVyLlxuICAqIEBwYXJhbSB7bnVtYmVyfSByYWRpYWxTdWJkaXZpc2lvbnMgVGhlIG51bWJlciBvZiBzdWJkaXZpc2lvbnMgYXJvdW5kIHRoZSBjeWxpbmRlci5cbiAgKiBAcGFyYW0ge251bWJlcn0gdmVydGljYWxTdWJkaXZpc2lvbnMgVGhlIG51bWJlciBvZiBzdWJkaXZpc2lvbnMgZG93biB0aGUgY3lsaW5kZXIuXG4gICogQHBhcmFtIHtib29sZWFufSBbdG9wQ2FwXSBDcmVhdGUgdG9wIGNhcC4gRGVmYXVsdCA9IHRydWUuXG4gICogQHBhcmFtIHtib29sZWFufSBbYm90dG9tQ2FwXSBDcmVhdGUgYm90dG9tIGNhcC4gRGVmYXVsdCA9IHRydWUuXG4gICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIFR5cGVkQXJyYXk+fSBUaGUgY3JlYXRlZCB2ZXJ0aWNlcy5cbiAgKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICAqL1xuZnVuY3Rpb24gY3JlYXRlQ3lsaW5kZXJWZXJ0aWNlcyhcbiAgICByYWRpdXMsXG4gICAgaGVpZ2h0LFxuICAgIHJhZGlhbFN1YmRpdmlzaW9ucyxcbiAgICB2ZXJ0aWNhbFN1YmRpdmlzaW9ucyxcbiAgICB0b3BDYXAsXG4gICAgYm90dG9tQ2FwKSB7XG4gIHJldHVybiBjcmVhdGVUcnVuY2F0ZWRDb25lVmVydGljZXMoXG4gICAgICByYWRpdXMsXG4gICAgICByYWRpdXMsXG4gICAgICBoZWlnaHQsXG4gICAgICByYWRpYWxTdWJkaXZpc2lvbnMsXG4gICAgICB2ZXJ0aWNhbFN1YmRpdmlzaW9ucyxcbiAgICAgIHRvcENhcCxcbiAgICAgIGJvdHRvbUNhcCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBCdWZmZXJJbmZvIGZvciBhIHRvcnVzXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzIHJhZGl1cyBvZiBjZW50ZXIgb2YgdG9ydXMgY2lyY2xlLlxuICogQHBhcmFtIHtudW1iZXJ9IHRoaWNrbmVzcyByYWRpdXMgb2YgdG9ydXMgcmluZy5cbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpYWxTdWJkaXZpc2lvbnMgVGhlIG51bWJlciBvZiBzdWJkaXZpc2lvbnMgYXJvdW5kIHRoZSB0b3J1cy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBib2R5U3ViZGl2aXNpb25zIFRoZSBudW1iZXIgb2Ygc3ViZGl2aXNpb25zIGFyb3VuZCB0aGUgYm9keSB0b3J1cy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3N0YXJ0QW5nbGVdIHN0YXJ0IGFuZ2xlIGluIHJhZGlhbnMuIERlZmF1bHQgPSAwLlxuICogQHBhcmFtIHtib29sZWFufSBbZW5kQW5nbGVdIGVuZCBhbmdsZSBpbiByYWRpYW5zLiBEZWZhdWx0ID0gTWF0aC5QSSAqIDIuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC5CdWZmZXJJbmZvfSBUaGUgY3JlYXRlZCBCdWZmZXJJbmZvLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqIEBmdW5jdGlvbiBjcmVhdGVUb3J1c0J1ZmZlckluZm9cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYnVmZmVycyBmb3IgYSB0b3J1c1xuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGl1cyByYWRpdXMgb2YgY2VudGVyIG9mIHRvcnVzIGNpcmNsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0aGlja25lc3MgcmFkaXVzIG9mIHRvcnVzIHJpbmcuXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaWFsU3ViZGl2aXNpb25zIFRoZSBudW1iZXIgb2Ygc3ViZGl2aXNpb25zIGFyb3VuZCB0aGUgdG9ydXMuXG4gKiBAcGFyYW0ge251bWJlcn0gYm9keVN1YmRpdmlzaW9ucyBUaGUgbnVtYmVyIG9mIHN1YmRpdmlzaW9ucyBhcm91bmQgdGhlIGJvZHkgdG9ydXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtzdGFydEFuZ2xlXSBzdGFydCBhbmdsZSBpbiByYWRpYW5zLiBEZWZhdWx0ID0gMC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2VuZEFuZ2xlXSBlbmQgYW5nbGUgaW4gcmFkaWFucy4gRGVmYXVsdCA9IE1hdGguUEkgKiAyLlxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIFdlYkdMQnVmZmVyPn0gVGhlIGNyZWF0ZWQgYnVmZmVycy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKiBAZnVuY3Rpb24gY3JlYXRlVG9ydXNCdWZmZXJzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIHZlcnRpY2VzIGZvciBhIHRvcnVzXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGl1cyByYWRpdXMgb2YgY2VudGVyIG9mIHRvcnVzIGNpcmNsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0aGlja25lc3MgcmFkaXVzIG9mIHRvcnVzIHJpbmcuXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaWFsU3ViZGl2aXNpb25zIFRoZSBudW1iZXIgb2Ygc3ViZGl2aXNpb25zIGFyb3VuZCB0aGUgdG9ydXMuXG4gKiBAcGFyYW0ge251bWJlcn0gYm9keVN1YmRpdmlzaW9ucyBUaGUgbnVtYmVyIG9mIHN1YmRpdmlzaW9ucyBhcm91bmQgdGhlIGJvZHkgdG9ydXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtzdGFydEFuZ2xlXSBzdGFydCBhbmdsZSBpbiByYWRpYW5zLiBEZWZhdWx0ID0gMC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2VuZEFuZ2xlXSBlbmQgYW5nbGUgaW4gcmFkaWFucy4gRGVmYXVsdCA9IE1hdGguUEkgKiAyLlxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIFR5cGVkQXJyYXk+fSBUaGUgY3JlYXRlZCB2ZXJ0aWNlcy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVRvcnVzVmVydGljZXMoXG4gICAgcmFkaXVzLFxuICAgIHRoaWNrbmVzcyxcbiAgICByYWRpYWxTdWJkaXZpc2lvbnMsXG4gICAgYm9keVN1YmRpdmlzaW9ucyxcbiAgICBzdGFydEFuZ2xlLFxuICAgIGVuZEFuZ2xlKSB7XG4gIGlmIChyYWRpYWxTdWJkaXZpc2lvbnMgPCAzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdyYWRpYWxTdWJkaXZpc2lvbnMgbXVzdCBiZSAzIG9yIGdyZWF0ZXInKTtcbiAgfVxuXG4gIGlmIChib2R5U3ViZGl2aXNpb25zIDwgMykge1xuICAgIHRocm93IG5ldyBFcnJvcigndmVydGljYWxTdWJkaXZpc2lvbnMgbXVzdCBiZSAzIG9yIGdyZWF0ZXInKTtcbiAgfVxuXG4gIHN0YXJ0QW5nbGUgPSBzdGFydEFuZ2xlIHx8IDA7XG4gIGVuZEFuZ2xlID0gZW5kQW5nbGUgfHwgTWF0aC5QSSAqIDI7XG4gIGNvbnN0IHJhbmdlID0gZW5kQW5nbGUgLSBzdGFydEFuZ2xlO1xuXG4gIGNvbnN0IHJhZGlhbFBhcnRzID0gcmFkaWFsU3ViZGl2aXNpb25zICsgMTtcbiAgY29uc3QgYm9keVBhcnRzICAgPSBib2R5U3ViZGl2aXNpb25zICsgMTtcbiAgY29uc3QgbnVtVmVydGljZXMgPSByYWRpYWxQYXJ0cyAqIGJvZHlQYXJ0cztcbiAgY29uc3QgcG9zaXRpb25zICAgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDMsIG51bVZlcnRpY2VzKTtcbiAgY29uc3Qgbm9ybWFscyAgICAgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDMsIG51bVZlcnRpY2VzKTtcbiAgY29uc3QgdGV4Y29vcmRzICAgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDIsIG51bVZlcnRpY2VzKTtcbiAgY29uc3QgaW5kaWNlcyAgICAgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDMsIChyYWRpYWxTdWJkaXZpc2lvbnMpICogKGJvZHlTdWJkaXZpc2lvbnMpICogMiwgVWludDE2QXJyYXkpO1xuXG4gIGZvciAobGV0IHNsaWNlID0gMDsgc2xpY2UgPCBib2R5UGFydHM7ICsrc2xpY2UpIHtcbiAgICBjb25zdCB2ID0gc2xpY2UgLyBib2R5U3ViZGl2aXNpb25zO1xuICAgIGNvbnN0IHNsaWNlQW5nbGUgPSB2ICogTWF0aC5QSSAqIDI7XG4gICAgY29uc3Qgc2xpY2VTaW4gPSBNYXRoLnNpbihzbGljZUFuZ2xlKTtcbiAgICBjb25zdCByaW5nUmFkaXVzID0gcmFkaXVzICsgc2xpY2VTaW4gKiB0aGlja25lc3M7XG4gICAgY29uc3QgbnkgPSBNYXRoLmNvcyhzbGljZUFuZ2xlKTtcbiAgICBjb25zdCB5ID0gbnkgKiB0aGlja25lc3M7XG4gICAgZm9yIChsZXQgcmluZyA9IDA7IHJpbmcgPCByYWRpYWxQYXJ0czsgKytyaW5nKSB7XG4gICAgICBjb25zdCB1ID0gcmluZyAvIHJhZGlhbFN1YmRpdmlzaW9ucztcbiAgICAgIGNvbnN0IHJpbmdBbmdsZSA9IHN0YXJ0QW5nbGUgKyB1ICogcmFuZ2U7XG4gICAgICBjb25zdCB4U2luID0gTWF0aC5zaW4ocmluZ0FuZ2xlKTtcbiAgICAgIGNvbnN0IHpDb3MgPSBNYXRoLmNvcyhyaW5nQW5nbGUpO1xuICAgICAgY29uc3QgeCA9IHhTaW4gKiByaW5nUmFkaXVzO1xuICAgICAgY29uc3QgeiA9IHpDb3MgKiByaW5nUmFkaXVzO1xuICAgICAgY29uc3QgbnggPSB4U2luICogc2xpY2VTaW47XG4gICAgICBjb25zdCBueiA9IHpDb3MgKiBzbGljZVNpbjtcbiAgICAgIHBvc2l0aW9ucy5wdXNoKHgsIHksIHopO1xuICAgICAgbm9ybWFscy5wdXNoKG54LCBueSwgbnopO1xuICAgICAgdGV4Y29vcmRzLnB1c2godSwgMSAtIHYpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IHNsaWNlID0gMDsgc2xpY2UgPCBib2R5U3ViZGl2aXNpb25zOyArK3NsaWNlKSB7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZm9yIChsZXQgcmluZyA9IDA7IHJpbmcgPCByYWRpYWxTdWJkaXZpc2lvbnM7ICsrcmluZykgeyAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgY29uc3QgbmV4dFJpbmdJbmRleCAgPSAxICsgcmluZztcbiAgICAgIGNvbnN0IG5leHRTbGljZUluZGV4ID0gMSArIHNsaWNlO1xuICAgICAgaW5kaWNlcy5wdXNoKHJhZGlhbFBhcnRzICogc2xpY2UgICAgICAgICAgKyByaW5nLFxuICAgICAgICAgICAgICAgICAgIHJhZGlhbFBhcnRzICogbmV4dFNsaWNlSW5kZXggKyByaW5nLFxuICAgICAgICAgICAgICAgICAgIHJhZGlhbFBhcnRzICogc2xpY2UgICAgICAgICAgKyBuZXh0UmluZ0luZGV4KTtcbiAgICAgIGluZGljZXMucHVzaChyYWRpYWxQYXJ0cyAqIG5leHRTbGljZUluZGV4ICsgcmluZyxcbiAgICAgICAgICAgICAgICAgICByYWRpYWxQYXJ0cyAqIG5leHRTbGljZUluZGV4ICsgbmV4dFJpbmdJbmRleCxcbiAgICAgICAgICAgICAgICAgICByYWRpYWxQYXJ0cyAqIHNsaWNlICAgICAgICAgICsgbmV4dFJpbmdJbmRleCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwb3NpdGlvbjogcG9zaXRpb25zLFxuICAgIG5vcm1hbDogICBub3JtYWxzLFxuICAgIHRleGNvb3JkOiB0ZXhjb29yZHMsXG4gICAgaW5kaWNlczogIGluZGljZXMsXG4gIH07XG59XG5cblxuLyoqXG4gKiBDcmVhdGVzIGEgZGlzYyBCdWZmZXJJbmZvLiBUaGUgZGlzYyB3aWxsIGJlIGluIHRoZSB4eiBwbGFuZSwgY2VudGVyZWQgYXRcbiAqIHRoZSBvcmlnaW4uIFdoZW4gY3JlYXRpbmcsIGF0IGxlYXN0IDMgZGl2aXNpb25zLCBvciBwaWVcbiAqIHBpZWNlcywgbmVlZCB0byBiZSBzcGVjaWZpZWQsIG90aGVyd2lzZSB0aGUgdHJpYW5nbGVzIG1ha2luZ1xuICogdXAgdGhlIGRpc2Mgd2lsbCBiZSBkZWdlbmVyYXRlLiBZb3UgY2FuIGFsc28gc3BlY2lmeSB0aGVcbiAqIG51bWJlciBvZiByYWRpYWwgcGllY2VzIGBzdGFja3NgLiBBIHZhbHVlIG9mIDEgZm9yXG4gKiBzdGFja3Mgd2lsbCBnaXZlIHlvdSBhIHNpbXBsZSBkaXNjIG9mIHBpZSBwaWVjZXMuICBJZiB5b3VcbiAqIHdhbnQgdG8gY3JlYXRlIGFuIGFubnVsdXMgeW91IGNhbiBzZXQgYGlubmVyUmFkaXVzYCB0byBhXG4gKiB2YWx1ZSA+IDAuIEZpbmFsbHksIGBzdGFja1Bvd2VyYCBhbGxvd3MgeW91IHRvIGhhdmUgdGhlIHdpZHRoc1xuICogaW5jcmVhc2Ugb3IgZGVjcmVhc2UgYXMgeW91IG1vdmUgYXdheSBmcm9tIHRoZSBjZW50ZXIuIFRoaXNcbiAqIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgd2hlbiB1c2luZyB0aGUgZGlzYyBhcyBhIGdyb3VuZCBwbGFuZVxuICogd2l0aCBhIGZpeGVkIGNhbWVyYSBzdWNoIHRoYXQgeW91IGRvbid0IG5lZWQgdGhlIHJlc29sdXRpb25cbiAqIG9mIHNtYWxsIHRyaWFuZ2xlcyBuZWFyIHRoZSBwZXJpbWV0ZXIuIEZvciBleGFtcGxlLCBhIHZhbHVlXG4gKiBvZiAyIHdpbGwgcHJvZHVjZSBzdGFja3Mgd2hvc2Ugb3V0c2lkZSByYWRpdXMgaW5jcmVhc2VzIHdpdGhcbiAqIHRoZSBzcXVhcmUgb2YgdGhlIHN0YWNrIGluZGV4LiBBIHZhbHVlIG9mIDEgd2lsbCBnaXZlIHVuaWZvcm1cbiAqIHN0YWNrcy5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgUmFkaXVzIG9mIHRoZSBncm91bmQgcGxhbmUuXG4gKiBAcGFyYW0ge251bWJlcn0gZGl2aXNpb25zIE51bWJlciBvZiB0cmlhbmdsZXMgaW4gdGhlIGdyb3VuZCBwbGFuZSAoYXQgbGVhc3QgMykuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YWNrc10gTnVtYmVyIG9mIHJhZGlhbCBkaXZpc2lvbnMgKGRlZmF1bHQ9MSkuXG4gKiBAcGFyYW0ge251bWJlcn0gW2lubmVyUmFkaXVzXSBEZWZhdWx0IDAuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YWNrUG93ZXJdIFBvd2VyIHRvIHJhaXNlIHN0YWNrIHNpemUgdG8gZm9yIGRlY3JlYXNpbmcgd2lkdGguXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC5CdWZmZXJJbmZvfSBUaGUgY3JlYXRlZCBCdWZmZXJJbmZvLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqIEBmdW5jdGlvbiBjcmVhdGVEaXNjQnVmZmVySW5mb1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyBkaXNjIGJ1ZmZlcnMuIFRoZSBkaXNjIHdpbGwgYmUgaW4gdGhlIHh6IHBsYW5lLCBjZW50ZXJlZCBhdFxuICogdGhlIG9yaWdpbi4gV2hlbiBjcmVhdGluZywgYXQgbGVhc3QgMyBkaXZpc2lvbnMsIG9yIHBpZVxuICogcGllY2VzLCBuZWVkIHRvIGJlIHNwZWNpZmllZCwgb3RoZXJ3aXNlIHRoZSB0cmlhbmdsZXMgbWFraW5nXG4gKiB1cCB0aGUgZGlzYyB3aWxsIGJlIGRlZ2VuZXJhdGUuIFlvdSBjYW4gYWxzbyBzcGVjaWZ5IHRoZVxuICogbnVtYmVyIG9mIHJhZGlhbCBwaWVjZXMgYHN0YWNrc2AuIEEgdmFsdWUgb2YgMSBmb3JcbiAqIHN0YWNrcyB3aWxsIGdpdmUgeW91IGEgc2ltcGxlIGRpc2Mgb2YgcGllIHBpZWNlcy4gIElmIHlvdVxuICogd2FudCB0byBjcmVhdGUgYW4gYW5udWx1cyB5b3UgY2FuIHNldCBgaW5uZXJSYWRpdXNgIHRvIGFcbiAqIHZhbHVlID4gMC4gRmluYWxseSwgYHN0YWNrUG93ZXJgIGFsbG93cyB5b3UgdG8gaGF2ZSB0aGUgd2lkdGhzXG4gKiBpbmNyZWFzZSBvciBkZWNyZWFzZSBhcyB5b3UgbW92ZSBhd2F5IGZyb20gdGhlIGNlbnRlci4gVGhpc1xuICogaXMgcGFydGljdWxhcmx5IHVzZWZ1bCB3aGVuIHVzaW5nIHRoZSBkaXNjIGFzIGEgZ3JvdW5kIHBsYW5lXG4gKiB3aXRoIGEgZml4ZWQgY2FtZXJhIHN1Y2ggdGhhdCB5b3UgZG9uJ3QgbmVlZCB0aGUgcmVzb2x1dGlvblxuICogb2Ygc21hbGwgdHJpYW5nbGVzIG5lYXIgdGhlIHBlcmltZXRlci4gRm9yIGV4YW1wbGUsIGEgdmFsdWVcbiAqIG9mIDIgd2lsbCBwcm9kdWNlIHN0YWNrcyB3aG9zZSBvdXRzaWRlIHJhZGl1cyBpbmNyZWFzZXMgd2l0aFxuICogdGhlIHNxdWFyZSBvZiB0aGUgc3RhY2sgaW5kZXguIEEgdmFsdWUgb2YgMSB3aWxsIGdpdmUgdW5pZm9ybVxuICogc3RhY2tzLlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGl1cyBSYWRpdXMgb2YgdGhlIGdyb3VuZCBwbGFuZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkaXZpc2lvbnMgTnVtYmVyIG9mIHRyaWFuZ2xlcyBpbiB0aGUgZ3JvdW5kIHBsYW5lIChhdCBsZWFzdCAzKS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhY2tzXSBOdW1iZXIgb2YgcmFkaWFsIGRpdmlzaW9ucyAoZGVmYXVsdD0xKS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbaW5uZXJSYWRpdXNdIERlZmF1bHQgMC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhY2tQb3dlcl0gUG93ZXIgdG8gcmFpc2Ugc3RhY2sgc2l6ZSB0byBmb3IgZGVjcmVhc2luZyB3aWR0aC5cbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBXZWJHTEJ1ZmZlcj59IFRoZSBjcmVhdGVkIGJ1ZmZlcnMuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICogQGZ1bmN0aW9uIGNyZWF0ZURpc2NCdWZmZXJzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGRpc2MgdmVydGljZXMuIFRoZSBkaXNjIHdpbGwgYmUgaW4gdGhlIHh6IHBsYW5lLCBjZW50ZXJlZCBhdFxuICogdGhlIG9yaWdpbi4gV2hlbiBjcmVhdGluZywgYXQgbGVhc3QgMyBkaXZpc2lvbnMsIG9yIHBpZVxuICogcGllY2VzLCBuZWVkIHRvIGJlIHNwZWNpZmllZCwgb3RoZXJ3aXNlIHRoZSB0cmlhbmdsZXMgbWFraW5nXG4gKiB1cCB0aGUgZGlzYyB3aWxsIGJlIGRlZ2VuZXJhdGUuIFlvdSBjYW4gYWxzbyBzcGVjaWZ5IHRoZVxuICogbnVtYmVyIG9mIHJhZGlhbCBwaWVjZXMgYHN0YWNrc2AuIEEgdmFsdWUgb2YgMSBmb3JcbiAqIHN0YWNrcyB3aWxsIGdpdmUgeW91IGEgc2ltcGxlIGRpc2Mgb2YgcGllIHBpZWNlcy4gIElmIHlvdVxuICogd2FudCB0byBjcmVhdGUgYW4gYW5udWx1cyB5b3UgY2FuIHNldCBgaW5uZXJSYWRpdXNgIHRvIGFcbiAqIHZhbHVlID4gMC4gRmluYWxseSwgYHN0YWNrUG93ZXJgIGFsbG93cyB5b3UgdG8gaGF2ZSB0aGUgd2lkdGhzXG4gKiBpbmNyZWFzZSBvciBkZWNyZWFzZSBhcyB5b3UgbW92ZSBhd2F5IGZyb20gdGhlIGNlbnRlci4gVGhpc1xuICogaXMgcGFydGljdWxhcmx5IHVzZWZ1bCB3aGVuIHVzaW5nIHRoZSBkaXNjIGFzIGEgZ3JvdW5kIHBsYW5lXG4gKiB3aXRoIGEgZml4ZWQgY2FtZXJhIHN1Y2ggdGhhdCB5b3UgZG9uJ3QgbmVlZCB0aGUgcmVzb2x1dGlvblxuICogb2Ygc21hbGwgdHJpYW5nbGVzIG5lYXIgdGhlIHBlcmltZXRlci4gRm9yIGV4YW1wbGUsIGEgdmFsdWVcbiAqIG9mIDIgd2lsbCBwcm9kdWNlIHN0YWNrcyB3aG9zZSBvdXRzaWRlIHJhZGl1cyBpbmNyZWFzZXMgd2l0aFxuICogdGhlIHNxdWFyZSBvZiB0aGUgc3RhY2sgaW5kZXguIEEgdmFsdWUgb2YgMSB3aWxsIGdpdmUgdW5pZm9ybVxuICogc3RhY2tzLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgUmFkaXVzIG9mIHRoZSBncm91bmQgcGxhbmUuXG4gKiBAcGFyYW0ge251bWJlcn0gZGl2aXNpb25zIE51bWJlciBvZiB0cmlhbmdsZXMgaW4gdGhlIGdyb3VuZCBwbGFuZSAoYXQgbGVhc3QgMykuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YWNrc10gTnVtYmVyIG9mIHJhZGlhbCBkaXZpc2lvbnMgKGRlZmF1bHQ9MSkuXG4gKiBAcGFyYW0ge251bWJlcn0gW2lubmVyUmFkaXVzXSBEZWZhdWx0IDAuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YWNrUG93ZXJdIFBvd2VyIHRvIHJhaXNlIHN0YWNrIHNpemUgdG8gZm9yIGRlY3JlYXNpbmcgd2lkdGguXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgVHlwZWRBcnJheT59IFRoZSBjcmVhdGVkIHZlcnRpY2VzLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRGlzY1ZlcnRpY2VzKFxuICAgIHJhZGl1cyxcbiAgICBkaXZpc2lvbnMsXG4gICAgc3RhY2tzLFxuICAgIGlubmVyUmFkaXVzLFxuICAgIHN0YWNrUG93ZXIpIHtcbiAgaWYgKGRpdmlzaW9ucyA8IDMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2RpdmlzaW9ucyBtdXN0IGJlIGF0IGxlYXN0IDMnKTtcbiAgfVxuXG4gIHN0YWNrcyA9IHN0YWNrcyA/IHN0YWNrcyA6IDE7XG4gIHN0YWNrUG93ZXIgPSBzdGFja1Bvd2VyID8gc3RhY2tQb3dlciA6IDE7XG4gIGlubmVyUmFkaXVzID0gaW5uZXJSYWRpdXMgPyBpbm5lclJhZGl1cyA6IDA7XG5cbiAgLy8gTm90ZTogV2UgZG9uJ3Qgc2hhcmUgdGhlIGNlbnRlciB2ZXJ0ZXggYmVjYXVzZSB0aGF0IHdvdWxkXG4gIC8vIG1lc3MgdXAgdGV4dHVyZSBjb29yZGluYXRlcy5cbiAgY29uc3QgbnVtVmVydGljZXMgPSAoZGl2aXNpb25zICsgMSkgKiAoc3RhY2tzICsgMSk7XG5cbiAgY29uc3QgcG9zaXRpb25zID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCBudW1WZXJ0aWNlcyk7XG4gIGNvbnN0IG5vcm1hbHMgICA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgbnVtVmVydGljZXMpO1xuICBjb25zdCB0ZXhjb29yZHMgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDIsIG51bVZlcnRpY2VzKTtcbiAgY29uc3QgaW5kaWNlcyAgID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCBzdGFja3MgKiBkaXZpc2lvbnMgKiAyLCBVaW50MTZBcnJheSk7XG5cbiAgbGV0IGZpcnN0SW5kZXggPSAwO1xuICBjb25zdCByYWRpdXNTcGFuID0gcmFkaXVzIC0gaW5uZXJSYWRpdXM7XG4gIGNvbnN0IHBvaW50c1BlclN0YWNrID0gZGl2aXNpb25zICsgMTtcblxuICAvLyBCdWlsZCB0aGUgZGlzayBvbmUgc3RhY2sgYXQgYSB0aW1lLlxuICBmb3IgKGxldCBzdGFjayA9IDA7IHN0YWNrIDw9IHN0YWNrczsgKytzdGFjaykge1xuICAgIGNvbnN0IHN0YWNrUmFkaXVzID0gaW5uZXJSYWRpdXMgKyByYWRpdXNTcGFuICogTWF0aC5wb3coc3RhY2sgLyBzdGFja3MsIHN0YWNrUG93ZXIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gZGl2aXNpb25zOyArK2kpIHtcbiAgICAgIGNvbnN0IHRoZXRhID0gMi4wICogTWF0aC5QSSAqIGkgLyBkaXZpc2lvbnM7XG4gICAgICBjb25zdCB4ID0gc3RhY2tSYWRpdXMgKiBNYXRoLmNvcyh0aGV0YSk7XG4gICAgICBjb25zdCB6ID0gc3RhY2tSYWRpdXMgKiBNYXRoLnNpbih0aGV0YSk7XG5cbiAgICAgIHBvc2l0aW9ucy5wdXNoKHgsIDAsIHopO1xuICAgICAgbm9ybWFscy5wdXNoKDAsIDEsIDApO1xuICAgICAgdGV4Y29vcmRzLnB1c2goMSAtIChpIC8gZGl2aXNpb25zKSwgc3RhY2sgLyBzdGFja3MpO1xuICAgICAgaWYgKHN0YWNrID4gMCAmJiBpICE9PSBkaXZpc2lvbnMpIHtcbiAgICAgICAgLy8gYSwgYiwgYyBhbmQgZCBhcmUgdGhlIGluZGljZXMgb2YgdGhlIHZlcnRpY2VzIG9mIGEgcXVhZC4gIHVubGVzc1xuICAgICAgICAvLyB0aGUgY3VycmVudCBzdGFjayBpcyB0aGUgb25lIGNsb3Nlc3QgdG8gdGhlIGNlbnRlciwgaW4gd2hpY2ggY2FzZVxuICAgICAgICAvLyB0aGUgdmVydGljZXMgYSBhbmQgYiBjb25uZWN0IHRvIHRoZSBjZW50ZXIgdmVydGV4LlxuICAgICAgICBjb25zdCBhID0gZmlyc3RJbmRleCArIChpICsgMSk7XG4gICAgICAgIGNvbnN0IGIgPSBmaXJzdEluZGV4ICsgaTtcbiAgICAgICAgY29uc3QgYyA9IGZpcnN0SW5kZXggKyBpIC0gcG9pbnRzUGVyU3RhY2s7XG4gICAgICAgIGNvbnN0IGQgPSBmaXJzdEluZGV4ICsgKGkgKyAxKSAtIHBvaW50c1BlclN0YWNrO1xuXG4gICAgICAgIC8vIE1ha2UgYSBxdWFkIG9mIHRoZSB2ZXJ0aWNlcyBhLCBiLCBjLCBkLlxuICAgICAgICBpbmRpY2VzLnB1c2goYSwgYiwgYyk7XG4gICAgICAgIGluZGljZXMucHVzaChhLCBjLCBkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmaXJzdEluZGV4ICs9IGRpdmlzaW9ucyArIDE7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBvc2l0aW9uOiBwb3NpdGlvbnMsXG4gICAgbm9ybWFsOiBub3JtYWxzLFxuICAgIHRleGNvb3JkOiB0ZXhjb29yZHMsXG4gICAgaW5kaWNlczogaW5kaWNlcyxcbiAgfTtcbn1cblxuLyoqXG4gKiBjcmVhdGVzIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiAwIGFuZCByYW5nZSAtIDEgaW5jbHVzaXZlLlxuICogQHBhcmFtIHtudW1iZXJ9IHJhbmdlXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHJhbmRvbSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIHJhbmdlIC0gMSBpbmNsdXNpdmUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByYW5kSW50KHJhbmdlKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpICogcmFuZ2UgfCAwO1xufVxuXG4vKipcbiAqIFVzZWQgdG8gc3VwcGx5IHJhbmRvbSBjb2xvcnNcbiAqIEBjYWxsYmFjayBSYW5kb21Db2xvckZ1bmNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuZHggaW5kZXggb2YgdHJpYW5nbGUvcXVhZCBpZiB1bmluZGV4ZWQgb3IgaW5kZXggb2YgdmVydGV4IGlmIGluZGV4ZWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBjaGFubmVsIDAgPSByZWQsIDEgPSBncmVlbiwgMiA9IGJsdWUsIDMgPSBhbHBoYVxuICogQHJldHVybiB7bnVtYmVyfSBhIG51bWJlciBmcm9tIDAgdG8gMjU1XG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gUmFuZG9tVmVydGljZXNPcHRpb25zXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3ZlcnRzUGVyQ29sb3JdIERlZmF1bHRzIHRvIDMgZm9yIG5vbi1pbmRleGVkIHZlcnRpY2VzXG4gKiBAcHJvcGVydHkge21vZHVsZTp0d2dsL3ByaW1pdGl2ZXMuUmFuZG9tQ29sb3JGdW5jfSBbcmFuZF0gQSBmdW5jdGlvbiB0byBnZW5lcmF0ZSByYW5kb20gbnVtYmVyc1xuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXVnbWVudGVkVHlwZWRBcnJheSBvZiByYW5kb20gdmVydGV4IGNvbG9ycy5cbiAqIElmIHRoZSB2ZXJ0aWNlcyBhcmUgaW5kZXhlZCAoaGF2ZSBhbiBpbmRpY2VzIGFycmF5KSB0aGVuIHdpbGxcbiAqIGp1c3QgbWFrZSByYW5kb20gY29sb3JzLiBPdGhlcndpc2UgYXNzdW1lcyB0aGV5IGFyZSB0cmlhbmdsZXNcbiAqIGFuZCBtYWtlcyBvbmUgcmFuZG9tIGNvbG9yIGZvciBldmVyeSAzIHZlcnRpY2VzLlxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgQXVnbWVudGVkVHlwZWRBcnJheT59IHZlcnRpY2VzIFZlcnRpY2VzIGFzIHJldHVybmVkIGZyb20gb25lIG9mIHRoZSBjcmVhdGVYWFhWZXJ0aWNlcyBmdW5jdGlvbnMuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3ByaW1pdGl2ZXMuUmFuZG9tVmVydGljZXNPcHRpb25zfSBbb3B0aW9uc10gb3B0aW9ucy5cbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBBdWdtZW50ZWRUeXBlZEFycmF5Pn0gc2FtZSB2ZXJ0aWNlcyBhcyBwYXNzZWQgaW4gd2l0aCBgY29sb3JgIGFkZGVkLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqL1xuZnVuY3Rpb24gbWFrZVJhbmRvbVZlcnRleENvbG9ycyh2ZXJ0aWNlcywgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3QgbnVtRWxlbWVudHMgPSB2ZXJ0aWNlcy5wb3NpdGlvbi5udW1FbGVtZW50cztcbiAgY29uc3QgdkNvbG9ycyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoNCwgbnVtRWxlbWVudHMsIFVpbnQ4QXJyYXkpO1xuICBjb25zdCByYW5kID0gb3B0aW9ucy5yYW5kIHx8IGZ1bmN0aW9uKG5keCwgY2hhbm5lbCkge1xuICAgIHJldHVybiBjaGFubmVsIDwgMyA/IHJhbmRJbnQoMjU2KSA6IDI1NTtcbiAgfTtcbiAgdmVydGljZXMuY29sb3IgPSB2Q29sb3JzO1xuICBpZiAodmVydGljZXMuaW5kaWNlcykge1xuICAgIC8vIGp1c3QgbWFrZSByYW5kb20gY29sb3JzIGlmIGluZGV4XG4gICAgZm9yIChsZXQgaWkgPSAwOyBpaSA8IG51bUVsZW1lbnRzOyArK2lpKSB7XG4gICAgICB2Q29sb3JzLnB1c2gocmFuZChpaSwgMCksIHJhbmQoaWksIDEpLCByYW5kKGlpLCAyKSwgcmFuZChpaSwgMykpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBtYWtlIHJhbmRvbSBjb2xvcnMgcGVyIHRyaWFuZ2xlXG4gICAgY29uc3QgbnVtVmVydHNQZXJDb2xvciA9IG9wdGlvbnMudmVydHNQZXJDb2xvciB8fCAzO1xuICAgIGNvbnN0IG51bVNldHMgPSBudW1FbGVtZW50cyAvIG51bVZlcnRzUGVyQ29sb3I7XG4gICAgZm9yIChsZXQgaWkgPSAwOyBpaSA8IG51bVNldHM7ICsraWkpIHsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgIGNvbnN0IGNvbG9yID0gW3JhbmQoaWksIDApLCByYW5kKGlpLCAxKSwgcmFuZChpaSwgMiksIHJhbmQoaWksIDMpXTtcbiAgICAgIGZvciAobGV0IGpqID0gMDsgamogPCBudW1WZXJ0c1BlckNvbG9yOyArK2pqKSB7XG4gICAgICAgIHZDb2xvcnMucHVzaChjb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB2ZXJ0aWNlcztcbn1cblxuLyoqXG4gKiBjcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBjYWxscyBmbiB0byBjcmVhdGUgdmVydGljZXMgYW5kIHRoZW5cbiAqIGNyZWF0ZXMgYSBidWZmZXJzIGZvciB0aGVtXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXJGdW5jKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbihnbCkge1xuICAgIGNvbnN0IGFycmF5cyA9IGZuLmFwcGx5KHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIHJldHVybiBjcmVhdGVCdWZmZXJzRnJvbUFycmF5cyhnbCwgYXJyYXlzKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBjcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBjYWxscyBmbiB0byBjcmVhdGUgdmVydGljZXMgYW5kIHRoZW5cbiAqIGNyZWF0ZXMgYSBidWZmZXJJbmZvIG9iamVjdCBmb3IgdGhlbVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQnVmZmVySW5mb0Z1bmMoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGdsKSB7XG4gICAgY29uc3QgYXJyYXlzID0gZm4uYXBwbHkobnVsbCwgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIHJldHVybiBjcmVhdGVCdWZmZXJJbmZvRnJvbUFycmF5cyhnbCwgYXJyYXlzKTtcbiAgfTtcbn1cblxuY29uc3QgYXJyYXlTcGVjUHJvcGVydHlOYW1lcyA9IFtcbiAgXCJudW1Db21wb25lbnRzXCIsXG4gIFwic2l6ZVwiLFxuICBcInR5cGVcIixcbiAgXCJub3JtYWxpemVcIixcbiAgXCJzdHJpZGVcIixcbiAgXCJvZmZzZXRcIixcbiAgXCJhdHRyaWJcIixcbiAgXCJuYW1lXCIsXG4gIFwiYXR0cmliTmFtZVwiLFxuXTtcblxuLyoqXG4gKiBDb3B5IGVsZW1lbnRzIGZyb20gb25lIGFycmF5IHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge0FycmF5fFR5cGVkQXJyYXl9IHNyYyBzb3VyY2UgYXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl8VHlwZWRBcnJheX0gZHN0IGRlc3QgYXJyYXlcbiAqIEBwYXJhbSB7bnVtYmVyfSBkc3ROZHggaW5kZXggaW4gZGVzdCB0byBjb3B5IHNyY1xuICogQHBhcmFtIHtudW1iZXJ9IFtvZmZzZXRdIG9mZnNldCB0byBhZGQgdG8gY29waWVkIHZhbHVlc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY29weUVsZW1lbnRzKHNyYywgZHN0LCBkc3ROZHgsIG9mZnNldCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcbiAgY29uc3QgbGVuZ3RoID0gc3JjLmxlbmd0aDtcbiAgZm9yIChsZXQgaWkgPSAwOyBpaSA8IGxlbmd0aDsgKytpaSkge1xuICAgIGRzdFtkc3ROZHggKyBpaV0gPSBzcmNbaWldICsgb2Zmc2V0O1xuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgc2FtZSB0aW1lXG4gKlxuICogQHBhcmFtIHsobnVtYmVyW118QXJyYXlCdWZmZXJWaWV3fG1vZHVsZTp0d2dsLkZ1bGxBcnJheVNwZWMpfSBzcmNBcnJheSBhcnJheSB3aG8ncyB0eXBlIHRvIGNvcHlcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggc2l6ZSBvZiBuZXcgYXJyYXlcbiAqIEByZXR1cm4geyhudW1iZXJbXXxBcnJheUJ1ZmZlclZpZXd8bW9kdWxlOnR3Z2wuRnVsbEFycmF5U3BlYyl9IGFycmF5IHdpdGggc2FtZSB0eXBlIGFzIHNyY0FycmF5XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVBcnJheU9mU2FtZVR5cGUoc3JjQXJyYXksIGxlbmd0aCkge1xuICBjb25zdCBhcnJheVNyYyA9IGdldEFycmF5KHNyY0FycmF5KTtcbiAgY29uc3QgbmV3QXJyYXkgPSBuZXcgYXJyYXlTcmMuY29uc3RydWN0b3IobGVuZ3RoKTtcbiAgbGV0IG5ld0FycmF5U3BlYyA9IG5ld0FycmF5O1xuICAvLyBJZiBpdCBhcHBlYXJzIHRvIGhhdmUgYmVlbiBhdWdtZW50ZWQgbWFrZSBuZXcgb25lIGF1Z21lbnRlZFxuICBpZiAoYXJyYXlTcmMubnVtQ29tcG9uZW50cyAmJiBhcnJheVNyYy5udW1FbGVtZW50cykge1xuICAgIGF1Z21lbnRUeXBlZEFycmF5KG5ld0FycmF5LCBhcnJheVNyYy5udW1Db21wb25lbnRzKTtcbiAgfVxuICAvLyBJZiBpdCB3YXMgYSBmdWxsIHNwZWMgbWFrZSBuZXcgb25lIGEgZnVsbCBzcGVjXG4gIGlmIChzcmNBcnJheS5kYXRhKSB7XG4gICAgbmV3QXJyYXlTcGVjID0ge1xuICAgICAgZGF0YTogbmV3QXJyYXksXG4gICAgfTtcbiAgICBjb3B5TmFtZWRQcm9wZXJ0aWVzKGFycmF5U3BlY1Byb3BlcnR5TmFtZXMsIHNyY0FycmF5LCBuZXdBcnJheVNwZWMpO1xuICB9XG4gIHJldHVybiBuZXdBcnJheVNwZWM7XG59XG5cbi8qKlxuICogQ29uY2F0ZW5hdGVzIHNldHMgb2YgdmVydGljZXNcbiAqXG4gKiBBc3N1bWVzIHRoZSB2ZXJ0aWNlcyBtYXRjaCBpbiBjb21wb3NpdGlvbi4gRm9yIGV4YW1wbGVcbiAqIGlmIG9uZSBzZXQgb2YgdmVydGljZXMgaGFzIHBvc2l0aW9ucywgbm9ybWFscywgYW5kIGluZGljZXNcbiAqIGFsbCBzZXRzIG9mIHZlcnRpY2VzIG11c3QgaGF2ZSBwb3NpdGlvbnMsIG5vcm1hbHMsIGFuZCBpbmRpY2VzXG4gKiBhbmQgb2YgdGhlIHNhbWUgdHlwZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICAgY29uc3QgY3ViZVZlcnRpY2VzID0gdHdnbC5wcmltaXRpdmVzLmNyZWF0ZUN1YmVWZXJ0aWNlcygyKTtcbiAqICAgICAgY29uc3Qgc3BoZXJlVmVydGljZXMgPSB0d2dsLnByaW1pdGl2ZXMuY3JlYXRlU3BoZXJlVmVydGljZXMoMSwgMTAsIDEwKTtcbiAqICAgICAgLy8gbW92ZSB0aGUgc3BoZXJlIDIgdW5pdHMgdXBcbiAqICAgICAgdHdnbC5wcmltaXRpdmVzLnJlb3JpZW50VmVydGljZXMoXG4gKiAgICAgICAgICBzcGhlcmVWZXJ0aWNlcywgdHdnbC5tNC50cmFuc2xhdGlvbihbMCwgMiwgMF0pKTtcbiAqICAgICAgLy8gbWVyZ2UgdGhlIHNwaGVyZSB3aXRoIHRoZSBjdWJlXG4gKiAgICAgIGNvbnN0IGN1YmVTcGhlcmVWZXJ0aWNlcyA9IHR3Z2wucHJpbWl0aXZlcy5jb25jYXRWZXJ0aWNlcyhcbiAqICAgICAgICAgIFtjdWJlVmVydGljZXMsIHNwaGVyZVZlcnRpY2VzXSk7XG4gKiAgICAgIC8vIHR1cm4gdGhlbSBpbnRvIFdlYkdMIGJ1ZmZlcnMgYW5kIGF0dHJpYiBkYXRhXG4gKiAgICAgIGNvbnN0IGJ1ZmZlckluZm8gPSB0d2dsLmNyZWF0ZUJ1ZmZlckluZm9Gcm9tQXJyYXlzKGdsLCBjdWJlU3BoZXJlVmVydGljZXMpO1xuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuQXJyYXlzW119IGFycmF5cyBBcnJheSBvZiBhcnJheXMgb2YgdmVydGljZXNcbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsLkFycmF5c30gVGhlIGNvbmNhdGVuYXRlZCB2ZXJ0aWNlcy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKi9cbmZ1bmN0aW9uIGNvbmNhdFZlcnRpY2VzKGFycmF5T2ZBcnJheXMpIHtcbiAgY29uc3QgbmFtZXMgPSB7fTtcbiAgbGV0IGJhc2VOYW1lO1xuICAvLyBnZXQgbmFtZXMgb2YgYWxsIGFycmF5cy5cbiAgLy8gYW5kIG51bUVsZW1lbnRzIGZvciBlYWNoIHNldCBvZiB2ZXJ0aWNlc1xuICBmb3IgKGxldCBpaSA9IDA7IGlpIDwgYXJyYXlPZkFycmF5cy5sZW5ndGg7ICsraWkpIHtcbiAgICBjb25zdCBhcnJheXMgPSBhcnJheU9mQXJyYXlzW2lpXTtcbiAgICBPYmplY3Qua2V5cyhhcnJheXMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkgeyAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgaWYgKCFuYW1lc1tuYW1lXSkge1xuICAgICAgICBuYW1lc1tuYW1lXSA9IFtdO1xuICAgICAgfVxuICAgICAgaWYgKCFiYXNlTmFtZSAmJiBuYW1lICE9PSAnaW5kaWNlcycpIHtcbiAgICAgICAgYmFzZU5hbWUgPSBuYW1lO1xuICAgICAgfVxuICAgICAgY29uc3QgYXJyYXlJbmZvID0gYXJyYXlzW25hbWVdO1xuICAgICAgY29uc3QgbnVtQ29tcG9uZW50cyA9IGdldE51bUNvbXBvbmVudHMoYXJyYXlJbmZvLCBuYW1lKTtcbiAgICAgIGNvbnN0IGFycmF5ID0gZ2V0QXJyYXkoYXJyYXlJbmZvKTtcbiAgICAgIGNvbnN0IG51bUVsZW1lbnRzID0gYXJyYXkubGVuZ3RoIC8gbnVtQ29tcG9uZW50cztcbiAgICAgIG5hbWVzW25hbWVdLnB1c2gobnVtRWxlbWVudHMpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gY29tcHV0ZSBsZW5ndGggb2YgY29tYmluZWQgYXJyYXlcbiAgLy8gYW5kIHJldHVybiBvbmUgZm9yIHJlZmVyZW5jZVxuICBmdW5jdGlvbiBnZXRMZW5ndGhPZkNvbWJpbmVkQXJyYXlzKG5hbWUpIHtcbiAgICBsZXQgbGVuZ3RoID0gMDtcbiAgICBsZXQgYXJyYXlTcGVjO1xuICAgIGZvciAobGV0IGlpID0gMDsgaWkgPCBhcnJheU9mQXJyYXlzLmxlbmd0aDsgKytpaSkge1xuICAgICAgY29uc3QgYXJyYXlzID0gYXJyYXlPZkFycmF5c1tpaV07XG4gICAgICBjb25zdCBhcnJheUluZm8gPSBhcnJheXNbbmFtZV07XG4gICAgICBjb25zdCBhcnJheSA9IGdldEFycmF5KGFycmF5SW5mbyk7XG4gICAgICBsZW5ndGggKz0gYXJyYXkubGVuZ3RoO1xuICAgICAgaWYgKCFhcnJheVNwZWMgfHwgYXJyYXlJbmZvLmRhdGEpIHtcbiAgICAgICAgYXJyYXlTcGVjID0gYXJyYXlJbmZvO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgbGVuZ3RoOiBsZW5ndGgsXG4gICAgICBzcGVjOiBhcnJheVNwZWMsXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvcHlBcnJheXNUb05ld0FycmF5KG5hbWUsIGJhc2UsIG5ld0FycmF5KSB7XG4gICAgbGV0IGJhc2VJbmRleCA9IDA7XG4gICAgbGV0IG9mZnNldCA9IDA7XG4gICAgZm9yIChsZXQgaWkgPSAwOyBpaSA8IGFycmF5T2ZBcnJheXMubGVuZ3RoOyArK2lpKSB7XG4gICAgICBjb25zdCBhcnJheXMgPSBhcnJheU9mQXJyYXlzW2lpXTtcbiAgICAgIGNvbnN0IGFycmF5SW5mbyA9IGFycmF5c1tuYW1lXTtcbiAgICAgIGNvbnN0IGFycmF5ID0gZ2V0QXJyYXkoYXJyYXlJbmZvKTtcbiAgICAgIGlmIChuYW1lID09PSAnaW5kaWNlcycpIHtcbiAgICAgICAgY29weUVsZW1lbnRzKGFycmF5LCBuZXdBcnJheSwgb2Zmc2V0LCBiYXNlSW5kZXgpO1xuICAgICAgICBiYXNlSW5kZXggKz0gYmFzZVtpaV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb3B5RWxlbWVudHMoYXJyYXksIG5ld0FycmF5LCBvZmZzZXQpO1xuICAgICAgfVxuICAgICAgb2Zmc2V0ICs9IGFycmF5Lmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICBjb25zdCBiYXNlID0gbmFtZXNbYmFzZU5hbWVdO1xuXG4gIGNvbnN0IG5ld0FycmF5cyA9IHt9O1xuICBPYmplY3Qua2V5cyhuYW1lcykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgY29uc3QgaW5mbyA9IGdldExlbmd0aE9mQ29tYmluZWRBcnJheXMobmFtZSk7XG4gICAgY29uc3QgbmV3QXJyYXlTcGVjID0gY3JlYXRlQXJyYXlPZlNhbWVUeXBlKGluZm8uc3BlYywgaW5mby5sZW5ndGgpO1xuICAgIGNvcHlBcnJheXNUb05ld0FycmF5KG5hbWUsIGJhc2UsIGdldEFycmF5KG5ld0FycmF5U3BlYykpO1xuICAgIG5ld0FycmF5c1tuYW1lXSA9IG5ld0FycmF5U3BlYztcbiAgfSk7XG4gIHJldHVybiBuZXdBcnJheXM7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGR1cGxpY2F0ZSBzZXQgb2YgdmVydGljZXNcbiAqXG4gKiBUaGlzIGlzIHVzZWZ1bCBmb3IgY2FsbGluZyByZW9yaWVudFZlcnRpY2VzIHdoZW4geW91XG4gKiBhbHNvIHdhbnQgdG8ga2VlcCB0aGUgb3JpZ2luYWwgYXZhaWxhYmxlXG4gKlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5BcnJheXN9IGFycmF5cyBvZiB2ZXJ0aWNlc1xuICogQHJldHVybiB7bW9kdWxlOnR3Z2wuQXJyYXlzfSBUaGUgZHVwbGljYXRlZCB2ZXJ0aWNlcy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKi9cbmZ1bmN0aW9uIGR1cGxpY2F0ZVZlcnRpY2VzKGFycmF5cykge1xuICBjb25zdCBuZXdBcnJheXMgPSB7fTtcbiAgT2JqZWN0LmtleXMoYXJyYXlzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBjb25zdCBhcnJheVNwZWMgPSBhcnJheXNbbmFtZV07XG4gICAgY29uc3Qgc3JjQXJyYXkgPSBnZXRBcnJheShhcnJheVNwZWMpO1xuICAgIGNvbnN0IG5ld0FycmF5U3BlYyA9IGNyZWF0ZUFycmF5T2ZTYW1lVHlwZShhcnJheVNwZWMsIHNyY0FycmF5Lmxlbmd0aCk7XG4gICAgY29weUVsZW1lbnRzKHNyY0FycmF5LCBnZXRBcnJheShuZXdBcnJheVNwZWMpLCAwKTtcbiAgICBuZXdBcnJheXNbbmFtZV0gPSBuZXdBcnJheVNwZWM7XG4gIH0pO1xuICByZXR1cm4gbmV3QXJyYXlzO1xufVxuXG5jb25zdCBjcmVhdGUzREZCdWZmZXJJbmZvID0gY3JlYXRlQnVmZmVySW5mb0Z1bmMoY3JlYXRlM0RGVmVydGljZXMpO1xuY29uc3QgY3JlYXRlM0RGQnVmZmVycyA9IGNyZWF0ZUJ1ZmZlckZ1bmMoY3JlYXRlM0RGVmVydGljZXMpO1xuY29uc3QgY3JlYXRlQ3ViZUJ1ZmZlckluZm8gPSBjcmVhdGVCdWZmZXJJbmZvRnVuYyhjcmVhdGVDdWJlVmVydGljZXMpO1xuY29uc3QgY3JlYXRlQ3ViZUJ1ZmZlcnMgPSBjcmVhdGVCdWZmZXJGdW5jKGNyZWF0ZUN1YmVWZXJ0aWNlcyk7XG5jb25zdCBjcmVhdGVQbGFuZUJ1ZmZlckluZm8gPSBjcmVhdGVCdWZmZXJJbmZvRnVuYyhjcmVhdGVQbGFuZVZlcnRpY2VzKTtcbmNvbnN0IGNyZWF0ZVBsYW5lQnVmZmVycyA9IGNyZWF0ZUJ1ZmZlckZ1bmMoY3JlYXRlUGxhbmVWZXJ0aWNlcyk7XG5jb25zdCBjcmVhdGVTcGhlcmVCdWZmZXJJbmZvID0gY3JlYXRlQnVmZmVySW5mb0Z1bmMoY3JlYXRlU3BoZXJlVmVydGljZXMpO1xuY29uc3QgY3JlYXRlU3BoZXJlQnVmZmVycyA9IGNyZWF0ZUJ1ZmZlckZ1bmMoY3JlYXRlU3BoZXJlVmVydGljZXMpO1xuY29uc3QgY3JlYXRlVHJ1bmNhdGVkQ29uZUJ1ZmZlckluZm8gPSBjcmVhdGVCdWZmZXJJbmZvRnVuYyhjcmVhdGVUcnVuY2F0ZWRDb25lVmVydGljZXMpO1xuY29uc3QgY3JlYXRlVHJ1bmNhdGVkQ29uZUJ1ZmZlcnMgPSBjcmVhdGVCdWZmZXJGdW5jKGNyZWF0ZVRydW5jYXRlZENvbmVWZXJ0aWNlcyk7XG5jb25zdCBjcmVhdGVYWVF1YWRCdWZmZXJJbmZvID0gY3JlYXRlQnVmZmVySW5mb0Z1bmMoY3JlYXRlWFlRdWFkVmVydGljZXMpO1xuY29uc3QgY3JlYXRlWFlRdWFkQnVmZmVycyA9IGNyZWF0ZUJ1ZmZlckZ1bmMoY3JlYXRlWFlRdWFkVmVydGljZXMpO1xuY29uc3QgY3JlYXRlQ3Jlc2NlbnRCdWZmZXJJbmZvID0gY3JlYXRlQnVmZmVySW5mb0Z1bmMoY3JlYXRlQ3Jlc2NlbnRWZXJ0aWNlcyk7XG5jb25zdCBjcmVhdGVDcmVzY2VudEJ1ZmZlcnMgPSBjcmVhdGVCdWZmZXJGdW5jKGNyZWF0ZUNyZXNjZW50VmVydGljZXMpO1xuY29uc3QgY3JlYXRlQ3lsaW5kZXJCdWZmZXJJbmZvID0gY3JlYXRlQnVmZmVySW5mb0Z1bmMoY3JlYXRlQ3lsaW5kZXJWZXJ0aWNlcyk7XG5jb25zdCBjcmVhdGVDeWxpbmRlckJ1ZmZlcnMgPSBjcmVhdGVCdWZmZXJGdW5jKGNyZWF0ZUN5bGluZGVyVmVydGljZXMpO1xuY29uc3QgY3JlYXRlVG9ydXNCdWZmZXJJbmZvID0gY3JlYXRlQnVmZmVySW5mb0Z1bmMoY3JlYXRlVG9ydXNWZXJ0aWNlcyk7XG5jb25zdCBjcmVhdGVUb3J1c0J1ZmZlcnMgPSBjcmVhdGVCdWZmZXJGdW5jKGNyZWF0ZVRvcnVzVmVydGljZXMpO1xuY29uc3QgY3JlYXRlRGlzY0J1ZmZlckluZm8gPSBjcmVhdGVCdWZmZXJJbmZvRnVuYyhjcmVhdGVEaXNjVmVydGljZXMpO1xuY29uc3QgY3JlYXRlRGlzY0J1ZmZlcnMgPSBjcmVhdGVCdWZmZXJGdW5jKGNyZWF0ZURpc2NWZXJ0aWNlcyk7XG5cbi8vIHRoZXNlIHdlcmUgbWlzLXNwZWxsZWQgdW50aWwgNC4xMlxuY29uc3QgY3JlYXRlQ3Jlc2VudEJ1ZmZlckluZm8gPSBjcmVhdGVDcmVzY2VudEJ1ZmZlckluZm87XG5jb25zdCBjcmVhdGVDcmVzZW50QnVmZmVycyA9IGNyZWF0ZUNyZXNjZW50QnVmZmVycztcbmNvbnN0IGNyZWF0ZUNyZXNlbnRWZXJ0aWNlcyA9IGNyZWF0ZUNyZXNjZW50VmVydGljZXM7XG5cbnZhciBwcmltaXRpdmVzID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGNyZWF0ZTNERkJ1ZmZlckluZm86IGNyZWF0ZTNERkJ1ZmZlckluZm8sXG4gIGNyZWF0ZTNERkJ1ZmZlcnM6IGNyZWF0ZTNERkJ1ZmZlcnMsXG4gIGNyZWF0ZTNERlZlcnRpY2VzOiBjcmVhdGUzREZWZXJ0aWNlcyxcbiAgY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheTogY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSxcbiAgY3JlYXRlQ3ViZUJ1ZmZlckluZm86IGNyZWF0ZUN1YmVCdWZmZXJJbmZvLFxuICBjcmVhdGVDdWJlQnVmZmVyczogY3JlYXRlQ3ViZUJ1ZmZlcnMsXG4gIGNyZWF0ZUN1YmVWZXJ0aWNlczogY3JlYXRlQ3ViZVZlcnRpY2VzLFxuICBjcmVhdGVQbGFuZUJ1ZmZlckluZm86IGNyZWF0ZVBsYW5lQnVmZmVySW5mbyxcbiAgY3JlYXRlUGxhbmVCdWZmZXJzOiBjcmVhdGVQbGFuZUJ1ZmZlcnMsXG4gIGNyZWF0ZVBsYW5lVmVydGljZXM6IGNyZWF0ZVBsYW5lVmVydGljZXMsXG4gIGNyZWF0ZVNwaGVyZUJ1ZmZlckluZm86IGNyZWF0ZVNwaGVyZUJ1ZmZlckluZm8sXG4gIGNyZWF0ZVNwaGVyZUJ1ZmZlcnM6IGNyZWF0ZVNwaGVyZUJ1ZmZlcnMsXG4gIGNyZWF0ZVNwaGVyZVZlcnRpY2VzOiBjcmVhdGVTcGhlcmVWZXJ0aWNlcyxcbiAgY3JlYXRlVHJ1bmNhdGVkQ29uZUJ1ZmZlckluZm86IGNyZWF0ZVRydW5jYXRlZENvbmVCdWZmZXJJbmZvLFxuICBjcmVhdGVUcnVuY2F0ZWRDb25lQnVmZmVyczogY3JlYXRlVHJ1bmNhdGVkQ29uZUJ1ZmZlcnMsXG4gIGNyZWF0ZVRydW5jYXRlZENvbmVWZXJ0aWNlczogY3JlYXRlVHJ1bmNhdGVkQ29uZVZlcnRpY2VzLFxuICBjcmVhdGVYWVF1YWRCdWZmZXJJbmZvOiBjcmVhdGVYWVF1YWRCdWZmZXJJbmZvLFxuICBjcmVhdGVYWVF1YWRCdWZmZXJzOiBjcmVhdGVYWVF1YWRCdWZmZXJzLFxuICBjcmVhdGVYWVF1YWRWZXJ0aWNlczogY3JlYXRlWFlRdWFkVmVydGljZXMsXG4gIGNyZWF0ZUNyZXNlbnRCdWZmZXJJbmZvOiBjcmVhdGVDcmVzZW50QnVmZmVySW5mbyxcbiAgY3JlYXRlQ3Jlc2VudEJ1ZmZlcnM6IGNyZWF0ZUNyZXNlbnRCdWZmZXJzLFxuICBjcmVhdGVDcmVzZW50VmVydGljZXM6IGNyZWF0ZUNyZXNlbnRWZXJ0aWNlcyxcbiAgY3JlYXRlQ3Jlc2NlbnRCdWZmZXJJbmZvOiBjcmVhdGVDcmVzY2VudEJ1ZmZlckluZm8sXG4gIGNyZWF0ZUNyZXNjZW50QnVmZmVyczogY3JlYXRlQ3Jlc2NlbnRCdWZmZXJzLFxuICBjcmVhdGVDcmVzY2VudFZlcnRpY2VzOiBjcmVhdGVDcmVzY2VudFZlcnRpY2VzLFxuICBjcmVhdGVDeWxpbmRlckJ1ZmZlckluZm86IGNyZWF0ZUN5bGluZGVyQnVmZmVySW5mbyxcbiAgY3JlYXRlQ3lsaW5kZXJCdWZmZXJzOiBjcmVhdGVDeWxpbmRlckJ1ZmZlcnMsXG4gIGNyZWF0ZUN5bGluZGVyVmVydGljZXM6IGNyZWF0ZUN5bGluZGVyVmVydGljZXMsXG4gIGNyZWF0ZVRvcnVzQnVmZmVySW5mbzogY3JlYXRlVG9ydXNCdWZmZXJJbmZvLFxuICBjcmVhdGVUb3J1c0J1ZmZlcnM6IGNyZWF0ZVRvcnVzQnVmZmVycyxcbiAgY3JlYXRlVG9ydXNWZXJ0aWNlczogY3JlYXRlVG9ydXNWZXJ0aWNlcyxcbiAgY3JlYXRlRGlzY0J1ZmZlckluZm86IGNyZWF0ZURpc2NCdWZmZXJJbmZvLFxuICBjcmVhdGVEaXNjQnVmZmVyczogY3JlYXRlRGlzY0J1ZmZlcnMsXG4gIGNyZWF0ZURpc2NWZXJ0aWNlczogY3JlYXRlRGlzY1ZlcnRpY2VzLFxuICBkZWluZGV4VmVydGljZXM6IGRlaW5kZXhWZXJ0aWNlcyxcbiAgZmxhdHRlbk5vcm1hbHM6IGZsYXR0ZW5Ob3JtYWxzLFxuICBtYWtlUmFuZG9tVmVydGV4Q29sb3JzOiBtYWtlUmFuZG9tVmVydGV4Q29sb3JzLFxuICByZW9yaWVudERpcmVjdGlvbnM6IHJlb3JpZW50RGlyZWN0aW9ucyxcbiAgcmVvcmllbnROb3JtYWxzOiByZW9yaWVudE5vcm1hbHMsXG4gIHJlb3JpZW50UG9zaXRpb25zOiByZW9yaWVudFBvc2l0aW9ucyxcbiAgcmVvcmllbnRWZXJ0aWNlczogcmVvcmllbnRWZXJ0aWNlcyxcbiAgY29uY2F0VmVydGljZXM6IGNvbmNhdFZlcnRpY2VzLFxuICBkdXBsaWNhdGVWZXJ0aWNlczogZHVwbGljYXRlVmVydGljZXNcbn0pO1xuXG4vKlxuICogQ29weXJpZ2h0IDIwMTkgR3JlZ2cgVGF2YXJlc1xuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4gKiBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksXG4gKiB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uXG4gKiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSxcbiAqIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuICogU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTExcbiAqIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUlxuICogREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKlxuICogR2V0cyB0aGUgZ2wgdmVyc2lvbiBhcyBhIG51bWJlclxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIEEgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcmV0dXJuIHtudW1iZXJ9IHZlcnNpb24gb2YgZ2xcbiAqIEBwcml2YXRlXG4gKi9cbi8vZnVuY3Rpb24gZ2V0VmVyc2lvbkFzTnVtYmVyKGdsKSB7XG4vLyAgcmV0dXJuIHBhcnNlRmxvYXQoZ2wuZ2V0UGFyYW1ldGVyKGdsLlZFUlNJT04pLnN1YnN0cig2KSk7XG4vL31cblxuLyoqXG4gKiBDaGVjayBpZiBjb250ZXh0IGlzIFdlYkdMIDIuMFxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIEEgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcmV0dXJuIHtib29sfSB0cnVlIGlmIGl0J3MgV2ViR0wgMi4wXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuZnVuY3Rpb24gaXNXZWJHTDIoZ2wpIHtcbiAgLy8gVGhpcyBpcyB0aGUgY29ycmVjdCBjaGVjayBidXQgaXQncyBzbG93XG4gIC8vICByZXR1cm4gZ2wuZ2V0UGFyYW1ldGVyKGdsLlZFUlNJT04pLmluZGV4T2YoXCJXZWJHTCAyLjBcIikgPT09IDA7XG4gIC8vIFRoaXMgbWlnaHQgYWxzbyBiZSB0aGUgY29ycmVjdCBjaGVjayBidXQgSSdtIGFzc3VtaW5nIGl0J3Mgc2xvdy1pc2hcbiAgLy8gcmV0dXJuIGdsIGluc3RhbmNlb2YgV2ViR0wyUmVuZGVyaW5nQ29udGV4dDtcbiAgcmV0dXJuICEhZ2wudGV4U3RvcmFnZTJEO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGNvbnRleHQgaXMgV2ViR0wgMS4wXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgQSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEByZXR1cm4ge2Jvb2x9IHRydWUgaWYgaXQncyBXZWJHTCAxLjBcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5mdW5jdGlvbiBpc1dlYkdMMShnbCkge1xuICAvLyBUaGlzIGlzIHRoZSBjb3JyZWN0IGNoZWNrIGJ1dCBpdCdzIHNsb3dcbiAgLy8gY29uc3QgdmVyc2lvbiA9IGdldFZlcnNpb25Bc051bWJlcihnbCk7XG4gIC8vIHJldHVybiB2ZXJzaW9uIDw9IDEuMCAmJiB2ZXJzaW9uID4gMC4wOyAgLy8gYmVjYXVzZSBhcyBvZiAyMDE2LzUgRWRnZSByZXR1cm5zIDAuOTZcbiAgLy8gVGhpcyBtaWdodCBhbHNvIGJlIHRoZSBjb3JyZWN0IGNoZWNrIGJ1dCBJJ20gYXNzdW1pbmcgaXQncyBzbG93LWlzaFxuICAvLyByZXR1cm4gZ2wgaW5zdGFuY2VvZiBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7XG4gIHJldHVybiAhZ2wudGV4U3RvcmFnZTJEO1xufVxuXG4vKipcbiAqIEdldHMgYSBzdHJpbmcgZm9yIFdlYkdMIGVudW1cbiAqXG4gKiBOb3RlOiBTZXZlcmFsIGVudW1zIGFyZSB0aGUgc2FtZS4gV2l0aG91dCBtb3JlXG4gKiBjb250ZXh0ICh3aGljaCBmdW5jdGlvbikgaXQncyBpbXBvc3NpYmxlIHRvIGFsd2F5c1xuICogZ2l2ZSB0aGUgY29ycmVjdCBlbnVtLiBBcyBpdCBpcywgZm9yIG1hdGNoaW5nIHZhbHVlc1xuICogaXQgZ2l2ZXMgYWxsIGVudW1zLiBDaGVja2luZyB0aGUgV2ViR0wyUmVuZGVyaW5nQ29udGV4dFxuICogdGhhdCBtZWFuc1xuICpcbiAqICAgICAgMCAgICAgPSBaRVJPIHwgUE9JTlQgfCBOT05FIHwgTk9fRVJST1JcbiAqICAgICAgMSAgICAgPSBPTkUgfCBMSU5FUyB8IFNZTkNfRkxVU0hfQ09NTUFORFNfQklUXG4gKiAgICAgIDMyNzc3ID0gQkxFTkRfRVFVQVRJT05fUkdCIHwgQkxFTkRfRVFVQVRJT05fUkdCXG4gKiAgICAgIDM2NjYyID0gQ09QWV9SRUFEX0JVRkZFUiB8IENPUFlfUkVBRF9CVUZGRVJfQklORElOR1xuICogICAgICAzNjY2MyA9IENPUFlfV1JJVEVfQlVGRkVSIHwgQ09QWV9XUklURV9CVUZGRVJfQklORElOR1xuICogICAgICAzNjAwNiA9IEZSQU1FQlVGRkVSX0JJTkRJTkcgfCBEUkFXX0ZSQU1FQlVGRkVSX0JJTkRJTkdcbiAqXG4gKiBJdCdzIGFsc28gbm90IHVzZWZ1bCBmb3IgYml0cyByZWFsbHkgdW5sZXNzIHlvdSBwYXNzIGluIGluZGl2aWR1YWwgYml0cy5cbiAqIEluIG90aGVyIHdvcmRzXG4gKlxuICogICAgIGNvbnN0IGJpdHMgPSBnbC5DT0xPUl9CVUZGRVJfQklUIHwgZ2wuREVQVEhfQlVGRkVSX0JJVDtcbiAqICAgICB0d2dsLmdsRW51bVRvU3RyaW5nKGdsLCBiaXRzKTsgIC8vIG5vdCBnb2luZyB0byB3b3JrXG4gKlxuICogTm90ZSB0aGF0IHNvbWUgZW51bXMgb25seSBleGlzdCBvbiBleHRlbnNpb25zLiBJZiB5b3VcbiAqIHdhbnQgdGhlbSB0byBzaG93IHVwIHlvdSBuZWVkIHRvIHBhc3MgdGhlIGV4dGVuc2lvbiBhdCBsZWFzdFxuICogb25jZS4gRm9yIGV4YW1wbGVcbiAqXG4gKiAgICAgY29uc3QgZXh0ID0gZ2wuZ2V0RXh0ZW5zaW9uKCdXRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfczN0YycpO1xuICogICAgIGlmIChleHQpIHtcbiAqICAgICAgICB0d2dsLmdsRW51bVRvU3RyaW5nKGV4dCwgMCk7ICAvLyBqdXN0IHByaW1lIHRoZSBmdW5jdGlvblxuICpcbiAqICAgICAgICAuLmxhdGVyLi5cbiAqXG4gKiAgICAgICAgY29uc3QgaW50ZXJuYWxGb3JtYXQgPSBleHQuQ09NUFJFU1NFRF9SR0JfUzNUQ19EWFQxX0VYVDtcbiAqICAgICAgICBjb25zb2xlLmxvZyh0d2dsLmdsRW51bVRvU3RyaW5nKGdsLCBpbnRlcm5hbEZvcm1hdCkpO1xuICpcbiAqIE5vdGljZSBJIGRpZG4ndCBoYXZlIHRvIHBhc3MgdGhlIGV4dGVuc2lvbiB0aGUgc2Vjb25kIHRpbWUuIFRoaXMgbWVhbnNcbiAqIHlvdSBjYW4gaGF2ZSBwbGFjZSB0aGF0IGdlbmVyaWNhbGx5IGdldHMgYW4gZW51bSBmb3IgdGV4dHVyZSBmb3JtYXRzIGZvciBleGFtcGxlLlxuICogYW5kIGFzIGxvbmcgYXMgeW91IHByaW1lZCB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgZXh0ZW5zaW9uc1xuICpcbiAqIElmIHlvdSdyZSB1c2luZyBgdHdnbC5hZGRFeHRlbnNpb25zVG9Db250ZXh0YCB0byBlbmFibGUgeW91ciBleHRlbnNpb25zXG4gKiB0aGVuIHR3Z2wgd2lsbCBhdXRvbWF0aWNhbGx5IGdldCB0aGUgZXh0ZW5zaW9uJ3MgZW51bXMuXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIEEgV2ViR0xSZW5kZXJpbmdDb250ZXh0IG9yIGFueSBleHRlbnNpb24gb2JqZWN0XG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgdGhlIHZhbHVlIG9mIHRoZSBlbnVtIHlvdSB3YW50IHRvIGxvb2sgdXAuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IGVudW0gc3RyaW5nIG9yIGhleCB2YWx1ZVxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKiBAZnVuY3Rpb24gZ2xFbnVtVG9TdHJpbmdcbiAqL1xuY29uc3QgZ2xFbnVtVG9TdHJpbmcgPSAoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGhhdmVFbnVtc0ZvclR5cGUgPSB7fTtcbiAgY29uc3QgZW51bXMgPSB7fTtcblxuICBmdW5jdGlvbiBhZGRFbnVtcyhnbCkge1xuICAgIGNvbnN0IHR5cGUgPSBnbC5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIGlmICghaGF2ZUVudW1zRm9yVHlwZVt0eXBlXSkge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZ2wpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBnbFtrZXldID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gZW51bXNbZ2xba2V5XV07XG4gICAgICAgICAgZW51bXNbZ2xba2V5XV0gPSBleGlzdGluZyA/IGAke2V4aXN0aW5nfSB8ICR7a2V5fWAgOiBrZXk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGhhdmVFbnVtc0ZvclR5cGVbdHlwZV0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBnbEVudW1Ub1N0cmluZyhnbCwgdmFsdWUpIHtcbiAgICBhZGRFbnVtcyhnbCk7XG4gICAgcmV0dXJuIGVudW1zW3ZhbHVlXSB8fCAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyA/IGAweCR7dmFsdWUudG9TdHJpbmcoMTYpfWAgOiB2YWx1ZSk7XG4gIH07XG59KCkpO1xuXG52YXIgdXRpbHMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgZ2xFbnVtVG9TdHJpbmc6IGdsRW51bVRvU3RyaW5nLFxuICBpc1dlYkdMMTogaXNXZWJHTDEsXG4gIGlzV2ViR0wyOiBpc1dlYkdMMlxufSk7XG5cbi8qXG4gKiBDb3B5cmlnaHQgMjAxOSBHcmVnZyBUYXZhcmVzXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbiAqIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSxcbiAqIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb25cbiAqIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLFxuICogYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4gKiBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTFxuICogVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSXG4gKiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cbmNvbnN0IGRlZmF1bHRzJDEgPSB7XG4gIHRleHR1cmVDb2xvcjogbmV3IFVpbnQ4QXJyYXkoWzEyOCwgMTkyLCAyNTUsIDI1NV0pLFxuICB0ZXh0dXJlT3B0aW9uczoge30sXG4gIGNyb3NzT3JpZ2luOiB1bmRlZmluZWQsXG59O1xuY29uc3QgaXNBcnJheUJ1ZmZlciA9IGlzQXJyYXlCdWZmZXIkMTtcblxuLy8gU2hvdWxkIHdlIG1ha2UgdGhpcyBvbiBkZW1hbmQ/XG5jb25zdCBnZXRTaGFyZWQyRENvbnRleHQgPSBmdW5jdGlvbigpIHtcbiAgbGV0IHNfY3R4O1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0U2hhcmVkMkRDb250ZXh0KCkge1xuICAgIHNfY3R4ID0gc19jdHggfHxcbiAgICAgICAgKCh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpXG4gICAgICAgICAgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLmdldENvbnRleHQoXCIyZFwiKVxuICAgICAgICAgIDogbnVsbCk7XG4gICAgcmV0dXJuIHNfY3R4O1xuICB9O1xufSgpO1xuXG4vLyBOT1RFOiBDaHJvbWUgc3VwcG9ydHMgMkQgY2FudmFzIGluIGEgV29ya2VyIChiZWhpbmQgZmxhZyBhcyBvZiB2NjQgYnV0XG4vLyAgICAgICBub3Qgb25seSBkb2VzIEZpcmVmb3ggTk9UIHN1cHBvcnQgaXQgYnV0IEZpcmVmb3ggZnJlZXplcyBpbW1lZGlhdGVseVxuLy8gICAgICAgaWYgeW91IHRyeSB0byBjcmVhdGUgb25lIGluc3RlYWQgb2YganVzdCByZXR1cm5pbmcgbnVsbCBhbmQgY29udGludWluZy5cbi8vICA6IChnbG9iYWwuT2Zmc2NyZWVuQ2FudmFzICYmIChuZXcgZ2xvYmFsLk9mZnNjcmVlbkNhbnZhcygxLCAxKSkuZ2V0Q29udGV4dChcIjJkXCIpKTsgIC8vIE9mZnNjcmVlbkNhbnZhcyBtYXkgbm90IHN1cHBvcnQgMmRcblxuLy8gTk9URTogV2UgY2FuIG1heWJlIHJlbW92ZSBzb21lIG9mIHRoZSBuZWVkIGZvciB0aGUgMmQgY2FudmFzLiBJbiBXZWJHTDJcbi8vIHdlIGNhbiB1c2UgdGhlIHZhcmlvdXMgdW5wYWNrIHNldHRpbmdzLiBPdGhlcndpc2Ugd2UgY291bGQgdHJ5IHVzaW5nXG4vLyB0aGUgYWJpbGl0eSBvZiBhbiBJbWFnZUJpdG1hcCB0byBiZSBjdXQuIFVuZm9ydHVuYXRlbHkgY3V0dGluZyBhbiBJbWFnZUJpdG1hcFxuLy8gaXMgYXN5bmMgYW5kIHRoZSBjdXJyZW50IFRXR0wgY29kZSBleHBlY3RzIGEgbm9uLUFzeW5jIHJlc3VsdCB0aG91Z2ggdGhhdFxuLy8gbWlnaHQgbm90IGJlIGEgcHJvYmxlbS4gSW1hZ2VCaXRtYXAgdGhvdWdoIGlzIG5vdCBhdmFpbGFibGUgaW4gRWRnZSBvciBTYWZhcmlcbi8vIGFzIG9mIDIwMTgtMDEtMDJcblxuLyogUGl4ZWxGb3JtYXQgKi9cbmNvbnN0IEFMUEhBICAgICAgICAgICAgICAgICAgICAgICAgICA9IDB4MTkwNjtcbmNvbnN0IFJHQiAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IDB4MTkwNztcbmNvbnN0IFJHQkEkMSAgICAgICAgICAgICAgICAgICAgICAgICAgID0gMHgxOTA4O1xuY29uc3QgTFVNSU5BTkNFICAgICAgICAgICAgICAgICAgICAgID0gMHgxOTA5O1xuY29uc3QgTFVNSU5BTkNFX0FMUEhBICAgICAgICAgICAgICAgID0gMHgxOTBBO1xuY29uc3QgREVQVEhfQ09NUE9ORU5UJDEgICAgICAgICAgICAgICAgPSAweDE5MDI7XG5jb25zdCBERVBUSF9TVEVOQ0lMJDEgICAgICAgICAgICAgICAgICA9IDB4ODRGOTtcblxuLyogVGV4dHVyZVdyYXBNb2RlICovXG4vLyBjb25zdCBSRVBFQVQgICAgICAgICAgICAgICAgICAgICAgICAgPSAweDI5MDE7XG4vLyBjb25zdCBNSVJST1JFRF9SRVBFQVQgICAgICAgICAgICAgICAgPSAweDgzNzA7XG5jb25zdCBDTEFNUF9UT19FREdFJDEgICAgICAgICAgICAgICAgICA9IDB4ODEyZjtcblxuLyogVGV4dHVyZU1hZ0ZpbHRlciAqL1xuY29uc3QgTkVBUkVTVCAgICAgICAgICAgICAgICAgICAgICAgID0gMHgyNjAwO1xuY29uc3QgTElORUFSJDEgICAgICAgICAgICAgICAgICAgICAgICAgPSAweDI2MDE7XG5cbi8qIFRleHR1cmVNaW5GaWx0ZXIgKi9cbi8vIGNvbnN0IE5FQVJFU1RfTUlQTUFQX05FQVJFU1QgICAgICAgICA9IDB4MjcwMDtcbi8vIGNvbnN0IExJTkVBUl9NSVBNQVBfTkVBUkVTVCAgICAgICAgICA9IDB4MjcwMTtcbi8vIGNvbnN0IE5FQVJFU1RfTUlQTUFQX0xJTkVBUiAgICAgICAgICA9IDB4MjcwMjtcbi8vIGNvbnN0IExJTkVBUl9NSVBNQVBfTElORUFSICAgICAgICAgICA9IDB4MjcwMztcblxuLyogVGV4dHVyZSBUYXJnZXQgKi9cbmNvbnN0IFRFWFRVUkVfMkQkMiAgICAgICAgICAgICAgICAgICAgID0gMHgwZGUxO1xuY29uc3QgVEVYVFVSRV9DVUJFX01BUCQxICAgICAgICAgICAgICAgPSAweDg1MTM7XG5jb25zdCBURVhUVVJFXzNEJDEgICAgICAgICAgICAgICAgICAgICA9IDB4ODA2ZjtcbmNvbnN0IFRFWFRVUkVfMkRfQVJSQVkkMSAgICAgICAgICAgICAgID0gMHg4YzFhO1xuXG4vKiBDdWJlbWFwIFRhcmdldHMgKi9cbmNvbnN0IFRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWCAgICA9IDB4ODUxNTtcbmNvbnN0IFRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWCAgICA9IDB4ODUxNjtcbmNvbnN0IFRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWSAgICA9IDB4ODUxNztcbmNvbnN0IFRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWSAgICA9IDB4ODUxODtcbmNvbnN0IFRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWiAgICA9IDB4ODUxOTtcbmNvbnN0IFRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWiAgICA9IDB4ODUxYTtcblxuLyogVGV4dHVyZSBQYXJhbWV0ZXJzICovXG5jb25zdCBURVhUVVJFX01JTl9GSUxURVIgICAgICAgICAgICAgPSAweDI4MDE7XG5jb25zdCBURVhUVVJFX01BR19GSUxURVIgICAgICAgICAgICAgPSAweDI4MDA7XG5jb25zdCBURVhUVVJFX1dSQVBfUyAgICAgICAgICAgICAgICAgPSAweDI4MDI7XG5jb25zdCBURVhUVVJFX1dSQVBfVCAgICAgICAgICAgICAgICAgPSAweDI4MDM7XG5jb25zdCBURVhUVVJFX1dSQVBfUiAgICAgICAgICAgICAgICAgPSAweDgwNzI7XG5jb25zdCBURVhUVVJFX01JTl9MT0QgICAgICAgICAgICAgICAgPSAweDgxM2E7XG5jb25zdCBURVhUVVJFX01BWF9MT0QgICAgICAgICAgICAgICAgPSAweDgxM2I7XG5jb25zdCBURVhUVVJFX0JBU0VfTEVWRUwgICAgICAgICAgICAgPSAweDgxM2M7XG5jb25zdCBURVhUVVJFX01BWF9MRVZFTCAgICAgICAgICAgICAgPSAweDgxM2Q7XG5jb25zdCBURVhUVVJFX0NPTVBBUkVfTU9ERSAgICAgICAgICAgPSAweDg4NEM7XG5jb25zdCBURVhUVVJFX0NPTVBBUkVfRlVOQyAgICAgICAgICAgPSAweDg4NEQ7XG5cbi8qIFBpeGVsIHN0b3JlICovXG5jb25zdCBVTlBBQ0tfQUxJR05NRU5UICAgICAgICAgICAgICAgICAgID0gMHgwY2Y1O1xuY29uc3QgVU5QQUNLX1JPV19MRU5HVEggICAgICAgICAgICAgICAgICA9IDB4MGNmMjtcbmNvbnN0IFVOUEFDS19JTUFHRV9IRUlHSFQgICAgICAgICAgICAgICAgPSAweDgwNmU7XG5jb25zdCBVTlBBQ0tfU0tJUF9QSVhFTFMgICAgICAgICAgICAgICAgID0gMHgwY2Y0O1xuY29uc3QgVU5QQUNLX1NLSVBfUk9XUyAgICAgICAgICAgICAgICAgICA9IDB4MGNmMztcbmNvbnN0IFVOUEFDS19TS0lQX0lNQUdFUyAgICAgICAgICAgICAgICAgPSAweDgwNmQ7XG5jb25zdCBVTlBBQ0tfQ09MT1JTUEFDRV9DT05WRVJTSU9OX1dFQkdMID0gMHg5MjQzO1xuY29uc3QgVU5QQUNLX1BSRU1VTFRJUExZX0FMUEhBX1dFQkdMICAgICA9IDB4OTI0MTtcbmNvbnN0IFVOUEFDS19GTElQX1lfV0VCR0wgICAgICAgICAgICAgICAgPSAweDkyNDA7XG5cbmNvbnN0IFI4ICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAweDgyMjk7XG5jb25zdCBSOF9TTk9STSAgICAgICAgICAgICAgICAgICAgID0gMHg4Rjk0O1xuY29uc3QgUjE2RiAgICAgICAgICAgICAgICAgICAgICAgICA9IDB4ODIyRDtcbmNvbnN0IFIzMkYgICAgICAgICAgICAgICAgICAgICAgICAgPSAweDgyMkU7XG5jb25zdCBSOFVJICAgICAgICAgICAgICAgICAgICAgICAgID0gMHg4MjMyO1xuY29uc3QgUjhJICAgICAgICAgICAgICAgICAgICAgICAgICA9IDB4ODIzMTtcbmNvbnN0IFJHMTZVSSAgICAgICAgICAgICAgICAgICAgICAgPSAweDgyM0E7XG5jb25zdCBSRzE2SSAgICAgICAgICAgICAgICAgICAgICAgID0gMHg4MjM5O1xuY29uc3QgUkczMlVJICAgICAgICAgICAgICAgICAgICAgICA9IDB4ODIzQztcbmNvbnN0IFJHMzJJICAgICAgICAgICAgICAgICAgICAgICAgPSAweDgyM0I7XG5jb25zdCBSRzggICAgICAgICAgICAgICAgICAgICAgICAgID0gMHg4MjJCO1xuY29uc3QgUkc4X1NOT1JNICAgICAgICAgICAgICAgICAgICA9IDB4OEY5NTtcbmNvbnN0IFJHMTZGICAgICAgICAgICAgICAgICAgICAgICAgPSAweDgyMkY7XG5jb25zdCBSRzMyRiAgICAgICAgICAgICAgICAgICAgICAgID0gMHg4MjMwO1xuY29uc3QgUkc4VUkgICAgICAgICAgICAgICAgICAgICAgICA9IDB4ODIzODtcbmNvbnN0IFJHOEkgICAgICAgICAgICAgICAgICAgICAgICAgPSAweDgyMzc7XG5jb25zdCBSMTZVSSAgICAgICAgICAgICAgICAgICAgICAgID0gMHg4MjM0O1xuY29uc3QgUjE2SSAgICAgICAgICAgICAgICAgICAgICAgICA9IDB4ODIzMztcbmNvbnN0IFIzMlVJICAgICAgICAgICAgICAgICAgICAgICAgPSAweDgyMzY7XG5jb25zdCBSMzJJICAgICAgICAgICAgICAgICAgICAgICAgID0gMHg4MjM1O1xuY29uc3QgUkdCOCAgICAgICAgICAgICAgICAgICAgICAgICA9IDB4ODA1MTtcbmNvbnN0IFNSR0I4ICAgICAgICAgICAgICAgICAgICAgICAgPSAweDhDNDE7XG5jb25zdCBSR0I1NjUkMSAgICAgICAgICAgICAgICAgICAgICAgPSAweDhENjI7XG5jb25zdCBSR0I4X1NOT1JNICAgICAgICAgICAgICAgICAgID0gMHg4Rjk2O1xuY29uc3QgUjExRl9HMTFGX0IxMEYgICAgICAgICAgICAgICA9IDB4OEMzQTtcbmNvbnN0IFJHQjlfRTUgICAgICAgICAgICAgICAgICAgICAgPSAweDhDM0Q7XG5jb25zdCBSR0IxNkYgICAgICAgICAgICAgICAgICAgICAgID0gMHg4ODFCO1xuY29uc3QgUkdCMzJGICAgICAgICAgICAgICAgICAgICAgICA9IDB4ODgxNTtcbmNvbnN0IFJHQjhVSSAgICAgICAgICAgICAgICAgICAgICAgPSAweDhEN0Q7XG5jb25zdCBSR0I4SSAgICAgICAgICAgICAgICAgICAgICAgID0gMHg4RDhGO1xuY29uc3QgUkdCMTZVSSAgICAgICAgICAgICAgICAgICAgICA9IDB4OEQ3NztcbmNvbnN0IFJHQjE2SSAgICAgICAgICAgICAgICAgICAgICAgPSAweDhEODk7XG5jb25zdCBSR0IzMlVJICAgICAgICAgICAgICAgICAgICAgID0gMHg4RDcxO1xuY29uc3QgUkdCMzJJICAgICAgICAgICAgICAgICAgICAgICA9IDB4OEQ4MztcbmNvbnN0IFJHQkE4ICAgICAgICAgICAgICAgICAgICAgICAgPSAweDgwNTg7XG5jb25zdCBTUkdCOF9BTFBIQTggICAgICAgICAgICAgICAgID0gMHg4QzQzO1xuY29uc3QgUkdCQThfU05PUk0gICAgICAgICAgICAgICAgICA9IDB4OEY5NztcbmNvbnN0IFJHQjVfQTEkMSAgICAgICAgICAgICAgICAgICAgICA9IDB4ODA1NztcbmNvbnN0IFJHQkE0JDEgICAgICAgICAgICAgICAgICAgICAgICA9IDB4ODA1NjtcbmNvbnN0IFJHQjEwX0EyICAgICAgICAgICAgICAgICAgICAgPSAweDgwNTk7XG5jb25zdCBSR0JBMTZGICAgICAgICAgICAgICAgICAgICAgID0gMHg4ODFBO1xuY29uc3QgUkdCQTMyRiAgICAgICAgICAgICAgICAgICAgICA9IDB4ODgxNDtcbmNvbnN0IFJHQkE4VUkgICAgICAgICAgICAgICAgICAgICAgPSAweDhEN0M7XG5jb25zdCBSR0JBOEkgICAgICAgICAgICAgICAgICAgICAgID0gMHg4RDhFO1xuY29uc3QgUkdCMTBfQTJVSSAgICAgICAgICAgICAgICAgICA9IDB4OTA2RjtcbmNvbnN0IFJHQkExNlVJICAgICAgICAgICAgICAgICAgICAgPSAweDhENzY7XG5jb25zdCBSR0JBMTZJICAgICAgICAgICAgICAgICAgICAgID0gMHg4RDg4O1xuY29uc3QgUkdCQTMySSAgICAgICAgICAgICAgICAgICAgICA9IDB4OEQ4MjtcbmNvbnN0IFJHQkEzMlVJICAgICAgICAgICAgICAgICAgICAgPSAweDhENzA7XG5cbmNvbnN0IERFUFRIX0NPTVBPTkVOVDE2JDEgICAgICAgICAgICA9IDB4ODFBNTtcbmNvbnN0IERFUFRIX0NPTVBPTkVOVDI0JDEgICAgICAgICAgICA9IDB4ODFBNjtcbmNvbnN0IERFUFRIX0NPTVBPTkVOVDMyRiQxICAgICAgICAgICA9IDB4OENBQztcbmNvbnN0IERFUFRIMzJGX1NURU5DSUw4JDEgICAgICAgICAgICA9IDB4OENBRDtcbmNvbnN0IERFUFRIMjRfU1RFTkNJTDgkMSAgICAgICAgICAgICA9IDB4ODhGMDtcblxuLyogRGF0YVR5cGUgKi9cbmNvbnN0IEJZVEUgICAgICAgICAgICAgICAgICAgICAgICAgPSAweDE0MDA7XG5jb25zdCBVTlNJR05FRF9CWVRFJDEgICAgICAgICAgICAgICAgPSAweDE0MDE7XG5jb25zdCBTSE9SVCAgICAgICAgICAgICAgICAgICAgICAgID0gMHgxNDAyO1xuY29uc3QgVU5TSUdORURfU0hPUlQkMSAgICAgICAgICAgICAgID0gMHgxNDAzO1xuY29uc3QgSU5UJDEgICAgICAgICAgICAgICAgICAgICAgICAgID0gMHgxNDA0O1xuY29uc3QgVU5TSUdORURfSU5UJDEgICAgICAgICAgICAgICAgID0gMHgxNDA1O1xuY29uc3QgRkxPQVQkMSAgICAgICAgICAgICAgICAgICAgICAgID0gMHgxNDA2O1xuY29uc3QgVU5TSUdORURfU0hPUlRfNF80XzRfNCAgICAgICA9IDB4ODAzMztcbmNvbnN0IFVOU0lHTkVEX1NIT1JUXzVfNV81XzEgICAgICAgPSAweDgwMzQ7XG5jb25zdCBVTlNJR05FRF9TSE9SVF81XzZfNSAgICAgICAgID0gMHg4MzYzO1xuY29uc3QgSEFMRl9GTE9BVCAgICAgICAgICAgICAgICAgICA9IDB4MTQwQjtcbmNvbnN0IEhBTEZfRkxPQVRfT0VTICAgICAgICAgICAgICAgPSAweDhENjE7ICAvLyBUaGFua3MgS2hyb25vcyBmb3IgbWFraW5nIHRoaXMgZGlmZmVyZW50ID46KFxuY29uc3QgVU5TSUdORURfSU5UXzJfMTBfMTBfMTBfUkVWICA9IDB4ODM2ODtcbmNvbnN0IFVOU0lHTkVEX0lOVF8xMEZfMTFGXzExRl9SRVYgPSAweDhDM0I7XG5jb25zdCBVTlNJR05FRF9JTlRfNV85XzlfOV9SRVYgICAgID0gMHg4QzNFO1xuY29uc3QgRkxPQVRfMzJfVU5TSUdORURfSU5UXzI0XzhfUkVWID0gMHg4REFEO1xuY29uc3QgVU5TSUdORURfSU5UXzI0XzggICAgICAgICAgICA9IDB4ODRGQTtcblxuY29uc3QgUkcgICAgICAgICAgICAgICAgICAgICAgICAgICA9IDB4ODIyNztcbmNvbnN0IFJHX0lOVEVHRVIgICAgICAgICAgICAgICAgICAgPSAweDgyMjg7XG5jb25zdCBSRUQgICAgICAgICAgICAgICAgICAgICAgICAgID0gMHgxOTAzO1xuY29uc3QgUkVEX0lOVEVHRVIgICAgICAgICAgICAgICAgICA9IDB4OEQ5NDtcbmNvbnN0IFJHQl9JTlRFR0VSICAgICAgICAgICAgICAgICAgPSAweDhEOTg7XG5jb25zdCBSR0JBX0lOVEVHRVIgICAgICAgICAgICAgICAgID0gMHg4RDk5O1xuXG5jb25zdCBmb3JtYXRJbmZvID0ge307XG57XG4gIC8vIE5PVEU6IHRoaXMgaXMgbmFtZWQgYG51bUNvbG9yQ29tcG9uZW50c2AgdnMgYG51bUNvbXBvbmVudHNgIHNvIHdlIGNhbiBsZXQgVWdsaWZ5IG1hbmdsZVxuICAvLyB0aGUgbmFtZS5cbiAgY29uc3QgZiA9IGZvcm1hdEluZm87XG4gIGZbQUxQSEFdICAgICAgICAgICA9IHsgbnVtQ29sb3JDb21wb25lbnRzOiAxLCB9O1xuICBmW0xVTUlOQU5DRV0gICAgICAgPSB7IG51bUNvbG9yQ29tcG9uZW50czogMSwgfTtcbiAgZltMVU1JTkFOQ0VfQUxQSEFdID0geyBudW1Db2xvckNvbXBvbmVudHM6IDIsIH07XG4gIGZbUkdCXSAgICAgICAgICAgICA9IHsgbnVtQ29sb3JDb21wb25lbnRzOiAzLCB9O1xuICBmW1JHQkEkMV0gICAgICAgICAgICA9IHsgbnVtQ29sb3JDb21wb25lbnRzOiA0LCB9O1xuICBmW1JFRF0gICAgICAgICAgICAgPSB7IG51bUNvbG9yQ29tcG9uZW50czogMSwgfTtcbiAgZltSRURfSU5URUdFUl0gICAgID0geyBudW1Db2xvckNvbXBvbmVudHM6IDEsIH07XG4gIGZbUkddICAgICAgICAgICAgICA9IHsgbnVtQ29sb3JDb21wb25lbnRzOiAyLCB9O1xuICBmW1JHX0lOVEVHRVJdICAgICAgPSB7IG51bUNvbG9yQ29tcG9uZW50czogMiwgfTtcbiAgZltSR0JdICAgICAgICAgICAgID0geyBudW1Db2xvckNvbXBvbmVudHM6IDMsIH07XG4gIGZbUkdCX0lOVEVHRVJdICAgICA9IHsgbnVtQ29sb3JDb21wb25lbnRzOiAzLCB9O1xuICBmW1JHQkEkMV0gICAgICAgICAgICA9IHsgbnVtQ29sb3JDb21wb25lbnRzOiA0LCB9O1xuICBmW1JHQkFfSU5URUdFUl0gICAgPSB7IG51bUNvbG9yQ29tcG9uZW50czogNCwgfTtcbiAgZltERVBUSF9DT01QT05FTlQkMV0gPSB7IG51bUNvbG9yQ29tcG9uZW50czogMSwgfTtcbiAgZltERVBUSF9TVEVOQ0lMJDFdICAgPSB7IG51bUNvbG9yQ29tcG9uZW50czogMiwgfTtcbn1cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBUZXh0dXJlRm9ybWF0RGV0YWlsc1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHRleHR1cmVGb3JtYXQgZm9ybWF0IHRvIHBhc3MgdGV4SW1hZ2UyRCBhbmQgc2ltaWxhciBmdW5jdGlvbnMuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGNvbG9yUmVuZGVyYWJsZSB0cnVlIGlmIHlvdSBjYW4gcmVuZGVyIHRvIHRoaXMgZm9ybWF0IG9mIHRleHR1cmUuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHRleHR1cmVGaWx0ZXJhYmxlIHRydWUgaWYgeW91IGNhbiBmaWx0ZXIgdGhlIHRleHR1cmUsIGZhbHNlIGlmIHlvdSBjYW4gb255IHVzZSBgTkVBUkVTVGAuXG4gKiBAcHJvcGVydHkge251bWJlcltdfSB0eXBlIEFycmF5IG9mIHBvc3NpYmxlIHR5cGVzIHlvdSBjYW4gcGFzcyB0byB0ZXhJbWFnZTJEIGFuZCBzaW1pbGFyIGZ1bmN0aW9uXG4gKiBAcHJvcGVydHkge09iamVjdC48bnVtYmVyLG51bWJlcj59IGJ5dGVzUGVyRWxlbWVudE1hcCBBIG1hcCBvZiB0eXBlcyB0byBieXRlcyBwZXIgZWxlbWVudFxuICogQHByaXZhdGVcbiAqL1xuXG5sZXQgc190ZXh0dXJlSW50ZXJuYWxGb3JtYXRJbmZvO1xuZnVuY3Rpb24gZ2V0VGV4dHVyZUludGVybmFsRm9ybWF0SW5mbyhpbnRlcm5hbEZvcm1hdCkge1xuICBpZiAoIXNfdGV4dHVyZUludGVybmFsRm9ybWF0SW5mbykge1xuICAgIC8vIE5PVEU6IHRoZXNlIHByb3BlcnRpZXMgbmVlZCB1bmlxdWUgbmFtZXMgc28gd2UgY2FuIGxldCBVZ2xpZnkgbWFuZ2xlIHRoZSBuYW1lLlxuICAgIGNvbnN0IHQgPSB7fTtcbiAgICAvLyB1bnNpemVkIGZvcm1hdHNcbiAgICB0W0FMUEhBXSAgICAgICAgICAgICAgPSB7IHRleHR1cmVGb3JtYXQ6IEFMUEhBLCAgICAgICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLCAgdGV4dHVyZUZpbHRlcmFibGU6IHRydWUsICBieXRlc1BlckVsZW1lbnQ6IFsxLCAyLCAyLCA0XSwgICAgICAgIHR5cGU6IFtVTlNJR05FRF9CWVRFJDEsIEhBTEZfRkxPQVQsIEhBTEZfRkxPQVRfT0VTLCBGTE9BVCQxXSwgfTtcbiAgICB0W0xVTUlOQU5DRV0gICAgICAgICAgPSB7IHRleHR1cmVGb3JtYXQ6IExVTUlOQU5DRSwgICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLCAgdGV4dHVyZUZpbHRlcmFibGU6IHRydWUsICBieXRlc1BlckVsZW1lbnQ6IFsxLCAyLCAyLCA0XSwgICAgICAgIHR5cGU6IFtVTlNJR05FRF9CWVRFJDEsIEhBTEZfRkxPQVQsIEhBTEZfRkxPQVRfT0VTLCBGTE9BVCQxXSwgfTtcbiAgICB0W0xVTUlOQU5DRV9BTFBIQV0gICAgPSB7IHRleHR1cmVGb3JtYXQ6IExVTUlOQU5DRV9BTFBIQSwgY29sb3JSZW5kZXJhYmxlOiB0cnVlLCAgdGV4dHVyZUZpbHRlcmFibGU6IHRydWUsICBieXRlc1BlckVsZW1lbnQ6IFsyLCA0LCA0LCA4XSwgICAgICAgIHR5cGU6IFtVTlNJR05FRF9CWVRFJDEsIEhBTEZfRkxPQVQsIEhBTEZfRkxPQVRfT0VTLCBGTE9BVCQxXSwgfTtcbiAgICB0W1JHQl0gICAgICAgICAgICAgICAgPSB7IHRleHR1cmVGb3JtYXQ6IFJHQiwgICAgICAgICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLCAgdGV4dHVyZUZpbHRlcmFibGU6IHRydWUsICBieXRlc1BlckVsZW1lbnQ6IFszLCA2LCA2LCAxMiwgMl0sICAgIHR5cGU6IFtVTlNJR05FRF9CWVRFJDEsIEhBTEZfRkxPQVQsIEhBTEZfRkxPQVRfT0VTLCBGTE9BVCQxLCBVTlNJR05FRF9TSE9SVF81XzZfNV0sIH07XG4gICAgdFtSR0JBJDFdICAgICAgICAgICAgICAgPSB7IHRleHR1cmVGb3JtYXQ6IFJHQkEkMSwgICAgICAgICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsICB0ZXh0dXJlRmlsdGVyYWJsZTogdHJ1ZSwgIGJ5dGVzUGVyRWxlbWVudDogWzQsIDgsIDgsIDE2LCAyLCAyXSwgdHlwZTogW1VOU0lHTkVEX0JZVEUkMSwgSEFMRl9GTE9BVCwgSEFMRl9GTE9BVF9PRVMsIEZMT0FUJDEsIFVOU0lHTkVEX1NIT1JUXzRfNF80XzQsIFVOU0lHTkVEX1NIT1JUXzVfNV81XzFdLCB9O1xuICAgIHRbREVQVEhfQ09NUE9ORU5UJDFdICAgID0geyB0ZXh0dXJlRm9ybWF0OiBERVBUSF9DT01QT05FTlQkMSwgY29sb3JSZW5kZXJhYmxlOiB0cnVlLCAgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLCBieXRlc1BlckVsZW1lbnQ6IFsyLCA0XSwgICAgICAgICAgICAgIHR5cGU6IFtVTlNJR05FRF9JTlQkMSwgVU5TSUdORURfU0hPUlQkMV0sIH07XG5cbiAgICAvLyBzaXplZCBmb3JtYXRzXG4gICAgdFtSOF0gICAgICAgICAgICAgICAgID0geyB0ZXh0dXJlRm9ybWF0OiBSRUQsICAgICAgICAgICAgIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSwgIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLCAgYnl0ZXNQZXJFbGVtZW50OiBbMV0sICAgICAgICB0eXBlOiBbVU5TSUdORURfQllURSQxXSwgfTtcbiAgICB0W1I4X1NOT1JNXSAgICAgICAgICAgPSB7IHRleHR1cmVGb3JtYXQ6IFJFRCwgICAgICAgICAgICAgY29sb3JSZW5kZXJhYmxlOiBmYWxzZSwgdGV4dHVyZUZpbHRlcmFibGU6IHRydWUsICBieXRlc1BlckVsZW1lbnQ6IFsxXSwgICAgICAgIHR5cGU6IFtCWVRFXSwgfTtcbiAgICB0W1IxNkZdICAgICAgICAgICAgICAgPSB7IHRleHR1cmVGb3JtYXQ6IFJFRCwgICAgICAgICAgICAgY29sb3JSZW5kZXJhYmxlOiBmYWxzZSwgdGV4dHVyZUZpbHRlcmFibGU6IHRydWUsICBieXRlc1BlckVsZW1lbnQ6IFs0LCAyXSwgICAgIHR5cGU6IFtGTE9BVCQxLCBIQUxGX0ZMT0FUXSwgfTtcbiAgICB0W1IzMkZdICAgICAgICAgICAgICAgPSB7IHRleHR1cmVGb3JtYXQ6IFJFRCwgICAgICAgICAgICAgY29sb3JSZW5kZXJhYmxlOiBmYWxzZSwgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLCBieXRlc1BlckVsZW1lbnQ6IFs0XSwgICAgICAgIHR5cGU6IFtGTE9BVCQxXSwgfTtcbiAgICB0W1I4VUldICAgICAgICAgICAgICAgPSB7IHRleHR1cmVGb3JtYXQ6IFJFRF9JTlRFR0VSLCAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLCAgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLCBieXRlc1BlckVsZW1lbnQ6IFsxXSwgICAgICAgIHR5cGU6IFtVTlNJR05FRF9CWVRFJDFdLCB9O1xuICAgIHRbUjhJXSAgICAgICAgICAgICAgICA9IHsgdGV4dHVyZUZvcm1hdDogUkVEX0lOVEVHRVIsICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsIGJ5dGVzUGVyRWxlbWVudDogWzFdLCAgICAgICAgdHlwZTogW0JZVEVdLCB9O1xuICAgIHRbUjE2VUldICAgICAgICAgICAgICA9IHsgdGV4dHVyZUZvcm1hdDogUkVEX0lOVEVHRVIsICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsIGJ5dGVzUGVyRWxlbWVudDogWzJdLCAgICAgICAgdHlwZTogW1VOU0lHTkVEX1NIT1JUJDFdLCB9O1xuICAgIHRbUjE2SV0gICAgICAgICAgICAgICA9IHsgdGV4dHVyZUZvcm1hdDogUkVEX0lOVEVHRVIsICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsIGJ5dGVzUGVyRWxlbWVudDogWzJdLCAgICAgICAgdHlwZTogW1NIT1JUXSwgfTtcbiAgICB0W1IzMlVJXSAgICAgICAgICAgICAgPSB7IHRleHR1cmVGb3JtYXQ6IFJFRF9JTlRFR0VSLCAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLCAgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLCBieXRlc1BlckVsZW1lbnQ6IFs0XSwgICAgICAgIHR5cGU6IFtVTlNJR05FRF9JTlQkMV0sIH07XG4gICAgdFtSMzJJXSAgICAgICAgICAgICAgID0geyB0ZXh0dXJlRm9ybWF0OiBSRURfSU5URUdFUiwgICAgIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSwgIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSwgYnl0ZXNQZXJFbGVtZW50OiBbNF0sICAgICAgICB0eXBlOiBbSU5UJDFdLCB9O1xuICAgIHRbUkc4XSAgICAgICAgICAgICAgICA9IHsgdGV4dHVyZUZvcm1hdDogUkcsICAgICAgICAgICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsICB0ZXh0dXJlRmlsdGVyYWJsZTogdHJ1ZSwgIGJ5dGVzUGVyRWxlbWVudDogWzJdLCAgICAgICAgdHlwZTogW1VOU0lHTkVEX0JZVEUkMV0sIH07XG4gICAgdFtSRzhfU05PUk1dICAgICAgICAgID0geyB0ZXh0dXJlRm9ybWF0OiBSRywgICAgICAgICAgICAgIGNvbG9yUmVuZGVyYWJsZTogZmFsc2UsIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLCAgYnl0ZXNQZXJFbGVtZW50OiBbMl0sICAgICAgICB0eXBlOiBbQllURV0sIH07XG4gICAgdFtSRzE2Rl0gICAgICAgICAgICAgID0geyB0ZXh0dXJlRm9ybWF0OiBSRywgICAgICAgICAgICAgIGNvbG9yUmVuZGVyYWJsZTogZmFsc2UsIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLCAgYnl0ZXNQZXJFbGVtZW50OiBbOCwgNF0sICAgICB0eXBlOiBbRkxPQVQkMSwgSEFMRl9GTE9BVF0sIH07XG4gICAgdFtSRzMyRl0gICAgICAgICAgICAgID0geyB0ZXh0dXJlRm9ybWF0OiBSRywgICAgICAgICAgICAgIGNvbG9yUmVuZGVyYWJsZTogZmFsc2UsIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSwgYnl0ZXNQZXJFbGVtZW50OiBbOF0sICAgICAgICB0eXBlOiBbRkxPQVQkMV0sIH07XG4gICAgdFtSRzhVSV0gICAgICAgICAgICAgID0geyB0ZXh0dXJlRm9ybWF0OiBSR19JTlRFR0VSLCAgICAgIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSwgIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSwgYnl0ZXNQZXJFbGVtZW50OiBbMl0sICAgICAgICB0eXBlOiBbVU5TSUdORURfQllURSQxXSwgfTtcbiAgICB0W1JHOEldICAgICAgICAgICAgICAgPSB7IHRleHR1cmVGb3JtYXQ6IFJHX0lOVEVHRVIsICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLCAgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLCBieXRlc1BlckVsZW1lbnQ6IFsyXSwgICAgICAgIHR5cGU6IFtCWVRFXSwgfTtcbiAgICB0W1JHMTZVSV0gICAgICAgICAgICAgPSB7IHRleHR1cmVGb3JtYXQ6IFJHX0lOVEVHRVIsICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLCAgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLCBieXRlc1BlckVsZW1lbnQ6IFs0XSwgICAgICAgIHR5cGU6IFtVTlNJR05FRF9TSE9SVCQxXSwgfTtcbiAgICB0W1JHMTZJXSAgICAgICAgICAgICAgPSB7IHRleHR1cmVGb3JtYXQ6IFJHX0lOVEVHRVIsICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLCAgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLCBieXRlc1BlckVsZW1lbnQ6IFs0XSwgICAgICAgIHR5cGU6IFtTSE9SVF0sIH07XG4gICAgdFtSRzMyVUldICAgICAgICAgICAgID0geyB0ZXh0dXJlRm9ybWF0OiBSR19JTlRFR0VSLCAgICAgIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSwgIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSwgYnl0ZXNQZXJFbGVtZW50OiBbOF0sICAgICAgICB0eXBlOiBbVU5TSUdORURfSU5UJDFdLCB9O1xuICAgIHRbUkczMkldICAgICAgICAgICAgICA9IHsgdGV4dHVyZUZvcm1hdDogUkdfSU5URUdFUiwgICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsIGJ5dGVzUGVyRWxlbWVudDogWzhdLCAgICAgICAgdHlwZTogW0lOVCQxXSwgfTtcbiAgICB0W1JHQjhdICAgICAgICAgICAgICAgPSB7IHRleHR1cmVGb3JtYXQ6IFJHQiwgICAgICAgICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLCAgdGV4dHVyZUZpbHRlcmFibGU6IHRydWUsICBieXRlc1BlckVsZW1lbnQ6IFszXSwgICAgICAgIHR5cGU6IFtVTlNJR05FRF9CWVRFJDFdLCB9O1xuICAgIHRbU1JHQjhdICAgICAgICAgICAgICA9IHsgdGV4dHVyZUZvcm1hdDogUkdCLCAgICAgICAgICAgICBjb2xvclJlbmRlcmFibGU6IGZhbHNlLCB0ZXh0dXJlRmlsdGVyYWJsZTogdHJ1ZSwgIGJ5dGVzUGVyRWxlbWVudDogWzNdLCAgICAgICAgdHlwZTogW1VOU0lHTkVEX0JZVEUkMV0sIH07XG4gICAgdFtSR0I1NjUkMV0gICAgICAgICAgICAgPSB7IHRleHR1cmVGb3JtYXQ6IFJHQiwgICAgICAgICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLCAgdGV4dHVyZUZpbHRlcmFibGU6IHRydWUsICBieXRlc1BlckVsZW1lbnQ6IFszLCAyXSwgICAgIHR5cGU6IFtVTlNJR05FRF9CWVRFJDEsIFVOU0lHTkVEX1NIT1JUXzVfNl81XSwgfTtcbiAgICB0W1JHQjhfU05PUk1dICAgICAgICAgPSB7IHRleHR1cmVGb3JtYXQ6IFJHQiwgICAgICAgICAgICAgY29sb3JSZW5kZXJhYmxlOiBmYWxzZSwgdGV4dHVyZUZpbHRlcmFibGU6IHRydWUsICBieXRlc1BlckVsZW1lbnQ6IFszXSwgICAgICAgIHR5cGU6IFtCWVRFXSwgfTtcbiAgICB0W1IxMUZfRzExRl9CMTBGXSAgICAgPSB7IHRleHR1cmVGb3JtYXQ6IFJHQiwgICAgICAgICAgICAgY29sb3JSZW5kZXJhYmxlOiBmYWxzZSwgdGV4dHVyZUZpbHRlcmFibGU6IHRydWUsICBieXRlc1BlckVsZW1lbnQ6IFsxMiwgNiwgNF0sIHR5cGU6IFtGTE9BVCQxLCBIQUxGX0ZMT0FULCBVTlNJR05FRF9JTlRfMTBGXzExRl8xMUZfUkVWXSwgfTtcbiAgICB0W1JHQjlfRTVdICAgICAgICAgICAgPSB7IHRleHR1cmVGb3JtYXQ6IFJHQiwgICAgICAgICAgICAgY29sb3JSZW5kZXJhYmxlOiBmYWxzZSwgdGV4dHVyZUZpbHRlcmFibGU6IHRydWUsICBieXRlc1BlckVsZW1lbnQ6IFsxMiwgNiwgNF0sIHR5cGU6IFtGTE9BVCQxLCBIQUxGX0ZMT0FULCBVTlNJR05FRF9JTlRfNV85XzlfOV9SRVZdLCB9O1xuICAgIHRbUkdCMTZGXSAgICAgICAgICAgICA9IHsgdGV4dHVyZUZvcm1hdDogUkdCLCAgICAgICAgICAgICBjb2xvclJlbmRlcmFibGU6IGZhbHNlLCB0ZXh0dXJlRmlsdGVyYWJsZTogdHJ1ZSwgIGJ5dGVzUGVyRWxlbWVudDogWzEyLCA2XSwgICAgdHlwZTogW0ZMT0FUJDEsIEhBTEZfRkxPQVRdLCB9O1xuICAgIHRbUkdCMzJGXSAgICAgICAgICAgICA9IHsgdGV4dHVyZUZvcm1hdDogUkdCLCAgICAgICAgICAgICBjb2xvclJlbmRlcmFibGU6IGZhbHNlLCB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsIGJ5dGVzUGVyRWxlbWVudDogWzEyXSwgICAgICAgdHlwZTogW0ZMT0FUJDFdLCB9O1xuICAgIHRbUkdCOFVJXSAgICAgICAgICAgICA9IHsgdGV4dHVyZUZvcm1hdDogUkdCX0lOVEVHRVIsICAgICBjb2xvclJlbmRlcmFibGU6IGZhbHNlLCB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsIGJ5dGVzUGVyRWxlbWVudDogWzNdLCAgICAgICAgdHlwZTogW1VOU0lHTkVEX0JZVEUkMV0sIH07XG4gICAgdFtSR0I4SV0gICAgICAgICAgICAgID0geyB0ZXh0dXJlRm9ybWF0OiBSR0JfSU5URUdFUiwgICAgIGNvbG9yUmVuZGVyYWJsZTogZmFsc2UsIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSwgYnl0ZXNQZXJFbGVtZW50OiBbM10sICAgICAgICB0eXBlOiBbQllURV0sIH07XG4gICAgdFtSR0IxNlVJXSAgICAgICAgICAgID0geyB0ZXh0dXJlRm9ybWF0OiBSR0JfSU5URUdFUiwgICAgIGNvbG9yUmVuZGVyYWJsZTogZmFsc2UsIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSwgYnl0ZXNQZXJFbGVtZW50OiBbNl0sICAgICAgICB0eXBlOiBbVU5TSUdORURfU0hPUlQkMV0sIH07XG4gICAgdFtSR0IxNkldICAgICAgICAgICAgID0geyB0ZXh0dXJlRm9ybWF0OiBSR0JfSU5URUdFUiwgICAgIGNvbG9yUmVuZGVyYWJsZTogZmFsc2UsIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSwgYnl0ZXNQZXJFbGVtZW50OiBbNl0sICAgICAgICB0eXBlOiBbU0hPUlRdLCB9O1xuICAgIHRbUkdCMzJVSV0gICAgICAgICAgICA9IHsgdGV4dHVyZUZvcm1hdDogUkdCX0lOVEVHRVIsICAgICBjb2xvclJlbmRlcmFibGU6IGZhbHNlLCB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsIGJ5dGVzUGVyRWxlbWVudDogWzEyXSwgICAgICAgdHlwZTogW1VOU0lHTkVEX0lOVCQxXSwgfTtcbiAgICB0W1JHQjMySV0gICAgICAgICAgICAgPSB7IHRleHR1cmVGb3JtYXQ6IFJHQl9JTlRFR0VSLCAgICAgY29sb3JSZW5kZXJhYmxlOiBmYWxzZSwgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLCBieXRlc1BlckVsZW1lbnQ6IFsxMl0sICAgICAgIHR5cGU6IFtJTlQkMV0sIH07XG4gICAgdFtSR0JBOF0gICAgICAgICAgICAgID0geyB0ZXh0dXJlRm9ybWF0OiBSR0JBJDEsICAgICAgICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLCAgdGV4dHVyZUZpbHRlcmFibGU6IHRydWUsICBieXRlc1BlckVsZW1lbnQ6IFs0XSwgICAgICAgIHR5cGU6IFtVTlNJR05FRF9CWVRFJDFdLCB9O1xuICAgIHRbU1JHQjhfQUxQSEE4XSAgICAgICA9IHsgdGV4dHVyZUZvcm1hdDogUkdCQSQxLCAgICAgICAgICAgIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSwgIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLCAgYnl0ZXNQZXJFbGVtZW50OiBbNF0sICAgICAgICB0eXBlOiBbVU5TSUdORURfQllURSQxXSwgfTtcbiAgICB0W1JHQkE4X1NOT1JNXSAgICAgICAgPSB7IHRleHR1cmVGb3JtYXQ6IFJHQkEkMSwgICAgICAgICAgICBjb2xvclJlbmRlcmFibGU6IGZhbHNlLCB0ZXh0dXJlRmlsdGVyYWJsZTogdHJ1ZSwgIGJ5dGVzUGVyRWxlbWVudDogWzRdLCAgICAgICAgdHlwZTogW0JZVEVdLCB9O1xuICAgIHRbUkdCNV9BMSQxXSAgICAgICAgICAgID0geyB0ZXh0dXJlRm9ybWF0OiBSR0JBJDEsICAgICAgICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLCAgdGV4dHVyZUZpbHRlcmFibGU6IHRydWUsICBieXRlc1BlckVsZW1lbnQ6IFs0LCAyLCA0XSwgIHR5cGU6IFtVTlNJR05FRF9CWVRFJDEsIFVOU0lHTkVEX1NIT1JUXzVfNV81XzEsIFVOU0lHTkVEX0lOVF8yXzEwXzEwXzEwX1JFVl0sIH07XG4gICAgdFtSR0JBNCQxXSAgICAgICAgICAgICAgPSB7IHRleHR1cmVGb3JtYXQ6IFJHQkEkMSwgICAgICAgICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsICB0ZXh0dXJlRmlsdGVyYWJsZTogdHJ1ZSwgIGJ5dGVzUGVyRWxlbWVudDogWzQsIDJdLCAgICAgdHlwZTogW1VOU0lHTkVEX0JZVEUkMSwgVU5TSUdORURfU0hPUlRfNF80XzRfNF0sIH07XG4gICAgdFtSR0IxMF9BMl0gICAgICAgICAgID0geyB0ZXh0dXJlRm9ybWF0OiBSR0JBJDEsICAgICAgICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLCAgdGV4dHVyZUZpbHRlcmFibGU6IHRydWUsICBieXRlc1BlckVsZW1lbnQ6IFs0XSwgICAgICAgIHR5cGU6IFtVTlNJR05FRF9JTlRfMl8xMF8xMF8xMF9SRVZdLCB9O1xuICAgIHRbUkdCQTE2Rl0gICAgICAgICAgICA9IHsgdGV4dHVyZUZvcm1hdDogUkdCQSQxLCAgICAgICAgICAgIGNvbG9yUmVuZGVyYWJsZTogZmFsc2UsIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLCAgYnl0ZXNQZXJFbGVtZW50OiBbMTYsIDhdLCAgICB0eXBlOiBbRkxPQVQkMSwgSEFMRl9GTE9BVF0sIH07XG4gICAgdFtSR0JBMzJGXSAgICAgICAgICAgID0geyB0ZXh0dXJlRm9ybWF0OiBSR0JBJDEsICAgICAgICAgICAgY29sb3JSZW5kZXJhYmxlOiBmYWxzZSwgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLCBieXRlc1BlckVsZW1lbnQ6IFsxNl0sICAgICAgIHR5cGU6IFtGTE9BVCQxXSwgfTtcbiAgICB0W1JHQkE4VUldICAgICAgICAgICAgPSB7IHRleHR1cmVGb3JtYXQ6IFJHQkFfSU5URUdFUiwgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLCAgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLCBieXRlc1BlckVsZW1lbnQ6IFs0XSwgICAgICAgIHR5cGU6IFtVTlNJR05FRF9CWVRFJDFdLCB9O1xuICAgIHRbUkdCQThJXSAgICAgICAgICAgICA9IHsgdGV4dHVyZUZvcm1hdDogUkdCQV9JTlRFR0VSLCAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsIGJ5dGVzUGVyRWxlbWVudDogWzRdLCAgICAgICAgdHlwZTogW0JZVEVdLCB9O1xuICAgIHRbUkdCMTBfQTJVSV0gICAgICAgICA9IHsgdGV4dHVyZUZvcm1hdDogUkdCQV9JTlRFR0VSLCAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsIGJ5dGVzUGVyRWxlbWVudDogWzRdLCAgICAgICAgdHlwZTogW1VOU0lHTkVEX0lOVF8yXzEwXzEwXzEwX1JFVl0sIH07XG4gICAgdFtSR0JBMTZVSV0gICAgICAgICAgID0geyB0ZXh0dXJlRm9ybWF0OiBSR0JBX0lOVEVHRVIsICAgIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSwgIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSwgYnl0ZXNQZXJFbGVtZW50OiBbOF0sICAgICAgICB0eXBlOiBbVU5TSUdORURfU0hPUlQkMV0sIH07XG4gICAgdFtSR0JBMTZJXSAgICAgICAgICAgID0geyB0ZXh0dXJlRm9ybWF0OiBSR0JBX0lOVEVHRVIsICAgIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSwgIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSwgYnl0ZXNQZXJFbGVtZW50OiBbOF0sICAgICAgICB0eXBlOiBbU0hPUlRdLCB9O1xuICAgIHRbUkdCQTMySV0gICAgICAgICAgICA9IHsgdGV4dHVyZUZvcm1hdDogUkdCQV9JTlRFR0VSLCAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsIGJ5dGVzUGVyRWxlbWVudDogWzE2XSwgICAgICAgdHlwZTogW0lOVCQxXSwgfTtcbiAgICB0W1JHQkEzMlVJXSAgICAgICAgICAgPSB7IHRleHR1cmVGb3JtYXQ6IFJHQkFfSU5URUdFUiwgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLCAgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLCBieXRlc1BlckVsZW1lbnQ6IFsxNl0sICAgICAgIHR5cGU6IFtVTlNJR05FRF9JTlQkMV0sIH07XG4gICAgLy8gU2l6ZWQgSW50ZXJuYWxcbiAgICB0W0RFUFRIX0NPTVBPTkVOVDE2JDFdICA9IHsgdGV4dHVyZUZvcm1hdDogREVQVEhfQ09NUE9ORU5UJDEsIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSwgIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSwgYnl0ZXNQZXJFbGVtZW50OiBbMiwgNF0sICAgICB0eXBlOiBbVU5TSUdORURfU0hPUlQkMSwgVU5TSUdORURfSU5UJDFdLCB9O1xuICAgIHRbREVQVEhfQ09NUE9ORU5UMjQkMV0gID0geyB0ZXh0dXJlRm9ybWF0OiBERVBUSF9DT01QT05FTlQkMSwgY29sb3JSZW5kZXJhYmxlOiB0cnVlLCAgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLCBieXRlc1BlckVsZW1lbnQ6IFs0XSwgICAgICAgIHR5cGU6IFtVTlNJR05FRF9JTlQkMV0sIH07XG4gICAgdFtERVBUSF9DT01QT05FTlQzMkYkMV0gPSB7IHRleHR1cmVGb3JtYXQ6IERFUFRIX0NPTVBPTkVOVCQxLCBjb2xvclJlbmRlcmFibGU6IHRydWUsICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsIGJ5dGVzUGVyRWxlbWVudDogWzRdLCAgICAgICAgdHlwZTogW0ZMT0FUJDFdLCB9O1xuICAgIHRbREVQVEgyNF9TVEVOQ0lMOCQxXSAgID0geyB0ZXh0dXJlRm9ybWF0OiBERVBUSF9TVEVOQ0lMJDEsICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLCAgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLCBieXRlc1BlckVsZW1lbnQ6IFs0XSwgICAgICAgIHR5cGU6IFtVTlNJR05FRF9JTlRfMjRfOF0sIH07XG4gICAgdFtERVBUSDMyRl9TVEVOQ0lMOCQxXSAgPSB7IHRleHR1cmVGb3JtYXQ6IERFUFRIX1NURU5DSUwkMSwgICBjb2xvclJlbmRlcmFibGU6IHRydWUsICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsIGJ5dGVzUGVyRWxlbWVudDogWzRdLCAgICAgICAgdHlwZTogW0ZMT0FUXzMyX1VOU0lHTkVEX0lOVF8yNF84X1JFVl0sIH07XG5cbiAgICBPYmplY3Qua2V5cyh0KS5mb3JFYWNoKGZ1bmN0aW9uKGludGVybmFsRm9ybWF0KSB7XG4gICAgICBjb25zdCBpbmZvID0gdFtpbnRlcm5hbEZvcm1hdF07XG4gICAgICBpbmZvLmJ5dGVzUGVyRWxlbWVudE1hcCA9IHt9O1xuICAgICAgaW5mby5ieXRlc1BlckVsZW1lbnQuZm9yRWFjaChmdW5jdGlvbihieXRlc1BlckVsZW1lbnQsIG5keCkge1xuICAgICAgICBjb25zdCB0eXBlID0gaW5mby50eXBlW25keF07XG4gICAgICAgIGluZm8uYnl0ZXNQZXJFbGVtZW50TWFwW3R5cGVdID0gYnl0ZXNQZXJFbGVtZW50O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgc190ZXh0dXJlSW50ZXJuYWxGb3JtYXRJbmZvID0gdDtcbiAgfVxuICByZXR1cm4gc190ZXh0dXJlSW50ZXJuYWxGb3JtYXRJbmZvW2ludGVybmFsRm9ybWF0XTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBudW1iZXIgb2YgYnl0ZXMgcGVyIGVsZW1lbnQgZm9yIGEgZ2l2ZW4gaW50ZXJuYWxGb3JtYXQgLyB0eXBlXG4gKiBAcGFyYW0ge251bWJlcn0gaW50ZXJuYWxGb3JtYXQgVGhlIGludGVybmFsRm9ybWF0IHBhcmFtZXRlciBmcm9tIHRleEltYWdlMkQgZXRjLi5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlIFRoZSB0eXBlIHBhcmFtZXRlciBmb3IgdGV4SW1hZ2UyRCBldGMuLlxuICogQHJldHVybiB7bnVtYmVyfSB0aGUgbnVtYmVyIG9mIGJ5dGVzIHBlciBlbGVtZW50IGZvciB0aGUgZ2l2ZW4gaW50ZXJuYWxGb3JtYXQsIHR5cGUgY29tYm9cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC90ZXh0dXJlc1xuICovXG5mdW5jdGlvbiBnZXRCeXRlc1BlckVsZW1lbnRGb3JJbnRlcm5hbEZvcm1hdChpbnRlcm5hbEZvcm1hdCwgdHlwZSkge1xuICBjb25zdCBpbmZvID0gZ2V0VGV4dHVyZUludGVybmFsRm9ybWF0SW5mbyhpbnRlcm5hbEZvcm1hdCk7XG4gIGlmICghaW5mbykge1xuICAgIHRocm93IFwidW5rbm93biBpbnRlcm5hbCBmb3JtYXRcIjtcbiAgfVxuICBjb25zdCBieXRlc1BlckVsZW1lbnQgPSBpbmZvLmJ5dGVzUGVyRWxlbWVudE1hcFt0eXBlXTtcbiAgaWYgKGJ5dGVzUGVyRWxlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgXCJ1bmtub3duIGludGVybmFsIGZvcm1hdFwiO1xuICB9XG4gIHJldHVybiBieXRlc1BlckVsZW1lbnQ7XG59XG5cbi8qKlxuICogSW5mbyByZWxhdGVkIHRvIGEgc3BlY2lmaWMgdGV4dHVyZSBpbnRlcm5hbEZvcm1hdCBhcyByZXR1cm5lZFxuICogZnJvbSB7QGxpbmsgbW9kdWxlOnR3Z2wvdGV4dHVyZXMuZ2V0Rm9ybWF0QW5kVHlwZUZvckludGVybmFsRm9ybWF0fS5cbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBUZXh0dXJlRm9ybWF0SW5mb1xuICogQHByb3BlcnR5IHtudW1iZXJ9IGZvcm1hdCBGb3JtYXQgdG8gcGFzcyB0byB0ZXhJbWFnZTJEIGFuZCByZWxhdGVkIGZ1bmN0aW9uc1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHR5cGUgVHlwZSB0byBwYXNzIHRvIHRleEltYWdlMkQgYW5kIHJlbGF0ZWQgZnVuY3Rpb25zXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdGV4dHVyZXNcbiAqL1xuXG4vKipcbiAqIEdldHMgdGhlIGZvcm1hdCBhbmQgdHlwZSBmb3IgYSBnaXZlbiBpbnRlcm5hbEZvcm1hdFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbnRlcm5hbEZvcm1hdCBUaGUgaW50ZXJuYWwgZm9ybWF0XG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC90ZXh0dXJlcy5UZXh0dXJlRm9ybWF0SW5mb30gdGhlIGNvcnJlc3BvbmRpbmcgZm9ybWF0IGFuZCB0eXBlLFxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3RleHR1cmVzXG4gKi9cbmZ1bmN0aW9uIGdldEZvcm1hdEFuZFR5cGVGb3JJbnRlcm5hbEZvcm1hdChpbnRlcm5hbEZvcm1hdCkge1xuICBjb25zdCBpbmZvID0gZ2V0VGV4dHVyZUludGVybmFsRm9ybWF0SW5mbyhpbnRlcm5hbEZvcm1hdCk7XG4gIGlmICghaW5mbykge1xuICAgIHRocm93IFwidW5rbm93biBpbnRlcm5hbCBmb3JtYXRcIjtcbiAgfVxuICByZXR1cm4ge1xuICAgIGZvcm1hdDogaW5mby50ZXh0dXJlRm9ybWF0LFxuICAgIHR5cGU6IGluZm8udHlwZVswXSxcbiAgfTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdmFsdWUgaXMgcG93ZXIgb2YgMlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIG51bWJlciB0byBjaGVjay5cbiAqIEByZXR1cm4gdHJ1ZSBpZiB2YWx1ZSBpcyBwb3dlciBvZiAyXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc1Bvd2VyT2YyKHZhbHVlKSB7XG4gIHJldHVybiAodmFsdWUgJiAodmFsdWUgLSAxKSkgPT09IDA7XG59XG5cbi8qKlxuICogR2V0cyB3aGV0aGVyIG9yIG5vdCB3ZSBjYW4gZ2VuZXJhdGUgbWlwcyBmb3IgdGhlIGdpdmVuXG4gKiBpbnRlcm5hbCBmb3JtYXQuXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBUaGUgd2lkdGggcGFyYW1ldGVyIGZyb20gdGV4SW1hZ2UyRCBldGMuLlxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBUaGUgaGVpZ2h0IHBhcmFtZXRlciBmcm9tIHRleEltYWdlMkQgZXRjLi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbnRlcm5hbEZvcm1hdCBUaGUgaW50ZXJuYWxGb3JtYXQgcGFyYW1ldGVyIGZyb20gdGV4SW1hZ2UyRCBldGMuLlxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB3ZSBjYW4gZ2VuZXJhdGUgbWlwc1xuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3RleHR1cmVzXG4gKi9cbmZ1bmN0aW9uIGNhbkdlbmVyYXRlTWlwbWFwKGdsLCB3aWR0aCwgaGVpZ2h0LCBpbnRlcm5hbEZvcm1hdCkge1xuICBpZiAoIWlzV2ViR0wyKGdsKSkge1xuICAgIHJldHVybiBpc1Bvd2VyT2YyKHdpZHRoKSAmJiBpc1Bvd2VyT2YyKGhlaWdodCk7XG4gIH1cbiAgY29uc3QgaW5mbyA9IGdldFRleHR1cmVJbnRlcm5hbEZvcm1hdEluZm8oaW50ZXJuYWxGb3JtYXQpO1xuICBpZiAoIWluZm8pIHtcbiAgICB0aHJvdyBcInVua25vd24gaW50ZXJuYWwgZm9ybWF0XCI7XG4gIH1cbiAgcmV0dXJuIGluZm8uY29sb3JSZW5kZXJhYmxlICYmIGluZm8udGV4dHVyZUZpbHRlcmFibGU7XG59XG5cbi8qKlxuICogR2V0cyB3aGV0aGVyIG9yIG5vdCB3ZSBjYW4gZ2VuZXJhdGUgbWlwcyBmb3IgdGhlIGdpdmVuIGZvcm1hdFxuICogQHBhcmFtIHtudW1iZXJ9IGludGVybmFsRm9ybWF0IFRoZSBpbnRlcm5hbEZvcm1hdCBwYXJhbWV0ZXIgZnJvbSB0ZXhJbWFnZTJEIGV0Yy4uXG4gKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHdlIGNhbiBnZW5lcmF0ZSBtaXBzXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdGV4dHVyZXNcbiAqL1xuZnVuY3Rpb24gY2FuRmlsdGVyKGludGVybmFsRm9ybWF0KSB7XG4gIGNvbnN0IGluZm8gPSBnZXRUZXh0dXJlSW50ZXJuYWxGb3JtYXRJbmZvKGludGVybmFsRm9ybWF0KTtcbiAgaWYgKCFpbmZvKSB7XG4gICAgdGhyb3cgXCJ1bmtub3duIGludGVybmFsIGZvcm1hdFwiO1xuICB9XG4gIHJldHVybiBpbmZvLnRleHR1cmVGaWx0ZXJhYmxlO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIG51bWJlciBvZiBjb21wb25lbnRzIGZvciBhIGdpdmVuIGltYWdlIGZvcm1hdC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmb3JtYXQgdGhlIGZvcm1hdC5cbiAqIEByZXR1cm4ge251bWJlcn0gdGhlIG51bWJlciBvZiBjb21wb25lbnRzIGZvciB0aGUgZm9ybWF0LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3RleHR1cmVzXG4gKi9cbmZ1bmN0aW9uIGdldE51bUNvbXBvbmVudHNGb3JGb3JtYXQoZm9ybWF0KSB7XG4gIGNvbnN0IGluZm8gPSBmb3JtYXRJbmZvW2Zvcm1hdF07XG4gIGlmICghaW5mbykge1xuICAgIHRocm93IFwidW5rbm93biBmb3JtYXQ6IFwiICsgZm9ybWF0O1xuICB9XG4gIHJldHVybiBpbmZvLm51bUNvbG9yQ29tcG9uZW50cztcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSB0ZXh0dXJlIHR5cGUgZm9yIGEgZ2l2ZW4gYXJyYXkgdHlwZS5cbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBnbCB0ZXh0dXJlIHR5cGVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFRleHR1cmVUeXBlRm9yQXJyYXlUeXBlKGdsLCBzcmMsIGRlZmF1bHRUeXBlKSB7XG4gIGlmIChpc0FycmF5QnVmZmVyKHNyYykpIHtcbiAgICByZXR1cm4gZ2V0R0xUeXBlRm9yVHlwZWRBcnJheShzcmMpO1xuICB9XG4gIHJldHVybiBkZWZhdWx0VHlwZSB8fCBVTlNJR05FRF9CWVRFJDE7XG59XG5cbmZ1bmN0aW9uIGd1ZXNzRGltZW5zaW9ucyhnbCwgdGFyZ2V0LCB3aWR0aCwgaGVpZ2h0LCBudW1FbGVtZW50cykge1xuICBpZiAobnVtRWxlbWVudHMgJSAxICE9PSAwKSB7XG4gICAgdGhyb3cgXCJjYW4ndCBndWVzcyBkaW1lbnNpb25zXCI7XG4gIH1cbiAgaWYgKCF3aWR0aCAmJiAhaGVpZ2h0KSB7XG4gICAgY29uc3Qgc2l6ZSA9IE1hdGguc3FydChudW1FbGVtZW50cyAvICh0YXJnZXQgPT09IFRFWFRVUkVfQ1VCRV9NQVAkMSA/IDYgOiAxKSk7XG4gICAgaWYgKHNpemUgJSAxID09PSAwKSB7XG4gICAgICB3aWR0aCA9IHNpemU7XG4gICAgICBoZWlnaHQgPSBzaXplO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aWR0aCA9IG51bUVsZW1lbnRzO1xuICAgICAgaGVpZ2h0ID0gMTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoIWhlaWdodCkge1xuICAgIGhlaWdodCA9IG51bUVsZW1lbnRzIC8gd2lkdGg7XG4gICAgaWYgKGhlaWdodCAlIDEpIHtcbiAgICAgIHRocm93IFwiY2FuJ3QgZ3Vlc3MgZGltZW5zaW9uc1wiO1xuICAgIH1cbiAgfSBlbHNlIGlmICghd2lkdGgpIHtcbiAgICB3aWR0aCA9IG51bUVsZW1lbnRzIC8gaGVpZ2h0O1xuICAgIGlmICh3aWR0aCAlIDEpIHtcbiAgICAgIHRocm93IFwiY2FuJ3QgZ3Vlc3MgZGltZW5zaW9uc1wiO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgfTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBkZWZhdWx0IHRleHR1cmUgY29sb3IuXG4gKlxuICogVGhlIGRlZmF1bHQgdGV4dHVyZSBjb2xvciBpcyB1c2VkIHdoZW4gbG9hZGluZyB0ZXh0dXJlcyBmcm9tXG4gKiB1cmxzLiBCZWNhdXNlIHRoZSBVUkwgd2lsbCBiZSBsb2FkZWQgYXN5bmMgd2UnZCBsaWtlIHRvIGJlXG4gKiBhYmxlIHRvIHVzZSB0aGUgdGV4dHVyZSBpbW1lZGlhdGVseS4gQnkgcHV0dGluZyBhIDF4MSBwaXhlbFxuICogY29sb3IgaW4gdGhlIHRleHR1cmUgd2UgY2FuIHN0YXJ0IHVzaW5nIHRoZSB0ZXh0dXJlIGJlZm9yZVxuICogdGhlIFVSTCBoYXMgbG9hZGVkLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyW119IGNvbG9yIEFycmF5IG9mIDQgdmFsdWVzIGluIHRoZSByYW5nZSAwIHRvIDFcbiAqIEBkZXByZWNhdGVkIHNlZSB7QGxpbmsgbW9kdWxlOnR3Z2wuc2V0RGVmYXVsdHN9XG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdGV4dHVyZXNcbiAqL1xuZnVuY3Rpb24gc2V0RGVmYXVsdFRleHR1cmVDb2xvcihjb2xvcikge1xuICBkZWZhdWx0cyQxLnRleHR1cmVDb2xvciA9IG5ldyBVaW50OEFycmF5KFtjb2xvclswXSAqIDI1NSwgY29sb3JbMV0gKiAyNTUsIGNvbG9yWzJdICogMjU1LCBjb2xvclszXSAqIDI1NV0pO1xufVxuXG5mdW5jdGlvbiBzZXREZWZhdWx0cyQxKG5ld0RlZmF1bHRzKSB7XG4gIGNvcHlFeGlzdGluZ1Byb3BlcnRpZXMobmV3RGVmYXVsdHMsIGRlZmF1bHRzJDEpO1xuICBpZiAobmV3RGVmYXVsdHMudGV4dHVyZUNvbG9yKSB7XG4gICAgc2V0RGVmYXVsdFRleHR1cmVDb2xvcihuZXdEZWZhdWx0cy50ZXh0dXJlQ29sb3IpO1xuICB9XG59XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0byBnZW5lcmF0ZSB0aGUgc291cmNlIGZvciBhIHRleHR1cmUuXG4gKiBAY2FsbGJhY2sgVGV4dHVyZUZ1bmNcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBBIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5UZXh0dXJlT3B0aW9uc30gb3B0aW9ucyB0aGUgdGV4dHVyZSBvcHRpb25zXG4gKiBAcmV0dXJuIHsqfSBSZXR1cm5zIGFueSBvZiB0aGUgdGhpbmdzIGRvY3VtZW50ZWQgZm9yIGBzcmNgIGZvciB7QGxpbmsgbW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuLyoqXG4gKiBUZXh0dXJlIG9wdGlvbnMgcGFzc2VkIHRvIG1vc3QgdGV4dHVyZSBmdW5jdGlvbnMuIEVhY2ggZnVuY3Rpb24gd2lsbCB1c2Ugd2hhdGV2ZXIgb3B0aW9uc1xuICogYXJlIGFwcHJvcHJpYXRlIGZvciBpdHMgbmVlZHMuIFRoaXMgbGV0cyB5b3UgcGFzcyB0aGUgc2FtZSBvcHRpb25zIHRvIGFsbCBmdW5jdGlvbnMuXG4gKlxuICogTm90ZTogQSBgVGV4SW1hZ2VTb3VyY2VgIGlzIGRlZmluZWQgaW4gdGhlIFdlYkdMIHNwZWMgYXMgYSBgSFRNTEltYWdlRWxlbWVudGAsIGBIVE1MVmlkZW9FbGVtZW50YCxcbiAqIGBIVE1MQ2FudmFzRWxlbWVudGAsIGBJbWFnZUJpdG1hcGAsIG9yIGBJbWFnZURhdGFgLlxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFRleHR1cmVPcHRpb25zXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3RhcmdldF0gdGhlIHR5cGUgb2YgdGV4dHVyZSBgZ2wuVEVYVFVSRV8yRGAgb3IgYGdsLlRFWFRVUkVfQ1VCRV9NQVBgLiBEZWZhdWx0cyB0byBgZ2wuVEVYVFVSRV8yRGAuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2xldmVsXSB0aGUgbWlwIGxldmVsIHRvIGFmZmVjdC4gRGVmYXVsdHMgdG8gMC4gTm90ZSwgaWYgc2V0IGF1dG8gd2lsbCBiZSBjb25zaWRlcmVkIGZhbHNlIHVubGVzcyBleHBsaWNpdGx5IHNldCB0byB0cnVlLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFt3aWR0aF0gdGhlIHdpZHRoIG9mIHRoZSB0ZXh0dXJlLiBPbmx5IHVzZWQgaWYgc3JjIGlzIGFuIGFycmF5IG9yIHR5cGVkIGFycmF5IG9yIG51bGwuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2hlaWdodF0gdGhlIGhlaWdodCBvZiBhIHRleHR1cmUuIE9ubHkgdXNlZCBpZiBzcmMgaXMgYW4gYXJyYXkgb3IgdHlwZWQgYXJyYXkgb3IgbnVsbC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbZGVwdGhdIHRoZSBkZXB0aCBvZiBhIHRleHR1cmUuIE9ubHkgdXNlZCBpZiBzcmMgaXMgYW4gYXJyYXkgb3IgdHlwZSBhcnJheSBvciBudWxsIGFuZCB0YXJnZXQgaXMgYFRFWFRVUkVfM0RgIC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbbWluXSB0aGUgbWluIGZpbHRlciBzZXR0aW5nIChlZy4gYGdsLkxJTkVBUmApLiBEZWZhdWx0cyB0byBgZ2wuTkVBUkVTVF9NSVBNQVBfTElORUFSYFxuICogICAgIG9yIGlmIHRleHR1cmUgaXMgbm90IGEgcG93ZXIgb2YgMiBvbiBib3RoIGRpbWVuc2lvbnMgdGhlbiBkZWZhdWx0cyB0byBgZ2wuTElORUFSYC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbbWFnXSB0aGUgbWFnIGZpbHRlciBzZXR0aW5nIChlZy4gYGdsLkxJTkVBUmApLiBEZWZhdWx0cyB0byBgZ2wuTElORUFSYFxuICogQHByb3BlcnR5IHtudW1iZXJ9IFttaW5NYWddIGJvdGggdGhlIG1pbiBhbmQgbWFnIGZpbHRlciBzZXR0aW5ncy5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbaW50ZXJuYWxGb3JtYXRdIGludGVybmFsIGZvcm1hdCBmb3IgdGV4dHVyZS4gRGVmYXVsdHMgdG8gYGdsLlJHQkFgXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2Zvcm1hdF0gZm9ybWF0IGZvciB0ZXh0dXJlLiBEZWZhdWx0cyB0byBgZ2wuUkdCQWAuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3R5cGVdIHR5cGUgZm9yIHRleHR1cmUuIERlZmF1bHRzIHRvIGBnbC5VTlNJR05FRF9CWVRFYCB1bmxlc3MgYHNyY2AgaXMgQXJyYXlCdWZmZXJWaWV3LiBJZiBgc3JjYFxuICogICAgIGlzIEFycmF5QnVmZmVyVmlldyBkZWZhdWx0cyB0byB0eXBlIHRoYXQgbWF0Y2hlcyBBcnJheUJ1ZmZlclZpZXcgdHlwZS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbd3JhcF0gVGV4dHVyZSB3cmFwcGluZyBmb3IgYm90aCBTIGFuZCBUIChhbmQgUiBpZiBURVhUVVJFXzNEIG9yIFdlYkdMU2FtcGxlcikuIERlZmF1bHRzIHRvIGBnbC5SRVBFQVRgIGZvciAyRCB1bmxlc3Mgc3JjIGlzIFdlYkdMMSBhbmQgc3JjIG5vdCBucG90IGFuZCBgZ2wuQ0xBTVBfVE9fRURHRWAgZm9yIGN1YmVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbd3JhcFNdIFRleHR1cmUgd3JhcHBpbmcgZm9yIFMuIERlZmF1bHRzIHRvIGBnbC5SRVBFQVRgIGFuZCBgZ2wuQ0xBTVBfVE9fRURHRWAgZm9yIGN1YmUuIElmIHNldCB0YWtlcyBwcmVjZWRlbmNlIG92ZXIgYHdyYXBgLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFt3cmFwVF0gVGV4dHVyZSB3cmFwcGluZyBmb3IgVC4gRGVmYXVsdHMgdG8gYGdsLlJFUEVBVGAgYW5kIGBnbC5DTEFNUF9UT19FREdFYCBmb3IgY3ViZS4gSWYgc2V0IHRha2VzIHByZWNlZGVuY2Ugb3ZlciBgd3JhcGAuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3dyYXBSXSBUZXh0dXJlIHdyYXBwaW5nIGZvciBSLiBEZWZhdWx0cyB0byBgZ2wuUkVQRUFUYCBhbmQgYGdsLkNMQU1QX1RPX0VER0VgIGZvciBjdWJlLiBJZiBzZXQgdGFrZXMgcHJlY2VkZW5jZSBvdmVyIGB3cmFwYC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbbWluTG9kXSBURVhUVVJFX01JTl9MT0Qgc2V0dGluZ1xuICogQHByb3BlcnR5IHtudW1iZXJ9IFttYXhMb2RdIFRFWFRVUkVfTUFYX0xPRCBzZXR0aW5nXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2Jhc2VMZXZlbF0gVEVYVFVSRV9CQVNFX0xFVkVMIHNldHRpbmdcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbbWF4TGV2ZWxdIFRFWFRVUkVfTUFYX0xFVkVMIHNldHRpbmdcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbY29tcGFyZUZ1bmNdIFRFWFRVUkVfQ09NUEFSRV9GVU5DIHNldHRpbmdcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbY29tcGFyZU1vZGVdIFRFWFRVUkVfQ09NUEFSRV9NT0RFIHNldHRpbmdcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbdW5wYWNrQWxpZ25tZW50XSBUaGUgYGdsLlVOUEFDS19BTElHTk1FTlRgIHVzZWQgd2hlbiB1cGxvYWRpbmcgYW4gYXJyYXkuIERlZmF1bHRzIHRvIDEuXG4gKiBAcHJvcGVydHkge251bWJlcltdfEFycmF5QnVmZmVyVmlld30gW2NvbG9yXSBDb2xvciB0byBpbml0aWFsaXplIHRoaXMgdGV4dHVyZSB3aXRoIGlmIGxvYWRpbmcgYW4gaW1hZ2UgYXN5bmNocm9ub3VzbHkuXG4gKiAgICAgVGhlIGRlZmF1bHQgdXNlIGEgYmx1ZSAxeDEgcGl4ZWwgdGV4dHVyZS4gWW91IGNhbiBzZXQgYW5vdGhlciBkZWZhdWx0IGJ5IGNhbGxpbmcgYHR3Z2wuc2V0RGVmYXVsdHNgXG4gKiAgICAgb3IgeW91IGNhbiBzZXQgYW4gaW5kaXZpZHVhbCB0ZXh0dXJlJ3MgaW5pdGlhbCBjb2xvciBieSBzZXR0aW5nIHRoaXMgcHJvcGVydHkuIEV4YW1wbGU6IGBbMSwgLjUsIC41LCAxXWAgPSBwaW5rXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3ByZW11bHRpcGx5QWxwaGFdIFdoZXRoZXIgb3Igbm90IHRvIHByZW11bHRpcGx5IGFscGhhLiBEZWZhdWx0cyB0byB3aGF0ZXZlciB0aGUgY3VycmVudCBzZXR0aW5nIGlzLlxuICogICAgIFRoaXMgbGV0cyB5b3Ugc2V0IGl0IG9uY2UgYmVmb3JlIGNhbGxpbmcgYHR3Z2wuY3JlYXRlVGV4dHVyZWAgb3IgYHR3Z2wuY3JlYXRlVGV4dHVyZXNgIGFuZCBvbmx5IG92ZXJyaWRlXG4gKiAgICAgdGhlIGN1cnJlbnQgc2V0dGluZyBmb3Igc3BlY2lmaWMgdGV4dHVyZXMuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2ZsaXBZXSBXaGV0aGVyIG9yIG5vdCB0byBmbGlwIHRoZSB0ZXh0dXJlIHZlcnRpY2FsbHkgb24gdXBsb2FkLiBEZWZhdWx0cyB0byB3aGF0ZXZlciB0aGUgY3VycmVudCBzZXR0aW5nIGlzLlxuICogICAgIFRoaXMgbGV0cyB5b3Ugc2V0IGl0IG9uY2UgYmVmb3JlIGNhbGxpbmcgYHR3Z2wuY3JlYXRlVGV4dHVyZWAgb3IgYHR3Z2wuY3JlYXRlVGV4dHVyZXNgIGFuZCBvbmx5IG92ZXJyaWRlXG4gKiAgICAgdGhlIGN1cnJlbnQgc2V0dGluZyBmb3Igc3BlY2lmaWMgdGV4dHVyZXMuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2NvbG9yc3BhY2VDb252ZXJzaW9uXSBXaGV0aGVyIG9yIG5vdCB0byBsZXQgdGhlIGJyb3dzZXIgZG8gY29sb3JzcGFjZSBjb252ZXJzaW9uIG9mIHRoZSB0ZXh0dXJlIG9uIHVwbG9hZC4gRGVmYXVsdHMgdG8gd2hhdGV2ZXIgdGhlIGN1cnJlbnQgc2V0dGluZyBpcy5cbiAqICAgICBUaGlzIGxldHMgeW91IHNldCBpdCBvbmNlIGJlZm9yZSBjYWxsaW5nIGB0d2dsLmNyZWF0ZVRleHR1cmVgIG9yIGB0d2dsLmNyZWF0ZVRleHR1cmVzYCBhbmQgb25seSBvdmVycmlkZVxuICogICAgIHRoZSBjdXJyZW50IHNldHRpbmcgZm9yIHNwZWNpZmljIHRleHR1cmVzLlxuICogQHByb3BlcnR5IHtib29sZWFufSBbYXV0b10gSWYgYHVuZGVmaW5lZGAgb3IgYHRydWVgLCBpbiBXZWJHTDEsIHRleHR1cmUgZmlsdGVyaW5nIGlzIHNldCBhdXRvbWF0aWNhbGx5IGZvciBub24tcG93ZXIgb2YgMiBpbWFnZXMgYW5kXG4gKiAgICBtaXBzIGFyZSBnZW5lcmF0ZWQgZm9yIHBvd2VyIG9mIDIgaW1hZ2VzLiBJbiBXZWJHTDIgbWlwcyBhcmUgZ2VuZXJhdGVkIGlmIHRoZXkgY2FuIGJlLiBOb3RlOiBpZiBgbGV2ZWxgIGlzIHNldCBhYm92ZVxuICogICAgdGhlbiB0aGVuIGBhdXRvYCBpcyBhc3N1bWVkIHRvIGJlIGBmYWxzZWAgdW5sZXNzIGV4cGxpY2l0eSBzZXQgdG8gYHRydWVgLlxuICogQHByb3BlcnR5IHtudW1iZXJbXX0gW2N1YmVGYWNlT3JkZXJdIFRoZSBvcmRlciB0aGF0IGN1YmUgZmFjZXMgYXJlIHB1bGxlZCBvdXQgb2YgYW4gaW1nIG9yIHNldCBvZiBpbWFnZXMuIFRoZSBkZWZhdWx0IGlzXG4gKlxuICogICAgIFtnbC5URVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1gsXG4gKiAgICAgIGdsLlRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWCxcbiAqICAgICAgZ2wuVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9ZLFxuICogICAgICBnbC5URVhUVVJFX0NVQkVfTUFQX05FR0FUSVZFX1ksXG4gKiAgICAgIGdsLlRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWixcbiAqICAgICAgZ2wuVEVYVFVSRV9DVUJFX01BUF9ORUdBVElWRV9aXVxuICpcbiAqIEBwcm9wZXJ0eSB7KG51bWJlcltdfEFycmF5QnVmZmVyVmlld3xUZXhJbWFnZVNvdXJjZXxUZXhJbWFnZVNvdXJjZVtdfHN0cmluZ3xzdHJpbmdbXXxtb2R1bGU6dHdnbC5UZXh0dXJlRnVuYyl9IFtzcmNdIHNvdXJjZSBmb3IgdGV4dHVyZVxuICpcbiAqICAgIElmIGBzdHJpbmdgIHRoZW4gaXQncyBhc3N1bWVkIHRvIGJlIGEgVVJMIHRvIGFuIGltYWdlLiBUaGUgaW1hZ2Ugd2lsbCBiZSBkb3dubG9hZGVkIGFzeW5jLiBBIHVzYWJsZVxuICogICAgMXgxIHBpeGVsIHRleHR1cmUgd2lsbCBiZSByZXR1cm5lZCBpbW1lZGlhdGVseS4gVGhlIHRleHR1cmUgd2lsbCBiZSB1cGRhdGVkIG9uY2UgdGhlIGltYWdlIGhhcyBkb3dubG9hZGVkLlxuICogICAgSWYgYHRhcmdldGAgaXMgYGdsLlRFWFRVUkVfQ1VCRV9NQVBgIHdpbGwgYXR0ZW1wdCB0byBkaXZpZGUgaW1hZ2UgaW50byA2IHNxdWFyZSBwaWVjZXMuIDF4NiwgNngxLCAzeDIsIDJ4My5cbiAqICAgIFRoZSBwaWVjZXMgd2lsbCBiZSB1cGxvYWRlZCBpbiBgY3ViZUZhY2VPcmRlcmBcbiAqXG4gKiAgICBJZiBgc3RyaW5nW11gIG9yIGBUZXhJbWFnZVNvdXJjZVtdYCBhbmQgdGFyZ2V0IGlzIGBnbC5URVhUVVJFX0NVQkVfTUFQYCB0aGVuIGl0IG11c3QgaGF2ZSA2IGVudHJpZXMsIG9uZSBmb3IgZWFjaCBmYWNlIG9mIGEgY3ViZSBtYXAuXG4gKlxuICogICAgSWYgYHN0cmluZ1tdYCBvciBgVGV4SW1hZ2VTb3VyY2VbXWAgYW5kIHRhcmdldCBpcyBgZ2wuVEVYVFVSRV8yRF9BUlJBWWAgdGhlbiBlYWNoIGVudHJ5IGlzIGEgc2xpY2Ugb2YgdGhlIGEgMmQgYXJyYXkgdGV4dHVyZVxuICogICAgYW5kIHdpbGwgYmUgc2NhbGVkIHRvIHRoZSBzcGVjaWZpZWQgd2lkdGggYW5kIGhlaWdodCBPUiB0byB0aGUgc2l6ZSBvZiB0aGUgZmlyc3QgaW1hZ2UgdGhhdCBsb2Fkcy5cbiAqXG4gKiAgICBJZiBgVGV4SW1hZ2VTb3VyY2VgIHRoZW4gaXQgd2lsIGJlIHVzZWQgaW1tZWRpYXRlbHkgdG8gY3JlYXRlIHRoZSBjb250ZW50cyBvZiB0aGUgdGV4dHVyZS4gRXhhbXBsZXMgYEhUTUxJbWFnZUVsZW1lbnRgLFxuICogICAgYEhUTUxDYW52YXNFbGVtZW50YCwgYEhUTUxWaWRlb0VsZW1lbnRgLlxuICpcbiAqICAgIElmIGBudW1iZXJbXWAgb3IgYEFycmF5QnVmZmVyVmlld2AgaXQncyBhc3N1bWVkIHRvIGJlIGRhdGEgZm9yIGEgdGV4dHVyZS4gSWYgYHdpZHRoYCBvciBgaGVpZ2h0YCBpc1xuICogICAgbm90IHNwZWNpZmllZCBpdCBpcyBndWVzc2VkIGFzIGZvbGxvd3MuIEZpcnN0IHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaXMgY29tcHV0ZWQgYnkgYHNyYy5sZW5ndGggLyBudW1Db21wb25lbnRzYFxuICogICAgd2hlcmUgYG51bUNvbXBvbmVudHNgIGlzIGRlcml2ZWQgZnJvbSBgZm9ybWF0YC4gSWYgYHRhcmdldGAgaXMgYGdsLlRFWFRVUkVfQ1VCRV9NQVBgIHRoZW4gYG51bUVsZW1lbnRzYCBpcyBkaXZpZGVkXG4gKiAgICBieSA2LiBUaGVuXG4gKlxuICogICAgKiAgIElmIG5laXRoZXIgYHdpZHRoYCBub3IgYGhlaWdodGAgYXJlIHNwZWNpZmllZCBhbmQgYHNxcnQobnVtRWxlbWVudHMpYCBpcyBhbiBpbnRlZ2VyIHRoZW4gd2lkdGggYW5kIGhlaWdodFxuICogICAgICAgIGFyZSBzZXQgdG8gYHNxcnQobnVtRWxlbWVudHMpYC4gT3RoZXJ3aXNlIGB3aWR0aCA9IG51bUVsZW1lbnRzYCBhbmQgYGhlaWdodCA9IDFgLlxuICpcbiAqICAgICogICBJZiBvbmx5IG9uZSBvZiBgd2lkdGhgIG9yIGBoZWlnaHRgIGlzIHNwZWNpZmllZCB0aGVuIHRoZSBvdGhlciBlcXVhbHMgYG51bUVsZW1lbnRzIC8gc3BlY2lmaWVkRGltZW5zaW9uYC5cbiAqXG4gKiBJZiBgbnVtYmVyW11gIHdpbGwgYmUgY29udmVydGVkIHRvIGB0eXBlYC5cbiAqXG4gKiBJZiBgc3JjYCBpcyBhIGZ1bmN0aW9uIGl0IHdpbGwgYmUgY2FsbGVkIHdpdGggYSBgV2ViR0xSZW5kZXJpbmdDb250ZXh0YCBhbmQgdGhlc2Ugb3B0aW9ucy5cbiAqIFdoYXRldmVyIGl0IHJldHVybnMgaXMgc3ViamVjdCB0byB0aGVzZSBydWxlcy4gU28gaXQgY2FuIHJldHVybiBhIHN0cmluZyB1cmwsIGFuIGBIVE1MRWxlbWVudGBcbiAqIGFuIGFycmF5IGV0Yy4uLlxuICpcbiAqIElmIGBzcmNgIGlzIHVuZGVmaW5lZCB0aGVuIGFuIGVtcHR5IHRleHR1cmUgd2lsbCBiZSBjcmVhdGVkIG9mIHNpemUgYHdpZHRoYCBieSBgaGVpZ2h0YC5cbiAqXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2Nyb3NzT3JpZ2luXSBXaGF0IHRvIHNldCB0aGUgY3Jvc3NPcmlnaW4gcHJvcGVydHkgb2YgaW1hZ2VzIHdoZW4gdGhleSBhcmUgZG93bmxvYWRlZC5cbiAqICAgIGRlZmF1bHQ6IHVuZGVmaW5lZC4gQWxzbyBzZWUge0BsaW5rIG1vZHVsZTp0d2dsLnNldERlZmF1bHRzfS5cbiAqXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG4vKipcbiAqIFNldHMgYW55IHBhY2tpbmcgc3RhdGUgdGhhdCB3aWxsIGJlIHNldCBiYXNlZCBvbiB0aGUgb3B0aW9ucy5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9IG9wdGlvbnMgQSBUZXh0dXJlT3B0aW9ucyBvYmplY3Qgd2l0aCB3aGF0ZXZlciBwYXJhbWV0ZXJzIHlvdSB3YW50IHNldC5cbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZXRQYWNrU3RhdGUoZ2wsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMuY29sb3JzcGFjZUNvbnZlcnNpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIGdsLnBpeGVsU3RvcmVpKFVOUEFDS19DT0xPUlNQQUNFX0NPTlZFUlNJT05fV0VCR0wsIG9wdGlvbnMuY29sb3JzcGFjZUNvbnZlcnNpb24pO1xuICB9XG4gIGlmIChvcHRpb25zLnByZW11bHRpcGx5QWxwaGEgIT09IHVuZGVmaW5lZCkge1xuICAgIGdsLnBpeGVsU3RvcmVpKFVOUEFDS19QUkVNVUxUSVBMWV9BTFBIQV9XRUJHTCwgb3B0aW9ucy5wcmVtdWx0aXBseUFscGhhKTtcbiAgfVxuICBpZiAob3B0aW9ucy5mbGlwWSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZ2wucGl4ZWxTdG9yZWkoVU5QQUNLX0ZMSVBfWV9XRUJHTCwgb3B0aW9ucy5mbGlwWSk7XG4gIH1cbn1cblxuLyoqXG4gKiBTZXQgc2tpcCBzdGF0ZSB0byBkZWZhdWx0c1xuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNldFNraXBTdGF0ZVRvRGVmYXVsdChnbCkge1xuICBnbC5waXhlbFN0b3JlaShVTlBBQ0tfQUxJR05NRU5ULCA0KTtcbiAgaWYgKGlzV2ViR0wyKGdsKSkge1xuICAgIGdsLnBpeGVsU3RvcmVpKFVOUEFDS19ST1dfTEVOR1RILCAwKTtcbiAgICBnbC5waXhlbFN0b3JlaShVTlBBQ0tfSU1BR0VfSEVJR0hULCAwKTtcbiAgICBnbC5waXhlbFN0b3JlaShVTlBBQ0tfU0tJUF9QSVhFTFMsIDApO1xuICAgIGdsLnBpeGVsU3RvcmVpKFVOUEFDS19TS0lQX1JPV1MsIDApO1xuICAgIGdsLnBpeGVsU3RvcmVpKFVOUEFDS19TS0lQX0lNQUdFUywgMCk7XG4gIH1cbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBwYXJhbWV0ZXJzIG9mIGEgdGV4dHVyZSBvciBzYW1wbGVyXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgdGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHtudW1iZXJ8V2ViR0xTYW1wbGVyfSB0YXJnZXQgdGV4dHVyZSB0YXJnZXQgb3Igc2FtcGxlclxuICogQHBhcmFtIHtmdW5jdGlvbigpfSBwYXJhbWV0ZXJpRm4gdGV4UGFyYW1ldGVyaSBvciBzYW1wbGVyUGFyYW1ldGVyaSBmblxuICogQHBhcmFtIHtXZWJHTFRleHR1cmV9IHRleCB0aGUgV2ViR0xUZXh0dXJlIHRvIHNldCBwYXJhbWV0ZXJzIGZvclxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5UZXh0dXJlT3B0aW9uc30gb3B0aW9ucyBBIFRleHR1cmVPcHRpb25zIG9iamVjdCB3aXRoIHdoYXRldmVyIHBhcmFtZXRlcnMgeW91IHdhbnQgc2V0LlxuICogICBUaGlzIGlzIG9mdGVuIHRoZSBzYW1lIG9wdGlvbnMgeW91IHBhc3NlZCBpbiB3aGVuIHlvdSBjcmVhdGVkIHRoZSB0ZXh0dXJlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2V0VGV4dHVyZVNhbXBsZXJQYXJhbWV0ZXJzKGdsLCB0YXJnZXQsIHBhcmFtZXRlcmlGbiwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucy5taW5NYWcpIHtcbiAgICBwYXJhbWV0ZXJpRm4uY2FsbChnbCwgdGFyZ2V0LCBURVhUVVJFX01JTl9GSUxURVIsIG9wdGlvbnMubWluTWFnKTtcbiAgICBwYXJhbWV0ZXJpRm4uY2FsbChnbCwgdGFyZ2V0LCBURVhUVVJFX01BR19GSUxURVIsIG9wdGlvbnMubWluTWFnKTtcbiAgfVxuICBpZiAob3B0aW9ucy5taW4pIHtcbiAgICBwYXJhbWV0ZXJpRm4uY2FsbChnbCwgdGFyZ2V0LCBURVhUVVJFX01JTl9GSUxURVIsIG9wdGlvbnMubWluKTtcbiAgfVxuICBpZiAob3B0aW9ucy5tYWcpIHtcbiAgICBwYXJhbWV0ZXJpRm4uY2FsbChnbCwgdGFyZ2V0LCBURVhUVVJFX01BR19GSUxURVIsIG9wdGlvbnMubWFnKTtcbiAgfVxuICBpZiAob3B0aW9ucy53cmFwKSB7XG4gICAgcGFyYW1ldGVyaUZuLmNhbGwoZ2wsIHRhcmdldCwgVEVYVFVSRV9XUkFQX1MsIG9wdGlvbnMud3JhcCk7XG4gICAgcGFyYW1ldGVyaUZuLmNhbGwoZ2wsIHRhcmdldCwgVEVYVFVSRV9XUkFQX1QsIG9wdGlvbnMud3JhcCk7XG4gICAgaWYgKHRhcmdldCA9PT0gVEVYVFVSRV8zRCQxIHx8IGlzU2FtcGxlcihnbCwgdGFyZ2V0KSkge1xuICAgICAgcGFyYW1ldGVyaUZuLmNhbGwoZ2wsIHRhcmdldCwgVEVYVFVSRV9XUkFQX1IsIG9wdGlvbnMud3JhcCk7XG4gICAgfVxuICB9XG4gIGlmIChvcHRpb25zLndyYXBSKSB7XG4gICAgcGFyYW1ldGVyaUZuLmNhbGwoZ2wsIHRhcmdldCwgVEVYVFVSRV9XUkFQX1IsIG9wdGlvbnMud3JhcFIpO1xuICB9XG4gIGlmIChvcHRpb25zLndyYXBTKSB7XG4gICAgcGFyYW1ldGVyaUZuLmNhbGwoZ2wsIHRhcmdldCwgVEVYVFVSRV9XUkFQX1MsIG9wdGlvbnMud3JhcFMpO1xuICB9XG4gIGlmIChvcHRpb25zLndyYXBUKSB7XG4gICAgcGFyYW1ldGVyaUZuLmNhbGwoZ2wsIHRhcmdldCwgVEVYVFVSRV9XUkFQX1QsIG9wdGlvbnMud3JhcFQpO1xuICB9XG4gIGlmIChvcHRpb25zLm1pbkxvZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcGFyYW1ldGVyaUZuLmNhbGwoZ2wsIHRhcmdldCwgVEVYVFVSRV9NSU5fTE9ELCBvcHRpb25zLm1pbkxvZCk7XG4gIH1cbiAgaWYgKG9wdGlvbnMubWF4TG9kICE9PSB1bmRlZmluZWQpIHtcbiAgICBwYXJhbWV0ZXJpRm4uY2FsbChnbCwgdGFyZ2V0LCBURVhUVVJFX01BWF9MT0QsIG9wdGlvbnMubWF4TG9kKTtcbiAgfVxuICBpZiAob3B0aW9ucy5iYXNlTGV2ZWwgIT09IHVuZGVmaW5lZCkge1xuICAgIHBhcmFtZXRlcmlGbi5jYWxsKGdsLCB0YXJnZXQsIFRFWFRVUkVfQkFTRV9MRVZFTCwgb3B0aW9ucy5iYXNlTGV2ZWwpO1xuICB9XG4gIGlmIChvcHRpb25zLm1heExldmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICBwYXJhbWV0ZXJpRm4uY2FsbChnbCwgdGFyZ2V0LCBURVhUVVJFX01BWF9MRVZFTCwgb3B0aW9ucy5tYXhMZXZlbCk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuY29tcGFyZUZ1bmMgIT09IHVuZGVmaW5lZCkge1xuICAgIHBhcmFtZXRlcmlGbi5jYWxsKGdsLCB0YXJnZXQsIFRFWFRVUkVfQ09NUEFSRV9GVU5DLCBvcHRpb25zLmNvbXBhcmVGdW5jKTtcbiAgfVxuICBpZiAob3B0aW9ucy5jb21wYXJlTW9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcGFyYW1ldGVyaUZuLmNhbGwoZ2wsIHRhcmdldCwgVEVYVFVSRV9DT01QQVJFX01PREUsIG9wdGlvbnMuY29tcGFyZU1vZGUpO1xuICB9XG59XG5cbi8qKlxuICogU2V0cyB0aGUgdGV4dHVyZSBwYXJhbWV0ZXJzIG9mIGEgdGV4dHVyZS5cbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge1dlYkdMVGV4dHVyZX0gdGV4IHRoZSBXZWJHTFRleHR1cmUgdG8gc2V0IHBhcmFtZXRlcnMgZm9yXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlRleHR1cmVPcHRpb25zfSBvcHRpb25zIEEgVGV4dHVyZU9wdGlvbnMgb2JqZWN0IHdpdGggd2hhdGV2ZXIgcGFyYW1ldGVycyB5b3Ugd2FudCBzZXQuXG4gKiAgIFRoaXMgaXMgb2Z0ZW4gdGhlIHNhbWUgb3B0aW9ucyB5b3UgcGFzc2VkIGluIHdoZW4geW91IGNyZWF0ZWQgdGhlIHRleHR1cmUuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdGV4dHVyZXNcbiAqL1xuZnVuY3Rpb24gc2V0VGV4dHVyZVBhcmFtZXRlcnMoZ2wsIHRleCwgb3B0aW9ucykge1xuICBjb25zdCB0YXJnZXQgPSBvcHRpb25zLnRhcmdldCB8fCBURVhUVVJFXzJEJDI7XG4gIGdsLmJpbmRUZXh0dXJlKHRhcmdldCwgdGV4KTtcbiAgc2V0VGV4dHVyZVNhbXBsZXJQYXJhbWV0ZXJzKGdsLCB0YXJnZXQsIGdsLnRleFBhcmFtZXRlcmksIG9wdGlvbnMpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIHNhbXBsZXIgcGFyYW1ldGVycyBvZiBhIHNhbXBsZXIuXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgdGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHtXZWJHTFNhbXBsZXJ9IHNhbXBsZXIgdGhlIFdlYkdMU2FtcGxlciB0byBzZXQgcGFyYW1ldGVycyBmb3JcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9IG9wdGlvbnMgQSBUZXh0dXJlT3B0aW9ucyBvYmplY3Qgd2l0aCB3aGF0ZXZlciBwYXJhbWV0ZXJzIHlvdSB3YW50IHNldC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC90ZXh0dXJlc1xuICovXG5mdW5jdGlvbiBzZXRTYW1wbGVyUGFyYW1ldGVycyhnbCwgc2FtcGxlciwgb3B0aW9ucykge1xuICBzZXRUZXh0dXJlU2FtcGxlclBhcmFtZXRlcnMoZ2wsIHNhbXBsZXIsIGdsLnNhbXBsZXJQYXJhbWV0ZXJpLCBvcHRpb25zKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHNhbXBsZXIgb2JqZWN0IGFuZCBzZXRzIHBhcmFtZXRlcnMuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgIGNvbnN0IHNhbXBsZXIgPSB0d2dsLmNyZWF0ZVNhbXBsZXIoZ2wsIHtcbiAqICAgICAgICBtaW5NYWc6IGdsLk5FQVJFU1QsICAgICAgICAgLy8gc2V0cyBib3RoIFRFWFRVUkVfTUlOX0ZJTFRFUiBhbmQgVEVYVFVSRV9NQUdfRklMVEVSXG4gKiAgICAgICAgd3JhcDogZ2wuQ0xBTVBfVE9fTkVBUkVTVCwgIC8vIHNldHMgYm90aCBURVhUVVJFX1dSQVBfUyBhbmQgVEVYVFVSRV9XUkFQX1QgYW5kIFRFWFRVUkVfV1JBUF9SXG4gKiAgICAgIH0pO1xuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLG1vZHVsZTp0d2dsLlRleHR1cmVPcHRpb25zPn0gb3B0aW9ucyBBIG9iamVjdCBvZiBUZXh0dXJlT3B0aW9ucyBvbmUgcGVyIHNhbXBsZXIuXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZyxXZWJHTFNhbXBsZXI+fSB0aGUgY3JlYXRlZCBzYW1wbGVycyBieSBuYW1lXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVTYW1wbGVyKGdsLCBvcHRpb25zKSB7XG4gIGNvbnN0IHNhbXBsZXIgPSBnbC5jcmVhdGVTYW1wbGVyKCk7XG4gIHNldFNhbXBsZXJQYXJhbWV0ZXJzKGdsLCBzYW1wbGVyLCBvcHRpb25zKTtcbiAgcmV0dXJuIHNhbXBsZXI7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG11bHRpcGxlIHNhbXBsZXIgb2JqZWN0cyBhbmQgc2V0cyBwYXJhbWV0ZXJzIG9uIGVhY2guXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgIGNvbnN0IHNhbXBsZXJzID0gdHdnbC5jcmVhdGVTYW1wbGVycyhnbCwge1xuICogICAgICAgIG5lYXJlc3Q6IHtcbiAqICAgICAgICAgIG1pbk1hZzogZ2wuTkVBUkVTVCxcbiAqICAgICAgICB9LFxuICogICAgICAgIG5lYXJlc3RDbGFtcFM6IHtcbiAqICAgICAgICAgIG1pbk1hZzogZ2wuTkVBUkVTVCxcbiAqICAgICAgICAgIHdyYXBTOiBnbC5DTEFNUF9UT19ORUFSRVNULFxuICogICAgICAgIH0sXG4gKiAgICAgICAgbGluZWFyOiB7XG4gKiAgICAgICAgICBtaW5NYWc6IGdsLkxJTkVBUixcbiAqICAgICAgICB9LFxuICogICAgICAgIG5lYXJlc3RDbGFtcDoge1xuICogICAgICAgICAgbWluTWFnOiBnbC5ORUFSRVNULFxuICogICAgICAgICAgd3JhcDogZ2wuQ0xBTVBfVE9fRURHRSxcbiAqICAgICAgICB9LFxuICogICAgICAgIGxpbmVhckNsYW1wOiB7XG4gKiAgICAgICAgICBtaW5NYWc6IGdsLkxJTkVBUixcbiAqICAgICAgICAgIHdyYXA6IGdsLkNMQU1QX1RPX0VER0UsXG4gKiAgICAgICAgfSxcbiAqICAgICAgICBsaW5lYXJDbGFtcFQ6IHtcbiAqICAgICAgICAgIG1pbk1hZzogZ2wuTElORUFSLFxuICogICAgICAgICAgd3JhcFQ6IGdsLkNMQU1QX1RPX0VER0UsXG4gKiAgICAgICAgfSxcbiAqICAgICAgfSk7XG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9IFtvcHRpb25zXSBBIFRleHR1cmVPcHRpb25zIG9iamVjdCB3aXRoIHdoYXRldmVyIHBhcmFtZXRlcnMgeW91IHdhbnQgc2V0IG9uIHRoZSBzYW1wbGVyXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVTYW1wbGVycyhnbCwgc2FtcGxlck9wdGlvbnMpIHtcbiAgY29uc3Qgc2FtcGxlcnMgPSB7fTtcbiAgT2JqZWN0LmtleXMoc2FtcGxlck9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgIHNhbXBsZXJzW25hbWVdID0gY3JlYXRlU2FtcGxlcihnbCwgc2FtcGxlck9wdGlvbnNbbmFtZV0pO1xuICB9KTtcbiAgcmV0dXJuIHNhbXBsZXJzO1xufVxuXG4vKipcbiAqIE1ha2VzIGEgMXgxIHBpeGVsXG4gKiBJZiBubyBjb2xvciBpcyBwYXNzZWQgaW4gdXNlcyB0aGUgZGVmYXVsdCBjb2xvciB3aGljaCBjYW4gYmUgc2V0IGJ5IGNhbGxpbmcgYHNldERlZmF1bHRUZXh0dXJlQ29sb3JgLlxuICogQHBhcmFtIHsobnVtYmVyW118QXJyYXlCdWZmZXJWaWV3KX0gW2NvbG9yXSBUaGUgY29sb3IgdXNpbmcgMC0xIHZhbHVlc1xuICogQHJldHVybiB7VWludDhBcnJheX0gVW5pdDhBcnJheSB3aXRoIGNvbG9yLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbWFrZTFQaXhlbChjb2xvcikge1xuICBjb2xvciA9IGNvbG9yIHx8IGRlZmF1bHRzJDEudGV4dHVyZUNvbG9yO1xuICBpZiAoaXNBcnJheUJ1ZmZlcihjb2xvcikpIHtcbiAgICByZXR1cm4gY29sb3I7XG4gIH1cbiAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFtjb2xvclswXSAqIDI1NSwgY29sb3JbMV0gKiAyNTUsIGNvbG9yWzJdICogMjU1LCBjb2xvclszXSAqIDI1NV0pO1xufVxuXG4vKipcbiAqIFNldHMgZmlsdGVyaW5nIG9yIGdlbmVyYXRlcyBtaXBzIGZvciB0ZXh0dXJlIGJhc2VkIG9uIHdpZHRoIG9yIGhlaWdodFxuICogSWYgd2lkdGggb3IgaGVpZ2h0IGlzIG5vdCBwYXNzZWQgaW4gdXNlcyBgb3B0aW9ucy53aWR0aGAgYW5kLy9vciBgb3B0aW9ucy5oZWlnaHRgXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7V2ViR0xUZXh0dXJlfSB0ZXggdGhlIFdlYkdMVGV4dHVyZSB0byBzZXQgcGFyYW1ldGVycyBmb3JcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9IFtvcHRpb25zXSBBIFRleHR1cmVPcHRpb25zIG9iamVjdCB3aXRoIHdoYXRldmVyIHBhcmFtZXRlcnMgeW91IHdhbnQgc2V0LlxuICogICBUaGlzIGlzIG9mdGVuIHRoZSBzYW1lIG9wdGlvbnMgeW91IHBhc3NlZCBpbiB3aGVuIHlvdSBjcmVhdGVkIHRoZSB0ZXh0dXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3aWR0aF0gd2lkdGggb2YgdGV4dHVyZVxuICogQHBhcmFtIHtudW1iZXJ9IFtoZWlnaHRdIGhlaWdodCBvZiB0ZXh0dXJlXG4gKiBAcGFyYW0ge251bWJlcn0gW2ludGVybmFsRm9ybWF0XSBUaGUgaW50ZXJuYWxGb3JtYXQgcGFyYW1ldGVyIGZyb20gdGV4SW1hZ2UyRCBldGMuLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3RleHR1cmVzXG4gKi9cbmZ1bmN0aW9uIHNldFRleHR1cmVGaWx0ZXJpbmdGb3JTaXplKGdsLCB0ZXgsIG9wdGlvbnMsIHdpZHRoLCBoZWlnaHQsIGludGVybmFsRm9ybWF0KSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IGRlZmF1bHRzJDEudGV4dHVyZU9wdGlvbnM7XG4gIGludGVybmFsRm9ybWF0ID0gaW50ZXJuYWxGb3JtYXQgfHwgUkdCQSQxO1xuICBjb25zdCB0YXJnZXQgPSBvcHRpb25zLnRhcmdldCB8fCBURVhUVVJFXzJEJDI7XG4gIHdpZHRoID0gd2lkdGggfHwgb3B0aW9ucy53aWR0aDtcbiAgaGVpZ2h0ID0gaGVpZ2h0IHx8IG9wdGlvbnMuaGVpZ2h0O1xuICBnbC5iaW5kVGV4dHVyZSh0YXJnZXQsIHRleCk7XG4gIGlmIChjYW5HZW5lcmF0ZU1pcG1hcChnbCwgd2lkdGgsIGhlaWdodCwgaW50ZXJuYWxGb3JtYXQpKSB7XG4gICAgZ2wuZ2VuZXJhdGVNaXBtYXAodGFyZ2V0KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBmaWx0ZXJpbmcgPSBjYW5GaWx0ZXIoaW50ZXJuYWxGb3JtYXQpID8gTElORUFSJDEgOiBORUFSRVNUO1xuICAgIGdsLnRleFBhcmFtZXRlcmkodGFyZ2V0LCBURVhUVVJFX01JTl9GSUxURVIsIGZpbHRlcmluZyk7XG4gICAgZ2wudGV4UGFyYW1ldGVyaSh0YXJnZXQsIFRFWFRVUkVfTUFHX0ZJTFRFUiwgZmlsdGVyaW5nKTtcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKHRhcmdldCwgVEVYVFVSRV9XUkFQX1MsIENMQU1QX1RPX0VER0UkMSk7XG4gICAgZ2wudGV4UGFyYW1ldGVyaSh0YXJnZXQsIFRFWFRVUkVfV1JBUF9ULCBDTEFNUF9UT19FREdFJDEpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZEF1dG9tYXRpY2FsbHlTZXRUZXh0dXJlRmlsdGVyaW5nRm9yU2l6ZShvcHRpb25zKSB7XG4gIHJldHVybiBvcHRpb25zLmF1dG8gPT09IHRydWUgfHwgKG9wdGlvbnMuYXV0byA9PT0gdW5kZWZpbmVkICYmIG9wdGlvbnMubGV2ZWwgPT09IHVuZGVmaW5lZCk7XG59XG5cbi8qKlxuICogR2V0cyBhbiBhcnJheSBvZiBjdWJlbWFwIGZhY2UgZW51bXNcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlRleHR1cmVPcHRpb25zfSBvcHRpb25zIEEgVGV4dHVyZU9wdGlvbnMgb2JqZWN0IHdpdGggd2hhdGV2ZXIgcGFyYW1ldGVycyB5b3Ugd2FudCBzZXQuXG4gKiAgIFRoaXMgaXMgb2Z0ZW4gdGhlIHNhbWUgb3B0aW9ucyB5b3UgcGFzc2VkIGluIHdoZW4geW91IGNyZWF0ZWQgdGhlIHRleHR1cmUuXG4gKiBAcmV0dXJuIHtudW1iZXJbXX0gY3ViZW1hcCBmYWNlIGVudW1zXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRDdWJlRmFjZU9yZGVyKGdsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICByZXR1cm4gb3B0aW9ucy5jdWJlRmFjZU9yZGVyIHx8IFtcbiAgICAgIFRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWCxcbiAgICAgIFRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWCxcbiAgICAgIFRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWSxcbiAgICAgIFRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWSxcbiAgICAgIFRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWixcbiAgICAgIFRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWixcbiAgICBdO1xufVxuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEZhY2VJbmZvXG4gKiBAcHJvcGVydHkge251bWJlcn0gZmFjZSBnbCBlbnVtIGZvciB0ZXhJbWFnZTJEXG4gKiBAcHJvcGVydHkge251bWJlcn0gbmR4IGZhY2UgaW5kZXggKDAgLSA1KSBpbnRvIHNvdXJjZSBkYXRhXG4gKiBAaWdub3JlXG4gKi9cblxuLyoqXG4gKiBHZXRzIGFuIGFycmF5IG9mIEZhY2VJbmZvc1xuICogVGhlcmUncyBhIGJ1ZyBpbiBzb21lIE5WaWRpYSBkcml2ZXJzIHRoYXQgd2lsbCBjcmFzaCB0aGUgZHJpdmVyIGlmXG4gKiBgZ2wuVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9YYCBpcyBub3QgdXBsb2FkZWQgZmlyc3QuIFNvLCB3ZSB0YWtlXG4gKiB0aGUgdXNlcidzIGRlc2lyZWQgb3JkZXIgZnJvbSBoaXMgZmFjZXMgdG8gV2ViR0wgYW5kIG1ha2Ugc3VyZSB3ZVxuICogZG8gdGhlIGZhY2VzIGluIFdlYkdMIG9yZGVyXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9IG9wdGlvbnMgQSBUZXh0dXJlT3B0aW9ucyBvYmplY3Qgd2l0aCB3aGF0ZXZlciBwYXJhbWV0ZXJzIHlvdSB3YW50IHNldC5cbiAqIEByZXR1cm4ge0ZhY2VJbmZvW119IGN1YmVtYXAgZmFjZSBpbmZvcy4gQXJndWFibHkgdGhlIGBmYWNlYCBwcm9wZXJ0eSBvZiBlYWNoIGVsZW1lbnQgaXMgcmVkdW5kYW50IGJ1dFxuICogICAgaXQncyBuZWVkZWQgaW50ZXJuYWxseSB0byBzb3J0IHRoZSBhcnJheSBvZiBgbmR4YCBwcm9wZXJ0aWVzIGJ5IGBmYWNlYC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldEN1YmVGYWNlc1dpdGhOZHgoZ2wsIG9wdGlvbnMpIHtcbiAgY29uc3QgZmFjZXMgPSBnZXRDdWJlRmFjZU9yZGVyKGdsLCBvcHRpb25zKTtcbiAgLy8gd29yayBhcm91bmQgYnVnIGluIE5WaWRpYSBkcml2ZXJzLiBXZSBoYXZlIHRvIHVwbG9hZCB0aGUgZmlyc3QgZmFjZSBmaXJzdCBlbHNlIHRoZSBkcml2ZXIgY3Jhc2hlcyA6KFxuICBjb25zdCBmYWNlc1dpdGhOZHggPSBmYWNlcy5tYXAoZnVuY3Rpb24oZmFjZSwgbmR4KSB7XG4gICAgcmV0dXJuIHsgZmFjZTogZmFjZSwgbmR4OiBuZHggfTtcbiAgfSk7XG4gIGZhY2VzV2l0aE5keC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gYS5mYWNlIC0gYi5mYWNlO1xuICB9KTtcbiAgcmV0dXJuIGZhY2VzV2l0aE5keDtcbn1cblxuLyoqXG4gKiBTZXQgYSB0ZXh0dXJlIGZyb20gdGhlIGNvbnRlbnRzIG9mIGFuIGVsZW1lbnQuIFdpbGwgYWxzbyBzZXRcbiAqIHRleHR1cmUgZmlsdGVyaW5nIG9yIGdlbmVyYXRlIG1pcHMgYmFzZWQgb24gdGhlIGRpbWVuc2lvbnMgb2YgdGhlIGVsZW1lbnRcbiAqIHVubGVzcyBgb3B0aW9ucy5hdXRvID09PSBmYWxzZWAuIElmIGB0YXJnZXQgPT09IGdsLlRFWFRVUkVfQ1VCRV9NQVBgIHdpbGxcbiAqIGF0dGVtcHQgdG8gc2xpY2UgaW1hZ2UgaW50byAxeDYsIDJ4MywgM3gyLCBvciA2eDEgaW1hZ2VzLCBvbmUgZm9yIGVhY2ggZmFjZS5cbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge1dlYkdMVGV4dHVyZX0gdGV4IHRoZSBXZWJHTFRleHR1cmUgdG8gc2V0IHBhcmFtZXRlcnMgZm9yXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IGEgY2FudmFzLCBpbWcsIG9yIHZpZGVvIGVsZW1lbnQuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlRleHR1cmVPcHRpb25zfSBbb3B0aW9uc10gQSBUZXh0dXJlT3B0aW9ucyBvYmplY3Qgd2l0aCB3aGF0ZXZlciBwYXJhbWV0ZXJzIHlvdSB3YW50IHNldC5cbiAqICAgVGhpcyBpcyBvZnRlbiB0aGUgc2FtZSBvcHRpb25zIHlvdSBwYXNzZWQgaW4gd2hlbiB5b3UgY3JlYXRlZCB0aGUgdGV4dHVyZS5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC90ZXh0dXJlc1xuICogQGtpbmQgZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gc2V0VGV4dHVyZUZyb21FbGVtZW50KGdsLCB0ZXgsIGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwgZGVmYXVsdHMkMS50ZXh0dXJlT3B0aW9ucztcbiAgY29uc3QgdGFyZ2V0ID0gb3B0aW9ucy50YXJnZXQgfHwgVEVYVFVSRV8yRCQyO1xuICBjb25zdCBsZXZlbCA9IG9wdGlvbnMubGV2ZWwgfHwgMDtcbiAgbGV0IHdpZHRoID0gZWxlbWVudC53aWR0aDtcbiAgbGV0IGhlaWdodCA9IGVsZW1lbnQuaGVpZ2h0O1xuICBjb25zdCBpbnRlcm5hbEZvcm1hdCA9IG9wdGlvbnMuaW50ZXJuYWxGb3JtYXQgfHwgb3B0aW9ucy5mb3JtYXQgfHwgUkdCQSQxO1xuICBjb25zdCBmb3JtYXRUeXBlID0gZ2V0Rm9ybWF0QW5kVHlwZUZvckludGVybmFsRm9ybWF0KGludGVybmFsRm9ybWF0KTtcbiAgY29uc3QgZm9ybWF0ID0gb3B0aW9ucy5mb3JtYXQgfHwgZm9ybWF0VHlwZS5mb3JtYXQ7XG4gIGNvbnN0IHR5cGUgPSBvcHRpb25zLnR5cGUgfHwgZm9ybWF0VHlwZS50eXBlO1xuICBzZXRQYWNrU3RhdGUoZ2wsIG9wdGlvbnMpO1xuICBnbC5iaW5kVGV4dHVyZSh0YXJnZXQsIHRleCk7XG4gIGlmICh0YXJnZXQgPT09IFRFWFRVUkVfQ1VCRV9NQVAkMSkge1xuICAgIC8vIGd1ZXNzIHRoZSBwYXJ0c1xuICAgIGNvbnN0IGltZ1dpZHRoICA9IGVsZW1lbnQud2lkdGg7XG4gICAgY29uc3QgaW1nSGVpZ2h0ID0gZWxlbWVudC5oZWlnaHQ7XG4gICAgbGV0IHNpemU7XG4gICAgbGV0IHNsaWNlcztcbiAgICBpZiAoaW1nV2lkdGggLyA2ID09PSBpbWdIZWlnaHQpIHtcbiAgICAgIC8vIEl0J3MgNngxXG4gICAgICBzaXplID0gaW1nSGVpZ2h0O1xuICAgICAgc2xpY2VzID0gWzAsIDAsIDEsIDAsIDIsIDAsIDMsIDAsIDQsIDAsIDUsIDBdO1xuICAgIH0gZWxzZSBpZiAoaW1nSGVpZ2h0IC8gNiA9PT0gaW1nV2lkdGgpIHtcbiAgICAgIC8vIEl0J3MgMXg2XG4gICAgICBzaXplID0gaW1nV2lkdGg7XG4gICAgICBzbGljZXMgPSBbMCwgMCwgMCwgMSwgMCwgMiwgMCwgMywgMCwgNCwgMCwgNV07XG4gICAgfSBlbHNlIGlmIChpbWdXaWR0aCAvIDMgPT09IGltZ0hlaWdodCAvIDIpIHtcbiAgICAgIC8vIEl0J3MgM3gyXG4gICAgICBzaXplID0gaW1nV2lkdGggLyAzO1xuICAgICAgc2xpY2VzID0gWzAsIDAsIDEsIDAsIDIsIDAsIDAsIDEsIDEsIDEsIDIsIDFdO1xuICAgIH0gZWxzZSBpZiAoaW1nV2lkdGggLyAyID09PSBpbWdIZWlnaHQgLyAzKSB7XG4gICAgICAvLyBJdCdzIDJ4M1xuICAgICAgc2l6ZSA9IGltZ1dpZHRoIC8gMjtcbiAgICAgIHNsaWNlcyA9IFswLCAwLCAxLCAwLCAwLCAxLCAxLCAxLCAwLCAyLCAxLCAyXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgXCJjYW4ndCBmaWd1cmUgb3V0IGN1YmUgbWFwIGZyb20gZWxlbWVudDogXCIgKyAoZWxlbWVudC5zcmMgPyBlbGVtZW50LnNyYyA6IGVsZW1lbnQubm9kZU5hbWUpO1xuICAgIH1cbiAgICBjb25zdCBjdHggPSBnZXRTaGFyZWQyRENvbnRleHQoKTtcbiAgICBpZiAoY3R4KSB7XG4gICAgICBjdHguY2FudmFzLndpZHRoID0gc2l6ZTtcbiAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gc2l6ZTtcbiAgICAgIHdpZHRoID0gc2l6ZTtcbiAgICAgIGhlaWdodCA9IHNpemU7XG4gICAgICBnZXRDdWJlRmFjZXNXaXRoTmR4KGdsLCBvcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgY29uc3QgeE9mZnNldCA9IHNsaWNlc1tmLm5keCAqIDIgKyAwXSAqIHNpemU7XG4gICAgICAgIGNvbnN0IHlPZmZzZXQgPSBzbGljZXNbZi5uZHggKiAyICsgMV0gKiBzaXplO1xuICAgICAgICBjdHguZHJhd0ltYWdlKGVsZW1lbnQsIHhPZmZzZXQsIHlPZmZzZXQsIHNpemUsIHNpemUsIDAsIDAsIHNpemUsIHNpemUpO1xuICAgICAgICBnbC50ZXhJbWFnZTJEKGYuZmFjZSwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCBmb3JtYXQsIHR5cGUsIGN0eC5jYW52YXMpO1xuICAgICAgfSk7XG4gICAgICAvLyBGcmVlIHVwIHRoZSBjYW52YXMgbWVtb3J5XG4gICAgICBjdHguY2FudmFzLndpZHRoID0gMTtcbiAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gMTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjcmVhdGVJbWFnZUJpdG1hcCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIE5PVEU6IEl0IHNlZW1zIGxpa2Ugd2Ugc2hvdWxkIHByZWZlciBJbWFnZUJpdG1hcCBiZWNhdXNlIHVubGlrZSBjYW52YXMgaXQnc1xuICAgICAgLy8gbm90ZSBsb3NzeT8gKGFscGhhIGlzIG5vdCBwcmVtdWx0aXBsaWVkPyBhbHRob3VnaCBJJ20gbm90IHN1cmUgd2hhdFxuICAgICAgd2lkdGggPSBzaXplO1xuICAgICAgaGVpZ2h0ID0gc2l6ZTtcbiAgICAgIGdldEN1YmVGYWNlc1dpdGhOZHgoZ2wsIG9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24oZikge1xuICAgICAgICBjb25zdCB4T2Zmc2V0ID0gc2xpY2VzW2YubmR4ICogMiArIDBdICogc2l6ZTtcbiAgICAgICAgY29uc3QgeU9mZnNldCA9IHNsaWNlc1tmLm5keCAqIDIgKyAxXSAqIHNpemU7XG4gICAgICAgIC8vIFdlIGNhbid0IGVhc2lseSB1c2UgYSBkZWZhdWx0IHRleHR1cmUgY29sb3IgaGVyZSBhcyBpdCB3b3VsZCBoYXZlIHRvIG1hdGNoXG4gICAgICAgIC8vIHRoZSB0eXBlIGFjcm9zcyBhbGwgZmFjZXMgd2hlcmUgYXMgd2l0aCBhIDJEIG9uZSB0aGVyZSdzIG9ubHkgb25lIGZhY2VcbiAgICAgICAgLy8gc28gd2UncmUgcmVwbGFjaW5nIGV2ZXJ5dGhpbmcgYWxsIGF0IG9uY2UuIEl0IGFsc28gaGFzIHRvIGJlIHRoZSBjb3JyZWN0IHNpemUuXG4gICAgICAgIC8vIE9uIHRoZSBvdGhlciBoYW5kIHdlIG5lZWQgYWxsIGZhY2VzIHRvIGJlIHRoZSBzYW1lIHNpemUgc28gYXMgb25lIGZhY2UgbG9hZHNcbiAgICAgICAgLy8gdGhlIHJlc3QgbWF0Y2ggZWxzZSB0aGUgdGV4dHVyZSB3aWxsIGJlIHVuLXJlbmRlcmFibGUuXG4gICAgICAgIGdsLnRleEltYWdlMkQoZi5mYWNlLCBsZXZlbCwgaW50ZXJuYWxGb3JtYXQsIHNpemUsIHNpemUsIDAsIGZvcm1hdCwgdHlwZSwgbnVsbCk7XG4gICAgICAgIGNyZWF0ZUltYWdlQml0bWFwKGVsZW1lbnQsIHhPZmZzZXQsIHlPZmZzZXQsIHNpemUsIHNpemUsIHtcbiAgICAgICAgICBwcmVtdWx0aXBseUFscGhhOiAnbm9uZScsXG4gICAgICAgICAgY29sb3JTcGFjZUNvbnZlcnNpb246ICdub25lJyxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oaW1hZ2VCaXRtYXApIHtcbiAgICAgICAgICBzZXRQYWNrU3RhdGUoZ2wsIG9wdGlvbnMpO1xuICAgICAgICAgIGdsLmJpbmRUZXh0dXJlKHRhcmdldCwgdGV4KTtcbiAgICAgICAgICBnbC50ZXhJbWFnZTJEKGYuZmFjZSwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCBmb3JtYXQsIHR5cGUsIGltYWdlQml0bWFwKTtcbiAgICAgICAgICBpZiAoc2hvdWxkQXV0b21hdGljYWxseVNldFRleHR1cmVGaWx0ZXJpbmdGb3JTaXplKG9wdGlvbnMpKSB7XG4gICAgICAgICAgICBzZXRUZXh0dXJlRmlsdGVyaW5nRm9yU2l6ZShnbCwgdGV4LCBvcHRpb25zLCB3aWR0aCwgaGVpZ2h0LCBpbnRlcm5hbEZvcm1hdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0YXJnZXQgPT09IFRFWFRVUkVfM0QkMSB8fCB0YXJnZXQgPT09IFRFWFRVUkVfMkRfQVJSQVkkMSkge1xuICAgIGNvbnN0IHNtYWxsZXN0ID0gTWF0aC5taW4oZWxlbWVudC53aWR0aCwgZWxlbWVudC5oZWlnaHQpO1xuICAgIGNvbnN0IGxhcmdlc3QgPSBNYXRoLm1heChlbGVtZW50LndpZHRoLCBlbGVtZW50LmhlaWdodCk7XG4gICAgY29uc3QgZGVwdGggPSBsYXJnZXN0IC8gc21hbGxlc3Q7XG4gICAgaWYgKGRlcHRoICUgMSAhPT0gMCkge1xuICAgICAgdGhyb3cgXCJjYW4gbm90IGNvbXB1dGUgM0QgZGltZW5zaW9ucyBvZiBlbGVtZW50XCI7XG4gICAgfVxuICAgIGNvbnN0IHhNdWx0ID0gZWxlbWVudC53aWR0aCAgPT09IGxhcmdlc3QgPyAxIDogMDtcbiAgICBjb25zdCB5TXVsdCA9IGVsZW1lbnQuaGVpZ2h0ID09PSBsYXJnZXN0ID8gMSA6IDA7XG4gICAgZ2wucGl4ZWxTdG9yZWkoVU5QQUNLX0FMSUdOTUVOVCwgMSk7XG4gICAgZ2wucGl4ZWxTdG9yZWkoVU5QQUNLX1JPV19MRU5HVEgsIGVsZW1lbnQud2lkdGgpO1xuICAgIGdsLnBpeGVsU3RvcmVpKFVOUEFDS19JTUFHRV9IRUlHSFQsIDApO1xuICAgIGdsLnBpeGVsU3RvcmVpKFVOUEFDS19TS0lQX0lNQUdFUywgMCk7XG4gICAgZ2wudGV4SW1hZ2UzRCh0YXJnZXQsIGxldmVsLCBpbnRlcm5hbEZvcm1hdCwgc21hbGxlc3QsIHNtYWxsZXN0LCBzbWFsbGVzdCwgMCwgZm9ybWF0LCB0eXBlLCBudWxsKTtcbiAgICBmb3IgKGxldCBkID0gMDsgZCA8IGRlcHRoOyArK2QpIHtcbiAgICAgIGNvbnN0IHNyY1ggPSBkICogc21hbGxlc3QgKiB4TXVsdDtcbiAgICAgIGNvbnN0IHNyY1kgPSBkICogc21hbGxlc3QgKiB5TXVsdDtcbiAgICAgIGdsLnBpeGVsU3RvcmVpKFVOUEFDS19TS0lQX1BJWEVMUywgc3JjWCk7XG4gICAgICBnbC5waXhlbFN0b3JlaShVTlBBQ0tfU0tJUF9ST1dTLCBzcmNZKTtcbiAgICAgIGdsLnRleFN1YkltYWdlM0QodGFyZ2V0LCBsZXZlbCwgMCwgMCwgZCwgc21hbGxlc3QsIHNtYWxsZXN0LCAxLCBmb3JtYXQsIHR5cGUsIGVsZW1lbnQpO1xuICAgIH1cbiAgICBzZXRTa2lwU3RhdGVUb0RlZmF1bHQoZ2wpO1xuICB9IGVsc2Uge1xuICAgIGdsLnRleEltYWdlMkQodGFyZ2V0LCBsZXZlbCwgaW50ZXJuYWxGb3JtYXQsIGZvcm1hdCwgdHlwZSwgZWxlbWVudCk7XG4gIH1cbiAgaWYgKHNob3VsZEF1dG9tYXRpY2FsbHlTZXRUZXh0dXJlRmlsdGVyaW5nRm9yU2l6ZShvcHRpb25zKSkge1xuICAgIHNldFRleHR1cmVGaWx0ZXJpbmdGb3JTaXplKGdsLCB0ZXgsIG9wdGlvbnMsIHdpZHRoLCBoZWlnaHQsIGludGVybmFsRm9ybWF0KTtcbiAgfVxuICBzZXRUZXh0dXJlUGFyYW1ldGVycyhnbCwgdGV4LCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHtcbn1cblxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciB0aGUgdXJsJ3Mgb3JpZ2luIGlzIHRoZSBzYW1lIHNvIHRoYXQgd2UgY2FuIHNldCB0aGUgYGNyb3NzT3JpZ2luYFxuICogQHBhcmFtIHtzdHJpbmd9IHVybCB1cmwgdG8gaW1hZ2VcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSB3aW5kb3cncyBvcmlnaW4gaXMgdGhlIHNhbWUgYXMgaW1hZ2UncyB1cmxcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHVybElzU2FtZU9yaWdpbih1cmwpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBmb3IgSUUgcmVhbGx5XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhLmhyZWYgPSB1cmw7XG4gICAgcmV0dXJuIGEuaG9zdG5hbWUgPT09IGxvY2F0aW9uLmhvc3RuYW1lICYmXG4gICAgICAgICAgIGEucG9ydCAgICAgPT09IGxvY2F0aW9uLnBvcnQgJiZcbiAgICAgICAgICAgYS5wcm90b2NvbCA9PT0gbG9jYXRpb24ucHJvdG9jb2w7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbG9jYWxPcmlnaW4gPSAobmV3IFVSTChsb2NhdGlvbi5ocmVmKSkub3JpZ2luO1xuICAgIGNvbnN0IHVybE9yaWdpbiA9IChuZXcgVVJMKHVybCwgbG9jYXRpb24uaHJlZikpLm9yaWdpbjtcbiAgICByZXR1cm4gdXJsT3JpZ2luID09PSBsb2NhbE9yaWdpbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRUb0Fub255bW91c0lmVW5kZWZpbmVkQW5kVVJMSXNOb3RTYW1lT3JpZ2luKHVybCwgY3Jvc3NPcmlnaW4pIHtcbiAgcmV0dXJuIGNyb3NzT3JpZ2luID09PSB1bmRlZmluZWQgJiYgIXVybElzU2FtZU9yaWdpbih1cmwpXG4gICAgID8gJ2Fub255bW91cydcbiAgICAgOiBjcm9zc09yaWdpbjtcbn1cblxuLyoqXG4gKiBMb2FkcyBhbiBpbWFnZVxuICogQHBhcmFtIHtzdHJpbmd9IHVybCB1cmwgdG8gaW1hZ2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBjcm9zc09yaWdpblxuICogQHBhcmFtIHtmdW5jdGlvbihlcnIsIGltZyl9IFtjYWxsYmFja10gYSBjYWxsYmFjayB0aGF0J3MgcGFzc2VkIGFuIGVycm9yIGFuZCB0aGUgaW1hZ2UuIFRoZSBlcnJvciB3aWxsIGJlIG5vbi1udWxsXG4gKiAgICAgaWYgdGhlcmUgd2FzIGFuIGVycm9yXG4gKiBAcmV0dXJuIHtIVE1MSW1hZ2VFbGVtZW50fSB0aGUgaW1hZ2UgYmVpbmcgbG9hZGVkLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbG9hZEltYWdlKHVybCwgY3Jvc3NPcmlnaW4sIGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgbm9vcDtcbiAgbGV0IGltZztcbiAgY3Jvc3NPcmlnaW4gPSBjcm9zc09yaWdpbiAhPT0gdW5kZWZpbmVkID8gY3Jvc3NPcmlnaW4gOiBkZWZhdWx0cyQxLmNyb3NzT3JpZ2luO1xuICBjcm9zc09yaWdpbiA9IHNldFRvQW5vbnltb3VzSWZVbmRlZmluZWRBbmRVUkxJc05vdFNhbWVPcmlnaW4odXJsLCBjcm9zc09yaWdpbik7XG4gIGlmICh0eXBlb2YgSW1hZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaWYgKGNyb3NzT3JpZ2luICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGltZy5jcm9zc09yaWdpbiA9IGNyb3NzT3JpZ2luO1xuICAgIH1cblxuICAgIGNvbnN0IGNsZWFyRXZlbnRIYW5kbGVycyA9IGZ1bmN0aW9uIGNsZWFyRXZlbnRIYW5kbGVycygpIHtcbiAgICAgIGltZy5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uRXJyb3IpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgaW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWQpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgaW1nID0gbnVsbDtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25FcnJvciA9IGZ1bmN0aW9uIG9uRXJyb3IoKSB7XG4gICAgICBjb25zdCBtc2cgPSBcImNvdWxkbid0IGxvYWQgaW1hZ2U6IFwiICsgdXJsO1xuICAgICAgZXJyb3IkMShtc2cpO1xuICAgICAgY2FsbGJhY2sobXNnLCBpbWcpO1xuICAgICAgY2xlYXJFdmVudEhhbmRsZXJzKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uTG9hZCA9IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgIGNhbGxiYWNrKG51bGwsIGltZyk7XG4gICAgICBjbGVhckV2ZW50SGFuZGxlcnMoKTtcbiAgICB9O1xuXG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvcik7XG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWQpO1xuICAgIGltZy5zcmMgPSB1cmw7XG4gICAgcmV0dXJuIGltZztcbiAgfSBlbHNlIGlmICh0eXBlb2YgSW1hZ2VCaXRtYXAgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IGVycjtcbiAgICBsZXQgYm07XG4gICAgY29uc3QgY2IgPSBmdW5jdGlvbiBjYigpIHtcbiAgICAgIGNhbGxiYWNrKGVyciwgYm0pO1xuICAgIH07XG5cbiAgICBjb25zdCBvcHRpb25zID0ge307XG4gICAgaWYgKGNyb3NzT3JpZ2luKSB7XG4gICAgICBvcHRpb25zLm1vZGUgPSAnY29ycyc7IC8vIFRPRE86IG5vdCBzdXJlIGhvdyB0byB0cmFuc2xhdGUgaW1hZ2UuY3Jvc3NPcmlnaW5cbiAgICB9XG4gICAgZmV0Y2godXJsLCBvcHRpb25zKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IHJlc3BvbnNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmJsb2IoKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uKGJsb2IpIHtcbiAgICAgIHJldHVybiBjcmVhdGVJbWFnZUJpdG1hcChibG9iLCB7XG4gICAgICAgIHByZW11bHRpcGx5QWxwaGE6ICdub25lJyxcbiAgICAgICAgY29sb3JTcGFjZUNvbnZlcnNpb246ICdub25lJyxcbiAgICAgIH0pO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24oYml0bWFwKSB7XG4gICAgICAvLyBub3Qgc3VyZSBpZiB0aGlzIHdvcmtzLiBXZSBkb24ndCB3YW50XG4gICAgICAvLyB0byBjYXRjaCB0aGUgdXNlcidzIGVycm9yLiBTbywgY2FsbFxuICAgICAgLy8gdGhlIGNhbGxiYWNrIGluIGEgdGltZW91dCBzbyB3ZSdyZVxuICAgICAgLy8gbm90IGluIHRoaXMgc2NvcGUgaW5zaWRlIHRoZSBwcm9taXNlLlxuICAgICAgYm0gPSBiaXRtYXA7XG4gICAgICBzZXRUaW1lb3V0KGNiKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbihlKSB7XG4gICAgICBlcnIgPSBlO1xuICAgICAgc2V0VGltZW91dChjYik7XG4gICAgfSk7XG4gICAgaW1nID0gbnVsbDtcbiAgfVxuICByZXR1cm4gaW1nO1xufVxuXG4vKipcbiAqIGNoZWNrIGlmIG9iamVjdCBpcyBhIFRleEltYWdlU291cmNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBPYmplY3QgdG8gdGVzdFxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBvYmplY3QgaXMgYSBUZXhJbWFnZVNvdXJjZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNUZXhJbWFnZVNvdXJjZShvYmopIHtcbiAgcmV0dXJuICh0eXBlb2YgSW1hZ2VCaXRtYXAgIT09ICd1bmRlZmluZWQnICYmIG9iaiBpbnN0YW5jZW9mIEltYWdlQml0bWFwKSB8fFxuICAgICAgICAgKHR5cGVvZiBJbWFnZURhdGEgIT09ICd1bmRlZmluZWQnICAmJiBvYmogaW5zdGFuY2VvZiBJbWFnZURhdGEpIHx8XG4gICAgICAgICAodHlwZW9mIEhUTUxFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAgJiYgb2JqIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpO1xufVxuXG4vKipcbiAqIGlmIG9iaiBpcyBhbiBUZXhJbWFnZVNvdXJjZSB0aGVuIGp1c3RcbiAqIHVzZXMgaXQgb3RoZXJ3aXNlIGlmIG9iaiBpcyBhIHN0cmluZ1xuICogdGhlbiBsb2FkIGl0IGZpcnN0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfFRleEltYWdlU291cmNlfSBvYmpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjcm9zc09yaWdpblxuICogQHBhcmFtIHtmdW5jdGlvbihlcnIsIGltZyl9IFtjYWxsYmFja10gYSBjYWxsYmFjayB0aGF0J3MgcGFzc2VkIGFuIGVycm9yIGFuZCB0aGUgaW1hZ2UuIFRoZSBlcnJvciB3aWxsIGJlIG5vbi1udWxsXG4gKiAgICAgaWYgdGhlcmUgd2FzIGFuIGVycm9yXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBsb2FkQW5kVXNlSW1hZ2Uob2JqLCBjcm9zc09yaWdpbiwgY2FsbGJhY2spIHtcbiAgaWYgKGlzVGV4SW1hZ2VTb3VyY2Uob2JqKSkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBjYWxsYmFjayhudWxsLCBvYmopO1xuICAgIH0pO1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICByZXR1cm4gbG9hZEltYWdlKG9iaiwgY3Jvc3NPcmlnaW4sIGNhbGxiYWNrKTtcbn1cblxuLyoqXG4gKiBTZXRzIGEgdGV4dHVyZSB0byBhIDF4MSBwaXhlbCBjb2xvci4gSWYgYG9wdGlvbnMuY29sb3IgPT09IGZhbHNlYCBpcyBub3RoaW5nIGhhcHBlbnMuIElmIGl0J3Mgbm90IHNldFxuICogdGhlIGRlZmF1bHQgdGV4dHVyZSBjb2xvciBpcyB1c2VkIHdoaWNoIGNhbiBiZSBzZXQgYnkgY2FsbGluZyBgc2V0RGVmYXVsdFRleHR1cmVDb2xvcmAuXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgdGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHtXZWJHTFRleHR1cmV9IHRleCB0aGUgV2ViR0xUZXh0dXJlIHRvIHNldCBwYXJhbWV0ZXJzIGZvclxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5UZXh0dXJlT3B0aW9uc30gW29wdGlvbnNdIEEgVGV4dHVyZU9wdGlvbnMgb2JqZWN0IHdpdGggd2hhdGV2ZXIgcGFyYW1ldGVycyB5b3Ugd2FudCBzZXQuXG4gKiAgIFRoaXMgaXMgb2Z0ZW4gdGhlIHNhbWUgb3B0aW9ucyB5b3UgcGFzc2VkIGluIHdoZW4geW91IGNyZWF0ZWQgdGhlIHRleHR1cmUuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdGV4dHVyZXNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNldFRleHR1cmVUbzFQaXhlbENvbG9yKGdsLCB0ZXgsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwgZGVmYXVsdHMkMS50ZXh0dXJlT3B0aW9ucztcbiAgY29uc3QgdGFyZ2V0ID0gb3B0aW9ucy50YXJnZXQgfHwgVEVYVFVSRV8yRCQyO1xuICBnbC5iaW5kVGV4dHVyZSh0YXJnZXQsIHRleCk7XG4gIGlmIChvcHRpb25zLmNvbG9yID09PSBmYWxzZSkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBBc3N1bWUgaXQncyBhIFVSTFxuICAvLyBQdXQgMXgxIHBpeGVscyBpbiB0ZXh0dXJlLiBUaGF0IG1ha2VzIGl0IHJlbmRlcmFibGUgaW1tZWRpYXRlbHkgcmVnYXJkbGVzcyBvZiBmaWx0ZXJpbmcuXG4gIGNvbnN0IGNvbG9yID0gbWFrZTFQaXhlbChvcHRpb25zLmNvbG9yKTtcbiAgaWYgKHRhcmdldCA9PT0gVEVYVFVSRV9DVUJFX01BUCQxKSB7XG4gICAgZm9yIChsZXQgaWkgPSAwOyBpaSA8IDY7ICsraWkpIHtcbiAgICAgIGdsLnRleEltYWdlMkQoVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9YICsgaWksIDAsIFJHQkEkMSwgMSwgMSwgMCwgUkdCQSQxLCBVTlNJR05FRF9CWVRFJDEsIGNvbG9yKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodGFyZ2V0ID09PSBURVhUVVJFXzNEJDEgfHwgdGFyZ2V0ID09PSBURVhUVVJFXzJEX0FSUkFZJDEpIHtcbiAgICBnbC50ZXhJbWFnZTNEKHRhcmdldCwgMCwgUkdCQSQxLCAxLCAxLCAxLCAwLCBSR0JBJDEsIFVOU0lHTkVEX0JZVEUkMSwgY29sb3IpO1xuICB9IGVsc2Uge1xuICAgIGdsLnRleEltYWdlMkQodGFyZ2V0LCAwLCBSR0JBJDEsIDEsIDEsIDAsIFJHQkEkMSwgVU5TSUdORURfQllURSQxLCBjb2xvcik7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgc3JjIGltYWdlKHMpIHVzZWQgdG8gY3JlYXRlIGEgdGV4dHVyZS5cbiAqXG4gKiBXaGVuIHlvdSBjYWxsIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVUZXh0dXJlfSBvciB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlVGV4dHVyZXN9XG4gKiB5b3UgY2FuIHBhc3MgaW4gdXJscyBmb3IgaW1hZ2VzIHRvIGxvYWQgaW50byB0aGUgdGV4dHVyZXMuIElmIGl0J3MgYSBzaW5nbGUgdXJsXG4gKiB0aGVuIHRoaXMgd2lsbCBiZSBhIHNpbmdsZSBIVE1MSW1hZ2VFbGVtZW50LiBJZiBpdCdzIGFuIGFycmF5IG9mIHVybHMgdXNlZCBmb3IgYSBjdWJlbWFwXG4gKiB0aGlzIHdpbGwgYmUgYSBjb3JyZXNwb25kaW5nIGFycmF5IG9mIGltYWdlcyBmb3IgdGhlIGN1YmVtYXAuXG4gKlxuICogQHR5cGVkZWYge0hUTUxJbWFnZUVsZW1lbnR8SFRNTEltYWdlRWxlbWVudFtdfSBUZXh0dXJlU3JjXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG4vKipcbiAqIEEgY2FsbGJhY2sgZm9yIHdoZW4gYW4gaW1hZ2UgZmluaXNoZWQgZG93bmxvYWRpbmcgYW5kIGJlZW4gdXBsb2FkZWQgaW50byBhIHRleHR1cmVcbiAqIEBjYWxsYmFjayBUZXh0dXJlUmVhZHlDYWxsYmFja1xuICogQHBhcmFtIHsqfSBlcnIgSWYgdHJ1dGh5IHRoZXJlIHdhcyBhbiBlcnJvci5cbiAqIEBwYXJhbSB7V2ViR0xUZXh0dXJlfSB0ZXh0dXJlIHRoZSB0ZXh0dXJlLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5UZXh0dXJlU3JjfSBzb3VyY2UgaW1hZ2UocykgdXNlZCB0byBhcyB0aGUgc3JjIGZvciB0aGUgdGV4dHVyZVxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuLyoqXG4gKiBBIGNhbGxiYWNrIGZvciB3aGVuIGFsbCBpbWFnZXMgaGF2ZSBmaW5pc2hlZCBkb3dubG9hZGluZyBhbmQgYmVlbiB1cGxvYWRlZCBpbnRvIHRoZWlyIHJlc3BlY3RpdmUgdGV4dHVyZXNcbiAqIEBjYWxsYmFjayBUZXh0dXJlc1JlYWR5Q2FsbGJhY2tcbiAqIEBwYXJhbSB7Kn0gZXJyIElmIHRydXRoeSB0aGVyZSB3YXMgYW4gZXJyb3IuXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBXZWJHTFRleHR1cmU+fSB0ZXh0dXJlcyB0aGUgY3JlYXRlZCB0ZXh0dXJlcyBieSBuYW1lLiBTYW1lIGFzIHJldHVybmVkIGJ5IHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVUZXh0dXJlc30uXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBtb2R1bGU6dHdnbC5UZXh0dXJlU3JjPn0gc291cmNlcyB0aGUgaW1hZ2UocykgdXNlZCBmb3IgdGhlIHRleHR1cmUgYnkgbmFtZS5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogQSBjYWxsYmFjayBmb3Igd2hlbiBhbiBpbWFnZSBmaW5pc2hlZCBkb3dubG9hZGluZyBhbmQgYmVlbiB1cGxvYWRlZCBpbnRvIGEgdGV4dHVyZVxuICogQGNhbGxiYWNrIEN1YmVtYXBSZWFkeUNhbGxiYWNrXG4gKiBAcGFyYW0geyp9IGVyciBJZiB0cnV0aHkgdGhlcmUgd2FzIGFuIGVycm9yLlxuICogQHBhcmFtIHtXZWJHTFRleHR1cmV9IHRleCB0aGUgdGV4dHVyZS5cbiAqIEBwYXJhbSB7SFRNTEltYWdlRWxlbWVudFtdfSBpbWdzIHRoZSBpbWFnZXMgZm9yIGVhY2ggZmFjZS5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogQSBjYWxsYmFjayBmb3Igd2hlbiBhbiBpbWFnZSBmaW5pc2hlZCBkb3dubG9hZGluZyBhbmQgYmVlbiB1cGxvYWRlZCBpbnRvIGEgdGV4dHVyZVxuICogQGNhbGxiYWNrIFRocmVlRFJlYWR5Q2FsbGJhY2tcbiAqIEBwYXJhbSB7Kn0gZXJyIElmIHRydXRoeSB0aGVyZSB3YXMgYW4gZXJyb3IuXG4gKiBAcGFyYW0ge1dlYkdMVGV4dHVyZX0gdGV4IHRoZSB0ZXh0dXJlLlxuICogQHBhcmFtIHtIVE1MSW1hZ2VFbGVtZW50W119IGltZ3MgdGhlIGltYWdlcyBmb3IgZWFjaCBzbGljZS5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogTG9hZHMgYSB0ZXh0dXJlIGZyb20gYW4gaW1hZ2UgZnJvbSBhIFVybCBhcyBzcGVjaWZpZWQgaW4gYG9wdGlvbnMuc3JjYFxuICogSWYgYG9wdGlvbnMuY29sb3IgIT09IGZhbHNlYCB3aWxsIHNldCB0aGUgdGV4dHVyZSB0byBhIDF4MSBwaXhlbCBjb2xvciBzbyB0aGF0IHRoZSB0ZXh0dXJlIGlzXG4gKiBpbW1lZGlhdGVseSB1c2VhYmxlLiBJdCB3aWxsIGJlIHVwZGF0ZWQgd2l0aCB0aGUgY29udGVudHMgb2YgdGhlIGltYWdlIG9uY2UgdGhlIGltYWdlIGhhcyBmaW5pc2hlZFxuICogZG93bmxvYWRpbmcuIEZpbHRlcmluZyBvcHRpb25zIHdpbGwgYmUgc2V0IGFzIGFwcHJvcHJpYXRlIGZvciBpbWFnZSB1bmxlc3MgYG9wdGlvbnMuYXV0byA9PT0gZmFsc2VgLlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7V2ViR0xUZXh0dXJlfSB0ZXggdGhlIFdlYkdMVGV4dHVyZSB0byBzZXQgcGFyYW1ldGVycyBmb3JcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9IFtvcHRpb25zXSBBIFRleHR1cmVPcHRpb25zIG9iamVjdCB3aXRoIHdoYXRldmVyIHBhcmFtZXRlcnMgeW91IHdhbnQgc2V0LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5UZXh0dXJlUmVhZHlDYWxsYmFja30gW2NhbGxiYWNrXSBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBpbWFnZSBoYXMgZmluaXNoZWQgbG9hZGluZy4gZXJyIHdpbGxcbiAqICAgIGJlIG5vbiBudWxsIGlmIHRoZXJlIHdhcyBhbiBlcnJvci5cbiAqIEByZXR1cm4ge0hUTUxJbWFnZUVsZW1lbnR9IHRoZSBpbWFnZSBiZWluZyBkb3dubG9hZGVkLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3RleHR1cmVzXG4gKi9cbmZ1bmN0aW9uIGxvYWRUZXh0dXJlRnJvbVVybChnbCwgdGV4LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IG5vb3A7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IGRlZmF1bHRzJDEudGV4dHVyZU9wdGlvbnM7XG4gIHNldFRleHR1cmVUbzFQaXhlbENvbG9yKGdsLCB0ZXgsIG9wdGlvbnMpO1xuICAvLyBCZWNhdXNlIGl0J3MgYXN5bmMgd2UgbmVlZCB0byBjb3B5IHRoZSBvcHRpb25zLlxuICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG4gIGNvbnN0IGltZyA9IGxvYWRBbmRVc2VJbWFnZShvcHRpb25zLnNyYywgb3B0aW9ucy5jcm9zc09yaWdpbiwgZnVuY3Rpb24oZXJyLCBpbWcpIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBjYWxsYmFjayhlcnIsIHRleCwgaW1nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGV4dHVyZUZyb21FbGVtZW50KGdsLCB0ZXgsIGltZywgb3B0aW9ucyk7XG4gICAgICBjYWxsYmFjayhudWxsLCB0ZXgsIGltZyk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGltZztcbn1cblxuLyoqXG4gKiBMb2FkcyBhIGN1YmVtYXAgZnJvbSA2IHVybHMgb3IgVGV4SW1hZ2VTb3VyY2VzIGFzIHNwZWNpZmllZCBpbiBgb3B0aW9ucy5zcmNgLiBXaWxsIHNldCB0aGUgY3ViZW1hcCB0byBhIDF4MSBwaXhlbCBjb2xvclxuICogc28gdGhhdCBpdCBpcyB1c2FibGUgaW1tZWRpYXRlbHkgdW5sZXNzIGBvcHRpb24uY29sb3IgPT09IGZhbHNlYC5cbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge1dlYkdMVGV4dHVyZX0gdGV4IHRoZSBXZWJHTFRleHR1cmUgdG8gc2V0IHBhcmFtZXRlcnMgZm9yXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlRleHR1cmVPcHRpb25zfSBvcHRpb25zIEEgVGV4dHVyZU9wdGlvbnMgb2JqZWN0IHdpdGggd2hhdGV2ZXIgcGFyYW1ldGVycyB5b3Ugd2FudCBzZXQuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLkN1YmVtYXBSZWFkeUNhbGxiYWNrfSBbY2FsbGJhY2tdIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gYWxsIHRoZSBpbWFnZXMgaGF2ZSBmaW5pc2hlZCBsb2FkaW5nLiBlcnIgd2lsbFxuICogICAgYmUgbm9uIG51bGwgaWYgdGhlcmUgd2FzIGFuIGVycm9yLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3RleHR1cmVzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBsb2FkQ3ViZW1hcEZyb21VcmxzKGdsLCB0ZXgsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgbm9vcDtcbiAgY29uc3QgdXJscyA9IG9wdGlvbnMuc3JjO1xuICBpZiAodXJscy5sZW5ndGggIT09IDYpIHtcbiAgICB0aHJvdyBcInRoZXJlIG11c3QgYmUgNiB1cmxzIGZvciBhIGN1YmVtYXBcIjtcbiAgfVxuICBjb25zdCBsZXZlbCA9IG9wdGlvbnMubGV2ZWwgfHwgMDtcbiAgY29uc3QgaW50ZXJuYWxGb3JtYXQgPSBvcHRpb25zLmludGVybmFsRm9ybWF0IHx8IG9wdGlvbnMuZm9ybWF0IHx8IFJHQkEkMTtcbiAgY29uc3QgZm9ybWF0VHlwZSA9IGdldEZvcm1hdEFuZFR5cGVGb3JJbnRlcm5hbEZvcm1hdChpbnRlcm5hbEZvcm1hdCk7XG4gIGNvbnN0IGZvcm1hdCA9IG9wdGlvbnMuZm9ybWF0IHx8IGZvcm1hdFR5cGUuZm9ybWF0O1xuICBjb25zdCB0eXBlID0gb3B0aW9ucy50eXBlIHx8IFVOU0lHTkVEX0JZVEUkMTtcbiAgY29uc3QgdGFyZ2V0ID0gb3B0aW9ucy50YXJnZXQgfHwgVEVYVFVSRV8yRCQyO1xuICBpZiAodGFyZ2V0ICE9PSBURVhUVVJFX0NVQkVfTUFQJDEpIHtcbiAgICB0aHJvdyBcInRhcmdldCBtdXN0IGJlIFRFWFRVUkVfQ1VCRV9NQVBcIjtcbiAgfVxuICBzZXRUZXh0dXJlVG8xUGl4ZWxDb2xvcihnbCwgdGV4LCBvcHRpb25zKTtcbiAgLy8gQmVjYXVzZSBpdCdzIGFzeW5jIHdlIG5lZWQgdG8gY29weSB0aGUgb3B0aW9ucy5cbiAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xuICBsZXQgbnVtVG9Mb2FkID0gNjtcbiAgY29uc3QgZXJyb3JzID0gW107XG4gIGNvbnN0IGZhY2VzID0gZ2V0Q3ViZUZhY2VPcmRlcihnbCwgb3B0aW9ucyk7XG4gIGxldCBpbWdzOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIGZ1bmN0aW9uIHVwbG9hZEltZyhmYWNlVGFyZ2V0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVyciwgaW1nKSB7XG4gICAgICAtLW51bVRvTG9hZDtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goZXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpbWcud2lkdGggIT09IGltZy5oZWlnaHQpIHtcbiAgICAgICAgICBlcnJvcnMucHVzaChcImN1YmVtYXAgZmFjZSBpbWcgaXMgbm90IGEgc3F1YXJlOiBcIiArIGltZy5zcmMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFBhY2tTdGF0ZShnbCwgb3B0aW9ucyk7XG4gICAgICAgICAgZ2wuYmluZFRleHR1cmUodGFyZ2V0LCB0ZXgpO1xuXG4gICAgICAgICAgLy8gU28gYXNzdW1pbmcgdGhpcyBpcyB0aGUgZmlyc3QgaW1hZ2Ugd2Ugbm93IGhhdmUgb25lIGZhY2UgdGhhdCdzIGltZyBzaXplZFxuICAgICAgICAgIC8vIGFuZCA1IGZhY2VzIHRoYXQgYXJlIDF4MSBwaXhlbCBzbyBzaXplIHRoZSBvdGhlciBmYWNlc1xuICAgICAgICAgIGlmIChudW1Ub0xvYWQgPT09IDUpIHtcbiAgICAgICAgICAgIC8vIHVzZSB0aGUgZGVmYXVsdCBvcmRlclxuICAgICAgICAgICAgZ2V0Q3ViZUZhY2VPcmRlcigpLmZvckVhY2goZnVuY3Rpb24ob3RoZXJUYXJnZXQpIHtcbiAgICAgICAgICAgICAgLy8gU2hvdWxkIHdlIHJlLXVzZSB0aGUgc2FtZSBmYWNlIG9yIGEgY29sb3I/XG4gICAgICAgICAgICAgIGdsLnRleEltYWdlMkQob3RoZXJUYXJnZXQsIGxldmVsLCBpbnRlcm5hbEZvcm1hdCwgZm9ybWF0LCB0eXBlLCBpbWcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsLnRleEltYWdlMkQoZmFjZVRhcmdldCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCBmb3JtYXQsIHR5cGUsIGltZyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNob3VsZEF1dG9tYXRpY2FsbHlTZXRUZXh0dXJlRmlsdGVyaW5nRm9yU2l6ZShvcHRpb25zKSkge1xuICAgICAgICAgICAgZ2wuZ2VuZXJhdGVNaXBtYXAodGFyZ2V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG51bVRvTG9hZCA9PT0gMCkge1xuICAgICAgICBjYWxsYmFjayhlcnJvcnMubGVuZ3RoID8gZXJyb3JzIDogdW5kZWZpbmVkLCB0ZXgsIGltZ3MpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBpbWdzID0gdXJscy5tYXAoZnVuY3Rpb24odXJsLCBuZHgpIHtcbiAgICByZXR1cm4gbG9hZEFuZFVzZUltYWdlKHVybCwgb3B0aW9ucy5jcm9zc09yaWdpbiwgdXBsb2FkSW1nKGZhY2VzW25keF0pKTtcbiAgfSk7XG59XG5cbi8qKlxuICogTG9hZHMgYSAyZCBhcnJheSBvciAzZCB0ZXh0dXJlIGZyb20gdXJscyBPUiBUZXhJbWFnZVNvdXJjZXMgYXMgc3BlY2lmaWVkIGluIGBvcHRpb25zLnNyY2AuXG4gKiBXaWxsIHNldCB0aGUgdGV4dHVyZSB0byBhIDF4MSBwaXhlbCBjb2xvclxuICogc28gdGhhdCBpdCBpcyB1c2FibGUgaW1tZWRpYXRlbHkgdW5sZXNzIGBvcHRpb24uY29sb3IgPT09IGZhbHNlYC5cbiAqXG4gKiBJZiB0aGUgd2lkdGggYW5kIGhlaWdodCBpcyBub3Qgc3BlY2lmaWVkIHRoZSB3aWR0aCBhbmQgaGVpZ2h0IG9mIHRoZSBmaXJzdFxuICogaW1hZ2UgbG9hZGVkIHdpbGwgYmUgdXNlZC4gTm90ZSB0aGF0IHNpbmNlIGltYWdlcyBhcmUgbG9hZGVkIGFzeW5jXG4gKiB3aGljaCBpbWFnZSBkb3dubG9hZHMgZmlyc3QgaXMgdW5rbm93bi5cbiAqXG4gKiBJZiBhbiBpbWFnZSBpcyBub3QgdGhlIHNhbWUgc2l6ZSBhcyB0aGUgd2lkdGggYW5kIGhlaWdodCBpdCB3aWxsIGJlIHNjYWxlZFxuICogdG8gdGhhdCB3aWR0aCBhbmQgaGVpZ2h0LlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge1dlYkdMVGV4dHVyZX0gdGV4IHRoZSBXZWJHTFRleHR1cmUgdG8gc2V0IHBhcmFtZXRlcnMgZm9yXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlRleHR1cmVPcHRpb25zfSBvcHRpb25zIEEgVGV4dHVyZU9wdGlvbnMgb2JqZWN0IHdpdGggd2hhdGV2ZXIgcGFyYW1ldGVycyB5b3Ugd2FudCBzZXQuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlRocmVlRFJlYWR5Q2FsbGJhY2t9IFtjYWxsYmFja10gQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiBhbGwgdGhlIGltYWdlcyBoYXZlIGZpbmlzaGVkIGxvYWRpbmcuIGVyciB3aWxsXG4gKiAgICBiZSBub24gbnVsbCBpZiB0aGVyZSB3YXMgYW4gZXJyb3IuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdGV4dHVyZXNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGxvYWRTbGljZXNGcm9tVXJscyhnbCwgdGV4LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IG5vb3A7XG4gIGNvbnN0IHVybHMgPSBvcHRpb25zLnNyYztcbiAgY29uc3QgaW50ZXJuYWxGb3JtYXQgPSBvcHRpb25zLmludGVybmFsRm9ybWF0IHx8IG9wdGlvbnMuZm9ybWF0IHx8IFJHQkEkMTtcbiAgY29uc3QgZm9ybWF0VHlwZSA9IGdldEZvcm1hdEFuZFR5cGVGb3JJbnRlcm5hbEZvcm1hdChpbnRlcm5hbEZvcm1hdCk7XG4gIGNvbnN0IGZvcm1hdCA9IG9wdGlvbnMuZm9ybWF0IHx8IGZvcm1hdFR5cGUuZm9ybWF0O1xuICBjb25zdCB0eXBlID0gb3B0aW9ucy50eXBlIHx8IFVOU0lHTkVEX0JZVEUkMTtcbiAgY29uc3QgdGFyZ2V0ID0gb3B0aW9ucy50YXJnZXQgfHwgVEVYVFVSRV8yRF9BUlJBWSQxO1xuICBpZiAodGFyZ2V0ICE9PSBURVhUVVJFXzNEJDEgJiYgdGFyZ2V0ICE9PSBURVhUVVJFXzJEX0FSUkFZJDEpIHtcbiAgICB0aHJvdyBcInRhcmdldCBtdXN0IGJlIFRFWFRVUkVfM0Qgb3IgVEVYVFVSRV8yRF9BUlJBWVwiO1xuICB9XG4gIHNldFRleHR1cmVUbzFQaXhlbENvbG9yKGdsLCB0ZXgsIG9wdGlvbnMpO1xuICAvLyBCZWNhdXNlIGl0J3MgYXN5bmMgd2UgbmVlZCB0byBjb3B5IHRoZSBvcHRpb25zLlxuICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG4gIGxldCBudW1Ub0xvYWQgPSB1cmxzLmxlbmd0aDtcbiAgY29uc3QgZXJyb3JzID0gW107XG4gIGxldCBpbWdzOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBjb25zdCBsZXZlbCA9IG9wdGlvbnMubGV2ZWwgfHwgMDtcbiAgbGV0IHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgbGV0IGhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xuICBjb25zdCBkZXB0aCA9IHVybHMubGVuZ3RoO1xuICBsZXQgZmlyc3RJbWFnZSA9IHRydWU7XG5cbiAgZnVuY3Rpb24gdXBsb2FkSW1nKHNsaWNlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVyciwgaW1nKSB7XG4gICAgICAtLW51bVRvTG9hZDtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goZXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFBhY2tTdGF0ZShnbCwgb3B0aW9ucyk7XG4gICAgICAgIGdsLmJpbmRUZXh0dXJlKHRhcmdldCwgdGV4KTtcblxuICAgICAgICBpZiAoZmlyc3RJbWFnZSkge1xuICAgICAgICAgIGZpcnN0SW1hZ2UgPSBmYWxzZTtcbiAgICAgICAgICB3aWR0aCA9IG9wdGlvbnMud2lkdGggfHwgaW1nLndpZHRoO1xuICAgICAgICAgIGhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IHx8IGltZy5oZWlnaHQ7XG4gICAgICAgICAgZ2wudGV4SW1hZ2UzRCh0YXJnZXQsIGxldmVsLCBpbnRlcm5hbEZvcm1hdCwgd2lkdGgsIGhlaWdodCwgZGVwdGgsIDAsIGZvcm1hdCwgdHlwZSwgbnVsbCk7XG5cbiAgICAgICAgICAvLyBwdXQgaXQgaW4gZXZlcnkgc2xpY2Ugb3RoZXJ3aXNlIHNvbWUgc2xpY2VzIHdpbGwgYmUgMCwwLDAsMFxuICAgICAgICAgIGZvciAobGV0IHMgPSAwOyBzIDwgZGVwdGg7ICsrcykge1xuICAgICAgICAgICAgZ2wudGV4U3ViSW1hZ2UzRCh0YXJnZXQsIGxldmVsLCAwLCAwLCBzLCB3aWR0aCwgaGVpZ2h0LCAxLCBmb3JtYXQsIHR5cGUsIGltZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBzcmMgPSBpbWc7XG4gICAgICAgICAgbGV0IGN0eDtcbiAgICAgICAgICBpZiAoaW1nLndpZHRoICE9PSB3aWR0aCB8fCBpbWcuaGVpZ2h0ICE9PSBoZWlnaHQpIHtcbiAgICAgICAgICAgIC8vIFNpemUgdGhlIGltYWdlIHRvIGZpeFxuICAgICAgICAgICAgY3R4ID0gZ2V0U2hhcmVkMkRDb250ZXh0KCk7XG4gICAgICAgICAgICBzcmMgPSBjdHguY2FudmFzO1xuICAgICAgICAgICAgY3R4LmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZ2wudGV4U3ViSW1hZ2UzRCh0YXJnZXQsIGxldmVsLCAwLCAwLCBzbGljZSwgd2lkdGgsIGhlaWdodCwgMSwgZm9ybWF0LCB0eXBlLCBzcmMpO1xuXG4gICAgICAgICAgLy8gZnJlZSB0aGUgY2FudmFzIG1lbW9yeVxuICAgICAgICAgIGlmIChjdHggJiYgc3JjID09PSBjdHguY2FudmFzKSB7XG4gICAgICAgICAgICBjdHguY2FudmFzLndpZHRoID0gMDtcbiAgICAgICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hvdWxkQXV0b21hdGljYWxseVNldFRleHR1cmVGaWx0ZXJpbmdGb3JTaXplKG9wdGlvbnMpKSB7XG4gICAgICAgICAgZ2wuZ2VuZXJhdGVNaXBtYXAodGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobnVtVG9Mb2FkID09PSAwKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9ycy5sZW5ndGggPyBlcnJvcnMgOiB1bmRlZmluZWQsIHRleCwgaW1ncyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGltZ3MgPSB1cmxzLm1hcChmdW5jdGlvbih1cmwsIG5keCkge1xuICAgIHJldHVybiBsb2FkQW5kVXNlSW1hZ2UodXJsLCBvcHRpb25zLmNyb3NzT3JpZ2luLCB1cGxvYWRJbWcobmR4KSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFNldHMgYSB0ZXh0dXJlIGZyb20gYW4gYXJyYXkgb3IgdHlwZWQgYXJyYXkuIElmIHRoZSB3aWR0aCBvciBoZWlnaHQgaXMgbm90IHByb3ZpZGVkIHdpbGwgYXR0ZW1wdCB0b1xuICogZ3Vlc3MgdGhlIHNpemUuIFNlZSB7QGxpbmsgbW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9LlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7V2ViR0xUZXh0dXJlfSB0ZXggdGhlIFdlYkdMVGV4dHVyZSB0byBzZXQgcGFyYW1ldGVycyBmb3JcbiAqIEBwYXJhbSB7KG51bWJlcltdfEFycmF5QnVmZmVyVmlldyl9IHNyYyBBbiBhcnJheSBvciB0eXBlZCBhcnJ5IHdpdGggdGV4dHVyZSBkYXRhLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5UZXh0dXJlT3B0aW9uc30gW29wdGlvbnNdIEEgVGV4dHVyZU9wdGlvbnMgb2JqZWN0IHdpdGggd2hhdGV2ZXIgcGFyYW1ldGVycyB5b3Ugd2FudCBzZXQuXG4gKiAgIFRoaXMgaXMgb2Z0ZW4gdGhlIHNhbWUgb3B0aW9ucyB5b3UgcGFzc2VkIGluIHdoZW4geW91IGNyZWF0ZWQgdGhlIHRleHR1cmUuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdGV4dHVyZXNcbiAqL1xuZnVuY3Rpb24gc2V0VGV4dHVyZUZyb21BcnJheShnbCwgdGV4LCBzcmMsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwgZGVmYXVsdHMkMS50ZXh0dXJlT3B0aW9ucztcbiAgY29uc3QgdGFyZ2V0ID0gb3B0aW9ucy50YXJnZXQgfHwgVEVYVFVSRV8yRCQyO1xuICBnbC5iaW5kVGV4dHVyZSh0YXJnZXQsIHRleCk7XG4gIGxldCB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gIGxldCBoZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcbiAgbGV0IGRlcHRoID0gb3B0aW9ucy5kZXB0aDtcbiAgY29uc3QgbGV2ZWwgPSBvcHRpb25zLmxldmVsIHx8IDA7XG4gIGNvbnN0IGludGVybmFsRm9ybWF0ID0gb3B0aW9ucy5pbnRlcm5hbEZvcm1hdCB8fCBvcHRpb25zLmZvcm1hdCB8fCBSR0JBJDE7XG4gIGNvbnN0IGZvcm1hdFR5cGUgPSBnZXRGb3JtYXRBbmRUeXBlRm9ySW50ZXJuYWxGb3JtYXQoaW50ZXJuYWxGb3JtYXQpO1xuICBjb25zdCBmb3JtYXQgPSBvcHRpb25zLmZvcm1hdCB8fCBmb3JtYXRUeXBlLmZvcm1hdDtcbiAgY29uc3QgdHlwZSA9IG9wdGlvbnMudHlwZSB8fCBnZXRUZXh0dXJlVHlwZUZvckFycmF5VHlwZShnbCwgc3JjLCBmb3JtYXRUeXBlLnR5cGUpO1xuICBpZiAoIWlzQXJyYXlCdWZmZXIoc3JjKSkge1xuICAgIGNvbnN0IFR5cGUgPSBnZXRUeXBlZEFycmF5VHlwZUZvckdMVHlwZSh0eXBlKTtcbiAgICBzcmMgPSBuZXcgVHlwZShzcmMpO1xuICB9IGVsc2UgaWYgKHNyYyBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5KSB7XG4gICAgc3JjID0gbmV3IFVpbnQ4QXJyYXkoc3JjLmJ1ZmZlcik7XG4gIH1cblxuICBjb25zdCBieXRlc1BlckVsZW1lbnQgPSBnZXRCeXRlc1BlckVsZW1lbnRGb3JJbnRlcm5hbEZvcm1hdChpbnRlcm5hbEZvcm1hdCwgdHlwZSk7XG4gIGNvbnN0IG51bUVsZW1lbnRzID0gc3JjLmJ5dGVMZW5ndGggLyBieXRlc1BlckVsZW1lbnQ7ICAvLyBUT0RPOiBjaGVjayBVTlBBQ0tfQUxJR05NRU5UP1xuICBpZiAobnVtRWxlbWVudHMgJSAxKSB7XG4gICAgdGhyb3cgXCJsZW5ndGggd3Jvbmcgc2l6ZSBmb3IgZm9ybWF0OiBcIiArIGdsRW51bVRvU3RyaW5nKGdsLCBmb3JtYXQpO1xuICB9XG4gIGxldCBkaW1lbnNpb25zO1xuICBpZiAodGFyZ2V0ID09PSBURVhUVVJFXzNEJDEgfHwgdGFyZ2V0ID09PSBURVhUVVJFXzJEX0FSUkFZJDEpIHtcbiAgICBpZiAoIXdpZHRoICYmICFoZWlnaHQgJiYgIWRlcHRoKSB7XG4gICAgICBjb25zdCBzaXplID0gTWF0aC5jYnJ0KG51bUVsZW1lbnRzKTtcbiAgICAgIGlmIChzaXplICUgMSAhPT0gMCkge1xuICAgICAgICB0aHJvdyBcImNhbid0IGd1ZXNzIGN1YmUgc2l6ZSBvZiBhcnJheSBvZiBudW1FbGVtZW50czogXCIgKyBudW1FbGVtZW50cztcbiAgICAgIH1cbiAgICAgIHdpZHRoID0gc2l6ZTtcbiAgICAgIGhlaWdodCA9IHNpemU7XG4gICAgICBkZXB0aCA9IHNpemU7XG4gICAgfSBlbHNlIGlmICh3aWR0aCAmJiAoIWhlaWdodCB8fCAhZGVwdGgpKSB7XG4gICAgICBkaW1lbnNpb25zID0gZ3Vlc3NEaW1lbnNpb25zKGdsLCB0YXJnZXQsIGhlaWdodCwgZGVwdGgsIG51bUVsZW1lbnRzIC8gd2lkdGgpO1xuICAgICAgaGVpZ2h0ID0gZGltZW5zaW9ucy53aWR0aDtcbiAgICAgIGRlcHRoID0gZGltZW5zaW9ucy5oZWlnaHQ7XG4gICAgfSBlbHNlIGlmIChoZWlnaHQgJiYgKCF3aWR0aCB8fCAhZGVwdGgpKSB7XG4gICAgICBkaW1lbnNpb25zID0gZ3Vlc3NEaW1lbnNpb25zKGdsLCB0YXJnZXQsIHdpZHRoLCBkZXB0aCwgbnVtRWxlbWVudHMgLyBoZWlnaHQpO1xuICAgICAgd2lkdGggPSBkaW1lbnNpb25zLndpZHRoO1xuICAgICAgZGVwdGggPSBkaW1lbnNpb25zLmhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGltZW5zaW9ucyA9IGd1ZXNzRGltZW5zaW9ucyhnbCwgdGFyZ2V0LCB3aWR0aCwgaGVpZ2h0LCBudW1FbGVtZW50cyAvIGRlcHRoKTtcbiAgICAgIHdpZHRoID0gZGltZW5zaW9ucy53aWR0aDtcbiAgICAgIGhlaWdodCA9IGRpbWVuc2lvbnMuaGVpZ2h0O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBkaW1lbnNpb25zID0gZ3Vlc3NEaW1lbnNpb25zKGdsLCB0YXJnZXQsIHdpZHRoLCBoZWlnaHQsIG51bUVsZW1lbnRzKTtcbiAgICB3aWR0aCA9IGRpbWVuc2lvbnMud2lkdGg7XG4gICAgaGVpZ2h0ID0gZGltZW5zaW9ucy5oZWlnaHQ7XG4gIH1cbiAgc2V0U2tpcFN0YXRlVG9EZWZhdWx0KGdsKTtcbiAgZ2wucGl4ZWxTdG9yZWkoVU5QQUNLX0FMSUdOTUVOVCwgb3B0aW9ucy51bnBhY2tBbGlnbm1lbnQgfHwgMSk7XG4gIHNldFBhY2tTdGF0ZShnbCwgb3B0aW9ucyk7XG4gIGlmICh0YXJnZXQgPT09IFRFWFRVUkVfQ1VCRV9NQVAkMSkge1xuICAgIGNvbnN0IGVsZW1lbnRzUGVyRWxlbWVudCA9IGJ5dGVzUGVyRWxlbWVudCAvIHNyYy5CWVRFU19QRVJfRUxFTUVOVDtcbiAgICBjb25zdCBmYWNlU2l6ZSA9IG51bUVsZW1lbnRzIC8gNiAqIGVsZW1lbnRzUGVyRWxlbWVudDtcblxuICAgIGdldEN1YmVGYWNlc1dpdGhOZHgoZ2wsIG9wdGlvbnMpLmZvckVhY2goZiA9PiB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBmYWNlU2l6ZSAqIGYubmR4O1xuICAgICAgY29uc3QgZGF0YSA9IHNyYy5zdWJhcnJheShvZmZzZXQsIG9mZnNldCArIGZhY2VTaXplKTtcbiAgICAgIGdsLnRleEltYWdlMkQoZi5mYWNlLCBsZXZlbCwgaW50ZXJuYWxGb3JtYXQsIHdpZHRoLCBoZWlnaHQsIDAsIGZvcm1hdCwgdHlwZSwgZGF0YSk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodGFyZ2V0ID09PSBURVhUVVJFXzNEJDEgfHwgdGFyZ2V0ID09PSBURVhUVVJFXzJEX0FSUkFZJDEpIHtcbiAgICBnbC50ZXhJbWFnZTNEKHRhcmdldCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgMCwgZm9ybWF0LCB0eXBlLCBzcmMpO1xuICB9IGVsc2Uge1xuICAgIGdsLnRleEltYWdlMkQodGFyZ2V0LCBsZXZlbCwgaW50ZXJuYWxGb3JtYXQsIHdpZHRoLCBoZWlnaHQsIDAsIGZvcm1hdCwgdHlwZSwgc3JjKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICBkZXB0aDogZGVwdGgsXG4gICAgdHlwZTogdHlwZSxcbiAgfTtcbn1cblxuLyoqXG4gKiBTZXRzIGEgdGV4dHVyZSB3aXRoIG5vIGNvbnRlbnRzIG9mIGEgY2VydGFpbiBzaXplLiBJbiBvdGhlciB3b3JkcyBjYWxscyBgZ2wudGV4SW1hZ2UyRGAgd2l0aCBgbnVsbGAuXG4gKiBZb3UgbXVzdCBzZXQgYG9wdGlvbnMud2lkdGhgIGFuZCBgb3B0aW9ucy5oZWlnaHRgLlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7V2ViR0xUZXh0dXJlfSB0ZXggdGhlIFdlYkdMVGV4dHVyZSB0byBzZXQgcGFyYW1ldGVycyBmb3JcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9IG9wdGlvbnMgQSBUZXh0dXJlT3B0aW9ucyBvYmplY3Qgd2l0aCB3aGF0ZXZlciBwYXJhbWV0ZXJzIHlvdSB3YW50IHNldC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC90ZXh0dXJlc1xuICovXG5mdW5jdGlvbiBzZXRFbXB0eVRleHR1cmUoZ2wsIHRleCwgb3B0aW9ucykge1xuICBjb25zdCB0YXJnZXQgPSBvcHRpb25zLnRhcmdldCB8fCBURVhUVVJFXzJEJDI7XG4gIGdsLmJpbmRUZXh0dXJlKHRhcmdldCwgdGV4KTtcbiAgY29uc3QgbGV2ZWwgPSBvcHRpb25zLmxldmVsIHx8IDA7XG4gIGNvbnN0IGludGVybmFsRm9ybWF0ID0gb3B0aW9ucy5pbnRlcm5hbEZvcm1hdCB8fCBvcHRpb25zLmZvcm1hdCB8fCBSR0JBJDE7XG4gIGNvbnN0IGZvcm1hdFR5cGUgPSBnZXRGb3JtYXRBbmRUeXBlRm9ySW50ZXJuYWxGb3JtYXQoaW50ZXJuYWxGb3JtYXQpO1xuICBjb25zdCBmb3JtYXQgPSBvcHRpb25zLmZvcm1hdCB8fCBmb3JtYXRUeXBlLmZvcm1hdDtcbiAgY29uc3QgdHlwZSA9IG9wdGlvbnMudHlwZSB8fCBmb3JtYXRUeXBlLnR5cGU7XG4gIHNldFBhY2tTdGF0ZShnbCwgb3B0aW9ucyk7XG4gIGlmICh0YXJnZXQgPT09IFRFWFRVUkVfQ1VCRV9NQVAkMSkge1xuICAgIGZvciAobGV0IGlpID0gMDsgaWkgPCA2OyArK2lpKSB7XG4gICAgICBnbC50ZXhJbWFnZTJEKFRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWCArIGlpLCBsZXZlbCwgaW50ZXJuYWxGb3JtYXQsIG9wdGlvbnMud2lkdGgsIG9wdGlvbnMuaGVpZ2h0LCAwLCBmb3JtYXQsIHR5cGUsIG51bGwpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0YXJnZXQgPT09IFRFWFRVUkVfM0QkMSB8fCB0YXJnZXQgPT09IFRFWFRVUkVfMkRfQVJSQVkkMSkge1xuICAgIGdsLnRleEltYWdlM0QodGFyZ2V0LCBsZXZlbCwgaW50ZXJuYWxGb3JtYXQsIG9wdGlvbnMud2lkdGgsIG9wdGlvbnMuaGVpZ2h0LCBvcHRpb25zLmRlcHRoLCAwLCBmb3JtYXQsIHR5cGUsIG51bGwpO1xuICB9IGVsc2Uge1xuICAgIGdsLnRleEltYWdlMkQodGFyZ2V0LCBsZXZlbCwgaW50ZXJuYWxGb3JtYXQsIG9wdGlvbnMud2lkdGgsIG9wdGlvbnMuaGVpZ2h0LCAwLCBmb3JtYXQsIHR5cGUsIG51bGwpO1xuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRleHR1cmUgYmFzZWQgb24gdGhlIG9wdGlvbnMgcGFzc2VkIGluLlxuICpcbiAqIE5vdGU6IG1heSByZXNldCBVTlBBQ0tfQUxJR05NRU5ULCBVTlBBQ0tfUk9XX0xFTkdUSCwgVU5QQUNLX0lNQUdFX0hFSUdIVCwgVU5QQUNLX1NLSVBfSU1BR0VTXG4gKiBVTlBBQ0tfU0tJUF9QSVhFTFMsIGFuZCBVTlBBQ0tfU0tJUF9ST1dTXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9IFtvcHRpb25zXSBBIFRleHR1cmVPcHRpb25zIG9iamVjdCB3aXRoIHdoYXRldmVyIHBhcmFtZXRlcnMgeW91IHdhbnQgc2V0LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5UZXh0dXJlUmVhZHlDYWxsYmFja30gW2NhbGxiYWNrXSBBIGNhbGxiYWNrIGNhbGxlZCB3aGVuIGFuIGltYWdlIGhhcyBiZWVuIGRvd25sb2FkZWQgYW5kIHVwbG9hZGVkIHRvIHRoZSB0ZXh0dXJlLlxuICogQHJldHVybiB7V2ViR0xUZXh0dXJlfSB0aGUgY3JlYXRlZCB0ZXh0dXJlLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3RleHR1cmVzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVRleHR1cmUoZ2wsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgbm9vcDtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwgZGVmYXVsdHMkMS50ZXh0dXJlT3B0aW9ucztcbiAgY29uc3QgdGV4ID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xuICBjb25zdCB0YXJnZXQgPSBvcHRpb25zLnRhcmdldCB8fCBURVhUVVJFXzJEJDI7XG4gIGxldCB3aWR0aCAgPSBvcHRpb25zLndpZHRoICB8fCAxO1xuICBsZXQgaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgfHwgMTtcbiAgY29uc3QgaW50ZXJuYWxGb3JtYXQgPSBvcHRpb25zLmludGVybmFsRm9ybWF0IHx8IFJHQkEkMTtcbiAgZ2wuYmluZFRleHR1cmUodGFyZ2V0LCB0ZXgpO1xuICBpZiAodGFyZ2V0ID09PSBURVhUVVJFX0NVQkVfTUFQJDEpIHtcbiAgICAvLyB0aGlzIHNob3VsZCBoYXZlIGJlZW4gdGhlIGRlZmF1bHQgZm9yIGN1YmVtYXBzIDooXG4gICAgZ2wudGV4UGFyYW1ldGVyaSh0YXJnZXQsIFRFWFRVUkVfV1JBUF9TLCBDTEFNUF9UT19FREdFJDEpO1xuICAgIGdsLnRleFBhcmFtZXRlcmkodGFyZ2V0LCBURVhUVVJFX1dSQVBfVCwgQ0xBTVBfVE9fRURHRSQxKTtcbiAgfVxuICBsZXQgc3JjID0gb3B0aW9ucy5zcmM7XG4gIGlmIChzcmMpIHtcbiAgICBpZiAodHlwZW9mIHNyYyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBzcmMgPSBzcmMoZ2wsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIChzcmMpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBsb2FkVGV4dHVyZUZyb21VcmwoZ2wsIHRleCwgb3B0aW9ucywgY2FsbGJhY2spO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheUJ1ZmZlcihzcmMpIHx8XG4gICAgICAgICAgICAgICAoQXJyYXkuaXNBcnJheShzcmMpICYmIChcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHNyY1swXSA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuaXNBcnJheShzcmNbMF0pIHx8XG4gICAgICAgICAgICAgICAgICAgIGlzQXJyYXlCdWZmZXIoc3JjWzBdKSlcbiAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSB7XG4gICAgICBjb25zdCBkaW1lbnNpb25zID0gc2V0VGV4dHVyZUZyb21BcnJheShnbCwgdGV4LCBzcmMsIG9wdGlvbnMpO1xuICAgICAgd2lkdGggID0gZGltZW5zaW9ucy53aWR0aDtcbiAgICAgIGhlaWdodCA9IGRpbWVuc2lvbnMuaGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzcmMpICYmICh0eXBlb2YgKHNyY1swXSkgPT09ICdzdHJpbmcnIHx8IGlzVGV4SW1hZ2VTb3VyY2Uoc3JjWzBdKSkpIHtcbiAgICAgIGlmICh0YXJnZXQgPT09IFRFWFRVUkVfQ1VCRV9NQVAkMSkge1xuICAgICAgICBsb2FkQ3ViZW1hcEZyb21VcmxzKGdsLCB0ZXgsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvYWRTbGljZXNGcm9tVXJscyhnbCwgdGV4LCBvcHRpb25zLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSBlbHNlIHsgLy8gaWYgKGlzVGV4SW1hZ2VTb3VyY2Uoc3JjKSlcbiAgICAgIHNldFRleHR1cmVGcm9tRWxlbWVudChnbCwgdGV4LCBzcmMsIG9wdGlvbnMpO1xuICAgICAgd2lkdGggID0gc3JjLndpZHRoO1xuICAgICAgaGVpZ2h0ID0gc3JjLmhlaWdodDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc2V0RW1wdHlUZXh0dXJlKGdsLCB0ZXgsIG9wdGlvbnMpO1xuICB9XG4gIGlmIChzaG91bGRBdXRvbWF0aWNhbGx5U2V0VGV4dHVyZUZpbHRlcmluZ0ZvclNpemUob3B0aW9ucykpIHtcbiAgICBzZXRUZXh0dXJlRmlsdGVyaW5nRm9yU2l6ZShnbCwgdGV4LCBvcHRpb25zLCB3aWR0aCwgaGVpZ2h0LCBpbnRlcm5hbEZvcm1hdCk7XG4gIH1cbiAgc2V0VGV4dHVyZVBhcmFtZXRlcnMoZ2wsIHRleCwgb3B0aW9ucyk7XG4gIHJldHVybiB0ZXg7XG59XG5cbi8qKlxuICogUmVzaXplcyBhIHRleHR1cmUgYmFzZWQgb24gdGhlIG9wdGlvbnMgcGFzc2VkIGluLlxuICpcbiAqIE5vdGU6IFRoaXMgaXMgbm90IGEgZ2VuZXJpYyByZXNpemUgYW55dGhpbmcgZnVuY3Rpb24uXG4gKiBJdCdzIG1vc3RseSB1c2VkIGJ5IHtAbGluayBtb2R1bGU6dHdnbC5yZXNpemVGcmFtZWJ1ZmZlckluZm99XG4gKiBJdCB3aWxsIHVzZSBgb3B0aW9ucy5zcmNgIGlmIGl0IGV4aXN0cyB0byB0cnkgdG8gZGV0ZXJtaW5lIGEgYHR5cGVgXG4gKiBvdGhlcndpc2UgaXQgd2lsbCBhc3N1bWUgYGdsLlVOU0lHTkVEX0JZVEVgLiBObyBkYXRhIGlzIHByb3ZpZGVkXG4gKiBmb3IgdGhlIHRleHR1cmUuIFRleHR1cmUgcGFyYW1ldGVycyB3aWxsIGJlIHNldCBhY2NvcmRpbmdseVxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge1dlYkdMVGV4dHVyZX0gdGV4IHRoZSB0ZXh0dXJlIHRvIHJlc2l6ZVxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5UZXh0dXJlT3B0aW9uc30gb3B0aW9ucyBBIFRleHR1cmVPcHRpb25zIG9iamVjdCB3aXRoIHdoYXRldmVyIHBhcmFtZXRlcnMgeW91IHdhbnQgc2V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFt3aWR0aF0gdGhlIG5ldyB3aWR0aC4gSWYgbm90IHBhc3NlZCBpbiB3aWxsIHVzZSBgb3B0aW9ucy53aWR0aGBcbiAqIEBwYXJhbSB7bnVtYmVyfSBbaGVpZ2h0XSB0aGUgbmV3IGhlaWdodC4gSWYgbm90IHBhc3NlZCBpbiB3aWxsIHVzZSBgb3B0aW9ucy5oZWlnaHRgXG4gKiBAcGFyYW0ge251bWJlcn0gW2RlcHRoXSB0aGUgbmV3IGRlcHRoLiBJZiBub3QgcGFzc2VkIGluIHdpbGwgdXNlIGBvcHRpb25zLmRlcHRoYFxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3RleHR1cmVzXG4gKi9cbmZ1bmN0aW9uIHJlc2l6ZVRleHR1cmUoZ2wsIHRleCwgb3B0aW9ucywgd2lkdGgsIGhlaWdodCwgZGVwdGgpIHtcbiAgd2lkdGggPSB3aWR0aCB8fCBvcHRpb25zLndpZHRoO1xuICBoZWlnaHQgPSBoZWlnaHQgfHwgb3B0aW9ucy5oZWlnaHQ7XG4gIGRlcHRoID0gZGVwdGggfHwgb3B0aW9ucy5kZXB0aDtcbiAgY29uc3QgdGFyZ2V0ID0gb3B0aW9ucy50YXJnZXQgfHwgVEVYVFVSRV8yRCQyO1xuICBnbC5iaW5kVGV4dHVyZSh0YXJnZXQsIHRleCk7XG4gIGNvbnN0IGxldmVsID0gb3B0aW9ucy5sZXZlbCB8fCAwO1xuICBjb25zdCBpbnRlcm5hbEZvcm1hdCA9IG9wdGlvbnMuaW50ZXJuYWxGb3JtYXQgfHwgb3B0aW9ucy5mb3JtYXQgfHwgUkdCQSQxO1xuICBjb25zdCBmb3JtYXRUeXBlID0gZ2V0Rm9ybWF0QW5kVHlwZUZvckludGVybmFsRm9ybWF0KGludGVybmFsRm9ybWF0KTtcbiAgY29uc3QgZm9ybWF0ID0gb3B0aW9ucy5mb3JtYXQgfHwgZm9ybWF0VHlwZS5mb3JtYXQ7XG4gIGxldCB0eXBlO1xuICBjb25zdCBzcmMgPSBvcHRpb25zLnNyYztcbiAgaWYgKCFzcmMpIHtcbiAgICB0eXBlID0gb3B0aW9ucy50eXBlIHx8IGZvcm1hdFR5cGUudHlwZTtcbiAgfSBlbHNlIGlmIChpc0FycmF5QnVmZmVyKHNyYykgfHwgKEFycmF5LmlzQXJyYXkoc3JjKSAmJiB0eXBlb2YgKHNyY1swXSkgPT09ICdudW1iZXInKSkge1xuICAgIHR5cGUgPSBvcHRpb25zLnR5cGUgfHwgZ2V0VGV4dHVyZVR5cGVGb3JBcnJheVR5cGUoZ2wsIHNyYywgZm9ybWF0VHlwZS50eXBlKTtcbiAgfSBlbHNlIHtcbiAgICB0eXBlID0gb3B0aW9ucy50eXBlIHx8IGZvcm1hdFR5cGUudHlwZTtcbiAgfVxuICBpZiAodGFyZ2V0ID09PSBURVhUVVJFX0NVQkVfTUFQJDEpIHtcbiAgICBmb3IgKGxldCBpaSA9IDA7IGlpIDwgNjsgKytpaSkge1xuICAgICAgZ2wudGV4SW1hZ2UyRChURVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1ggKyBpaSwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCB3aWR0aCwgaGVpZ2h0LCAwLCBmb3JtYXQsIHR5cGUsIG51bGwpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0YXJnZXQgPT09IFRFWFRVUkVfM0QkMSB8fCB0YXJnZXQgPT09IFRFWFRVUkVfMkRfQVJSQVkkMSkge1xuICAgIGdsLnRleEltYWdlM0QodGFyZ2V0LCBsZXZlbCwgaW50ZXJuYWxGb3JtYXQsIHdpZHRoLCBoZWlnaHQsIGRlcHRoLCAwLCBmb3JtYXQsIHR5cGUsIG51bGwpO1xuICB9IGVsc2Uge1xuICAgIGdsLnRleEltYWdlMkQodGFyZ2V0LCBsZXZlbCwgaW50ZXJuYWxGb3JtYXQsIHdpZHRoLCBoZWlnaHQsIDAsIGZvcm1hdCwgdHlwZSwgbnVsbCk7XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIHNyYyBpcyBhbiBhc3luYyByZXF1ZXN0LlxuICogaWYgc3JjIGlzIGEgc3RyaW5nIHdlJ3JlIGdvaW5nIHRvIGRvd25sb2FkIGFuIGltYWdlXG4gKiBpZiBzcmMgaXMgYW4gYXJyYXkgb2Ygc3RyaW5ncyB3ZSdyZSBnb2luZyB0byBkb3dubG9hZCBjdWJlbWFwIGltYWdlc1xuICogQHBhcmFtIHsqfSBzcmMgVGhlIHNyYyBmcm9tIGEgVGV4dHVyZU9wdGlvbnNcbiAqIEByZXR1cm5zIHtib29sfSB0cnVlIGlmIHNyYyBpcyBhc3luYy5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzQXN5bmNTcmMoc3JjKSB7XG4gIHJldHVybiB0eXBlb2Ygc3JjID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgKEFycmF5LmlzQXJyYXkoc3JjKSAmJiB0eXBlb2Ygc3JjWzBdID09PSAnc3RyaW5nJyk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGJ1bmNoIG9mIHRleHR1cmVzIGJhc2VkIG9uIHRoZSBwYXNzZWQgaW4gb3B0aW9ucy5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICBjb25zdCB0ZXh0dXJlcyA9IHR3Z2wuY3JlYXRlVGV4dHVyZXMoZ2wsIHtcbiAqICAgICAgIC8vIGEgcG93ZXIgb2YgMiBpbWFnZVxuICogICAgICAgaGZ0SWNvbjogeyBzcmM6IFwiaW1hZ2VzL2hmdC1pY29uLTE2LnBuZ1wiLCBtYWc6IGdsLk5FQVJFU1QgfSxcbiAqICAgICAgIC8vIGEgbm9uLXBvd2VyIG9mIDIgaW1hZ2VcbiAqICAgICAgIGNsb3ZlcjogeyBzcmM6IFwiaW1hZ2VzL2Nsb3Zlci5qcGdcIiB9LFxuICogICAgICAgLy8gRnJvbSBhIGNhbnZhc1xuICogICAgICAgZnJvbUNhbnZhczogeyBzcmM6IGN0eC5jYW52YXMgfSxcbiAqICAgICAgIC8vIEEgY3ViZW1hcCBmcm9tIDYgaW1hZ2VzXG4gKiAgICAgICB5b2tvaGFtYToge1xuICogICAgICAgICB0YXJnZXQ6IGdsLlRFWFRVUkVfQ1VCRV9NQVAsXG4gKiAgICAgICAgIHNyYzogW1xuICogICAgICAgICAgICdpbWFnZXMveW9rb2hhbWEvcG9zeC5qcGcnLFxuICogICAgICAgICAgICdpbWFnZXMveW9rb2hhbWEvbmVneC5qcGcnLFxuICogICAgICAgICAgICdpbWFnZXMveW9rb2hhbWEvcG9zeS5qcGcnLFxuICogICAgICAgICAgICdpbWFnZXMveW9rb2hhbWEvbmVneS5qcGcnLFxuICogICAgICAgICAgICdpbWFnZXMveW9rb2hhbWEvcG9zei5qcGcnLFxuICogICAgICAgICAgICdpbWFnZXMveW9rb2hhbWEvbmVnei5qcGcnLFxuICogICAgICAgICBdLFxuICogICAgICAgfSxcbiAqICAgICAgIC8vIEEgY3ViZW1hcCBmcm9tIDEgaW1hZ2UgKGNhbiBiZSAxeDYsIDJ4MywgM3gyLCA2eDEpXG4gKiAgICAgICBnb2xkZW5nYXRlOiB7XG4gKiAgICAgICAgIHRhcmdldDogZ2wuVEVYVFVSRV9DVUJFX01BUCxcbiAqICAgICAgICAgc3JjOiAnaW1hZ2VzL2dvbGRlbmdhdGUuanBnJyxcbiAqICAgICAgIH0sXG4gKiAgICAgICAvLyBBIDJ4MiBwaXhlbCB0ZXh0dXJlIGZyb20gYSBKYXZhU2NyaXB0IGFycmF5XG4gKiAgICAgICBjaGVja2VyOiB7XG4gKiAgICAgICAgIG1hZzogZ2wuTkVBUkVTVCxcbiAqICAgICAgICAgbWluOiBnbC5MSU5FQVIsXG4gKiAgICAgICAgIHNyYzogW1xuICogICAgICAgICAgIDI1NSwyNTUsMjU1LDI1NSxcbiAqICAgICAgICAgICAxOTIsMTkyLDE5MiwyNTUsXG4gKiAgICAgICAgICAgMTkyLDE5MiwxOTIsMjU1LFxuICogICAgICAgICAgIDI1NSwyNTUsMjU1LDI1NSxcbiAqICAgICAgICAgXSxcbiAqICAgICAgIH0sXG4gKiAgICAgICAvLyBhIDF4MiBwaXhlbCB0ZXh0dXJlIGZyb20gYSB0eXBlZCBhcnJheS5cbiAqICAgICAgIHN0cmlwZToge1xuICogICAgICAgICBtYWc6IGdsLk5FQVJFU1QsXG4gKiAgICAgICAgIG1pbjogZ2wuTElORUFSLFxuICogICAgICAgICBmb3JtYXQ6IGdsLkxVTUlOQU5DRSxcbiAqICAgICAgICAgc3JjOiBuZXcgVWludDhBcnJheShbXG4gKiAgICAgICAgICAgMjU1LFxuICogICAgICAgICAgIDEyOCxcbiAqICAgICAgICAgICAyNTUsXG4gKiAgICAgICAgICAgMTI4LFxuICogICAgICAgICAgIDI1NSxcbiAqICAgICAgICAgICAxMjgsXG4gKiAgICAgICAgICAgMjU1LFxuICogICAgICAgICAgIDEyOCxcbiAqICAgICAgICAgXSksXG4gKiAgICAgICAgIHdpZHRoOiAxLFxuICogICAgICAgfSxcbiAqICAgICB9KTtcbiAqXG4gKiBOb3dcbiAqXG4gKiAqICAgYHRleHR1cmVzLmhmdEljb25gIHdpbGwgYmUgYSAyZCB0ZXh0dXJlXG4gKiAqICAgYHRleHR1cmVzLmNsb3ZlcmAgd2lsbCBiZSBhIDJkIHRleHR1cmVcbiAqICogICBgdGV4dHVyZXMuZnJvbUNhbnZhc2Agd2lsbCBiZSBhIDJkIHRleHR1cmVcbiAqICogICBgdGV4dHVyZXMueW9ob2hhbWFgIHdpbGwgYmUgYSBjdWJlbWFwIHRleHR1cmVcbiAqICogICBgdGV4dHVyZXMuZ29sZGVuZ2F0ZWAgd2lsbCBiZSBhIGN1YmVtYXAgdGV4dHVyZVxuICogKiAgIGB0ZXh0dXJlcy5jaGVja2VyYCB3aWxsIGJlIGEgMmQgdGV4dHVyZVxuICogKiAgIGB0ZXh0dXJlcy5zdHJpcGVgIHdpbGwgYmUgYSAyZCB0ZXh0dXJlXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsbW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnM+fSBvcHRpb25zIEEgb2JqZWN0IG9mIFRleHR1cmVPcHRpb25zIG9uZSBwZXIgdGV4dHVyZS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVGV4dHVyZXNSZWFkeUNhbGxiYWNrfSBbY2FsbGJhY2tdIEEgY2FsbGJhY2sgY2FsbGVkIHdoZW4gYWxsIHRleHR1cmVzIGhhdmUgYmVlbiBkb3dubG9hZGVkLlxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsV2ViR0xUZXh0dXJlPn0gdGhlIGNyZWF0ZWQgdGV4dHVyZXMgYnkgbmFtZVxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3RleHR1cmVzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVRleHR1cmVzKGdsLCB0ZXh0dXJlT3B0aW9ucywgY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBub29wO1xuICBsZXQgbnVtRG93bmxvYWRpbmcgPSAwO1xuICBjb25zdCBlcnJvcnMgPSBbXTtcbiAgY29uc3QgdGV4dHVyZXMgPSB7fTtcbiAgY29uc3QgaW1hZ2VzID0ge307XG5cbiAgZnVuY3Rpb24gY2FsbENhbGxiYWNrSWZSZWFkeSgpIHtcbiAgICBpZiAobnVtRG93bmxvYWRpbmcgPT09IDApIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9ycy5sZW5ndGggPyBlcnJvcnMgOiB1bmRlZmluZWQsIHRleHR1cmVzLCBpbWFnZXMpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXModGV4dHVyZU9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0ZXh0dXJlT3B0aW9uc1tuYW1lXTtcbiAgICBsZXQgb25Mb2FkRm47XG4gICAgaWYgKGlzQXN5bmNTcmMob3B0aW9ucy5zcmMpKSB7XG4gICAgICBvbkxvYWRGbiA9IGZ1bmN0aW9uKGVyciwgdGV4LCBpbWcpIHtcbiAgICAgICAgaW1hZ2VzW25hbWVdID0gaW1nO1xuICAgICAgICAtLW51bURvd25sb2FkaW5nO1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgfVxuICAgICAgICBjYWxsQ2FsbGJhY2tJZlJlYWR5KCk7XG4gICAgICB9O1xuICAgICAgKytudW1Eb3dubG9hZGluZztcbiAgICB9XG4gICAgdGV4dHVyZXNbbmFtZV0gPSBjcmVhdGVUZXh0dXJlKGdsLCBvcHRpb25zLCBvbkxvYWRGbik7XG4gIH0pO1xuXG4gIC8vIHF1ZXVlIHRoZSBjYWxsYmFjayBpZiB0aGVyZSBhcmUgbm8gaW1hZ2VzIHRvIGRvd25sb2FkLlxuICAvLyBXZSBkbyB0aGlzIGJlY2F1c2UgaWYgeW91ciBjb2RlIGlzIHN0cnVjdHVyZWQgdG8gd2FpdCBmb3JcbiAgLy8gaW1hZ2VzIHRvIGRvd25sb2FkIGJ1dCB0aGVuIHlvdSBjb21tZW50IG91dCBhbGwgdGhlIGFzeW5jXG4gIC8vIGltYWdlcyB5b3VyIGNvZGUgd291bGQgYnJlYWsuXG4gIGNhbGxDYWxsYmFja0lmUmVhZHkoKTtcblxuICByZXR1cm4gdGV4dHVyZXM7XG59XG5cbnZhciB0ZXh0dXJlcyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgX19wcm90b19fOiBudWxsLFxuICBzZXRUZXh0dXJlRGVmYXVsdHNfOiBzZXREZWZhdWx0cyQxLFxuICBjcmVhdGVTYW1wbGVyOiBjcmVhdGVTYW1wbGVyLFxuICBjcmVhdGVTYW1wbGVyczogY3JlYXRlU2FtcGxlcnMsXG4gIHNldFNhbXBsZXJQYXJhbWV0ZXJzOiBzZXRTYW1wbGVyUGFyYW1ldGVycyxcbiAgY3JlYXRlVGV4dHVyZTogY3JlYXRlVGV4dHVyZSxcbiAgc2V0RW1wdHlUZXh0dXJlOiBzZXRFbXB0eVRleHR1cmUsXG4gIHNldFRleHR1cmVGcm9tQXJyYXk6IHNldFRleHR1cmVGcm9tQXJyYXksXG4gIGxvYWRUZXh0dXJlRnJvbVVybDogbG9hZFRleHR1cmVGcm9tVXJsLFxuICBzZXRUZXh0dXJlRnJvbUVsZW1lbnQ6IHNldFRleHR1cmVGcm9tRWxlbWVudCxcbiAgc2V0VGV4dHVyZUZpbHRlcmluZ0ZvclNpemU6IHNldFRleHR1cmVGaWx0ZXJpbmdGb3JTaXplLFxuICBzZXRUZXh0dXJlUGFyYW1ldGVyczogc2V0VGV4dHVyZVBhcmFtZXRlcnMsXG4gIHNldERlZmF1bHRUZXh0dXJlQ29sb3I6IHNldERlZmF1bHRUZXh0dXJlQ29sb3IsXG4gIGNyZWF0ZVRleHR1cmVzOiBjcmVhdGVUZXh0dXJlcyxcbiAgcmVzaXplVGV4dHVyZTogcmVzaXplVGV4dHVyZSxcbiAgY2FuR2VuZXJhdGVNaXBtYXA6IGNhbkdlbmVyYXRlTWlwbWFwLFxuICBjYW5GaWx0ZXI6IGNhbkZpbHRlcixcbiAgZ2V0TnVtQ29tcG9uZW50c0ZvckZvcm1hdDogZ2V0TnVtQ29tcG9uZW50c0ZvckZvcm1hdCxcbiAgZ2V0Qnl0ZXNQZXJFbGVtZW50Rm9ySW50ZXJuYWxGb3JtYXQ6IGdldEJ5dGVzUGVyRWxlbWVudEZvckludGVybmFsRm9ybWF0LFxuICBnZXRGb3JtYXRBbmRUeXBlRm9ySW50ZXJuYWxGb3JtYXQ6IGdldEZvcm1hdEFuZFR5cGVGb3JJbnRlcm5hbEZvcm1hdFxufSk7XG5cbi8qXG4gKiBDb3B5cmlnaHQgMjAxOSBHcmVnZyBUYXZhcmVzXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbiAqIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSxcbiAqIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb25cbiAqIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLFxuICogYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4gKiBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTFxuICogVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSXG4gKiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBMb3cgbGV2ZWwgc2hhZGVyIHByb2dyYW0gcmVsYXRlZCBmdW5jdGlvbnNcbiAqXG4gKiBZb3Ugc2hvdWxkIGdlbmVyYWxseSBub3QgbmVlZCB0byB1c2UgdGhlc2UgZnVuY3Rpb25zLiBUaGV5IGFyZSBwcm92aWRlZFxuICogZm9yIHRob3NlIGNhc2VzIHdoZXJlIHlvdSdyZSBkb2luZyBzb21ldGhpbmcgb3V0IG9mIHRoZSBvcmRpbmFyeVxuICogYW5kIHlvdSBuZWVkIGxvd2VyIGxldmVsIGFjY2Vzcy5cbiAqXG4gKiBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB0aGV5IGFyZSBhdmFpbGFibGUgYXQgYm90aCBgdHdnbC5wcm9ncmFtc2AgYW5kIGB0d2dsYFxuICogaXRzZWxmXG4gKlxuICogU2VlIHtAbGluayBtb2R1bGU6dHdnbH0gZm9yIGNvcmUgZnVuY3Rpb25zXG4gKlxuICogQG1vZHVsZSB0d2dsL3Byb2dyYW1zXG4gKi9cblxuY29uc3QgZXJyb3IgPSBlcnJvciQxO1xuY29uc3Qgd2FybiA9IHdhcm4kMTtcbmZ1bmN0aW9uIGdldEVsZW1lbnRCeUlkKGlkKSB7XG4gIHJldHVybiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZClcbiAgICAgID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXG4gICAgICA6IG51bGw7XG59XG5cbmNvbnN0IFRFWFRVUkUwICAgICAgICAgICAgICAgICAgICAgICA9IDB4ODRjMDtcbmNvbnN0IERZTkFNSUNfRFJBVyAgICAgICAgICAgICAgICAgICA9IDB4ODhlODtcblxuY29uc3QgQVJSQVlfQlVGRkVSICAgICAgICAgICAgICAgICAgID0gMHg4ODkyO1xuY29uc3QgRUxFTUVOVF9BUlJBWV9CVUZGRVIkMSAgICAgICAgICAgPSAweDg4OTM7XG5jb25zdCBVTklGT1JNX0JVRkZFUiAgICAgICAgICAgICAgICAgPSAweDhhMTE7XG5jb25zdCBUUkFOU0ZPUk1fRkVFREJBQ0tfQlVGRkVSICAgICAgPSAweDhjOGU7XG5cbmNvbnN0IFRSQU5TRk9STV9GRUVEQkFDSyAgICAgICAgICAgICA9IDB4OGUyMjtcblxuY29uc3QgQ09NUElMRV9TVEFUVVMgICAgICAgICAgICAgICAgID0gMHg4YjgxO1xuY29uc3QgTElOS19TVEFUVVMgICAgICAgICAgICAgICAgICAgID0gMHg4YjgyO1xuY29uc3QgRlJBR01FTlRfU0hBREVSICAgICAgICAgICAgICAgID0gMHg4YjMwO1xuY29uc3QgVkVSVEVYX1NIQURFUiAgICAgICAgICAgICAgICAgID0gMHg4YjMxO1xuY29uc3QgU0VQQVJBVEVfQVRUUklCUyAgICAgICAgICAgICAgID0gMHg4YzhkO1xuXG5jb25zdCBBQ1RJVkVfVU5JRk9STVMgICAgICAgICAgICAgICAgPSAweDhiODY7XG5jb25zdCBBQ1RJVkVfQVRUUklCVVRFUyAgICAgICAgICAgICAgPSAweDhiODk7XG5jb25zdCBUUkFOU0ZPUk1fRkVFREJBQ0tfVkFSWUlOR1MgICAgPSAweDhjODM7XG5jb25zdCBBQ1RJVkVfVU5JRk9STV9CTE9DS1MgICAgICAgICAgPSAweDhhMzY7XG5jb25zdCBVTklGT1JNX0JMT0NLX1JFRkVSRU5DRURfQllfVkVSVEVYX1NIQURFUiAgID0gMHg4YTQ0O1xuY29uc3QgVU5JRk9STV9CTE9DS19SRUZFUkVOQ0VEX0JZX0ZSQUdNRU5UX1NIQURFUiA9IDB4OGE0NjtcbmNvbnN0IFVOSUZPUk1fQkxPQ0tfREFUQV9TSVpFICAgICAgICAgICAgICAgICAgICAgPSAweDhhNDA7XG5jb25zdCBVTklGT1JNX0JMT0NLX0FDVElWRV9VTklGT1JNX0lORElDRVMgICAgICAgID0gMHg4YTQzO1xuXG5jb25zdCBGTE9BVCAgICAgICAgICAgICAgICAgICAgICAgICA9IDB4MTQwNjtcbmNvbnN0IEZMT0FUX1ZFQzIgICAgICAgICAgICAgICAgICAgID0gMHg4QjUwO1xuY29uc3QgRkxPQVRfVkVDMyAgICAgICAgICAgICAgICAgICAgPSAweDhCNTE7XG5jb25zdCBGTE9BVF9WRUM0ICAgICAgICAgICAgICAgICAgICA9IDB4OEI1MjtcbmNvbnN0IElOVCAgICAgICAgICAgICAgICAgICAgICAgICAgID0gMHgxNDA0O1xuY29uc3QgSU5UX1ZFQzIgICAgICAgICAgICAgICAgICAgICAgPSAweDhCNTM7XG5jb25zdCBJTlRfVkVDMyAgICAgICAgICAgICAgICAgICAgICA9IDB4OEI1NDtcbmNvbnN0IElOVF9WRUM0ICAgICAgICAgICAgICAgICAgICAgID0gMHg4QjU1O1xuY29uc3QgQk9PTCAgICAgICAgICAgICAgICAgICAgICAgICAgPSAweDhCNTY7XG5jb25zdCBCT09MX1ZFQzIgICAgICAgICAgICAgICAgICAgICA9IDB4OEI1NztcbmNvbnN0IEJPT0xfVkVDMyAgICAgICAgICAgICAgICAgICAgID0gMHg4QjU4O1xuY29uc3QgQk9PTF9WRUM0ICAgICAgICAgICAgICAgICAgICAgPSAweDhCNTk7XG5jb25zdCBGTE9BVF9NQVQyICAgICAgICAgICAgICAgICAgICA9IDB4OEI1QTtcbmNvbnN0IEZMT0FUX01BVDMgICAgICAgICAgICAgICAgICAgID0gMHg4QjVCO1xuY29uc3QgRkxPQVRfTUFUNCAgICAgICAgICAgICAgICAgICAgPSAweDhCNUM7XG5jb25zdCBTQU1QTEVSXzJEICAgICAgICAgICAgICAgICAgICA9IDB4OEI1RTtcbmNvbnN0IFNBTVBMRVJfQ1VCRSAgICAgICAgICAgICAgICAgID0gMHg4QjYwO1xuY29uc3QgU0FNUExFUl8zRCAgICAgICAgICAgICAgICAgICAgPSAweDhCNUY7XG5jb25zdCBTQU1QTEVSXzJEX1NIQURPVyAgICAgICAgICAgICA9IDB4OEI2MjtcbmNvbnN0IEZMT0FUX01BVDJ4MyAgICAgICAgICAgICAgICAgID0gMHg4QjY1O1xuY29uc3QgRkxPQVRfTUFUMng0ICAgICAgICAgICAgICAgICAgPSAweDhCNjY7XG5jb25zdCBGTE9BVF9NQVQzeDIgICAgICAgICAgICAgICAgICA9IDB4OEI2NztcbmNvbnN0IEZMT0FUX01BVDN4NCAgICAgICAgICAgICAgICAgID0gMHg4QjY4O1xuY29uc3QgRkxPQVRfTUFUNHgyICAgICAgICAgICAgICAgICAgPSAweDhCNjk7XG5jb25zdCBGTE9BVF9NQVQ0eDMgICAgICAgICAgICAgICAgICA9IDB4OEI2QTtcbmNvbnN0IFNBTVBMRVJfMkRfQVJSQVkgICAgICAgICAgICAgID0gMHg4REMxO1xuY29uc3QgU0FNUExFUl8yRF9BUlJBWV9TSEFET1cgICAgICAgPSAweDhEQzQ7XG5jb25zdCBTQU1QTEVSX0NVQkVfU0hBRE9XICAgICAgICAgICA9IDB4OERDNTtcbmNvbnN0IFVOU0lHTkVEX0lOVCAgICAgICAgICAgICAgICAgID0gMHgxNDA1O1xuY29uc3QgVU5TSUdORURfSU5UX1ZFQzIgICAgICAgICAgICAgPSAweDhEQzY7XG5jb25zdCBVTlNJR05FRF9JTlRfVkVDMyAgICAgICAgICAgICA9IDB4OERDNztcbmNvbnN0IFVOU0lHTkVEX0lOVF9WRUM0ICAgICAgICAgICAgID0gMHg4REM4O1xuY29uc3QgSU5UX1NBTVBMRVJfMkQgICAgICAgICAgICAgICAgPSAweDhEQ0E7XG5jb25zdCBJTlRfU0FNUExFUl8zRCAgICAgICAgICAgICAgICA9IDB4OERDQjtcbmNvbnN0IElOVF9TQU1QTEVSX0NVQkUgICAgICAgICAgICAgID0gMHg4RENDO1xuY29uc3QgSU5UX1NBTVBMRVJfMkRfQVJSQVkgICAgICAgICAgPSAweDhEQ0Y7XG5jb25zdCBVTlNJR05FRF9JTlRfU0FNUExFUl8yRCAgICAgICA9IDB4OEREMjtcbmNvbnN0IFVOU0lHTkVEX0lOVF9TQU1QTEVSXzNEICAgICAgID0gMHg4REQzO1xuY29uc3QgVU5TSUdORURfSU5UX1NBTVBMRVJfQ1VCRSAgICAgPSAweDhERDQ7XG5jb25zdCBVTlNJR05FRF9JTlRfU0FNUExFUl8yRF9BUlJBWSA9IDB4OERENztcblxuY29uc3QgVEVYVFVSRV8yRCQxICAgICAgICAgICAgICAgICAgICA9IDB4MERFMTtcbmNvbnN0IFRFWFRVUkVfQ1VCRV9NQVAgICAgICAgICAgICAgID0gMHg4NTEzO1xuY29uc3QgVEVYVFVSRV8zRCAgICAgICAgICAgICAgICAgICAgPSAweDgwNkY7XG5jb25zdCBURVhUVVJFXzJEX0FSUkFZICAgICAgICAgICAgICA9IDB4OEMxQTtcblxuY29uc3QgdHlwZU1hcCA9IHt9O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgYmluZCBwb2ludCBmb3IgYSBnaXZlbiBzYW1wbGVyIHR5cGVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldEJpbmRQb2ludEZvclNhbXBsZXJUeXBlKGdsLCB0eXBlKSB7XG4gIHJldHVybiB0eXBlTWFwW3R5cGVdLmJpbmRQb2ludDtcbn1cblxuLy8gVGhpcyBraW5kIG9mIHN1Y2tzISBJZiB5b3UgY291bGQgY29tcG9zZSBmdW5jdGlvbnMgYXMgaW4gYHZhciBmbiA9IGdsW25hbWVdO2Bcbi8vIHRoaXMgY29kZSBjb3VsZCBiZSBhIGxvdCBzbWFsbGVyIGJ1dCB0aGF0IGlzIHNhZGx5IHJlYWxseSBzbG93IChUX1QpXG5cbmZ1bmN0aW9uIGZsb2F0U2V0dGVyKGdsLCBsb2NhdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24odikge1xuICAgIGdsLnVuaWZvcm0xZihsb2NhdGlvbiwgdik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZsb2F0QXJyYXlTZXR0ZXIoZ2wsIGxvY2F0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbih2KSB7XG4gICAgZ2wudW5pZm9ybTFmdihsb2NhdGlvbiwgdik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZsb2F0VmVjMlNldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHYpIHtcbiAgICBnbC51bmlmb3JtMmZ2KGxvY2F0aW9uLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmxvYXRWZWMzU2V0dGVyKGdsLCBsb2NhdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24odikge1xuICAgIGdsLnVuaWZvcm0zZnYobG9jYXRpb24sIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmbG9hdFZlYzRTZXR0ZXIoZ2wsIGxvY2F0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbih2KSB7XG4gICAgZ2wudW5pZm9ybTRmdihsb2NhdGlvbiwgdik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludFNldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHYpIHtcbiAgICBnbC51bmlmb3JtMWkobG9jYXRpb24sIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBpbnRBcnJheVNldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHYpIHtcbiAgICBnbC51bmlmb3JtMWl2KGxvY2F0aW9uLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW50VmVjMlNldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHYpIHtcbiAgICBnbC51bmlmb3JtMml2KGxvY2F0aW9uLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW50VmVjM1NldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHYpIHtcbiAgICBnbC51bmlmb3JtM2l2KGxvY2F0aW9uLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW50VmVjNFNldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHYpIHtcbiAgICBnbC51bmlmb3JtNGl2KGxvY2F0aW9uLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdWludFNldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHYpIHtcbiAgICBnbC51bmlmb3JtMXVpKGxvY2F0aW9uLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdWludEFycmF5U2V0dGVyKGdsLCBsb2NhdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24odikge1xuICAgIGdsLnVuaWZvcm0xdWl2KGxvY2F0aW9uLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdWludFZlYzJTZXR0ZXIoZ2wsIGxvY2F0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbih2KSB7XG4gICAgZ2wudW5pZm9ybTJ1aXYobG9jYXRpb24sIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiB1aW50VmVjM1NldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHYpIHtcbiAgICBnbC51bmlmb3JtM3Vpdihsb2NhdGlvbiwgdik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHVpbnRWZWM0U2V0dGVyKGdsLCBsb2NhdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24odikge1xuICAgIGdsLnVuaWZvcm00dWl2KGxvY2F0aW9uLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmxvYXRNYXQyU2V0dGVyKGdsLCBsb2NhdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24odikge1xuICAgIGdsLnVuaWZvcm1NYXRyaXgyZnYobG9jYXRpb24sIGZhbHNlLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmxvYXRNYXQzU2V0dGVyKGdsLCBsb2NhdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24odikge1xuICAgIGdsLnVuaWZvcm1NYXRyaXgzZnYobG9jYXRpb24sIGZhbHNlLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmxvYXRNYXQ0U2V0dGVyKGdsLCBsb2NhdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24odikge1xuICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYobG9jYXRpb24sIGZhbHNlLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmxvYXRNYXQyM1NldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHYpIHtcbiAgICBnbC51bmlmb3JtTWF0cml4MngzZnYobG9jYXRpb24sIGZhbHNlLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmxvYXRNYXQzMlNldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHYpIHtcbiAgICBnbC51bmlmb3JtTWF0cml4M3gyZnYobG9jYXRpb24sIGZhbHNlLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmxvYXRNYXQyNFNldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHYpIHtcbiAgICBnbC51bmlmb3JtTWF0cml4Mng0ZnYobG9jYXRpb24sIGZhbHNlLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmxvYXRNYXQ0MlNldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHYpIHtcbiAgICBnbC51bmlmb3JtTWF0cml4NHgyZnYobG9jYXRpb24sIGZhbHNlLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmxvYXRNYXQzNFNldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHYpIHtcbiAgICBnbC51bmlmb3JtTWF0cml4M3g0ZnYobG9jYXRpb24sIGZhbHNlLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmxvYXRNYXQ0M1NldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHYpIHtcbiAgICBnbC51bmlmb3JtTWF0cml4NHgzZnYobG9jYXRpb24sIGZhbHNlLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2FtcGxlclNldHRlcihnbCwgdHlwZSwgdW5pdCwgbG9jYXRpb24pIHtcbiAgY29uc3QgYmluZFBvaW50ID0gZ2V0QmluZFBvaW50Rm9yU2FtcGxlclR5cGUoZ2wsIHR5cGUpO1xuICByZXR1cm4gaXNXZWJHTDIoZ2wpID8gZnVuY3Rpb24odGV4dHVyZU9yUGFpcikge1xuICAgIGxldCB0ZXh0dXJlO1xuICAgIGxldCBzYW1wbGVyO1xuICAgIGlmICghdGV4dHVyZU9yUGFpciB8fCBpc1RleHR1cmUoZ2wsIHRleHR1cmVPclBhaXIpKSB7XG4gICAgICB0ZXh0dXJlID0gdGV4dHVyZU9yUGFpcjtcbiAgICAgIHNhbXBsZXIgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZXh0dXJlID0gdGV4dHVyZU9yUGFpci50ZXh0dXJlO1xuICAgICAgc2FtcGxlciA9IHRleHR1cmVPclBhaXIuc2FtcGxlcjtcbiAgICB9XG4gICAgZ2wudW5pZm9ybTFpKGxvY2F0aW9uLCB1bml0KTtcbiAgICBnbC5hY3RpdmVUZXh0dXJlKFRFWFRVUkUwICsgdW5pdCk7XG4gICAgZ2wuYmluZFRleHR1cmUoYmluZFBvaW50LCB0ZXh0dXJlKTtcbiAgICBnbC5iaW5kU2FtcGxlcih1bml0LCBzYW1wbGVyKTtcbiAgfSA6IGZ1bmN0aW9uKHRleHR1cmUpIHtcbiAgICBnbC51bmlmb3JtMWkobG9jYXRpb24sIHVuaXQpO1xuICAgIGdsLmFjdGl2ZVRleHR1cmUoVEVYVFVSRTAgKyB1bml0KTtcbiAgICBnbC5iaW5kVGV4dHVyZShiaW5kUG9pbnQsIHRleHR1cmUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzYW1wbGVyQXJyYXlTZXR0ZXIoZ2wsIHR5cGUsIHVuaXQsIGxvY2F0aW9uLCBzaXplKSB7XG4gIGNvbnN0IGJpbmRQb2ludCA9IGdldEJpbmRQb2ludEZvclNhbXBsZXJUeXBlKGdsLCB0eXBlKTtcbiAgY29uc3QgdW5pdHMgPSBuZXcgSW50MzJBcnJheShzaXplKTtcbiAgZm9yIChsZXQgaWkgPSAwOyBpaSA8IHNpemU7ICsraWkpIHtcbiAgICB1bml0c1tpaV0gPSB1bml0ICsgaWk7XG4gIH1cblxuICByZXR1cm4gaXNXZWJHTDIoZ2wpID8gZnVuY3Rpb24odGV4dHVyZXMpIHtcbiAgICBnbC51bmlmb3JtMWl2KGxvY2F0aW9uLCB1bml0cyk7XG4gICAgdGV4dHVyZXMuZm9yRWFjaChmdW5jdGlvbih0ZXh0dXJlT3JQYWlyLCBpbmRleCkge1xuICAgICAgZ2wuYWN0aXZlVGV4dHVyZShURVhUVVJFMCArIHVuaXRzW2luZGV4XSk7XG4gICAgICBsZXQgdGV4dHVyZTtcbiAgICAgIGxldCBzYW1wbGVyO1xuICAgICAgaWYgKCF0ZXh0dXJlT3JQYWlyIHx8IGlzVGV4dHVyZShnbCwgdGV4dHVyZU9yUGFpcikpIHtcbiAgICAgICAgdGV4dHVyZSA9IHRleHR1cmVPclBhaXI7XG4gICAgICAgIHNhbXBsZXIgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dHVyZSA9IHRleHR1cmVPclBhaXIudGV4dHVyZTtcbiAgICAgICAgc2FtcGxlciA9IHRleHR1cmVPclBhaXIuc2FtcGxlcjtcbiAgICAgIH1cbiAgICAgIGdsLmJpbmRTYW1wbGVyKHVuaXQsIHNhbXBsZXIpO1xuICAgICAgZ2wuYmluZFRleHR1cmUoYmluZFBvaW50LCB0ZXh0dXJlKTtcbiAgICB9KTtcbiAgfSA6IGZ1bmN0aW9uKHRleHR1cmVzKSB7XG4gICAgZ2wudW5pZm9ybTFpdihsb2NhdGlvbiwgdW5pdHMpO1xuICAgIHRleHR1cmVzLmZvckVhY2goZnVuY3Rpb24odGV4dHVyZSwgaW5kZXgpIHtcbiAgICAgIGdsLmFjdGl2ZVRleHR1cmUoVEVYVFVSRTAgKyB1bml0c1tpbmRleF0pO1xuICAgICAgZ2wuYmluZFRleHR1cmUoYmluZFBvaW50LCB0ZXh0dXJlKTtcbiAgICB9KTtcbiAgfTtcbn1cblxudHlwZU1hcFtGTE9BVF0gICAgICAgICAgICAgICAgICAgICAgICAgPSB7IFR5cGU6IEZsb2F0MzJBcnJheSwgc2l6ZTogIDQsIHNldHRlcjogZmxvYXRTZXR0ZXIsICAgICAgYXJyYXlTZXR0ZXI6IGZsb2F0QXJyYXlTZXR0ZXIsIH07XG50eXBlTWFwW0ZMT0FUX1ZFQzJdICAgICAgICAgICAgICAgICAgICA9IHsgVHlwZTogRmxvYXQzMkFycmF5LCBzaXplOiAgOCwgc2V0dGVyOiBmbG9hdFZlYzJTZXR0ZXIsICBjb2xzOiAyLCB9O1xudHlwZU1hcFtGTE9BVF9WRUMzXSAgICAgICAgICAgICAgICAgICAgPSB7IFR5cGU6IEZsb2F0MzJBcnJheSwgc2l6ZTogMTIsIHNldHRlcjogZmxvYXRWZWMzU2V0dGVyLCAgY29sczogMywgfTtcbnR5cGVNYXBbRkxPQVRfVkVDNF0gICAgICAgICAgICAgICAgICAgID0geyBUeXBlOiBGbG9hdDMyQXJyYXksIHNpemU6IDE2LCBzZXR0ZXI6IGZsb2F0VmVjNFNldHRlciwgIGNvbHM6IDQsIH07XG50eXBlTWFwW0lOVF0gICAgICAgICAgICAgICAgICAgICAgICAgICA9IHsgVHlwZTogSW50MzJBcnJheSwgICBzaXplOiAgNCwgc2V0dGVyOiBpbnRTZXR0ZXIsICAgICAgICBhcnJheVNldHRlcjogaW50QXJyYXlTZXR0ZXIsIH07XG50eXBlTWFwW0lOVF9WRUMyXSAgICAgICAgICAgICAgICAgICAgICA9IHsgVHlwZTogSW50MzJBcnJheSwgICBzaXplOiAgOCwgc2V0dGVyOiBpbnRWZWMyU2V0dGVyLCAgICBjb2xzOiAyLCB9O1xudHlwZU1hcFtJTlRfVkVDM10gICAgICAgICAgICAgICAgICAgICAgPSB7IFR5cGU6IEludDMyQXJyYXksICAgc2l6ZTogMTIsIHNldHRlcjogaW50VmVjM1NldHRlciwgICAgY29sczogMywgfTtcbnR5cGVNYXBbSU5UX1ZFQzRdICAgICAgICAgICAgICAgICAgICAgID0geyBUeXBlOiBJbnQzMkFycmF5LCAgIHNpemU6IDE2LCBzZXR0ZXI6IGludFZlYzRTZXR0ZXIsICAgIGNvbHM6IDQsIH07XG50eXBlTWFwW1VOU0lHTkVEX0lOVF0gICAgICAgICAgICAgICAgICA9IHsgVHlwZTogVWludDMyQXJyYXksICBzaXplOiAgNCwgc2V0dGVyOiB1aW50U2V0dGVyLCAgICAgICBhcnJheVNldHRlcjogdWludEFycmF5U2V0dGVyLCB9O1xudHlwZU1hcFtVTlNJR05FRF9JTlRfVkVDMl0gICAgICAgICAgICAgPSB7IFR5cGU6IFVpbnQzMkFycmF5LCAgc2l6ZTogIDgsIHNldHRlcjogdWludFZlYzJTZXR0ZXIsICAgY29sczogMiwgfTtcbnR5cGVNYXBbVU5TSUdORURfSU5UX1ZFQzNdICAgICAgICAgICAgID0geyBUeXBlOiBVaW50MzJBcnJheSwgIHNpemU6IDEyLCBzZXR0ZXI6IHVpbnRWZWMzU2V0dGVyLCAgIGNvbHM6IDMsIH07XG50eXBlTWFwW1VOU0lHTkVEX0lOVF9WRUM0XSAgICAgICAgICAgICA9IHsgVHlwZTogVWludDMyQXJyYXksICBzaXplOiAxNiwgc2V0dGVyOiB1aW50VmVjNFNldHRlciwgICBjb2xzOiA0LCB9O1xudHlwZU1hcFtCT09MXSAgICAgICAgICAgICAgICAgICAgICAgICAgPSB7IFR5cGU6IFVpbnQzMkFycmF5LCAgc2l6ZTogIDQsIHNldHRlcjogaW50U2V0dGVyLCAgICAgICAgYXJyYXlTZXR0ZXI6IGludEFycmF5U2V0dGVyLCB9O1xudHlwZU1hcFtCT09MX1ZFQzJdICAgICAgICAgICAgICAgICAgICAgPSB7IFR5cGU6IFVpbnQzMkFycmF5LCAgc2l6ZTogIDgsIHNldHRlcjogaW50VmVjMlNldHRlciwgICAgY29sczogMiwgfTtcbnR5cGVNYXBbQk9PTF9WRUMzXSAgICAgICAgICAgICAgICAgICAgID0geyBUeXBlOiBVaW50MzJBcnJheSwgIHNpemU6IDEyLCBzZXR0ZXI6IGludFZlYzNTZXR0ZXIsICAgIGNvbHM6IDMsIH07XG50eXBlTWFwW0JPT0xfVkVDNF0gICAgICAgICAgICAgICAgICAgICA9IHsgVHlwZTogVWludDMyQXJyYXksICBzaXplOiAxNiwgc2V0dGVyOiBpbnRWZWM0U2V0dGVyLCAgICBjb2xzOiA0LCB9O1xudHlwZU1hcFtGTE9BVF9NQVQyXSAgICAgICAgICAgICAgICAgICAgPSB7IFR5cGU6IEZsb2F0MzJBcnJheSwgc2l6ZTogMzIsIHNldHRlcjogZmxvYXRNYXQyU2V0dGVyLCAgcm93czogMiwgY29sczogMiwgfTtcbnR5cGVNYXBbRkxPQVRfTUFUM10gICAgICAgICAgICAgICAgICAgID0geyBUeXBlOiBGbG9hdDMyQXJyYXksIHNpemU6IDQ4LCBzZXR0ZXI6IGZsb2F0TWF0M1NldHRlciwgIHJvd3M6IDMsIGNvbHM6IDMsIH07XG50eXBlTWFwW0ZMT0FUX01BVDRdICAgICAgICAgICAgICAgICAgICA9IHsgVHlwZTogRmxvYXQzMkFycmF5LCBzaXplOiA2NCwgc2V0dGVyOiBmbG9hdE1hdDRTZXR0ZXIsICByb3dzOiA0LCBjb2xzOiA0LCB9O1xudHlwZU1hcFtGTE9BVF9NQVQyeDNdICAgICAgICAgICAgICAgICAgPSB7IFR5cGU6IEZsb2F0MzJBcnJheSwgc2l6ZTogMzIsIHNldHRlcjogZmxvYXRNYXQyM1NldHRlciwgcm93czogMiwgY29sczogMywgfTtcbnR5cGVNYXBbRkxPQVRfTUFUMng0XSAgICAgICAgICAgICAgICAgID0geyBUeXBlOiBGbG9hdDMyQXJyYXksIHNpemU6IDMyLCBzZXR0ZXI6IGZsb2F0TWF0MjRTZXR0ZXIsIHJvd3M6IDIsIGNvbHM6IDQsIH07XG50eXBlTWFwW0ZMT0FUX01BVDN4Ml0gICAgICAgICAgICAgICAgICA9IHsgVHlwZTogRmxvYXQzMkFycmF5LCBzaXplOiA0OCwgc2V0dGVyOiBmbG9hdE1hdDMyU2V0dGVyLCByb3dzOiAzLCBjb2xzOiAyLCB9O1xudHlwZU1hcFtGTE9BVF9NQVQzeDRdICAgICAgICAgICAgICAgICAgPSB7IFR5cGU6IEZsb2F0MzJBcnJheSwgc2l6ZTogNDgsIHNldHRlcjogZmxvYXRNYXQzNFNldHRlciwgcm93czogMywgY29sczogNCwgfTtcbnR5cGVNYXBbRkxPQVRfTUFUNHgyXSAgICAgICAgICAgICAgICAgID0geyBUeXBlOiBGbG9hdDMyQXJyYXksIHNpemU6IDY0LCBzZXR0ZXI6IGZsb2F0TWF0NDJTZXR0ZXIsIHJvd3M6IDQsIGNvbHM6IDIsIH07XG50eXBlTWFwW0ZMT0FUX01BVDR4M10gICAgICAgICAgICAgICAgICA9IHsgVHlwZTogRmxvYXQzMkFycmF5LCBzaXplOiA2NCwgc2V0dGVyOiBmbG9hdE1hdDQzU2V0dGVyLCByb3dzOiA0LCBjb2xzOiAzLCB9O1xudHlwZU1hcFtTQU1QTEVSXzJEXSAgICAgICAgICAgICAgICAgICAgPSB7IFR5cGU6IG51bGwsICAgICAgICAgc2l6ZTogIDAsIHNldHRlcjogc2FtcGxlclNldHRlciwgICAgYXJyYXlTZXR0ZXI6IHNhbXBsZXJBcnJheVNldHRlciwgYmluZFBvaW50OiBURVhUVVJFXzJEJDEsICAgICAgIH07XG50eXBlTWFwW1NBTVBMRVJfQ1VCRV0gICAgICAgICAgICAgICAgICA9IHsgVHlwZTogbnVsbCwgICAgICAgICBzaXplOiAgMCwgc2V0dGVyOiBzYW1wbGVyU2V0dGVyLCAgICBhcnJheVNldHRlcjogc2FtcGxlckFycmF5U2V0dGVyLCBiaW5kUG9pbnQ6IFRFWFRVUkVfQ1VCRV9NQVAsIH07XG50eXBlTWFwW1NBTVBMRVJfM0RdICAgICAgICAgICAgICAgICAgICA9IHsgVHlwZTogbnVsbCwgICAgICAgICBzaXplOiAgMCwgc2V0dGVyOiBzYW1wbGVyU2V0dGVyLCAgICBhcnJheVNldHRlcjogc2FtcGxlckFycmF5U2V0dGVyLCBiaW5kUG9pbnQ6IFRFWFRVUkVfM0QsICAgICAgIH07XG50eXBlTWFwW1NBTVBMRVJfMkRfU0hBRE9XXSAgICAgICAgICAgICA9IHsgVHlwZTogbnVsbCwgICAgICAgICBzaXplOiAgMCwgc2V0dGVyOiBzYW1wbGVyU2V0dGVyLCAgICBhcnJheVNldHRlcjogc2FtcGxlckFycmF5U2V0dGVyLCBiaW5kUG9pbnQ6IFRFWFRVUkVfMkQkMSwgICAgICAgfTtcbnR5cGVNYXBbU0FNUExFUl8yRF9BUlJBWV0gICAgICAgICAgICAgID0geyBUeXBlOiBudWxsLCAgICAgICAgIHNpemU6ICAwLCBzZXR0ZXI6IHNhbXBsZXJTZXR0ZXIsICAgIGFycmF5U2V0dGVyOiBzYW1wbGVyQXJyYXlTZXR0ZXIsIGJpbmRQb2ludDogVEVYVFVSRV8yRF9BUlJBWSwgfTtcbnR5cGVNYXBbU0FNUExFUl8yRF9BUlJBWV9TSEFET1ddICAgICAgID0geyBUeXBlOiBudWxsLCAgICAgICAgIHNpemU6ICAwLCBzZXR0ZXI6IHNhbXBsZXJTZXR0ZXIsICAgIGFycmF5U2V0dGVyOiBzYW1wbGVyQXJyYXlTZXR0ZXIsIGJpbmRQb2ludDogVEVYVFVSRV8yRF9BUlJBWSwgfTtcbnR5cGVNYXBbU0FNUExFUl9DVUJFX1NIQURPV10gICAgICAgICAgID0geyBUeXBlOiBudWxsLCAgICAgICAgIHNpemU6ICAwLCBzZXR0ZXI6IHNhbXBsZXJTZXR0ZXIsICAgIGFycmF5U2V0dGVyOiBzYW1wbGVyQXJyYXlTZXR0ZXIsIGJpbmRQb2ludDogVEVYVFVSRV9DVUJFX01BUCwgfTtcbnR5cGVNYXBbSU5UX1NBTVBMRVJfMkRdICAgICAgICAgICAgICAgID0geyBUeXBlOiBudWxsLCAgICAgICAgIHNpemU6ICAwLCBzZXR0ZXI6IHNhbXBsZXJTZXR0ZXIsICAgIGFycmF5U2V0dGVyOiBzYW1wbGVyQXJyYXlTZXR0ZXIsIGJpbmRQb2ludDogVEVYVFVSRV8yRCQxLCAgICAgICB9O1xudHlwZU1hcFtJTlRfU0FNUExFUl8zRF0gICAgICAgICAgICAgICAgPSB7IFR5cGU6IG51bGwsICAgICAgICAgc2l6ZTogIDAsIHNldHRlcjogc2FtcGxlclNldHRlciwgICAgYXJyYXlTZXR0ZXI6IHNhbXBsZXJBcnJheVNldHRlciwgYmluZFBvaW50OiBURVhUVVJFXzNELCAgICAgICB9O1xudHlwZU1hcFtJTlRfU0FNUExFUl9DVUJFXSAgICAgICAgICAgICAgPSB7IFR5cGU6IG51bGwsICAgICAgICAgc2l6ZTogIDAsIHNldHRlcjogc2FtcGxlclNldHRlciwgICAgYXJyYXlTZXR0ZXI6IHNhbXBsZXJBcnJheVNldHRlciwgYmluZFBvaW50OiBURVhUVVJFX0NVQkVfTUFQLCB9O1xudHlwZU1hcFtJTlRfU0FNUExFUl8yRF9BUlJBWV0gICAgICAgICAgPSB7IFR5cGU6IG51bGwsICAgICAgICAgc2l6ZTogIDAsIHNldHRlcjogc2FtcGxlclNldHRlciwgICAgYXJyYXlTZXR0ZXI6IHNhbXBsZXJBcnJheVNldHRlciwgYmluZFBvaW50OiBURVhUVVJFXzJEX0FSUkFZLCB9O1xudHlwZU1hcFtVTlNJR05FRF9JTlRfU0FNUExFUl8yRF0gICAgICAgPSB7IFR5cGU6IG51bGwsICAgICAgICAgc2l6ZTogIDAsIHNldHRlcjogc2FtcGxlclNldHRlciwgICAgYXJyYXlTZXR0ZXI6IHNhbXBsZXJBcnJheVNldHRlciwgYmluZFBvaW50OiBURVhUVVJFXzJEJDEsICAgICAgIH07XG50eXBlTWFwW1VOU0lHTkVEX0lOVF9TQU1QTEVSXzNEXSAgICAgICA9IHsgVHlwZTogbnVsbCwgICAgICAgICBzaXplOiAgMCwgc2V0dGVyOiBzYW1wbGVyU2V0dGVyLCAgICBhcnJheVNldHRlcjogc2FtcGxlckFycmF5U2V0dGVyLCBiaW5kUG9pbnQ6IFRFWFRVUkVfM0QsICAgICAgIH07XG50eXBlTWFwW1VOU0lHTkVEX0lOVF9TQU1QTEVSX0NVQkVdICAgICA9IHsgVHlwZTogbnVsbCwgICAgICAgICBzaXplOiAgMCwgc2V0dGVyOiBzYW1wbGVyU2V0dGVyLCAgICBhcnJheVNldHRlcjogc2FtcGxlckFycmF5U2V0dGVyLCBiaW5kUG9pbnQ6IFRFWFRVUkVfQ1VCRV9NQVAsIH07XG50eXBlTWFwW1VOU0lHTkVEX0lOVF9TQU1QTEVSXzJEX0FSUkFZXSA9IHsgVHlwZTogbnVsbCwgICAgICAgICBzaXplOiAgMCwgc2V0dGVyOiBzYW1wbGVyU2V0dGVyLCAgICBhcnJheVNldHRlcjogc2FtcGxlckFycmF5U2V0dGVyLCBiaW5kUG9pbnQ6IFRFWFRVUkVfMkRfQVJSQVksIH07XG5cbmZ1bmN0aW9uIGZsb2F0QXR0cmliU2V0dGVyKGdsLCBpbmRleCkge1xuICByZXR1cm4gZnVuY3Rpb24oYikge1xuICAgIGlmIChiLnZhbHVlKSB7XG4gICAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkoaW5kZXgpO1xuICAgICAgc3dpdGNoIChiLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgZ2wudmVydGV4QXR0cmliNGZ2KGluZGV4LCBiLnZhbHVlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGdsLnZlcnRleEF0dHJpYjNmdihpbmRleCwgYi52YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBnbC52ZXJ0ZXhBdHRyaWIyZnYoaW5kZXgsIGIudmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgZ2wudmVydGV4QXR0cmliMWZ2KGluZGV4LCBiLnZhbHVlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RoZSBsZW5ndGggb2YgYSBmbG9hdCBjb25zdGFudCB2YWx1ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNCEnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZ2wuYmluZEJ1ZmZlcihBUlJBWV9CVUZGRVIsIGIuYnVmZmVyKTtcbiAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGluZGV4KTtcbiAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXG4gICAgICAgICAgaW5kZXgsIGIubnVtQ29tcG9uZW50cyB8fCBiLnNpemUsIGIudHlwZSB8fCBGTE9BVCwgYi5ub3JtYWxpemUgfHwgZmFsc2UsIGIuc3RyaWRlIHx8IDAsIGIub2Zmc2V0IHx8IDApO1xuICAgICAgaWYgKGdsLnZlcnRleEF0dHJpYkRpdmlzb3IpIHtcbiAgICAgICAgZ2wudmVydGV4QXR0cmliRGl2aXNvcihpbmRleCwgYi5kaXZpc29yIHx8IDApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW50QXR0cmliU2V0dGVyKGdsLCBpbmRleCkge1xuICByZXR1cm4gZnVuY3Rpb24oYikge1xuICAgIGlmIChiLnZhbHVlKSB7XG4gICAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkoaW5kZXgpO1xuICAgICAgaWYgKGIudmFsdWUubGVuZ3RoID09PSA0KSB7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYjRpdihpbmRleCwgYi52YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBsZW5ndGggb2YgYW4gaW50ZWdlciBjb25zdGFudCB2YWx1ZSBtdXN0IGJlIDQhJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGdsLmJpbmRCdWZmZXIoQVJSQVlfQlVGRkVSLCBiLmJ1ZmZlcik7XG4gICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShpbmRleCk7XG4gICAgICBnbC52ZXJ0ZXhBdHRyaWJJUG9pbnRlcihcbiAgICAgICAgICBpbmRleCwgYi5udW1Db21wb25lbnRzIHx8IGIuc2l6ZSwgYi50eXBlIHx8IElOVCwgYi5zdHJpZGUgfHwgMCwgYi5vZmZzZXQgfHwgMCk7XG4gICAgICBpZiAoZ2wudmVydGV4QXR0cmliRGl2aXNvcikge1xuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJEaXZpc29yKGluZGV4LCBiLmRpdmlzb3IgfHwgMCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiB1aW50QXR0cmliU2V0dGVyKGdsLCBpbmRleCkge1xuICByZXR1cm4gZnVuY3Rpb24oYikge1xuICAgIGlmIChiLnZhbHVlKSB7XG4gICAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkoaW5kZXgpO1xuICAgICAgaWYgKGIudmFsdWUubGVuZ3RoID09PSA0KSB7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYjR1aXYoaW5kZXgsIGIudmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgbGVuZ3RoIG9mIGFuIHVuc2lnbmVkIGludGVnZXIgY29uc3RhbnQgdmFsdWUgbXVzdCBiZSA0IScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBnbC5iaW5kQnVmZmVyKEFSUkFZX0JVRkZFUiwgYi5idWZmZXIpO1xuICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoaW5kZXgpO1xuICAgICAgZ2wudmVydGV4QXR0cmliSVBvaW50ZXIoXG4gICAgICAgICAgaW5kZXgsIGIubnVtQ29tcG9uZW50cyB8fCBiLnNpemUsIGIudHlwZSB8fCBVTlNJR05FRF9JTlQsIGIuc3RyaWRlIHx8IDAsIGIub2Zmc2V0IHx8IDApO1xuICAgICAgaWYgKGdsLnZlcnRleEF0dHJpYkRpdmlzb3IpIHtcbiAgICAgICAgZ2wudmVydGV4QXR0cmliRGl2aXNvcihpbmRleCwgYi5kaXZpc29yIHx8IDApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gbWF0QXR0cmliU2V0dGVyKGdsLCBpbmRleCwgdHlwZUluZm8pIHtcbiAgY29uc3QgZGVmYXVsdFNpemUgPSB0eXBlSW5mby5zaXplO1xuICBjb25zdCBjb3VudCA9IHR5cGVJbmZvLmNvdW50O1xuXG4gIHJldHVybiBmdW5jdGlvbihiKSB7XG4gICAgZ2wuYmluZEJ1ZmZlcihBUlJBWV9CVUZGRVIsIGIuYnVmZmVyKTtcbiAgICBjb25zdCBudW1Db21wb25lbnRzID0gYi5zaXplIHx8IGIubnVtQ29tcG9uZW50cyB8fCBkZWZhdWx0U2l6ZTtcbiAgICBjb25zdCBzaXplID0gbnVtQ29tcG9uZW50cyAvIGNvdW50O1xuICAgIGNvbnN0IHR5cGUgPSBiLnR5cGUgfHwgRkxPQVQ7XG4gICAgY29uc3QgdHlwZUluZm8gPSB0eXBlTWFwW3R5cGVdO1xuICAgIGNvbnN0IHN0cmlkZSA9IHR5cGVJbmZvLnNpemUgKiBudW1Db21wb25lbnRzO1xuICAgIGNvbnN0IG5vcm1hbGl6ZSA9IGIubm9ybWFsaXplIHx8IGZhbHNlO1xuICAgIGNvbnN0IG9mZnNldCA9IGIub2Zmc2V0IHx8IDA7XG4gICAgY29uc3Qgcm93T2Zmc2V0ID0gc3RyaWRlIC8gY291bnQ7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShpbmRleCArIGkpO1xuICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcbiAgICAgICAgICBpbmRleCArIGksIHNpemUsIHR5cGUsIG5vcm1hbGl6ZSwgc3RyaWRlLCBvZmZzZXQgKyByb3dPZmZzZXQgKiBpKTtcbiAgICAgIGlmIChnbC52ZXJ0ZXhBdHRyaWJEaXZpc29yKSB7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYkRpdmlzb3IoaW5kZXggKyBpLCBiLmRpdmlzb3IgfHwgMCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG5cblxuY29uc3QgYXR0clR5cGVNYXAgPSB7fTtcbmF0dHJUeXBlTWFwW0ZMT0FUXSAgICAgICAgICAgICA9IHsgc2l6ZTogIDQsIHNldHRlcjogZmxvYXRBdHRyaWJTZXR0ZXIsIH07XG5hdHRyVHlwZU1hcFtGTE9BVF9WRUMyXSAgICAgICAgPSB7IHNpemU6ICA4LCBzZXR0ZXI6IGZsb2F0QXR0cmliU2V0dGVyLCB9O1xuYXR0clR5cGVNYXBbRkxPQVRfVkVDM10gICAgICAgID0geyBzaXplOiAxMiwgc2V0dGVyOiBmbG9hdEF0dHJpYlNldHRlciwgfTtcbmF0dHJUeXBlTWFwW0ZMT0FUX1ZFQzRdICAgICAgICA9IHsgc2l6ZTogMTYsIHNldHRlcjogZmxvYXRBdHRyaWJTZXR0ZXIsIH07XG5hdHRyVHlwZU1hcFtJTlRdICAgICAgICAgICAgICAgPSB7IHNpemU6ICA0LCBzZXR0ZXI6IGludEF0dHJpYlNldHRlciwgICB9O1xuYXR0clR5cGVNYXBbSU5UX1ZFQzJdICAgICAgICAgID0geyBzaXplOiAgOCwgc2V0dGVyOiBpbnRBdHRyaWJTZXR0ZXIsICAgfTtcbmF0dHJUeXBlTWFwW0lOVF9WRUMzXSAgICAgICAgICA9IHsgc2l6ZTogMTIsIHNldHRlcjogaW50QXR0cmliU2V0dGVyLCAgIH07XG5hdHRyVHlwZU1hcFtJTlRfVkVDNF0gICAgICAgICAgPSB7IHNpemU6IDE2LCBzZXR0ZXI6IGludEF0dHJpYlNldHRlciwgICB9O1xuYXR0clR5cGVNYXBbVU5TSUdORURfSU5UXSAgICAgID0geyBzaXplOiAgNCwgc2V0dGVyOiB1aW50QXR0cmliU2V0dGVyLCAgfTtcbmF0dHJUeXBlTWFwW1VOU0lHTkVEX0lOVF9WRUMyXSA9IHsgc2l6ZTogIDgsIHNldHRlcjogdWludEF0dHJpYlNldHRlciwgIH07XG5hdHRyVHlwZU1hcFtVTlNJR05FRF9JTlRfVkVDM10gPSB7IHNpemU6IDEyLCBzZXR0ZXI6IHVpbnRBdHRyaWJTZXR0ZXIsICB9O1xuYXR0clR5cGVNYXBbVU5TSUdORURfSU5UX1ZFQzRdID0geyBzaXplOiAxNiwgc2V0dGVyOiB1aW50QXR0cmliU2V0dGVyLCAgfTtcbmF0dHJUeXBlTWFwW0JPT0xdICAgICAgICAgICAgICA9IHsgc2l6ZTogIDQsIHNldHRlcjogaW50QXR0cmliU2V0dGVyLCAgIH07XG5hdHRyVHlwZU1hcFtCT09MX1ZFQzJdICAgICAgICAgPSB7IHNpemU6ICA4LCBzZXR0ZXI6IGludEF0dHJpYlNldHRlciwgICB9O1xuYXR0clR5cGVNYXBbQk9PTF9WRUMzXSAgICAgICAgID0geyBzaXplOiAxMiwgc2V0dGVyOiBpbnRBdHRyaWJTZXR0ZXIsICAgfTtcbmF0dHJUeXBlTWFwW0JPT0xfVkVDNF0gICAgICAgICA9IHsgc2l6ZTogMTYsIHNldHRlcjogaW50QXR0cmliU2V0dGVyLCAgIH07XG5hdHRyVHlwZU1hcFtGTE9BVF9NQVQyXSAgICAgICAgPSB7IHNpemU6ICA0LCBzZXR0ZXI6IG1hdEF0dHJpYlNldHRlciwgICBjb3VudDogMiwgfTtcbmF0dHJUeXBlTWFwW0ZMT0FUX01BVDNdICAgICAgICA9IHsgc2l6ZTogIDksIHNldHRlcjogbWF0QXR0cmliU2V0dGVyLCAgIGNvdW50OiAzLCB9O1xuYXR0clR5cGVNYXBbRkxPQVRfTUFUNF0gICAgICAgID0geyBzaXplOiAxNiwgc2V0dGVyOiBtYXRBdHRyaWJTZXR0ZXIsICAgY291bnQ6IDQsIH07XG5cbmNvbnN0IGVycm9yUkUgPSAvRVJST1I6XFxzKlxcZCs6KFxcZCspL2dpO1xuZnVuY3Rpb24gYWRkTGluZU51bWJlcnNXaXRoRXJyb3Ioc3JjLCBsb2cgPSAnJywgbGluZU9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogRXJyb3IgbWVzc2FnZSBmb3JtYXRzIGFyZSBub3QgZGVmaW5lZCBieSBhbnkgc3BlYyBzbyB0aGlzIG1heSBvciBtYXkgbm90IHdvcmsuXG4gIGNvbnN0IG1hdGNoZXMgPSBbLi4ubG9nLm1hdGNoQWxsKGVycm9yUkUpXTtcbiAgY29uc3QgbGluZU5vVG9FcnJvck1hcCA9IG5ldyBNYXAobWF0Y2hlcy5tYXAoKG0sIG5keCkgPT4ge1xuICAgIGNvbnN0IGxpbmVObyA9IHBhcnNlSW50KG1bMV0pO1xuICAgIGNvbnN0IG5leHQgPSBtYXRjaGVzW25keCArIDFdO1xuICAgIGNvbnN0IGVuZCA9IG5leHQgPyBuZXh0LmluZGV4IDogbG9nLmxlbmd0aDtcbiAgICBjb25zdCBtc2cgPSBsb2cuc3Vic3RyaW5nKG0uaW5kZXgsIGVuZCk7XG4gICAgcmV0dXJuIFtsaW5lTm8gLSAxLCBtc2ddO1xuICB9KSk7XG4gIHJldHVybiBzcmMuc3BsaXQoJ1xcbicpLm1hcCgobGluZSwgbGluZU5vKSA9PiB7XG4gICAgY29uc3QgZXJyID0gbGluZU5vVG9FcnJvck1hcC5nZXQobGluZU5vKTtcbiAgICByZXR1cm4gYCR7bGluZU5vICsgMSArIGxpbmVPZmZzZXR9OiAke2xpbmV9JHtlcnIgPyBgXFxuXFxuXl5eICR7ZXJyfWAgOiAnJ31gO1xuICB9KS5qb2luKCdcXG4nKTtcbn1cblxuLyoqXG4gKiBFcnJvciBDYWxsYmFja1xuICogQGNhbGxiYWNrIEVycm9yQ2FsbGJhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGluZU9mZnNldF0gYW1vdW50IHRvIGFkZCB0byBsaW5lIG51bWJlclxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuLyoqXG4gKiBQcm9ncmFtIENhbGxiYWNrXG4gKiBAY2FsbGJhY2sgUHJvZ3JhbUNhbGxiYWNrXG4gKiBAcGFyYW0ge3N0cmluZ30gW2Vycl0gZXJyb3IgbWVzc2FnZSwgZmFsc3kgaWYgbm8gZXJyb3JcbiAqIEBwYXJhbSB7V2ViR0xQcm9ncmFtfG1vZHVsZTp0d2dsLlByb2dyYW1JbmZvfSBbcmVzdWx0XSB0aGUgcHJvZ3JhbSBvciBwcm9ncmFtSW5mb1xuICovXG5cbmNvbnN0IHNwYWNlUkUgPSAvXlsgXFx0XSpcXG4vO1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgZmlyc3QgZW5kIG9mIGxpbmUgYmVjYXVzZSBXZWJHTCAyLjAgcmVxdWlyZXNcbiAqICN2ZXJzaW9uIDMwMCBlc1xuICogYXMgdGhlIGZpcnN0IGxpbmUuIE5vIHdoaXRlc3BhY2UgYWxsb3dlZCBiZWZvcmUgdGhhdCBsaW5lXG4gKiBzb1xuICpcbiAqIDxzY3JpcHQ+XG4gKiAjdmVyc2lvbiAzMDAgZXNcbiAqIDwvc2NyaXB0PlxuICpcbiAqIEhhcyBvbmUgbGluZSBiZWZvcmUgaXQgd2hpY2ggaXMgaW52YWxpZCBhY2NvcmRpbmcgdG8gR0xTTCBFUyAzLjAwXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNoYWRlclNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSBzaGFkZXJcbiAqIEByZXR1cm5zIHt7c2hhZGVyU291cmNlOiBzdHJpbmcsIGxpbmVPZmZzZXQ6IG51bWJlcn19XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBwcmVwU2hhZGVyU291cmNlKHNoYWRlclNvdXJjZSkge1xuICBsZXQgbGluZU9mZnNldCA9IDA7XG4gIGlmIChzcGFjZVJFLnRlc3Qoc2hhZGVyU291cmNlKSkge1xuICAgIGxpbmVPZmZzZXQgPSAxO1xuICAgIHNoYWRlclNvdXJjZSA9IHNoYWRlclNvdXJjZS5yZXBsYWNlKHNwYWNlUkUsICcnKTtcbiAgfVxuICByZXR1cm4ge2xpbmVPZmZzZXQsIHNoYWRlclNvdXJjZX07XG59XG5cbi8qKlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5Qcm9ncmFtT3B0aW9uc30gcHJvZ09wdGlvbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2dcbiAqIEByZXR1cm4gbnVsbFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcmVwb3J0RXJyb3IocHJvZ09wdGlvbnMsIG1zZykge1xuICBwcm9nT3B0aW9ucy5lcnJvckNhbGxiYWNrKG1zZyk7XG4gIGlmIChwcm9nT3B0aW9ucy5jYWxsYmFjaykge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcHJvZ09wdGlvbnMuY2FsbGJhY2soYCR7bXNnfVxcbiR7cHJvZ09wdGlvbnMuZXJyb3JzLmpvaW4oJ1xcbicpfWApO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIENoZWNrIFNoYWRlciBzdGF0dXNcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0IHRvIHVzZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzaGFkZXJUeXBlIFRoZSBzaGFkZXIgdHlwZVxuICogQHBhcmFtIHtXZWJHTFNoYWRlcn0gc2hhZGVyIFRoZSBzaGFkZXJcbiAqIEBwYXJhbSB7RXJyb3JDYWxsYmFja30gW2VyckZuXSBmdW5jdGlvbiB0byByZWNlaXZlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IGVycm9ycyBvciBlbXB0eSBzdHJpbmdcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrU2hhZGVyU3RhdHVzKGdsLCBzaGFkZXJUeXBlLCBzaGFkZXIsIGVyckZuKSB7XG4gIGVyckZuID0gZXJyRm4gfHwgZXJyb3I7XG4gIC8vIENoZWNrIHRoZSBjb21waWxlIHN0YXR1c1xuICBjb25zdCBjb21waWxlZCA9IGdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIENPTVBJTEVfU1RBVFVTKTtcbiAgaWYgKCFjb21waWxlZCkge1xuICAgIC8vIFNvbWV0aGluZyB3ZW50IHdyb25nIGR1cmluZyBjb21waWxhdGlvbjsgZ2V0IHRoZSBlcnJvclxuICAgIGNvbnN0IGxhc3RFcnJvciA9IGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKTtcbiAgICBjb25zdCB7bGluZU9mZnNldCwgc2hhZGVyU291cmNlfSA9IHByZXBTaGFkZXJTb3VyY2UoZ2wuZ2V0U2hhZGVyU291cmNlKHNoYWRlcikpO1xuICAgIGNvbnN0IGVycm9yID0gYCR7YWRkTGluZU51bWJlcnNXaXRoRXJyb3Ioc2hhZGVyU291cmNlLCBsYXN0RXJyb3IsIGxpbmVPZmZzZXQpfVxcbkVycm9yIGNvbXBpbGluZyAke2dsRW51bVRvU3RyaW5nKGdsLCBzaGFkZXJUeXBlKX06ICR7bGFzdEVycm9yfWA7XG4gICAgZXJyRm4oZXJyb3IpO1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gRnVsbFByb2dyYW1TcGVjXG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSBzaGFkZXJzIHRoZSBzaGFkZXIgc291cmNlIG9yIGVsZW1lbnQgaWRzLlxuICogQHByb3BlcnR5IHtmdW5jdGlvbihzdHJpbmcpfSBbZXJyb3JDYWxsYmFja10gY2FsbGJhY2sgZm9yIGVycm9yc1xuICogQHByb3BlcnR5IHtPYmplY3QuPHN0cmluZyxudW1iZXI+fHN0cmluZ1tdfSBbYXR0cmliTG9jYXRpb25zXSBhIGF0dHJpYnV0ZSBuYW1lIHRvIGxvY2F0aW9uIG1hcCwgb3IgYXJyYXkgb2YgYXR0cmlidXRlIG5hbWVzIHdoZXJlIGluZGV4ID0gbG9jYXRpb24uXG4gKiBAcHJvcGVydHkgeyhtb2R1bGU6dHdnbC5CdWZmZXJJbmZvfE9iamVjdC48c3RyaW5nLG1vZHVsZTp0d2dsLkF0dHJpYkluZm8+fHN0cmluZ1tdKX0gW3RyYW5zZm9ybUZlZWRiYWNrVmFyeWluZ3NdIElmIHBhc3NlZFxuICogICBhIEJ1ZmZlckluZm8gd2lsbCB1c2UgdGhlIGF0dHJpYnMgbmFtZXMgaW5zaWRlLiBJZiBwYXNzZWQgYW4gb2JqZWN0IG9mIEF0dHJpYkluZm9zIHdpbGwgdXNlIHRoZSBuYW1lcyBmcm9tIHRoYXQgb2JqZWN0LiBPdGhlcndpc2VcbiAqICAgeW91IGNhbiBwYXNzIGFuIGFycmF5IG9mIG5hbWVzLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFt0cmFuc2Zvcm1GZWVkYmFja01vZGVdIHRoZSBtb2RlIHRvIHBhc3MgYGdsLnRyYW5zZm9ybUZlZWRiYWNrVmFyeWluZ3NgLiBEZWZhdWx0cyB0byBgU0VQQVJBVEVfQVRUUklCU2AuXG4gKiBAcHJvcGVydHkge1Byb2dyYW1DYWxsYmFja30gW2NhbGxiYWNrXSBjYWxsYmFjayBmb3IgYXN5bmMgcHJvZ3JhbSBjb21waWxhdGlvbi5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge3N0cmluZ1tdfG1vZHVsZTp0d2dsLkZ1bGxQcm9ncmFtU3BlY30gUHJvZ3JhbVNwZWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gUHJvZ3JhbU9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb24oc3RyaW5nKX0gW2Vycm9yQ2FsbGJhY2tdIGNhbGxiYWNrIGZvciBlcnJvcnNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0LjxzdHJpbmcsbnVtYmVyPnxzdHJpbmdbXX0gW2F0dHJpYkxvY2F0aW9uc10gYSBhdHRyaWJ1dGUgbmFtZSB0byBsb2NhdGlvbiBtYXAsIG9yIGFycmF5IG9mIGF0dHJpYnV0ZSBuYW1lcyB3aGVyZSBpbmRleCA9IGxvY2F0aW9uLlxuICogQHByb3BlcnR5IHsobW9kdWxlOnR3Z2wuQnVmZmVySW5mb3xPYmplY3QuPHN0cmluZyxtb2R1bGU6dHdnbC5BdHRyaWJJbmZvPnxzdHJpbmdbXSl9IFt0cmFuc2Zvcm1GZWVkYmFja1ZhcnlpbmdzXSBJZiBwYXNzZWRcbiAqICAgYSBCdWZmZXJJbmZvIHdpbGwgdXNlIHRoZSBhdHRyaWJzIG5hbWVzIGluc2lkZS4gSWYgcGFzc2VkIGFuIG9iamVjdCBvZiBBdHRyaWJJbmZvcyB3aWxsIHVzZSB0aGUgbmFtZXMgZnJvbSB0aGF0IG9iamVjdC4gT3RoZXJ3aXNlXG4gKiAgIHlvdSBjYW4gcGFzcyBhbiBhcnJheSBvZiBuYW1lcy5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbdHJhbnNmb3JtRmVlZGJhY2tNb2RlXSB0aGUgbW9kZSB0byBwYXNzIGBnbC50cmFuc2Zvcm1GZWVkYmFja1ZhcnlpbmdzYC4gRGVmYXVsdHMgdG8gYFNFUEFSQVRFX0FUVFJJQlNgLlxuICogQHByb3BlcnR5IHtQcm9ncmFtQ2FsbGJhY2t9IFtjYWxsYmFja10gY2FsbGJhY2sgZm9yIGFzeW5jIHByb2dyYW0gY29tcGlsYXRpb24uXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG4vKipcbiAqIEdldHMgdGhlIHByb2dyYW0gb3B0aW9ucyBiYXNlZCBvbiBhbGwgdGhlc2Ugb3B0aW9uYWwgYXJndW1lbnRzXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlByb2dyYW1PcHRpb25zfHN0cmluZ1tdfSBbb3B0X2F0dHJpYnNdIE9wdGlvbnMgZm9yIHRoZSBwcm9ncmFtIG9yIGFuIGFycmF5IG9mIGF0dHJpYnMgbmFtZXMuIExvY2F0aW9ucyB3aWxsIGJlIGFzc2lnbmVkIGJ5IGluZGV4IGlmIG5vdCBwYXNzZWQgaW5cbiAqIEBwYXJhbSB7bnVtYmVyW119IFtvcHRfbG9jYXRpb25zXSBUaGUgbG9jYXRpb25zIGZvciB0aGUuIEEgcGFyYWxsZWwgYXJyYXkgdG8gb3B0X2F0dHJpYnMgbGV0dGluZyB5b3UgYXNzaWduIGxvY2F0aW9ucy5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuRXJyb3JDYWxsYmFja30gW29wdF9lcnJvckNhbGxiYWNrXSBjYWxsYmFjayBmb3IgZXJyb3JzLiBCeSBkZWZhdWx0IGl0IGp1c3QgcHJpbnRzIGFuIGVycm9yIHRvIHRoZSBjb25zb2xlXG4gKiAgICAgICAgb24gZXJyb3IuIElmIHlvdSB3YW50IHNvbWV0aGluZyBlbHNlIHBhc3MgYW4gY2FsbGJhY2suIEl0J3MgcGFzc2VkIGFuIGVycm9yIG1lc3NhZ2UuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC5Qcm9ncmFtT3B0aW9uc30gYW4gaW5zdGFuY2Ugb2YgUHJvZ3JhbU9wdGlvbnMgYmFzZWQgb24gdGhlIGFyZ3VtZW50cyBwYXNzZWQgaW5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFByb2dyYW1PcHRpb25zKG9wdF9hdHRyaWJzLCBvcHRfbG9jYXRpb25zLCBvcHRfZXJyb3JDYWxsYmFjaykge1xuICBsZXQgdHJhbnNmb3JtRmVlZGJhY2tWYXJ5aW5ncztcbiAgbGV0IHRyYW5zZm9ybUZlZWRiYWNrTW9kZTtcbiAgbGV0IGNhbGxiYWNrO1xuICBpZiAodHlwZW9mIG9wdF9sb2NhdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRfZXJyb3JDYWxsYmFjayA9IG9wdF9sb2NhdGlvbnM7XG4gICAgb3B0X2xvY2F0aW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICBpZiAodHlwZW9mIG9wdF9hdHRyaWJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0X2Vycm9yQ2FsbGJhY2sgPSBvcHRfYXR0cmlicztcbiAgICBvcHRfYXR0cmlicyA9IHVuZGVmaW5lZDtcbiAgfSBlbHNlIGlmIChvcHRfYXR0cmlicyAmJiAhQXJyYXkuaXNBcnJheShvcHRfYXR0cmlicykpIHtcbiAgICBjb25zdCBvcHQgPSBvcHRfYXR0cmlicztcbiAgICBvcHRfZXJyb3JDYWxsYmFjayA9IG9wdC5lcnJvckNhbGxiYWNrO1xuICAgIG9wdF9hdHRyaWJzID0gb3B0LmF0dHJpYkxvY2F0aW9ucztcbiAgICB0cmFuc2Zvcm1GZWVkYmFja1ZhcnlpbmdzID0gb3B0LnRyYW5zZm9ybUZlZWRiYWNrVmFyeWluZ3M7XG4gICAgdHJhbnNmb3JtRmVlZGJhY2tNb2RlID0gb3B0LnRyYW5zZm9ybUZlZWRiYWNrTW9kZTtcbiAgICBjYWxsYmFjayA9IG9wdC5jYWxsYmFjaztcbiAgfVxuXG4gIGNvbnN0IGVycm9yQ2FsbGJhY2sgPSBvcHRfZXJyb3JDYWxsYmFjayB8fCBlcnJvcjtcbiAgY29uc3QgZXJyb3JzID0gW107XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgZXJyb3JDYWxsYmFjayhtc2csIC4uLmFyZ3MpIHtcbiAgICAgIGVycm9ycy5wdXNoKG1zZyk7XG4gICAgICBlcnJvckNhbGxiYWNrKG1zZywgLi4uYXJncyk7XG4gICAgfSxcbiAgICB0cmFuc2Zvcm1GZWVkYmFja1ZhcnlpbmdzLFxuICAgIHRyYW5zZm9ybUZlZWRiYWNrTW9kZSxcbiAgICBjYWxsYmFjayxcbiAgICBlcnJvcnMsXG4gIH07XG5cbiAge1xuICAgIGxldCBhdHRyaWJMb2NhdGlvbnMgPSB7fTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRfYXR0cmlicykpIHtcbiAgICAgIG9wdF9hdHRyaWJzLmZvckVhY2goZnVuY3Rpb24oYXR0cmliLCAgbmR4KSB7XG4gICAgICAgIGF0dHJpYkxvY2F0aW9uc1thdHRyaWJdID0gb3B0X2xvY2F0aW9ucyA/IG9wdF9sb2NhdGlvbnNbbmR4XSA6IG5keDtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhdHRyaWJMb2NhdGlvbnMgPSBvcHRfYXR0cmlicyB8fCB7fTtcbiAgICB9XG4gICAgb3B0aW9ucy5hdHRyaWJMb2NhdGlvbnMgPSBhdHRyaWJMb2NhdGlvbnM7XG4gIH1cblxuICByZXR1cm4gb3B0aW9ucztcbn1cblxuY29uc3QgZGVmYXVsdFNoYWRlclR5cGUgPSBbXG4gIFwiVkVSVEVYX1NIQURFUlwiLFxuICBcIkZSQUdNRU5UX1NIQURFUlwiLFxuXTtcblxuZnVuY3Rpb24gZ2V0U2hhZGVyVHlwZUZyb21TY3JpcHRUeXBlKGdsLCBzY3JpcHRUeXBlKSB7XG4gIGlmIChzY3JpcHRUeXBlLmluZGV4T2YoXCJmcmFnXCIpID49IDApIHtcbiAgICByZXR1cm4gRlJBR01FTlRfU0hBREVSO1xuICB9IGVsc2UgaWYgKHNjcmlwdFR5cGUuaW5kZXhPZihcInZlcnRcIikgPj0gMCkge1xuICAgIHJldHVybiBWRVJURVhfU0hBREVSO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2dyYW1BbmRTaGFkZXJzKGdsLCBwcm9ncmFtLCBub3RUaGVzZSkge1xuICBjb25zdCBzaGFkZXJzID0gZ2wuZ2V0QXR0YWNoZWRTaGFkZXJzKHByb2dyYW0pO1xuICBmb3IgKGNvbnN0IHNoYWRlciBvZiBzaGFkZXJzKSB7XG4gICAgaWYgKG5vdFRoZXNlLmhhcyhzaGFkZXIpKSB7XG4gICAgICBnbC5kZWxldGVTaGFkZXIoc2hhZGVyKTtcbiAgICB9XG4gIH1cbiAgZ2wuZGVsZXRlUHJvZ3JhbShwcm9ncmFtKTtcbn1cblxuY29uc3Qgd2FpdCA9IChtcyA9IDApID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9ncmFtTm9DaGVjayhnbCwgc2hhZGVycywgcHJvZ3JhbU9wdGlvbnMpIHtcbiAgY29uc3QgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcbiAgY29uc3Qge1xuICAgIGF0dHJpYkxvY2F0aW9ucyxcbiAgICB0cmFuc2Zvcm1GZWVkYmFja1ZhcnlpbmdzLFxuICAgIHRyYW5zZm9ybUZlZWRiYWNrTW9kZSxcbiAgfSA9IGdldFByb2dyYW1PcHRpb25zKHByb2dyYW1PcHRpb25zKTtcblxuICBmb3IgKGxldCBuZHggPSAwOyBuZHggPCBzaGFkZXJzLmxlbmd0aDsgKytuZHgpIHtcbiAgICBsZXQgc2hhZGVyID0gc2hhZGVyc1tuZHhdO1xuICAgIGlmICh0eXBlb2Ygc2hhZGVyID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgZWxlbSA9IGdldEVsZW1lbnRCeUlkKHNoYWRlcik7XG4gICAgICBjb25zdCBzcmMgPSBlbGVtID8gZWxlbS50ZXh0IDogc2hhZGVyO1xuICAgICAgbGV0IHR5cGUgPSBnbFtkZWZhdWx0U2hhZGVyVHlwZVtuZHhdXTtcbiAgICAgIGlmIChlbGVtICYmIGVsZW0udHlwZSkge1xuICAgICAgICB0eXBlID0gZ2V0U2hhZGVyVHlwZUZyb21TY3JpcHRUeXBlKGdsLCBlbGVtLnR5cGUpIHx8IHR5cGU7XG4gICAgICB9XG4gICAgICBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIodHlwZSk7XG4gICAgICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBwcmVwU2hhZGVyU291cmNlKHNyYykuc2hhZGVyU291cmNlKTtcbiAgICAgIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcbiAgICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBzaGFkZXIpO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5lbnRyaWVzKGF0dHJpYkxvY2F0aW9ucykuZm9yRWFjaCgoW2F0dHJpYiwgbG9jXSkgPT4gZ2wuYmluZEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIGxvYywgYXR0cmliKSk7XG5cbiAge1xuICAgIGxldCB2YXJ5aW5ncyA9IHRyYW5zZm9ybUZlZWRiYWNrVmFyeWluZ3M7XG4gICAgaWYgKHZhcnlpbmdzKSB7XG4gICAgICBpZiAodmFyeWluZ3MuYXR0cmlicykge1xuICAgICAgICB2YXJ5aW5ncyA9IHZhcnlpbmdzLmF0dHJpYnM7XG4gICAgICB9XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFyeWluZ3MpKSB7XG4gICAgICAgIHZhcnlpbmdzID0gT2JqZWN0LmtleXModmFyeWluZ3MpO1xuICAgICAgfVxuICAgICAgZ2wudHJhbnNmb3JtRmVlZGJhY2tWYXJ5aW5ncyhwcm9ncmFtLCB2YXJ5aW5ncywgdHJhbnNmb3JtRmVlZGJhY2tNb2RlIHx8IFNFUEFSQVRFX0FUVFJJQlMpO1xuICAgIH1cbiAgfVxuXG4gIGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuICByZXR1cm4gcHJvZ3JhbTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcHJvZ3JhbSwgYXR0YWNoZXMgKGFuZC9vciBjb21waWxlcykgc2hhZGVycywgYmluZHMgYXR0cmliIGxvY2F0aW9ucywgbGlua3MgdGhlXG4gKiBwcm9ncmFtLlxuICpcbiAqIE5PVEU6IFRoZXJlIGFyZSA0IHNpZ25hdHVyZXMgZm9yIHRoaXMgZnVuY3Rpb25cbiAqXG4gKiAgICAgdHdnbC5jcmVhdGVQcm9ncmFtKGdsLCBbdnMsIGZzXSwgb3B0aW9ucyk7XG4gKiAgICAgdHdnbC5jcmVhdGVQcm9ncmFtKGdsLCBbdnMsIGZzXSwgb3B0X2VyckZ1bmMpO1xuICogICAgIHR3Z2wuY3JlYXRlUHJvZ3JhbShnbCwgW3ZzLCBmc10sIG9wdF9hdHRyaWJzLCBvcHRfZXJyRnVuYyk7XG4gKiAgICAgdHdnbC5jcmVhdGVQcm9ncmFtKGdsLCBbdnMsIGZzXSwgb3B0X2F0dHJpYnMsIG9wdF9sb2NhdGlvbnMsIG9wdF9lcnJGdW5jKTtcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dCB0byB1c2UuXG4gKiBAcGFyYW0ge1dlYkdMU2hhZGVyW118c3RyaW5nW119IHNoYWRlcnMgVGhlIHNoYWRlcnMgdG8gYXR0YWNoLCBvciBlbGVtZW50IGlkcyBmb3IgdGhlaXIgc291cmNlLCBvciBzdHJpbmdzIHRoYXQgY29udGFpbiB0aGVpciBzb3VyY2VcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuUHJvZ3JhbU9wdGlvbnN8c3RyaW5nW118bW9kdWxlOnR3Z2wuRXJyb3JDYWxsYmFja30gW29wdF9hdHRyaWJzXSBPcHRpb25zIGZvciB0aGUgcHJvZ3JhbSBvciBhbiBhcnJheSBvZiBhdHRyaWJzIG5hbWVzIG9yIGFuIGVycm9yIGNhbGxiYWNrLiBMb2NhdGlvbnMgd2lsbCBiZSBhc3NpZ25lZCBieSBpbmRleCBpZiBub3QgcGFzc2VkIGluXG4gKiBAcGFyYW0ge251bWJlcltdfG1vZHVsZTp0d2dsLkVycm9yQ2FsbGJhY2t9IFtvcHRfbG9jYXRpb25zXSBUaGUgbG9jYXRpb25zIGZvciB0aGUuIEEgcGFyYWxsZWwgYXJyYXkgdG8gb3B0X2F0dHJpYnMgbGV0dGluZyB5b3UgYXNzaWduIGxvY2F0aW9ucyBvciBhbiBlcnJvciBjYWxsYmFjay5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuRXJyb3JDYWxsYmFja30gW29wdF9lcnJvckNhbGxiYWNrXSBjYWxsYmFjayBmb3IgZXJyb3JzLiBCeSBkZWZhdWx0IGl0IGp1c3QgcHJpbnRzIGFuIGVycm9yIHRvIHRoZSBjb25zb2xlXG4gKiAgICAgICAgb24gZXJyb3IuIElmIHlvdSB3YW50IHNvbWV0aGluZyBlbHNlIHBhc3MgYW4gY2FsbGJhY2suIEl0J3MgcGFzc2VkIGFuIGVycm9yIG1lc3NhZ2UuXG4gKiBAcmV0dXJuIHtXZWJHTFByb2dyYW0/fSB0aGUgY3JlYXRlZCBwcm9ncmFtIG9yIG51bGwgaWYgZXJyb3Igb2YgYSBjYWxsYmFjayB3YXMgcHJvdmlkZWQuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJvZ3JhbXNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbShcbiAgICBnbCwgc2hhZGVycywgb3B0X2F0dHJpYnMsIG9wdF9sb2NhdGlvbnMsIG9wdF9lcnJvckNhbGxiYWNrKSB7XG4gIC8vIFRoaXMgY29kZSBpcyByZWFsbHkgY29udm9sdXRlZCwgYmVjYXVzZSBpdCBtYXkgb3IgbWF5IG5vdCBiZSBhc3luY1xuICAvLyBNYXliZSBpdCB3b3VsZCBiZSBiZXR0ZXIgdG8gaGF2ZSBhIHNlcGFyYXRlIGZ1bmN0aW9uXG4gIGNvbnN0IHByb2dPcHRpb25zID0gZ2V0UHJvZ3JhbU9wdGlvbnMob3B0X2F0dHJpYnMsIG9wdF9sb2NhdGlvbnMsIG9wdF9lcnJvckNhbGxiYWNrKTtcbiAgY29uc3Qgc2hhZGVyU2V0ID0gbmV3IFNldChzaGFkZXJzKTtcbiAgY29uc3QgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW1Ob0NoZWNrKGdsLCBzaGFkZXJzLCBwcm9nT3B0aW9ucyk7XG5cbiAgZnVuY3Rpb24gaGFzRXJyb3JzKGdsLCBwcm9ncmFtKSB7XG4gICAgY29uc3QgZXJyb3JzID0gZ2V0UHJvZ3JhbUVycm9ycyhnbCwgcHJvZ3JhbSwgcHJvZ09wdGlvbnMuZXJyb3JDYWxsYmFjayk7XG4gICAgaWYgKGVycm9ycykge1xuICAgICAgZGVsZXRlUHJvZ3JhbUFuZFNoYWRlcnMoZ2wsIHByb2dyYW0sIHNoYWRlclNldCk7XG4gICAgfVxuICAgIHJldHVybiBlcnJvcnM7XG4gIH1cblxuICBpZiAocHJvZ09wdGlvbnMuY2FsbGJhY2spIHtcbiAgICB3YWl0Rm9yUHJvZ3JhbUxpbmtDb21wbGV0aW9uQXN5bmMoZ2wsIHByb2dyYW0pLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgZXJyb3JzID0gaGFzRXJyb3JzKGdsLCBwcm9ncmFtKTtcbiAgICAgIHByb2dPcHRpb25zLmNhbGxiYWNrKGVycm9ycywgZXJyb3JzID8gdW5kZWZpbmVkIDogcHJvZ3JhbSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiBoYXNFcnJvcnMoZ2wsIHByb2dyYW0pID8gdW5kZWZpbmVkIDogcHJvZ3JhbTtcbn1cblxuLyoqXG4gKiBUaGlzIG9ubHkgd29ya3MgYmVjYXVzZSB0aGUgZnVuY3Rpb25zIGl0IHdyYXBzIHRoZSBmaXJzdCAyIGFyZ3VtZW50c1xuICogYXJlIGdsIGFuZCBhbnksIGZvbGxvd2VkIGJ5IHRoaW5ncyB0aGF0IGJlY29tZSBwcm9ncmFtT3B0aW9uc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gd3JhcENhbGxiYWNrRm5Ub0FzeW5jRm4oZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGdsLCBhcmcxLCAuLi5hcmdzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHByb2dyYW1PcHRpb25zID0gZ2V0UHJvZ3JhbU9wdGlvbnMoLi4uYXJncyk7XG4gICAgICBwcm9ncmFtT3B0aW9ucy5jYWxsYmFjayA9IChlcnIsIHByb2dyYW0pID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUocHJvZ3JhbSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBmbihnbCwgYXJnMSwgcHJvZ3JhbU9wdGlvbnMpO1xuICAgIH0pO1xuICB9O1xufVxuXG4vKipcbiAqIFNhbWUgYXMgY3JlYXRlUHJvZ3JhbSBidXQgcmV0dXJucyBhIHByb21pc2VcbiAqXG4gKiBOT1RFOiBUaGVyZSBhcmUgNCBzaWduYXR1cmVzIGZvciB0aGlzIGZ1bmN0aW9uXG4gKlxuICogICAgIHR3Z2wuY3JlYXRlUHJvZ3JhbUFzeW5jKGdsLCBbdnMsIGZzXSwgb3B0aW9ucyk7XG4gKiAgICAgdHdnbC5jcmVhdGVQcm9ncmFtQXN5bmMoZ2wsIFt2cywgZnNdLCBvcHRfZXJyRnVuYyk7XG4gKiAgICAgdHdnbC5jcmVhdGVQcm9ncmFtQXN5bmMoZ2wsIFt2cywgZnNdLCBvcHRfYXR0cmlicywgb3B0X2VyckZ1bmMpO1xuICogICAgIHR3Z2wuY3JlYXRlUHJvZ3JhbUFzeW5jKGdsLCBbdnMsIGZzXSwgb3B0X2F0dHJpYnMsIG9wdF9sb2NhdGlvbnMsIG9wdF9lcnJGdW5jKTtcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0IHRvIHVzZS5cbiAqIEBwYXJhbSB7V2ViR0xTaGFkZXJbXXxzdHJpbmdbXX0gc2hhZGVycyBUaGUgc2hhZGVycyB0byBhdHRhY2gsIG9yIGVsZW1lbnQgaWRzIGZvciB0aGVpciBzb3VyY2UsIG9yIHN0cmluZ3MgdGhhdCBjb250YWluIHRoZWlyIHNvdXJjZVxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5Qcm9ncmFtT3B0aW9uc3xzdHJpbmdbXXxtb2R1bGU6dHdnbC5FcnJvckNhbGxiYWNrfSBbb3B0X2F0dHJpYnNdIE9wdGlvbnMgZm9yIHRoZSBwcm9ncmFtIG9yIGFuIGFycmF5IG9mIGF0dHJpYnMgbmFtZXMgb3IgYW4gZXJyb3IgY2FsbGJhY2suIExvY2F0aW9ucyB3aWxsIGJlIGFzc2lnbmVkIGJ5IGluZGV4IGlmIG5vdCBwYXNzZWQgaW5cbiAqIEBwYXJhbSB7bnVtYmVyW118bW9kdWxlOnR3Z2wuRXJyb3JDYWxsYmFja30gW29wdF9sb2NhdGlvbnNdIFRoZSBsb2NhdGlvbnMgZm9yIHRoZS4gQSBwYXJhbGxlbCBhcnJheSB0byBvcHRfYXR0cmlicyBsZXR0aW5nIHlvdSBhc3NpZ24gbG9jYXRpb25zIG9yIGFuIGVycm9yIGNhbGxiYWNrLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5FcnJvckNhbGxiYWNrfSBbb3B0X2Vycm9yQ2FsbGJhY2tdIGNhbGxiYWNrIGZvciBlcnJvcnMuIEJ5IGRlZmF1bHQgaXQganVzdCBwcmludHMgYW4gZXJyb3IgdG8gdGhlIGNvbnNvbGVcbiAqICAgICAgICBvbiBlcnJvci4gSWYgeW91IHdhbnQgc29tZXRoaW5nIGVsc2UgcGFzcyBhbiBjYWxsYmFjay4gSXQncyBwYXNzZWQgYW4gZXJyb3IgbWVzc2FnZS5cbiAqIEByZXR1cm4ge1Byb21pc2U8V2ViR0xQcm9ncmFtPn0gVGhlIGNyZWF0ZWQgcHJvZ3JhbVxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3Byb2dyYW1zXG4gKi9cbmNvbnN0IGNyZWF0ZVByb2dyYW1Bc3luYyA9IHdyYXBDYWxsYmFja0ZuVG9Bc3luY0ZuKGNyZWF0ZVByb2dyYW0pO1xuXG4vKipcbiAqIFNhbWUgYXMgY3JlYXRlUHJvZ3JhbUluZm8gYnV0IHJldHVybnMgYSBwcm9taXNlXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiAgICAgICAgdG8gdXNlLlxuICogQHBhcmFtIHtzdHJpbmdbXX0gc2hhZGVyU291cmNlcyBBcnJheSBvZiBzb3VyY2VzIGZvciB0aGVcbiAqICAgICAgICBzaGFkZXJzIG9yIGlkcy4gVGhlIGZpcnN0IGlzIGFzc3VtZWQgdG8gYmUgdGhlIHZlcnRleCBzaGFkZXIsXG4gKiAgICAgICAgdGhlIHNlY29uZCB0aGUgZnJhZ21lbnQgc2hhZGVyLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5Qcm9ncmFtT3B0aW9uc3xzdHJpbmdbXXxtb2R1bGU6dHdnbC5FcnJvckNhbGxiYWNrfSBbb3B0X2F0dHJpYnNdIE9wdGlvbnMgZm9yIHRoZSBwcm9ncmFtIG9yIGFuIGFycmF5IG9mIGF0dHJpYnMgbmFtZXMgb3IgYW4gZXJyb3IgY2FsbGJhY2suIExvY2F0aW9ucyB3aWxsIGJlIGFzc2lnbmVkIGJ5IGluZGV4IGlmIG5vdCBwYXNzZWQgaW5cbiAqIEBwYXJhbSB7bnVtYmVyW118bW9kdWxlOnR3Z2wuRXJyb3JDYWxsYmFja30gW29wdF9sb2NhdGlvbnNdIFRoZSBsb2NhdGlvbnMgZm9yIHRoZS4gQSBwYXJhbGxlbCBhcnJheSB0byBvcHRfYXR0cmlicyBsZXR0aW5nIHlvdSBhc3NpZ24gbG9jYXRpb25zIG9yIGFuIGVycm9yIGNhbGxiYWNrLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5FcnJvckNhbGxiYWNrfSBbb3B0X2Vycm9yQ2FsbGJhY2tdIGNhbGxiYWNrIGZvciBlcnJvcnMuIEJ5IGRlZmF1bHQgaXQganVzdCBwcmludHMgYW4gZXJyb3IgdG8gdGhlIGNvbnNvbGVcbiAqICAgICAgICBvbiBlcnJvci4gSWYgeW91IHdhbnQgc29tZXRoaW5nIGVsc2UgcGFzcyBhbiBjYWxsYmFjay4gSXQncyBwYXNzZWQgYW4gZXJyb3IgbWVzc2FnZS5cbiAqIEByZXR1cm4ge1Byb21pc2U8bW9kdWxlOnR3Z2wuUHJvZ3JhbUluZm8+fSBUaGUgY3JlYXRlZCBQcm9ncmFtSW5mb1xuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3Byb2dyYW1zXG4gKi9cbmNvbnN0IGNyZWF0ZVByb2dyYW1JbmZvQXN5bmMgPSB3cmFwQ2FsbGJhY2tGblRvQXN5bmNGbihjcmVhdGVQcm9ncmFtSW5mbyk7XG5cbmFzeW5jIGZ1bmN0aW9uIHdhaXRGb3JQcm9ncmFtTGlua0NvbXBsZXRpb25Bc3luYyhnbCwgcHJvZ3JhbSkge1xuICBjb25zdCBleHQgPSBnbC5nZXRFeHRlbnNpb24oJ0tIUl9wYXJhbGxlbF9zaGFkZXJfY29tcGlsZScpO1xuICBjb25zdCBjaGVja0ZuID0gZXh0XG4gICAgICA/IChnbCwgcHJvZ3JhbSkgPT4gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBleHQuQ09NUExFVElPTl9TVEFUVVNfS0hSKVxuICAgICAgOiAoKSA9PiB0cnVlO1xuXG4gIGxldCB3YWl0VGltZSA9IDA7XG4gIGRvIHtcbiAgICBhd2FpdCB3YWl0KHdhaXRUaW1lKTsgIC8vIG11c3Qgd2FpdCBhdCBsZWFzdCBvbmNlXG4gICAgd2FpdFRpbWUgPSAxMDAwIC8gNjA7XG4gIH0gd2hpbGUgKCFjaGVja0ZuKGdsLCBwcm9ncmFtKSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHdhaXRGb3JBbGxQcm9ncmFtc0xpbmtDb21wbGV0aW9uQXN5bmMoZ2wsIHByb2dyYW1zKSB7XG4gIGZvciAoY29uc3QgcHJvZ3JhbSBvZiBPYmplY3QudmFsdWVzKHByb2dyYW1zKSkge1xuICAgIGF3YWl0IHdhaXRGb3JQcm9ncmFtTGlua0NvbXBsZXRpb25Bc3luYyhnbCwgcHJvZ3JhbSk7XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayBhIHByb2dyYW0ncyBsaW5rIHN0YXR1c1xuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQgdG8gdXNlLlxuICogQHBhcmFtIHtXZWJHTFByb2dyYW19IHByb2dyYW0gUHJvZ3JhbSB0byBjaGVja1xuICogQHBhcmFtIHtFcnJvckNhbGxiYWNrfSBbZXJyRm5dIGZ1bmMgZm9yIGVycm9yc1xuICogQHJldHVybiB7c3RyaW5nP30gZXJyb3JzIGlmIHByb2dyYW0gaXMgZmFpbGVkLCBlbHNlIHVuZGVmaW5lZFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0UHJvZ3JhbUVycm9ycyhnbCwgcHJvZ3JhbSwgZXJyRm4pIHtcbiAgZXJyRm4gPSBlcnJGbiB8fCBlcnJvcjtcbiAgLy8gQ2hlY2sgdGhlIGxpbmsgc3RhdHVzXG4gIGNvbnN0IGxpbmtlZCA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgTElOS19TVEFUVVMpO1xuICBpZiAoIWxpbmtlZCkge1xuICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nIHdpdGggdGhlIGxpbmtcbiAgICBjb25zdCBsYXN0RXJyb3IgPSBnbC5nZXRQcm9ncmFtSW5mb0xvZyhwcm9ncmFtKTtcbiAgICBlcnJGbihgRXJyb3IgaW4gcHJvZ3JhbSBsaW5raW5nOiAke2xhc3RFcnJvcn1gKTtcbiAgICAvLyBwcmludCBhbnkgZXJyb3JzIGZyb20gdGhlc2Ugc2hhZGVyc1xuICAgIGNvbnN0IHNoYWRlcnMgPSBnbC5nZXRBdHRhY2hlZFNoYWRlcnMocHJvZ3JhbSk7XG4gICAgY29uc3QgZXJyb3JzID0gc2hhZGVycy5tYXAoc2hhZGVyID0+IGNoZWNrU2hhZGVyU3RhdHVzKGdsLCBnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5TSEFERVJfVFlQRSksIHNoYWRlciwgZXJyRm4pKTtcbiAgICByZXR1cm4gYCR7bGFzdEVycm9yfVxcbiR7ZXJyb3JzLmZpbHRlcihfID0+IF8pLmpvaW4oJ1xcbicpfWA7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcHJvZ3JhbSBmcm9tIDIgc2NyaXB0IHRhZ3MuXG4gKlxuICogTk9URTogVGhlcmUgYXJlIDQgc2lnbmF0dXJlcyBmb3IgdGhpcyBmdW5jdGlvblxuICpcbiAqICAgICB0d2dsLmNyZWF0ZVByb2dyYW1Gcm9tU2NyaXB0cyhnbCwgW3ZzLCBmc10sIG9wdF9vcHRpb25zKTtcbiAqICAgICB0d2dsLmNyZWF0ZVByb2dyYW1Gcm9tU2NyaXB0cyhnbCwgW3ZzLCBmc10sIG9wdF9lcnJGdW5jKTtcbiAqICAgICB0d2dsLmNyZWF0ZVByb2dyYW1Gcm9tU2NyaXB0cyhnbCwgW3ZzLCBmc10sIG9wdF9hdHRyaWJzLCBvcHRfZXJyRnVuYyk7XG4gKiAgICAgdHdnbC5jcmVhdGVQcm9ncmFtRnJvbVNjcmlwdHMoZ2wsIFt2cywgZnNdLCBvcHRfYXR0cmlicywgb3B0X2xvY2F0aW9ucywgb3B0X2VyckZ1bmMpO1xuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiAgICAgICAgdG8gdXNlLlxuICogQHBhcmFtIHtzdHJpbmdbXX0gc2hhZGVyU2NyaXB0SWRzIEFycmF5IG9mIGlkcyBvZiB0aGUgc2NyaXB0XG4gKiAgICAgICAgdGFncyBmb3IgdGhlIHNoYWRlcnMuIFRoZSBmaXJzdCBpcyBhc3N1bWVkIHRvIGJlIHRoZVxuICogICAgICAgIHZlcnRleCBzaGFkZXIsIHRoZSBzZWNvbmQgdGhlIGZyYWdtZW50IHNoYWRlci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuUHJvZ3JhbU9wdGlvbnN8c3RyaW5nW118bW9kdWxlOnR3Z2wuRXJyb3JDYWxsYmFja30gW29wdF9hdHRyaWJzXSBPcHRpb25zIGZvciB0aGUgcHJvZ3JhbSBvciBhbiBhcnJheSBvZiBhdHRyaWJzIG5hbWVzIG9yIGFuIGVycm9yIGNhbGxiYWNrLiBMb2NhdGlvbnMgd2lsbCBiZSBhc3NpZ25lZCBieSBpbmRleCBpZiBub3QgcGFzc2VkIGluXG4gKiBAcGFyYW0ge251bWJlcltdfG1vZHVsZTp0d2dsLkVycm9yQ2FsbGJhY2t9IFtvcHRfbG9jYXRpb25zXSBUaGUgbG9jYXRpb25zIGZvciB0aGUuIEEgcGFyYWxsZWwgYXJyYXkgdG8gb3B0X2F0dHJpYnMgbGV0dGluZyB5b3UgYXNzaWduIGxvY2F0aW9ucyBvciBhbiBlcnJvciBjYWxsYmFjay5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuRXJyb3JDYWxsYmFja30gW29wdF9lcnJvckNhbGxiYWNrXSBjYWxsYmFjayBmb3IgZXJyb3JzLiBCeSBkZWZhdWx0IGl0IGp1c3QgcHJpbnRzIGFuIGVycm9yIHRvIHRoZSBjb25zb2xlXG4gKiAgICAgICAgb24gZXJyb3IuIElmIHlvdSB3YW50IHNvbWV0aGluZyBlbHNlIHBhc3MgYW4gY2FsbGJhY2suIEl0J3MgcGFzc2VkIGFuIGVycm9yIG1lc3NhZ2UuXG4gKiBAcmV0dXJuIHtXZWJHTFByb2dyYW0/fSB0aGUgY3JlYXRlZCBwcm9ncmFtIG9yIG51bGwgaWYgZXJyb3Igb3IgYSBjYWxsYmFjayB3YXMgcHJvdmlkZWQuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJvZ3JhbXNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbUZyb21TY3JpcHRzKFxuICAgIGdsLCBzaGFkZXJTY3JpcHRJZHMsIG9wdF9hdHRyaWJzLCBvcHRfbG9jYXRpb25zLCBvcHRfZXJyb3JDYWxsYmFjaykge1xuICBjb25zdCBwcm9nT3B0aW9ucyA9IGdldFByb2dyYW1PcHRpb25zKG9wdF9hdHRyaWJzLCBvcHRfbG9jYXRpb25zLCBvcHRfZXJyb3JDYWxsYmFjayk7XG4gIGNvbnN0IHNoYWRlcnMgPSBbXTtcbiAgZm9yIChjb25zdCBzY3JpcHRJZCBvZiBzaGFkZXJTY3JpcHRJZHMpIHtcbiAgICBjb25zdCBzaGFkZXJTY3JpcHQgPSBnZXRFbGVtZW50QnlJZChzY3JpcHRJZCk7XG4gICAgaWYgKCFzaGFkZXJTY3JpcHQpIHtcbiAgICAgIHJldHVybiByZXBvcnRFcnJvcihwcm9nT3B0aW9ucywgYHVua25vd24gc2NyaXB0IGVsZW1lbnQ6ICR7c2NyaXB0SWR9YCk7XG4gICAgfVxuICAgIHNoYWRlcnMucHVzaChzaGFkZXJTY3JpcHQudGV4dCk7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZVByb2dyYW0oZ2wsIHNoYWRlcnMsIHByb2dPcHRpb25zKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcHJvZ3JhbSBmcm9tIDIgc291cmNlcy5cbiAqXG4gKiBOT1RFOiBUaGVyZSBhcmUgNCBzaWduYXR1cmVzIGZvciB0aGlzIGZ1bmN0aW9uXG4gKlxuICogICAgIHR3Z2wuY3JlYXRlUHJvZ3JhbUZyb21Tb3VyY2UoZ2wsIFt2cywgZnNdLCBvcHRfb3B0aW9ucyk7XG4gKiAgICAgdHdnbC5jcmVhdGVQcm9ncmFtRnJvbVNvdXJjZShnbCwgW3ZzLCBmc10sIG9wdF9lcnJGdW5jKTtcbiAqICAgICB0d2dsLmNyZWF0ZVByb2dyYW1Gcm9tU291cmNlKGdsLCBbdnMsIGZzXSwgb3B0X2F0dHJpYnMsIG9wdF9lcnJGdW5jKTtcbiAqICAgICB0d2dsLmNyZWF0ZVByb2dyYW1Gcm9tU291cmNlKGdsLCBbdnMsIGZzXSwgb3B0X2F0dHJpYnMsIG9wdF9sb2NhdGlvbnMsIG9wdF9lcnJGdW5jKTtcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogICAgICAgIHRvIHVzZS5cbiAqIEBwYXJhbSB7c3RyaW5nW119IHNoYWRlclNvdXJjZXMgQXJyYXkgb2Ygc291cmNlcyBmb3IgdGhlXG4gKiAgICAgICAgc2hhZGVycy4gVGhlIGZpcnN0IGlzIGFzc3VtZWQgdG8gYmUgdGhlIHZlcnRleCBzaGFkZXIsXG4gKiAgICAgICAgdGhlIHNlY29uZCB0aGUgZnJhZ21lbnQgc2hhZGVyLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5Qcm9ncmFtT3B0aW9uc3xzdHJpbmdbXXxtb2R1bGU6dHdnbC5FcnJvckNhbGxiYWNrfSBbb3B0X2F0dHJpYnNdIE9wdGlvbnMgZm9yIHRoZSBwcm9ncmFtIG9yIGFuIGFycmF5IG9mIGF0dHJpYnMgbmFtZXMgb3IgYW4gZXJyb3IgY2FsbGJhY2suIExvY2F0aW9ucyB3aWxsIGJlIGFzc2lnbmVkIGJ5IGluZGV4IGlmIG5vdCBwYXNzZWQgaW5cbiAqIEBwYXJhbSB7bnVtYmVyW118bW9kdWxlOnR3Z2wuRXJyb3JDYWxsYmFja30gW29wdF9sb2NhdGlvbnNdIFRoZSBsb2NhdGlvbnMgZm9yIHRoZS4gQSBwYXJhbGxlbCBhcnJheSB0byBvcHRfYXR0cmlicyBsZXR0aW5nIHlvdSBhc3NpZ24gbG9jYXRpb25zIG9yIGFuIGVycm9yIGNhbGxiYWNrLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5FcnJvckNhbGxiYWNrfSBbb3B0X2Vycm9yQ2FsbGJhY2tdIGNhbGxiYWNrIGZvciBlcnJvcnMuIEJ5IGRlZmF1bHQgaXQganVzdCBwcmludHMgYW4gZXJyb3IgdG8gdGhlIGNvbnNvbGVcbiAqICAgICAgICBvbiBlcnJvci4gSWYgeW91IHdhbnQgc29tZXRoaW5nIGVsc2UgcGFzcyBhbiBjYWxsYmFjay4gSXQncyBwYXNzZWQgYW4gZXJyb3IgbWVzc2FnZS5cbiAqIEByZXR1cm4ge1dlYkdMUHJvZ3JhbT99IHRoZSBjcmVhdGVkIHByb2dyYW0gb3IgbnVsbCBpZiBlcnJvciBvciBhIGNhbGxiYWNrIHdhcyBwcm92aWRlZC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcm9ncmFtc1xuICovXG5mdW5jdGlvbiBjcmVhdGVQcm9ncmFtRnJvbVNvdXJjZXMoXG4gICAgZ2wsIHNoYWRlclNvdXJjZXMsIG9wdF9hdHRyaWJzLCBvcHRfbG9jYXRpb25zLCBvcHRfZXJyb3JDYWxsYmFjaykge1xuICByZXR1cm4gY3JlYXRlUHJvZ3JhbShnbCwgc2hhZGVyU291cmNlcywgb3B0X2F0dHJpYnMsIG9wdF9sb2NhdGlvbnMsIG9wdF9lcnJvckNhbGxiYWNrKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYXR0cmlidXRlL3VuaWZvcm0gaXMgYSByZXNlcnZlZC9idWlsdCBpblxuICpcbiAqIEl0IG1ha2VzIG5vIHNlbnNlIHRvIG1lIHdoeSBHTCByZXR1cm5zIHRoZXNlIGJlY2F1c2UgaXQnc1xuICogaWxsZWdhbCB0byBjYWxsIGBnbC5nZXRVbmlmb3JtTG9jYXRpb25gIGFuZCBgZ2wuZ2V0QXR0cmliTG9jYXRpb25gXG4gKiB3aXRoIG5hbWVzIHRoYXQgc3RhcnQgd2l0aCBgZ2xfYCAoYW5kIGB3ZWJnbF9gIGluIFdlYkdMKVxuICpcbiAqIEkgY2FuIG9ubHkgYXNzdW1lIHRoZXkgYXJlIHRoZXJlIGJlY2F1c2UgdGhleSBtaWdodCBjb3VudFxuICogd2hlbiBjb21wdXRpbmcgdGhlIG51bWJlciBvZiB1bmlmb3Jtcy9hdHRyaWJ1dGVzIHVzZWQgd2hlbiB5b3Ugd2FudCB0b1xuICoga25vdyBpZiB5b3UgYXJlIG5lYXIgdGhlIGxpbWl0LiBUaGF0IGRvZXNuJ3QgcmVhbGx5IG1ha2Ugc2Vuc2VcbiAqIHRvIG1lIGJ1dCB0aGUgZmFjdCB0aGF0IHRoZXNlIGdldCByZXR1cm5lZCBhcmUgaW4gdGhlIHNwZWMuXG4gKlxuICogQHBhcmFtIHtXZWJHTEFjdGl2ZUluZm99IGluZm8gQXMgcmV0dXJuZWQgZnJvbSBgZ2wuZ2V0QWN0aXZlVW5pZm9ybWAgb3JcbiAqICAgIGBnbC5nZXRBY3RpdmVBdHRyaWJgLlxuICogQHJldHVybiB7Ym9vbH0gdHJ1ZSBpZiBpdCdzIHJlc2VydmVkXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0J1aWx0SW4oaW5mbykge1xuICBjb25zdCBuYW1lID0gaW5mby5uYW1lO1xuICByZXR1cm4gbmFtZS5zdGFydHNXaXRoKFwiZ2xfXCIpIHx8IG5hbWUuc3RhcnRzV2l0aChcIndlYmdsX1wiKTtcbn1cblxuY29uc3QgdG9rZW5SRSA9IC8oXFwufFxcW3xdfFxcdyspL2c7XG5jb25zdCBpc0RpZ2l0ID0gcyA9PiBzID49ICcwJyAmJiBzIDw9ICc5JztcbmZ1bmN0aW9uIGFkZFNldHRlclRvVW5pZm9ybVRyZWUoZnVsbFBhdGgsIHNldHRlciwgbm9kZSwgdW5pZm9ybVNldHRlcnMpIHtcbiAgY29uc3QgdG9rZW5zID0gZnVsbFBhdGguc3BsaXQodG9rZW5SRSkuZmlsdGVyKHMgPT4gcyAhPT0gJycpO1xuICBsZXQgdG9rZW5OZHggPSAwO1xuICBsZXQgcGF0aCA9ICcnO1xuXG4gIGZvciAoOzspIHtcbiAgICBjb25zdCB0b2tlbiA9IHRva2Vuc1t0b2tlbk5keCsrXTsgIC8vIGhhcyB0byBiZSBuYW1lIG9yIG51bWJlclxuICAgIHBhdGggKz0gdG9rZW47XG4gICAgY29uc3QgaXNBcnJheUluZGV4ID0gaXNEaWdpdCh0b2tlblswXSk7XG4gICAgY29uc3QgYWNjZXNzb3IgPSBpc0FycmF5SW5kZXhcbiAgICAgICAgPyBwYXJzZUludCh0b2tlbilcbiAgICAgICAgOiB0b2tlbjtcbiAgICBpZiAoaXNBcnJheUluZGV4KSB7XG4gICAgICBwYXRoICs9IHRva2Vuc1t0b2tlbk5keCsrXTsgIC8vIHNraXAgJ10nXG4gICAgfVxuICAgIGNvbnN0IGlzTGFzdFRva2VuID0gdG9rZW5OZHggPT09IHRva2Vucy5sZW5ndGg7XG4gICAgaWYgKGlzTGFzdFRva2VuKSB7XG4gICAgICBub2RlW2FjY2Vzc29yXSA9IHNldHRlcjtcbiAgICAgIGJyZWFrO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b2tlbiA9IHRva2Vuc1t0b2tlbk5keCsrXTsgIC8vIGhhcyB0byBiZSAuIG9yIFtcbiAgICAgIGNvbnN0IGlzQXJyYXkgPSB0b2tlbiA9PT0gJ1snO1xuICAgICAgY29uc3QgY2hpbGQgPSBub2RlW2FjY2Vzc29yXSB8fCAoaXNBcnJheSA/IFtdIDoge30pO1xuICAgICAgbm9kZVthY2Nlc3Nvcl0gPSBjaGlsZDtcbiAgICAgIG5vZGUgPSBjaGlsZDtcbiAgICAgIHVuaWZvcm1TZXR0ZXJzW3BhdGhdID0gdW5pZm9ybVNldHRlcnNbcGF0aF0gfHwgZnVuY3Rpb24obm9kZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICBzZXRVbmlmb3JtVHJlZShub2RlLCB2YWx1ZSk7XG4gICAgICAgIH07XG4gICAgICB9KGNoaWxkKTtcbiAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBzZXR0ZXIgZnVuY3Rpb25zIGZvciBhbGwgdW5pZm9ybXMgb2YgYSBzaGFkZXJcbiAqIHByb2dyYW0uXG4gKlxuICogQHNlZSB7QGxpbmsgbW9kdWxlOnR3Z2wuc2V0VW5pZm9ybXN9XG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQgdG8gdXNlLlxuICogQHBhcmFtIHtXZWJHTFByb2dyYW19IHByb2dyYW0gdGhlIHByb2dyYW0gdG8gY3JlYXRlIHNldHRlcnMgZm9yLlxuICogQHJldHVybnMge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj59IGFuIG9iamVjdCB3aXRoIGEgc2V0dGVyIGJ5IG5hbWUgZm9yIGVhY2ggdW5pZm9ybVxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3Byb2dyYW1zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVVuaWZvcm1TZXR0ZXJzKGdsLCBwcm9ncmFtKSB7XG4gIGxldCB0ZXh0dXJlVW5pdCA9IDA7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBzZXR0ZXIgZm9yIGEgdW5pZm9ybSBvZiB0aGUgZ2l2ZW4gcHJvZ3JhbSB3aXRoIGl0J3NcbiAgICogbG9jYXRpb24gZW1iZWRkZWQgaW4gdGhlIHNldHRlci5cbiAgICogQHBhcmFtIHtXZWJHTFByb2dyYW19IHByb2dyYW1cbiAgICogQHBhcmFtIHtXZWJHTFVuaWZvcm1JbmZvfSB1bmlmb3JtSW5mb1xuICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259IHRoZSBjcmVhdGVkIHNldHRlci5cbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaWZvcm1TZXR0ZXIocHJvZ3JhbSwgdW5pZm9ybUluZm8sIGxvY2F0aW9uKSB7XG4gICAgY29uc3QgaXNBcnJheSA9IHVuaWZvcm1JbmZvLm5hbWUuZW5kc1dpdGgoXCJbMF1cIik7XG4gICAgY29uc3QgdHlwZSA9IHVuaWZvcm1JbmZvLnR5cGU7XG4gICAgY29uc3QgdHlwZUluZm8gPSB0eXBlTWFwW3R5cGVdO1xuICAgIGlmICghdHlwZUluZm8pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdW5rbm93biB0eXBlOiAweCR7dHlwZS50b1N0cmluZygxNil9YCk7IC8vIHdlIHNob3VsZCBuZXZlciBnZXQgaGVyZS5cbiAgICB9XG4gICAgbGV0IHNldHRlcjtcbiAgICBpZiAodHlwZUluZm8uYmluZFBvaW50KSB7XG4gICAgICAvLyBpdCdzIGEgc2FtcGxlclxuICAgICAgY29uc3QgdW5pdCA9IHRleHR1cmVVbml0O1xuICAgICAgdGV4dHVyZVVuaXQgKz0gdW5pZm9ybUluZm8uc2l6ZTtcbiAgICAgIGlmIChpc0FycmF5KSB7XG4gICAgICAgIHNldHRlciA9IHR5cGVJbmZvLmFycmF5U2V0dGVyKGdsLCB0eXBlLCB1bml0LCBsb2NhdGlvbiwgdW5pZm9ybUluZm8uc2l6ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXR0ZXIgPSB0eXBlSW5mby5zZXR0ZXIoZ2wsIHR5cGUsIHVuaXQsIGxvY2F0aW9uLCB1bmlmb3JtSW5mby5zaXplKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVJbmZvLmFycmF5U2V0dGVyICYmIGlzQXJyYXkpIHtcbiAgICAgICAgc2V0dGVyID0gdHlwZUluZm8uYXJyYXlTZXR0ZXIoZ2wsIGxvY2F0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldHRlciA9IHR5cGVJbmZvLnNldHRlcihnbCwgbG9jYXRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgICBzZXR0ZXIubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICByZXR1cm4gc2V0dGVyO1xuICB9XG5cbiAgY29uc3QgdW5pZm9ybVNldHRlcnMgPSB7fTtcbiAgY29uc3QgdW5pZm9ybVRyZWUgPSB7fTtcbiAgY29uc3QgbnVtVW5pZm9ybXMgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIEFDVElWRV9VTklGT1JNUyk7XG5cbiAgZm9yIChsZXQgaWkgPSAwOyBpaSA8IG51bVVuaWZvcm1zOyArK2lpKSB7XG4gICAgY29uc3QgdW5pZm9ybUluZm8gPSBnbC5nZXRBY3RpdmVVbmlmb3JtKHByb2dyYW0sIGlpKTtcbiAgICBpZiAoaXNCdWlsdEluKHVuaWZvcm1JbmZvKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGxldCBuYW1lID0gdW5pZm9ybUluZm8ubmFtZTtcbiAgICAvLyByZW1vdmUgdGhlIGFycmF5IHN1ZmZpeC5cbiAgICBpZiAobmFtZS5lbmRzV2l0aChcIlswXVwiKSkge1xuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyKDAsIG5hbWUubGVuZ3RoIC0gMyk7XG4gICAgfVxuICAgIGNvbnN0IGxvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHVuaWZvcm1JbmZvLm5hbWUpO1xuICAgIC8vIHRoZSB1bmlmb3JtIHdpbGwgaGF2ZSBubyBsb2NhdGlvbiBpZiBpdCdzIGluIGEgdW5pZm9ybSBibG9ja1xuICAgIGlmIChsb2NhdGlvbikge1xuICAgICAgY29uc3Qgc2V0dGVyID0gY3JlYXRlVW5pZm9ybVNldHRlcihwcm9ncmFtLCB1bmlmb3JtSW5mbywgbG9jYXRpb24pO1xuICAgICAgdW5pZm9ybVNldHRlcnNbbmFtZV0gPSBzZXR0ZXI7XG4gICAgICBhZGRTZXR0ZXJUb1VuaWZvcm1UcmVlKG5hbWUsIHNldHRlciwgdW5pZm9ybVRyZWUsIHVuaWZvcm1TZXR0ZXJzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZm9ybVNldHRlcnM7XG59XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gVHJhbnNmb3JtRmVlZGJhY2tJbmZvXG4gKiBAcHJvcGVydHkge251bWJlcn0gaW5kZXggaW5kZXggb2YgdHJhbnNmb3JtIGZlZWRiYWNrXG4gKiBAcHJvcGVydHkge251bWJlcn0gdHlwZSBHTCB0eXBlXG4gKiBAcHJvcGVydHkge251bWJlcn0gc2l6ZSAxIC0gNFxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuLyoqXG4gKiBDcmVhdGUgVHJhbnNmb3JtRmVlZGJhY2tJbmZvIGZvciBwYXNzaW5nIHRvIGJpbmRUcmFuc2Zvcm1GZWVkYmFja0luZm8uXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dCB0byB1c2UuXG4gKiBAcGFyYW0ge1dlYkdMUHJvZ3JhbX0gcHJvZ3JhbSBhbiBleGlzdGluZyBXZWJHTFByb2dyYW0uXG4gKiBAcmV0dXJuIHtPYmplY3Q8c3RyaW5nLCBtb2R1bGU6dHdnbC5UcmFuc2Zvcm1GZWVkYmFja0luZm8+fVxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVRyYW5zZm9ybUZlZWRiYWNrSW5mbyhnbCwgcHJvZ3JhbSkge1xuICBjb25zdCBpbmZvID0ge307XG4gIGNvbnN0IG51bVZhcnlpbmdzID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBUUkFOU0ZPUk1fRkVFREJBQ0tfVkFSWUlOR1MpO1xuICBmb3IgKGxldCBpaSA9IDA7IGlpIDwgbnVtVmFyeWluZ3M7ICsraWkpIHtcbiAgICBjb25zdCB2YXJ5aW5nID0gZ2wuZ2V0VHJhbnNmb3JtRmVlZGJhY2tWYXJ5aW5nKHByb2dyYW0sIGlpKTtcbiAgICBpbmZvW3ZhcnlpbmcubmFtZV0gPSB7XG4gICAgICBpbmRleDogaWksXG4gICAgICB0eXBlOiB2YXJ5aW5nLnR5cGUsXG4gICAgICBzaXplOiB2YXJ5aW5nLnNpemUsXG4gICAgfTtcbiAgfVxuICByZXR1cm4gaW5mbztcbn1cblxuLyoqXG4gKiBCaW5kcyBidWZmZXJzIGZvciB0cmFuc2Zvcm0gZmVlZGJhY2suXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQgdG8gdXNlLlxuICogQHBhcmFtIHsobW9kdWxlOnR3Z2wuUHJvZ3JhbUluZm98T2JqZWN0PHN0cmluZywgbW9kdWxlOnR3Z2wuVHJhbnNmb3JtRmVlZGJhY2tJbmZvPil9IHRyYW5zZm9ybUZlZWRiYWNrSW5mbyBBIFByb2dyYW1JbmZvIG9yIFRyYW5zZm9ybUZlZWRiYWNrSW5mby5cbiAqIEBwYXJhbSB7KG1vZHVsZTp0d2dsLkJ1ZmZlckluZm98T2JqZWN0PHN0cmluZywgbW9kdWxlOnR3Z2wuQXR0cmliSW5mbz4pfSBbYnVmZmVySW5mb10gQSBCdWZmZXJJbmZvIG9yIHNldCBvZiBBdHRyaWJJbmZvcy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5mdW5jdGlvbiBiaW5kVHJhbnNmb3JtRmVlZGJhY2tJbmZvKGdsLCB0cmFuc2Zvcm1GZWVkYmFja0luZm8sIGJ1ZmZlckluZm8pIHtcbiAgaWYgKHRyYW5zZm9ybUZlZWRiYWNrSW5mby50cmFuc2Zvcm1GZWVkYmFja0luZm8pIHtcbiAgICB0cmFuc2Zvcm1GZWVkYmFja0luZm8gPSB0cmFuc2Zvcm1GZWVkYmFja0luZm8udHJhbnNmb3JtRmVlZGJhY2tJbmZvO1xuICB9XG4gIGlmIChidWZmZXJJbmZvLmF0dHJpYnMpIHtcbiAgICBidWZmZXJJbmZvID0gYnVmZmVySW5mby5hdHRyaWJzO1xuICB9XG4gIGZvciAoY29uc3QgbmFtZSBpbiBidWZmZXJJbmZvKSB7XG4gICAgY29uc3QgdmFyeWluZyA9IHRyYW5zZm9ybUZlZWRiYWNrSW5mb1tuYW1lXTtcbiAgICBpZiAodmFyeWluZykge1xuICAgICAgY29uc3QgYnVmID0gYnVmZmVySW5mb1tuYW1lXTtcbiAgICAgIGlmIChidWYub2Zmc2V0KSB7XG4gICAgICAgIGdsLmJpbmRCdWZmZXJSYW5nZShUUkFOU0ZPUk1fRkVFREJBQ0tfQlVGRkVSLCB2YXJ5aW5nLmluZGV4LCBidWYuYnVmZmVyLCBidWYub2Zmc2V0LCBidWYuc2l6ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnbC5iaW5kQnVmZmVyQmFzZShUUkFOU0ZPUk1fRkVFREJBQ0tfQlVGRkVSLCB2YXJ5aW5nLmluZGV4LCBidWYuYnVmZmVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdHJhbnNmb3JtIGZlZWRiYWNrIGFuZCBzZXRzIHRoZSBidWZmZXJzXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dCB0byB1c2UuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlByb2dyYW1JbmZvfSBwcm9ncmFtSW5mbyBBIFByb2dyYW1JbmZvIGFzIHJldHVybmVkIGZyb20ge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZVByb2dyYW1JbmZvfVxuICogQHBhcmFtIHsobW9kdWxlOnR3Z2wuQnVmZmVySW5mb3xPYmplY3Q8c3RyaW5nLCBtb2R1bGU6dHdnbC5BdHRyaWJJbmZvPil9IFtidWZmZXJJbmZvXSBBIEJ1ZmZlckluZm8gb3Igc2V0IG9mIEF0dHJpYkluZm9zLlxuICogQHJldHVybiB7V2ViR0xUcmFuc2Zvcm1GZWVkYmFja30gdGhlIGNyZWF0ZWQgdHJhbnNmb3JtIGZlZWRiYWNrXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuZnVuY3Rpb24gY3JlYXRlVHJhbnNmb3JtRmVlZGJhY2soZ2wsIHByb2dyYW1JbmZvLCBidWZmZXJJbmZvKSB7XG4gIGNvbnN0IHRmID0gZ2wuY3JlYXRlVHJhbnNmb3JtRmVlZGJhY2soKTtcbiAgZ2wuYmluZFRyYW5zZm9ybUZlZWRiYWNrKFRSQU5TRk9STV9GRUVEQkFDSywgdGYpO1xuICBnbC51c2VQcm9ncmFtKHByb2dyYW1JbmZvLnByb2dyYW0pO1xuICBiaW5kVHJhbnNmb3JtRmVlZGJhY2tJbmZvKGdsLCBwcm9ncmFtSW5mbywgYnVmZmVySW5mbyk7XG4gIGdsLmJpbmRUcmFuc2Zvcm1GZWVkYmFjayhUUkFOU0ZPUk1fRkVFREJBQ0ssIG51bGwpO1xuICByZXR1cm4gdGY7XG59XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gVW5pZm9ybURhdGFcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB1bmlmb3JtXG4gKiBAcHJvcGVydHkge251bWJlcn0gdHlwZSBUaGUgV2ViR0wgdHlwZSBlbnVtIGZvciB0aGlzIHVuaWZvcm1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzaXplIFRoZSBudW1iZXIgb2YgZWxlbWVudHMgZm9yIHRoaXMgdW5pZm9ybVxuICogQHByb3BlcnR5IHtudW1iZXJ9IGJsb2NrTmR4IFRoZSBibG9jayBpbmRleCB0aGlzIHVuaWZvcm0gYXBwZWFycyBpblxuICogQHByb3BlcnR5IHtudW1iZXJ9IG9mZnNldCBUaGUgYnl0ZSBvZmZzZXQgaW4gdGhlIGJsb2NrIGZvciB0aGlzIHVuaWZvcm0ncyB2YWx1ZVxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuLyoqXG4gKiBUaGUgc3BlY2lmaWNhdGlvbiBmb3Igb25lIFVuaWZvcm1CbG9ja09iamVjdFxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEJsb2NrU3BlY1xuICogQHByb3BlcnR5IHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgYmxvY2suXG4gKiBAcHJvcGVydHkge251bWJlcn0gc2l6ZSBUaGUgc2l6ZSBpbiBieXRlcyBuZWVkZWQgZm9yIHRoZSBibG9ja1xuICogQHByb3BlcnR5IHtudW1iZXJbXX0gdW5pZm9ybUluZGljZXMgVGhlIGluZGljZXMgb2YgdGhlIHVuaWZvcm1zIHVzZWQgYnkgdGhlIGJsb2NrLiBUaGVzZSBpbmRpY2VzXG4gKiAgICBjb3JyZXNwb25kIHRvIGVudHJpZXMgaW4gYSBVbmlmb3JtRGF0YSBhcnJheSBpbiB0aGUge0BsaW5rIG1vZHVsZTp0d2dsLlVuaWZvcm1CbG9ja1NwZWN9LlxuICogQHByb3BlcnR5IHtib29sfSB1c2VkQnlWZXJ0ZXhTaGFkZXIgU2VsZiBleHBsYW5hdG9yeVxuICogQHByb3BlcnR5IHtib29sfSB1c2VkQnlGcmFnbWVudFNoYWRlciBTZWxmIGV4cGxhbmF0b3J5XG4gKiBAcHJvcGVydHkge2Jvb2x9IHVzZWQgU2VsZiBleHBsYW5hdG9yeVxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuLyoqXG4gKiBBIGBVbmlmb3JtQmxvY2tTcGVjYCByZXByZXNlbnRzIHRoZSBkYXRhIG5lZWRlZCB0byBjcmVhdGUgYW5kIGJpbmRcbiAqIFVuaWZvcm1CbG9ja09iamVjdHMgZm9yIGEgZ2l2ZW4gcHJvZ3JhbVxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFVuaWZvcm1CbG9ja1NwZWNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0LjxzdHJpbmcsIG1vZHVsZTp0d2dsLkJsb2NrU3BlYz59IGJsb2NrU3BlY3MgVGhlIEJsb2NrU3BlYyBmb3IgZWFjaCBibG9jayBieSBibG9jayBuYW1lXG4gKiBAcHJvcGVydHkge1VuaWZvcm1EYXRhW119IHVuaWZvcm1EYXRhIEFuIGFycmF5IG9mIGRhdGEgZm9yIGVhY2ggdW5pZm9ybSBieSB1bmlmb3JtIGluZGV4LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgVW5pZm9ybUJsb2NrU3BlYyBmb3IgdGhlIGdpdmVuIHByb2dyYW0uXG4gKlxuICogQSBVbmlmb3JtQmxvY2tTcGVjIHJlcHJlc2VudHMgdGhlIGRhdGEgbmVlZGVkIHRvIGNyZWF0ZSBhbmQgYmluZFxuICogVW5pZm9ybUJsb2NrT2JqZWN0c1xuICpcbiAqIEBwYXJhbSB7V2ViR0wyUmVuZGVyaW5nQ29udGV4dH0gZ2wgQSBXZWJHTDIgUmVuZGVyaW5nIENvbnRleHRcbiAqIEBwYXJhbSB7V2ViR0xQcm9ncmFtfSBwcm9ncmFtIEEgV2ViR0xQcm9ncmFtIGZvciBhIHN1Y2Nlc3NmdWxseSBsaW5rZWQgcHJvZ3JhbVxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wuVW5pZm9ybUJsb2NrU3BlY30gVGhlIGNyZWF0ZWQgVW5pZm9ybUJsb2NrU3BlY1xuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3Byb2dyYW1zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVVuaWZvcm1CbG9ja1NwZWNGcm9tUHJvZ3JhbShnbCwgcHJvZ3JhbSkge1xuICBjb25zdCBudW1Vbmlmb3JtcyA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgQUNUSVZFX1VOSUZPUk1TKTtcbiAgY29uc3QgdW5pZm9ybURhdGEgPSBbXTtcbiAgY29uc3QgdW5pZm9ybUluZGljZXMgPSBbXTtcblxuICBmb3IgKGxldCBpaSA9IDA7IGlpIDwgbnVtVW5pZm9ybXM7ICsraWkpIHtcbiAgICB1bmlmb3JtSW5kaWNlcy5wdXNoKGlpKTtcbiAgICB1bmlmb3JtRGF0YS5wdXNoKHt9KTtcbiAgICBjb25zdCB1bmlmb3JtSW5mbyA9IGdsLmdldEFjdGl2ZVVuaWZvcm0ocHJvZ3JhbSwgaWkpO1xuICAgIHVuaWZvcm1EYXRhW2lpXS5uYW1lID0gdW5pZm9ybUluZm8ubmFtZTtcbiAgfVxuXG4gIFtcbiAgICBbIFwiVU5JRk9STV9UWVBFXCIsIFwidHlwZVwiIF0sXG4gICAgWyBcIlVOSUZPUk1fU0laRVwiLCBcInNpemVcIiBdLCAgLy8gbnVtIGVsZW1lbnRzXG4gICAgWyBcIlVOSUZPUk1fQkxPQ0tfSU5ERVhcIiwgXCJibG9ja05keFwiIF0sXG4gICAgWyBcIlVOSUZPUk1fT0ZGU0VUXCIsIFwib2Zmc2V0XCIsIF0sXG4gIF0uZm9yRWFjaChmdW5jdGlvbihwYWlyKSB7XG4gICAgY29uc3QgcG5hbWUgPSBwYWlyWzBdO1xuICAgIGNvbnN0IGtleSA9IHBhaXJbMV07XG4gICAgZ2wuZ2V0QWN0aXZlVW5pZm9ybXMocHJvZ3JhbSwgdW5pZm9ybUluZGljZXMsIGdsW3BuYW1lXSkuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmR4KSB7XG4gICAgICB1bmlmb3JtRGF0YVtuZHhdW2tleV0gPSB2YWx1ZTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgYmxvY2tTcGVjcyA9IHt9O1xuXG4gIGNvbnN0IG51bVVuaWZvcm1CbG9ja3MgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIEFDVElWRV9VTklGT1JNX0JMT0NLUyk7XG4gIGZvciAobGV0IGlpID0gMDsgaWkgPCBudW1Vbmlmb3JtQmxvY2tzOyArK2lpKSB7XG4gICAgY29uc3QgbmFtZSA9IGdsLmdldEFjdGl2ZVVuaWZvcm1CbG9ja05hbWUocHJvZ3JhbSwgaWkpO1xuICAgIGNvbnN0IGJsb2NrU3BlYyA9IHtcbiAgICAgIGluZGV4OiBnbC5nZXRVbmlmb3JtQmxvY2tJbmRleChwcm9ncmFtLCBuYW1lKSxcbiAgICAgIHVzZWRCeVZlcnRleFNoYWRlcjogZ2wuZ2V0QWN0aXZlVW5pZm9ybUJsb2NrUGFyYW1ldGVyKHByb2dyYW0sIGlpLCBVTklGT1JNX0JMT0NLX1JFRkVSRU5DRURfQllfVkVSVEVYX1NIQURFUiksXG4gICAgICB1c2VkQnlGcmFnbWVudFNoYWRlcjogZ2wuZ2V0QWN0aXZlVW5pZm9ybUJsb2NrUGFyYW1ldGVyKHByb2dyYW0sIGlpLCBVTklGT1JNX0JMT0NLX1JFRkVSRU5DRURfQllfRlJBR01FTlRfU0hBREVSKSxcbiAgICAgIHNpemU6IGdsLmdldEFjdGl2ZVVuaWZvcm1CbG9ja1BhcmFtZXRlcihwcm9ncmFtLCBpaSwgVU5JRk9STV9CTE9DS19EQVRBX1NJWkUpLFxuICAgICAgdW5pZm9ybUluZGljZXM6IGdsLmdldEFjdGl2ZVVuaWZvcm1CbG9ja1BhcmFtZXRlcihwcm9ncmFtLCBpaSwgVU5JRk9STV9CTE9DS19BQ1RJVkVfVU5JRk9STV9JTkRJQ0VTKSxcbiAgICB9O1xuICAgIGJsb2NrU3BlYy51c2VkID0gYmxvY2tTcGVjLnVzZWRCeVZlcnRleFNoYWRlciB8fCBibG9ja1NwZWMudXNlZEJ5RnJhZ21lbnRTaGFkZXI7XG4gICAgYmxvY2tTcGVjc1tuYW1lXSA9IGJsb2NrU3BlYztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYmxvY2tTcGVjczogYmxvY2tTcGVjcyxcbiAgICB1bmlmb3JtRGF0YTogdW5pZm9ybURhdGEsXG4gIH07XG59XG5cbmNvbnN0IGFycmF5U3VmZml4UkUgPSAvXFxbXFxkK1xcXVxcLiQvOyAgLy8gYmV0dGVyIHdheSB0byBjaGVjaz9cblxuY29uc3QgcGFkID0gKHYsIHBhZGRpbmcpID0+ICgodiArIChwYWRkaW5nIC0gMSkpIC8gcGFkZGluZyB8IDApICogcGFkZGluZztcblxuZnVuY3Rpb24gY3JlYXRlVW5pZm9ybUJsb2NrVW5pZm9ybVNldHRlcih2aWV3LCBpc0FycmF5LCByb3dzLCBjb2xzKSB7XG4gIGlmIChpc0FycmF5IHx8IHJvd3MpIHtcbiAgICBjb2xzID0gY29scyB8fCAxO1xuICAgIGNvbnN0IG51bUVsZW1lbnRzID0gdmlldy5sZW5ndGg7XG4gICAgY29uc3QgdG90YWxSb3dzID0gbnVtRWxlbWVudHMgLyA0O1xuICAgIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgbGV0IGRzdCA9IDA7XG4gICAgICBsZXQgc3JjID0gMDtcbiAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRvdGFsUm93czsgKytyb3cpIHtcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgY29sczsgKytjb2wpIHtcbiAgICAgICAgICB2aWV3W2RzdCsrXSA9IHZhbHVlW3NyYysrXTtcbiAgICAgICAgfVxuICAgICAgICBkc3QgKz0gNCAtIGNvbHM7XG4gICAgICB9XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgdmlldy5zZXQodmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmlld1swXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgVW5pZm9ybUJsb2NrT2JqZWN0IGluY2x1ZGluZyBhbiBBcnJheUJ1ZmZlciB3aXRoIGFsbCB0aGUgdW5pZm9ybSB2YWx1ZXNcbiAqIGFuZCBhIGNvcnJlc3BvbmRpbmcgV2ViR0xCdWZmZXIgdG8gaG9sZCB0aG9zZSB2YWx1ZXMgb24gdGhlIEdQVVxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFVuaWZvcm1CbG9ja0luZm9cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBibG9ja1xuICogQHByb3BlcnR5IHtBcnJheUJ1ZmZlcn0gYXJyYXkgVGhlIGFycmF5IGJ1ZmZlciB0aGF0IGNvbnRhaW5zIHRoZSB1bmlmb3JtIHZhbHVlc1xuICogQHByb3BlcnR5IHtGbG9hdDMyQXJyYXl9IGFzRmxvYXQgQSBmbG9hdCB2aWV3IG9uIHRoZSBhcnJheSBidWZmZXIuIFRoaXMgaXMgdXNlZnVsXG4gKiAgICBpbnNwZWN0aW5nIHRoZSBjb250ZW50cyBvZiB0aGUgYnVmZmVyIGluIHRoZSBkZWJ1Z2dlci5cbiAqIEBwcm9wZXJ0eSB7V2ViR0xCdWZmZXJ9IGJ1ZmZlciBBIFdlYkdMIGJ1ZmZlciB0aGF0IHdpbGwgaG9sZCBhIGNvcHkgb2YgdGhlIHVuaWZvcm0gdmFsdWVzIGZvciByZW5kZXJpbmcuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW29mZnNldF0gb2Zmc2V0IGludG8gYnVmZmVyXG4gKiBAcHJvcGVydHkge09iamVjdDxzdHJpbmcsIEFycmF5QnVmZmVyVmlldz59IHVuaWZvcm1zIEEgdW5pZm9ybSBuYW1lIHRvIEFycmF5QnVmZmVyVmlldyBtYXAuXG4gKiAgIGVhY2ggVW5pZm9ybSBoYXMgYSBjb3JyZWN0bHkgdHlwZWQgYEFycmF5QnVmZmVyVmlld2AgaW50byBhcnJheSBhdCB0aGUgY29ycmVjdCBvZmZzZXRcbiAqICAgYW5kIGxlbmd0aCBvZiB0aGF0IHVuaWZvcm0uIFNvIGZvciBleGFtcGxlIGEgZmxvYXQgdW5pZm9ybSB3b3VsZCBoYXZlIGEgMSBmbG9hdCBgRmxvYXQzMkFycmF5YFxuICogICB2aWV3LiBBIHNpbmdsZSBtYXQ0IHdvdWxkIGhhdmUgYSAxNiBlbGVtZW50IGBGbG9hdDMyQXJyYXlgIHZpZXcuIEFuIGl2ZWMyIHdvdWxkIGhhdmUgYW5cbiAqICAgYEludDMyQXJyYXlgIHZpZXcsIGV0Yy5cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0PHN0cmluZywgZnVuY3Rpb24+fSBzZXR0ZXJzIEEgc2V0dGVyIGZvciB0aGlzIHVuaWZvcm0uXG4gKiAgIFRoZSByZWFzb24gdG8gdXNlIHNldHRlcnMgaXMgZWxlbWVudHMgb2YgYXJyYXlzIGFyZSBwYWRkZWQgdG8gdmVjNCBzaXplcyB3aGljaFxuICogICBtZWFucyBpZiB5b3Ugd2FudCB0byBzZXQgYW4gYXJyYXkgb2YgNCBmbG9hdHMgeW91J2QgbmVlZCB0byBzZXQgMTYgdmFsdWVzXG4gKiAgIChvciBzZXQgZWxlbWVudHMgMCwgNCwgOCwgMTIpLiBJbiBvdGhlciB3b3Jkc1xuICogICBgc29tZUJsb2NrSW5mby51bmlmb3Jtcy5zb21lNEZsb2F0QXJyYXlVbmlmb3JtLnNldChbMCwgLCAsICwgMSwgLCAsICwgMiwgLCAsICwgM10pYFxuICogICB3aGVyZSBhcyB0aGUgc2V0dGVyIGhhbmRsZXMganVzdCBwYXNzaW5nIGluIFswLCAxLCAyLCAzXSBlaXRoZXIgZGlyZWN0bHkgYXMgaW5cbiAqICAgYHNvbWVCbG9ja0luZm8uc2V0dGVyLnNvbWU0RmxvYXRBcnJheVVuaWZvcm0uc2V0KFswLCAxLCAyLCAzXSlgIChub3QgcmVjb21tZW5kZWQpXG4gKiAgIG9yIHZpYSB7QGxpbmsgbW9kdWxlOnR3Z2wuc2V0QmxvY2tVbmlmb3Jtc31cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIGBVbmlmb3JtQmxvY2tJbmZvYCBmb3IgdGhlIHNwZWNpZmllZCBibG9ja1xuICpcbiAqIE5vdGU6ICoqSWYgdGhlIGJsb2NrTmFtZSBtYXRjaGVzIG5vIGV4aXN0aW5nIGJsb2NrcyBhIHdhcm5pbmcgaXMgcHJpbnRlZCB0byB0aGUgY29uc29sZSBhbmQgYSBkdW1teVxuICogYFVuaWZvcm1CbG9ja0luZm9gIGlzIHJldHVybmVkKiouIFRoaXMgaXMgYmVjYXVzZSB3aGVuIGRlYnVnZ2luZyBHTFNMXG4gKiBpdCBpcyBjb21tb24gdG8gY29tbWVudCBvdXQgbGFyZ2UgcG9ydGlvbnMgb2YgYSBzaGFkZXIgb3IgZm9yIGV4YW1wbGUgc2V0XG4gKiB0aGUgZmluYWwgb3V0cHV0IHRvIGEgY29uc3RhbnQuIFdoZW4gdGhhdCBoYXBwZW5zIGJsb2NrcyBnZXQgb3B0aW1pemVkIG91dC5cbiAqIElmIHRoaXMgZnVuY3Rpb24gZGlkIG5vdCBjcmVhdGUgZHVtbXkgYmxvY2tzIHlvdXIgY29kZSB3b3VsZCBjcmFzaCB3aGVuIGRlYnVnZ2luZy5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMMlJlbmRlcmluZ0NvbnRleHR9IGdsIEEgV2ViR0wyUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHtXZWJHTFByb2dyYW19IHByb2dyYW0gQSBXZWJHTFByb2dyYW1cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVW5pZm9ybUJsb2NrU3BlY30gdW5pZm9ybUJsb2NrU3BlYy4gQSBVbmlmb3JtQmxvY2tTcGVjIGFzIHJldHVybmVkXG4gKiAgICAgZnJvbSB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlVW5pZm9ybUJsb2NrU3BlY0Zyb21Qcm9ncmFtfS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBibG9ja05hbWUgVGhlIG5hbWUgb2YgdGhlIGJsb2NrLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wuVW5pZm9ybUJsb2NrSW5mb30gVGhlIGNyZWF0ZWQgVW5pZm9ybUJsb2NrSW5mb1xuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3Byb2dyYW1zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVVuaWZvcm1CbG9ja0luZm9Gcm9tUHJvZ3JhbShnbCwgcHJvZ3JhbSwgdW5pZm9ybUJsb2NrU3BlYywgYmxvY2tOYW1lKSB7XG4gIGNvbnN0IGJsb2NrU3BlY3MgPSB1bmlmb3JtQmxvY2tTcGVjLmJsb2NrU3BlY3M7XG4gIGNvbnN0IHVuaWZvcm1EYXRhID0gdW5pZm9ybUJsb2NrU3BlYy51bmlmb3JtRGF0YTtcbiAgY29uc3QgYmxvY2tTcGVjID0gYmxvY2tTcGVjc1tibG9ja05hbWVdO1xuICBpZiAoIWJsb2NrU3BlYykge1xuICAgIHdhcm4oXCJubyB1bmlmb3JtIGJsb2NrIG9iamVjdCBuYW1lZDpcIiwgYmxvY2tOYW1lKTtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogYmxvY2tOYW1lLFxuICAgICAgdW5pZm9ybXM6IHt9LFxuICAgIH07XG4gIH1cbiAgY29uc3QgYXJyYXkgPSBuZXcgQXJyYXlCdWZmZXIoYmxvY2tTcGVjLnNpemUpO1xuICBjb25zdCBidWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgY29uc3QgdW5pZm9ybUJ1ZmZlckluZGV4ID0gYmxvY2tTcGVjLmluZGV4O1xuICBnbC5iaW5kQnVmZmVyKFVOSUZPUk1fQlVGRkVSLCBidWZmZXIpO1xuICBnbC51bmlmb3JtQmxvY2tCaW5kaW5nKHByb2dyYW0sIGJsb2NrU3BlYy5pbmRleCwgdW5pZm9ybUJ1ZmZlckluZGV4KTtcblxuICBsZXQgcHJlZml4ID0gYmxvY2tOYW1lICsgXCIuXCI7XG4gIGlmIChhcnJheVN1ZmZpeFJFLnRlc3QocHJlZml4KSkge1xuICAgIHByZWZpeCA9IHByZWZpeC5yZXBsYWNlKGFycmF5U3VmZml4UkUsIFwiLlwiKTtcbiAgfVxuICBjb25zdCB1bmlmb3JtcyA9IHt9O1xuICBjb25zdCBzZXR0ZXJzID0ge307XG4gIGNvbnN0IHNldHRlclRyZWUgPSB7fTtcbiAgYmxvY2tTcGVjLnVuaWZvcm1JbmRpY2VzLmZvckVhY2goZnVuY3Rpb24odW5pZm9ybU5keCkge1xuICAgIGNvbnN0IGRhdGEgPSB1bmlmb3JtRGF0YVt1bmlmb3JtTmR4XTtcbiAgICBsZXQgbmFtZSA9IGRhdGEubmFtZTtcbiAgICBpZiAobmFtZS5zdGFydHNXaXRoKHByZWZpeCkpIHtcbiAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cihwcmVmaXgubGVuZ3RoKTtcbiAgICB9XG4gICAgY29uc3QgaXNBcnJheSA9IG5hbWUuZW5kc1dpdGgoJ1swXScpO1xuICAgIGlmIChpc0FycmF5KSB7XG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMCwgbmFtZS5sZW5ndGggLSAzKTtcbiAgICB9XG4gICAgY29uc3QgdHlwZUluZm8gPSB0eXBlTWFwW2RhdGEudHlwZV07XG4gICAgY29uc3QgVHlwZSA9IHR5cGVJbmZvLlR5cGU7XG4gICAgY29uc3QgYnl0ZUxlbmd0aCA9IGlzQXJyYXlcbiAgICAgICAgPyBwYWQodHlwZUluZm8uc2l6ZSwgMTYpICogZGF0YS5zaXplXG4gICAgICAgIDogdHlwZUluZm8uc2l6ZSAqIGRhdGEuc2l6ZTtcbiAgICBjb25zdCB1bmlmb3JtVmlldyA9IG5ldyBUeXBlKGFycmF5LCBkYXRhLm9mZnNldCwgYnl0ZUxlbmd0aCAvIFR5cGUuQllURVNfUEVSX0VMRU1FTlQpO1xuICAgIHVuaWZvcm1zW25hbWVdID0gdW5pZm9ybVZpZXc7XG4gICAgLy8gTm90ZTogSSdtIG5vdCBzdXJlIHdoYXQgdG8gZG8gaGVyZS4gVGhlIG9yaWdpbmFsXG4gICAgLy8gaWRlYSB3YXMgdG8gY3JlYXRlIFR5cGVkQXJyYXkgdmlld3MgaW50byBlYWNoIHBhcnRcbiAgICAvLyBvZiB0aGUgYmxvY2suIFRoaXMgaXMgdXNlZnVsLCBmb3IgZXhhbXBsZSBpZiB5b3UgaGF2ZVxuICAgIC8vIGEgYmxvY2sgd2l0aCB7IG1hdDQ6IG1vZGVsOyBtYXQ0IHZpZXc7IG1hdDQgcHJvamVjdGlvbjsgfVxuICAgIC8vIHlvdSdsbCBnZXQgYSBGbG9hdDMyQXJyYXkgZm9yIGVhY2ggb25lIHN1aXRhYmxlIGZvclxuICAgIC8vIHBhc3NpbmcgdG8gbW9zdCBKUyBtYXRoIGxpYnJhcmllcyBpbmNsdWRpbmcgdHdnbCdzIGFuZCBnbE1hdHJpeC5qcy5cbiAgICAvL1xuICAgIC8vIEJ1dCwgaWYgeW91IGhhdmUgYSBhbiBhcnJheSBvZiBzdHJ1Y3R1cmVzLCBlc3BlY2lhbGx5IGlmIHRoYXRcbiAgICAvLyBhcnJheSBpcyBsYXJnZSwgeW91IGdldCBhIHdob2xlIGJ1bmNoIG9mIFR5cGVkQXJyYXkgdmlld3MuXG4gICAgLy8gRXZlcnkgb25lIG9mIHRoZW0gaGFzIG92ZXJoZWFkIGFuZCBzd2l0Y2hpbmcgYmV0d2VlbiB0aGVtIGFsbFxuICAgIC8vIGlzIHByb2JhYmx5IGEgY2FjaGUgbWlzcy4gSW4gdGhhdCBjYXNlIGl0IHdvdWxkIHJlYWxseSBiZSBiZXR0ZXJcbiAgICAvLyB0byBqdXN0IGhhdmUgb25lIHZpZXcgKGFzRmxvYXQpIGFuZCBoYXZlIGFsbCB0aGUgc2V0dGVyc1xuICAgIC8vIGp1c3QgcmVmZXJlbmNlIHRoZSBjb3JyZWN0IHBvcnRpb24uIEJ1dCwgdGhlbiB5b3UgY2FuJ3QgZWFzaWx5XG4gICAgLy8gdHJlYXQgYSBtYXRyaXgsIG9yIGEgdmVjNCwgYXMgYSBzdGFuZGFsb25lIHRoaW5nIGxpa2UgeW91IGNhblxuICAgIC8vIHdpdGggYWxsIHRoZSB2aWV3cy5cbiAgICAvL1xuICAgIC8vIEFub3RoZXIgcHJvYmxlbSB3aXRoIHRoZSB2aWV3cyBpcyB0aGV5IGFyZSBub3Qgc2hhcmVkLiBXaXRoXG4gICAgLy8gdW5pZm9ybXMgeW91IGhhdmUgb25lIHNldCBvZiBzZXR0ZXJzLiBXaXRoIFVuaWZvcm1CbG9ja0luZm9cbiAgICAvLyB5b3UgaGF2ZSBhIHNldCBvZiBzZXR0ZXJzICpwcmUgYmxvY2sgaW5zdGFuY2UqLiBUaGF0J3MgYmVjYXVzZVxuICAgIC8vIFR5cGVkQXJyYXkgdmlld3MgY2FuJ3QgYmUgbWFwcGVkIHRvIGRpZmZlcmVudCBidWZmZXJzLlxuICAgIC8vXG4gICAgLy8gTXkgZ3V0IHJpZ2h0IG5vdyBpcyBpZiB5b3UgcmVhbGx5IHdhbnQgdGhlIHNwZWVkIGFuZCBjb21wYWN0bmVzc1xuICAgIC8vIHRoZW4geW91IHNob3VsZCBwcm9iYWJseSByb2xsIHlvdXIgb3duIHNvbHV0aW9uLiBUV0dMJ3MgZ29hbFxuICAgIC8vIGhlcmUgaXMgZWFzZSBvZiB1c2UgYXMgQUZBSUNUIHRoZXJlIGlzIG5vIHNpbXBsZSBnZW5lcmljIGVmZmljaWVudFxuICAgIC8vIHNvbHV0aW9uLlxuICAgIGNvbnN0IHNldHRlciA9IGNyZWF0ZVVuaWZvcm1CbG9ja1VuaWZvcm1TZXR0ZXIodW5pZm9ybVZpZXcsIGlzQXJyYXksIHR5cGVJbmZvLnJvd3MsIHR5cGVJbmZvLmNvbHMpO1xuICAgIHNldHRlcnNbbmFtZV0gPSBzZXR0ZXI7XG4gICAgYWRkU2V0dGVyVG9Vbmlmb3JtVHJlZShuYW1lLCBzZXR0ZXIsIHNldHRlclRyZWUsIHNldHRlcnMpO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBibG9ja05hbWUsXG4gICAgYXJyYXksXG4gICAgYXNGbG9hdDogbmV3IEZsb2F0MzJBcnJheShhcnJheSksICAvLyBmb3IgZGVidWdnaW5nXG4gICAgYnVmZmVyLFxuICAgIHVuaWZvcm1zLFxuICAgIHNldHRlcnMsXG4gIH07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGBVbmlmb3JtQmxvY2tJbmZvYCBmb3IgdGhlIHNwZWNpZmllZCBibG9ja1xuICpcbiAqIE5vdGU6ICoqSWYgdGhlIGJsb2NrTmFtZSBtYXRjaGVzIG5vIGV4aXN0aW5nIGJsb2NrcyBhIHdhcm5pbmcgaXMgcHJpbnRlZCB0byB0aGUgY29uc29sZSBhbmQgYSBkdW1teVxuICogYFVuaWZvcm1CbG9ja0luZm9gIGlzIHJldHVybmVkKiouIFRoaXMgaXMgYmVjYXVzZSB3aGVuIGRlYnVnZ2luZyBHTFNMXG4gKiBpdCBpcyBjb21tb24gdG8gY29tbWVudCBvdXQgbGFyZ2UgcG9ydGlvbnMgb2YgYSBzaGFkZXIgb3IgZm9yIGV4YW1wbGUgc2V0XG4gKiB0aGUgZmluYWwgb3V0cHV0IHRvIGEgY29uc3RhbnQuIFdoZW4gdGhhdCBoYXBwZW5zIGJsb2NrcyBnZXQgb3B0aW1pemVkIG91dC5cbiAqIElmIHRoaXMgZnVuY3Rpb24gZGlkIG5vdCBjcmVhdGUgZHVtbXkgYmxvY2tzIHlvdXIgY29kZSB3b3VsZCBjcmFzaCB3aGVuIGRlYnVnZ2luZy5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMMlJlbmRlcmluZ0NvbnRleHR9IGdsIEEgV2ViR0wyUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5Qcm9ncmFtSW5mb30gcHJvZ3JhbUluZm8gYSBgUHJvZ3JhbUluZm9gXG4gKiAgICAgYXMgcmV0dXJuZWQgZnJvbSB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlUHJvZ3JhbUluZm99XG4gKiBAcGFyYW0ge3N0cmluZ30gYmxvY2tOYW1lIFRoZSBuYW1lIG9mIHRoZSBibG9jay5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsLlVuaWZvcm1CbG9ja0luZm99IFRoZSBjcmVhdGVkIFVuaWZvcm1CbG9ja0luZm9cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcm9ncmFtc1xuICovXG5mdW5jdGlvbiBjcmVhdGVVbmlmb3JtQmxvY2tJbmZvKGdsLCBwcm9ncmFtSW5mbywgYmxvY2tOYW1lKSB7XG4gIHJldHVybiBjcmVhdGVVbmlmb3JtQmxvY2tJbmZvRnJvbVByb2dyYW0oZ2wsIHByb2dyYW1JbmZvLnByb2dyYW0sIHByb2dyYW1JbmZvLnVuaWZvcm1CbG9ja1NwZWMsIGJsb2NrTmFtZSk7XG59XG5cbi8qKlxuICogQmluZHMgYSB1bmlmb3JtIGJsb2NrIHRvIHRoZSBtYXRjaGluZyB1bmlmb3JtIGJsb2NrIHBvaW50LlxuICogTWF0Y2hlcyBieSBibG9ja3MgYnkgbmFtZSBzbyBibG9ja3MgbXVzdCBoYXZlIHRoZSBzYW1lIG5hbWUgbm90IGp1c3QgdGhlIHNhbWVcbiAqIHN0cnVjdHVyZS5cbiAqXG4gKiBJZiB5b3UgaGF2ZSBjaGFuZ2VkIGFueSB2YWx1ZXMgYW5kIHlvdSB1cGxvYWQgdGhlIHZhbHVlcyBpbnRvIHRoZSBjb3JyZXNwb25kaW5nIFdlYkdMQnVmZmVyXG4gKiBjYWxsIHtAbGluayBtb2R1bGU6dHdnbC5zZXRVbmlmb3JtQmxvY2t9IGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtXZWJHTDJSZW5kZXJpbmdDb250ZXh0fSBnbCBBIFdlYkdMIDIgcmVuZGVyaW5nIGNvbnRleHQuXG4gKiBAcGFyYW0geyhtb2R1bGU6dHdnbC5Qcm9ncmFtSW5mb3xtb2R1bGU6dHdnbC5Vbmlmb3JtQmxvY2tTcGVjKX0gcHJvZ3JhbUluZm8gYSBgUHJvZ3JhbUluZm9gXG4gKiAgICAgYXMgcmV0dXJuZWQgZnJvbSB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlUHJvZ3JhbUluZm99IG9yIG9yIGBVbmlmb3JtQmxvY2tTcGVjYCBhc1xuICogICAgIHJldHVybmVkIGZyb20ge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZVVuaWZvcm1CbG9ja1NwZWNGcm9tUHJvZ3JhbX0uXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlVuaWZvcm1CbG9ja0luZm99IHVuaWZvcm1CbG9ja0luZm8gYSBgVW5pZm9ybUJsb2NrSW5mb2AgYXMgcmV0dXJuZWQgZnJvbVxuICogICAgIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVVbmlmb3JtQmxvY2tJbmZvfS5cbiAqIEByZXR1cm4ge2Jvb2x9IHRydWUgaWYgYnVmZmVyIHdhcyBib3VuZC4gSWYgdGhlIHByb2dyYW1JbmZvIGhhcyBubyBibG9jayB3aXRoIHRoZSBzYW1lIGJsb2NrIG5hbWVcbiAqICAgICBubyBidWZmZXIgaXMgYm91bmQuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJvZ3JhbXNcbiAqL1xuZnVuY3Rpb24gYmluZFVuaWZvcm1CbG9jayhnbCwgcHJvZ3JhbUluZm8sIHVuaWZvcm1CbG9ja0luZm8pIHtcbiAgY29uc3QgdW5pZm9ybUJsb2NrU3BlYyA9IHByb2dyYW1JbmZvLnVuaWZvcm1CbG9ja1NwZWMgfHwgcHJvZ3JhbUluZm87XG4gIGNvbnN0IGJsb2NrU3BlYyA9IHVuaWZvcm1CbG9ja1NwZWMuYmxvY2tTcGVjc1t1bmlmb3JtQmxvY2tJbmZvLm5hbWVdO1xuICBpZiAoYmxvY2tTcGVjKSB7XG4gICAgY29uc3QgYnVmZmVyQmluZEluZGV4ID0gYmxvY2tTcGVjLmluZGV4O1xuICAgIGdsLmJpbmRCdWZmZXJSYW5nZShVTklGT1JNX0JVRkZFUiwgYnVmZmVyQmluZEluZGV4LCB1bmlmb3JtQmxvY2tJbmZvLmJ1ZmZlciwgdW5pZm9ybUJsb2NrSW5mby5vZmZzZXQgfHwgMCwgdW5pZm9ybUJsb2NrSW5mby5hcnJheS5ieXRlTGVuZ3RoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogVXBsb2FkcyB0aGUgY3VycmVudCB1bmlmb3JtIHZhbHVlcyB0byB0aGUgY29ycmVzcG9uZGluZyBXZWJHTEJ1ZmZlclxuICogYW5kIGJpbmRzIHRoYXQgYnVmZmVyIHRvIHRoZSBwcm9ncmFtJ3MgY29ycmVzcG9uZGluZyBiaW5kIHBvaW50IGZvciB0aGUgdW5pZm9ybSBibG9jayBvYmplY3QuXG4gKlxuICogSWYgeW91IGhhdmVuJ3QgY2hhbmdlZCBhbnkgdmFsdWVzIGFuZCB5b3Ugb25seSBuZWVkIHRvIGJpbmQgdGhlIHVuaWZvcm0gYmxvY2sgb2JqZWN0XG4gKiBjYWxsIHtAbGluayBtb2R1bGU6dHdnbC5iaW5kVW5pZm9ybUJsb2NrfSBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7V2ViR0wyUmVuZGVyaW5nQ29udGV4dH0gZ2wgQSBXZWJHTCAyIHJlbmRlcmluZyBjb250ZXh0LlxuICogQHBhcmFtIHsobW9kdWxlOnR3Z2wuUHJvZ3JhbUluZm98bW9kdWxlOnR3Z2wuVW5pZm9ybUJsb2NrU3BlYyl9IHByb2dyYW1JbmZvIGEgYFByb2dyYW1JbmZvYFxuICogICAgIGFzIHJldHVybmVkIGZyb20ge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZVByb2dyYW1JbmZvfSBvciBvciBgVW5pZm9ybUJsb2NrU3BlY2AgYXNcbiAqICAgICByZXR1cm5lZCBmcm9tIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVVbmlmb3JtQmxvY2tTcGVjRnJvbVByb2dyYW19LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5Vbmlmb3JtQmxvY2tJbmZvfSB1bmlmb3JtQmxvY2tJbmZvIGEgYFVuaWZvcm1CbG9ja0luZm9gIGFzIHJldHVybmVkIGZyb21cbiAqICAgICB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlVW5pZm9ybUJsb2NrSW5mb30uXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJvZ3JhbXNcbiAqL1xuZnVuY3Rpb24gc2V0VW5pZm9ybUJsb2NrKGdsLCBwcm9ncmFtSW5mbywgdW5pZm9ybUJsb2NrSW5mbykge1xuICBpZiAoYmluZFVuaWZvcm1CbG9jayhnbCwgcHJvZ3JhbUluZm8sIHVuaWZvcm1CbG9ja0luZm8pKSB7XG4gICAgZ2wuYnVmZmVyRGF0YShVTklGT1JNX0JVRkZFUiwgdW5pZm9ybUJsb2NrSW5mby5hcnJheSwgRFlOQU1JQ19EUkFXKTtcbiAgfVxufVxuXG4vKipcbiAqIFNldHMgdmFsdWVzIG9mIGEgdW5pZm9ybSBibG9jayBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlVuaWZvcm1CbG9ja0luZm99IHVuaWZvcm1CbG9ja0luZm8gQSBVbmlmb3JtQmxvY2tJbmZvIGFzIHJldHVybmVkIGJ5IHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVVbmlmb3JtQmxvY2tJbmZvfS5cbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsID8+fSB2YWx1ZXMgQSB1bmlmb3JtIG5hbWUgdG8gdmFsdWUgbWFwIHdoZXJlIHRoZSB2YWx1ZSBpcyBjb3JyZWN0IGZvciB0aGUgZ2l2ZW5cbiAqICAgIHR5cGUgb2YgdW5pZm9ybS4gU28gZm9yIGV4YW1wbGUgZ2l2ZW4gYSBibG9jayBsaWtlXG4gKlxuICogICAgICAgdW5pZm9ybSBTb21lQmxvY2sge1xuICogICAgICAgICBmbG9hdCBzb21lRmxvYXQ7XG4gKiAgICAgICAgIHZlYzIgc29tZVZlYzI7XG4gKiAgICAgICAgIHZlYzMgc29tZVZlYzNBcnJheVsyXTtcbiAqICAgICAgICAgaW50IHNvbWVJbnQ7XG4gKiAgICAgICB9XG4gKlxuICogIFlvdSBjYW4gc2V0IHRoZSB2YWx1ZXMgb2YgdGhlIHVuaWZvcm0gYmxvY2sgd2l0aFxuICpcbiAqICAgICAgIHR3Z2wuc2V0QmxvY2tVbmlmb3Jtcyhzb21lQmxvY2tJbmZvLCB7XG4gKiAgICAgICAgICBzb21lRmxvYXQ6IDEyLjMsXG4gKiAgICAgICAgICBzb21lVmVjMjogWzEsIDJdLFxuICogICAgICAgICAgc29tZVZlYzNBcnJheTogWzEsIDIsIDMsIDQsIDUsIDZdLFxuICogICAgICAgICAgc29tZUludDogNSxcbiAqICAgICAgIH1cbiAqXG4gKiAgQXJyYXlzIGNhbiBiZSBKYXZhU2NyaXB0IGFycmF5cyBvciB0eXBlZCBhcnJheXNcbiAqXG4gKiAgWW91IGNhbiBhbHNvIGZpbGwgb3V0IHN0cnVjdHVyZSBhbmQgYXJyYXkgdmFsdWVzIGVpdGhlciB2aWFcbiAqICBzaG9ydGN1dC4gRXhhbXBsZVxuICpcbiAqICAgICAvLyAtLSBpbiBzaGFkZXIgLS1cbiAqICAgICBzdHJ1Y3QgTGlnaHQge1xuICogICAgICAgZmxvYXQgaW50ZW5zaXR5O1xuICogICAgICAgdmVjNCBjb2xvcjtcbiAqICAgICAgIGZsb2F0IG5lYXJGYXJbMl07XG4gKiAgICAgfTtcbiAqICAgICB1bmlmb3JtIExpZ2h0cyB7XG4gKiAgICAgICBMaWdodCBsaWdodHNbMl07XG4gKiAgICAgfTtcbiAqXG4gKiAgICAgLy8gaW4gSmF2YVNjcmlwdFxuICpcbiAqICAgICB0d2dsLnNldEJsb2NrVW5pZm9ybXMoc29tZUJsb2NrSW5mbywge1xuICogICAgICAgbGlnaHRzOiBbXG4gKiAgICAgICAgIHsgaW50ZW5zaXR5OiA1LjAsIGNvbG9yOiBbMSwgMCwgMCwgMV0sIG5lYXJGYXJbMC4xLCAxMF0gfSxcbiAqICAgICAgICAgeyBpbnRlbnNpdHk6IDIuMCwgY29sb3I6IFswLCAwLCAxLCAxXSwgbmVhckZhclswLjIsIDE1XSB9LFxuICogICAgICAgXSxcbiAqICAgICB9KTtcbiAqXG4gKiAgIG9yIHRoZSBtb3JlIHRyYWRpdGlvbmFsIHdheVxuICpcbiAqICAgICB0d2dsLnNldEJsb2NrVW5pZm9ybXMoc29tZUJsb2NrSW5mbywge1xuICogICAgICAgXCJsaWdodHNbMF0uaW50ZW5zaXR5XCI6IDUuMCxcbiAqICAgICAgIFwibGlnaHRzWzBdLmNvbG9yXCI6IFsxLCAwLCAwLCAxXSxcbiAqICAgICAgIFwibGlnaHRzWzBdLm5lYXJGYXJcIjogWzAuMSwgMTBdLFxuICogICAgICAgXCJsaWdodHNbMV0uaW50ZW5zaXR5XCI6IDIuMCxcbiAqICAgICAgIFwibGlnaHRzWzFdLmNvbG9yXCI6IFswLCAwLCAxLCAxXSxcbiAqICAgICAgIFwibGlnaHRzWzFdLm5lYXJGYXJcIjogWzAuMiwgMTVdLFxuICogICAgIH0pO1xuICpcbiAqICAgWW91IGNhbiBhbHNvIHNwZWNpZnkgcGFydGlhbCBwYXRoc1xuICpcbiAqICAgICB0d2dsLnNldEJsb2NrVW5pZm9ybXMoc29tZUJsb2NrSW5mbywge1xuICogICAgICAgJ2xpZ2h0c1sxXSc6IHsgaW50ZW5zaXR5OiA1LjAsIGNvbG9yOiBbMSwgMCwgMCwgMV0sIG5lYXJGYXJbMC4yLCAxNV0gfSxcbiAqICAgICB9KTtcbiAqXG4gKiAgIEJ1dCB5b3UgY2FuIG5vdCBzcGVjaWZ5IGxlYWYgYXJyYXkgaW5kaWNlcy5cbiAqXG4gKiAgICAgdHdnbC5zZXRCbG9ja1VuaWZvcm1zKHNvbWVCbG9ja0luZm8sIHtcbiAqICAgICAgICdsaWdodHNbMV0ubmVhckZhclsxXSc6IDE1LCAgICAgLy8gQkFEISBuZWFyRmFyIGlzIGEgbGVhZlxuICogICAgICAgJ2xpZ2h0c1sxXS5uZWFyRmFyJzogWzAuMiwgMTVdLCAvLyBHT09EXG4gKiAgICAgfSk7XG4gKlxuICogICoqSU1QT1JUQU5UISoqLCBwYWNraW5nIGluIGEgVW5pZm9ybUJsb2NrIGlzIHVuaW50dWl0aXZlLlxuICogIEZvciBleGFtcGxlIHRoZSBhY3R1YWwgbGF5b3V0IG9mIGBzb21lVmVjM0FycmF5YCBhYm92ZSBpbiBtZW1vcnlcbiAqICBpcyBgMSwgMiwgMywgdW51c2VkLCA0LCA1LCA2LCB1bnVzZWRgLiB0d2dsIHRha2VzIGluIDYgdmFsdWVzXG4gKiAgYXMgc2hvd24gYWJvdXQgYW5kIGNvcGllcyB0aGVtLCBza2lwcGluZyB0aGUgcGFkZGluZy4gVGhpcyBtaWdodFxuICogIGJlIGNvbmZ1c2luZyBpZiB5b3UncmUgYWxyZWFkeSBmYW1pbGlhciB3aXRoIFVuaWZvcm0gYmxvY2tzLlxuICpcbiAqICBJZiB5b3Ugd2FudCB0byBkZWFsIHdpdGggdGhlIHBhZGRpbmcgeW91cnNlbGYgeW91IGNhbiBhY2Nlc3MgdGhlIGFycmF5XG4gKiAgYnVmZmVyIHZpZXdzIGRpcmVjdGx5LiBlZzpcbiAqXG4gKiAgICAgIHNvbWVCbG9ja0luZm8uc29tZVZlYzNBcnJheS5zZXQoWzEsIDIsIDMsIDAsIDQsIDUsIDYsIDBdKTtcbiAqXG4gKiAgQW55IG5hbWUgdGhhdCBkb2Vzbid0IG1hdGNoIHdpbGwgYmUgaWdub3JlZFxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3Byb2dyYW1zXG4gKi9cbmZ1bmN0aW9uIHNldEJsb2NrVW5pZm9ybXModW5pZm9ybUJsb2NrSW5mbywgdmFsdWVzKSB7XG4gIGNvbnN0IHNldHRlcnMgPSB1bmlmb3JtQmxvY2tJbmZvLnNldHRlcnM7XG4gIGZvciAoY29uc3QgbmFtZSBpbiB2YWx1ZXMpIHtcbiAgICBjb25zdCBzZXR0ZXIgPSBzZXR0ZXJzW25hbWVdO1xuICAgIGlmIChzZXR0ZXIpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzW25hbWVdO1xuICAgICAgc2V0dGVyKHZhbHVlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0VW5pZm9ybVRyZWUodHJlZSwgdmFsdWVzKSB7XG4gIGZvciAoY29uc3QgbmFtZSBpbiB2YWx1ZXMpIHtcbiAgICBjb25zdCBwcm9wID0gdHJlZVtuYW1lXTtcbiAgICBpZiAodHlwZW9mIHByb3AgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3AodmFsdWVzW25hbWVdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VW5pZm9ybVRyZWUodHJlZVtuYW1lXSwgdmFsdWVzW25hbWVdKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBTZXQgdW5pZm9ybXMgYW5kIGJpbmRzIHJlbGF0ZWQgdGV4dHVyZXMuXG4gKlxuICogZXhhbXBsZTpcbiAqXG4gKiAgICAgY29uc3QgcHJvZ3JhbUluZm8gPSBjcmVhdGVQcm9ncmFtSW5mbyhcbiAqICAgICAgICAgZ2wsIFtcInNvbWUtdnNcIiwgXCJzb21lLWZzXCJdKTtcbiAqXG4gKiAgICAgY29uc3QgdGV4MSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcbiAqICAgICBjb25zdCB0ZXgyID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xuICpcbiAqICAgICAuLi4gYXNzdW1lIHdlIHNldHVwIHRoZSB0ZXh0dXJlcyB3aXRoIGRhdGEgLi4uXG4gKlxuICogICAgIGNvbnN0IHVuaWZvcm1zID0ge1xuICogICAgICAgdV9zb21lU2FtcGxlcjogdGV4MSxcbiAqICAgICAgIHVfc29tZU90aGVyU2FtcGxlcjogdGV4MixcbiAqICAgICAgIHVfc29tZUNvbG9yOiBbMSwwLDAsMV0sXG4gKiAgICAgICB1X3NvbWVQb3NpdGlvbjogWzAsMSwxXSxcbiAqICAgICAgIHVfc29tZU1hdHJpeDogW1xuICogICAgICAgICAxLDAsMCwwLFxuICogICAgICAgICAwLDEsMCwwLFxuICogICAgICAgICAwLDAsMSwwLFxuICogICAgICAgICAwLDAsMCwwLFxuICogICAgICAgXSxcbiAqICAgICB9O1xuICpcbiAqICAgICBnbC51c2VQcm9ncmFtKHByb2dyYW1JbmZvLnByb2dyYW0pO1xuICpcbiAqIFRoaXMgd2lsbCBhdXRvbWF0aWNhbGx5IGJpbmQgdGhlIHRleHR1cmVzIEFORCBzZXQgdGhlXG4gKiB1bmlmb3Jtcy5cbiAqXG4gKiAgICAgdHdnbC5zZXRVbmlmb3Jtcyhwcm9ncmFtSW5mbywgdW5pZm9ybXMpO1xuICpcbiAqIEZvciB0aGUgZXhhbXBsZSBhYm92ZSBpdCBpcyBlcXVpdmFsZW50IHRvXG4gKlxuICogICAgIGxldCB0ZXhVbml0ID0gMDtcbiAqICAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwICsgdGV4VW5pdCk7XG4gKiAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4MSk7XG4gKiAgICAgZ2wudW5pZm9ybTFpKHVfc29tZVNhbXBsZXJMb2NhdGlvbiwgdGV4VW5pdCsrKTtcbiAqICAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwICsgdGV4VW5pdCk7XG4gKiAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4Mik7XG4gKiAgICAgZ2wudW5pZm9ybTFpKHVfc29tZVNhbXBsZXJMb2NhdGlvbiwgdGV4VW5pdCsrKTtcbiAqICAgICBnbC51bmlmb3JtNGZ2KHVfc29tZUNvbG9yTG9jYXRpb24sIFsxLCAwLCAwLCAxXSk7XG4gKiAgICAgZ2wudW5pZm9ybTNmdih1X3NvbWVQb3NpdGlvbkxvY2F0aW9uLCBbMCwgMSwgMV0pO1xuICogICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYodV9zb21lTWF0cml4LCBmYWxzZSwgW1xuICogICAgICAgICAxLDAsMCwwLFxuICogICAgICAgICAwLDEsMCwwLFxuICogICAgICAgICAwLDAsMSwwLFxuICogICAgICAgICAwLDAsMCwwLFxuICogICAgICAgXSk7XG4gKlxuICogTm90ZSBpdCBpcyBwZXJmZWN0bHkgcmVhc29uYWJsZSB0byBjYWxsIGBzZXRVbmlmb3Jtc2AgbXVsdGlwbGUgdGltZXMuIEZvciBleGFtcGxlXG4gKlxuICogICAgIGNvbnN0IHVuaWZvcm1zID0ge1xuICogICAgICAgdV9zb21lU2FtcGxlcjogdGV4MSxcbiAqICAgICAgIHVfc29tZU90aGVyU2FtcGxlcjogdGV4MixcbiAqICAgICB9O1xuICpcbiAqICAgICBjb25zdCBtb3JlVW5pZm9ybXMge1xuICogICAgICAgdV9zb21lQ29sb3I6IFsxLDAsMCwxXSxcbiAqICAgICAgIHVfc29tZVBvc2l0aW9uOiBbMCwxLDFdLFxuICogICAgICAgdV9zb21lTWF0cml4OiBbXG4gKiAgICAgICAgIDEsMCwwLDAsXG4gKiAgICAgICAgIDAsMSwwLDAsXG4gKiAgICAgICAgIDAsMCwxLDAsXG4gKiAgICAgICAgIDAsMCwwLDAsXG4gKiAgICAgICBdLFxuICogICAgIH07XG4gKlxuICogICAgIHR3Z2wuc2V0VW5pZm9ybXMocHJvZ3JhbUluZm8sIHVuaWZvcm1zKTtcbiAqICAgICB0d2dsLnNldFVuaWZvcm1zKHByb2dyYW1JbmZvLCBtb3JlVW5pZm9ybXMpO1xuICpcbiAqIFlvdSBjYW4gYWxzbyBhZGQgV2ViR0xTYW1wbGVycyB0byB1bmlmb3JtIHNhbXBsZXJzIGFzIGluXG4gKlxuICogICAgIGNvbnN0IHVuaWZvcm1zID0ge1xuICogICAgICAgdV9zb21lU2FtcGxlcjoge1xuICogICAgICAgICB0ZXh0dXJlOiBzb21lV2ViR0xUZXh0dXJlLFxuICogICAgICAgICBzYW1wbGVyOiBzb21lV2ViR0xTYW1wbGVyLFxuICogICAgICAgfSxcbiAqICAgICB9O1xuICpcbiAqIEluIHdoaWNoIGNhc2UgYm90aCB0aGUgc2FtcGxlciBhbmQgdGV4dHVyZSB3aWxsIGJlIGJvdW5kIHRvIHRoZVxuICogc2FtZSB1bml0LlxuICpcbiAqIEBwYXJhbSB7KG1vZHVsZTp0d2dsLlByb2dyYW1JbmZvfE9iamVjdC48c3RyaW5nLCBmdW5jdGlvbj4pfSBzZXR0ZXJzIGEgYFByb2dyYW1JbmZvYCBhcyByZXR1cm5lZCBmcm9tIGBjcmVhdGVQcm9ncmFtSW5mb2Agb3IgdGhlIHNldHRlcnMgcmV0dXJuZWQgZnJvbVxuICogICAgICAgIGBjcmVhdGVVbmlmb3JtU2V0dGVyc2AuXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCA/Pn0gdmFsdWVzIGFuIG9iamVjdCB3aXRoIHZhbHVlcyBmb3IgdGhlXG4gKiAgICAgICAgdW5pZm9ybXMuXG4gKiAgIFlvdSBjYW4gcGFzcyBtdWx0aXBsZSBvYmplY3RzIGJ5IHB1dHRpbmcgdGhlbSBpbiBhbiBhcnJheSBvciBieSBjYWxsaW5nIHdpdGggbW9yZSBhcmd1bWVudHMuRm9yIGV4YW1wbGVcbiAqXG4gKiAgICAgY29uc3Qgc2hhcmVkVW5pZm9ybXMgPSB7XG4gKiAgICAgICB1X2ZvZ05lYXI6IDEwLFxuICogICAgICAgdV9wcm9qZWN0aW9uOiAuLi5cbiAqICAgICAgIC4uLlxuICogICAgIH07XG4gKlxuICogICAgIGNvbnN0IGxvY2FsVW5pZm9ybXMgPSB7XG4gKiAgICAgICB1X3dvcmxkOiAuLi5cbiAqICAgICAgIHVfZGlmZnVzZUNvbG9yOiAuLi5cbiAqICAgICB9O1xuICpcbiAqICAgICB0d2dsLnNldFVuaWZvcm1zKHByb2dyYW1JbmZvLCBzaGFyZWRVbmlmb3JtcywgbG9jYWxVbmlmb3Jtcyk7XG4gKlxuICogICAgIC8vIGlzIHRoZSBzYW1lIGFzXG4gKlxuICogICAgIHR3Z2wuc2V0VW5pZm9ybXMocHJvZ3JhbUluZm8sIFtzaGFyZWRVbmlmb3JtcywgbG9jYWxVbmlmb3Jtc10pO1xuICpcbiAqICAgICAvLyBpcyB0aGUgc2FtZSBhc1xuICpcbiAqICAgICB0d2dsLnNldFVuaWZvcm1zKHByb2dyYW1JbmZvLCBzaGFyZWRVbmlmb3Jtcyk7XG4gKiAgICAgdHdnbC5zZXRVbmlmb3Jtcyhwcm9ncmFtSW5mbywgbG9jYWxVbmlmb3Jtc307XG4gKlxuICogICBZb3UgY2FuIGFsc28gZmlsbCBvdXQgc3RydWN0dXJlIGFuZCBhcnJheSB2YWx1ZXMgZWl0aGVyIHZpYVxuICogICBzaG9ydGN1dC4gRXhhbXBsZVxuICpcbiAqICAgICAvLyAtLSBpbiBzaGFkZXIgLS1cbiAqICAgICBzdHJ1Y3QgTGlnaHQge1xuICogICAgICAgZmxvYXQgaW50ZW5zaXR5O1xuICogICAgICAgdmVjNCBjb2xvcjtcbiAqICAgICAgIGZsb2F0IG5lYXJGYXJbMl07XG4gKiAgICAgfTtcbiAqICAgICB1bmlmb3JtIExpZ2h0IGxpZ2h0c1syXTtcbiAqXG4gKiAgICAgLy8gaW4gSmF2YVNjcmlwdFxuICpcbiAqICAgICB0d2dsLnNldFVuaWZvcm1zKHByb2dyYW1JbmZvLCB7XG4gKiAgICAgICBsaWdodHM6IFtcbiAqICAgICAgICAgeyBpbnRlbnNpdHk6IDUuMCwgY29sb3I6IFsxLCAwLCAwLCAxXSwgbmVhckZhclswLjEsIDEwXSB9LFxuICogICAgICAgICB7IGludGVuc2l0eTogMi4wLCBjb2xvcjogWzAsIDAsIDEsIDFdLCBuZWFyRmFyWzAuMiwgMTVdIH0sXG4gKiAgICAgICBdLFxuICogICAgIH0pO1xuICpcbiAqICAgb3IgdGhlIG1vcmUgdHJhZGl0aW9uYWwgd2F5XG4gKlxuICogICAgIHR3Z2wuc2V0VW5pZm9ybXMocHJvZ3JhbUluZm8sIHtcbiAqICAgICAgIFwibGlnaHRzWzBdLmludGVuc2l0eVwiOiA1LjAsXG4gKiAgICAgICBcImxpZ2h0c1swXS5jb2xvclwiOiBbMSwgMCwgMCwgMV0sXG4gKiAgICAgICBcImxpZ2h0c1swXS5uZWFyRmFyXCI6IFswLjEsIDEwXSxcbiAqICAgICAgIFwibGlnaHRzWzFdLmludGVuc2l0eVwiOiAyLjAsXG4gKiAgICAgICBcImxpZ2h0c1sxXS5jb2xvclwiOiBbMCwgMCwgMSwgMV0sXG4gKiAgICAgICBcImxpZ2h0c1sxXS5uZWFyRmFyXCI6IFswLjIsIDE1XSxcbiAqICAgICB9KTtcbiAqXG4gKiAgIFlvdSBjYW4gYWxzbyBzcGVjaWZ5IHBhcnRpYWwgcGF0aHNcbiAqXG4gKiAgICAgdHdnbC5zZXRVbmlmb3Jtcyhwcm9ncmFtSW5mbywge1xuICogICAgICAgJ2xpZ2h0c1sxXSc6IHsgaW50ZW5zaXR5OiA1LjAsIGNvbG9yOiBbMSwgMCwgMCwgMV0sIG5lYXJGYXJbMC4yLCAxNV0gfSxcbiAqICAgICB9KTtcbiAqXG4gKiAgIEJ1dCB5b3UgY2FuIG5vdCBzcGVjaWZ5IGxlYWYgYXJyYXkgaW5kaWNlc1xuICpcbiAqICAgICB0d2dsLnNldFVuaWZvcm1zKHByb2dyYW1JbmZvLCB7XG4gKiAgICAgICAnbGlnaHRzWzFdLm5lYXJGYXJbMV0nOiAxNSwgICAgIC8vIEJBRCEgbmVhckZhciBpcyBhIGxlYWZcbiAqICAgICAgICdsaWdodHNbMV0ubmVhckZhcic6IFswLjIsIDE1XSwgLy8gR09PRFxuICogICAgIH0pO1xuICpcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcm9ncmFtc1xuICovXG5mdW5jdGlvbiBzZXRVbmlmb3JtcyhzZXR0ZXJzLCAuLi5hcmdzKSB7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGNvbnN0IGFjdHVhbFNldHRlcnMgPSBzZXR0ZXJzLnVuaWZvcm1TZXR0ZXJzIHx8IHNldHRlcnM7XG4gIGNvbnN0IG51bUFyZ3MgPSBhcmdzLmxlbmd0aDtcbiAgZm9yIChsZXQgYU5keCA9IDA7IGFOZHggPCBudW1BcmdzOyArK2FOZHgpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSBhcmdzW2FOZHhdO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlcykpIHtcbiAgICAgIGNvbnN0IG51bVZhbHVlcyA9IHZhbHVlcy5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpaSA9IDA7IGlpIDwgbnVtVmFsdWVzOyArK2lpKSB7XG4gICAgICAgIHNldFVuaWZvcm1zKGFjdHVhbFNldHRlcnMsIHZhbHVlc1tpaV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gdmFsdWVzKSB7XG4gICAgICAgIGNvbnN0IHNldHRlciA9IGFjdHVhbFNldHRlcnNbbmFtZV07XG4gICAgICAgIGlmIChzZXR0ZXIpIHtcbiAgICAgICAgICBzZXR0ZXIodmFsdWVzW25hbWVdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFsaWFzIGZvciBgc2V0VW5pZm9ybXNgXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7KG1vZHVsZTp0d2dsLlByb2dyYW1JbmZvfE9iamVjdC48c3RyaW5nLCBmdW5jdGlvbj4pfSBzZXR0ZXJzIGEgYFByb2dyYW1JbmZvYCBhcyByZXR1cm5lZCBmcm9tIGBjcmVhdGVQcm9ncmFtSW5mb2Agb3IgdGhlIHNldHRlcnMgcmV0dXJuZWQgZnJvbVxuICogICAgICAgIGBjcmVhdGVVbmlmb3JtU2V0dGVyc2AuXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCA/Pn0gdmFsdWVzIGFuIG9iamVjdCB3aXRoIHZhbHVlcyBmb3IgdGhlXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJvZ3JhbXNcbiAqL1xuY29uc3Qgc2V0VW5pZm9ybXNBbmRCaW5kVGV4dHVyZXMgPSBzZXRVbmlmb3JtcztcblxuLyoqXG4gKiBDcmVhdGVzIHNldHRlciBmdW5jdGlvbnMgZm9yIGFsbCBhdHRyaWJ1dGVzIG9mIGEgc2hhZGVyXG4gKiBwcm9ncmFtLiBZb3UgY2FuIHBhc3MgdGhpcyB0byB7QGxpbmsgbW9kdWxlOnR3Z2wuc2V0QnVmZmVyc0FuZEF0dHJpYnV0ZXN9IHRvIHNldCBhbGwgeW91ciBidWZmZXJzIGFuZCBhdHRyaWJ1dGVzLlxuICpcbiAqIEBzZWUge0BsaW5rIG1vZHVsZTp0d2dsLnNldEF0dHJpYnV0ZXN9IGZvciBleGFtcGxlXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dCB0byB1c2UuXG4gKiBAcGFyYW0ge1dlYkdMUHJvZ3JhbX0gcHJvZ3JhbSB0aGUgcHJvZ3JhbSB0byBjcmVhdGUgc2V0dGVycyBmb3IuXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fSBhbiBvYmplY3Qgd2l0aCBhIHNldHRlciBmb3IgZWFjaCBhdHRyaWJ1dGUgYnkgbmFtZS5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcm9ncmFtc1xuICovXG5mdW5jdGlvbiBjcmVhdGVBdHRyaWJ1dGVTZXR0ZXJzKGdsLCBwcm9ncmFtKSB7XG4gIGNvbnN0IGF0dHJpYlNldHRlcnMgPSB7XG4gIH07XG5cbiAgY29uc3QgbnVtQXR0cmlicyA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgQUNUSVZFX0FUVFJJQlVURVMpO1xuICBmb3IgKGxldCBpaSA9IDA7IGlpIDwgbnVtQXR0cmliczsgKytpaSkge1xuICAgIGNvbnN0IGF0dHJpYkluZm8gPSBnbC5nZXRBY3RpdmVBdHRyaWIocHJvZ3JhbSwgaWkpO1xuICAgIGlmIChpc0J1aWx0SW4oYXR0cmliSW5mbykpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIGF0dHJpYkluZm8ubmFtZSk7XG4gICAgY29uc3QgdHlwZUluZm8gPSBhdHRyVHlwZU1hcFthdHRyaWJJbmZvLnR5cGVdO1xuICAgIGNvbnN0IHNldHRlciA9IHR5cGVJbmZvLnNldHRlcihnbCwgaW5kZXgsIHR5cGVJbmZvKTtcbiAgICBzZXR0ZXIubG9jYXRpb24gPSBpbmRleDtcbiAgICBhdHRyaWJTZXR0ZXJzW2F0dHJpYkluZm8ubmFtZV0gPSBzZXR0ZXI7XG4gIH1cblxuICByZXR1cm4gYXR0cmliU2V0dGVycztcbn1cblxuLyoqXG4gKiBTZXRzIGF0dHJpYnV0ZXMgYW5kIGJpbmRzIGJ1ZmZlcnMgKGRlcHJlY2F0ZWQuLi4gdXNlIHtAbGluayBtb2R1bGU6dHdnbC5zZXRCdWZmZXJzQW5kQXR0cmlidXRlc30pXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgY29uc3QgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW1Gcm9tU2NyaXB0cyhcbiAqICAgICAgICAgZ2wsIFtcInNvbWUtdnNcIiwgXCJzb21lLWZzXCIpO1xuICpcbiAqICAgICBjb25zdCBhdHRyaWJTZXR0ZXJzID0gY3JlYXRlQXR0cmlidXRlU2V0dGVycyhwcm9ncmFtKTtcbiAqXG4gKiAgICAgY29uc3QgcG9zaXRpb25CdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAqICAgICBjb25zdCB0ZXhjb29yZEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICpcbiAqICAgICBjb25zdCBhdHRyaWJzID0ge1xuICogICAgICAgYV9wb3NpdGlvbjoge2J1ZmZlcjogcG9zaXRpb25CdWZmZXIsIG51bUNvbXBvbmVudHM6IDN9LFxuICogICAgICAgYV90ZXhjb29yZDoge2J1ZmZlcjogdGV4Y29vcmRCdWZmZXIsIG51bUNvbXBvbmVudHM6IDJ9LFxuICogICAgIH07XG4gKlxuICogICAgIGdsLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG4gKlxuICogVGhpcyB3aWxsIGF1dG9tYXRpY2FsbHkgYmluZCB0aGUgYnVmZmVycyBBTkQgc2V0IHRoZVxuICogYXR0cmlidXRlcy5cbiAqXG4gKiAgICAgc2V0QXR0cmlidXRlcyhhdHRyaWJTZXR0ZXJzLCBhdHRyaWJzKTtcbiAqXG4gKiBQcm9wZXJ0aWVzIG9mIGF0dHJpYnMuIEZvciBlYWNoIGF0dHJpYiB5b3UgY2FuIGFkZFxuICogcHJvcGVydGllczpcbiAqXG4gKiAqICAgdHlwZTogdGhlIHR5cGUgb2YgZGF0YSBpbiB0aGUgYnVmZmVyLiBEZWZhdWx0ID0gZ2wuRkxPQVRcbiAqICogICBub3JtYWxpemU6IHdoZXRoZXIgb3Igbm90IHRvIG5vcm1hbGl6ZSB0aGUgZGF0YS4gRGVmYXVsdCA9IGZhbHNlXG4gKiAqICAgc3RyaWRlOiB0aGUgc3RyaWRlLiBEZWZhdWx0ID0gMFxuICogKiAgIG9mZnNldDogb2Zmc2V0IGludG8gdGhlIGJ1ZmZlci4gRGVmYXVsdCA9IDBcbiAqICogICBkaXZpc29yOiB0aGUgZGl2aXNvciBmb3IgaW5zdGFuY2VzLiBEZWZhdWx0ID0gdW5kZWZpbmVkXG4gKlxuICogRm9yIGV4YW1wbGUgaWYgeW91IGhhZCAzIHZhbHVlIGZsb2F0IHBvc2l0aW9ucywgMiB2YWx1ZVxuICogZmxvYXQgdGV4Y29vcmQgYW5kIDQgdmFsdWUgdWludDggY29sb3JzIHlvdSdkIHNldHVwIHlvdXJcbiAqIGF0dHJpYnMgbGlrZSB0aGlzXG4gKlxuICogICAgIGNvbnN0IGF0dHJpYnMgPSB7XG4gKiAgICAgICBhX3Bvc2l0aW9uOiB7YnVmZmVyOiBwb3NpdGlvbkJ1ZmZlciwgbnVtQ29tcG9uZW50czogM30sXG4gKiAgICAgICBhX3RleGNvb3JkOiB7YnVmZmVyOiB0ZXhjb29yZEJ1ZmZlciwgbnVtQ29tcG9uZW50czogMn0sXG4gKiAgICAgICBhX2NvbG9yOiB7XG4gKiAgICAgICAgIGJ1ZmZlcjogY29sb3JCdWZmZXIsXG4gKiAgICAgICAgIG51bUNvbXBvbmVudHM6IDQsXG4gKiAgICAgICAgIHR5cGU6IGdsLlVOU0lHTkVEX0JZVEUsXG4gKiAgICAgICAgIG5vcm1hbGl6ZTogdHJ1ZSxcbiAqICAgICAgIH0sXG4gKiAgICAgfTtcbiAqXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj59IHNldHRlcnMgQXR0cmlidXRlIHNldHRlcnMgYXMgcmV0dXJuZWQgZnJvbSBjcmVhdGVBdHRyaWJ1dGVTZXR0ZXJzXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBtb2R1bGU6dHdnbC5BdHRyaWJJbmZvPn0gYnVmZmVycyBBdHRyaWJJbmZvcyBtYXBwZWQgYnkgYXR0cmlidXRlIG5hbWUuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJvZ3JhbXNcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgbW9kdWxlOnR3Z2wuc2V0QnVmZmVyc0FuZEF0dHJpYnV0ZXN9XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKHNldHRlcnMsIGJ1ZmZlcnMpIHtcbiAgZm9yIChjb25zdCBuYW1lIGluIGJ1ZmZlcnMpIHtcbiAgICBjb25zdCBzZXR0ZXIgPSBzZXR0ZXJzW25hbWVdO1xuICAgIGlmIChzZXR0ZXIpIHtcbiAgICAgIHNldHRlcihidWZmZXJzW25hbWVdKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBTZXRzIGF0dHJpYnV0ZXMgYW5kIGJ1ZmZlcnMgaW5jbHVkaW5nIHRoZSBgRUxFTUVOVF9BUlJBWV9CVUZGRVJgIGlmIGFwcHJvcHJpYXRlXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgY29uc3QgcHJvZ3JhbUluZm8gPSBjcmVhdGVQcm9ncmFtSW5mbyhcbiAqICAgICAgICAgZ2wsIFtcInNvbWUtdnNcIiwgXCJzb21lLWZzXCIpO1xuICpcbiAqICAgICBjb25zdCBhcnJheXMgPSB7XG4gKiAgICAgICBwb3NpdGlvbjogeyBudW1Db21wb25lbnRzOiAzLCBkYXRhOiBbMCwgMCwgMCwgMTAsIDAsIDAsIDAsIDEwLCAwLCAxMCwgMTAsIDBdLCB9LFxuICogICAgICAgdGV4Y29vcmQ6IHsgbnVtQ29tcG9uZW50czogMiwgZGF0YTogWzAsIDAsIDAsIDEsIDEsIDAsIDEsIDFdLCAgICAgICAgICAgICAgICAgfSxcbiAqICAgICB9O1xuICpcbiAqICAgICBjb25zdCBidWZmZXJJbmZvID0gY3JlYXRlQnVmZmVySW5mb0Zyb21BcnJheXMoZ2wsIGFycmF5cyk7XG4gKlxuICogICAgIGdsLnVzZVByb2dyYW0ocHJvZ3JhbUluZm8ucHJvZ3JhbSk7XG4gKlxuICogVGhpcyB3aWxsIGF1dG9tYXRpY2FsbHkgYmluZCB0aGUgYnVmZmVycyBBTkQgc2V0IHRoZVxuICogYXR0cmlidXRlcy5cbiAqXG4gKiAgICAgc2V0QnVmZmVyc0FuZEF0dHJpYnV0ZXMoZ2wsIHByb2dyYW1JbmZvLCBidWZmZXJJbmZvKTtcbiAqXG4gKiBGb3IgdGhlIGV4YW1wbGUgYWJvdmUgaXQgaXMgZXF1aXZhbGVudCB0b1xuICpcbiAqICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgcG9zaXRpb25CdWZmZXIpO1xuICogICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGFfcG9zaXRpb25Mb2NhdGlvbik7XG4gKiAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihhX3Bvc2l0aW9uTG9jYXRpb24sIDMsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XG4gKiAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRleGNvb3JkQnVmZmVyKTtcbiAqICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhX3RleGNvb3JkTG9jYXRpb24pO1xuICogICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoYV90ZXhjb29yZExvY2F0aW9uLCA0LCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBBIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7KG1vZHVsZTp0d2dsLlByb2dyYW1JbmZvfE9iamVjdC48c3RyaW5nLCBmdW5jdGlvbj4pfSBzZXR0ZXJzIEEgYFByb2dyYW1JbmZvYCBhcyByZXR1cm5lZCBmcm9tIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVQcm9ncmFtSW5mb30gb3IgQXR0cmlidXRlIHNldHRlcnMgYXMgcmV0dXJuZWQgZnJvbSB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlQXR0cmlidXRlU2V0dGVyc31cbiAqIEBwYXJhbSB7KG1vZHVsZTp0d2dsLkJ1ZmZlckluZm98bW9kdWxlOnR3Z2wuVmVydGV4QXJyYXlJbmZvKX0gYnVmZmVycyBhIGBCdWZmZXJJbmZvYCBhcyByZXR1cm5lZCBmcm9tIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVCdWZmZXJJbmZvRnJvbUFycmF5c30uXG4gKiAgIG9yIGEgYFZlcnRleEFycmF5SW5mb2AgYXMgcmV0dXJuZWQgZnJvbSB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlVmVydGV4QXJyYXlJbmZvfVxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3Byb2dyYW1zXG4gKi9cbmZ1bmN0aW9uIHNldEJ1ZmZlcnNBbmRBdHRyaWJ1dGVzKGdsLCBwcm9ncmFtSW5mbywgYnVmZmVycykge1xuICBpZiAoYnVmZmVycy52ZXJ0ZXhBcnJheU9iamVjdCkge1xuICAgIGdsLmJpbmRWZXJ0ZXhBcnJheShidWZmZXJzLnZlcnRleEFycmF5T2JqZWN0KTtcbiAgfSBlbHNlIHtcbiAgICBzZXRBdHRyaWJ1dGVzKHByb2dyYW1JbmZvLmF0dHJpYlNldHRlcnMgfHwgcHJvZ3JhbUluZm8sIGJ1ZmZlcnMuYXR0cmlicyk7XG4gICAgaWYgKGJ1ZmZlcnMuaW5kaWNlcykge1xuICAgICAgZ2wuYmluZEJ1ZmZlcihFTEVNRU5UX0FSUkFZX0JVRkZFUiQxLCBidWZmZXJzLmluZGljZXMpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFByb2dyYW1JbmZvXG4gKiBAcHJvcGVydHkge1dlYkdMUHJvZ3JhbX0gcHJvZ3JhbSBBIHNoYWRlciBwcm9ncmFtXG4gKiBAcHJvcGVydHkge09iamVjdDxzdHJpbmcsIGZ1bmN0aW9uPn0gdW5pZm9ybVNldHRlcnMgb2JqZWN0IG9mIHNldHRlcnMgYXMgcmV0dXJuZWQgZnJvbSBjcmVhdGVVbmlmb3JtU2V0dGVycyxcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0PHN0cmluZywgZnVuY3Rpb24+fSBhdHRyaWJTZXR0ZXJzIG9iamVjdCBvZiBzZXR0ZXJzIGFzIHJldHVybmVkIGZyb20gY3JlYXRlQXR0cmliU2V0dGVycyxcbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOnR3Z2wuVW5pZm9ybUJsb2NrU3BlY30gW3VuaWZvcm1CbG9ja1NwZWNdIGEgdW5pZm9ybSBibG9jayBzcGVjIGZvciBtYWtpbmcgVW5pZm9ybUJsb2NrSW5mb3Mgd2l0aCBjcmVhdGVVbmlmb3JtQmxvY2tJbmZvIGV0Yy4uXG4gKiBAcHJvcGVydHkge09iamVjdDxzdHJpbmcsIG1vZHVsZTp0d2dsLlRyYW5zZm9ybUZlZWRiYWNrSW5mbz59IFt0cmFuc2Zvcm1GZWVkYmFja0luZm9dIGluZm8gZm9yIHRyYW5zZm9ybSBmZWVkYmFja3NcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIFByb2dyYW1JbmZvIGZyb20gYW4gZXhpc3RpbmcgcHJvZ3JhbS5cbiAqXG4gKiBBIFByb2dyYW1JbmZvIGNvbnRhaW5zXG4gKlxuICogICAgIHByb2dyYW1JbmZvID0ge1xuICogICAgICAgIHByb2dyYW06IFdlYkdMUHJvZ3JhbSxcbiAqICAgICAgICB1bmlmb3JtU2V0dGVyczogb2JqZWN0IG9mIHNldHRlcnMgYXMgcmV0dXJuZWQgZnJvbSBjcmVhdGVVbmlmb3JtU2V0dGVycyxcbiAqICAgICAgICBhdHRyaWJTZXR0ZXJzOiBvYmplY3Qgb2Ygc2V0dGVycyBhcyByZXR1cm5lZCBmcm9tIGNyZWF0ZUF0dHJpYlNldHRlcnMsXG4gKiAgICAgfVxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiAgICAgICAgdG8gdXNlLlxuICogQHBhcmFtIHtXZWJHTFByb2dyYW19IHByb2dyYW0gYW4gZXhpc3RpbmcgV2ViR0xQcm9ncmFtLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wuUHJvZ3JhbUluZm99IFRoZSBjcmVhdGVkIFByb2dyYW1JbmZvLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3Byb2dyYW1zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVByb2dyYW1JbmZvRnJvbVByb2dyYW0oZ2wsIHByb2dyYW0pIHtcbiAgY29uc3QgdW5pZm9ybVNldHRlcnMgPSBjcmVhdGVVbmlmb3JtU2V0dGVycyhnbCwgcHJvZ3JhbSk7XG4gIGNvbnN0IGF0dHJpYlNldHRlcnMgPSBjcmVhdGVBdHRyaWJ1dGVTZXR0ZXJzKGdsLCBwcm9ncmFtKTtcbiAgY29uc3QgcHJvZ3JhbUluZm8gPSB7XG4gICAgcHJvZ3JhbSxcbiAgICB1bmlmb3JtU2V0dGVycyxcbiAgICBhdHRyaWJTZXR0ZXJzLFxuICB9O1xuXG4gIGlmIChpc1dlYkdMMihnbCkpIHtcbiAgICBwcm9ncmFtSW5mby51bmlmb3JtQmxvY2tTcGVjID0gY3JlYXRlVW5pZm9ybUJsb2NrU3BlY0Zyb21Qcm9ncmFtKGdsLCBwcm9ncmFtKTtcbiAgICBwcm9ncmFtSW5mby50cmFuc2Zvcm1GZWVkYmFja0luZm8gPSBjcmVhdGVUcmFuc2Zvcm1GZWVkYmFja0luZm8oZ2wsIHByb2dyYW0pO1xuICB9XG5cbiAgcmV0dXJuIHByb2dyYW1JbmZvO1xufVxuXG5jb25zdCBub3RJZFJFID0gL1xcc3x7fH18Oy87XG5cbi8qKlxuICogQ3JlYXRlcyBhIFByb2dyYW1JbmZvIGZyb20gMiBzb3VyY2VzLlxuICpcbiAqIEEgUHJvZ3JhbUluZm8gY29udGFpbnNcbiAqXG4gKiAgICAgcHJvZ3JhbUluZm8gPSB7XG4gKiAgICAgICAgcHJvZ3JhbTogV2ViR0xQcm9ncmFtLFxuICogICAgICAgIHVuaWZvcm1TZXR0ZXJzOiBvYmplY3Qgb2Ygc2V0dGVycyBhcyByZXR1cm5lZCBmcm9tIGNyZWF0ZVVuaWZvcm1TZXR0ZXJzLFxuICogICAgICAgIGF0dHJpYlNldHRlcnM6IG9iamVjdCBvZiBzZXR0ZXJzIGFzIHJldHVybmVkIGZyb20gY3JlYXRlQXR0cmliU2V0dGVycyxcbiAqICAgICB9XG4gKlxuICogTk9URTogVGhlcmUgYXJlIDQgc2lnbmF0dXJlcyBmb3IgdGhpcyBmdW5jdGlvblxuICpcbiAqICAgICB0d2dsLmNyZWF0ZVByb2dyYW1JbmZvKGdsLCBbdnMsIGZzXSwgb3B0aW9ucyk7XG4gKiAgICAgdHdnbC5jcmVhdGVQcm9ncmFtSW5mbyhnbCwgW3ZzLCBmc10sIG9wdF9lcnJGdW5jKTtcbiAqICAgICB0d2dsLmNyZWF0ZVByb2dyYW1JbmZvKGdsLCBbdnMsIGZzXSwgb3B0X2F0dHJpYnMsIG9wdF9lcnJGdW5jKTtcbiAqICAgICB0d2dsLmNyZWF0ZVByb2dyYW1JbmZvKGdsLCBbdnMsIGZzXSwgb3B0X2F0dHJpYnMsIG9wdF9sb2NhdGlvbnMsIG9wdF9lcnJGdW5jKTtcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogICAgICAgIHRvIHVzZS5cbiAqIEBwYXJhbSB7c3RyaW5nW119IHNoYWRlclNvdXJjZXMgQXJyYXkgb2Ygc291cmNlcyBmb3IgdGhlXG4gKiAgICAgICAgc2hhZGVycyBvciBpZHMuIFRoZSBmaXJzdCBpcyBhc3N1bWVkIHRvIGJlIHRoZSB2ZXJ0ZXggc2hhZGVyLFxuICogICAgICAgIHRoZSBzZWNvbmQgdGhlIGZyYWdtZW50IHNoYWRlci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuUHJvZ3JhbU9wdGlvbnN8c3RyaW5nW118bW9kdWxlOnR3Z2wuRXJyb3JDYWxsYmFja30gW29wdF9hdHRyaWJzXSBPcHRpb25zIGZvciB0aGUgcHJvZ3JhbSBvciBhbiBhcnJheSBvZiBhdHRyaWJzIG5hbWVzIG9yIGFuIGVycm9yIGNhbGxiYWNrLiBMb2NhdGlvbnMgd2lsbCBiZSBhc3NpZ25lZCBieSBpbmRleCBpZiBub3QgcGFzc2VkIGluXG4gKiBAcGFyYW0ge251bWJlcltdfG1vZHVsZTp0d2dsLkVycm9yQ2FsbGJhY2t9IFtvcHRfbG9jYXRpb25zXSBUaGUgbG9jYXRpb25zIGZvciB0aGUuIEEgcGFyYWxsZWwgYXJyYXkgdG8gb3B0X2F0dHJpYnMgbGV0dGluZyB5b3UgYXNzaWduIGxvY2F0aW9ucyBvciBhbiBlcnJvciBjYWxsYmFjay5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuRXJyb3JDYWxsYmFja30gW29wdF9lcnJvckNhbGxiYWNrXSBjYWxsYmFjayBmb3IgZXJyb3JzLiBCeSBkZWZhdWx0IGl0IGp1c3QgcHJpbnRzIGFuIGVycm9yIHRvIHRoZSBjb25zb2xlXG4gKiAgICAgICAgb24gZXJyb3IuIElmIHlvdSB3YW50IHNvbWV0aGluZyBlbHNlIHBhc3MgYW4gY2FsbGJhY2suIEl0J3MgcGFzc2VkIGFuIGVycm9yIG1lc3NhZ2UuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC5Qcm9ncmFtSW5mbz99IFRoZSBjcmVhdGVkIFByb2dyYW1JbmZvIG9yIG51bGwgaWYgaXQgZmFpbGVkIHRvIGxpbmsgb3IgY29tcGlsZVxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3Byb2dyYW1zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVByb2dyYW1JbmZvKFxuICAgIGdsLCBzaGFkZXJTb3VyY2VzLCBvcHRfYXR0cmlicywgb3B0X2xvY2F0aW9ucywgb3B0X2Vycm9yQ2FsbGJhY2spIHtcbiAgY29uc3QgcHJvZ09wdGlvbnMgPSBnZXRQcm9ncmFtT3B0aW9ucyhvcHRfYXR0cmlicywgb3B0X2xvY2F0aW9ucywgb3B0X2Vycm9yQ2FsbGJhY2spO1xuICBjb25zdCBlcnJvcnMgPSBbXTtcbiAgc2hhZGVyU291cmNlcyA9IHNoYWRlclNvdXJjZXMubWFwKGZ1bmN0aW9uKHNvdXJjZSkge1xuICAgIC8vIExldHMgYXNzdW1lIGlmIHRoZXJlIGlzIG5vIFxcbiBpdCdzIGFuIGlkXG4gICAgaWYgKCFub3RJZFJFLnRlc3Qoc291cmNlKSkge1xuICAgICAgY29uc3Qgc2NyaXB0ID0gZ2V0RWxlbWVudEJ5SWQoc291cmNlKTtcbiAgICAgIGlmICghc2NyaXB0KSB7XG4gICAgICAgIGNvbnN0IGVyciA9IGBubyBlbGVtZW50IHdpdGggaWQ6ICR7c291cmNlfWA7XG4gICAgICAgIHByb2dPcHRpb25zLmVycm9yQ2FsbGJhY2soZXJyKTtcbiAgICAgICAgZXJyb3JzLnB1c2goZXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNvdXJjZSA9IHNjcmlwdC50ZXh0O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc291cmNlO1xuICB9KTtcblxuICBpZiAoZXJyb3JzLmxlbmd0aCkge1xuICAgIHJldHVybiByZXBvcnRFcnJvcihwcm9nT3B0aW9ucywgJycpO1xuICB9XG5cbiAgY29uc3Qgb3JpZ0NhbGxiYWNrID0gcHJvZ09wdGlvbnMuY2FsbGJhY2s7XG4gIGlmIChvcmlnQ2FsbGJhY2spIHtcbiAgICBwcm9nT3B0aW9ucy5jYWxsYmFjayA9IChlcnIsIHByb2dyYW0pID0+IHtcbiAgICAgIG9yaWdDYWxsYmFjayhlcnIsIGVyciA/IHVuZGVmaW5lZCA6IGNyZWF0ZVByb2dyYW1JbmZvRnJvbVByb2dyYW0oZ2wsIHByb2dyYW0pKTtcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW1Gcm9tU291cmNlcyhnbCwgc2hhZGVyU291cmNlcywgcHJvZ09wdGlvbnMpO1xuICBpZiAoIXByb2dyYW0pIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVQcm9ncmFtSW5mb0Zyb21Qcm9ncmFtKGdsLCBwcm9ncmFtKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tBbGxQcm9ncmFtcyhnbCwgcHJvZ3JhbXMsIHByb2dyYW1TcGVjcywgbm9EZWxldGVTaGFkZXJzU2V0LCBwcm9ncmFtT3B0aW9ucykge1xuICAvLyBjaGVjayBlcnJvcnMgZm9yIGV2ZXJ5dGhpbmcuXG4gIGZvciAoY29uc3QgW25hbWUsIHByb2dyYW1dIG9mIE9iamVjdC5lbnRyaWVzKHByb2dyYW1zKSkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4ucHJvZ3JhbU9wdGlvbnN9O1xuICAgIGNvbnN0IHNwZWMgPSBwcm9ncmFtU3BlY3NbbmFtZV07XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHNwZWMpKSB7XG4gICAgICBPYmplY3QuYXNzaWduKG9wdGlvbnMsIHNwZWMpO1xuICAgIH1cbiAgICBjb25zdCBlcnJvcnMgPSBnZXRQcm9ncmFtRXJyb3JzKGdsLCBwcm9ncmFtLCBvcHRpb25zLmVycm9yQ2FsbGJhY2spO1xuICAgIGlmIChlcnJvcnMpIHtcbiAgICAgIC8vIGRlbGV0ZSBldmVyeXRoaW5nIHdlIGNyZWF0ZWRcbiAgICAgIGZvciAoY29uc3QgcHJvZ3JhbSBvZiBPYmplY3QudmFsdWVzKHByb2dyYW1zKSkge1xuICAgICAgICBjb25zdCBzaGFkZXJzID0gZ2wuZ2V0QXR0YWNoZWRTaGFkZXJzKHByb2dyYW0pO1xuICAgICAgICBnbC5kZWxldGVQcm9ncmFtKHByb2dyYW0pO1xuICAgICAgICBmb3IgKGNvbnN0IHNoYWRlciBvZiBzaGFkZXJzKSB7XG4gICAgICAgICAgLy8gRG9uJ3QgZGVsZXRlIGl0IGlmIHdlIGRpZG4ndCBjcmVhdGUgaXQuXG4gICAgICAgICAgaWYgKCFub0RlbGV0ZVNoYWRlcnNTZXQuaGFzKHNoYWRlcikpIHtcbiAgICAgICAgICAgIGdsLmRlbGV0ZVNoYWRlcihzaGFkZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVycm9ycztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgbXVsdGlwbGUgcHJvZ3JhbXNcbiAqXG4gKiBOb3RlOiB0aGUgcmVhc29uIHRoaXMgZnVuY3Rpb24gZXhpc3RzIGlzIGJlY2F1c2UgdGhlIGZhc3Rlc3Qgd2F5IHRvIGNyZWF0ZSBtdWx0aXBsZVxuICogcHJvZ3JhbXMgaW4gV2ViR0wgaXMgdG8gY3JlYXRlIGFuZCBjb21waWxlIGFsbCBzaGFkZXJzIGFuZCBsaW5rIGFsbCBwcm9ncmFtcyBhbmQgb25seVxuICogYWZ0ZXJ3YXJkcyBjaGVjayBpZiB0aGV5IHN1Y2NlZWRlZC4gSW4gdGhhdCB3YXksIGdpdmluZyBhbGwgeW91ciBzaGFkZXJzXG4gKlxuICogQHNlZSB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlUHJvZ3JhbX1cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICBjb25zdCBwcm9ncmFtcyA9IHR3Z2wuY3JlYXRlUHJvZ3JhbXMoZ2wsIHtcbiAqICAgICAgIGxhbWJlcnQ6IFtsYW1iZXJ0VlMsIGxhbWJlcnRGU10sXG4gKiAgICAgICBwaG9uZzogW3Bob25nVlMsIHBob25lRlNdLFxuICogICAgICAgcGFydGljbGVzOiB7XG4gKiAgICAgICAgIHNoYWRlcnM6IFtwYXJ0aWNsZXNWUywgcGFydGljbGVzRlNdLFxuICogICAgICAgICB0cmFuc2Zvcm1GZWVkYmFja1ZhcnlpbmdzOiBbJ3Bvc2l0aW9uJywgJ3ZlbG9jaXR5J10sXG4gKiAgICAgICB9LFxuICogICAgIH0pO1xuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBtb2R1bGU6dHdnbC5Qcm9ncmFtU3BlYz59IHByb2dyYW1TcGVjcyBBbiBvYmplY3Qgb2YgUHJvZ3JhbVNwZWNzLCBvbmUgcGVyIHByb2dyYW0uXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlByb2dyYW1PcHRpb25zfSBbcHJvZ3JhbU9wdGlvbnNdIG9wdGlvbnMgdG8gYXBwbHkgdG8gYWxsIHByb2dyYW1zXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgV2ViR0xQcm9ncmFtPj99IHRoZSBjcmVhdGVkIHByb2dyYW1JbmZvcyBieSBuYW1lXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVByb2dyYW1zKGdsLCBwcm9ncmFtU3BlY3MsIHByb2dyYW1PcHRpb25zID0ge30pIHtcbiAgLy8gUmVtZW1iZXIgZXhpc3Rpbmcgc2hhZGVycyBzbyB0aGF0IGlmIHRoZXJlIGlzIGFuIGVycm9yIHdlIGRvbid0IGRlbGV0ZSB0aGVtXG4gIGNvbnN0IG5vRGVsZXRlU2hhZGVyc1NldCA9IG5ldyBTZXQoKTtcblxuICAvLyBjb21waWxlIGFuZCBsaW5rIGV2ZXJ5dGhpbmdcbiAgY29uc3QgcHJvZ3JhbXMgPSBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMocHJvZ3JhbVNwZWNzKS5tYXAoKFtuYW1lLCBzcGVjXSkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4ucHJvZ3JhbU9wdGlvbnN9O1xuICAgIGNvbnN0IHNoYWRlcnMgPSBBcnJheS5pc0FycmF5KHNwZWMpID8gc3BlYyA6IHNwZWMuc2hhZGVycztcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc3BlYykpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ob3B0aW9ucywgc3BlYyk7XG4gICAgfVxuICAgIHNoYWRlcnMuZm9yRWFjaChub0RlbGV0ZVNoYWRlcnNTZXQuYWRkLCBub0RlbGV0ZVNoYWRlcnNTZXQpO1xuICAgIHJldHVybiBbbmFtZSwgY3JlYXRlUHJvZ3JhbU5vQ2hlY2soZ2wsIHNoYWRlcnMsIG9wdGlvbnMpXTtcbiAgfSkpO1xuXG4gIGlmIChwcm9ncmFtT3B0aW9ucy5jYWxsYmFjaykge1xuICAgIHdhaXRGb3JBbGxQcm9ncmFtc0xpbmtDb21wbGV0aW9uQXN5bmMoZ2wsIHByb2dyYW1zKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IGNoZWNrQWxsUHJvZ3JhbXMoZ2wsIHByb2dyYW1zLCBwcm9ncmFtU3BlY3MsIG5vRGVsZXRlU2hhZGVyc1NldCwgcHJvZ3JhbU9wdGlvbnMpO1xuICAgICAgcHJvZ3JhbU9wdGlvbnMuY2FsbGJhY2soZXJyb3JzLCBlcnJvcnMgPyB1bmRlZmluZWQgOiBwcm9ncmFtcyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGNvbnN0IGVycm9ycyA9IGNoZWNrQWxsUHJvZ3JhbXMoZ2wsIHByb2dyYW1zLCBwcm9ncmFtU3BlY3MsIG5vRGVsZXRlU2hhZGVyc1NldCwgcHJvZ3JhbU9wdGlvbnMpO1xuICByZXR1cm4gZXJyb3JzID8gdW5kZWZpbmVkIDogcHJvZ3JhbXM7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBtdWx0aXBsZSBwcm9ncmFtSW5mb3NcbiAqXG4gKiBOb3RlOiB0aGUgcmVhc29uIHRoaXMgZnVuY3Rpb24gZXhpc3RzIGlzIGJlY2F1c2UgdGhlIGZhc3Rlc3Qgd2F5IHRvIGNyZWF0ZSBtdWx0aXBsZVxuICogcHJvZ3JhbXMgaW4gV2ViR0wgaXMgdG8gY3JlYXRlIGFuZCBjb21waWxlIGFsbCBzaGFkZXJzIGFuZCBsaW5rIGFsbCBwcm9ncmFtcyBhbmQgb25seVxuICogYWZ0ZXJ3YXJkcyBjaGVjayBpZiB0aGV5IHN1Y2NlZWRlZC4gSW4gdGhhdCB3YXksIGdpdmluZyBhbGwgeW91ciBzaGFkZXJzXG4gKlxuICogQHNlZSB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlUHJvZ3JhbUluZm99XG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgIGNvbnN0IHByb2dyYW1JbmZvcyA9IHR3Z2wuY3JlYXRlUHJvZ3JhbUluZm9zKGdsLCB7XG4gKiAgICAgICBsYW1iZXJ0OiBbbGFtYmVydFZTLCBsYW1iZXJ0RlNdLFxuICogICAgICAgcGhvbmc6IFtwaG9uZ1ZTLCBwaG9uZUZTXSxcbiAqICAgICAgIHBhcnRpY2xlczoge1xuICogICAgICAgICBzaGFkZXJzOiBbcGFydGljbGVzVlMsIHBhcnRpY2xlc0ZTXSxcbiAqICAgICAgICAgdHJhbnNmb3JtRmVlZGJhY2tWYXJ5aW5nczogWydwb3NpdGlvbicsICd2ZWxvY2l0eSddLFxuICogICAgICAgfSxcbiAqICAgICB9KTtcbiAqXG4gKiBvclxuICpcbiAqICAgICBjb25zdCB7bGFtYmVydCwgcGhvbmcsIHBhcnRpY2xlc30gPSB0d2dsLmNyZWF0ZVByb2dyYW1JbmZvcyhnbCwge1xuICogICAgICAgbGFtYmVydDogW2xhbWJlcnRWUywgbGFtYmVydEZTXSxcbiAqICAgICAgIHBob25nOiBbcGhvbmdWUywgcGhvbmVGU10sXG4gKiAgICAgICBwYXJ0aWNsZXM6IHtcbiAqICAgICAgICAgc2hhZGVyczogW3BhcnRpY2xlc1ZTLCBwYXJ0aWNsZXNGU10sXG4gKiAgICAgICAgIHRyYW5zZm9ybUZlZWRiYWNrVmFyeWluZ3M6IFsncG9zaXRpb24nLCAndmVsb2NpdHknXSxcbiAqICAgICAgIH0sXG4gKiAgICAgfSk7XG4gKlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBtb2R1bGU6dHdnbC5Qcm9ncmFtU3BlYz59IHByb2dyYW1TcGVjcyBBbiBvYmplY3Qgb2YgUHJvZ3JhbVNwZWNzLCBvbmUgcGVyIHByb2dyYW0uXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlByb2dyYW1PcHRpb25zfSBbcHJvZ3JhbU9wdGlvbnNdIG9wdGlvbnMgdG8gYXBwbHkgdG8gYWxsIHByb2dyYW1zXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgbW9kdWxlOnR3Z2wuUHJvZ3JhbUluZm8+P30gdGhlIGNyZWF0ZWQgcHJvZ3JhbUluZm9zIGJ5IG5hbWVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbUluZm9zKGdsLCBwcm9ncmFtU3BlY3MsIHByb2dyYW1PcHRpb25zKSB7XG4gIHByb2dyYW1PcHRpb25zID0gZ2V0UHJvZ3JhbU9wdGlvbnMocHJvZ3JhbU9wdGlvbnMpO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByb2dyYW1JbmZvc0ZvclByb2dyYW1zKGdsLCBwcm9ncmFtcykge1xuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMocHJvZ3JhbXMpLm1hcCgoW25hbWUsIHByb2dyYW1dKSA9PlxuICAgICAgW25hbWUsIGNyZWF0ZVByb2dyYW1JbmZvRnJvbVByb2dyYW0oZ2wsIHByb2dyYW0pXVxuICAgICkpO1xuICB9XG5cbiAgY29uc3Qgb3JpZ0NhbGxiYWNrID0gcHJvZ3JhbU9wdGlvbnMuY2FsbGJhY2s7XG4gIGlmIChvcmlnQ2FsbGJhY2spIHtcbiAgICBwcm9ncmFtT3B0aW9ucy5jYWxsYmFjayA9IChlcnIsIHByb2dyYW1zKSA9PiB7XG4gICAgICBvcmlnQ2FsbGJhY2soZXJyLCBlcnIgPyB1bmRlZmluZWQgOiBjcmVhdGVQcm9ncmFtSW5mb3NGb3JQcm9ncmFtcyhnbCwgcHJvZ3JhbXMpKTtcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgcHJvZ3JhbXMgPSBjcmVhdGVQcm9ncmFtcyhnbCwgcHJvZ3JhbVNwZWNzLCBwcm9ncmFtT3B0aW9ucyk7XG4gIGlmIChvcmlnQ2FsbGJhY2sgfHwgIXByb2dyYW1zKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVQcm9ncmFtSW5mb3NGb3JQcm9ncmFtcyhnbCwgcHJvZ3JhbXMpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgbXVsdGlwbGUgcHJvZ3JhbXMgYXN5bmNocm9ub3VzbHlcbiAqXG4gKiBAc2VlIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVQcm9ncmFtQXN5bmN9XG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgY29uc3QgcHJvZ3JhbXMgPSBhd2FpdCB0d2dsLmNyZWF0ZVByb2dyYW1zQXN5bmMoZ2wsIHtcbiAqICAgICAgIGxhbWJlcnQ6IFtsYW1iZXJ0VlMsIGxhbWJlcnRGU10sXG4gKiAgICAgICBwaG9uZzogW3Bob25nVlMsIHBob25lRlNdLFxuICogICAgICAgcGFydGljbGVzOiB7XG4gKiAgICAgICAgIHNoYWRlcnM6IFtwYXJ0aWNsZXNWUywgcGFydGljbGVzRlNdLFxuICogICAgICAgICB0cmFuc2Zvcm1GZWVkYmFja1ZhcnlpbmdzOiBbJ3Bvc2l0aW9uJywgJ3ZlbG9jaXR5J10sXG4gKiAgICAgICB9LFxuICogICAgIH0pO1xuICpcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIG1vZHVsZTp0d2dsLlByb2dyYW1TcGVjPn0gcHJvZ3JhbVNwZWNzIEFuIG9iamVjdCBvZiBQcm9ncmFtU3BlY3MsIG9uZSBwZXIgcHJvZ3JhbS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuUHJvZ3JhbU9wdGlvbnN9IFtwcm9ncmFtT3B0aW9uc10gb3B0aW9ucyB0byBhcHBseSB0byBhbGwgcHJvZ3JhbXNcbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBXZWJHTFByb2dyYW0+P30gdGhlIGNyZWF0ZWQgcHJvZ3JhbUluZm9zIGJ5IG5hbWVcbiAqL1xuY29uc3QgY3JlYXRlUHJvZ3JhbXNBc3luYyA9IHdyYXBDYWxsYmFja0ZuVG9Bc3luY0ZuKGNyZWF0ZVByb2dyYW1zKTtcblxuLyoqXG4gKiBDcmVhdGVzIG11bHRpcGxlIHByb2dyYW1JbmZvcyBhc3luY2hyb25vdXNseVxuICpcbiAqIEBzZWUge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZVByb2dyYW1JbmZvQXN5bmN9XG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgY29uc3QgcHJvZ3JhbUluZm9zID0gYXdhaXQgdHdnbC5jcmVhdGVQcm9ncmFtSW5mb3NBc3luYyhnbCwge1xuICogICAgICAgbGFtYmVydDogW2xhbWJlcnRWUywgbGFtYmVydEZTXSxcbiAqICAgICAgIHBob25nOiBbcGhvbmdWUywgcGhvbmVGU10sXG4gKiAgICAgICBwYXJ0aWNsZXM6IHtcbiAqICAgICAgICAgc2hhZGVyczogW3BhcnRpY2xlc1ZTLCBwYXJ0aWNsZXNGU10sXG4gKiAgICAgICAgIHRyYW5zZm9ybUZlZWRiYWNrVmFyeWluZ3M6IFsncG9zaXRpb24nLCAndmVsb2NpdHknXSxcbiAqICAgICAgIH0sXG4gKiAgICAgfSk7XG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgdGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgbW9kdWxlOnR3Z2wuUHJvZ3JhbVNwZWM+fSBwcm9ncmFtU3BlY3MgQW4gb2JqZWN0IG9mIFByb2dyYW1TcGVjcywgb25lIHBlciBwcm9ncmFtLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5Qcm9ncmFtT3B0aW9uc30gW3Byb2dyYW1PcHRpb25zXSBvcHRpb25zIHRvIGFwcGx5IHRvIGFsbCBwcm9ncmFtc1xuICogQHJldHVybiB7UHJvbWlzZTxPYmplY3QuPHN0cmluZywgbW9kdWxlOnR3Z2wuUHJvZ3JhbUluZm8+Pn0gdGhlIGNyZWF0ZWQgcHJvZ3JhbUluZm9zIGJ5IG5hbWVcbiAqL1xuY29uc3QgY3JlYXRlUHJvZ3JhbUluZm9zQXN5bmMgPSB3cmFwQ2FsbGJhY2tGblRvQXN5bmNGbihjcmVhdGVQcm9ncmFtSW5mb3MpO1xuXG52YXIgcHJvZ3JhbXMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgY3JlYXRlQXR0cmlidXRlU2V0dGVyczogY3JlYXRlQXR0cmlidXRlU2V0dGVycyxcbiAgY3JlYXRlUHJvZ3JhbTogY3JlYXRlUHJvZ3JhbSxcbiAgY3JlYXRlUHJvZ3JhbUFzeW5jOiBjcmVhdGVQcm9ncmFtQXN5bmMsXG4gIGNyZWF0ZVByb2dyYW1zOiBjcmVhdGVQcm9ncmFtcyxcbiAgY3JlYXRlUHJvZ3JhbXNBc3luYzogY3JlYXRlUHJvZ3JhbXNBc3luYyxcbiAgY3JlYXRlUHJvZ3JhbUZyb21TY3JpcHRzOiBjcmVhdGVQcm9ncmFtRnJvbVNjcmlwdHMsXG4gIGNyZWF0ZVByb2dyYW1Gcm9tU291cmNlczogY3JlYXRlUHJvZ3JhbUZyb21Tb3VyY2VzLFxuICBjcmVhdGVQcm9ncmFtSW5mbzogY3JlYXRlUHJvZ3JhbUluZm8sXG4gIGNyZWF0ZVByb2dyYW1JbmZvQXN5bmM6IGNyZWF0ZVByb2dyYW1JbmZvQXN5bmMsXG4gIGNyZWF0ZVByb2dyYW1JbmZvczogY3JlYXRlUHJvZ3JhbUluZm9zLFxuICBjcmVhdGVQcm9ncmFtSW5mb3NBc3luYzogY3JlYXRlUHJvZ3JhbUluZm9zQXN5bmMsXG4gIGNyZWF0ZVByb2dyYW1JbmZvRnJvbVByb2dyYW06IGNyZWF0ZVByb2dyYW1JbmZvRnJvbVByb2dyYW0sXG4gIGNyZWF0ZVVuaWZvcm1TZXR0ZXJzOiBjcmVhdGVVbmlmb3JtU2V0dGVycyxcbiAgY3JlYXRlVW5pZm9ybUJsb2NrU3BlY0Zyb21Qcm9ncmFtOiBjcmVhdGVVbmlmb3JtQmxvY2tTcGVjRnJvbVByb2dyYW0sXG4gIGNyZWF0ZVVuaWZvcm1CbG9ja0luZm9Gcm9tUHJvZ3JhbTogY3JlYXRlVW5pZm9ybUJsb2NrSW5mb0Zyb21Qcm9ncmFtLFxuICBjcmVhdGVVbmlmb3JtQmxvY2tJbmZvOiBjcmVhdGVVbmlmb3JtQmxvY2tJbmZvLFxuICBjcmVhdGVUcmFuc2Zvcm1GZWVkYmFjazogY3JlYXRlVHJhbnNmb3JtRmVlZGJhY2ssXG4gIGNyZWF0ZVRyYW5zZm9ybUZlZWRiYWNrSW5mbzogY3JlYXRlVHJhbnNmb3JtRmVlZGJhY2tJbmZvLFxuICBiaW5kVHJhbnNmb3JtRmVlZGJhY2tJbmZvOiBiaW5kVHJhbnNmb3JtRmVlZGJhY2tJbmZvLFxuICBzZXRBdHRyaWJ1dGVzOiBzZXRBdHRyaWJ1dGVzLFxuICBzZXRCdWZmZXJzQW5kQXR0cmlidXRlczogc2V0QnVmZmVyc0FuZEF0dHJpYnV0ZXMsXG4gIHNldFVuaWZvcm1zOiBzZXRVbmlmb3JtcyxcbiAgc2V0VW5pZm9ybXNBbmRCaW5kVGV4dHVyZXM6IHNldFVuaWZvcm1zQW5kQmluZFRleHR1cmVzLFxuICBzZXRVbmlmb3JtQmxvY2s6IHNldFVuaWZvcm1CbG9jayxcbiAgc2V0QmxvY2tVbmlmb3Jtczogc2V0QmxvY2tVbmlmb3JtcyxcbiAgYmluZFVuaWZvcm1CbG9jazogYmluZFVuaWZvcm1CbG9ja1xufSk7XG5cbi8qXG4gKiBDb3B5cmlnaHQgMjAxOSBHcmVnZyBUYXZhcmVzXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbiAqIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSxcbiAqIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb25cbiAqIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLFxuICogYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4gKiBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTFxuICogVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSXG4gKiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuY29uc3QgVFJJQU5HTEVTICAgICAgICAgICAgICAgICAgICAgID0gMHgwMDA0O1xuY29uc3QgVU5TSUdORURfU0hPUlQgICAgICAgICAgICAgICAgID0gMHgxNDAzO1xuXG4vKipcbiAqIERyYXdpbmcgcmVsYXRlZCBmdW5jdGlvbnNcbiAqXG4gKiBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB0aGV5IGFyZSBhdmFpbGFibGUgYXQgYm90aCBgdHdnbC5kcmF3YCBhbmQgYHR3Z2xgXG4gKiBpdHNlbGZcbiAqXG4gKiBTZWUge0BsaW5rIG1vZHVsZTp0d2dsfSBmb3IgY29yZSBmdW5jdGlvbnNcbiAqXG4gKiBAbW9kdWxlIHR3Z2wvZHJhd1xuICovXG5cbi8qKlxuICogQ2FsbHMgYGdsLmRyYXdFbGVtZW50c2Agb3IgYGdsLmRyYXdBcnJheXNgLCB3aGljaGV2ZXIgaXMgYXBwcm9wcmlhdGVcbiAqXG4gKiBub3JtYWxseSB5b3UnZCBjYWxsIGBnbC5kcmF3RWxlbWVudHNgIG9yIGBnbC5kcmF3QXJyYXlzYCB5b3Vyc2VsZlxuICogYnV0IGNhbGxpbmcgdGhpcyBtZWFucyBpZiB5b3Ugc3dpdGNoIGZyb20gaW5kZXhlZCBkYXRhIHRvIG5vbi1pbmRleGVkXG4gKiBkYXRhIHlvdSBkb24ndCBoYXZlIHRvIHJlbWVtYmVyIHRvIHVwZGF0ZSB5b3VyIGRyYXcgY2FsbC5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgQSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7KG1vZHVsZTp0d2dsLkJ1ZmZlckluZm98bW9kdWxlOnR3Z2wuVmVydGV4QXJyYXlJbmZvKX0gYnVmZmVySW5mbyBBIEJ1ZmZlckluZm8gYXMgcmV0dXJuZWQgZnJvbSB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlQnVmZmVySW5mb0Zyb21BcnJheXN9IG9yXG4gKiAgIGEgVmVydGV4QXJyYXlJbmZvIGFzIHJldHVybmVkIGZyb20ge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZVZlcnRleEFycmF5SW5mb31cbiAqIEBwYXJhbSB7bnVtYmVyfSBbdHlwZV0gZWcgKGdsLlRSSUFOR0xFUywgZ2wuTElORVMsIGdsLlBPSU5UUywgZ2wuVFJJQU5HTEVfU1RSSVAsIC4uLikuIERlZmF1bHRzIHRvIGBnbC5UUklBTkdMRVNgXG4gKiBAcGFyYW0ge251bWJlcn0gW2NvdW50XSBBbiBvcHRpb25hbCBjb3VudC4gRGVmYXVsdHMgdG8gYnVmZmVySW5mby5udW1FbGVtZW50c1xuICogQHBhcmFtIHtudW1iZXJ9IFtvZmZzZXRdIEFuIG9wdGlvbmFsIG9mZnNldC4gRGVmYXVsdHMgdG8gMC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbaW5zdGFuY2VDb3VudF0gQW4gb3B0aW9uYWwgaW5zdGFuY2VDb3VudC4gaWYgc2V0IHRoZW4gYGRyYXdBcnJheXNJbnN0YW5jZWRgIG9yIGBkcmF3RWxlbWVudHNJbnN0YW5jZWRgIHdpbGwgYmUgY2FsbGVkXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvZHJhd1xuICovXG5mdW5jdGlvbiBkcmF3QnVmZmVySW5mbyhnbCwgYnVmZmVySW5mbywgdHlwZSwgY291bnQsIG9mZnNldCwgaW5zdGFuY2VDb3VudCkge1xuICB0eXBlID0gdHlwZSA9PT0gdW5kZWZpbmVkID8gVFJJQU5HTEVTIDogdHlwZTtcbiAgY29uc3QgaW5kaWNlcyA9IGJ1ZmZlckluZm8uaW5kaWNlcztcbiAgY29uc3QgZWxlbWVudFR5cGUgPSBidWZmZXJJbmZvLmVsZW1lbnRUeXBlO1xuICBjb25zdCBudW1FbGVtZW50cyA9IGNvdW50ID09PSB1bmRlZmluZWQgPyBidWZmZXJJbmZvLm51bUVsZW1lbnRzIDogY291bnQ7XG4gIG9mZnNldCA9IG9mZnNldCA9PT0gdW5kZWZpbmVkID8gMCA6IG9mZnNldDtcbiAgaWYgKGVsZW1lbnRUeXBlIHx8IGluZGljZXMpIHtcbiAgICBpZiAoaW5zdGFuY2VDb3VudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBnbC5kcmF3RWxlbWVudHNJbnN0YW5jZWQodHlwZSwgbnVtRWxlbWVudHMsIGVsZW1lbnRUeXBlID09PSB1bmRlZmluZWQgPyBVTlNJR05FRF9TSE9SVCA6IGJ1ZmZlckluZm8uZWxlbWVudFR5cGUsIG9mZnNldCwgaW5zdGFuY2VDb3VudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdsLmRyYXdFbGVtZW50cyh0eXBlLCBudW1FbGVtZW50cywgZWxlbWVudFR5cGUgPT09IHVuZGVmaW5lZCA/IFVOU0lHTkVEX1NIT1JUIDogYnVmZmVySW5mby5lbGVtZW50VHlwZSwgb2Zmc2V0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGluc3RhbmNlQ291bnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZ2wuZHJhd0FycmF5c0luc3RhbmNlZCh0eXBlLCBvZmZzZXQsIG51bUVsZW1lbnRzLCBpbnN0YW5jZUNvdW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2wuZHJhd0FycmF5cyh0eXBlLCBvZmZzZXQsIG51bUVsZW1lbnRzKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBIERyYXdPYmplY3QgaXMgdXNlZnVsIGZvciBwdXR0aW5nIG9iamVjdHMgaW4gdG8gYW4gYXJyYXkgYW5kIHBhc3NpbmcgdGhlbSB0byB7QGxpbmsgbW9kdWxlOnR3Z2wuZHJhd09iamVjdExpc3R9LlxuICpcbiAqIFlvdSBuZWVkIGVpdGhlciBhIGBCdWZmZXJJbmZvYCBvciBhIGBWZXJ0ZXhBcnJheUluZm9gLlxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IERyYXdPYmplY3RcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2FjdGl2ZV0gd2hldGhlciBvciBub3QgdG8gZHJhdy4gRGVmYXVsdCA9IGB0cnVlYCAobXVzdCBiZSBgZmFsc2VgIHRvIGJlIG5vdCB0cnVlKS4gSW4gb3RoZXIgd29yZHMgYHVuZGVmaW5lZGAgPSBgdHJ1ZWBcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbdHlwZV0gdHlwZSB0byBkcmF3IGVnLiBgZ2wuVFJJQU5HTEVTYCwgYGdsLkxJTkVTYCwgZXRjLi4uXG4gKiBAcHJvcGVydHkge21vZHVsZTp0d2dsLlByb2dyYW1JbmZvfSBwcm9ncmFtSW5mbyBBIFByb2dyYW1JbmZvIGFzIHJldHVybmVkIGZyb20ge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZVByb2dyYW1JbmZvfVxuICogQHByb3BlcnR5IHttb2R1bGU6dHdnbC5CdWZmZXJJbmZvfSBbYnVmZmVySW5mb10gQSBCdWZmZXJJbmZvIGFzIHJldHVybmVkIGZyb20ge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZUJ1ZmZlckluZm9Gcm9tQXJyYXlzfVxuICogQHByb3BlcnR5IHttb2R1bGU6dHdnbC5WZXJ0ZXhBcnJheUluZm99IFt2ZXJ0ZXhBcnJheUluZm9dIEEgVmVydGV4QXJyYXlJbmZvIGFzIHJldHVybmVkIGZyb20ge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZVZlcnRleEFycmF5SW5mb31cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0PHN0cmluZywgPz59IHVuaWZvcm1zIFRoZSB2YWx1ZXMgZm9yIHRoZSB1bmlmb3Jtcy5cbiAqICAgWW91IGNhbiBwYXNzIG11bHRpcGxlIG9iamVjdHMgYnkgcHV0dGluZyB0aGVtIGluIGFuIGFycmF5LiBGb3IgZXhhbXBsZVxuICpcbiAqICAgICB2YXIgc2hhcmVkVW5pZm9ybXMgPSB7XG4gKiAgICAgICB1X2ZvZ05lYXI6IDEwLFxuICogICAgICAgdV9wcm9qZWN0aW9uOiAuLi5cbiAqICAgICAgIC4uLlxuICogICAgIH07XG4gKlxuICogICAgIHZhciBsb2NhbFVuaWZvcm1zID0ge1xuICogICAgICAgdV93b3JsZDogLi4uXG4gKiAgICAgICB1X2RpZmZ1c2VDb2xvcjogLi4uXG4gKiAgICAgfTtcbiAqXG4gKiAgICAgdmFyIGRyYXdPYmogPSB7XG4gKiAgICAgICAuLi5cbiAqICAgICAgIHVuaWZvcm1zOiBbc2hhcmVkVW5pZm9ybXMsIGxvY2FsVW5pZm9ybXNdLFxuICogICAgIH07XG4gKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtvZmZzZXRdIHRoZSBvZmZzZXQgdG8gcGFzcyB0byBgZ2wuZHJhd0FycmF5c2Agb3IgYGdsLmRyYXdFbGVtZW50c2AuIERlZmF1bHRzIHRvIDAuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2NvdW50XSB0aGUgY291bnQgdG8gcGFzcyB0byBgZ2wuZHJhd0FycmF5c2Agb3IgYGdsLmRyYXdFbGVtZW50c2AuIERlZmF1bHRzIHRvIGJ1ZmZlckluZm8ubnVtRWxlbWVudHMuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2luc3RhbmNlQ291bnRdIHRoZSBudW1iZXIgb2YgaW5zdGFuY2VzLiBEZWZhdWx0cyB0byB1bmRlZmluZWQuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG4vKipcbiAqIERyYXdzIGEgbGlzdCBvZiBvYmplY3RzXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgQSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7RHJhd09iamVjdFtdfSBvYmplY3RzVG9EcmF3IGFuIGFycmF5IG9mIG9iamVjdHMgdG8gZHJhdy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9kcmF3XG4gKi9cbmZ1bmN0aW9uIGRyYXdPYmplY3RMaXN0KGdsLCBvYmplY3RzVG9EcmF3KSB7XG4gIGxldCBsYXN0VXNlZFByb2dyYW1JbmZvID0gbnVsbDtcbiAgbGV0IGxhc3RVc2VkQnVmZmVySW5mbyA9IG51bGw7XG5cbiAgb2JqZWN0c1RvRHJhdy5mb3JFYWNoKGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuYWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2dyYW1JbmZvID0gb2JqZWN0LnByb2dyYW1JbmZvO1xuICAgIGNvbnN0IGJ1ZmZlckluZm8gPSBvYmplY3QudmVydGV4QXJyYXlJbmZvIHx8IG9iamVjdC5idWZmZXJJbmZvO1xuICAgIGxldCBiaW5kQnVmZmVycyA9IGZhbHNlO1xuICAgIGNvbnN0IHR5cGUgPSBvYmplY3QudHlwZSA9PT0gdW5kZWZpbmVkID8gVFJJQU5HTEVTIDogb2JqZWN0LnR5cGU7XG5cbiAgICBpZiAocHJvZ3JhbUluZm8gIT09IGxhc3RVc2VkUHJvZ3JhbUluZm8pIHtcbiAgICAgIGxhc3RVc2VkUHJvZ3JhbUluZm8gPSBwcm9ncmFtSW5mbztcbiAgICAgIGdsLnVzZVByb2dyYW0ocHJvZ3JhbUluZm8ucHJvZ3JhbSk7XG5cbiAgICAgIC8vIFdlIGhhdmUgdG8gcmViaW5kIGJ1ZmZlcnMgd2hlbiBjaGFuZ2luZyBwcm9ncmFtcyBiZWNhdXNlIHdlXG4gICAgICAvLyBvbmx5IGJpbmQgYnVmZmVycyB0aGUgcHJvZ3JhbSB1c2VzLiBTbyBpZiAyIHByb2dyYW1zIHVzZSB0aGUgc2FtZVxuICAgICAgLy8gYnVmZmVySW5mbyBidXQgdGhlIDFzdCBvbmUgdXNlcyBvbmx5IHBvc2l0aW9ucyB0aGUgd2hlbiB0aGVcbiAgICAgIC8vIHdlIHN3aXRjaCB0byB0aGUgMm5kIG9uZSBzb21lIG9mIHRoZSBhdHRyaWJ1dGVzIHdpbGwgbm90IGJlIG9uLlxuICAgICAgYmluZEJ1ZmZlcnMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIFNldHVwIGFsbCB0aGUgbmVlZGVkIGF0dHJpYnV0ZXMuXG4gICAgaWYgKGJpbmRCdWZmZXJzIHx8IGJ1ZmZlckluZm8gIT09IGxhc3RVc2VkQnVmZmVySW5mbykge1xuICAgICAgaWYgKGxhc3RVc2VkQnVmZmVySW5mbyAmJiBsYXN0VXNlZEJ1ZmZlckluZm8udmVydGV4QXJyYXlPYmplY3QgJiYgIWJ1ZmZlckluZm8udmVydGV4QXJyYXlPYmplY3QpIHtcbiAgICAgICAgZ2wuYmluZFZlcnRleEFycmF5KG51bGwpO1xuICAgICAgfVxuICAgICAgbGFzdFVzZWRCdWZmZXJJbmZvID0gYnVmZmVySW5mbztcbiAgICAgIHNldEJ1ZmZlcnNBbmRBdHRyaWJ1dGVzKGdsLCBwcm9ncmFtSW5mbywgYnVmZmVySW5mbyk7XG4gICAgfVxuXG4gICAgLy8gU2V0IHRoZSB1bmlmb3Jtcy5cbiAgICBzZXRVbmlmb3Jtcyhwcm9ncmFtSW5mbywgb2JqZWN0LnVuaWZvcm1zKTtcblxuICAgIC8vIERyYXdcbiAgICBkcmF3QnVmZmVySW5mbyhnbCwgYnVmZmVySW5mbywgdHlwZSwgb2JqZWN0LmNvdW50LCBvYmplY3Qub2Zmc2V0LCBvYmplY3QuaW5zdGFuY2VDb3VudCk7XG4gIH0pO1xuXG4gIGlmIChsYXN0VXNlZEJ1ZmZlckluZm8gJiYgbGFzdFVzZWRCdWZmZXJJbmZvLnZlcnRleEFycmF5T2JqZWN0KSB7XG4gICAgZ2wuYmluZFZlcnRleEFycmF5KG51bGwpO1xuICB9XG59XG5cbnZhciBkcmF3ID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGRyYXdCdWZmZXJJbmZvOiBkcmF3QnVmZmVySW5mbyxcbiAgZHJhd09iamVjdExpc3Q6IGRyYXdPYmplY3RMaXN0XG59KTtcblxuLypcbiAqIENvcHlyaWdodCAyMDE5IEdyZWdnIFRhdmFyZXNcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuICogY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLFxuICogdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvblxuICogdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsXG4gKiBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAqIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMXG4gKiBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVJcbiAqIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5jb25zdCBGUkFNRUJVRkZFUiAgICAgICAgICAgICAgICAgICAgPSAweDhkNDA7XG5jb25zdCBSRU5ERVJCVUZGRVIgICAgICAgICAgICAgICAgICAgPSAweDhkNDE7XG5jb25zdCBURVhUVVJFXzJEICAgICAgICAgICAgICAgICAgICAgPSAweDBkZTE7XG5cbmNvbnN0IFVOU0lHTkVEX0JZVEUgICAgICAgICAgICAgICAgICA9IDB4MTQwMTtcblxuLyogUGl4ZWxGb3JtYXQgKi9cbmNvbnN0IERFUFRIX0NPTVBPTkVOVCAgICAgICAgICAgICAgICA9IDB4MTkwMjtcbmNvbnN0IFJHQkEgICAgICAgICAgICAgICAgICAgICAgICAgICA9IDB4MTkwODtcbmNvbnN0IERFUFRIX0NPTVBPTkVOVDI0ICAgICAgICAgICAgICA9IDB4ODFhNjtcbmNvbnN0IERFUFRIX0NPTVBPTkVOVDMyRiAgICAgICAgICAgICA9IDB4OGNhYztcbmNvbnN0IERFUFRIMjRfU1RFTkNJTDggICAgICAgICAgICAgICA9IDB4ODhmMDtcbmNvbnN0IERFUFRIMzJGX1NURU5DSUw4ICAgICAgICAgICAgICA9IDB4OGNhZDtcblxuLyogRnJhbWVidWZmZXIgT2JqZWN0LiAqL1xuY29uc3QgUkdCQTQgICAgICAgICAgICAgICAgICAgICAgICAgID0gMHg4MDU2O1xuY29uc3QgUkdCNV9BMSAgICAgICAgICAgICAgICAgICAgICAgID0gMHg4MDU3O1xuY29uc3QgUkdCNTY1ICAgICAgICAgICAgICAgICAgICAgICAgID0gMHg4RDYyO1xuY29uc3QgREVQVEhfQ09NUE9ORU5UMTYgICAgICAgICAgICAgID0gMHg4MUE1O1xuY29uc3QgU1RFTkNJTF9JTkRFWCAgICAgICAgICAgICAgICAgID0gMHgxOTAxO1xuY29uc3QgU1RFTkNJTF9JTkRFWDggICAgICAgICAgICAgICAgID0gMHg4RDQ4O1xuY29uc3QgREVQVEhfU1RFTkNJTCAgICAgICAgICAgICAgICAgID0gMHg4NEY5O1xuY29uc3QgQ09MT1JfQVRUQUNITUVOVDAgICAgICAgICAgICAgID0gMHg4Q0UwO1xuY29uc3QgREVQVEhfQVRUQUNITUVOVCAgICAgICAgICAgICAgID0gMHg4RDAwO1xuY29uc3QgU1RFTkNJTF9BVFRBQ0hNRU5UICAgICAgICAgICAgID0gMHg4RDIwO1xuY29uc3QgREVQVEhfU1RFTkNJTF9BVFRBQ0hNRU5UICAgICAgID0gMHg4MjFBO1xuXG4vKiBUZXh0dXJlV3JhcE1vZGUgKi9cbmNvbnN0IENMQU1QX1RPX0VER0UgICAgICAgICAgICAgICAgICA9IDB4ODEyRjtcblxuLyogVGV4dHVyZU1hZ0ZpbHRlciAqL1xuY29uc3QgTElORUFSICAgICAgICAgICAgICAgICAgICAgICAgID0gMHgyNjAxO1xuXG4vKipcbiAqIFRoZSBvcHRpb25zIGZvciBhIGZyYW1lYnVmZmVyIGF0dGFjaG1lbnQuXG4gKlxuICogTm90ZTogRm9yIGEgYGZvcm1hdGAgdGhhdCBpcyBhIHRleHR1cmUgaW5jbHVkZSBhbGwgdGhlIHRleHR1cmVcbiAqIG9wdGlvbnMgZnJvbSB7QGxpbmsgbW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9IGZvciBleGFtcGxlXG4gKiBgbWluYCwgYG1hZ2AsIGBjbGFtcGAsIGV0Yy4uLiBOb3RlIHRoYXQgdW5saWtlIHtAbGluayBtb2R1bGU6dHdnbC5UZXh0dXJlT3B0aW9uc31cbiAqIGBhdXRvYCBkZWZhdWx0cyB0byBgZmFsc2VgIGZvciBhdHRhY2htZW50IHRleHR1cmVzIGJ1dCBgbWluYCBhbmQgYG1hZ2AgZGVmYXVsdFxuICogdG8gYGdsLkxJTkVBUmAgYW5kIGB3cmFwYCBkZWZhdWx0cyB0byBgQ0xBTVBfVE9fRURHRWBcbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBBdHRhY2htZW50T3B0aW9uc1xuICogQHByb3BlcnR5IHtudW1iZXJ9IFthdHRhY2htZW50UG9pbnRdIFRoZSBhdHRhY2htZW50IHBvaW50LiBEZWZhdWx0c1xuICogICB0byBgZ2wuQ09MT1JfQVRUQUNITUVOVDAgKyBuZHhgIHVubGVzcyB0eXBlIGlzIGEgZGVwdGggb3Igc3RlbmNpbCB0eXBlXG4gKiAgIHRoZW4gaXQncyBnbC5ERVBUSF9BVFRBQ0hNRU5UIG9yIGBnbC5ERVBUSF9TVEVOQ0lMX0FUVEFDSE1FTlRgIGRlcGVuZGluZ1xuICogICBvbiB0aGUgZm9ybWF0IG9yIGF0dGFjaG1lbnQgdHlwZS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbZm9ybWF0XSBUaGUgZm9ybWF0LiBJZiBvbmUgb2YgYGdsLlJHQkE0YCxcbiAqICAgYGdsLlJHQjU2NWAsIGBnbC5SR0I1X0ExYCwgYGdsLkRFUFRIX0NPTVBPTkVOVDE2YCxcbiAqICAgYGdsLlNURU5DSUxfSU5ERVg4YCBvciBgZ2wuREVQVEhfU1RFTkNJTGAgdGhlbiB3aWxsIGNyZWF0ZSBhXG4gKiAgIHJlbmRlcmJ1ZmZlci4gT3RoZXJ3aXNlIHdpbGwgY3JlYXRlIGEgdGV4dHVyZS4gRGVmYXVsdCA9IGBnbC5SR0JBYFxuICogQHByb3BlcnR5IHtudW1iZXJ9IFt0eXBlXSBUaGUgdHlwZS4gVXNlZCBmb3IgdGV4dHVyZS4gRGVmYXVsdCA9IGBnbC5VTlNJR05FRF9CWVRFYC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbdGFyZ2V0XSBUaGUgdGV4dHVyZSB0YXJnZXQgZm9yIGBnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRGAuXG4gKiAgIERlZmF1bHRzIHRvIGBnbC5URVhUVVJFXzJEYC4gU2V0IHRvIGFwcHJvcHJpYXRlIGZhY2UgZm9yIGN1YmUgbWFwcy5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbc2FtcGxlc10gVGhlIG51bWJlciBvZiBzYW1wbGVzLiBEZWZhdWx0ID0gMVxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtsZXZlbF0gbGV2ZWwgZm9yIGBnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRGAuIERlZmF1bHRzIHRvIDAuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2xheWVyXSBsYXllciBmb3IgYGdsLmZyYW1lYnVmZmVyVGV4dHVyZUxheWVyYC4gRGVmYXVsdHMgdG8gdW5kZWZpbmVkLlxuICogICBJZiBzZXQgdGhlbiBgZ2wuZnJhbWVidWZmZXJUZXh0dXJlTGF5ZXJgIGlzIGNhbGxlZCwgaWYgbm90IHRoZW4gYGdsLmZyYW1lYnVmZmVyVGV4dHVyZTJEYFxuICogQHByb3BlcnR5IHsoV2ViR0xSZW5kZXJidWZmZXIgfCBXZWJHTFRleHR1cmUpfSBbYXR0YWNobWVudF0gQW4gZXhpc3RpbmcgcmVuZGVyYnVmZmVyIG9yIHRleHR1cmUuXG4gKiAgICBJZiBwcm92aWRlZCB3aWxsIGF0dGFjaCB0aGlzIE9iamVjdC4gVGhpcyBhbGxvd3MgeW91IHRvIHNoYXJlXG4gKiAgICBhdHRhY2htZW50cyBhY3Jvc3MgZnJhbWVidWZmZXJzLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKiBAbWl4ZXMgbW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnNcbiAqL1xuXG5jb25zdCBkZWZhdWx0QXR0YWNobWVudHMgPSBbXG4gIHsgZm9ybWF0OiBSR0JBLCB0eXBlOiBVTlNJR05FRF9CWVRFLCBtaW46IExJTkVBUiwgd3JhcDogQ0xBTVBfVE9fRURHRSwgfSxcbiAgeyBmb3JtYXQ6IERFUFRIX1NURU5DSUwsIH0sXG5dO1xuXG5jb25zdCBhdHRhY2htZW50c0J5Rm9ybWF0ID0ge307XG5hdHRhY2htZW50c0J5Rm9ybWF0W0RFUFRIX1NURU5DSUxdID0gREVQVEhfU1RFTkNJTF9BVFRBQ0hNRU5UO1xuYXR0YWNobWVudHNCeUZvcm1hdFtTVEVOQ0lMX0lOREVYXSA9IFNURU5DSUxfQVRUQUNITUVOVDtcbmF0dGFjaG1lbnRzQnlGb3JtYXRbU1RFTkNJTF9JTkRFWDhdID0gU1RFTkNJTF9BVFRBQ0hNRU5UO1xuYXR0YWNobWVudHNCeUZvcm1hdFtERVBUSF9DT01QT05FTlRdID0gREVQVEhfQVRUQUNITUVOVDtcbmF0dGFjaG1lbnRzQnlGb3JtYXRbREVQVEhfQ09NUE9ORU5UMTZdID0gREVQVEhfQVRUQUNITUVOVDtcbmF0dGFjaG1lbnRzQnlGb3JtYXRbREVQVEhfQ09NUE9ORU5UMjRdID0gREVQVEhfQVRUQUNITUVOVDtcbmF0dGFjaG1lbnRzQnlGb3JtYXRbREVQVEhfQ09NUE9ORU5UMzJGXSA9IERFUFRIX0FUVEFDSE1FTlQ7XG5hdHRhY2htZW50c0J5Rm9ybWF0W0RFUFRIMjRfU1RFTkNJTDhdID0gREVQVEhfU1RFTkNJTF9BVFRBQ0hNRU5UO1xuYXR0YWNobWVudHNCeUZvcm1hdFtERVBUSDMyRl9TVEVOQ0lMOF0gPSBERVBUSF9TVEVOQ0lMX0FUVEFDSE1FTlQ7XG5cbmZ1bmN0aW9uIGdldEF0dGFjaG1lbnRQb2ludEZvckZvcm1hdChmb3JtYXQsIGludGVybmFsRm9ybWF0KSB7XG4gIHJldHVybiBhdHRhY2htZW50c0J5Rm9ybWF0W2Zvcm1hdF0gfHwgYXR0YWNobWVudHNCeUZvcm1hdFtpbnRlcm5hbEZvcm1hdF07XG59XG5cbmNvbnN0IHJlbmRlcmJ1ZmZlckZvcm1hdHMgPSB7fTtcbnJlbmRlcmJ1ZmZlckZvcm1hdHNbUkdCQTRdID0gdHJ1ZTtcbnJlbmRlcmJ1ZmZlckZvcm1hdHNbUkdCNV9BMV0gPSB0cnVlO1xucmVuZGVyYnVmZmVyRm9ybWF0c1tSR0I1NjVdID0gdHJ1ZTtcbnJlbmRlcmJ1ZmZlckZvcm1hdHNbREVQVEhfU1RFTkNJTF0gPSB0cnVlO1xucmVuZGVyYnVmZmVyRm9ybWF0c1tERVBUSF9DT01QT05FTlQxNl0gPSB0cnVlO1xucmVuZGVyYnVmZmVyRm9ybWF0c1tTVEVOQ0lMX0lOREVYXSA9IHRydWU7XG5yZW5kZXJidWZmZXJGb3JtYXRzW1NURU5DSUxfSU5ERVg4XSA9IHRydWU7XG5cbmZ1bmN0aW9uIGlzUmVuZGVyYnVmZmVyRm9ybWF0KGZvcm1hdCkge1xuICByZXR1cm4gcmVuZGVyYnVmZmVyRm9ybWF0c1tmb3JtYXRdO1xufVxuXG5jb25zdCBNQVhfQ09MT1JfQVRUQUNITUVOVF9QT0lOVFMgPSAzMjsgIC8vIGV2ZW4gYW4gMzA5MCBvbmx5IHN1cHBvcnRzIDggYnV0IFdlYkdML09wZW5HTCBFUyBkZWZpbmUgY29uc3RhbnRzIGZvciAzMlxuXG5mdW5jdGlvbiBpc0NvbG9yQXR0YWNobWVudFBvaW50KGF0dGFjaG1lbnRQb2ludCkge1xuICByZXR1cm4gYXR0YWNobWVudFBvaW50ID49IENPTE9SX0FUVEFDSE1FTlQwICYmIGF0dGFjaG1lbnRQb2ludCA8IENPTE9SX0FUVEFDSE1FTlQwICsgTUFYX0NPTE9SX0FUVEFDSE1FTlRfUE9JTlRTO1xufVxuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEZyYW1lYnVmZmVySW5mb1xuICogQHByb3BlcnR5IHtXZWJHTEZyYW1lYnVmZmVyfSBmcmFtZWJ1ZmZlciBUaGUgV2ViR0xGcmFtZWJ1ZmZlciBmb3IgdGhpcyBmcmFtZWJ1ZmZlckluZm9cbiAqIEBwcm9wZXJ0eSB7QXJyYXkuPChXZWJHTFJlbmRlcmJ1ZmZlciB8IFdlYkdMVGV4dHVyZSk+fSBhdHRhY2htZW50cyBUaGUgY3JlYXRlZCBhdHRhY2htZW50cyBpbiB0aGUgc2FtZSBvcmRlciBhcyBwYXNzZWQgaW4gdG8ge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZUZyYW1lYnVmZmVySW5mb30uXG4gKiBAcHJvcGVydHkge251bWJlcn0gd2lkdGggVGhlIHdpZHRoIG9mIHRoZSBmcmFtZWJ1ZmZlciBhbmQgaXRzIGF0dGFjaG1lbnRzXG4gKiBAcHJvcGVydHkge251bWJlcn0gaGVpZ2h0IFRoZSB3aWR0aCBvZiB0aGUgZnJhbWVidWZmZXIgYW5kIGl0cyBhdHRhY2htZW50c1xuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgZnJhbWVidWZmZXIgYW5kIGF0dGFjaG1lbnRzLlxuICpcbiAqIFRoaXMgcmV0dXJucyBhIHtAbGluayBtb2R1bGU6dHdnbC5GcmFtZWJ1ZmZlckluZm99IGJlY2F1c2UgaXQgbmVlZHMgdG8gcmV0dXJuIHRoZSBhdHRhY2htZW50cyBhcyB3ZWxsIGFzIHRoZSBmcmFtZWJ1ZmZlci5cbiAqIEl0IGFsc28gbGVhdmVzIHRoZSBmcmFtZWJ1ZmZlciBpdCBqdXN0IGNyZWF0ZWQgYXMgdGhlIGN1cnJlbnRseSBib3VuZCBgRlJBTUVCVUZGRVJgLlxuICogTm90ZTogSWYgdGhpcyBpcyBXZWJHTDIgb3IgaWYgeW91IGNhbGxlZCB7QGxpbmsgbW9kdWxlOnR3Z2wuYWRkRXh0ZW5zaW9uc1RvQ29udGV4dH0gdGhlbiBpdCB3aWxsIHNldCB0aGUgZHJhd0J1ZmZlcnNcbiAqIHRvIGBbQ09MT1JfQVRUQUNITUVOVDAsIENPTE9SX0FUVEFDSE1FTlQxLCAuLi5dYCBmb3IgaG93IGV2ZXIgbWFueSBjb2xvciBhdHRhY2htZW50cyB3ZXJlIGNyZWF0ZWQuXG4gKlxuICogVGhlIHNpbXBsZXN0IHVzYWdlXG4gKlxuICogICAgIC8vIGNyZWF0ZSBhbiBSR0JBL1VOU0lHTkVEX0JZVEUgdGV4dHVyZSBhbmQgREVQVEhfU1RFTkNJTCByZW5kZXJidWZmZXJcbiAqICAgICBjb25zdCBmYmkgPSB0d2dsLmNyZWF0ZUZyYW1lYnVmZmVySW5mbyhnbCk7XG4gKlxuICogTW9yZSBjb21wbGV4IHVzYWdlXG4gKlxuICogICAgIC8vIGNyZWF0ZSBhbiBSR0I1NjUgcmVuZGVyYnVmZmVyIGFuZCBhIFNURU5DSUxfSU5ERVg4IHJlbmRlcmJ1ZmZlclxuICogICAgIGNvbnN0IGF0dGFjaG1lbnRzID0gW1xuICogICAgICAgeyBmb3JtYXQ6IFJHQjU2NSwgbWFnOiBORUFSRVNUIH0sXG4gKiAgICAgICB7IGZvcm1hdDogU1RFTkNJTF9JTkRFWDggfSxcbiAqICAgICBdXG4gKiAgICAgY29uc3QgZmJpID0gdHdnbC5jcmVhdGVGcmFtZWJ1ZmZlckluZm8oZ2wsIGF0dGFjaG1lbnRzKTtcbiAqXG4gKiBQYXNzaW5nIGluIGEgc3BlY2lmaWMgc2l6ZVxuICpcbiAqICAgICBjb25zdCB3aWR0aCA9IDI1NjtcbiAqICAgICBjb25zdCBoZWlnaHQgPSAyNTY7XG4gKiAgICAgY29uc3QgZmJpID0gdHdnbC5jcmVhdGVGcmFtZWJ1ZmZlckluZm8oZ2wsIGF0dGFjaG1lbnRzLCB3aWR0aCwgaGVpZ2h0KTtcbiAqXG4gKiAqKk5vdGUhISoqIEl0IGlzIHVwIHRvIHlvdSB0byBjaGVjayBpZiB0aGUgZnJhbWVidWZmZXIgaXMgcmVuZGVyYWJsZSBieSBjYWxsaW5nIGBnbC5jaGVja0ZyYW1lYnVmZmVyU3RhdHVzYC5cbiAqIFtXZWJHTDEgb25seSBndWFyYW50ZWVzIDMgY29tYmluYXRpb25zIG9mIGF0dGFjaG1lbnRzIHdvcmtdKGh0dHBzOi8vd3d3Lmtocm9ub3Mub3JnL3JlZ2lzdHJ5L3dlYmdsL3NwZWNzL2xhdGVzdC8xLjAvIzYuNikuXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuQXR0YWNobWVudE9wdGlvbnNbXX0gW2F0dGFjaG1lbnRzXSB3aGljaCBhdHRhY2htZW50cyB0byBjcmVhdGUuIElmIG5vdCBwcm92aWRlZCB0aGUgZGVmYXVsdCBpcyBhIGZyYW1lYnVmZmVyIHdpdGggYW5cbiAqICAgIGBSR0JBYCwgYFVOU0lHTkVEX0JZVEVgIHRleHR1cmUgYENPTE9SX0FUVEFDSE1FTlQwYCBhbmQgYSBgREVQVEhfU1RFTkNJTGAgcmVuZGVyYnVmZmVyIGBERVBUSF9TVEVOQ0lMX0FUVEFDSE1FTlRgLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3aWR0aF0gdGhlIHdpZHRoIGZvciB0aGUgYXR0YWNobWVudHMuIERlZmF1bHQgPSBzaXplIG9mIGRyYXdpbmdCdWZmZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbaGVpZ2h0XSB0aGUgaGVpZ2h0IGZvciB0aGUgYXR0YWNobWVudHMuIERlZmF1bHQgPSBzaXplIG9mIGRyYXdpbmdCdWZmZXJcbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsLkZyYW1lYnVmZmVySW5mb30gdGhlIGZyYW1lYnVmZmVyIGFuZCBhdHRhY2htZW50cy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9mcmFtZWJ1ZmZlcnNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRnJhbWVidWZmZXJJbmZvKGdsLCBhdHRhY2htZW50cywgd2lkdGgsIGhlaWdodCkge1xuICBjb25zdCB0YXJnZXQgPSBGUkFNRUJVRkZFUjtcbiAgY29uc3QgZmIgPSBnbC5jcmVhdGVGcmFtZWJ1ZmZlcigpO1xuICBnbC5iaW5kRnJhbWVidWZmZXIodGFyZ2V0LCBmYik7XG4gIHdpZHRoICA9IHdpZHRoICB8fCBnbC5kcmF3aW5nQnVmZmVyV2lkdGg7XG4gIGhlaWdodCA9IGhlaWdodCB8fCBnbC5kcmF3aW5nQnVmZmVySGVpZ2h0O1xuICBhdHRhY2htZW50cyA9IGF0dGFjaG1lbnRzIHx8IGRlZmF1bHRBdHRhY2htZW50cztcbiAgY29uc3QgdXNlZENvbG9yQXR0YWNobWVudHNQb2ludHMgPSBbXTtcbiAgY29uc3QgZnJhbWVidWZmZXJJbmZvID0ge1xuICAgIGZyYW1lYnVmZmVyOiBmYixcbiAgICBhdHRhY2htZW50czogW10sXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICB9O1xuXG4gIGF0dGFjaG1lbnRzLmZvckVhY2goZnVuY3Rpb24oYXR0YWNobWVudE9wdGlvbnMsIGkpIHtcbiAgICBsZXQgYXR0YWNobWVudCA9IGF0dGFjaG1lbnRPcHRpb25zLmF0dGFjaG1lbnQ7XG4gICAgY29uc3Qgc2FtcGxlcyA9IGF0dGFjaG1lbnRPcHRpb25zLnNhbXBsZXM7XG4gICAgY29uc3QgZm9ybWF0ID0gYXR0YWNobWVudE9wdGlvbnMuZm9ybWF0O1xuICAgIGxldCBhdHRhY2htZW50UG9pbnQgPSBhdHRhY2htZW50T3B0aW9ucy5hdHRhY2htZW50UG9pbnQgfHwgZ2V0QXR0YWNobWVudFBvaW50Rm9yRm9ybWF0KGZvcm1hdCwgYXR0YWNobWVudE9wdGlvbnMuaW50ZXJuYWxGb3JtYXQpO1xuICAgIGlmICghYXR0YWNobWVudFBvaW50KSB7XG4gICAgICBhdHRhY2htZW50UG9pbnQgPSBDT0xPUl9BVFRBQ0hNRU5UMCArIGk7XG4gICAgfVxuICAgIGlmIChpc0NvbG9yQXR0YWNobWVudFBvaW50KGF0dGFjaG1lbnRQb2ludCkpIHtcbiAgICAgIHVzZWRDb2xvckF0dGFjaG1lbnRzUG9pbnRzLnB1c2goYXR0YWNobWVudFBvaW50KTtcbiAgICB9XG4gICAgaWYgKCFhdHRhY2htZW50KSB7XG4gICAgICBpZiAoc2FtcGxlcyAhPT0gdW5kZWZpbmVkIHx8IGlzUmVuZGVyYnVmZmVyRm9ybWF0KGZvcm1hdCkpIHtcbiAgICAgICAgYXR0YWNobWVudCA9IGdsLmNyZWF0ZVJlbmRlcmJ1ZmZlcigpO1xuICAgICAgICBnbC5iaW5kUmVuZGVyYnVmZmVyKFJFTkRFUkJVRkZFUiwgYXR0YWNobWVudCk7XG4gICAgICAgIGlmIChzYW1wbGVzID4gMSkge1xuICAgICAgICAgIGdsLnJlbmRlcmJ1ZmZlclN0b3JhZ2VNdWx0aXNhbXBsZShSRU5ERVJCVUZGRVIsIHNhbXBsZXMsIGZvcm1hdCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2wucmVuZGVyYnVmZmVyU3RvcmFnZShSRU5ERVJCVUZGRVIsIGZvcm1hdCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRleHR1cmVPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgYXR0YWNobWVudE9wdGlvbnMpO1xuICAgICAgICB0ZXh0dXJlT3B0aW9ucy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0ZXh0dXJlT3B0aW9ucy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGlmICh0ZXh0dXJlT3B0aW9ucy5hdXRvID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0ZXh0dXJlT3B0aW9ucy5hdXRvID0gZmFsc2U7XG4gICAgICAgICAgdGV4dHVyZU9wdGlvbnMubWluID0gdGV4dHVyZU9wdGlvbnMubWluIHx8IHRleHR1cmVPcHRpb25zLm1pbk1hZyB8fCBMSU5FQVI7XG4gICAgICAgICAgdGV4dHVyZU9wdGlvbnMubWFnID0gdGV4dHVyZU9wdGlvbnMubWFnIHx8IHRleHR1cmVPcHRpb25zLm1pbk1hZyB8fCBMSU5FQVI7XG4gICAgICAgICAgdGV4dHVyZU9wdGlvbnMud3JhcFMgPSB0ZXh0dXJlT3B0aW9ucy53cmFwUyB8fCB0ZXh0dXJlT3B0aW9ucy53cmFwIHx8IENMQU1QX1RPX0VER0U7XG4gICAgICAgICAgdGV4dHVyZU9wdGlvbnMud3JhcFQgPSB0ZXh0dXJlT3B0aW9ucy53cmFwVCB8fCB0ZXh0dXJlT3B0aW9ucy53cmFwIHx8IENMQU1QX1RPX0VER0U7XG4gICAgICAgIH1cbiAgICAgICAgYXR0YWNobWVudCA9IGNyZWF0ZVRleHR1cmUoZ2wsIHRleHR1cmVPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzUmVuZGVyYnVmZmVyKGdsLCBhdHRhY2htZW50KSkge1xuICAgICAgZ2wuZnJhbWVidWZmZXJSZW5kZXJidWZmZXIodGFyZ2V0LCBhdHRhY2htZW50UG9pbnQsIFJFTkRFUkJVRkZFUiwgYXR0YWNobWVudCk7XG4gICAgfSBlbHNlIGlmIChpc1RleHR1cmUoZ2wsIGF0dGFjaG1lbnQpKSB7XG4gICAgICBpZiAoYXR0YWNobWVudE9wdGlvbnMubGF5ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBnbC5mcmFtZWJ1ZmZlclRleHR1cmVMYXllcihcbiAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAgYXR0YWNobWVudFBvaW50LFxuICAgICAgICAgIGF0dGFjaG1lbnQsXG4gICAgICAgICAgYXR0YWNobWVudE9wdGlvbnMubGV2ZWwgfHwgMCxcbiAgICAgICAgICBhdHRhY2htZW50T3B0aW9ucy5sYXllcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRChcbiAgICAgICAgICAgIHRhcmdldCxcbiAgICAgICAgICAgIGF0dGFjaG1lbnRQb2ludCxcbiAgICAgICAgICAgIGF0dGFjaG1lbnRPcHRpb25zLnRhcmdldCB8fCBURVhUVVJFXzJELFxuICAgICAgICAgICAgYXR0YWNobWVudCxcbiAgICAgICAgICAgIGF0dGFjaG1lbnRPcHRpb25zLmxldmVsIHx8IDApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gYXR0YWNobWVudCB0eXBlJyk7XG4gICAgfVxuICAgIGZyYW1lYnVmZmVySW5mby5hdHRhY2htZW50cy5wdXNoKGF0dGFjaG1lbnQpO1xuICB9KTtcbiAgaWYgKGdsLmRyYXdCdWZmZXJzKSB7XG4gICAgZ2wuZHJhd0J1ZmZlcnModXNlZENvbG9yQXR0YWNobWVudHNQb2ludHMpO1xuICB9XG4gIHJldHVybiBmcmFtZWJ1ZmZlckluZm87XG59XG5cbi8qKlxuICogUmVzaXplcyB0aGUgYXR0YWNobWVudHMgb2YgYSBmcmFtZWJ1ZmZlci5cbiAqXG4gKiBZb3UgbmVlZCB0byBwYXNzIGluIHRoZSBzYW1lIGBhdHRhY2htZW50c2AgYXMgeW91IHBhc3NlZCBpbiB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlRnJhbWVidWZmZXJJbmZvfVxuICogYmVjYXVzZSBUV0dMIGhhcyBubyBpZGVhIHRoZSBmb3JtYXQvdHlwZSBvZiBlYWNoIGF0dGFjaG1lbnQuXG4gKlxuICogVGhlIHNpbXBsZXN0IHVzYWdlXG4gKlxuICogICAgIC8vIGNyZWF0ZSBhbiBSR0JBL1VOU0lHTkVEX0JZVEUgdGV4dHVyZSBhbmQgREVQVEhfU1RFTkNJTCByZW5kZXJidWZmZXJcbiAqICAgICBjb25zdCBmYmkgPSB0d2dsLmNyZWF0ZUZyYW1lYnVmZmVySW5mbyhnbCk7XG4gKlxuICogICAgIC4uLlxuICpcbiAqICAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gKiAgICAgICBpZiAodHdnbC5yZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplKGdsLmNhbnZhcykpIHtcbiAqICAgICAgICAgLy8gcmVzaXplIHRoZSBhdHRhY2htZW50c1xuICogICAgICAgICB0d2dsLnJlc2l6ZUZyYW1lYnVmZmVySW5mbyhnbCwgZmJpKTtcbiAqICAgICAgIH1cbiAqXG4gKiBNb3JlIGNvbXBsZXggdXNhZ2VcbiAqXG4gKiAgICAgLy8gY3JlYXRlIGFuIFJHQjU2NSByZW5kZXJidWZmZXIgYW5kIGEgU1RFTkNJTF9JTkRFWDggcmVuZGVyYnVmZmVyXG4gKiAgICAgY29uc3QgYXR0YWNobWVudHMgPSBbXG4gKiAgICAgICB7IGZvcm1hdDogUkdCNTY1LCBtYWc6IE5FQVJFU1QgfSxcbiAqICAgICAgIHsgZm9ybWF0OiBTVEVOQ0lMX0lOREVYOCB9LFxuICogICAgIF1cbiAqICAgICBjb25zdCBmYmkgPSB0d2dsLmNyZWF0ZUZyYW1lYnVmZmVySW5mbyhnbCwgYXR0YWNobWVudHMpO1xuICpcbiAqICAgICAuLi5cbiAqXG4gKiAgICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICogICAgICAgaWYgKHR3Z2wucmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZShnbC5jYW52YXMpKSB7XG4gKiAgICAgICAgIC8vIHJlc2l6ZSB0aGUgYXR0YWNobWVudHMgdG8gbWF0Y2hcbiAqICAgICAgICAgdHdnbC5yZXNpemVGcmFtZWJ1ZmZlckluZm8oZ2wsIGZiaSwgYXR0YWNobWVudHMpO1xuICogICAgICAgfVxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLkZyYW1lYnVmZmVySW5mb30gZnJhbWVidWZmZXJJbmZvIGEgZnJhbWVidWZmZXJJbmZvIGFzIHJldHVybmVkIGZyb20ge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZUZyYW1lYnVmZmVySW5mb30uXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLkF0dGFjaG1lbnRPcHRpb25zW119IFthdHRhY2htZW50c10gdGhlIHNhbWUgYXR0YWNobWVudHMgb3B0aW9ucyBhcyBwYXNzZWQgdG8ge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZUZyYW1lYnVmZmVySW5mb30uXG4gKiBAcGFyYW0ge251bWJlcn0gW3dpZHRoXSB0aGUgd2lkdGggZm9yIHRoZSBhdHRhY2htZW50cy4gRGVmYXVsdCA9IHNpemUgb2YgZHJhd2luZ0J1ZmZlclxuICogQHBhcmFtIHtudW1iZXJ9IFtoZWlnaHRdIHRoZSBoZWlnaHQgZm9yIHRoZSBhdHRhY2htZW50cy4gRGVmYXVsdCA9IHNpemUgb2YgZHJhd2luZ0J1ZmZlclxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL2ZyYW1lYnVmZmVyc1xuICovXG5mdW5jdGlvbiByZXNpemVGcmFtZWJ1ZmZlckluZm8oZ2wsIGZyYW1lYnVmZmVySW5mbywgYXR0YWNobWVudHMsIHdpZHRoLCBoZWlnaHQpIHtcbiAgd2lkdGggID0gd2lkdGggIHx8IGdsLmRyYXdpbmdCdWZmZXJXaWR0aDtcbiAgaGVpZ2h0ID0gaGVpZ2h0IHx8IGdsLmRyYXdpbmdCdWZmZXJIZWlnaHQ7XG4gIGZyYW1lYnVmZmVySW5mby53aWR0aCA9IHdpZHRoO1xuICBmcmFtZWJ1ZmZlckluZm8uaGVpZ2h0ID0gaGVpZ2h0O1xuICBhdHRhY2htZW50cyA9IGF0dGFjaG1lbnRzIHx8IGRlZmF1bHRBdHRhY2htZW50cztcbiAgYXR0YWNobWVudHMuZm9yRWFjaChmdW5jdGlvbihhdHRhY2htZW50T3B0aW9ucywgbmR4KSB7XG4gICAgY29uc3QgYXR0YWNobWVudCA9IGZyYW1lYnVmZmVySW5mby5hdHRhY2htZW50c1tuZHhdO1xuICAgIGNvbnN0IGZvcm1hdCA9IGF0dGFjaG1lbnRPcHRpb25zLmZvcm1hdDtcbiAgICBjb25zdCBzYW1wbGVzID0gYXR0YWNobWVudE9wdGlvbnMuc2FtcGxlcztcbiAgICBpZiAoc2FtcGxlcyAhPT0gdW5kZWZpbmVkIHx8IGlzUmVuZGVyYnVmZmVyKGdsLCBhdHRhY2htZW50KSkge1xuICAgICAgZ2wuYmluZFJlbmRlcmJ1ZmZlcihSRU5ERVJCVUZGRVIsIGF0dGFjaG1lbnQpO1xuICAgICAgaWYgKHNhbXBsZXMgPiAxKSB7XG4gICAgICAgIGdsLnJlbmRlcmJ1ZmZlclN0b3JhZ2VNdWx0aXNhbXBsZShSRU5ERVJCVUZGRVIsIHNhbXBsZXMsIGZvcm1hdCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnbC5yZW5kZXJidWZmZXJTdG9yYWdlKFJFTkRFUkJVRkZFUiwgZm9ybWF0LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVGV4dHVyZShnbCwgYXR0YWNobWVudCkpIHtcbiAgICAgIHJlc2l6ZVRleHR1cmUoZ2wsIGF0dGFjaG1lbnQsIGF0dGFjaG1lbnRPcHRpb25zLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bmtub3duIGF0dGFjaG1lbnQgdHlwZScpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQmluZHMgYSBmcmFtZWJ1ZmZlclxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcHJldHR5IG11Y2ggc29sZWx5IGV4aXN0cyBiZWNhdXNlIEkgc3BlbnQgaG91cnNcbiAqIHRyeWluZyB0byBmaWd1cmUgb3V0IHdoeSBzb21ldGhpbmcgSSB3cm90ZSB3YXNuJ3Qgd29ya2luZyBvbmx5XG4gKiB0byByZWFsaXplIEkgZm9yZ2V0IHRvIHNldCB0aGUgdmlld3BvcnQgZGltZW5zaW9ucy5cbiAqIE15IGhvcGUgaXMgdGhpcyBmdW5jdGlvbiB3aWxsIGZpeCB0aGF0LlxuICpcbiAqIEl0IGlzIGVmZmVjdGl2ZWx5IHRoZSBzYW1lIGFzXG4gKlxuICogICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgc29tZUZyYW1lYnVmZmVySW5mby5mcmFtZWJ1ZmZlcik7XG4gKiAgICAgZ2wudmlld3BvcnQoMCwgMCwgc29tZUZyYW1lYnVmZmVySW5mby53aWR0aCwgc29tZUZyYW1lYnVmZmVySW5mby5oZWlnaHQpO1xuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLkZyYW1lYnVmZmVySW5mb3xudWxsfSBbZnJhbWVidWZmZXJJbmZvXSBhIGZyYW1lYnVmZmVySW5mbyBhcyByZXR1cm5lZCBmcm9tIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVGcmFtZWJ1ZmZlckluZm99LlxuICogICBJZiBmYWxzeSB3aWxsIGJpbmQgdGhlIGNhbnZhcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbdGFyZ2V0XSBUaGUgdGFyZ2V0LiBJZiBub3QgcGFzc2VkIGBnbC5GUkFNRUJVRkZFUmAgd2lsbCBiZSB1c2VkLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL2ZyYW1lYnVmZmVyc1xuICovXG5cbmZ1bmN0aW9uIGJpbmRGcmFtZWJ1ZmZlckluZm8oZ2wsIGZyYW1lYnVmZmVySW5mbywgdGFyZ2V0KSB7XG4gIHRhcmdldCA9IHRhcmdldCB8fCBGUkFNRUJVRkZFUjtcbiAgaWYgKGZyYW1lYnVmZmVySW5mbykge1xuICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcih0YXJnZXQsIGZyYW1lYnVmZmVySW5mby5mcmFtZWJ1ZmZlcik7XG4gICAgZ2wudmlld3BvcnQoMCwgMCwgZnJhbWVidWZmZXJJbmZvLndpZHRoLCBmcmFtZWJ1ZmZlckluZm8uaGVpZ2h0KTtcbiAgfSBlbHNlIHtcbiAgICBnbC5iaW5kRnJhbWVidWZmZXIodGFyZ2V0LCBudWxsKTtcbiAgICBnbC52aWV3cG9ydCgwLCAwLCBnbC5kcmF3aW5nQnVmZmVyV2lkdGgsIGdsLmRyYXdpbmdCdWZmZXJIZWlnaHQpO1xuICB9XG59XG5cbnZhciBmcmFtZWJ1ZmZlcnMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgYmluZEZyYW1lYnVmZmVySW5mbzogYmluZEZyYW1lYnVmZmVySW5mbyxcbiAgY3JlYXRlRnJhbWVidWZmZXJJbmZvOiBjcmVhdGVGcmFtZWJ1ZmZlckluZm8sXG4gIHJlc2l6ZUZyYW1lYnVmZmVySW5mbzogcmVzaXplRnJhbWVidWZmZXJJbmZvXG59KTtcblxuLypcbiAqIENvcHlyaWdodCAyMDE5IEdyZWdnIFRhdmFyZXNcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuICogY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLFxuICogdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvblxuICogdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsXG4gKiBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAqIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMXG4gKiBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVJcbiAqIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIHZlcnRleCBhcnJheSBvYmplY3QgcmVsYXRlZCBmdW5jdGlvbnNcbiAqXG4gKiBZb3Ugc2hvdWxkIGdlbmVyYWxseSBub3QgbmVlZCB0byB1c2UgdGhlc2UgZnVuY3Rpb25zLiBUaGV5IGFyZSBwcm92aWRlZFxuICogZm9yIHRob3NlIGNhc2VzIHdoZXJlIHlvdSdyZSBkb2luZyBzb21ldGhpbmcgb3V0IG9mIHRoZSBvcmRpbmFyeVxuICogYW5kIHlvdSBuZWVkIGxvd2VyIGxldmVsIGFjY2Vzcy5cbiAqXG4gKiBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB0aGV5IGFyZSBhdmFpbGFibGUgYXQgYm90aCBgdHdnbC5hdHRyaWJ1dGVzYCBhbmQgYHR3Z2xgXG4gKiBpdHNlbGZcbiAqXG4gKiBTZWUge0BsaW5rIG1vZHVsZTp0d2dsfSBmb3IgY29yZSBmdW5jdGlvbnNcbiAqXG4gKiBAbW9kdWxlIHR3Z2wvdmVydGV4QXJyYXlzXG4gKi9cblxuY29uc3QgRUxFTUVOVF9BUlJBWV9CVUZGRVIgICAgICAgICAgID0gMHg4ODkzO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFZlcnRleEFycmF5SW5mb1xuICogQHByb3BlcnR5IHtudW1iZXJ9IG51bUVsZW1lbnRzIFRoZSBudW1iZXIgb2YgZWxlbWVudHMgdG8gcGFzcyB0byBgZ2wuZHJhd0FycmF5c2Agb3IgYGdsLmRyYXdFbGVtZW50c2AuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2VsZW1lbnRUeXBlXSBUaGUgdHlwZSBvZiBpbmRpY2VzIGBVTlNJR05FRF9CWVRFYCwgYFVOU0lHTkVEX1NIT1JUYCBldGMuLlxuICogQHByb3BlcnR5IHtXZWJHTFZlcnRleEFycmF5T2JqZWN0fSBbdmVydGV4QXJyYXlPYmplY3RdIGEgdmVydGV4IGFycmF5IG9iamVjdFxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgVmVydGV4QXJyYXlJbmZvIGZyb20gYSBCdWZmZXJJbmZvIGFuZCBvbmUgb3IgbW9yZSBQcm9ncmFtSW5mb3NcbiAqXG4gKiBUaGlzIGNhbiBiZSBwYXNzZWQgdG8ge0BsaW5rIG1vZHVsZTp0d2dsLnNldEJ1ZmZlcnNBbmRBdHRyaWJ1dGVzfSBhbmQgdG9cbiAqIHtAbGluayBtb2R1bGU6dHdnbDpkcmF3QnVmZmVySW5mb30uXG4gKlxuICogPiAqKklNUE9SVEFOVDoqKiBWZXJ0ZXggQXJyYXkgT2JqZWN0cyBhcmUgKipub3QqKiBhIGRpcmVjdCBhbmFsb2cgZm9yIGEgQnVmZmVySW5mby4gVmVydGV4IEFycmF5IE9iamVjdHNcbiAqICAgYXNzaWduIGJ1ZmZlcnMgdG8gc3BlY2lmaWMgYXR0cmlidXRlcyBhdCBjcmVhdGlvbiB0aW1lLiBUaGF0IG1lYW5zIHRoZXkgY2FuIG9ubHkgYmUgdXNlZCB3aXRoIHByb2dyYW1zXG4gKiAgIHdobydzIGF0dHJpYnV0ZXMgdXNlIHRoZSBzYW1lIGF0dHJpYnV0ZSBsb2NhdGlvbnMgZm9yIHRoZSBzYW1lIHB1cnBvc2VzLlxuICpcbiAqID4gQmluZCB5b3VyIGF0dHJpYnV0ZSBsb2NhdGlvbnMgYnkgcGFzc2luZyBhbiBhcnJheSBvZiBhdHRyaWJ1dGUgbmFtZXMgdG8ge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZVByb2dyYW1JbmZvfVxuICogICBvciB1c2UgV2ViR0wgMidzIEdMU0wgRVMgMydzIGBsYXlvdXQobG9jYXRpb24gPSA8bnVtPilgIHRvIG1ha2Ugc3VyZSBsb2NhdGlvbnMgbWF0Y2guXG4gKlxuICogYWxzb1xuICpcbiAqID4gKipJTVBPUlRBTlQ6KiogQWZ0ZXIgY2FsbGluZyB0d2dsLnNldEJ1ZmZlcnNBbmRBdHRyaWJ1dGUgd2l0aCBhIEJ1ZmZlckluZm8gdGhhdCB1c2VzIGEgVmVydGV4IEFycmF5IE9iamVjdFxuICogICB0aGF0IFZlcnRleCBBcnJheSBPYmplY3Qgd2lsbCBiZSBib3VuZC4gVGhhdCBtZWFucyAqKkFOWSBNQU5JUFVMQVRJT04gT0YgRUxFTUVOVF9BUlJBWV9CVUZGRVIgb3IgQVRUUklCVVRFUyoqXG4gKiAgIHdpbGwgYWZmZWN0IHRoZSBWZXJ0ZXggQXJyYXkgT2JqZWN0IHN0YXRlLlxuICpcbiAqID4gQ2FsbCBgZ2wuYmluZFZlcnRleEFycmF5KG51bGwpYCB0byBnZXQgYmFjayBtYW5pcHVsYXRpbmcgdGhlIGdsb2JhbCBhdHRyaWJ1dGVzIGFuZCBFTEVNRU5UX0FSUkFZX0JVRkZFUi5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgQSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuUHJvZ3JhbUluZm98bW9kdWxlOnR3Z2wuUHJvZ3JhbUluZm9bXX0gcHJvZ3JhbUluZm8gYSBwcm9ncmFtSW5mbyBvciBhcnJheSBvZiBwcm9ncmFtSW5mb3NcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuQnVmZmVySW5mb30gYnVmZmVySW5mbyBCdWZmZXJJbmZvIGFzIHJldHVybmVkIGZyb20gY3JlYXRlQnVmZmVySW5mb0Zyb21BcnJheXMgZXRjLi4uXG4gKlxuICogICAgWW91IG5lZWQgdG8gbWFrZSBzdXJlIGV2ZXJ5IGF0dHJpYnV0ZSB0aGF0IHdpbGwgYmUgdXNlZCBpcyBib3VuZC4gU28gZm9yIGV4YW1wbGUgYXNzdW1lIHNoYWRlciAxXG4gKiAgICB1c2VzIGF0dHJpYnV0ZXMgQSwgQiwgQyBhbmQgc2hhZGVyIDIgdXNlcyBhdHRyaWJ1dGVzIEEsIEIsIEQuIElmIHlvdSBvbmx5IHBhc3MgaW4gdGhlIHByb2dyYW1JbmZvXG4gKiAgICBmb3Igc2hhZGVyIDEgdGhlbiBvbmx5IGF0dHJpYnV0ZXMgQSwgQiwgYW5kIEMgd2lsbCBoYXZlIHRoZWlyIGF0dHJpYnV0ZXMgc2V0IGJlY2F1c2UgVFdHTCBkb2Vzbid0XG4gKiAgICBub3cgYXR0cmlidXRlIEQncyBsb2NhdGlvbi5cbiAqXG4gKiAgICBTbywgeW91IGNhbiBwYXNzIGluIGJvdGggc2hhZGVyIDEgYW5kIHNoYWRlciAyJ3MgcHJvZ3JhbUluZm9cbiAqXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC5WZXJ0ZXhBcnJheUluZm99IFRoZSBjcmVhdGVkIFZlcnRleEFycmF5SW5mb1xuICpcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC92ZXJ0ZXhBcnJheXNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlVmVydGV4QXJyYXlJbmZvKGdsLCBwcm9ncmFtSW5mb3MsIGJ1ZmZlckluZm8pIHtcbiAgY29uc3QgdmFvID0gZ2wuY3JlYXRlVmVydGV4QXJyYXkoKTtcbiAgZ2wuYmluZFZlcnRleEFycmF5KHZhbyk7XG4gIGlmICghcHJvZ3JhbUluZm9zLmxlbmd0aCkge1xuICAgIHByb2dyYW1JbmZvcyA9IFtwcm9ncmFtSW5mb3NdO1xuICB9XG4gIHByb2dyYW1JbmZvcy5mb3JFYWNoKGZ1bmN0aW9uKHByb2dyYW1JbmZvKSB7XG4gICAgc2V0QnVmZmVyc0FuZEF0dHJpYnV0ZXMoZ2wsIHByb2dyYW1JbmZvLCBidWZmZXJJbmZvKTtcbiAgfSk7XG4gIGdsLmJpbmRWZXJ0ZXhBcnJheShudWxsKTtcbiAgcmV0dXJuIHtcbiAgICBudW1FbGVtZW50czogYnVmZmVySW5mby5udW1FbGVtZW50cyxcbiAgICBlbGVtZW50VHlwZTogYnVmZmVySW5mby5lbGVtZW50VHlwZSxcbiAgICB2ZXJ0ZXhBcnJheU9iamVjdDogdmFvLFxuICB9O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB2ZXJ0ZXggYXJyYXkgb2JqZWN0IGFuZCB0aGVuIHNldHMgdGhlIGF0dHJpYnV0ZXMgb24gaXRcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dCB0byB1c2UuXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj59IHNldHRlcnMgQXR0cmlidXRlIHNldHRlcnMgYXMgcmV0dXJuZWQgZnJvbSBjcmVhdGVBdHRyaWJ1dGVTZXR0ZXJzXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBtb2R1bGU6dHdnbC5BdHRyaWJJbmZvPn0gYXR0cmlicyBBdHRyaWJJbmZvcyBtYXBwZWQgYnkgYXR0cmlidXRlIG5hbWUuXG4gKiBAcGFyYW0ge1dlYkdMQnVmZmVyfSBbaW5kaWNlc10gYW4gb3B0aW9uYWwgRUxFTUVOVF9BUlJBWV9CVUZGRVIgb2YgaW5kaWNlc1xuICpcbiAqIEByZXR1cm4ge1dlYkdMVmVydGV4QXJyYXlPYmplY3R8bnVsbH0gVGhlIGNyZWF0ZWQgV2ViR0xWZXJ0ZXhBcnJheU9iamVjdFxuICpcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC92ZXJ0ZXhBcnJheXNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlVkFPQW5kU2V0QXR0cmlidXRlcyhnbCwgc2V0dGVycywgYXR0cmlicywgaW5kaWNlcykge1xuICBjb25zdCB2YW8gPSBnbC5jcmVhdGVWZXJ0ZXhBcnJheSgpO1xuICBnbC5iaW5kVmVydGV4QXJyYXkodmFvKTtcbiAgc2V0QXR0cmlidXRlcyhzZXR0ZXJzLCBhdHRyaWJzKTtcbiAgaWYgKGluZGljZXMpIHtcbiAgICBnbC5iaW5kQnVmZmVyKEVMRU1FTlRfQVJSQVlfQlVGRkVSLCBpbmRpY2VzKTtcbiAgfVxuICAvLyBXZSB1bmJpbmQgdGhpcyBiZWNhdXNlIG90aGVyd2lzZSBhbnkgY2hhbmdlIHRvIEVMRU1FTlRfQVJSQVlfQlVGRkVSXG4gIC8vIGxpa2Ugd2hlbiBjcmVhdGluZyBidWZmZXJzIGZvciBvdGhlciBzdHVmZiB3aWxsIG1lc3MgdXAgdGhpcyBWQU8ncyBiaW5kaW5nXG4gIGdsLmJpbmRWZXJ0ZXhBcnJheShudWxsKTtcbiAgcmV0dXJuIHZhbztcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdmVydGV4IGFycmF5IG9iamVjdCBhbmQgdGhlbiBzZXRzIHRoZSBhdHRyaWJ1dGVzXG4gKiBvbiBpdFxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiAgICAgICAgdG8gdXNlLlxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fCBtb2R1bGU6dHdnbC5Qcm9ncmFtSW5mb30gcHJvZ3JhbUluZm8gYXMgcmV0dXJuZWQgZnJvbSBjcmVhdGVQcm9ncmFtSW5mbyBvciBBdHRyaWJ1dGUgc2V0dGVycyBhcyByZXR1cm5lZCBmcm9tIGNyZWF0ZUF0dHJpYnV0ZVNldHRlcnNcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuQnVmZmVySW5mb30gYnVmZmVySW5mbyBCdWZmZXJJbmZvIGFzIHJldHVybmVkIGZyb20gY3JlYXRlQnVmZmVySW5mb0Zyb21BcnJheXMgZXRjLi4uXG4gKiBAcGFyYW0ge1dlYkdMQnVmZmVyfSBbaW5kaWNlc10gYW4gb3B0aW9uYWwgRUxFTUVOVF9BUlJBWV9CVUZGRVIgb2YgaW5kaWNlc1xuICpcbiAqIEByZXR1cm4ge1dlYkdMVmVydGV4QXJyYXlPYmplY3R8bnVsbH0gVGhlIGNyZWF0ZWQgV2ViR0xWZXJ0ZXhBcnJheU9iamVjdFxuICpcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC92ZXJ0ZXhBcnJheXNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlVkFPRnJvbUJ1ZmZlckluZm8oZ2wsIHByb2dyYW1JbmZvLCBidWZmZXJJbmZvKSB7XG4gIHJldHVybiBjcmVhdGVWQU9BbmRTZXRBdHRyaWJ1dGVzKGdsLCBwcm9ncmFtSW5mby5hdHRyaWJTZXR0ZXJzIHx8IHByb2dyYW1JbmZvLCBidWZmZXJJbmZvLmF0dHJpYnMsIGJ1ZmZlckluZm8uaW5kaWNlcyk7XG59XG5cbnZhciB2ZXJ0ZXhBcnJheXMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgY3JlYXRlVmVydGV4QXJyYXlJbmZvOiBjcmVhdGVWZXJ0ZXhBcnJheUluZm8sXG4gIGNyZWF0ZVZBT0FuZFNldEF0dHJpYnV0ZXM6IGNyZWF0ZVZBT0FuZFNldEF0dHJpYnV0ZXMsXG4gIGNyZWF0ZVZBT0Zyb21CdWZmZXJJbmZvOiBjcmVhdGVWQU9Gcm9tQnVmZmVySW5mb1xufSk7XG5cbi8qXG4gKiBDb3B5cmlnaHQgMjAxOSBHcmVnZyBUYXZhcmVzXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbiAqIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSxcbiAqIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb25cbiAqIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLFxuICogYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4gKiBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTFxuICogVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSXG4gKiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cbmNvbnN0IGRlZmF1bHRzID0ge1xuICBhZGRFeHRlbnNpb25zVG9Db250ZXh0OiB0cnVlLFxufTtcblxuLyoqXG4gKiBWYXJpb3VzIGRlZmF1bHQgc2V0dGluZ3MgZm9yIHR3Z2wuXG4gKlxuICogTm90ZTogWW91IGNhbiBjYWxsIHRoaXMgYW55IG51bWJlciBvZiB0aW1lcy4gRXhhbXBsZTpcbiAqXG4gKiAgICAgdHdnbC5zZXREZWZhdWx0cyh7IHRleHR1cmVDb2xvcjogWzEsIDAsIDAsIDFdIH0pO1xuICogICAgIHR3Z2wuc2V0RGVmYXVsdHMoeyBhdHRyaWJQcmVmaXg6ICdhXycgfSk7XG4gKlxuICogaXMgZXF1aXZhbGVudCB0b1xuICpcbiAqICAgICB0d2dsLnNldERlZmF1bHRzKHtcbiAqICAgICAgIHRleHR1cmVDb2xvcjogWzEsIDAsIDAsIDFdLFxuICogICAgICAgYXR0cmliUHJlZml4OiAnYV8nLFxuICogICAgIH0pO1xuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IERlZmF1bHRzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2F0dHJpYlByZWZpeF0gVGhlIHByZWZpeCB0byBzdGljayBvbiBhdHRyaWJ1dGVzXG4gKlxuICogICBXaGVuIHdyaXRpbmcgc2hhZGVycyBJIHByZWZlciB0byBuYW1lIGF0dHJpYnV0ZXMgd2l0aCBgYV9gLCB1bmlmb3JtcyB3aXRoIGB1X2AgYW5kIHZhcnlpbmdzIHdpdGggYHZfYFxuICogICBhcyBpdCBtYWtlcyBpdCBjbGVhciB3aGVyZSB0aGV5IGNhbWUgZnJvbS4gQnV0LCB3aGVuIGJ1aWxkaW5nIGdlb21ldHJ5IEkgcHJlZmVyIHVzaW5nIHVuLXByZWZpeGVkIG5hbWVzLlxuICpcbiAqICAgSW4gb3RoZXIgd29yZHMgSSdsbCBjcmVhdGUgYXJyYXlzIG9mIGdlb21ldHJ5IGxpa2UgdGhpc1xuICpcbiAqICAgICAgIGNvbnN0IGFycmF5cyA9IHtcbiAqICAgICAgICAgcG9zaXRpb246IC4uLlxuICogICAgICAgICBub3JtYWw6IC4uLlxuICogICAgICAgICB0ZXhjb29yZDogLi4uXG4gKiAgICAgICB9O1xuICpcbiAqICAgQnV0IG5lZWQgdGhvc2UgbWFwcGVkIHRvIGF0dHJpYnV0ZXMgYW5kIG15IGF0dHJpYnV0ZXMgc3RhcnQgd2l0aCBgYV9gLlxuICpcbiAqICAgRGVmYXVsdDogYFwiXCJgXG4gKlxuICogQHByb3BlcnR5IHtudW1iZXJbXX0gW3RleHR1cmVDb2xvcl0gQXJyYXkgb2YgNCB2YWx1ZXMgaW4gdGhlIHJhbmdlIDAgdG8gMVxuICpcbiAqICAgVGhlIGRlZmF1bHQgdGV4dHVyZSBjb2xvciBpcyB1c2VkIHdoZW4gbG9hZGluZyB0ZXh0dXJlcyBmcm9tXG4gKiAgIHVybHMuIEJlY2F1c2UgdGhlIFVSTCB3aWxsIGJlIGxvYWRlZCBhc3luYyB3ZSdkIGxpa2UgdG8gYmVcbiAqICAgYWJsZSB0byB1c2UgdGhlIHRleHR1cmUgaW1tZWRpYXRlbHkuIEJ5IHB1dHRpbmcgYSAxeDEgcGl4ZWxcbiAqICAgY29sb3IgaW4gdGhlIHRleHR1cmUgd2UgY2FuIHN0YXJ0IHVzaW5nIHRoZSB0ZXh0dXJlIGJlZm9yZVxuICogICB0aGUgVVJMIGhhcyBsb2FkZWQuXG4gKlxuICogICBEZWZhdWx0OiBgWzAuNSwgMC43NSwgMSwgMV1gXG4gKlxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtjcm9zc09yaWdpbl1cbiAqXG4gKiAgIElmIG5vdCB1bmRlZmluZWQgc2V0cyB0aGUgY3Jvc3NPcmlnaW4gYXR0cmlidXRlIG9uIGltYWdlc1xuICogICB0aGF0IHR3Z2wgY3JlYXRlcyB3aGVuIGRvd25sb2FkaW5nIGltYWdlcyBmb3IgdGV4dHVyZXMuXG4gKlxuICogICBBbHNvIHNlZSB7QGxpbmsgbW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9LlxuICpcbiAqIEBwcm9wZXJ0eSB7Ym9vbH0gW2FkZEV4dGVuc2lvbnNUb0NvbnRleHRdXG4gKlxuICogICBJZiB0cnVlLCB0aGVuLCB3aGVuIHR3Z2wgd2lsbCB0cnkgdG8gYWRkIGFueSBzdXBwb3J0ZWQgV2ViR0wgZXh0ZW5zaW9uc1xuICogICBkaXJlY3RseSB0byB0aGUgY29udGV4dCB1bmRlciB0aGVpciBub3JtYWwgR0wgbmFtZXMuIEZvciBleGFtcGxlXG4gKiAgIGlmIEFOR0xFX2luc3RhbmNlc19hcnJheXMgZXhpc3RzIHRoZW4gdHdnbCB3b3VsZCBlbmFibGUgaXQsXG4gKiAgIGFkZCB0aGUgZnVuY3Rpb25zIGB2ZXJ0ZXhBdHRyaWJEaXZpc29yYCwgYGRyYXdBcnJheXNJbnN0YW5jZWRgLFxuICogICBgZHJhd0VsZW1lbnRzSW5zdGFuY2VkYCwgYW5kIHRoZSBjb25zdGFudCBgVkVSVEVYX0FUVFJJQl9BUlJBWV9ESVZJU09SYFxuICogICB0byB0aGUgYFdlYkdMUmVuZGVyaW5nQ29udGV4dGAuXG4gKlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuLyoqXG4gKiBTZXRzIHZhcmlvdXMgZGVmYXVsdHMgZm9yIHR3Z2wuXG4gKlxuICogSW4gdGhlIGludGVyZXN0IG9mIHRlcnNlbmVzcyB3aGljaCBpcyBraW5kIG9mIHRoZSBwb2ludFxuICogb2YgdHdnbCBJJ3ZlIGludGVncmF0ZWQgYSBmZXcgb2YgdGhlIG9sZGVyIGZ1bmN0aW9ucyBoZXJlXG4gKlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5EZWZhdWx0c30gbmV3RGVmYXVsdHMgVGhlIGRlZmF1bHQgc2V0dGluZ3MuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuZnVuY3Rpb24gc2V0RGVmYXVsdHMobmV3RGVmYXVsdHMpIHtcbiAgY29weUV4aXN0aW5nUHJvcGVydGllcyhuZXdEZWZhdWx0cywgZGVmYXVsdHMpO1xuICBzZXREZWZhdWx0cyQyKG5ld0RlZmF1bHRzKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgc2V0RGVmYXVsdHMkMShuZXdEZWZhdWx0cyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG59XG5cbmNvbnN0IHByZWZpeFJFID0gL14oLio/KV8vO1xuZnVuY3Rpb24gYWRkRXh0ZW5zaW9uVG9Db250ZXh0KGdsLCBleHRlbnNpb25OYW1lKSB7XG4gIGdsRW51bVRvU3RyaW5nKGdsLCAwKTtcbiAgY29uc3QgZXh0ID0gZ2wuZ2V0RXh0ZW5zaW9uKGV4dGVuc2lvbk5hbWUpO1xuICBpZiAoZXh0KSB7XG4gICAgY29uc3QgZW51bXMgPSB7fTtcbiAgICBjb25zdCBmblN1ZmZpeCA9IHByZWZpeFJFLmV4ZWMoZXh0ZW5zaW9uTmFtZSlbMV07XG4gICAgY29uc3QgZW51bVN1ZmZpeCA9ICdfJyArIGZuU3VmZml4O1xuICAgIGZvciAoY29uc3Qga2V5IGluIGV4dCkge1xuICAgICAgY29uc3QgdmFsdWUgPSBleHRba2V5XTtcbiAgICAgIGNvbnN0IGlzRnVuYyA9IHR5cGVvZiAodmFsdWUpID09PSAnZnVuY3Rpb24nO1xuICAgICAgY29uc3Qgc3VmZml4ID0gaXNGdW5jID8gZm5TdWZmaXggOiBlbnVtU3VmZml4O1xuICAgICAgbGV0IG5hbWUgPSBrZXk7XG4gICAgICAvLyBleGFtcGxlcyBvZiB3aGVyZSB0aGlzIGlzIG5vdCB0cnVlIGFyZSBXRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfczN0Y1xuICAgICAgLy8gYW5kIFdFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9wdnJ0Y1xuICAgICAgaWYgKGtleS5lbmRzV2l0aChzdWZmaXgpKSB7XG4gICAgICAgIG5hbWUgPSBrZXkuc3Vic3RyaW5nKDAsIGtleS5sZW5ndGggLSBzdWZmaXgubGVuZ3RoKTtcbiAgICAgIH1cbiAgICAgIGlmIChnbFtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICghaXNGdW5jICYmIGdsW25hbWVdICE9PSB2YWx1ZSkge1xuICAgICAgICAgIHdhcm4kMShuYW1lLCBnbFtuYW1lXSwgdmFsdWUsIGtleSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpc0Z1bmMpIHtcbiAgICAgICAgICBnbFtuYW1lXSA9IGZ1bmN0aW9uKG9yaWdGbikge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gb3JpZ0ZuLmFwcGx5KGV4dCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2xbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICBlbnVtc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHBhc3MgdGhlIG1vZGlmaWVkIGVudW1zIHRvIGdsRW51bVRvU3RyaW5nXG4gICAgZW51bXMuY29uc3RydWN0b3IgPSB7XG4gICAgICBuYW1lOiBleHQuY29uc3RydWN0b3IubmFtZSxcbiAgICB9O1xuICAgIGdsRW51bVRvU3RyaW5nKGVudW1zLCAwKTtcbiAgfVxuICByZXR1cm4gZXh0O1xufVxuXG4vKlxuICogSWYgeW91J3JlIHdvbmRlcmluZyB3aHkgdGhlIGNvZGUgZG9lc24ndCBqdXN0IGl0ZXJhdGVcbiAqIG92ZXIgYWxsIGV4dGVuc2lvbnMgdXNpbmcgYGdsLmdldEV4dGVuc2lvbnNgIGlzIHRoYXQgaXQncyBwb3NzaWJsZVxuICogc29tZSBmdXR1cmUgZXh0ZW5zaW9uIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoaXMgY29kZS4gUmF0aGVyIHRoYW5cbiAqIGhhdmUgdGhpbmcgc3VkZGVubHkgYnJlYWsgaXQgc2VlbXMgYmV0dGVyIHRvIG1hbnVhbGx5IGFkZCB0byB0aGlzXG4gKiBsaXN0LlxuICpcbiAqL1xuY29uc3Qgc3VwcG9ydGVkRXh0ZW5zaW9ucyA9IFtcbiAgJ0FOR0xFX2luc3RhbmNlZF9hcnJheXMnLFxuICAnRVhUX2JsZW5kX21pbm1heCcsXG4gICdFWFRfY29sb3JfYnVmZmVyX2Zsb2F0JyxcbiAgJ0VYVF9jb2xvcl9idWZmZXJfaGFsZl9mbG9hdCcsXG4gICdFWFRfZGlzam9pbnRfdGltZXJfcXVlcnknLFxuICAnRVhUX2Rpc2pvaW50X3RpbWVyX3F1ZXJ5X3dlYmdsMicsXG4gICdFWFRfZnJhZ19kZXB0aCcsXG4gICdFWFRfc1JHQicsXG4gICdFWFRfc2hhZGVyX3RleHR1cmVfbG9kJyxcbiAgJ0VYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpYycsXG4gICdPRVNfZWxlbWVudF9pbmRleF91aW50JyxcbiAgJ09FU19zdGFuZGFyZF9kZXJpdmF0aXZlcycsXG4gICdPRVNfdGV4dHVyZV9mbG9hdCcsXG4gICdPRVNfdGV4dHVyZV9mbG9hdF9saW5lYXInLFxuICAnT0VTX3RleHR1cmVfaGFsZl9mbG9hdCcsXG4gICdPRVNfdGV4dHVyZV9oYWxmX2Zsb2F0X2xpbmVhcicsXG4gICdPRVNfdmVydGV4X2FycmF5X29iamVjdCcsXG4gICdXRUJHTF9jb2xvcl9idWZmZXJfZmxvYXQnLFxuICAnV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX2F0YycsXG4gICdXRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfZXRjMScsXG4gICdXRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfcHZydGMnLFxuICAnV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX3MzdGMnLFxuICAnV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX3MzdGNfc3JnYicsXG4gICdXRUJHTF9kZXB0aF90ZXh0dXJlJyxcbiAgJ1dFQkdMX2RyYXdfYnVmZmVycycsXG5dO1xuXG4vKipcbiAqIEF0dGVtcHRzIHRvIGVuYWJsZSBhbGwgb2YgdGhlIGZvbGxvd2luZyBleHRlbnNpb25zXG4gKiBhbmQgYWRkIHRoZWlyIGZ1bmN0aW9ucyBhbmQgY29uc3RhbnRzIHRvIHRoZVxuICogYFdlYkdMUmVuZGVyaW5nQ29udGV4dGAgdXNpbmcgdGhlaXIgbm9ybWFsIG5vbi1leHRlbnNpb24gbGlrZSBuYW1lcy5cbiAqXG4gKiAgICAgIEFOR0xFX2luc3RhbmNlZF9hcnJheXNcbiAqICAgICAgRVhUX2JsZW5kX21pbm1heFxuICogICAgICBFWFRfY29sb3JfYnVmZmVyX2Zsb2F0XG4gKiAgICAgIEVYVF9jb2xvcl9idWZmZXJfaGFsZl9mbG9hdFxuICogICAgICBFWFRfZGlzam9pbnRfdGltZXJfcXVlcnlcbiAqICAgICAgRVhUX2Rpc2pvaW50X3RpbWVyX3F1ZXJ5X3dlYmdsMlxuICogICAgICBFWFRfZnJhZ19kZXB0aFxuICogICAgICBFWFRfc1JHQlxuICogICAgICBFWFRfc2hhZGVyX3RleHR1cmVfbG9kXG4gKiAgICAgIEVYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpY1xuICogICAgICBPRVNfZWxlbWVudF9pbmRleF91aW50XG4gKiAgICAgIE9FU19zdGFuZGFyZF9kZXJpdmF0aXZlc1xuICogICAgICBPRVNfdGV4dHVyZV9mbG9hdFxuICogICAgICBPRVNfdGV4dHVyZV9mbG9hdF9saW5lYXJcbiAqICAgICAgT0VTX3RleHR1cmVfaGFsZl9mbG9hdFxuICogICAgICBPRVNfdGV4dHVyZV9oYWxmX2Zsb2F0X2xpbmVhclxuICogICAgICBPRVNfdmVydGV4X2FycmF5X29iamVjdFxuICogICAgICBXRUJHTF9jb2xvcl9idWZmZXJfZmxvYXRcbiAqICAgICAgV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX2F0Y1xuICogICAgICBXRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfZXRjMVxuICogICAgICBXRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfcHZydGNcbiAqICAgICAgV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX3MzdGNcbiAqICAgICAgV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX3MzdGNfc3JnYlxuICogICAgICBXRUJHTF9kZXB0aF90ZXh0dXJlXG4gKiAgICAgIFdFQkdMX2RyYXdfYnVmZmVyc1xuICpcbiAqIEZvciBleGFtcGxlIGlmIGBBTkdMRV9pbnN0YW5jZWRfYXJyYXlzYCBleGlzdHMgdGhlbiB0aGUgZnVuY3Rpb25zXG4gKiBgZHJhd0FycmF5c0luc3RhbmNlZGAsIGBkcmF3RWxlbWVudHNJbnN0YW5jZWRgLCBgdmVydGV4QXR0cmliRGl2aXNvcmBcbiAqIGFuZCB0aGUgY29uc3RhbnQgYFZFUlRFWF9BVFRSSUJfQVJSQVlfRElWSVNPUmAgYXJlIGFkZGVkIHRvIHRoZVxuICogYFdlYkdMUmVuZGVyaW5nQ29udGV4dGAuXG4gKlxuICogTm90ZSB0aGF0IGlmIHlvdSB3YW50IHRvIGtub3cgaWYgdGhlIGV4dGVuc2lvbiBleGlzdHMgeW91IHNob3VsZFxuICogcHJvYmFibHkgY2FsbCBgZ2wuZ2V0RXh0ZW5zaW9uYCBmb3IgZWFjaCBleHRlbnNpb24uIEFsdGVybmF0aXZlbHlcbiAqIHlvdSBjYW4gY2hlY2sgZm9yIHRoZSBleGlzdGVuY2Ugb2YgdGhlIGZ1bmN0aW9ucyBvciBjb25zdGFudHMgdGhhdFxuICogYXJlIGV4cGVjdGVkIHRvIGJlIGFkZGVkLiBGb3IgZXhhbXBsZVxuICpcbiAqICAgIGlmIChnbC5kcmF3QnVmZmVycykge1xuICogICAgICAvLyBFaXRoZXIgV0VCR0xfZHJhd19idWZmZXJzIHdhcyBlbmFibGVkIE9SIHlvdSdyZSBydW5uaW5nIGluIFdlYkdMMlxuICogICAgICAuLi4uXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIEEgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuZnVuY3Rpb24gYWRkRXh0ZW5zaW9uc1RvQ29udGV4dChnbCkge1xuICBmb3IgKGxldCBpaSA9IDA7IGlpIDwgc3VwcG9ydGVkRXh0ZW5zaW9ucy5sZW5ndGg7ICsraWkpIHtcbiAgICBhZGRFeHRlbnNpb25Ub0NvbnRleHQoZ2wsIHN1cHBvcnRlZEV4dGVuc2lvbnNbaWldKTtcbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB3ZWJnbCBjb250ZXh0LlxuICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzIFRoZSBjYW52YXMgdGFnIHRvIGdldFxuICogICAgIGNvbnRleHQgZnJvbS4gSWYgb25lIGlzIG5vdCBwYXNzZWQgaW4gb25lIHdpbGwgYmVcbiAqICAgICBjcmVhdGVkLlxuICogQHJldHVybiB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBUaGUgY3JlYXRlZCBjb250ZXh0LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlM0RDb250ZXh0KGNhbnZhcywgb3B0X2F0dHJpYnMpIHtcbiAgY29uc3QgbmFtZXMgPSBbXCJ3ZWJnbFwiLCBcImV4cGVyaW1lbnRhbC13ZWJnbFwiXTtcbiAgbGV0IGNvbnRleHQgPSBudWxsO1xuICBmb3IgKGxldCBpaSA9IDA7IGlpIDwgbmFtZXMubGVuZ3RoOyArK2lpKSB7XG4gICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KG5hbWVzW2lpXSwgb3B0X2F0dHJpYnMpO1xuICAgIGlmIChjb250ZXh0KSB7XG4gICAgICBpZiAoZGVmYXVsdHMuYWRkRXh0ZW5zaW9uc1RvQ29udGV4dCkge1xuICAgICAgICBhZGRFeHRlbnNpb25zVG9Db250ZXh0KGNvbnRleHQpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBjb250ZXh0O1xufVxuXG4vKipcbiAqIEdldHMgYSBXZWJHTDEgY29udGV4dC5cbiAqXG4gKiBOb3RlOiBXaWxsIGF0dGVtcHQgdG8gZW5hYmxlIFZlcnRleCBBcnJheSBPYmplY3RzXG4gKiBhbmQgYWRkIFdlYkdMMiBlbnRyeSBwb2ludHMuICh1bmxlc3MgeW91IGZpcnN0IHNldCBkZWZhdWx0cyB3aXRoXG4gKiBgdHdnbC5zZXREZWZhdWx0cyh7ZW5hYmxlVmVydGV4QXJyYXlPYmplY3RzOiBmYWxzZX0pYDtcbiAqXG4gKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fSBjYW52YXMgYSBjYW52YXMgZWxlbWVudC5cbiAqIEBwYXJhbSB7V2ViR0xDb250ZXh0QXR0cmlidXRlc30gW29wdF9hdHRyaWJzXSBvcHRpb25hbCB3ZWJnbCBjb250ZXh0IGNyZWF0aW9uIGF0dHJpYnV0ZXNcbiAqIEByZXR1cm4ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gVGhlIGNyZWF0ZWQgY29udGV4dC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICogQGRlcHJlY2F0ZWRcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFdlYkdMQ29udGV4dChjYW52YXMsIG9wdF9hdHRyaWJzKSB7XG4gIGNvbnN0IGdsID0gY3JlYXRlM0RDb250ZXh0KGNhbnZhcywgb3B0X2F0dHJpYnMpO1xuICByZXR1cm4gZ2w7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHdlYmdsIGNvbnRleHQuXG4gKlxuICogV2lsbCByZXR1cm4gYSBXZWJHTDIgY29udGV4dCBpZiBwb3NzaWJsZS5cbiAqXG4gKiBZb3UgY2FuIGNoZWNrIGlmIGl0J3MgV2ViR0wyIHdpdGhcbiAqXG4gKiAgICAgdHdnbC5pc1dlYkdMMihnbCk7XG4gKlxuICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzIFRoZSBjYW52YXMgdGFnIHRvIGdldFxuICogICAgIGNvbnRleHQgZnJvbS4gSWYgb25lIGlzIG5vdCBwYXNzZWQgaW4gb25lIHdpbGwgYmVcbiAqICAgICBjcmVhdGVkLlxuICogQHJldHVybiB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBUaGUgY3JlYXRlZCBjb250ZXh0LlxuICovXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KGNhbnZhcywgb3B0X2F0dHJpYnMpIHtcbiAgY29uc3QgbmFtZXMgPSBbXCJ3ZWJnbDJcIiwgXCJ3ZWJnbFwiLCBcImV4cGVyaW1lbnRhbC13ZWJnbFwiXTtcbiAgbGV0IGNvbnRleHQgPSBudWxsO1xuICBmb3IgKGxldCBpaSA9IDA7IGlpIDwgbmFtZXMubGVuZ3RoOyArK2lpKSB7XG4gICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KG5hbWVzW2lpXSwgb3B0X2F0dHJpYnMpO1xuICAgIGlmIChjb250ZXh0KSB7XG4gICAgICBpZiAoZGVmYXVsdHMuYWRkRXh0ZW5zaW9uc1RvQ29udGV4dCkge1xuICAgICAgICBhZGRFeHRlbnNpb25zVG9Db250ZXh0KGNvbnRleHQpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBjb250ZXh0O1xufVxuXG4vKipcbiAqIEdldHMgYSBXZWJHTCBjb250ZXh0LiAgV2lsbCBjcmVhdGUgYSBXZWJHTDIgY29udGV4dCBpZiBwb3NzaWJsZS5cbiAqXG4gKiBZb3UgY2FuIGNoZWNrIGlmIGl0J3MgV2ViR0wyIHdpdGhcbiAqXG4gKiAgICBmdW5jdGlvbiBpc1dlYkdMMihnbCkge1xuICogICAgICByZXR1cm4gZ2wuZ2V0UGFyYW1ldGVyKGdsLlZFUlNJT04pLmluZGV4T2YoXCJXZWJHTCAyLjAgXCIpID09IDA7XG4gKiAgICB9XG4gKlxuICogTm90ZTogRm9yIGEgV2ViR0wxIGNvbnRleHQgd2lsbCBhdHRlbXB0IHRvIGVuYWJsZSBWZXJ0ZXggQXJyYXkgT2JqZWN0c1xuICogYW5kIGFkZCBXZWJHTDIgZW50cnkgcG9pbnRzLiAodW5sZXNzIHlvdSBmaXJzdCBzZXQgZGVmYXVsdHMgd2l0aFxuICogYHR3Z2wuc2V0RGVmYXVsdHMoe2VuYWJsZVZlcnRleEFycmF5T2JqZWN0czogZmFsc2V9KWA7XG4gKlxuICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzIGEgY2FudmFzIGVsZW1lbnQuXG4gKiBAcGFyYW0ge1dlYkdMQ29udGV4dEF0dHJpYnV0ZXN9IFtvcHRfYXR0cmlic10gb3B0aW9uYWwgd2ViZ2wgY29udGV4dCBjcmVhdGlvbiBhdHRyaWJ1dGVzXG4gKiBAcmV0dXJuIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IFRoZSBjcmVhdGVkIGNvbnRleHQuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuZnVuY3Rpb24gZ2V0Q29udGV4dChjYW52YXMsIG9wdF9hdHRyaWJzKSB7XG4gIGNvbnN0IGdsID0gY3JlYXRlQ29udGV4dChjYW52YXMsIG9wdF9hdHRyaWJzKTtcbiAgcmV0dXJuIGdsO1xufVxuXG4vKipcbiAqIFJlc2l6ZSBhIGNhbnZhcyB0byBtYXRjaCB0aGUgc2l6ZSBpdCdzIGRpc3BsYXllZC5cbiAqIEBwYXJhbSB7SFRNTENhbnZhc0VsZW1lbnR9IGNhbnZhcyBUaGUgY2FudmFzIHRvIHJlc2l6ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbXVsdGlwbGllcl0gU28geW91IGNhbiBwYXNzIGluIGB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb2Agb3Igb3RoZXIgc2NhbGUgdmFsdWUgaWYgeW91IHdhbnQgdG8uXG4gKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBjYW52YXMgd2FzIHJlc2l6ZWQuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuZnVuY3Rpb24gcmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZShjYW52YXMsIG11bHRpcGxpZXIpIHtcbiAgbXVsdGlwbGllciA9IG11bHRpcGxpZXIgfHwgMTtcbiAgbXVsdGlwbGllciA9IE1hdGgubWF4KDAsIG11bHRpcGxpZXIpO1xuICBjb25zdCB3aWR0aCAgPSBjYW52YXMuY2xpZW50V2lkdGggICogbXVsdGlwbGllciB8IDA7XG4gIGNvbnN0IGhlaWdodCA9IGNhbnZhcy5jbGllbnRIZWlnaHQgKiBtdWx0aXBsaWVyIHwgMDtcbiAgaWYgKGNhbnZhcy53aWR0aCAhPT0gd2lkdGggfHwgY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCB7IGFkZEV4dGVuc2lvbnNUb0NvbnRleHQsIGF0dHJpYnV0ZXMsIGJpbmRGcmFtZWJ1ZmZlckluZm8sIGJpbmRUcmFuc2Zvcm1GZWVkYmFja0luZm8sIGJpbmRVbmlmb3JtQmxvY2ssIGNhbkZpbHRlciwgY2FuR2VuZXJhdGVNaXBtYXAsIGNyZWF0ZUF0dHJpYnNGcm9tQXJyYXlzLCBjcmVhdGVBdHRyaWJ1dGVTZXR0ZXJzLCBjcmVhdGVCdWZmZXJGcm9tQXJyYXksIGNyZWF0ZUJ1ZmZlckZyb21UeXBlZEFycmF5LCBjcmVhdGVCdWZmZXJJbmZvRnJvbUFycmF5cywgY3JlYXRlQnVmZmVyc0Zyb21BcnJheXMsIGNyZWF0ZUZyYW1lYnVmZmVySW5mbywgY3JlYXRlUHJvZ3JhbSwgY3JlYXRlUHJvZ3JhbUFzeW5jLCBjcmVhdGVQcm9ncmFtRnJvbVNjcmlwdHMsIGNyZWF0ZVByb2dyYW1Gcm9tU291cmNlcywgY3JlYXRlUHJvZ3JhbUluZm8sIGNyZWF0ZVByb2dyYW1JbmZvQXN5bmMsIGNyZWF0ZVByb2dyYW1JbmZvRnJvbVByb2dyYW0sIGNyZWF0ZVByb2dyYW1JbmZvcywgY3JlYXRlUHJvZ3JhbUluZm9zQXN5bmMsIGNyZWF0ZVByb2dyYW1zLCBjcmVhdGVQcm9ncmFtc0FzeW5jLCBjcmVhdGVTYW1wbGVyLCBjcmVhdGVTYW1wbGVycywgY3JlYXRlVGV4dHVyZSwgY3JlYXRlVGV4dHVyZXMsIGNyZWF0ZVRyYW5zZm9ybUZlZWRiYWNrLCBjcmVhdGVUcmFuc2Zvcm1GZWVkYmFja0luZm8sIGNyZWF0ZVVuaWZvcm1CbG9ja0luZm8sIGNyZWF0ZVVuaWZvcm1CbG9ja0luZm9Gcm9tUHJvZ3JhbSwgY3JlYXRlVW5pZm9ybUJsb2NrU3BlY0Zyb21Qcm9ncmFtLCBjcmVhdGVVbmlmb3JtU2V0dGVycywgY3JlYXRlVkFPQW5kU2V0QXR0cmlidXRlcywgY3JlYXRlVkFPRnJvbUJ1ZmZlckluZm8sIGNyZWF0ZVZlcnRleEFycmF5SW5mbywgZHJhdywgZHJhd0J1ZmZlckluZm8sIGRyYXdPYmplY3RMaXN0LCBmcmFtZWJ1ZmZlcnMsIGdldEFycmF5JDEgYXMgZ2V0QXJyYXlfLCBnZXRCeXRlc1BlckVsZW1lbnRGb3JJbnRlcm5hbEZvcm1hdCwgZ2V0Q29udGV4dCwgZ2V0Rm9ybWF0QW5kVHlwZUZvckludGVybmFsRm9ybWF0LCBnZXRHTFR5cGVGb3JUeXBlZEFycmF5LCBnZXRHTFR5cGVGb3JUeXBlZEFycmF5VHlwZSwgZ2V0TnVtQ29tcG9uZW50c0ZvckZvcm1hdCwgZ2V0TnVtQ29tcG9uZW50cyQxIGFzIGdldE51bUNvbXBvbmVudHNfLCBnZXRUeXBlZEFycmF5VHlwZUZvckdMVHlwZSwgZ2V0V2ViR0xDb250ZXh0LCBnbEVudW1Ub1N0cmluZywgaXNBcnJheUJ1ZmZlciQxIGFzIGlzQXJyYXlCdWZmZXIsIGlzV2ViR0wxLCBpc1dlYkdMMiwgbG9hZFRleHR1cmVGcm9tVXJsLCBtNCwgcHJpbWl0aXZlcywgcHJvZ3JhbXMsIHJlc2l6ZUNhbnZhc1RvRGlzcGxheVNpemUsIHJlc2l6ZUZyYW1lYnVmZmVySW5mbywgcmVzaXplVGV4dHVyZSwgc2V0QXR0cmliSW5mb0J1ZmZlckZyb21BcnJheSwgc2V0RGVmYXVsdHMkMiBhcyBzZXRBdHRyaWJ1dGVEZWZhdWx0c18sIHNldEF0dHJpYnV0ZVByZWZpeCwgc2V0QXR0cmlidXRlcywgc2V0QmxvY2tVbmlmb3Jtcywgc2V0QnVmZmVyc0FuZEF0dHJpYnV0ZXMsIHNldERlZmF1bHRUZXh0dXJlQ29sb3IsIHNldERlZmF1bHRzLCBzZXRFbXB0eVRleHR1cmUsIHNldFNhbXBsZXJQYXJhbWV0ZXJzLCBzZXREZWZhdWx0cyQxIGFzIHNldFRleHR1cmVEZWZhdWx0c18sIHNldFRleHR1cmVGaWx0ZXJpbmdGb3JTaXplLCBzZXRUZXh0dXJlRnJvbUFycmF5LCBzZXRUZXh0dXJlRnJvbUVsZW1lbnQsIHNldFRleHR1cmVQYXJhbWV0ZXJzLCBzZXRVbmlmb3JtQmxvY2ssIHNldFVuaWZvcm1zLCBzZXRVbmlmb3Jtc0FuZEJpbmRUZXh0dXJlcywgdGV4dHVyZXMsIHR5cGVkYXJyYXlzLCB1dGlscywgdjMsIHZlcnRleEFycmF5cyB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIiN2ZXJzaW9uIDMwMCBlc1xcclxcblxcclxcbnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xcclxcblxcclxcbm91dCB2ZWM0IGZyYWdDb2xvcjtcXHJcXG5cXHJcXG52b2lkIG1haW4oKSB7XFxyXFxuICBmcmFnQ29sb3IgPSB2ZWM0KDEuMCwgMC4wLCAwLjAsIDEuMCk7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIiN2ZXJzaW9uIDMwMCBlc1xcclxcblxcclxcbmluIHZlYzMgcG9zaXRpb247XFxyXFxub3V0IHZlYzQgZnJhZ1Bvc2l0aW9uO1xcclxcblxcclxcbnZvaWQgbWFpbigpIHtcXHJcXG4gIGZyYWdQb3NpdGlvbiA9IHZlYzQocG9zaXRpb24sIDEuMCk7XFxyXFxuICBnbF9Qb3NpdGlvbiA9IGZyYWdQb3NpdGlvbjtcXHJcXG59XCIiLCJpbXBvcnQgeyBcclxuICBjcmVhdGVQcm9ncmFtSW5mbywgXHJcbiAgY3JlYXRlQnVmZmVySW5mb0Zyb21BcnJheXMsIFxyXG4gIHJlc2l6ZUNhbnZhc1RvRGlzcGxheVNpemUsXHJcbiAgc2V0QnVmZmVyc0FuZEF0dHJpYnV0ZXMsXHJcbiAgc2V0VW5pZm9ybXMsXHJcbiAgZHJhd0J1ZmZlckluZm9cclxufSBmcm9tIFwidHdnbC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhZGVyU2tldGNoIHtcclxuICBjb25zdHJ1Y3RvcihjYW52YXMsIGZyYWdtZW50U2hhZGVyLCB2ZXJ0ZXhTaGFkZXIpIHtcclxuICAgIHRoaXMuZ2wgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbDInKTtcclxuICAgIHRoaXMuZnJhZ21lbnRTaGFkZXIgPSBmcmFnbWVudFNoYWRlcjtcclxuICAgIHRoaXMudmVydGV4U2hhZGVyID0gdmVydGV4U2hhZGVyO1xyXG4gICAgdGhpcy5hbmltYXRpb25GcmFtZUlkID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLnByb2dyYW1JbmZvID0gY3JlYXRlUHJvZ3JhbUluZm8odGhpcy5nbCwgW3RoaXMudmVydGV4U2hhZGVyLCB0aGlzLmZyYWdtZW50U2hhZGVyXSk7XHJcbiAgICB0aGlzLmJ1ZmZlckluZm8gPSBjcmVhdGVCdWZmZXJJbmZvRnJvbUFycmF5cyh0aGlzLmdsLCB7XHJcbiAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgbnVtQ29tcG9uZW50czogMixcclxuICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAtMSwgLTEsXHJcbiAgICAgICAgICAxLCAtMSxcclxuICAgICAgICAgIC0xLCAgMSxcclxuICAgICAgICAgIC0xLCAgMSxcclxuICAgICAgICAgIDEsIC0xLFxyXG4gICAgICAgICAgMSwgIDEsXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudW5pZm9ybXMgPSB7XHJcbiAgICAgIHVfdGltZTogMCxcclxuICAgICAgdV9yZXNvbHV0aW9uOiBbdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodF0sXHJcbiAgICAgIHVfbW91c2U6IFswLCAwXSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIodGltZSkge1xyXG4gICAgcmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZSh0aGlzLmNhbnZhcyk7XHJcbiAgICB0aGlzLmdsLnZpZXdwb3J0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbUluZm8ucHJvZ3JhbSk7XHJcbiAgICBzZXRCdWZmZXJzQW5kQXR0cmlidXRlcyh0aGlzLmdsLCB0aGlzLnByb2dyYW1JbmZvLCB0aGlzLmJ1ZmZlckluZm8pO1xyXG4gICAgc2V0VW5pZm9ybXModGhpcy5wcm9ncmFtSW5mbywgeyB1X3Jlc29sdXRpb246IFt0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0XSB9KTtcclxuICAgIGRyYXdCdWZmZXJJbmZvKHRoaXMuZ2wsIHRoaXMuYnVmZmVySW5mbyk7XHJcblxyXG4gICAgdGhpcy5hbmltYXRpb25GcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVuZGVyLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZW5kZXIuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBzdG9wKCkge1xyXG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZUlkKTtcclxuICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFNoYWRlclNrZXRjaCBmcm9tIFwiLi9TaGFkZXJTa2V0Y2hcIjtcclxuaW1wb3J0IGZyYWdtZW50U2hhZGVyIGZyb20gXCIuL3NoYWRlcnMvZnJhZy5nbHNsXCI7XHJcbmltcG9ydCB2ZXJ0ZXhTaGFkZXIgZnJvbSBcIi4vc2hhZGVycy92ZXJ0Lmdsc2xcIjtcclxuXHJcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FudmFzXCIpO1xyXG5jb25zdCBza2V0Y2ggPSBuZXcgU2hhZGVyU2tldGNoKGNhbnZhcywgZnJhZ21lbnRTaGFkZXIsIHZlcnRleFNoYWRlcik7XHJcbnNrZXRjaC5zdGFydCgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=