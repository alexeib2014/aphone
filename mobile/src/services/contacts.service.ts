import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

import { Person } from '../models/person'

@Injectable()
export class ContactsService {
  
    constructor(private http: HttpClient){ }
      
    getPersonsList() : Observable<Person[]> {
        return this.http.get('http://localhost:8000/contacts/persons_list_get/api')
                        .map( data => {
                        	let status = data['status'];
                        	if (status != 'Ok') {
	                        	console.log('Server status error: ' + status);
	                        	return [];
                        	}
				            let persons = data['persons'];
				            return persons.map( person => person ); })
                        .catch( (error:any) => {
                        	console.log(error);
                        	return Observable.of([]);
				        });
    }
}
 