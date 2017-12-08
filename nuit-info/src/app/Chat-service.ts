import { Injectable } from '@angular/core';
import { WebsocketService } from './Socket-service';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class ChatService {
  messages: Subject<any>;

  constructor(private wsService: WebsocketService) {
    this.messages = <Subject<any>>wsService
      .connect()
      .map((response: any): any => {
      return response;
      })
  }

  sendMsg(msg) {
    this.messages.next(msg);
  }
}

