// Function to find the nearest integer to a target in an array using binary search algorithm 
function binarySearch(arr, target) {

// Base case: if the array is empty, return null 
if (arr.length === 0) { return null; }

// Initialize lower and upper bounds of search range 
let low = 0; 
let high = arr.length - 1;

// Initialize result with first element of array 
let result = arr[0];

// Loop while low <= high 
while (low <= high) { // Find middle index and element by adding low and high and dividing by 2 
    let mid = Math.floor((low + high) / 2); 
    let midElement = arr[mid];

// If middle element is equal to target, return it
if (midElement === target) {
    return midElement;
  }
  
  // If middle element is closer to target than current result, update result with middle element
  if (Math.abs(midElement - target) < Math.abs(result - target)) {
    result = midElement;
  }
  
  // If target is less than middle element, set high to mid - 1
  if (target < midElement) {
    high = mid - 1;
  }
  
  // If target is greater than middle element, set low to mid + 1
  else {
    low = mid + 1;
  }
  }
  
  // Return result 
  return result; }
  
  // Function to find the nearest integer to M on the number line after deleting P from the number line 
  function deleteNumbers(N, M, P) {
  
  // Sort P in ascending order using sort() method 
  P.sort((a, b) => a - b);
  
  // Initialize minimum absolute difference and minimum number in P 
  let minDiff = Infinity; 
  let minNum = Infinity;
  
  // Loop for each element in P 
  for (let i = 0; i < N; i++) { // Find absolute difference between M and P[i] 
    let diff = Math.abs(M - P[i]);
  
  // If this difference is less than minDiff, update minDiff and minNum
  if (diff < minDiff) {
    minDiff = diff;
    minNum = P[i];
  }
  
  // If this difference is equal to minDiff and P[i] is less than minNum, update minNum
  else if (diff === minDiff && P[i] < minNum) {
    minNum = P[i];
  }
  }
  
  // Initialize left and right as nearest integers to M on its left and right side after deleting P 
  let left, right;
  
  // If minNum is equal to M or there is no element in P that is less than M, set left to M - 1 
  if (minNum === M || P[0] >= M) { left = M - 1; }
  
  // Else, set left to nearest integer to M in the subarray of P before minNum using binarySearch() 
  else { left = binarySearch(P.slice(0, i), M); }
  
  // If minNum is equal to M or there is no element in P that is greater than M, set right to M + 1 
  if (minNum === M || P[N - 1] <= M) { right = M + 1; }
  
  // Else, set right to nearest integer to M in the subarray of P after minNum using binarySearch() 
  else { right = binarySearch(P.slice(i + 1), M); }
  
  // Find absolute difference between left and M 
  let leftDiff = Math.abs(left - M);
  
  // Find absolute difference between right and M 
  let rightDiff = Math.abs(right - M);
  
  // If leftDiff is less than rightDiff, return left 
  if (leftDiff < rightDiff) { return left; }
  
  // If leftDiff is equal to rightDiff and left is less than right, return left 
  else if (leftDiff === rightDiff && left < right) { return left; }
  
  // Else, return right 
  else { return right; } }
  
  // Input data 
  let N = 5; 
  let M = 6; 
  let P = [4,7,10,6,5];
  
  // Output 
  
  console.log("Nearest integer to " + M + " after deleting " + P + " from the number line is: " + deleteNumbers(N,M,P));

//   //Driver Code
// var t =1;
// while(t--)
// {
//   var n1 = readline().trim();
//   var n2 = n1.split(" ");
//   var n = Number(n2[0]);
//   var m = Number(n2[1]); 
//   var temp = readline().trim();
//   var s = temp.split(" ");
//   for(i=0;i<n;i++)
//   {
//     s[i]=Number(s[i]);
//   }
//   var num  = solve(s,n,m);
//   print(num);
// }