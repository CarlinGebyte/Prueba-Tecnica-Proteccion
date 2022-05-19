const formatTime = (time) => {
  if (time < 10) time = "0" + time;
  return time;
};

const GenerateFibonacci = (repeat, x, y) => {
  let fibonacci = [x, y];
  let number
  for (let i = 0; i < repeat; i++) {
    number = fibonacci[i] + fibonacci[i + 1];
    fibonacci.push(number);
  }
  return fibonacci.reverse();
};

const FibonacciNumbers = () => {
  const date = new Date();
  const min = formatTime(date.getMinutes());
  const seg = date.getSeconds();
  const minToString = min.toString();
  const indexX = Number(minToString[0]);
  const indexY = Number(minToString[1]);
  return [seg, indexX, indexY];
};

export { GenerateFibonacci, FibonacciNumbers };
