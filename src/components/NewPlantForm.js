import React, { useState } from 'react';

export const NewPlantForm = (props) => {
     const [name, setName] = useState('');
     const [color, setColor] = useState('');
     const [sun, setSun] = useState('')
     const onSubmit = (e) => {
         e.preventDefault();
         if (name && color && sun) {
            props.addNewPlant({
                'name' : name,
                'color' : color,
                'sun' : sun

            });
            setName('');
            setColor('')
            setSun('')
         }else {
             console.log('invalid input')
         }
     };

     return(
         <div> 
            <h4>Add a New Plant</h4>
            <form onSubmit={onSubmit}>
                <input 
                    type='text'
                    placeholder='name'
                    onChange = {(e) => setName(e.target.value)}
                    value ={name}
                    /> 
                <input 
                    type = 'text'
                    placeholder='color'
                    onChange = {(e) => setColor(e.target.value)}
                    value = {color}
                    />
                <input
                    type = 'text'
                    placeholder='sun'
                    onChange = {(e) => setSun(e.target.value)}
                    value = {sun}
                    />
                <button type='submit'>Add Plant</button>
            </form>
         </div>
     )
};