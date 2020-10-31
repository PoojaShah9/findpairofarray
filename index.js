const getPairs = function (arr, sum) {
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == sum) {
        console.log("(" + arr[i] + "," + arr[j] + ")");
      }
    }
  }

};

const arr = [1, 5, 7, -1, 5];
const sum = 6;
getPairsCount(arr, sum);
