import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import { RouterModule, Routes ,Router,ActivatedRoute} from '@angular/router';
import { StudentService } from '../../../services/student.service';
import { ValidationService } from '../../../services/config.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
index:any;
private studentAddForm : FormGroup;
  constructor(private formBuilder: FormBuilder,
  	          private router: Router, 
  	          private route: ActivatedRoute,
  	          private studentService:StudentService) { 

	// Check for route params
 		this.route.params.subscribe(params => {
 			this.index = params['id'];
 			// check if ID exists in route & call update or add methods accordingly
 			if (this.index && this.index != null && this.index != undefined) {
 				this.getStudentDetails(this.index);
 			}else{
 				this.createForm(null);
 			}
 		});

  }

  ngOnInit() {
  }


 	// Submit student details form
 	doRegister(){
 		if (this.index && this.index != null && this.index != undefined) {
 			this.studentAddForm.value.id = this.index
 		}else{
 			this.index = null;
 		}
 		let studentRegister = this.studentService.doRegisterStudent(this.studentAddForm.value, this.index);
 		if(studentRegister) {
 			if (studentRegister.code == 200) {
 				alert("SUCCESS")
 				this.router.navigate(['/']);
 			}else{
 				alert("FAILED")
 			}
 		}
 	}

 	// If this is update form, get user details and update form
 	getStudentDetails(index:number){
 		let studentDetail = this.studentService.getStudentDetails(index);
 		this.createForm(studentDetail);
 	}

 	// If this is update request then auto fill form
 	createForm(data){
 		if (data == null) {
 			this.studentAddForm = this.formBuilder.group({
 				first_name: ['',  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
 				last_name: ['',  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
 				phone: ['',  [Validators.required,ValidationService.checkLimit(5000000000,9999999999)]],
 				email: ['',  [Validators.required, ValidationService.emailValidator]]
 			});			
 		}else{
 			this.studentAddForm = this.formBuilder.group({
 				first_name: [data.studentData.first_name,  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
 				last_name: [data.studentData.last_name,  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
 				phone: [data.studentData.phone,  [Validators.required,ValidationService.checkLimit(5000000000,9999999999)]],
 				email: [data.studentData.email,  [Validators.required, ValidationService.emailValidator]]
 			});
 		}
 	}
}
