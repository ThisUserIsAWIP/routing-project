import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Locationdetails = () => {
    const [vehicle, setVehicle] = useState([]);

    const {id} = useParams();
    
    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/vehicles/${id}`)
            .then(res => res.json())
            .then(allVehicles => setVehicle(allVehicles));
    }, [id])

    return (
        <div className='row d-flex inline-block'>

            <div className='col-md-4' key={vehicle.id}>
                <div className="card shadow my-2">
                    <div className='card-body'>
                        <h3 className='card-title'>Name: {vehicle.name}</h3>
                        <p className='text-muted'>Description: {vehicle.description}</p>
                        <p className="text-muted">Vehicle Class: {vehicle.vehicle_class}</p>
                        <p className='card-text'>Length: {vehicle.length}</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Locationdetails;