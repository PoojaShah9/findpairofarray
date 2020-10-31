const getpairofSum = function (arr, sum) {
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == sum) {
         console.log("(" + arr[i] + "," + arr[j] + ")");
      }
    }
  }
};

const arr = [10, 20, 40, 50, 60, 70, -10];
const sum = 50;
getpairofSum(arr, sum);
