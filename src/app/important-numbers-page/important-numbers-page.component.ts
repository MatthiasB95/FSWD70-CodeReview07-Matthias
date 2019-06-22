import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'important-numbers-page',
  templateUrl: './important-numbers-page.component.html',
  styleUrls: ['./important-numbers-page.component.css']
})
export class ImportantNumbersPageComponent implements OnInit {
	contactArray = [];
	showDeleteMessage: boolean;
	searchText: string = "";
	
  constructor(public contactService: ContactService) { }

  ngOnInit() {
  	this.contactService.getContact().subscribe(
  		(list) => {
  			this.contactArray = list.map( (item) => {
  				return{
  					$key:item.key,
  						...item.payload.val()
  				}
  			})
  		});
  }

}
