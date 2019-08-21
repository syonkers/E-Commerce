import React from 'react';

import Login from '../../components/login/login.component';
import Signup from '../../components/signup/signup.component';

import './signin.styles.scss';

const SigninPage = () => (
    <div className='sign-in'>
        <Login />
        <Signup />
    </div>
);

export default SigninPage;