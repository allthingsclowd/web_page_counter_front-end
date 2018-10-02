import { Component } from '@angular/core';
import { HttpClientCallsService } from './http-client-calls.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  webpagetotal;
  crashreport;
  webpagehealth;
  consulservicecount: any;
  title = 'wpc-fe';
  
  constructor (private webcountercall: HttpClientCallsService) {}
  WebPageCount() {
    this.webcountercall.getWebPageCount()
      .subscribe(
        (response) => {
          this.webpagetotal = response; },
        (error) => console.log(error)
      );
  }

  WebPageCountActiveServices(){
    this.webcountercall.getConsulHealthyNodeCount()
      .subscribe(
        (response) => {
          this.consulservicecount = response; },
        (error) => console.log(error)
      );
  }

  WebPageHealth() {
    this.webcountercall.getWebPageHealth()
      .subscribe(
        (response) => {
          this.webpagehealth = response; },
        (error) => console.log(error)
      );
  }

  KillService() {
    this.webcountercall.killWebPageCount()
      .subscribe(
        (response) => {
          this.crashreport = response; },
        (error) => console.log(error)
      );
  }
  
}

