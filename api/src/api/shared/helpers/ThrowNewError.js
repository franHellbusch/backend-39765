export const ThrowNewError = (name, message, meta = null) => {
  const newError = new Error(message);
  newError.name = name;
  newError.meta = meta;
  throw newError;
};
