import plants from '../seed'
import {Row, Col} from 'react-bootstrap'

const Plants = () => {
    
    const plantInfo = plants.map(plant => (
        <div className="plant">
            <img src={plant.image} alt={plant.name} className="plantPic"/>
            <h4>{plant.name}</h4>
            <div>${plant.price}</div>
        </div>
    ))
    
    return (
        <div>
            <div className="plants">
                {plantInfo}
            </div>
        </div>
    )
}

export default Plants