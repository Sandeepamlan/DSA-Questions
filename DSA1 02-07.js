function bitwiseXOR(n, a, b) {
   
    let xor = 0;
    for (let i = 0; i < n; i++) {
        
        for(let j=0;j<n;j++){
            var c = [];
            c[i] = a[i] + b[j];
            xor ^= (c[i])
             }
    }
    return xor;
  }
  
  // Example usage:
  let n = 3;
  let a = [2, 4, 8];
  let b = [1, 2, 3];
  console.log(bitwiseXOR(n, a, b)); // Output: 14
  