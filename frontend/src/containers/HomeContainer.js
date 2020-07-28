import React from 'react'
import { Link } from 'react-router-dom'
import SignupForm from '../components/Signup/SignupForm'
import LoginForm from '../components/Login/LoginForm'

const HomeContainer = () => (
    <div>
        <h2>Welcome to Blather!</h2>
        <h3>To Start Bleating</h3>
        <p><Link to='/login'>Login</Link> or <Link to='/signup'>Signup</Link></p>
    </div>
)

export default HomeContainer;