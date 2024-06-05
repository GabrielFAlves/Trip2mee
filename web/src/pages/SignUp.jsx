import React from 'react';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';
import SignUpForm from '../components/signupForm/SignUpForm';
import "../App.css";

function SignUp() {
    return (
        <div>
            <Nav />
            <SignUpForm />
            <Footer />
        </div>
    );
}

export default SignUp;