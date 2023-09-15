import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

import "./index.css"

function SideBarLink(props){

    const navigate = useNavigate();

    const handleRedirect = () => {
      navigate(props.LinkRedirect);
    };
  
    return(

        
        <div className="SideBarLink" onClick={handleRedirect}>
            {props.Icon}
            
            <div className='animate__fadeInLeft'>
                <p>{props.Link}</p>
            </div>
        </div>

    )
}
export default SideBarLink