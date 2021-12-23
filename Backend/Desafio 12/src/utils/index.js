const math = (number) => {
  let total = [];
  for (let i = 0; i < number; i++) {
    total[i] = Math.random() * (1001 - 1) + 1;
  }
  return total;
};

process.on("message", (message) => {
  let total = math(message);
  process.send(total);
});
