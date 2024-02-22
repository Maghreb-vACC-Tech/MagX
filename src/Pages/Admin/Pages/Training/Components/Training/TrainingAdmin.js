import Cards from "./card"
import { useEffect, useState } from "react"

// Toatstify ( for notification )
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TrainingAdmin(){
    const [ TraineeData , setTraineeData ] = useState()
    const [ TraineeDataFetched , setTraineeDataFetched ] = useState()

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
    


    const SearchIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M28.9996 27.586L21.4476 20.034C23.2624 17.8553 24.1674 15.0608 23.9743 12.2319C23.7812 9.40296 22.5049 6.75738 20.4109 4.84551C18.3169 2.93363 15.5664 1.90267 12.7316 1.96708C9.8968 2.03149 7.19598 3.18632 5.19097 5.19133C3.18596 7.19635 2.03112 9.89717 1.96671 12.732C1.9023 15.5667 2.93327 18.3172 4.84514 20.4112C6.75702 22.5052 9.4026 23.7816 12.2315 23.9747C15.0605 24.1678 17.8549 23.2628 20.0336 21.448L27.5856 29L28.9996 27.586ZM3.99963 13C3.99963 11.22 4.52747 9.4799 5.5164 7.99986C6.50533 6.51982 7.91094 5.36627 9.55548 4.68508C11.2 4.00389 13.0096 3.82566 14.7554 4.17293C16.5013 4.52019 18.1049 5.37736 19.3636 6.63603C20.6223 7.89471 21.4794 9.49835 21.8267 11.2442C22.174 12.99 21.9957 14.7996 21.3145 16.4441C20.6334 18.0887 19.4798 19.4943 17.9998 20.4832C16.5197 21.4722 14.7797 22 12.9996 22C10.6135 21.9973 8.32584 21.0483 6.63859 19.361C4.95134 17.6738 4.00227 15.3861 3.99963 13Z" fill="white"/>
        </svg>
    )




    useEffect(()=>{
        fetch("http://127.0.0.1:1000/GetTrainee")
        .then( res => res.json() )
        .then( res => {
            // setTraineeData(res)
            
            setTraineeDataFetched(res)
        })
    },[])

    const TraineeLookupCallback = (e) => {
        const value = e.target.value;
        console.log(TraineeData)

        const filteredData = TraineeDataFetched.filter(trainee => {
            return JSON.stringify(trainee.cid).includes(value); 
          });
        
        console.log(`Filtered data of ${value}:`);
        
        
        setTraineeDataFetched(filteredData); 
    }


    return(
        <all className="TrainingAdmin animate__fadeIn">
            <section className="TrainingTopBar">
                {/* <div className="TrainingSearch">
                    <input type="text" placeholder="CID" onChange={TraineeLookupCallback}></input>
                </div>
                <div className="TrainingSearchBTN">
                    <button>{SearchIcon}</button>
                </div> */}
                <div className="AddMoreTrainee">
                    <a href="/AddVisitor"><i class="fa-solid fa-person-circle-plus"></i> Visitors</a>
                </div>
            </section> 
            <section className="TrainingMainContainer">
                {
                TraineeDataFetched && 
                TraineeDataFetched.map(trainee => (
                    <Cards 
                        name={trainee.Name}
                        cid={trainee.cid}
                        rating={trainee.Rating}
                        facility={trainee.Facility} 
                        position={trainee.Position}
                        mentor={trainee.Mentor}
                        status={trainee.Status}
                        comment={trainee.comment}
                    />
                ))}
            </section>

            
            
            {/* notify(`Trainee ${TraineeConstructor.Name} Already Exists`) */}
      <ToastContainer />
        </all>
    )
}

export default TrainingAdmin