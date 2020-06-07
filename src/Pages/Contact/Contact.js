import React, { Component } from 'react'

import styles from './Contact.module.css';

class Contact extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        formValid: false,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            if (this.validateAllFields()){
                this.setFormValid()
            }else{
                this.setFormInvalid();
            }
        });
    } 

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.formValid){
            console.log(this.state);
            this.props.history.push('/');
        }
    }
    
    setFormValid = () => {
        this.setState({
            formValid: true
        });
    }

    setFormInvalid = () => {
        this.setState({
            formValid: false
        });
    }

    validateField = (field, length) => {
        let valid = false;
        if (field.length >= length){
            valid = true;
        }
        return valid;
    }

    validateEmail = () => {
        let valid = false;
        let emailRegex = /\S+@\S+\.\S+/;
        if (emailRegex.test(this.state.email)){
            valid = true;
        }
        return valid;
    }

    validateAllFields = () => {
        let valid = false;
        if (this.validateField(this.state.firstName, 2) 
        && this.validateField(this.state.lastName, 2)
        && this.validateField(this.state.message, 10)
        && this.validateEmail()){
            valid = true
        }
        return valid;
    }

    render() {
        return (
            <div className={styles.contact}>
                <form className={styles.container} onSubmit={this.handleSubmit}>

                    <h1 className={styles.title}>Contact</h1>

                    <input className={styles.input} type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange} required/>
                    <input className={styles.input} type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange} required/>

                    <input className={styles.input} type="email" name="email" placeholder='Email' value={this.state.email} onChange={this.handleChange} required/>

                    <textarea className={styles.input} name="message"  cols="30" rows="10" placeholder="Message" value={this.state.message} onChange={this.handleChange} required></textarea>

                    {this.state.formValid && <p className={styles.valid}>FORM IS VALID</p>}
                    <input className={styles.submit} type="submit" value="SEND"/>
                </form>
            </div>
        )
    }
}

export default Contact;