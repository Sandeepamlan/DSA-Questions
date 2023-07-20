function findMinOperations(N, A) {
    const S = [5, 13, 17, 18, 19, 24, 32, 37];
    const B = new Array(N).fill(0);
    let count = 0;
  
    for (let i = 0; i < N; i++) {
      let nearestSmaller = null;
      for (let num of S) {
        if (num <= A[i]) {
          nearestSmaller = num;
        } else {
          break;
        }
      }
      if (nearestSmaller === null) {
        return -1;
      }
      const diff = A[i] - nearestSmaller;
      count += diff+1;
      B[i] += diff;
    }
  
    return count;
  }
  
  // Example usage:
  const N = 3;
  const A = [5,13,18]
  const minOperations = findMinOperations(N, A);
  console.log(minOperations);
  