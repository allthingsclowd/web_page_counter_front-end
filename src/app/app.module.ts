import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { HttpClientCallsService } from './http-client-calls.service';
import { DisablecacheInterceptorService} from './disablecache-interceptor.service';

import { EnvServiceProvider } from './env.service.provider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpClientCallsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DisablecacheInterceptorService ,
      multi: true
  }, EnvServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
