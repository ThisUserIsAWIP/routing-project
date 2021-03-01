import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Films = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(allFilms => setFilms(allFilms));
    }, [])

    return (
        <div className='row d-flex inline-block'>
            {films.map(film => (
                <div className='col-md-4' key={film.id}>
                    <div className="card shadow my-2">
                        <div className='card-body'>
                            <h3 className='card-title'>{film.title}</h3>
                            <p className='text-muted'>Released: {film.release_date}</p>
                            <p className="card-text"><Link to={`/films/${film.id}`}>Read all about me!</Link></p>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    )
}
export default Films;