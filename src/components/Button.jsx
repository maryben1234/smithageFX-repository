import React from 'react';
import { Link } from 'react-router-dom'
// import './Button.css'

function Button() {
    return (
        <Link to="sign-up">
            <button className='btn-dark '>GET STARTED</button>
        </Link>
    )
}
export default Button