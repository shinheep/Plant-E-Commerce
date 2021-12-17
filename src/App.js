import React, {useState, useEffect} from 'react';
import {Link, Route, Routes} from "react-router-dom"
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Plant from './components/Plant';
import Plants from './components/Plants';
import plants from './seed'

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([]);
  const [plantList, setPlantList] = useState([])
  
  const plantInfo = plants.map(plant => (
    <div className="plant">            
        <Link to={'/plant/'}><img src={plant.image} alt={plant.name} className="plantPic"/></Link>
        <div className="plantName">{plant.name}</div>
        <div className="plantPrice">${plant.price}</div>
    </div>
    
))

  const makeAPICall = () => {
    fetch(plants)
      .then((res) => res.json())
      .then((data) => {
        setPlantList(data)
      })
  }

  useEffect(() => {
    makeAPICall();
  }, [])

  const handleSearch = (event, searchTerm) => {
      console.log("Plant found!");
      setSearchTerm(searchTerm);
      if (searchTerm !== "") {
         const newPlantList = plantList.filter((plant) => {
             return Object.values(plant)
             .join("")
             .toLowerCase()
             .includes(searchTerm.toLowerCase());
         })
         setSearchResults(newPlantList);
      } else {
          setSearchResults(plantList);
      }
  };
  
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path="/" element={<><Main/><Plants 
          plantList={searchTerm.length < 1 ? plantInfo : searchResults}
          handleSearch={handleSearch} 
          searchTerm={searchTerm}/></>}/>
          {/* <Route path='plants' element={<Plants plantList={searchTerm.length < 1 ? plantInfo : searchResults}
              handleSearch={handleSearch} 
              searchTerm={searchTerm}/>} /> */}
          <Route path='plant' element={<Plant/>}/>
      </Routes>

    </div>
  );
}

export default App;
