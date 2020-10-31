const myFUn = function(arr, S){
    const sums = [];
  const hashMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    let sumMinusElement = S - arr[i];
    if (hashMap.has(sumMinusElement.toString())) {
      sums.push([arr[i], sumMinusElement]);
    }
    hashMap.set(arr[i].toString(), arr[i])
  }
  console.log(sums);
}

const a1 = [10, 20, 10, 40, 50, 60, 70, -10];
myFUn(a1, 50)