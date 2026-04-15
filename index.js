// Step 5: Require datejs (ensure you've run 'npm install')
require('datejs');

/**
 * Step 1: Create the combineUsers function 
 * uses ...args to accept an indeterminate amount of arrays
 */
function combineUsers(...args) {
    
    // Step 2: Initialize the return object
    let combinedObject = {
        users: []
    };

    // Step 3: Loop through args to isolate each array
    args.forEach(userArray => {
        // Step 4: Use spread operator to merge arrays into the users attribute
        combinedObject.users = [...combinedObject.users, ...userArray];
    });

    /**
     * Step 5: Get today's date
     * Note: datejs extends the native Date object. 
     * We format it as M/d/yyyy (e.g., 4/15/2026)
     */
    combinedObject.merge_date = new Date().toString('M/d/yyyy');

    // Step 7: Return object
    return combinedObject;
}



module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};