// Define a function that takes N and S as parameters
 function inferior_minions(N, S) { 
    // Initialize a variable to store the total cost 
    let cost = 0; 
    // Initialize a variable to store the maximum strength so far 
    let max_strength = S[0]; 
    // Loop through each minion in S 
    for (let i = 0; i < N; i++) { 
        // If the current minion’s strength is less than or equal to the maximum strength so far
        if (S[i] < max_strength) { 
            // Calculate the difference between the maximum strength and the current strength 
            let diff = max_strength - S[i]; 
            // Increment the cost by the difference plus one 
            cost += diff ; 
            // Update the current strength by adding the difference plus one 
            S[i] += diff + 1; } 
            // Update the maximum strength so far by taking the maximum of the current strength and the previous maximum 
            
         } // Return the cost 
         return cost; }

// Read the input from standard input 

 
let N = 5
let S = [3,4,1,5,2]

// Call the function and print the output to standard output 
console.log(inferior_minions(N, S));