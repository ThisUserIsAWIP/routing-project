import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Peopledetails = () => {
    const [people, setPeople] = useState([]);

    const {id} = useParams();
    
    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people/${id}`)
            .then(res => res.json())
            .then(allPeople => setPeople(allPeople));
    }, [id])

    return (
        <div className='row d-flex inline-block'>

            <div className='col-md-4' key={people.id}>
                <div className="card shadow my-2">
                    <div className='card-body'>
                        <h3 className='card-title'>Name: {people.name}</h3>
                        <p className='text-muted'>Age: {people.age}</p>
                        <p className="text-muted">Gender: {people.gender}</p>
                        <p className='card-text'>Eye Color: {people.eye_color}</p>
                        <p className='card-text'>Hair Color: {people.hair_color}</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Peopledetails;