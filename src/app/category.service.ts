import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './model/Category'
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryUrl: string = "http://localhost:9090/category/all";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    })
  }

  constructor(private http:HttpClient) { }

  getAllCategory(): Observable<Category[]>{
    return this.http.get<Category[]>(this.categoryUrl).pipe(
      tap(data => console.log("tap_getAllCate" ,data))
    );;
  }
}
