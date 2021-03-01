import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Speciesdetails = () => {
    const [speci, setSpeci] = useState([]);

    const {id} = useParams();
    
    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/species/${id}`)
            .then(res => res.json())
            .then(allSpecies => setSpeci(allSpecies));
    }, [id])

    return (
        <div className='row d-flex inline-block'>

            <div className='col-md-4' key={speci.id}>
                <div className="card shadow my-2">
                    <div className='card-body'>
                        <h3 className='card-title'>Name: {speci.name}</h3>
                        <p className='text-muted'>Classification: {speci.classification}</p>
                        <p className="text-muted">Eye Colors: {speci.eye_colors}</p>
                        <p className='card-text'>Hair Colors: {speci.hair_colors}</p>
                        <p className='card-text'>Known Members: {speci.people?.length}</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Speciesdetails;