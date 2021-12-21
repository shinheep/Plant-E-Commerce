import plants from '../seed'
import {useState} from 'react';
import {PLANT_LIST_REQUEST, PLANT_LIST_SUCCESS, PLANT_LIST_FAIL} from '../constants/plantConstants'

const [plantData, setPlantData] = useState({})



const listPlants = () => async (dispatch) => {
    try{
        dispatch({type: PLANT_LIST_REQUEST})

    }catch(error){

    }
}