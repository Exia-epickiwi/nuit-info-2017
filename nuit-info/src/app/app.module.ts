import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { OptionComponent } from './option/option.component';
import {ChatService} from "./Chat-service";
import {WebsocketService} from "./Socket-service";

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    OptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ChatService,WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
