function MemberComponent(props){
    const ShowMemberurl = `/StaffShowMember?id=${props.CID}`
    const ShowMemberLogurl = `/ShowMemberLog?id=${props.CID}`
    return(
        <div className="Member animate__fadeIn">
            <div><p>{props.Name}</p></div>
            <div><p>{props.CID}</p></div>
            <div><p>{props.Email}</p></div>
            <div><p>{props.Country}</p></div>
            <div>
                <a href={ShowMemberurl}><i class="fa-solid fa-eye"></i></a>
                <a href={ShowMemberLogurl}><i class="fa-solid fa-file-circle-check"></i></a>
            </div>
        </div>
        // StaffShowMember
    )
}
export default MemberComponent