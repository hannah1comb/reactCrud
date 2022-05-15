const PLANT_ENDPOINT = 'https://crudcrud.com/api/30b36887861e499c825a202144d29d34/plantapi';

class PlantApi {
    get = async() => {
        try {
            const resp = await fetch (PLANT_ENDPOINT);
            const data = await resp.json();
            console.log(data);
            return data;
        } catch(e) {
            console.log('Oops looks like PlantApi had an issue.', e)
        }
    }

    put = async (plant) => {
        try{
            const resp = await fetch(`${PLANT_ENDPOINT}/${plant.id}`,{

                method: 'PUT',
                headers: {
                     'Content-Type': 'application/json '
                },
                body: JSON.stringify (plant) 
             }); 
             const data = await resp.json();
             console.log(data);
             return data;
             } catch(e){
            console.log('Oops looks like updating plants  had an issue.', e);

        }
       
    }

    delete = async (plant_id) => {
        try{
            return await fetch(`${PLANT_ENDPOINT}/${plant_id}`,{

                method: 'DELETE'
             }); 
             
             
        } catch(e){
            console.log('Delete function fail plantapi', e);
        }
    }

    create = async (newPlant) => {
        try{
            const resp = await fetch(PLANT_ENDPOINT,{

                method: 'POST',
                headers: {
                     'Content-Type': 'application/json '
                },
                body: JSON.stringify (newPlant) 
             }); 
             const data = await resp.json();
             console.log(data);
             return data;
             } catch(e){
            console.log('Oops looks like create plants had an issue.', e);

        }
       
    }

}



export const plantApi = new PlantApi(); 
