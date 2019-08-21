import React from 'react'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './signup.styles.scss'

class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Passwords don't match")
            return;
        }
        try {
            const { user } =  await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.error(error);
        }
    }

    render(){
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>Not a member?</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput name='displayName' type='text' label='username' handleChange={this.handleChange} value={displayName} required />
                    <FormInput name='email' type='email' label='email' handleChange={this.handleChange} value={email} required />
                    <FormInput name='password' type='password' label='password' handleChange={this.handleChange} value={password} required />
                    <FormInput name='confirmPassword' type='password' label='confirm password' handleChange={this.handleChange} value={confirmPassword} required />
                    <CustomButton type='submit' value='Submit Form'>Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}

export default Signup;