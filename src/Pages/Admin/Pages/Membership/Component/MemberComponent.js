function MemberComponent(props){
    const url = `/StaffShowMember?id=${props.CID}`
    return(
        <div className="Member animate__fadeIn">
            <div><p>{props.Name}</p></div>
            <div><p>{props.CID}</p></div>
            <div><p>{props.Email}</p></div>
            <div><p>{props.Country}</p></div>
            <div>
                <a href={url}><i class="fa-solid fa-eye"></i></a>
            </div>
        </div>
        // StaffShowMember
    )
}
export default MemberComponent