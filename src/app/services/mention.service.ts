import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MentionService {

  private mentionUri = environment.endpoint + "/mention";

  constructor(private httpClient : HttpClient) { }

  public getMentionsByUsername(username, page, number){
    return this.httpClient.get(this.mentionUri + "?username=" + username + "&page=" + page + "&amount=" + number, { observe: 'response' });
  }
}
