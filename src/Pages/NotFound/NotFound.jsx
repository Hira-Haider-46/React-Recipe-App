import React from 'react';
import Button from '../../CommonComponents/Button';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
    return (
        <div className='not-found'>
            <h1>Oh no!</h1>
            <p>The page you are looking for doesn't exist or has been moved.</p>
            <Link to='/'>
                <Button text='Return home' />
            </Link>
        </div>
    )
}

export default NotFound;