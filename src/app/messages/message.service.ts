import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  //ve a quien hay q mandarel el mensaje => ver angulario/tutorial/toh-pt4
  constructor() { }
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
