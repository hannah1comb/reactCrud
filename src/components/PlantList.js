import React from 'react';
import {Plant} from './Plant';
import { plantApi } from '../rest/PlantApi.js';
import { NewPlantForm } from './NewPlantForm';

export class PlantList extends React.Component{
    state = {
        plants : []
    };

    componentDidMount(){
         this.fetchPlants();
    }
    fetchPlants = async () => {
        const plants = await plantApi.get();
        this.setState({ plants }); 
    };
    updatePlant = async (updatedPlant) => {
        await plantApi.put(updatedPlant);
        this.fetchPlants();
    };

    deletePlant = async (plant_id) => {
        await plantApi.delete(plant_id);
        this.fetchPlants();
    }

    createPlant = async (newPlant) => {
        await plantApi.create(newPlant);
        this.fetchPlants();
    }

    render(){
        return(
            <div className = 'plant-list'>
                <h1>Plants in My Garden</h1>
                <ul>
                {this.state.plants.map((plant) => (
                    <Plant
                    plant = {plant}
                    key = {plant._id}
                    updatePlant = {this.updatePlant}
                    deletePlant = {this.deletePlant}
                    />  
                ))}
                </ul>
                <div className = ''>
                    <NewPlantForm addNewPlant = {this.createPlant} />
                </div>
            </div>
        )
    }

}