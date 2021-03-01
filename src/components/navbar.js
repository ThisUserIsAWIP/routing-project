import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-dark' width='100%' height='' >
            <Link to = {'/'} className='btn btn-outline-primary m-2'>Home</Link>
            <Link to = {'/films'} className='btn btn-outline-primary m-2'>Films</Link>
            <Link to = {'/locations'} className='btn btn-outline-primary m-2'>Locations</Link>
            <Link to = {'/people'} className='btn btn-outline-primary m-2'>People</Link>
            <Link to = {'/species'} className='btn btn-outline-primary m-2'>Species</Link>
            <Link to = {'/vehicles'} className='btn btn-outline-primary m-2'>Vehicles</Link>
        </div>
    )
}

export default Navbar;