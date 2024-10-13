import React from "react";
import { useParams } from "react-router-dom";

const ProfileDetails = ({ profiles }) => {
  const { id } = useParams();
  const profile = profiles.find((profile) => profile.id === parseInt(id));

  return (
    <div>
      <h2>{profile.name}</h2>
      <img src={profile.photo} alt={profile.name} />
      <p>{profile.description}</p>
      <p>Contact: {profile.contact}</p>
      <p>Interests: {profile.interests}</p>
    </div>
  );
};

export default ProfileDetails;
