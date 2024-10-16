import equal from "fast-deep-equal";
// Implementation credits: https://github.com/pierreinglebert/json-merge-patch
// Full license below:

// The MIT License (MIT)

// Copyright (c) 2015 Pierre Inglebert

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

/* eslint-disable @typescript-eslint/no-explicit-any */
export function serialize(value: any): any {
  return value && typeof value.toJSON === "function" ? value.toJSON() : value;
}

export function mergePatch(target: any, patch: any) {
  patch = serialize(patch);
  if (patch === null || typeof patch !== "object" || Array.isArray(patch)) {
    return patch;
  }

  target = serialize(target);
  if (target === null || typeof target !== "object" || Array.isArray(target)) {
    target = {};
  }
  const keys = Object.keys(patch);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return target;
    }
    if (patch[key] === null) {
      if (target.hasOwnProperty(key)) {
        delete target[key];
      }
    } else {
      target[key] = mergePatch(target[key], patch[key]);
    }
  }
  return target;
}

function arrayEquals(before: Array<any>, after: Array<any>) {
  if (before.length !== after.length) {
    return false;
  }
  for (let i = 0; i < before.length; i++) {
    if (!equal(after[i], before[i])) {
      return false;
    }
  }
  return true;
}

export function createPatch(before: any, after: any) {
  before = serialize(before);
  after = serialize(after);

  if (
    before === null ||
    after === null ||
    typeof before !== "object" ||
    typeof after !== "object" ||
    Array.isArray(before) !== Array.isArray(after)
  ) {
    return after;
  }

  if (Array.isArray(before)) {
    if (!arrayEquals(before, after)) {
      return after;
    }
    return undefined;
  }

  const patch: Record<string, any> = {};
  const beforeKeys = Object.keys(before);
  const afterKeys = Object.keys(after);

  let key, i;

  // new elements
  const newKeys: Record<string, boolean> = {};
  for (i = 0; i < afterKeys.length; i++) {
    key = afterKeys[i];
    if (beforeKeys.indexOf(key) === -1) {
      newKeys[key] = true;
      patch[key] = serialize(after[key]);
    }
  }

  // removed & modified elements
  const removedKeys: Record<string, boolean> = {};
  for (i = 0; i < beforeKeys.length; i++) {
    key = beforeKeys[i];
    if (afterKeys.indexOf(key) === -1) {
      removedKeys[key] = true;
      patch[key] = null;
    } else {
      if (before[key] !== null && typeof before[key] === "object") {
        const subPatch = createPatch(before[key], after[key]);
        if (subPatch !== undefined) {
          patch[key] = subPatch;
        }
      } else if (before[key] !== after[key]) {
        patch[key] = serialize(after[key]);
      }
    }
  }

  return Object.keys(patch).length > 0 ? patch : undefined;
}
