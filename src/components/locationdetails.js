import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Locationdetails = () => {
    const [location, setLocation] = useState([]);

    const {id} = useParams();
    
    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/locations/${id}`)
            .then(res => res.json())
            .then(allLocations => setLocation(allLocations));
    }, [id])

    return (
        <div className='row d-flex inline-block'>

            <div className='col-md-4' key={location.id}>
                <div className="card shadow my-2">
                    <div className='card-body'>
                        <h3 className='card-title'>Name: {location.name}</h3>
                        <p className='text-muted'>Climate: {location.climate}</p>
                        <p className="text-muted">Terrain: {location.terrain}</p>
                        <p className='card-text'>Water: {location.surface_water}</p>
                        <p className='card-text'>Residents: {location.residents?.length}</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Locationdetails;