import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ProfilePic from '../assets/profile.jpeg'
import '../index.css'

function Crop_Info() {
    document.title = `Crop Information`;

    // State to manage selected crop variety
    const [selectedVariety, setSelectedVariety] = useState("");

    // Handler for selecting crop variety
    const handleVarietyChange = (event) => {
        setSelectedVariety(event.target.value);
    };

    return (
        <div className="container">
            <article className="profile-card">
                <img src={ProfilePic} alt="Profile" className="profile-image" />

                <div className="profile-info">
                    <h1 className="profile-name">John Doe</h1>
                    <p className="profile-title">Farmer</p>
                </div>

                <nav className="profile-nav">
                    <NavLink to={'/personal-info'} className="nav-item" activeClassName="active">Personal Info</NavLink>
                    <NavLink to={'/agri'} className="nav-item" activeClassName="active">Agriculture Info</NavLink>
                    <NavLink to={'/crop'} className="nav-item" activeClassName="active">Crop Info</NavLink>
                </nav>

                {/* Dropdown for Crop Variety */}
                

                <section className="about-section">
                    <h2 className="section-title">
                    <select value={selectedVariety} onChange={handleVarietyChange} className="section-dropdown">
                        <option value="" disabled className="section-title"> Select Crop Variety</option>
                        <option value="variety1">Crop Variety 1</option>
                        <option value="variety2">Crop Variety 2</option>
                        <option value="variety3">Crop Variety 3</option>
                    </select>
                </h2>
                    <p className="about-text">
                        Information about {selectedVariety ? selectedVariety : 'selected'} goes here.
                    </p>
                </section>

                <section className="contact-section">
                    <h2 className="section-title">Crop Rotation</h2>
                    <p className="about-text">
                        Information about crop rotation goes here.
                    </p>
                </section>
            </article>
        </div>
    );
}

export default Crop_Info;
