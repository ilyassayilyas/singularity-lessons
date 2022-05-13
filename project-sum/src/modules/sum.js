export function sum(...args) {
  if (args.length === 0) {
    throw Error("Должно быть больше 1 аргумента");
  }

  return args.reduce((result, current) => result + current, 0);
}
