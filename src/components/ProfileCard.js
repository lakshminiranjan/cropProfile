import React from "react";
import ProfilePic from '../assets/profile.jpeg';
import { NavLink } from 'react-router-dom';
import Section from "./Section";
import ContactSection from "./ContactSection";

function ProfileCard({ name, title, about, contactInfo, isProfilePage, children }) {
  return (
    <article className="profile-card">
      <img src={ProfilePic} alt="Profile" className="profile-image" />
      <div className="profile-info">
        <h1 className="profile-name">{name}</h1>
        <p className="profile-title">{title}</p>
      </div>
      <nav className="profile-nav">
        <NavLink to={'/personal-info'} className="nav-item" activeClassName="active">Personal Info</NavLink>
        <NavLink to={'/agri'} className="nav-item" activeClassName="active">Agriculture Info</NavLink>
        <NavLink to={'/crop'} className="nav-item" activeClassName="active">Crop Info</NavLink>
      </nav>
      {isProfilePage && (
        <>
          <Section title="About Me" text={about} />
          <ContactSection contactInfo={contactInfo} />
        </>
      )}
      {!isProfilePage && children}
    </article>
  );
}

export default ProfileCard;