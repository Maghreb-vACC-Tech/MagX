import React, { useEffect, useState } from 'react';

function ZuluTimeComponent(){

    const [ZuluTime,setZuluTime] = useState("XX:XX:XXz")
    

    useEffect(()=>{
        const interval = setInterval(() => {
            const d = new Date();

            const seconds = d.getUTCSeconds().toString().padStart(2, '0');
            const Minutes = d.getUTCMinutes().toString().padStart(2, '0');
            const Hours = d.getUTCHours().toString().padStart(2, '0');
            const formattedZuluTime = `${Hours}:${Minutes}:${seconds}z`;
            
            setZuluTime(formattedZuluTime);
        }, 1000);

        return () => clearInterval(interval);
    }, [])

    return (
        <p>{ZuluTime}</p>
    );

}

export default ZuluTimeComponent;