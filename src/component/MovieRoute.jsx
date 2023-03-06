import React from 'react';
import { useLocation } from 'react-router-dom';
const MovieRoute = () => {
    const location=useLocation()
    return (
        <div>
            <p>
             {location.state.data.title}</p>  
                <p>{location.state.data.description}</p>  
              <p>{location.state.data.rate}</p>  


            
        </div>
    );
}

export default MovieRoute;
