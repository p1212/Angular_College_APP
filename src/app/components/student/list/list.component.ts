import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/student.service';
// import { routerTransition } from '../../../services/config.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
studentList:any;
studentListData:any;
constructor(private studentService:StudentService) { }

  ngOnInit() {
  	this.getStudentList();
  }

// Get student list from services
 	getStudentList(){
 		let studentList = this.studentService.getAllStudents();
 		this.success(studentList)
 	}

 	// Get student list success
 	success(data){
 		this.studentListData = data.data;
 		for (var i = 0; i < this.studentListData.length; i++) {
 			this.studentListData[i].name = this.studentListData[i].first_name +' '+ this.studentListData[i].last_name;
 		}
 	}

 	// Delete a student with its index
 	deleteStudent(index:number){
 		// get confirm box for confirmation
 		let r = confirm("Are you sure?");
 		if (r == true) {
 			let studentDelete = this.studentService.deleteStudent(index);
 			if(studentDelete) {
 				// this.toastr.success("Success", "Student Deleted");
 			} 
 			this.getStudentList();
 		}
 	}
}
