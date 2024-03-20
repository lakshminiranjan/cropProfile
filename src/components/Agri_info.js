import React from "react";
import { NavLink } from "react-router-dom";
import ProfilePic from '../assets/profile.jpeg'
import '../index.css'

function Agri_info() {
   document.title =`Agriculture Information`;
    
    return(
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


         <section className="about-section">
              <h2 className="section-title">Crop Management and Production</h2>
              <p className="about-text">
                Information about crop management and production goes here.
              </p>
            </section>

            
            <section className="contact-section">
              <h2 className="section-title">Soil Health</h2>
              <p className="about-text">
                Information about soil health goes here.
              </p>
            </section>

            
            

        

        

      </article>
      </div>
    )
}
export default  Agri_info;