import "./index.css"
// Import Logo
import Logo from "../../../Ressources/Logo/logo.svg"

// Import Component
import SideBarLink from "./Components/Links"


function SideBar(){

    // ICONS
    const DashboardIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5vw" viewBox="0 0 35 31" fill="none">
                <path d="M0 17.2222H15.5556V0H0V17.2222ZM0 31H15.5556V20.6667H0V31ZM19.4444 31H35V13.7778H19.4444V31ZM19.4444 0V10.3333H35V0H19.4444Z" fill="white"/>
        </svg>
    )

    const AnnouncementIcon = (
        <svg xmlns="http://www.w3.org/2000/svg"  width="1.5vw" height="31" viewBox="0 0 34 31" fill="none">
        <g clip-path="url(#clip0_5_93)">
        <path d="M12.75 16.7917C15.8797 16.7917 18.4167 14.4785 18.4167 11.625C18.4167 8.77154 15.8797 6.45834 12.75 6.45834C9.62043 6.45834 7.08337 8.77154 7.08337 11.625C7.08337 14.4785 9.62043 16.7917 12.75 16.7917Z" fill="white"/>
        <path d="M12.75 19.375C8.96746 19.375 1.41663 21.1058 1.41663 24.5417V27.125H24.0833V24.5417C24.0833 21.1058 16.5325 19.375 12.75 19.375ZM23.7433 6.92334L21.3633 9.10626C22.5533 10.6304 22.5533 12.6067 21.3633 14.1308L23.7433 16.3138C26.605 13.7046 26.605 9.76501 23.7433 6.92334ZM28.4325 2.58334L26.1233 4.68876C30.0475 8.58959 30.0475 14.4538 26.1233 18.5613L28.4325 20.6667C33.9575 15.6421 33.9716 7.81459 28.4325 2.58334Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_5_93">
        <rect width="34" height="31" fill="white"/>
        </clipPath>
        </defs>
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

    const RoosterIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5vw" height="36" viewBox="0 0 34 36" fill="none">
        <g clip-path="url(#clip0_5_83)">
        <path d="M29.75 7.5C28.1775 6.975 26.4491 6.75 24.7916 6.75C22.0291 6.75 19.0541 7.35 17 9C14.9458 7.35 11.9708 6.75 9.20829 6.75C6.44579 6.75 3.47079 7.35 1.41663 9V30.975C1.41663 31.35 1.77079 31.725 2.12496 31.725C2.26663 31.725 2.33746 31.65 2.47913 31.65C4.39163 30.675 7.15413 30 9.20829 30C11.9708 30 14.9458 30.6 17 32.25C18.9125 30.975 22.3833 30 24.7916 30C27.1291 30 29.5375 30.45 31.5208 31.575C31.6625 31.65 31.7333 31.65 31.875 31.65C32.2291 31.65 32.5833 31.275 32.5833 30.9V9C31.7333 8.325 30.8125 7.875 29.75 7.5ZM29.75 27.75C28.1916 27.225 26.4916 27 24.7916 27C22.3833 27 18.9125 27.975 17 29.25V12C18.9125 10.725 22.3833 9.75 24.7916 9.75C26.4916 9.75 28.1916 9.975 29.75 10.5V27.75Z" fill="white"/>
        <path d="M24.7916 15.75C26.0383 15.75 27.2425 15.885 28.3333 16.14V13.86C27.2141 13.635 26.01 13.5 24.7916 13.5C22.3833 13.5 20.2016 13.935 18.4166 14.745V17.235C20.0175 16.275 22.2416 15.75 24.7916 15.75Z" fill="white"/>
        <path d="M18.4166 18.735V21.225C20.0175 20.265 22.2416 19.74 24.7916 19.74C26.0383 19.74 27.2425 19.875 28.3333 20.13V17.85C27.2141 17.625 26.01 17.49 24.7916 17.49C22.3833 17.49 20.2016 17.94 18.4166 18.735Z" fill="white"/>
        <path d="M24.7916 21.495C22.3833 21.495 20.2016 21.93 18.4166 22.74V25.23C20.0175 24.27 22.2416 23.745 24.7916 23.745C26.0383 23.745 27.2425 23.88 28.3333 24.135V21.855C27.2141 21.615 26.01 21.495 24.7916 21.495Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_5_83">
        <rect width="34" height="36" fill="white"/>
        </clipPath>
        </defs>
        </svg>
    )

    const AdminIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5vw" height="33" viewBox="0 0 31 33" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7429 9.25003L17.9954 6.86503L21.015 3.66553C19.7616 3.52732 18.4956 3.72857 17.3359 4.2504C16.1761 4.77222 15.1605 5.5975 14.3846 6.64879C13.6086 7.70007 13.0976 8.94288 12.8995 10.2606C12.7015 11.5783 12.8229 12.9276 13.2524 14.182L13.9451 16.2003L12.5107 17.7168L4.44212 26.2623C4.315 26.3909 4.21344 26.5451 4.1434 26.7158C4.07336 26.8866 4.03625 27.0704 4.03426 27.2566C4.03226 27.4427 4.06541 27.6274 4.13177 27.7998C4.19813 27.9722 4.29636 28.1288 4.42068 28.2605C4.545 28.3921 4.69292 28.4961 4.85573 28.5664C5.01854 28.6366 5.19298 28.6717 5.36879 28.6696C5.54459 28.6675 5.71823 28.6282 5.87949 28.5541C6.04076 28.4799 6.1864 28.3724 6.30787 28.2378L14.3786 19.6945L15.8109 18.1758L17.717 18.907C18.9017 19.3618 20.1761 19.4903 21.4206 19.2806C22.6651 19.0709 23.8388 18.5299 24.8317 17.7082C25.8246 16.8866 26.604 15.8113 27.0969 14.5833C27.5897 13.3553 27.7798 12.0149 27.6492 10.6878L24.6275 13.8895L22.375 16.27L20.1225 13.885L17.9975 11.635L15.7407 9.25003H15.7429ZM28.8605 4.90753C30.172 6.82497 30.8772 9.13253 30.875 11.5C30.8757 13.3075 30.465 15.0886 29.6778 16.6924C28.8906 18.2962 27.7499 19.6756 26.3525 20.7138C24.9551 21.7519 23.342 22.4182 21.6498 22.6564C19.9576 22.8945 18.2361 22.6974 16.6311 22.0818L8.56249 30.625C8.1439 31.0682 7.64697 31.4198 7.10006 31.6597C6.55314 31.8995 5.96697 32.023 5.37499 32.023C4.78302 32.023 4.19684 31.8995 3.64993 31.6597C3.10302 31.4198 2.60608 31.0682 2.18749 30.625C1.34212 29.7299 0.867188 28.5159 0.867188 27.25C0.867188 25.9842 1.34212 24.7701 2.18749 23.875L10.2561 15.3318C9.4756 13.0535 9.41079 10.5693 10.0713 8.24884C10.7319 5.92842 12.0825 3.8959 13.9221 2.45382C15.7617 1.01175 17.9919 0.237224 20.2808 0.24555C22.5697 0.253875 24.7948 1.0446 26.625 2.50003L24.3385 4.92103L22.5046 6.86278L20.25 9.25003L22.375 11.5L24.6275 9.11503L26.4635 7.17103L28.75 4.75003L28.8605 4.90753Z" fill="white"/>
        </svg>
    )


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
                    Link = "Announcement"
                    Icon = {AnnouncementIcon}
                    LinkRedirect = "/Announcement"
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
                    Link = "Roster"
                    Icon = {RoosterIcon}
                    LinkRedirect = "/Roster"
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

export default SideBar