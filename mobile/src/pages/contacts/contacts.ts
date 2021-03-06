import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactsService } from '../../services/contacts.service'
import { Person } from '../../models/person'

class Contact {
  avatar: string;
  full_name: string;
  comment: string;
}

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {

  contacts: Contact[] = [
    { avatar: 'assets/img/spengler.jpg', full_name: 'Egon',    comment: 'We are gonna go full stream.' },
    { avatar: 'assets/img/stantz.jpg',   full_name: 'Ray',     comment: 'Ugly little spud, is not he?' },
    { avatar: 'assets/img/winston.jpg',  full_name: 'Winston', comment: 'That is a big Twinkie.' },
    { avatar: 'assets/img/tully.jpg',    full_name: 'Tully',   comment: 'Okay, who brought the dog?' },
    { avatar: 'assets/img/barrett.jpg',  full_name: 'Dana',    comment: 'I am The Gatekeeper!' }
  ]

  persons: Person[];

  constructor( public navCtrl: NavController, 
  	           public navParams: NavParams,
  	           private contactsService: ContactsService,
  	            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
  }

  ngOnInit(){
    this.contactsService.getPersonsList().subscribe(
    	persons => this.persons=persons
    );
  }
}
