export const setInitialValue = (initValue) => {
  return initValue instanceof Function ? initValue() : initValue;
}