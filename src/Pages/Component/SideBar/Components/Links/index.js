import "./index.css"

function SideBarLink(props){

    return(

        
        <div className="SideBarLink">
            {props.Icon}
            <a href={props.LinkRedirect}>{props.Link}</a>
        </div>

    )
// M0 17.2222H15.5556V0H0V17.2222ZM0 31H15.5556V20.6667H0V31ZM19.4444 31H35V13.7778H19.4444V31ZM19.4444 0V10.3333H35V0H19.4444Z
}
export default SideBarLink