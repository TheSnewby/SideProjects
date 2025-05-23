let dayName = ["Sunday", "Monday", "Tuesday",
	"Wednesday", "Thursday", "Friday", "Saturday"];
let monthName = ["January", "February", "March", "April", "May", "June",
	"July", "July", "August", "September", "October", "November", "December"];

class toDo {
	static id = -1;

	constructor(config) {
		this.id = config.id !== undefined ? config.id : ++toDo.id,
		this.name = config.name,
		this.hour = config.hour || new Date().getHours(),
		this.minute = config.minute || new Date().getMinutes(),
		this.month = config.month || monthName[new Date().getMonth()],
		this.day = config.day || dayName[new Date().getDay()];
		this.year = config.year || new Date().getFullYear();
		this.time = config.time || new Date(`${this.month} ${this.day}, ${this.year} ${this.hour}:${this.minute}`),
		this.timeCreated = config.timeCreated || Date.now(),
		this.lastUpdated = config.lastUpdated || Date.now(),
		this.description = config.description || "",
		this.weblink = config.weblink || "",
		this.address = config.address || "",
		this.completed = config.completed || false
	}

		get name() {
			return this.name;
		}
		set name(value) {
			this.name = value;
			updateLastUpdated();
		}

		get time() {
			return this.time.toString();
		}
		set time(value) { //must be a Date object
			if (typeof value !== 'Date')
				throw new Error('New Date must be a number');
			else {
				this.time = value; //consider doing validation and try/except
				updateLastUpdated();
			}
		}

		updateLastUpdated() {
			this.lastUpdated = Date.now();
		}

		get description() {
			return this.description;
		}
		set description(value) {
			this.description = value;
			updateLastUpdated();
		}

		get weblink() {
			return this.weblink;
		}
		set weblink(value) {
			this.weblink = value;
			updateLastUpdated();
		}

		get address() {
			return this.address;
		}
		set address(value) {
			this.address = value;
			updateLastUpdated();
		}

		toJSON() {
			return {
				id: this.id,
				name: this.name,
				hour: this.hour,
				minute: this.minute,
				month: this.month,
				year: this.year,
				time: this.time,
				timeCreated: this.timeCreated,
				lastUpdated: this.lastUpdated,
				description: this.description,
				weblink: this.weblink,
				address: this.address,
				completed: this.completed
			}
		}

		get jsonString() {
			return JSON.stringify(this.toJSON());
		}

		get completed() {
			return this.completed;
		}
		set completed(value) {
			this.completed = value;
			updateLastUpdated();
		}
}

export {toDo};
