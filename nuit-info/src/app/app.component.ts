import { Component, OnInit } from '@angular/core';
import { WebsocketService} from "./Socket-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  appTitle = "Nuit de l'info 2017"
  messages = [];
  options = [];

  constructor(private socketService: WebsocketService) { }

  ngOnInit() {
    this.socketService.connect()
    this.socketService.getIo().on("ReceivedMessage",msg => {
      this.messages.push(msg);
      this.options = msg.options;
    })
  }

  onOptionClick(option) {
    this.options = []
    this.socketService.getIo().emit("ReceivedOption",option)
    this.messages.push({type:"text",other:true,text:option.userText})
  }
}
