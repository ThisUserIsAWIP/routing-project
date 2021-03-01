import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Locations = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/locations')
            .then(res => res.json())
            .then(allLocations => setLocations(allLocations));
    }, [])

    return (
        <div className='row d-flex inline-block'>
            {locations.map(locations => (
                <div className='col-md-4' key={locations.id}>
                    <div className="card shadow my-2">
                        <div className='card-body'>
                            <h3 className='card-title'>{locations.name}</h3>
                            <p className='card-text'><Link to={`/locations/${locations.id}`}>Read all about me!</Link></p>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default Locations;