import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable, interval } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class HttpClientCallsService {

  constructor(private httpClient: HttpClient) { }

  getWebPageCount() {
 
    return this.httpClient.get('http://192.168.2.250:9090/', {responseType: 'text'});
    
  }

  killWebPageCount() {

    return this.httpClient.post('http://192.168.2.250:9090/crash', {responseType: 'text'} );
    
  }

  getWebPageHealth() {
    
    return this.httpClient.get('http://192.168.2.250:9090/health', {responseType: 'text'});
    
  }

  getConsulHealthyNodeCount() {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.httpClient.get('http://127.0.0.1:2337/192.168.2.11:8500/v1/health/service/webpagecounter?status=passing', httpOptions);
    
  

  const result = interval(5000).pipe(
    switchMap(() => this.httpClient.get('http://127.0.0.1:2337/192.168.2.11:8500/v1/health/service/webpagecounter?status=passing', httpOptions)),    
    map(res => return res;)
    )
  }
  
}
