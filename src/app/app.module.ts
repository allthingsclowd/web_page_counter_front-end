import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { HttpClientCallsService } from './http-client-calls.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule

  
  ],
  providers: [HttpClientCallsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
