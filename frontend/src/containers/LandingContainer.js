import React from 'react';
import { Link } from 'react-router-dom';
import '../css/LandingContainer.css';
import sheep from '../sheep.png';

const LandingContainer = () => (
    <div className='landing'>
        <img src={sheep} alt='sheep' className='logo' />
        <h3>Join Blather today.</h3>
        <p><Link to='/login'><button>Login</button></Link><br />
        <Link to='/signup'><button>Signup</button></Link></p>
    </div>
)

export default LandingContainer;