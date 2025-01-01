# JavaScript Function: Unexpected Zero Handling

This repository demonstrates a common, yet subtle, error in JavaScript functions: unexpected handling of zero values. 
The `foo` function is supposed to divide 'a' by 'b'. However, it incorrectly handles cases where either 'a' or 'b' is zero, leading to unexpected or undefined behavior (and potential runtime errors if b is zero).

**The bug:** The function returns 0 immediately if either input is zero instead of throwing an error, returning NaN, or handling the invalid operation appropriately.

**The solution:**  The solution provided adds comprehensive zero-handling to prevent unexpected errors and improve the reliability of the function.   Refer to bugSolution.js for the corrected code.