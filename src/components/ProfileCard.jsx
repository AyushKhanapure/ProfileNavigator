import React, { useState } from "react";
import MapComponent from "./MapComponent";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const ProfileCard = ({ profile }) => {
  const navigate = useNavigate();
  const [showMap, setShowMap] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setShowMap(!showMap);
    setOpen(true);
  };
  const handleClose = () => {
    setShowMap(!showMap);
    setOpen(false);
  };

  // const handleShowMap = () => {
  //   setShowMap(!showMap);
  // };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 570,
    height: 530,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="profile-card ">
      <img src={profile.photo} alt={profile.name} />
      <br />
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
      <br />

      <div>
        <Button onClick={handleOpen}>Location</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Location
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {showMap && <MapComponent address={profile.address} />}
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default ProfileCard;
