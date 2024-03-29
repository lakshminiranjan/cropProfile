// ProfilePage.js
import React from "react";
import ProfileCard from "./ProfileCard";

function ProfilePage() {
  document.title = `Profile page Information`
  // Sample data
  const profileData = {
    name: "John Doe",
    title: "Professional Profile",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    contactInfo: [{ icon: "http://surl.li/rxxoj", text: "123-456-7890" }, { icon: "http://surl.li/rxxni", text: "john@example.com" }]
  };
//http://surl.li/rxxoj-mob
//http://surl.li/rxxni-email
  return (
    <div>
      <ProfileCard {...profileData} isProfilePage={true} />
    </div>
  );
}

export default ProfilePage;
