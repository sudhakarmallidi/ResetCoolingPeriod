import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyComponent() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePostRequest = (formData) => {
    setIsLoading(true);
    axios.post('/your-api-endpoint', formData)
      .then(response => {
        setData(response.data);
        setIsLoading(false);
        setError(null);
        // Call the callback function here if needed
        if (typeof callback === 'function') {
          callback(response.data);
        }
      })
      .catch(error => {
        setIsLoading(false);
        setError(error);
        // Call the callback function with an error object if needed
        if (typeof callback === 'function') {
          callback(null, error);
        }
      });
  };

  // Example usage with a callback function
  const myCallback = (data) => {
    console.log('Callback received data:', data);
  };

  useEffect(() => {
    // Trigger the POST request when the component mounts or when the formData changes
    const formData = {
      // Your form data here
    };
    handlePostRequest(formData, myCallback);
  }, [formData]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div>
          {/* Render data here */}
        </div>
      )}
    </div>
  );
}

export default MyComponent;