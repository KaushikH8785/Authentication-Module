import React from "react";
import { useContext } from "react";
import DashboardContext from "../../context/DashboardContext";
import CustomPopup from "./AddSongPopup";
import InputControl from "../inputControl/inputControl";

function AddSongFormPopup() {
    const {
        visibility,
        songValues,
        err,
        action,
        popupCloseHandler,
        FormData,
        addNewSong 
    } = useContext(DashboardContext);

    return (
        <>
            <div className="add-song-btn">
                <CustomPopup
                    onClose={popupCloseHandler}
                    show={visibility}
                    title="Please Add Song Details"
                >
                    <form onSubmit={(e) => addNewSong(e)}>
                        <InputControl
                            type="text"
                            label="Song Name"
                            placeholder="Enter your song name"
                            onChange={FormData}
                            name="songName"
                            id="SongName"
                            value={songValues.songName}
                        />
                        <InputControl
                            type="text"
                            label="Singer Name"
                            placeholder="Enter singer name"
                            onChange={FormData}
                            name="singerName"
                            id="SingerName"
                            value={songValues.singerName}
                        />
                        <InputControl
                            type="text"
                            label="Song Duration"
                            placeholder="Enter song duration"
                            onChange={FormData}
                            name="timeDuration"
                            id="timeDuration"
                            value={songValues.timeDuration}
                        />
                        <div
                            className="error-design"
                            style={{
                            display: err ? "block" : "none",
                            }}
                        >
                            Please enter song all details
                        </div>

                        <button className="btn add-song-btn" type="submit" id="add-song-id">
                            {action === "edit" ? "Update Song" : "Add Song"}
                        </button>
                    </form>
                </CustomPopup>
            </div>
        </>
    )

}

export default AddSongFormPopup;

