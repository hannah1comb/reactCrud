 import React from 'react';

 export const Plant = (props) => {
    const  {plant, updatePlant, deletePlant} = props;

    return(
         <li>
            <label>
                {`Name: ${plant.name} Color: ${plant.color} Sun: ${plant.sun}`}
            </label>
            <button onClick={(e) => deletePlant(plant._id)}>Delete</button>
         </li>
    );
 };