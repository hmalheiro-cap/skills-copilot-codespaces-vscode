function skillsMember() {
    // Get the member
    var member = Members.findOne({
        _id: this.params._id
    });

    return member.skills;
}