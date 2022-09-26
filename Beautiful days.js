function beautifulDays(i, j, k) {
  let count = 0;
  var days = [];
  for (let a = 0; a <= (j - i); a++) {
    let numb = i + a
    days.push(numb)
  }
  days

  for (var a = 0; a < days.length; a++) {
    let rev = 0;
    let num = days[a];
    let lastDigit;
    while (num != 0) {
      lastDigit = num % 10;
      rev = rev * 10 + lastDigit;
      num = Math.floor(num / 10);
    }
    rev

    if (Number.isInteger((days[a] - rev)/k)) {
      count++;
    }
    
  }
  return count

}
console.log(beautifulDays(20, 25, 6))