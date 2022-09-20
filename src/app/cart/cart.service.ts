import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book.model';
const HOST = environment.baseUrl
@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {

  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {

  }
  getBooks():Observable<any>{
    return this.http.get(HOST)
  }
}
