module.exports = class MessageOptions {
	constructor(type, text, userText, iconUrl){
		this.type = type;
		this.text = text;
		this.iconUrl = iconUrl;
		this.userText = userText;
	}

}