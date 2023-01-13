import React, { Fragment } from "react";
import { useContext } from "react";
import DashboardContext from "../../context/DashboardContext";
import AddPlayListFormPopup from "../PopupModule/AddPlayListFormPopup";

function PlayListDisplay() {
  const {
    visibility,
    visibilityPlayList,
    setVisibilityPlayList,
    addPlayList,
    setAddPlayList,
    setAction,
    addSongs,
    setPlayListValues,
    setUpdatePlayListId,
  } = useContext(DashboardContext);

  const deletePlayListSong = (e, id) => {
    const updatePlayList = [...addPlayList];
    updatePlayList.splice(id, 1);
    setAddPlayList(updatePlayList);
  };

  const editPlayListSong = (e, data) => {
    setVisibilityPlayList(!visibility);
    setAction("edit");
    setPlayListValues({
      playListName: data.playListName,
    });
    setUpdatePlayListId(data.id);
  };

  const renderSong = (songId) => {
    const song = addSongs.find((item) => item.id === songId);
    if (!song) {
      return null;
    }
    return (
      <>
        <tr>
          <td>{song.songName}</td>
          <td>{song.singerName}</td>
          <td>{song.timeDuration}</td>
        </tr>
      </>
    );
  };

  const UpdatePlayListSong = () => {
    return addPlayList.map((playListData, id) => {
      return (
        <tr key={id}>
          <td>
            <strong>{playListData.playListName}</strong>
            <br />
            <br />
            <table>
              <tbody>
                <tr>
                  <th>Song Name</th>
                  <th>Singer Name</th>
                  <th>Time Duration</th>
                </tr>
                {playListData.songs.map((songId) => (
                  <Fragment key={songId}>{renderSong(songId)}</Fragment>
                ))}
              </tbody>
            </table>
          </td>
          <td>
            <button onClick={(e) => editPlayListSong(e, playListData)}>
              Edit
            </button>
            &nbsp;&nbsp;
            <button onClick={(e) => deletePlayListSong(e, id, playListData)}>
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <div className="songs-header">
        <h2>Play List</h2>
        <div className="footer-form">
          <button onClick={(e) => setVisibilityPlayList(!visibilityPlayList)}>
            Add Play List
          </button>
        </div>
      </div>

      <div className="song-display-list">
        <table>
          <tbody>
            <tr>
              <th>Song Play List</th>
              <th></th>
            </tr>
            {UpdatePlayListSong()}
          </tbody>
        </table>
      </div>
      {visibilityPlayList && <AddPlayListFormPopup />}
    </>
  );
}

export default PlayListDisplay;
