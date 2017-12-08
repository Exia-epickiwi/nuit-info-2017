import { Injectable } from "@angular/core";
import * as io from 'socket.io-client'
import { environment } from '../environments/environment'

@Injectable()
export class WebsocketService {

  private socket;

  constructor() {}

  connect() {
    this.socket = io(environment.ws_url);
  }

  getIo(){
    return this.socket
  }
}
