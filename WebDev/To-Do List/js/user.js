class User {
	constructor(firstName, lastName, timezone) { //consider others like age, gender, login, etc
		this._firstName = firstName;
		this._lastName = lastName;
		this._timezone = timezone; // Date.getTimeOffset() ?
		this.timeCreated = Date.now();
		this.lastUpdated = Date.now();
	}

	get firstName() {
		return this._firstName;
	}
	set firstName(value) {
		this._firstName = value;
		updateLastUpdated();
	}

	get lastName() {
		return this._lastName;
	}
	set lastName(value) {
		this._lastName = value;
		updateLastUpdated();
	}

	get timezone() {
		return this._timezone;
	}
	set timezone(value) {
		this._timezone = value;
		updateLastUpdated();
	}

	get lastUpdated() {
		return this.lastUpdated;
	}
	updateLastUpdated() {
		this.lastUpdated = Date.now();
	}

	toJSON() {
		return {
			firstName: this.firstName,
			lastName: this.lastName,
			timezone: this.timezone,
			timeCreated: this.timeCreated,
			lastUpdated: this.lastUpdated,
		};
	}

	fullName() 
	{
		return `${this.firstName} ${this.lastName}`;
	}

	get jsonString() {
		return JSON.stringify(this.toJSON());
	}
}

export { User };