import React from "react";

const Card = ({name, description, id, url}) =>{
    
    return(
        <div className="tc bg-dark-green dib br3 ma2 grow bw2 shadow-10">
            <a href={url}  > 
            <img alt="Games" src={`https://robohash.org/set=set3${id}?100x100`} />
            </a>
            <div>
            
                <h2>{name}</h2>
                <p>{description}</p>
                
                
            </div>
            
        </div>
    )
}
export default Card;
