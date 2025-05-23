import {User} from "./User.js"
import {toDo} from "./toDo.js"
import {Storage} from "./storage.js"

//user login?
//

document.addEventListener("DOMContentLoaded", function() {
	//loads data from localStorage
	const savedData = localStorage.getItem("toDos");
	let toDoList = [];

	if (savedData)
	{
		try {
			const parsedToDos = JSON.parse(savedData);
			toDoList = parsedToDos.map((data) => {
				return new toDo({
					id: data.id,
					name: data.name,
					hour: data.hour,
					minute: data.minute,
					month: data.month,
					day: data.day,
					year: data.year,
					time: data.time,
					timeCreated: data.timeCreated,
					lastUpdated: data.lastUpdated,
					description: data.description,
					weblink: data.weblink,
					address: data.address,
					completed: data.completed
			});
			});
		} catch (error) {
			console.error("Error parsing toDos from localStorage:", error);
			// localStorage.removeItem("toDos");
		}
	}

	function updateLocalStorage() {
		localStorage.setItem("toDos", JSON.stringify(toDoList));
	}

	function deleteLocalStorage() {
		localStorage.removeItem("toDos");
	}

	//creates list for printing to the screen
	const todaysToDosContainer = document.getElementById("todays-to-dos");
	const todaysToDoUl = document.createElement("ul");

	let todaysList = []

	const today = new Date();

	toDoList.forEach((todo) => {
		if (todo.time.getTime() <= today.getTime() && todo.completed != true)
			todaysList.append(todo);
	});

	//list item with finished checkmark, date: name, and update & delete buttons
	todaysList.forEach((todo) => {
		let checkbox =document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.id = `todo-${todo.id}`;
		checkbox.checked = todo.completed;
		let checkboxLabel = document.createElement("checkbox-label");
		checkboxLabel.htmlFor = `todo-${todo.id}`;
		checkboxLabel.textContent = todo.name;
		li.appendChild(checkbox);
		li.appendChild(checkboxLabel);

		let li = document.createElement("li");
		li.textContent = todo.time + ": " + todo.name;
		li.classList.add("todo");

		let updateButton = document.createElement("li-update-button");
		updateButton.textContent = "Update";
		updateButton.classList.add("update-button");
		li.appendChild(button);

		let deleteButton = document.createElement("li-delete-button");
		deleteButton.textContent = "Delete";
		deleteButton.classList.add("delete-button");
		li.appendChild(deleteButton);

		todaysToDosContainer.appendChild(li);
	});

	// add toDo button
	const addToDoButton = document.getElementById("add-to-do");
	const toDoForm = document.getElementById("add-todo-form");
	// consider adding a cancel button or making the add button toggle 

	addToDoButton.addEventListener("click", () =>
	{
		toDoForm.style.display = "block";
	});

	toDoForm.addEventListener("submit", (event) => {
		event.preventDefault();
	})

	const toDoName = document.getElementById("todo-name").value;
	const toDoDescription = document.getElementById("todo-description").value;
	const toDoWeblink = document.getElementById("todo-weblink").value;
	const toDoAddress = document.getElementById("todo-address").value;
	const toDoMonth = document.getElementById("todo-month").value;
	const toDoDay = document.getElementById("todo-day").value;
	const toDoYear = document.getElementById("todo-year").value;
	const toDoHour = document.getElementById("todo-hour").value;
	const toDoMinute = document.getElementById("todo-minute").value;
	const toDoAmPm = document.getElementById("todo-am-pm").value;
	//insert leap year and month day logic checks

	let actualHour = Number(actualHour);
	if (toDoAmPm === "PM" && toDoHour !== "12")
	{
		actualHour = Number(toDoHour) + 12;
	} else if (toDoAmPm === "AM" && toDoHour === "12") {
		actualHour = Number(toDoHour) - 12;
	}

	let newToDo = new toDo({
		name: toDoName,
		description: toDoDescription,
		hour: actualHour,
		minute: toDoMinute,
		month: toDoMonth,
		day: toDoDay,
		year: toDoYear,
		weblink: toDoWeblink,
		address: toDoAddress,
	});

	//update the localStorage
});
