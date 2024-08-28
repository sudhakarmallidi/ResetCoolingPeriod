import React, { useState } from 'react';
import './App.css';
import Region from './Region';
import LoadingButton from './LoadingButton';
import AlertDismissible from './AlertDismissible';
import MyNavBar from './MyNavBar';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [validate, setValidate] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Input value:', inputValue);
    setValidate(true);
  };

  return (
    <div>
      <div><MyNavBar></MyNavBar></div>
    <AlertDismissible></AlertDismissible>
    <div className="Container mt-5 dark-theme">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <Region></Region> <br/>
              <label htmlFor="inputField">Enter sysgenId:</label>
              <input
                type="text"
                className="form-control"
                id="inputField"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            <br/>
            {!validate && <button type="submit" className="btn btn-primary">Submit</button>}
            {validate && <LoadingButton></LoadingButton>}
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;