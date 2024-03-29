import React from "react";
import ProfileCard from "./ProfileCard";
import Section from "./Section";

function AgriInfo() {
  document.title = `Agriculture Information`
  return (
    <div>
      <ProfileCard name="John Doe" title="Agriculture Expert" isProfilePage={false}>
        <Section title="Crop Management and Production" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit..." />
        <Section title="Soil Health" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus fugit itaque aperiam recusandae quis eligendi commodi sint repudiandae quos? Nisi autem, nesciunt, dolor voluptatibus voluptatem tempora, perferendis quasi deleniti cupiditate quis earum? Voluptas quam molestias eius obcaecati? " />
      </ProfileCard>
    </div>
  );
}

export default AgriInfo;



