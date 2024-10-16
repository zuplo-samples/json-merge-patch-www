import equal from "fast-deep-equal";
// Implementation credits: https://github.com/pierreinglebert/json-merge-patch

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
