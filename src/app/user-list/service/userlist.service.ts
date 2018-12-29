import { Injectable } from '@angular/core';
// todo 这个已经过时了, 而且有无用的东西
// todo 有一些不应该有的导入
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";

@Injectable()
export class UserListService {
  public userListURL: string = 'mock-data/userlist-mock.json';

  constructor(public http: Http) { }

  public getUserList(): Observable<any> {
    return this.http
      .get(this.userListURL)
      .pipe(
        map((res: Response) => {
          let result = res.json();
          console.log(result);
          return result;
        }),
        catchError((error: any) => Observable.throw(error || 'Server error'))
      );
  }
}
