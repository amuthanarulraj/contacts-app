import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: Array<Contact>;
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.list().subscribe(contacts => {
      this.contacts = contacts;
    });
  }

  sayHi(): string {
    return 'Hi!';
  }

  updateName(event: Event, contact: Contact) {
    const target: any = event.target;
    const newValue = target.value;
    contact.firstname = newValue;
  }

}
