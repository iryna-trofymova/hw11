function pow(num, degree) {
  if (degree === 0) {
    return 1;
  } else if (degree === 1) {
    return num;
  } else if (degree < 0) {
    return 1 / pow(num, -degree);
  } else {
    return num * pow(num, degree - 1);
  }
}
console.log(pow(2, 5));
console.log(pow(8, 0));
console.log(pow(8, -25));
