import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './login.styles.scss';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({ [name]: value })

    }

    handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            });
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
           <div className='login'>
               <h2>I already have an account</h2>
               <span>Sign in with your email and password</span>

               <form onSubmit={this.handleSubmit}>
                   <FormInput name='email' type='email' label='email' handleChange={this.handleChange} value={this.state.email} required />
                   <FormInput name='password' type='password' label='password' handleChange={this.handleChange} value={this.state.password} required />
                    <div className='buttons'>
                        <CustomButton type='submit' value='Submit Form'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google</CustomButton>  
                    </div>
               </form>
           </div> 
        );
    }
}

export default Login;