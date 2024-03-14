import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Homepage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10"
    ) // Fetching 10 jokes
      .then((response) => response.json())
      .then((data) => setData(data.jokes));
  }, []);

  return (
    <div className="container mt-4">
      <h1>Welcome to the Homepage!</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Joke</th>
          </tr>
        </thead>
        <tbody>
          {data.map((joke, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{joke.joke}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Homepage;
