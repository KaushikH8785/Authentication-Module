import React, { useCallback, useState } from "react";
import { useContext } from "react";
import DashboardContext from "../../context/DashboardContext";
import CustomPopup from "./AddSongPopup";

function SongAddToPlayListFormPopup() {
  const {
    err,
    popupCloseHandler,
    SongAddInPlayList,
    addPlayList,
    visibilitySaveInPlayList,
    selectedSong
  } = useContext(DashboardContext);
  const [selectedPlaylistId, setSelectedPlaylist] = useState("");

  const addSongToPlalist = useCallback((e) => {    
    e.preventDefault();
    SongAddInPlayList({songId: selectedSong.id, playlistId: selectedPlaylistId})
  }, [selectedPlaylistId, selectedSong, SongAddInPlayList])

  return (
    <>
      <div className="add-song-btn">
        <CustomPopup
          onClose={popupCloseHandler}
          show={visibilitySaveInPlayList}
          title="Song add in playlist"
        >
          <form onSubmit={(e) => addSongToPlalist(e)}>
            <select
              className="playlist-select"
              onChange={(e) => setSelectedPlaylist(e.target.value)}
              value={selectedPlaylistId}
            >
              <option value="">Please select a playlist</option>
              {addPlayList.map((datalist) => (
                <option key={datalist.id} value={datalist.id}>
                  {datalist.playListName}
                </option>
              ))}
            </select>

            <div
              className="error-design"
              style={{
                display: err ? "block" : "none",
              }}
            >
              Please select playlist
            </div>

            <button className="btn add-song-btn" type="submit" id="add-song-id">
              Save
            </button>
          </form>
        </CustomPopup>
      </div>
    </>
  );
}

export default SongAddToPlayListFormPopup;
