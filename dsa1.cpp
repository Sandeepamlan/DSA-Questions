#include <iostream>
#include <vector>
#include <algorithm> 
#include <bits/stdc++.h>
using namespace std;

int main() { // Input array 
vector<int> arr = {2, 4, 4, 3};

// Size of array 
int n = arr.size();

// Minimum median 
int min_median = INT_MAX;

// Loop for each element 
for (int i = 0; i < n; i++) { // Copy array into temporary array 
vector<int> temp = arr;

// Remove ith element from temp
temp.erase(temp.begin() + i);

// Find median of temp using nth_element()
nth_element(temp.begin(), temp.begin() + n/2 - 1, temp.end());
int median;
if (n % 2 == 0) {
  // If n is even, median is average of middle two elements
  median = (temp[n/2 - 1] + temp[n/2 - 2]) / 2;
} else {
  // If n is odd, median is middle element
  median = temp[n/2 - 1];
}

// Update min_median if median is smaller than min_median
if (median < min_median) {
  min_median = median;
}}


// Print min_median 
cout << "Minimum median after removing one element is: " << min_median << endl;

return 0; }