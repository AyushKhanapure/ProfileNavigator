import React from "react";
import Homepage from "./Homepage";
import Topnav from "./Topnav";

function Home() {
  return (
    <div className="w-[100%] h-full  ">
      <Topnav />
      <Homepage />
    </div>
  );
}

export default Home;
