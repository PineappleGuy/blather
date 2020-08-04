import React, { Component } from 'react'
import '../Signup/SignupLogin.css'

export default class LoginForm extends Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({
            username: '',
            password: ''
        })
        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then(resp => resp.json())
            .then(json => console.log(json))
            .catch(error => console.log(error))
    }
    
    render() {
        return (
            <div className='login'>
                <form onSubmit={this.handleSubmit}>
                    <p>Welcome back!</p>
                    <input onChange={this.handleChange} name='username' placeholder='Username' value={this.state.username} />
                    <input onChange={this.handleChange} type='password' name='password' placeholder='Password' value={this.state.password} />
                    <button type='submit'>Login</button>
                </form>
            </div>
        )
    }
}