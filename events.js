module.exports = class Event {
	construct(name, location, members, creator)
	{
		this.name = name;
		this.location = location;
		this.members = members;
		this.creator = creator;
	}
}