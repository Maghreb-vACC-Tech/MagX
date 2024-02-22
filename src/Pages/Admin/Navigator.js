function Navigator(){
    return(
        <nav className="animate__fadeIn">
            <div><a href="/StaffTraining" className="NavigatorTrainingBTN">Training</a></div>
            <div><a href="/StaffMembership" className="NavigatorMembershipBTN">Membership</a></div>
            <div><a href="#" className="NavigatorBookingBTN">Tools</a></div>
            <div><a href="/EventManager" className="NavigatorAnnouncementBTN">Event </a></div>
            <div><a href="/StaffPage" className="NavigatorStaffBTN">Staff</a></div>
        </nav>
    )
}

export default Navigator