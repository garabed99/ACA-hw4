function getTreeValues(tree) {
  return Object.values(tree).reduce((arr, el) => {
    if (typeof el === "object") {
      if (el !== null) {
        arr.push(...getTreeValues(el));
      }
    } else arr.push(el);
    return arr;
  }, []);
}

const tree = {
  value: 12,
  next: {
    value: 20,
    next: {
      value: 30,
      next: {
        value: -10,
        next: null,
      },
    },
  },
};

console.log(getTreeValues(tree));
