import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import { getProfiles } from "../services/profileService";
import "../styles/App.css";
import Topnav from "./Topnav";

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const data = await getProfiles();
      console.log("Fetched profiles:", data); // Log the response data
      if (Array.isArray(data)) {
        setProfiles(data);
      } else {
        console.error("Expected an array, but got:", data);
      }
    } catch (error) {
      console.error("Error fetching profiles:", error);
    }
  };

  return (
    <div>
      <Topnav />
      <div className="profile-list">
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default ProfileList;
