import React, { useState, useEffect } from "react";
import {
  getProfiles,
  addProfile,
  deleteProfile,
} from "../services/profileService";
import "../styles/table.css";
import { FaArrowLeft } from "@react-icons/all-files/fa/FaArrowLeft";
import Topnav from "./Topnav";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const Admin = () => {
  const [profiles, setProfiles] = useState([]);
  const [newProfile, setNewProfile] = useState({
    name: "",
    photo: "",
    description: "",
    address: "",
  });

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    const data = await getProfiles();
    setProfiles(data);
  };

  const handleAddProfile = async () => {
    if (
      newProfile.name.length === 0 ||
      newProfile.address.length === 0 ||
      newProfile.photo.length === 0 ||
      newProfile.description.length === 0
    ) {
      return;
    } else {
      await addProfile(newProfile);
      setNewProfile({
        name: "",
        address: "",
        description: "",
        photo: "",
      });
      fetchProfiles();
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // const handleEditProfile = async (id) => {
  //   await editProfile(id, newProfile);
  //   fetchProfiles();
  // };

  const handleDeleteProfile = async (id) => {
    await deleteProfile(id);
    fetchProfiles();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 470,
    height: 500,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Topnav />
      <h2 className="mt-7 mb-4 text-2xl">
        <div className="mt-9">Admin Panel</div>
      </h2>
      <div className="flex justify-between px-8">
        <Button onClick={handleOpen}>Add Profile</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Fill Details
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {/* <input
                className="border-indigo-500/100 bo"
                type="text"
                placeholder="Name"
                value={newProfile.name}
                onChange={(e) =>
                  setNewProfile({ ...newProfile, name: e.target.value })
                }
              /> */}
              <form action="">
                <div className=" flex flex-col items-center mt-8">
                  <div class="w-72">
                    <div class="relative w-full min-w-[200px] h-10">
                      <input
                        class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                        placeholder=" "
                        required
                        value={newProfile.name}
                        onChange={(e) =>
                          setNewProfile({ ...newProfile, name: e.target.value })
                        }
                      />
                      <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                        Name
                      </label>
                    </div>
                  </div>
                  <br />

                  <div class="w-72">
                    <div class="relative w-full min-w-[200px] h-10">
                      <input
                        class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                        placeholder=" "
                        required
                        value={newProfile.photo}
                        onChange={(e) =>
                          setNewProfile({
                            ...newProfile,
                            photo: e.target.value,
                          })
                        }
                      />
                      <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                        Photo URL
                      </label>
                    </div>
                  </div>
                  <br />
                  {/* <input
                type="text"
                placeholder="Photo URL"
                value={newProfile.photo}
                onChange={(e) =>
                  setNewProfile({ ...newProfile, photo: e.target.value })
                }
              /> */}

                  <div class="w-72">
                    <div class="relative w-full min-w-[200px] h-10">
                      <input
                        class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                        placeholder=" "
                        required
                        value={newProfile.description}
                        onChange={(e) =>
                          setNewProfile({
                            ...newProfile,
                            description: e.target.value,
                          })
                        }
                      />
                      <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                        Description
                      </label>
                    </div>
                  </div>
                  <br />

                  {/* <input
                type="text"
                placeholder="Description"
                value={newProfile.description}
                onChange={(e) =>
                  setNewProfile({ ...newProfile, description: e.target.value })
                }
              /> */}

                  <div class="w-72">
                    <div class="relative w-full min-w-[200px] h-10">
                      <input
                        class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                        placeholder=" "
                        required
                        value={newProfile.address}
                        onChange={(e) =>
                          setNewProfile({
                            ...newProfile,
                            address: e.target.value,
                          })
                        }
                      />
                      <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                        Address
                      </label>
                    </div>
                  </div>
                  {/* <input
                type="text"
                placeholder="Address"
                value={newProfile.address}
                onChange={(e) =>
                  setNewProfile({ ...newProfile, address: e.target.value })
                }
              /> */}
                </div>
                <div className="flex justify-center items-center mt-5">
                  <button
                    type="submit"
                    className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[2vh] px-5 py-2 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                    onClick={handleAddProfile}
                  >
                    Add
                  </button>
                </div>
              </form>
            </Typography>
          </Box>
        </Modal>
      </div>

      <table>
        <thead>
          <tr>
            <th>SR</th> {/* Added SR column header */}
            <th>Name</th>
            <th>Photo</th>
            <th>Description</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map(
            (
              profile,
              index // 'index' is added here
            ) => (
              <tr key={profile.id}>
                <td>{index + 1}</td> {/* Displaying the serial number */}
                <td>{profile.name}</td>
                <td>
                  <img src={profile.photo} alt={profile.name} width="50" />
                </td>
                <td>{profile.description}</td>
                <td>{profile.address}</td>
                <td>
                  {/* <button
                    className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[2vh] px-3 py-2 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                    onClick={() => handleEditProfile(profile.id)}
                  >
                    Edit
                  </button> */}
                  <button
                    className="ml-2 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-[2vh] px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-500 dark:focus:ring-red-800"
                    onClick={() => handleDeleteProfile(profile.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
