import { BrowserRouter, Switch, Route } from "react-router-dom";
import Films from './films';
import Navbar from './navbar';
import Species from './species';
import People from './people';
import Home from './home';
import Locations from './locations';
import Vehicles from './vehicles';
import Vehicledetails from './vehicledetails';
import Speciesdetails from './speciesdetails';
import Peopledetails from './peopledetails';
import Filmdetails from './filmdetails';
import Locationdetails from './locationdetails';
const App = () => {
  
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path={'/'}>
                    <Home />
                </Route>
                <Route exact path={'/films'}>
                    <Films />
                </Route>
                <Route exact path={'/films/:id'}>
                    <Filmdetails />
                </Route>
                <Route exact path={'/locations'}>
                    <Locations />
                </Route>
                <Route exact path={'/locations/:id'}>
                    <Locationdetails />
                </Route>
                <Route exact path={'/people'}>
                    <People />
                </Route>
                <Route exact path={'/people/:id'}>
                    <Peopledetails />
                </Route>
                <Route exact path={'/species'}>
                    <Species />
                </Route>
                <Route exact path={'/species/:id'}>
                    <Speciesdetails />
                </Route>
                <Route exact path={'/vehicles'}>
                    <Vehicles />
                </Route>
                <Route exact path={'/vehicles/:id'}>
                    <Vehicledetails />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

// const [films, setFilms] = useState([])

// const [filmBoolean, setFilmBoolean] = useState(false)

// const [peoples, setPeoples] = useState([])

// const [peopleBoolean, setPeopleBoolean] = useState(false)

// useEffect(() => { */}
//     fetch('https://ghibliapi.herokuapp.com/films')
//         .then(res => res.json())
//         .then(allFilms => setFilms(allFilms));
//     fetch('https://ghibliapi.herokuapp.com/people')
//         .then(response => response.json())
//         .then(allPeoples => setPeoples(allPeoples));
// }, [])
// const showFilms = () => {
//     setFilmBoolean(true)
// }
// const hideAll = () => {
//     setFilmBoolean(false)
//     setPeopleBoolean(false)
// }
// const showPeople = () => {
//     setPeopleBoolean(true)
// }
        //     <div className='container justify-content-center text-center'>
        //         <div className='row'>
        //             <button id='loadFilms' className='btn btn-outline-info' type='button' onClick={showFilms}>Load Films</button>
        //             <button id='loadPeople' type='button' className='btn btn-outline-info m-2' onClick={showPeople}>Load People</button>
        //             <button id='hideAll' type='button' className='btn btn-outline-warning' onClick={hideAll}>Home</button>
        //         </div>
        //         <div id='containerDiv' >
        //             {(peopleBoolean === false && filmBoolean === false) ?
        //                 <div>

        //                     <div className='col-md-6'>
        //                         <div className="card shadow my-2">
        //                             <div className='card-body text-center'>
        //                                 <h3 className='card-title'>Ghibli Wiki</h3>
        //                                 <h5 className='card-text'>Select either films or people to learn about the Studio Ghibli films!</h5>
        //                                 <p className="card-text"></p>
        //                             </div>
        //                         </div>
        //                     </div>

        //                 </div> :
        //                 (peopleBoolean === true) ?
        //                     peoples.map(people => (
        //                         <div className='col-md-6' key={people.id}>
        //                             <div className="card shadow my-2">
        //                                 <div className='card-body'>
        //                                     <h3 className='card-title'>{people.name}</h3>
        //                                     <h5 className='card-text'>{people.age}</h5>
        //                                     <h5 className='card-text'>{people.gender}</h5>
        //                                     <p className="card-text">You can read more about me <a href={people.url} target='_blank'>here!</a></p>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     )) :
        //                     films.map(film => (
        //                         <div className='col-md-6' key={film.id}>
        //                             <div className="card shadow my-2">
        //                                 <div className='card-body'>
        //                                     <h3 className='card-title'>{film.title} | released: {film.release_date}</h3>
        //                                     <p className="card-text">{film.description}</p>
        //                                 </div>
        //                             </div>
        //                         </div>

        //                     ))}

        //         </div>
        //     </div>
        // </>

export default App;