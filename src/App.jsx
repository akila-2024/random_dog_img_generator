
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [image, setImage] = useState(null); 
  const [loading, setLoading] = useState(true);

  const fetchDogImage = () => {
    setLoading(true);
    fetch("https://api.thedogapi.com/v1/images/search").then(response => response.json()).then(data =>{ setImage(data[0].url); setLoading(false);})
    .catch(error => {
      console.error("Error fetching the dog image: ", error);
      setLoading(false);
    })
  }


  

  // console.log(image);

  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div className="App">
      <h1>Random Dog Image</h1>
      <hr />
      {loading ? <p>Loading...</p>:

      <img src={image} alt="Random Dog Image" style={{width:'300px', height: 'auto'}} />
      }
      <br />

      <button onClick={fetchDogImage}>Get New Random Image</button>
    </div>
  );
}

export default App;


