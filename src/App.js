import React, {useState, useEffect} from 'react';
import {Link, Route, Switch} from "react-router-dom"
import './App.css';
import Cart from './components/Cart';
import About from './components/About';
import Login from './components/Login';
import Header from './components/Header';
import Main from './components/Main';
import Plant from './components/Plant';
import Plants from './components/Plants';
import Welcome from './components/Welcome';
import Signup from './components/Signup';
import plants from './seed'

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([]);
  const [plantList, setPlantList] = useState([]);

  
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
          />
        </Route>

        <Route path='/plant/:id' exact render={(routerProps) => <Plant plantInfo={plantInfo} routerProps={routerProps}/>}/>

        <Route path='/cart' exact render={(routerProps) => <Cart plantInfo={plantInfo} routerProps={routerProps}/>}/>

        <Route exact path="/about"><About /></Route>
        <Route exact path="/login"><Login/></Route>
        <Route exact path="/welcome"><Welcome /></Route>
        <Route exact path="/signup"><Signup /></Route>
      </Switch>


    </div>
  );
}

export default App;