import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { EnvService } from './env.service';

@Injectable()
export class HttpClientCallsService {

  constructor(private httpClient: HttpClient, private env: EnvService) { 
    if (!env.envFileLoaded) {
      console.log('Unable to read environment variables from env.js!');
    }
  }

  getWebPageCount() {
 
    return this.httpClient.get(`http://${this.env.apiUrl}:9090/`, {responseType: 'text'});
    
  }

  killWebPageCount() {

    return this.httpClient.post(`http://${this.env.apiUrl}:9090/crash`, {responseType: 'text'} );
    
  }

  getWebPageHealth() {
    
    return this.httpClient.get(`http://${this.env.apiUrl}:9090/health`, {responseType: 'text'});
    
  }
  
}
