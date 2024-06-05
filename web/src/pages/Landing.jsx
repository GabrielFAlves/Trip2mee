import React from 'react';
import Body from '../components/body/Body';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';
import "../App.css";

function Landing() {
    return (
        <div>
            <Nav />
            <Body />
            <Footer />
        </div>
    );
}

export default Landing;