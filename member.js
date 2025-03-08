function skillsMember() {
    this.name = 'skillsMember';
    this.skill = ['music', 'sport', 'read'];
    this.showSkill = function () {
        this.skill.forEach(function (el) {
            console.log(el);
        });
    }
}