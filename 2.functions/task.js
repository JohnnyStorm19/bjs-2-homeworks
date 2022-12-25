//Mission #1
function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let avg = Number( ((arr.reduce((sum, current) => sum + current)) / arr.length).toFixed(2) );
  return { min: min, max: max, avg: avg };
}

//Mission #2
function summElementsWorker(...arr) {
  if(!arr.length) {
    return 0;
  }
  return arr.reduce( (sum, current) => sum + current );
}

function differenceMaxMinWorker(...arr) {
  if(!arr.length) {
    return 0;
  }

  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if(!arr.length) {
    return 0;
  }

  let sumOddElement  = 0;
  let sumEvenElement = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if(!arr.length) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement;
}

//Mission #3
function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  
  for(let i = 0; i < arrOfArr.length; i++) {
    const res = func(...arrOfArr[i]);
    if(maxWorkerResult < res) {
      maxWorkerResult = res;
    }
  }
  return maxWorkerResult;
}
