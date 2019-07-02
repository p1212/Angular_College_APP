import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
	title = 'app';

	// Add few students for initial listing
	studentsList = [
	{	
		id : 1,
		first_name : "Megha",
		last_name : "G",
		email : "meghag@gmail.com",
		phone : 9999999999,
		department : "Science"
	},
	{
		id : 2,
		first_name : "Vishal",
		last_name : "Kumar",
		email : "vishalK@gmail.com",
		phone : 8888888888,
		department : "Commerce"
	},
	{
		id : 3,
		first_name : "Neeraj",
		last_name : "Kumar",
		email : "neerajK@gmail.com",
		phone : 7777777777,
		department : "Science"
	},
	{
		id : 4,
		first_name : "Praveen",
		last_name : "Kumar",
		email : "praveenK@gmail.com",
		phone : 9898989898,
		department : "Arts"
	},
	{
		id : 5,
		first_name : "Nethra",
		last_name : "Vati",
		email : "nethraV@gmail.com",
		phone : 8989898989,
		department : "Engineering"
	}
	];

	constructor() {
		// Save students to localStorage
		localStorage.setItem('students', JSON.stringify(this.studentsList));
	}
}
