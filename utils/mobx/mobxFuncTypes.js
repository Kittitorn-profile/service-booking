import { types } from "mobx-state-tree";

const parseFunction = (value) => {
  const fn = eval(`(${value})`);
  if (typeof fn !== "function") {
    throw new Error(`${value} is not a valid function`);
  }
  return fn;
};

export const mobxFuncTypes = types.custom({
  name: "mobxFuncTypes",
  fromSnapshot(value) {
    return parseFunction(value);
  },
  toSnapshot(value) {
    return value.toString();
  },
  getValidationMessage(value) {
    try {
      parseFunction(value);
      return "";
    } catch (e) {
      return `value "${value}" is Not a valid function ${e}`;
    }
  },
  isTargetType(value) {
    return value instanceof Function;
  },
});
