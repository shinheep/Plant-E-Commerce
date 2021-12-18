import React, {useState} from 'react';
import plants from '../seed'

const Plant = (props) => {

    console.log(props.routerProps)
    console.log(props.plantInfo)

    console.log(plants)

    const selectedPlant = plants.filter((plant) => {
        return(
            plant.id == props.routerProps.match.params.id
        )
    })

    console.log(selectedPlant)
    
    return (
        <div className="singlePlantContainer">
            <div className="singlePlant">
                {selectedPlant[0].name}
                <img src={selectedPlant[0].image} alt=''/>
                <div>Price: {selectedPlant[0].price}</div>
            </div>
        </div>
    );
};

export default Plant;