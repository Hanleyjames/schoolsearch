import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchdropdownService {
  // set variable messageSource to a new empty BehaviorSubject
  private messageSource = new BehaviorSubject({});
  // set the current message to the messageSource 
  currentMessage = this.messageSource.asObservable();
  constructor() { }
  // change the message source object uppon being called
  changeMessage(message: object) {
    this.messageSource.next(message)
  }
}
