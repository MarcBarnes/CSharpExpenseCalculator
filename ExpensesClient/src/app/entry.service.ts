import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  baseUrl: string = 'http://localhost:49189/api/entries/'

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.baseUrl);
  }

}
