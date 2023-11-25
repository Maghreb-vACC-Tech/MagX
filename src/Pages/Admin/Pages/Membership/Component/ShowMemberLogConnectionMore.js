// import ShowTraineeCard from "./ShowTraineeCard"

import { useState, useEffect } from "react";

import { set } from "date-fns";
import SideBar from "../../../../Component/SideBar"
import UpperBar from "../../../../Component/UpperBar"
import ShowMemberCard from "./ShowMemberCard";
import { useSearchParams } from 'react-router-dom'

import params from "../../../../../JsonData/TrainingPrams"

// Toatstify ( for notification )
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ShowMemberLogConnectionMore(){
    const [urlParams] = useSearchParams();
    const id = urlParams.get('id');
    const [Log , setLog] = useState();
    const notify = (e) => toast( e , {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });



    fetch(`http://127.0.0.1:1000/MembersGetConnectionLog/${id}`)
    .then(data => data.json())
    .then(data => setLog(data))

    function formatDate(date){

        // Parse to Date 
        const isoDate = new Date(date);

        // Format options
        const dateFormatOptions = {
        year: 'numeric', 
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
        };

        // Format date
        const formattedDate = new Intl.DateTimeFormat('en-US', dateFormatOptions)
        .format(isoDate);

        return formattedDate; 
    }

    function DurationCalculation(start_input,end_input){
        const start = new Date(start_input);
        const end = new Date(end_input);

        const durationMs = end - start;

        // Get hours
        const hours = Math.floor(durationMs / (1000 * 60 * 60)); 

        // Get remaining minutes
        let minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));

        // Pad minutes if needed
        if(minutes < 10) {
        minutes = `0${minutes}`;
        }

        return (`${hours} hours and ${minutes} minutes`);

    }

    // const url = `/ShowMemberLogurlMore?id=${id}`

    return(
        <>
        <SideBar />
        <div className="Training PagesContainer">
            <UpperBar Username={sessionStorage.getItem("FullName")} />

        
            {/* {JSON.stringify(Log)} */}

        </div>
        
        <ToastContainer />
        
        </>
    )
    


    }



export default ShowMemberLogConnectionMore