import React, {useState, useRef} from "react";

const Plants = (props) => {
    
    const plantInput = useRef("");

    const getSearchTerm = () => {
        props.handleSearch(plantInput.current.value)
    }
    
    return (
        <div>
            
            <form className="searchBox">
                <input 
                    ref={plantInput}
                    type="search" 
                    placeholder="Search for a Plant"
                    value={props.searchTerm}
                    onChange={getSearchTerm} />
                <button className="plantSearchButton" onClick={props.handleSearch}>
                    Search
                </button>
            </form>
            
            <div className="plants">
                {props.plantList}
            </div>

        </div>
    )
}

export default Plants