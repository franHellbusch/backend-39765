export const ThrowNewError = (name, meta = null) => {
  const newError = new Error();
  newError.name = name;
  newError.meta = meta;
  throw newError;
};
