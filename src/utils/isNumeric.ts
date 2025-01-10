const isNumeric = (x: string) => {
  return (typeof x === 'number' || typeof x === 'string') && !isNaN(Number(x));
};

export default isNumeric;
