import React, { useState } from "react";
import axios from "axios";

function App() {
  // const [maxLength, setMaxLength] = useState(10);
  const [chuckJoke, setChuckJoke] = useState([]);
  const [error, setError] = useState(null);

  // Handles input changes
  const handleChange = (e) => {
    setMaxLength(e.target.value);
  };

  // Handles search click to get status info
  const handleSearch = async () => {
    // console.log(maxLength);

    // if (!maxLength) {
    //   setError("Please enter a Maximum Length.");
    //   return;
    // }
    setError(null); // Clear previous error
    try {
      const response = await axios.get(
        `https://api.chucknorris.io/jokes/random`
        // `https://catfact.ninja/facts?limit=${maxLength}`
      );

      // destructure the data from the response
      const data = response.data.value;
      console.log(data);

      setChuckJoke(data);
    } catch (err) {
      setError("Could not retrieve information. Please check the status code.");
      setStatusInfo(null);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Chuck jokes</h1>
      <button
        onClick={handleSearch}
        style={{ padding: "10px", marginTop: "10px", width: "100%" }}>
        Push the button
      </button>

      {/* TODO: Display error message if there is an error */}
      {error && <h2 style="{color: red}">An error occurred</h2>}

      {chuckJoke ? (
        <div style={{ marginTop: "20px" }}>
          <h2>{chuckJoke}</h2>
        </div>
      ) : (
        <h2>no joke to display :(</h2>
      )}
      {/* TODO: If there are no facts, display "no facts to display" */}
    </div>
  );
}

export default App;
