function myFunc(a, b) {
  if (a === 0 && b === 0) {
    return NaN; // Handle both 0 case appropriately
  } else if (a === 0 || b === 0) {
    return 0; // Handle individual 0 case
  }
  return a / b;
}