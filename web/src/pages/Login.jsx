import React from 'react';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';
import LoginForm from '../components/loginForm/LoginForm';
import "../App.css";

function Login() {
    return (
        <div>
            <Nav />
            <LoginForm />
            <Footer />
        </div>
    );
}

export default Login;