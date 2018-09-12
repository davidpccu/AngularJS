import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IGetRandomService {
  configUrl = 'https://jsonplaceholder.typicode.com/posts/1';
  myDate: string;

  constructor(private http: HttpClient) {

  }

getConfig() {
  return this.http.get(this.configUrl).subscribe();
}
}
