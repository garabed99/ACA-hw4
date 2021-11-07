function abacabaPattern(num) {
  if (num < 1) {
    return "";
  }

  return (
    abacabaPattern(num - 1) +
    String.fromCharCode(64 + num) +
    abacabaPattern(num - 1)
  );
}

console.log(abacabaPattern(3));
