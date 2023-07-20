// Function to find the kth smallest element in an array using quickselect algorithm function 
function quickselect(arr, k) {
    if (arr.length === 0) 
    { 
        return null;
     }

// Choose a random pivot element from the array 
let pivot = arr[Math.floor(Math.random() * arr.length)];

// Partition the array into three subarrays: left, equal, and right 
let left = []; 
let equal = []; 
let right = [];

for (let num of arr) {
     if (num < pivot) 
    { 
        left.push(num); 
    } else if (num === pivot) 
    { 
        equal.push(num); 
    } else { 
        right.push(num); 
    } 
}

// Recursively search in the subarray that contains the kth element 
if (k < left.length) 
{ 
    return quickselect(left, k);
} 
else if(k === left.length) 
{ 
    return pivot; 
} 
else if (k <= left.length + equal.length)
{ 
    return pivot;
} 
else { 
    return quickselect(right, k-(left.length + equal.length));
 } 
}

// Function to find the median of an array using quickselect function 
function Median(arr) { // Base case: if the array is empty, return null 
    if (arr.length === 0) 
    { return null; 
    }

// If the array has odd length, return the middle element 
if (arr.length % 2 === 1) 
{
     return quickselect(arr, Math.floor(arr.length / 2)); 
    }

// If the array has even length, return the average of middle two elements 
else { 
    return ((quickselect(arr, arr.length / 2) + quickselect(arr, arr.length / 2 - 1)) / 2 ); 
    } 

}

// Function to find the minimum possible median of an array after removing one element using median function 
function minMedian(arr,n) {

// Base case: if the array is empty or has only one element, return null 
if (n <= 1) { return null; }

// Initialize the minimum median 
let min_median = Infinity;

// Loop for each element 
for (let i = 0; i < n; i++) { // Copy the array into a temporary array 
    let temp = arr.slice();

// Remove the ith element from temp
temp.splice(i, 1);

// Find the median of temp using median function
let median = Median(temp);

// Update the minimum median if median is smaller than min_median
if (median < min_median) {
  min_median = median;
}
}

// Return the minimum median 
return min_median; 
}

// Input array 

let arr = [2, 4, 4, 3];
let n=arr.length;
console.log("Minimum median after removing one element is: " + minMedian(arr,n));
var num  = minMedian(arr,n);
  console.log(num);