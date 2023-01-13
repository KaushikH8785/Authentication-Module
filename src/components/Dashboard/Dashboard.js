import React from "react";
import AddSongFormPopup from "../PopupModule/AddSongFormPopup";
import SongListDisplay from "../SongListDisplay/SongListDisplay";

function Dashboard() {
  

  return (    
    <>    
      <SongListDisplay/>
      <AddSongFormPopup/>
    </>
  );
}

export default Dashboard;
