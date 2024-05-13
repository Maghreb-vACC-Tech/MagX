import { useState ,useEffect} from "react";
// import SideBar from "../Component/SideBar";

function ATCLog(props) {

    const [Log , setLog] = useState([JSON.parse(props.Log)])

    // setLog(JSON.parse(props.Log))
    useEffect(()=>{
        if(typeof props.log == "object"){
            setLog(props.Log)
        }
        else{
            setLog(JSON.parse(props.Log))
        }
    },[])

    // console.log( typeof props.Log )


    console.table(Log)

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


    let index = false;

    function animation(LogAnimationid){
        if(index){
            document.querySelector(".class"+LogAnimationid).style.display= "none"
            // alert("close Before:" + index)
            index = false;}
        else{
            document.querySelector(".class"+LogAnimationid).style.display= "flex"
            // alert("open Before:" + index)
            index = true;}
    }

    
    return (
      <div className="MemberLogContainer">
        <div className="MemberLogContainerTitle">
            <h1>ATC Logs</h1>
        </div>
        
        <div className="MemberLogContainerContent">
            {Log && Log.map((item, index) => (
                <>
                    <div className="MemberLog" onClick={()=>{animation(item.connection_id.id)}}>
                        <div>{item.connection_id.id}</div> 
                        <div>{item.connection_id.callsign}</div> 
                        <div>{formatDate(item.connection_id.start)}</div> 
                        <div>{formatDate(item.connection_id.end)}</div> 
                        <div>{DurationCalculation(item.connection_id.start,item.connection_id.end)}</div>
                    </div>
                    
                    <div className={"MemberLogStats animate__fadeIn class" +item.connection_id.id}>
                        <h11>aircraft</h11>
                        <div>tracked :{item.aircrafttracked}</div> 
                        <div>initiated :{item.handoffsinitiated}</div> 
                        <div>seen :{item.aircraftseen}</div> 
                        <div>refused :{item.handoffsrefused}</div> 
                    </div>
                </>
                
            ))}
        </div>
        
        <div>
            
        </div>

                    
      </div>
    );
}


export default ATCLog;

