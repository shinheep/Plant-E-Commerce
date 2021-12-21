import React, {useState, useEffect} from 'react';
import plants from '../seed'
import { Form } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Plant = (props) => {

    const [qty, setQty] = useState(1)
    
    const selectedPlant = plants.filter((plant) => {
        return(
            plant.id == props.routerProps.match.params.id
        )
    })

    const addToCartHandler = (plantId) => {
        console.log('Added!', props.routerProps.match.params.id)
    }

    return (
        
        
        <div className="singlePlantContainerContainer">
            
            <Link to='/'><button className="goBackButton">Go Back</button></Link>

            <div className="singlePlantContainer">
                <div className="singlePlant">
                    <img src={selectedPlant[0].image} alt='' className="indivPlantPic"/>
                    
                    <div className="plantInfo">
                        <div className="indivPlantName">{selectedPlant[0].name}</div>
                        <div className="indivPlantDescription">{selectedPlant[0].description}</div>
                        <div className="indivPlantPrice">Price: ${selectedPlant[0].price}</div>

                        <Form.Control
                            as="select"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                        >
                            {
                                [...Array(selectedPlant[0].countInStock).keys()].map((x) => (
                                    <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                    </option>
                                ))
                            }
                            
                        </Form.Control>

                        <button onClick={props.addToCart} className="addToCart">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plant;