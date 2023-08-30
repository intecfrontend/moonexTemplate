import React from "react";
import "./Modal.css";
import fr from "../../assets/img/languageicon/FR.png"

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer ">
        <div className="titleCloseBtn ">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>

        <div className="body">
          <p>The </p>
          <img src={fr} alt="frIcon" />
          <img src={fr} alt="frIcon" />
        </div>

      </div>
    </div>
  );
}

export default Modal;
