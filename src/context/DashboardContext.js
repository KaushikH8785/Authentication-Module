import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const DashboardContext = createContext();

export function DashboardProvider({ children }) {
  const [visibility, setVisibility] = useState(false);
  const [visibilityPlayList, setVisibilityPlayList] = useState(false);
  const [visibilitySaveInPlayList, setVisibilitySaveInPlayList] = useState(false);
  
  const [songValues, setSongValues] = useState({
    songName: "",
    singerName: "",
    timeDuration: "",
  });  
  const [err, setErr] = useState(false);
  const [addSongs, setAddSongs] = useState([]);  
  const [action, setAction] = useState("");
  const [updateSongId, setUpdateSongId] = useState(null);

  // Popup close event
  const popupCloseHandler = (e) => {
      setVisibility(e);
      setVisibilityPlayList(e);
      setVisibilitySaveInPlayList(e);
      setAction();
      setErr(false);
      setSongValues({ songName: "", singerName: "", timeDuration: "" });
  };

  // Form field value set
  function FormData(e) {
      setSongValues({ ...songValues, [e.target.name]: e.target.value });
  }

  // Add new song or update song click on Edit action
  const addNewSong = (e) => {
      e.preventDefault();
      if (
        songValues.songName === "" ||
        songValues.singerName === "" ||
        songValues.timeDuration === ""
      ) {
        setErr(true);
        setVisibility(true);
      } 
      // On edit song then use this logic
      else if (action === "edit") {
      const songUpdateValues = addSongs.map((currentSong) => {          
          if (currentSong.id === updateSongId) {
          const newSongvalues = Object.assign({}, currentSong, songValues)
          return newSongvalues;
          }
          return currentSong;
      })             
        setAddSongs(songUpdateValues);        
        setSongValues({ songName: "", singerName: "", timeDuration: "" });  
        setVisibility(false);
        setAction();    
      } 
      else {
        songValues['id'] = uuidv4();
        setAddSongs([...addSongs, songValues]);
        setSongValues({ songName: "", singerName: "", timeDuration: "" });
        setErr(false);
        setVisibility(false);
      }   
  };


  // Play List Popup
  const [playListValues, setPlayListValues] = useState({
    playListName: "",
    songs: []
  });
  const [addPlayList, setAddPlayList] = useState([]); 
  const [updatePlayListId, setUpdatePlayListId] = useState(null);

  // Form field value set
  function PlayListFormData(e) {
      setPlayListValues({ ...playListValues, [e.target.name]: e.target.value });
  }
  
  // Add new Play List or update PlayList click on Edit action
  const addNewPlayList = (e) => {
      e.preventDefault();
      if (
        playListValues.playListName === ""
      ) {
        setErr(true);
        setVisibilityPlayList(true);
      } 
      // On edit song then use this logic
      else if (action === "edit") {
        const updatedPlaylist = [...addPlayList];
        const index = updatedPlaylist.findIndex(item => item.id === updatePlayListId)
        if(index > -1) {
          const playlist = updatedPlaylist[index]
          playlist["playListName"] = playListValues.playListName;
          updatedPlaylist[index] = playlist;
          setAddPlayList(updatedPlaylist);          
          setPlayListValues({ playListName: "", songs: [] });  
          setVisibilityPlayList(false);
          setAction();  
        }
        
      } 
      else {
        playListValues['id'] = uuidv4();
        setAddPlayList([...addPlayList, playListValues]);
        setPlayListValues({ playListName: "", songs: [] });
        setErr(false);
        setVisibilityPlayList(false);
        
      }
  };

  const [selectedSong, setSelectedSong] = useState(null);

  const addSongToPlaylist = (e, item) => {
    e.preventDefault();
    setVisibilitySaveInPlayList(true);
    setSelectedSong(item);
    //console.log(item);
  };

  // Song add in playlist
  const SongAddInPlayList = ({ playlistId, songId }) => {
    //console.log("Match Id-->", playlistId, songId)

    const updatedPlaylist = [...addPlayList];
    const index = updatedPlaylist.findIndex(item => item.id === playlistId)
    if(index > -1) {
      const playlist = updatedPlaylist[index]
      //console.log("PlayList-->", playlist);

      const updateSongs = [...playlist.songs]
      //console.log("updateSongs-->", updateSongs);

      updateSongs.unshift(songId);

      playlist.songs = updateSongs;
      updatedPlaylist[index] = playlist;

      setAddPlayList(updatedPlaylist);  
      //console.log("updatedPlaylist-->", updatedPlaylist);
      setVisibilitySaveInPlayList(false);
    }
  }

  return (
    <DashboardContext.Provider
      value={{
        visibility, setVisibility,
        visibilityPlayList, setVisibilityPlayList,
        songValues, setSongValues,
        err, setErr,
        addSongs, setAddSongs,
        action, setAction,
        updateSongId, setUpdateSongId,
        popupCloseHandler,
        FormData,
        addNewSong,
        playListValues, setPlayListValues,
        addNewPlayList,
        addPlayList, setAddPlayList,
        PlayListFormData,
        updatePlayListId, setUpdatePlayListId,
        visibilitySaveInPlayList, setVisibilitySaveInPlayList,
        SongAddInPlayList,
        selectedSong, setSelectedSong, addSongToPlaylist
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export default DashboardContext;
