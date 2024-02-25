import { useState, useEffect } from "react";


import "./index.css"

function Lost(props) {



    return (
      <>
        <div className="LostContainer">
          <div>
            <i class="fa-solid fa-circle-xmark"></i>
          </div>
          <div>
            <h1>{props.Error}</h1>
          </div>
          <div>
            <p>{props.Message}</p>
          </div>
          <div>
            <p>{props.Solution}</p>
          </div>
        </div>
      </>
    );





}

export default Lost;