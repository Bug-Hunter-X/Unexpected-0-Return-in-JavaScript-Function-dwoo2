function myFunc(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This will cause a problem if a and b are both 0
  }
  return a / b;
}