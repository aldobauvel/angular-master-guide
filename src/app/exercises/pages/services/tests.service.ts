import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestsService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
    .pipe(
      mergeMap(res => res),
      map(usr => ({ email: usr.email, username: usr.username })),
      take(4),
    )
  }
}
