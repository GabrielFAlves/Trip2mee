import React from 'react';
import TripForm from '../components/tripForm/TripForm';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';
import "../App.css";

function PageForm() {
    return (
        <div>
            <Nav />
            <TripForm />
            <Footer />
        </div>
    );
}

export default PageForm;