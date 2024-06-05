import React from 'react';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';
import Pricing from '../components/pricing/Pricing';
import "../App.css";

function Planos() {
    return (
        <div>
            <Nav />
              <Pricing />
            <Footer />
        </div>
    );
}

export default Planos;