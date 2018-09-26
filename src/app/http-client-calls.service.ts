import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientCallsService {

  constructor(private httpClient: HttpClient) { }

  getWebPageCount() {
 
    return this.httpClient.get('http://192.168.2.250:9090/', {responseType: 'text'});
    
  }

  killWebPageCount() {
    const httpOptions = {
      headers: new HttpHeaders({
      })
    };
    return this.httpClient.post('http://192.168.2.250:9090/crash', httpOptions, {responseType: 'text'} );
    
  }

  getWebPageHealth() {
    
    return this.httpClient.get('http://192.168.2.250:9090/health', {responseType: 'text'});
    
  }
  
}
