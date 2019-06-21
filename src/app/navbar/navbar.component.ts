import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	public projectName:string;
  constructor() {
  	this.projectName = "Phone book"
   }

  ngOnInit() {
  }

}
