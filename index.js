function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return receivesAFunction;
}

function bildad() {
  return "Hey bildad, whats up";
}

function returnsAnAnonymousFunction() {
  return () => {};
}

const result = returnsAnAnonymousFunction();
console.log(typeof result); // Outputs: "function"
console.log(result.name); 