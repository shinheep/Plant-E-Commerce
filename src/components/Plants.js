import React, {useState, useRef} from "react";

const Plants = (props) => {


    const getSearchTerm = () => {
        props.searchKeyword(plantInput.current.value)
    };
    const plantInput = useRef("");
    
    return (
        <div className="plantsContainer">
            
            <form className="searchBox">
                <input 
                    ref={plantInput}
                    type="search" 
                    placeholder="Search for a Plant"
                    value={props.searchTerm}
                    onChange={getSearchTerm} />
            </form>
            
            <div className="plants">
                {props.plantData}
            </div>

        </div>
    )
}

export default Plants