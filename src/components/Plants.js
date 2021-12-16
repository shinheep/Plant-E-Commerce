import plants from '../seed'

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
            
            <form className="searchBox">
                <input type="search"
                placeholder="Search for a Plant"/>
                <button>Search</button>
            </form>
            
            <div className="plants">
                {plantInfo}
            </div>

        </div>
    )
}

export default Plants