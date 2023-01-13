import React from "react";

function InputControl(props) {
    return(
        <div className="inputwrap">
            {props.label && <label>{props.label}<em>*</em></label>}
            <input type="text" {...props} /> 
        </div>
    )
}

export default InputControl;