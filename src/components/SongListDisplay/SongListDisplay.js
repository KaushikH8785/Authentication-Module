import React from "react";
import { useContext } from "react";
import DashboardContext from "../../context/DashboardContext";
import { PlaylistAdd } from "@mui/icons-material";
import { Button } from "@mui/material";
import SongAddToPlayListFormPopup from "../PopupModule/SongAddToPlayListFormPopup";

function SongListDisplay() {
  const {
    visibility,
    setVisibility,
    setSongValues,
    addSongs,
    setAddSongs,
    setAction,
    setUpdateSongId,
    visibilitySaveInPlayList, addSongToPlaylist
  } = useContext(DashboardContext);

  const deleteSong = (e, id) => {
    const updateSongList = [...addSongs];
    updateSongList.splice(id, 1);
    setAddSongs(updateSongList);
  };

  const editSong = (e, data) => {
    setVisibility(!visibility);
    setAction("edit");
    setSongValues({
      songName: data.songName,
      singerName: data.singerName,
      timeDuration: data.timeDuration,
    });
    setUpdateSongId(data.id);
  };

  

  const UpdateSong = () => {
    return addSongs.map((data, id) => {
      return (
        <tr key={id}>
          <td>{data.songName}</td>
          <td>{data.singerName}</td>
          <td>{data.timeDuration}</td>
          <td width="400">
            <Button
              variant="contained"
              endIcon={<PlaylistAdd />}
              onClick={(e) => addSongToPlaylist(e, data)}
            >
              Add to Play List
            </Button>
            &nbsp;&nbsp;
            <button onClick={(e) => editSong(e, data)}>Edit</button>
            &nbsp;&nbsp;
            <button onClick={(e) => deleteSong(e, id)}>Delete</button>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <div className="songs-header">
        <h2>Songs</h2>
        <div className="footer-form">
          <button onClick={(e) => setVisibility(!visibility)}>Add Song</button>
        </div>
      </div>

      <div className="song-display-list">
        <table>
          <tbody>
            <tr>
              <th>Song Name</th>
              <th>Singer Name</th>
              <th>Song Duration</th>
              <th></th>
            </tr>
            {UpdateSong()}
          </tbody>
        </table>
      </div>
      {visibilitySaveInPlayList && (
        <SongAddToPlayListFormPopup />
      )}
    </>
  );
}

export default SongListDisplay;
