module.exports = class User {
	constructor(id, isSam, events, location) {
		this.id = id;
		this.isSam = isSam || false;
		this.events = events;
		this.location = location;
	}
}