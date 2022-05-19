const GenerateFibonacci = (repeat, x, y) => {
  var fibonacci = [x, y];
  for (var i = 2; i < repeat; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  return fibonacci;
};

export default GenerateFibonacci;
