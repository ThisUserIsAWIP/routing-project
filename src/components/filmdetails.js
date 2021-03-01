import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Filmdetails = () => {
    const [film, setFilm] = useState([]);

    const {id} = useParams();
    
    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
            .then(res => res.json())
            .then(allFilms => setFilm(allFilms));
    }, [id])

    return (
        <div className='row d-flex inline-block'>

            <div className='col-md-4' key={film.id}>
                <div className="card shadow my-2">
                    <div className='card-body'>
                        <h3 className='card-title'>Title: {film.title}</h3>
                        <p className='text-muted'>Summary: {film.description}</p>
                        <p className="text-muted">Director: {film.director} Producer: {film.producer}</p>
                        <p className='card-text'>Released in: {film.release_date}</p>
                        <p className='card-text'>RT score: {film.rt_score}%</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Filmdetails;