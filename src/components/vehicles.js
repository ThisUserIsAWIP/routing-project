import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Vehicles = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/vehicles')
            .then(res => res.json())
            .then(allVehicles => setVehicles(allVehicles));
    }, [])

    return (
        <div className='row d-flex inline-block'>
            {vehicles.map(vehicle => (
                <div className='col-md-4' key={vehicle.id}>
                    <div className="card shadow my-2">
                        <div className='card-body'>
                            <h3 className='card-title'>{vehicle.name}</h3>
                            <p className='card-text'><Link to={`/vehicles/${vehicle.id}`}>Read all about me!</Link></p>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default Vehicles;