import { Component, OnInit } from '@angular/core';
import { Router,Routes } from '@angular/router'
 import { ListComponent } from '../student/list/list.component';
 import { DetailsComponent } from '../student/details/details.component';
 import { AddComponent } from '../student/add/add.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

logOut(){
 		// this.toastr.success('Success', "Logged Out Successfully");
 		localStorage.removeItem('userData');
 		this.router.navigate(['/login']);
 	}

}

export const homeChildRoutes : Routes = [
 {
 	path: '',
 	component: ListComponent
 },
 {
 	path: 'add',
 	component: AddComponent
 },
 {
 	path: 'update/:id',
 	component: AddComponent
 },
 {
 	path: 'detail/:id',
 	component: DetailsComponent
 }
 ];