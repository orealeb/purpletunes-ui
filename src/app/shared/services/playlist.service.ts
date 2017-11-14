import { Playlist, Submission } from '../interfaces/all.interface';
import { PLAYLISTS } from '../mock-data/mock-playlists';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, Response, Request, RequestMethod, RequestOptions } from '@angular/http';


@Injectable()
export class PlaylistService {

  private req: Request;
  constructor(private _http: Http) {
    this.req = new Request({
      method: RequestMethod.Get,
      url: '',
      withCredentials: true,
    });
  }
  
  savePlaylistFormSubmission(submission: Submission): Observable<Submission> {
    console.log('service call');
    const body = JSON.stringify({ submission });
    console.log(body);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers, withCredentials: false }); //changed with credentials

    return this._http.post('http://purpletunes-api/v1/playlistFormSubmission/', body, options)
      .map((res: Response) => <any>res.json())
      .catch(this.handleError);
  }

  // TODO
  // implement exception handling strategy
  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
