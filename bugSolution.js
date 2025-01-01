function foo(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero'); // Throw an error for division by zero
  } else if (a === 0) {
    return 0; // Correctly handles when a is 0
  } 
  return a / b; 
}