import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Species = () => {
    const [species, setSpecies] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/species')
            .then(res => res.json())
            .then(allSpecies => setSpecies(allSpecies));
    }, [])

    return (
        <div className='row d-flex inline-block'>
            {species.map(species => (
                <div className='col-md-4' key={species.id}>
                    <div className="card shadow my-2">
                        <div className='card-body'>
                            <h3 className='card-title'>Name: {species.name}</h3>
                            <p className='text-muted'>Classification: {species.classification}</p>
                            <p className='card-text'><Link to={`/species/${species.id}`}>Read all about me!</Link></p>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    )
}


export default Species;