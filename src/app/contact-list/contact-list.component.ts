import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
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
  onDelete($key){
      if(confirm("Are you sure you want to delete this contact?")){
       this.contactService.deleteContact($key);
       this.showDeleteMessage = true;
       setTimeout(()=> this.showDeleteMessage = false , 5000)
     }
   }
   filterCondition(contact){

   	return contact.lastName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
   }

}
