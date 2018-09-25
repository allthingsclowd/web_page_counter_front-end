import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
//import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class HttpClientCallsService {


  

  constructor(private httpClient: HttpClient) { }
  

  getWebPageCount() {
 
    return this.httpClient.get('http://127.0.0.1:2337/192.168.2.250:9090/', {responseType:'text'});
    
  }

  killWebPageCount() {
    
    return this.httpClient.post('http://127.0.0.1:2337/192.168.2.250:9090/crash', {responseType:'text'});
    
  }

  getWebPageHealth() {
    
    return this.httpClient.get('http://127.0.0.1:2337/192.168.2.250:9090/health', {responseType:'text'});
    
  }
  
}
