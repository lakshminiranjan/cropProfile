import * as React from "react";
import '../index.css';
import ProfilePic from '../assets/profile.jpeg'
import {NavLink} from 'react-router-dom';
function ProfilePage() {

  const contactInfo = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/475f4ac5bf2a6369277a1dd99b682ea6013a265d83cedf2643096c337263d432?apiKey=3cee06336168422fabbe8975cbc410e9&", text: "+1 1234567890" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2ee7d6609283d51f1641825d7ac3a6e0c79d5eca526b369b6c231326b6c52265?apiKey=3cee06336168422fabbe8975cbc410e9&", text: "johndoe@gmail.com" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a70cbb96fec430407fd0e3cf509dbd5a7f48c49e4592a37b15dc9aa6eda9d54?apiKey=3cee06336168422fabbe8975cbc410e9&", text: "123 Main St, City, State, Country" }
  ];

  document.title =`Profile Page`;

  return (
    <>
    <body>
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
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            John Doe is a results-driven Marketing Manager with a passion for leveraging innovative strategies to drive brand growth and customer engagement in the ever-evolving digital landscape.
          </p>
        </section>

        <section className="contact-section">
          <h2 className="section-title">Contact Here</h2>
          {contactInfo.map(({ icon, text }) => (
            <div key={text} className="contact-item">
              <img src={icon} alt="" className="contact-icon" />
              <p className="contact-info">{text}</p>
            </div>
          ))}
        </section>

      </article>
      </div>
      </body>
    </>
  );
}
export default ProfilePage;