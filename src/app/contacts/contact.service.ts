import { Injectable } from '@angular/core';
import { Contact } from './contact.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  public list(): Observable<Array<Contact>> {
    const contacts$ = this.http.get<Contact[]>('assets/contacts.json');
    return contacts$;
  }
}
