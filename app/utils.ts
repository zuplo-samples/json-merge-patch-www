// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function serialize(value: any): any {
  return value && typeof value.toJSON === "function" ? value.toJSON() : value;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function apply(target: any, patch: any) {
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
      target[key] = apply(target[key], patch[key]);
    }
  }
  return target;
}
