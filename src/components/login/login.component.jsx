import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

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

    handleSubmit = e => {
        e.preventDefault();

        this.setState({
            email: '',
            password: ''
        });
    }

    render() {
        return (
           <div className='login'>
               <h2>I already have an account</h2>
               <span>Sign in with your email and password</span>

               <form onSubmit={this.handleSubmit}>
                   <FormInput name='email' type='email' label='email' handleChange={this.handleChange} value={this.state.email} required />
                   <FormInput name='password' type='password' label='password' handleChange={this.handleChange} value={this.state.password} required />

                   <CustomButton type='submit' value='Submit Form'>Sign in</CustomButton>
               </form>
           </div> 
        );
    }
}

export default Login;