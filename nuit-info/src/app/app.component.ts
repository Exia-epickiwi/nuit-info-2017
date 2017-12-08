import { Component, OnInit } from '@angular/core';
import { ChatService} from "./Chat-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  appTitle = "Nuit de l'info 2017"
  messages = [];

  constructor(private chat: ChatService) { }

  ngOnInit() {
    this.chat.messages.subscribe(msg => {
      this.messages.push(msg);
    })
  }

  sendMessage() {
    this.chat.sendMsg("Test Message");
  }
}
