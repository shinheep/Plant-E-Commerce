import React, {useState, useEffect} from 'react';
import {Link, Route, Switch} from "react-router-dom"
import './App.css';
import Cart from './components/Cart';
import Login from './components/Login';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Plant from './components/Plant';
import Plants from './components/Plants';
import plants from './seed'

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([]);
  const [plantList, setPlantList] = useState([]);
  const [clearInput, setClearInput] = useState("");
  
  const plantInfo = plants && plants.map(plant => (
    <div className="plant" key={plant.id}>            
        <Link to={`/plant/${plant.id}`}>
          <img src={plant.image} alt={plant.name} className="plantPic"/>
        </Link>
        <div className="plantName">{plant.name}</div>
        <div className="plantPrice">${plant.price}</div>
    </div>
    
))

    const settingPlantData = (plants) => {
      setPlantList(plantInfo)
    }

    console.log(plantInfo)


  useEffect(() => {
    settingPlantData()
  }, [])

  const handleSearch = (searchTerm) => {
      console.log("Plant found!");
      setSearchTerm(searchTerm);
      if (searchTerm !== "") {
         const newPlantList = plantList.filter((plant) => {
           console.log('plant', plant)
           console.log('plantName', plant.props.children[0].props.children.props.alt)
             return Object.values(plant.props.children[0].props.children.props.alt)
              .join("")
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
         })
         setSearchResults(newPlantList);
      } else {
          setSearchResults(plantList);
      }
  };


  const handleClearClick = () => {
    setClearInput(0);
    setSearchTerm("");
    setSearchResults(plantList);
  };
  
  return (
    <div className="App">
      <Header/>

      <Switch>
        <Route exact path="/" >
          <Main/>
          <Plants 
          plantData={searchTerm.length < 1 ? plantList : searchResults}
          searchKeyword={handleSearch} 
          searchTerm={searchTerm}
          handleClearClick={handleClearClick}/>
        </Route>

        <Route path='/plant/:id' exact render={(routerProps) => <Plant plantInfo={plantInfo} routerProps={routerProps} />}/>

        <Route exact path="/cart"><Cart/></Route>

        <Route exact path="/login"><Login/></Route>
      </Switch>

    </div>
  );
}

export default App;
