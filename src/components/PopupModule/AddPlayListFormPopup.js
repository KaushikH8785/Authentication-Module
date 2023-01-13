import React from "react";
import { useContext } from "react";
import DashboardContext from "../../context/DashboardContext";
import CustomPopup from "./AddSongPopup";
import InputControl from "../inputControl/inputControl";

function AddPlayListFormPopup() {
    const {
        err,
        action,
        popupCloseHandler,
        PlayListFormData,
        addNewPlayList,
        visibilityPlayList,
        playListValues
    } = useContext(DashboardContext);

    return (
        <>
            <div className="add-song-btn">
                <CustomPopup
                    onClose={popupCloseHandler}
                    show={visibilityPlayList}
                    title="Add Playlist"
                >
                    <form onSubmit={(e) => addNewPlayList(e)}>
                        <InputControl
                            type="text"
                            label="Play List"
                            placeholder="Enter play list name"
                            onChange={PlayListFormData}
                            name="playListName"
                            id="playListName"
                            value={playListValues.playListName}
                        />
                        <div
                            className="error-design"
                            style={{
                            display: err ? "block" : "none",
                            }}
                        >
                            Please enter playlist name
                        </div>

                        <button className="btn add-song-btn" type="submit" id="add-song-id">
                            {action === "edit" ? "Update" : "Save"}
                        </button>
                    </form>
                </CustomPopup>
            </div>
        </>
    )

}

export default AddPlayListFormPopup;

