import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Profile from './Profile';
 import './Home.css'
const Home = () => {
    return (
        <div className="home-container">
            <Header/>
            <Profile/>
            <Footer/>
        </div>
    );
}
 
 
export default Home;