import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url : string = "https://api.github.com/users"

  constructor(private http:HttpClient) { }

  getUsers() : Observable<IUser[]>{
    return this.http.get<IUser[]>(this.url)
  }
}
