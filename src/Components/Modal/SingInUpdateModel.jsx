// Modal.js
import React from "react";
import "./SingInModel.css"; // Import your modal styles if needed
import { IoMdClose } from "react-icons/io";

const SingInUpdateModel = ({ onClose, singin, setSingIn }) => {

  return (
    <div className="modal-overlay-sing" onClick={onClose}>
      <div className="modal-content-sing" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn-sing" onClick={() => onClose(false)}>
          <IoMdClose style={{ width: "50px", height: "30px" }} />
        </span>
        <div className="input_singin_button">
          <p style={{ color: "white" }}>Digitally Sign by employee name</p>
          <input
            type="text"
            placeholder="Enter Sing in Signature"
            value={singin}
            onChange={(e) => setSingIn(e.target.value)}
          />
        </div>

        <div className="sing_in_submit_button">
          <button type="button" onClick={onClose}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingInUpdateModel;
