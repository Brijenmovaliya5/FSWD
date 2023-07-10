var a = [10, 20, 30, 40, 50];

function programm(params) {
  let min = a[0],
    max = a[0];
  for (var i = 0; i < params.length; i++) {
    if (min > a[i]) {
      min = a[i];
    }
    if (max < a[i]) {
      max = a[i];
    }
  }
  return min;
  //return(max);
}
programm(a);
