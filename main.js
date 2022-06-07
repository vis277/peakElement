let arr = [1, 2, 3];
let n = 3;

function peak(arr, n) {
  let obj = {};
  for (let i = 0; i < n; i++) {
    obj[arr[i]] = true;
  }
  let arr2 = Object.keys(obj);
  let num = Number(arr2[arr2.length - 1]);
  for (let i = 0; i < n; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
}
console.log(peak(arr, n));
