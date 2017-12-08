module.exports = class User {
	constructor(id) {
		this.id = id;
		//try to get info from bdd
		let name = null;
		let isSam = null;
		let events = null;
		let location = null;

		this.name = name || "Anonyme";
		this.isSam = isSam || false;
		this.events = events;
		this.location = location;
	}
}