import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const People = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            .then(allPeople => setPeople(allPeople));
    }, [])

    return (
        <div className='row d-flex inline-block'>
            {people.map(people => (
                <div className='col-md-4' key={people.id}>
                    <div className="card shadow my-2">
                        <div className='card-body'>
                            <h3 className='card-title'>{people.name}</h3>
                            <p className='text-muted'>{people.age}</p>
                            <p className="text-muted">{people.gender}</p>
                            <p className='card-text'><Link to={`/people/${people.id}`}>Read all about me!</Link></p>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default People;