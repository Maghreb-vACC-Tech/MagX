

function MenuIconComponent(){
    let index = true
    function MenuIconAnimation(){
        if(index){
            // document.querySelector(".SideBar").style.width = "5vw"
            // // document.querySelector(".SideBarLink").style.width = "5vw"
            // // document.querySelectorAll(".SideBarLink").style.width = "5vw"
            // document.querySelector(".SideBar-Links").classList.remove("animate__fadeInLeft")
            // // document.querySelector(".SideBar-Links").style.display = "none"
            // document.querySelector(".PagesContainer").style.width = "95vw"
            // document.querySelector(".UpperBar").style.width = "95vw"
            // animate__fadeInLeft

            
            index = !index
        }
        else{
            // document.querySelector(".SideBar").style.width = "15vw"
            // document.querySelector(".SideBar-Links").classList.add("animate__fadeInLeft")
            // // document.querySelector(".SideBar-Links").style.display = "block"
            // document.querySelector(".PagesContainer").style.width = "85vw"
            // document.querySelector(".UpperBar").style.width = "84vw"
            index = !index

        }
    }


    
    const svgIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="MenuIconComponentIconSVG" onClick={MenuIconAnimation} width="30" height="48" viewBox="0 0 48 48" fill="none">
        <g clip-path="url(#clip0_53_14)">
        <path d="M6 36H42V32H6V36ZM6 26H42V22H6V26ZM6 12V16H42V12H6Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_53_14">
        <rect width="48" height="48" fill="white"/>
        </clipPath>
        </defs>
        </svg>
    )

    return (
        <>
            {svgIcon}
        </>
    );

}

export default MenuIconComponent;