import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ContactViewComponent implements OnInit {

  @Input() contact: Contact;

  constructor() { }

  ngOnInit() {
  }

}
