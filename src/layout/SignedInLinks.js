import React from 'react';
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return(
        <ul className='right'>
            <li><NavLink to='/'>Link1</NavLink></li>
            <li><NavLink to='/'>Link2</NavLink></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">Link3</NavLink></li>
        </ul>

    )
}

export default SignedInLinks