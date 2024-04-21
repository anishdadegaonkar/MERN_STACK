async function fetchUserData(userId) {
    try {
        // Perform API request
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        
        // Check if request was successful
        if (!response.ok) {
            // If not successful, throw an error
            throw new Error('Failed to fetch user data');
        }
        
        // Parse response data as JSON
        const userData = await response.json();
        
        // Return user data
        return userData;
    } catch (error) {
        // If any error occurs during the process, throw it
        throw error;
    }
}

fetchUserData(2)
  .then(userData => {
    console.log(userData); // Output: User data fetched successfully
  })
  .catch(error => {
    console.error(error); // Output: Error: Failed to fetch user data
  });
