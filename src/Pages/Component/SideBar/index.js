import "./index.css"
// Import Logo
import Logo from "../../../Ressources/Logo/logo.svg"
import { useState, useEffect } from "react";
// Import Component
import SideBarLink from "./Components/Links"


function SideBar(){

    const [AdminRight , setAdminRight] = useState(false)

    
    const StaffList  = require('../../Admin/Pages/Staff/Setup.json');

    // ICONS
    const DashboardIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5vw" viewBox="0 0 35 31" fill="none">
                <path d="M0 17.2222H15.5556V0H0V17.2222ZM0 31H15.5556V20.6667H0V31ZM19.4444 31H35V13.7778H19.4444V31ZM19.4444 0V10.3333H35V0H19.4444Z" fill="white"/>
        </svg>
    )

    const TrainingIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5vw" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3m6.82 6L12 12.72L5.18 9L12 5.28L18.82 9M17 16l-5 2.72L7 16v-3.73L12 15l5-2.73V16Z"/>
        </svg>
    )

    const EventIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5vw" height="35" viewBox="0 0 35 35" fill="none">
            <path d="M27.2222 19.25H17.5V28H27.2222V19.25ZM25.2778 0V3.5H9.72222V0H5.83333V3.5H3.88889C1.73056 3.5 0.0194444 5.075 0.0194444 7L0 31.5C0 33.425 1.73056 35 3.88889 35H31.1111C33.25 35 35 33.425 35 31.5V7C35 5.075 33.25 3.5 31.1111 3.5H29.1667V0H25.2778ZM31.1111 31.5H3.88889V12.25H31.1111V31.5Z" fill="white"/>
        </svg>
    )

    const BookingIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5vw" height="46" viewBox="0 0 48 46" fill="none">
        <g clip-path="url(#clip0_5_80)">
        <path d="M36 3.83331H12C9.8 3.83331 8 5.55831 8 7.66665V38.3333C8 40.4416 9.8 42.1666 12 42.1666H36C38.2 42.1666 40 40.4416 40 38.3333V7.66665C40 5.55831 38.2 3.83331 36 3.83331ZM12 7.66665H22V23L17 20.125L12 23V7.66665Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_5_80">
        <rect width="48" height="46" fill="white"/>
        </clipPath>
        </defs>
        </svg>
    )



    const ToolsIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <path fill="currentColor" d="M16.68 9.77a4.543 4.543 0 0 1-4.95.99l-5.41 6.52c-.99.99-2.59.99-3.58 0s-.99-2.59 0-3.57l6.52-5.42c-.68-1.65-.35-3.61.99-4.95c1.28-1.28 3.12-1.62 4.72-1.06l-2.89 2.89l2.82 2.82l2.86-2.87c.53 1.58.18 3.39-1.08 4.65zM3.81 16.21c.4.39 1.04.39 1.43 0c.4-.4.4-1.04 0-1.43c-.39-.4-1.03-.4-1.43 0a1.02 1.02 0 0 0 0 1.43z"/>
        </svg>
    )

    const AdminIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5vw" height="33" viewBox="0 0 1024 1024">
            <path fill="currentColor" d="M764.416 254.72a351.68 351.68 0 0 1 86.336 149.184H960v192.064H850.752a351.68 351.68 0 0 1-86.336 149.312l54.72 94.72l-166.272 96l-54.592-94.72a352.64 352.64 0 0 1-172.48 0L371.136 936l-166.272-96l54.72-94.72a351.68 351.68 0 0 1-86.336-149.312H64v-192h109.248a351.68 351.68 0 0 1 86.336-149.312L204.8 160l166.208-96h.192l54.656 94.592a352.64 352.64 0 0 1 172.48 0L652.8 64h.128L819.2 160l-54.72 94.72zM704 499.968a192 192 0 1 0-384 0a192 192 0 0 0 384 0"/>
        </svg>
    )

    const StatsIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5vw" height="33" viewBox="0 0 40 32" fill="none">
            <path d="M8.125 31H5.625C5.12772 31 4.65081 30.842 4.29917 30.5607C3.94754 30.2794 3.75 29.8978 3.75 29.5V20.5C3.75 20.1022 3.94754 19.7206 4.29917 19.4393C4.65081 19.158 5.12772 19 5.625 19H8.125C8.62228 19 9.09919 19.158 9.45083 19.4393C9.80246 19.7206 10 20.1022 10 20.5V29.5C10 29.8978 9.80246 30.2794 9.45083 30.5607C9.09919 30.842 8.62228 31 8.125 31ZM25.625 31H23.125C22.6277 31 22.1508 30.842 21.7992 30.5607C21.4475 30.2794 21.25 29.8978 21.25 29.5V14.5C21.25 14.1022 21.4475 13.7206 21.7992 13.4393C22.1508 13.158 22.6277 13 23.125 13H25.625C26.1223 13 26.5992 13.158 26.9508 13.4393C27.3025 13.7206 27.5 14.1022 27.5 14.5V29.5C27.5 29.8978 27.3025 30.2794 26.9508 30.5607C26.5992 30.842 26.1223 31 25.625 31ZM34.375 31H31.875C31.3777 31 30.9008 30.842 30.5492 30.5607C30.1975 30.2794 30 29.8978 30 29.5V7.5C30 7.10218 30.1975 6.72064 30.5492 6.43934C30.9008 6.15804 31.3777 6 31.875 6H34.375C34.8723 6 35.3492 6.15804 35.7008 6.43934C36.0525 6.72064 36.25 7.10218 36.25 7.5V29.5C36.25 29.8978 36.0525 30.2794 35.7008 30.5607C35.3492 30.842 34.8723 31 34.375 31ZM16.875 31H14.375C13.8777 31 13.4008 30.842 13.0492 30.5607C12.6975 30.2794 12.5 29.8978 12.5 29.5V2.5C12.5 2.10218 12.6975 1.72064 13.0492 1.43934C13.4008 1.15804 13.8777 1 14.375 1H16.875C17.3723 1 17.8492 1.15804 18.2008 1.43934C18.5525 1.72064 18.75 2.10218 18.75 2.5V29.5C18.75 29.8978 18.5525 30.2794 18.2008 30.5607C17.8492 30.842 17.3723 31 16.875 31Z" fill="white"/>
        </svg>
    )

    if(StaffList.StaffList.includes(sessionStorage.getItem("CID"))) {
        return(
            <div className="SideBar">
    
                <div className="SideBar-Logo">
                    <img src={Logo}></img>
                </div>
    
                <div className="SideBar-Links">
    
                    <SideBarLink
                        Link = "DashBoard"
                        Icon = {DashboardIcon}
                        LinkRedirect = "/Dashboard"
                        QuerySelector = ".DashBoardClass"
                        LinkClassName = "DashBoardClass"
                    />
                    <SideBarLink
                        Link = "Event"
                        Icon = {EventIcon}
                        LinkRedirect = "/Event"
                    />
    
                    <SideBarLink
                        Link = "Booking"
                        Icon = {BookingIcon}
                        LinkRedirect = "/Booking"
                    />
    
                    <SideBarLink
                        Link = "Stats"
                        Icon = {StatsIcon}
                        LinkRedirect = "/Stats"
                    />
                    <SideBarLink
                        Link = "Tools"
                        Icon = {ToolsIcon}
                        LinkRedirect = "/Tools"
                    />
                    <SideBarLink
                        Link = "Training"
                        Icon = {TrainingIcon}
                        LinkRedirect = "/Training"
                    />
                    <SideBarLink
                        Link = "Admin"
                        Icon = {AdminIcon}
                        LinkRedirect = "/Staff"
                    />
    
    
                </div>
    
            </div>
        )
    }

    return(
        <div className="SideBar">

            <div className="SideBar-Logo">
                <img src={Logo}></img>
            </div>

            <div className="SideBar-Links">

                <SideBarLink
                    Link = "DashBoard"
                    Icon = {DashboardIcon}
                    LinkRedirect = "/Dashboard"
                    QuerySelector = ".DashBoardClass"
                    LinkClassName = "DashBoardClass"
                />
                <SideBarLink
                    Link = "Event"
                    Icon = {EventIcon}
                    LinkRedirect = "/Event"
                />

                <SideBarLink
                    Link = "Booking"
                    Icon = {BookingIcon}
                    LinkRedirect = "/Booking"
                />

                <SideBarLink
                    Link = "Stats"
                    Icon = {StatsIcon}
                    LinkRedirect = "/Stats"
                />
                <SideBarLink
                    Link = "Tools"
                    Icon = {ToolsIcon}
                    LinkRedirect = "/Tools"
                />
                <SideBarLink
                    Link = "Training"
                    Icon = {TrainingIcon}
                    LinkRedirect = "/Training"
                />



            </div>

        </div>
    )
}

export default SideBar