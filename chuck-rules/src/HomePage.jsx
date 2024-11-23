import React, { useState } from "react";
import axios from "axios";


const HomePage = () => {

    // const [maxLength, setMaxLength] = useState(10);
  const [chuckJoke, setChuckJoke] = useState([]);
  const [error, setError] = useState(null);

  // Handles input changes
  // const handleChange = (e) => {
  //   setMaxLength(e.target.value);
  // };


  const sayhelloWorld = () =>{
    console.log("Hello World")
  }
  // Handles search click to get status info
  const handleSearch = async () => {
    console.log("handleSearch");
    setError(null); // Clear previous error
    try {
      const response = await axios.get(
        `https://api.chucknorris.io/jokes/random`
      );

      // destructure the data from the response
      const data = response.data;
      console.log(data);

      setChuckJoke(data.value);
    } catch (err) {
      setError("Could not retrieve information. Please check the status code.");
      setStatusInfo(null);
    }
  }
  return (
    
    <>
        <header className="header">
            <div className="container">
                <h1 className="site-title">Chuck Rules</h1>
                <p className="site-description">Your daily dose of Chuck Norris jokes!</p>
            </div>
        </header>

        <main className="main-content">
            <div className="container">
                <section className="joke">
                    <div className="info-box">
                        <img className="image" src="https://www.pngmart.com/files/11/Chuck-Norris-PNG-Image.png" />
                        <h2 className="joke-title">Joke of the Day</h2>
                        <article id="joke-text" className="joke-text">
                            {chuckJoke ? (
                                <div style={{ marginTop: "20px" }}>
                                <h2>{chuckJoke}</h2>
                                </div>
                            ) : (
                                <h2>no joke to display :</h2>
                            )}
                        </article>
                        {error && <h2 style="{color: red}">An error occurred</h2>}
                        <div className="button-container">
                            <button id="new-joke-button" className="joke-button" onClick={handleSearch}>Get Another Joke</button>
                        </div>
                        <button onClick={sayhelloWorld}>Say Hello World</button>
                    </div>
                </section>
            </div>
        </main>

        <footer className="footer">
            <div className="copy-container">
                <p>&copy; 2024 Chuck Rules. All rights reserved.</p>
            </div>
        </footer>

        
    </>
  )
}

export default HomePage