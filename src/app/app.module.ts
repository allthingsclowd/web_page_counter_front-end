import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { HttpClientCallsService } from './http-client-calls.service';
import { DisablecacheInterceptorService} from './disablecache-interceptor.service';
import { GaugeModule } from 'node_modules/angular-gauge';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GaugeModule.forRoot()
  ],
  providers: [HttpClientCallsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DisablecacheInterceptorService ,
      multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
