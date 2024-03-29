import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import Section from "./Section";

function CropInfo() {
  // Define state for the selected crop variety
  const [selectedVariety, setSelectedVariety] = useState("");

  // Update document title
  useEffect(() => {
    document.title = `Crop Information - ${selectedVariety}`;
  }, [selectedVariety]);

  // Handler for selecting crop variety
  const handleVarietyChange = (event) => {
    setSelectedVariety(event.target.value);
  };

  return (
    <div>
      <ProfileCard name="John Doe" title="Crop Expert" isProfilePage={false}>
        <Section title="Selected Crop" >
          <select value={selectedVariety} onChange={handleVarietyChange} className="dropdown">
            <option value="" disabled>Select Crop Variety</option>
            <option value="variety1">Crop Variety 1</option>
            <option value="variety2">Crop Variety 2</option>
            <option value="variety3">Crop Variety 3</option>
          </select>
          <p className="about-text">
            Information about {selectedVariety ? selectedVariety : 'selected'} goes here.
          </p>
        </Section>

        {/* Other sections */}
        <Section title="Crop Rotation" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit..." />
      </ProfileCard>
    </div>
  );
}

export default CropInfo;
