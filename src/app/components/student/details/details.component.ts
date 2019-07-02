import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes ,Router,ActivatedRoute} from '@angular/router';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
index:any;
 	studentDetail:any;
  constructor(private router: Router, 
  	          private route: ActivatedRoute, 
  	          private studentService:StudentService) {
  // Get user detail index number sent in params
 		this.route.params.subscribe(params => {
 			this.index = params['id'];
 			if (this.index && this.index != null && this.index != undefined) {
 				this.getStudentDetails(this.index);
 			}
 		}); }

  ngOnInit() {
  }

// Get student details 
 	getStudentDetails(index:number){
 		let getStudentDetail = this.studentService.getStudentDetails(index);
 		if(getStudentDetail) {
 			this.studentDetail = getStudentDetail.studentData;
 			// this.toastr.success(getStudentDetail.message,"Success");
 		}
 	}
}
