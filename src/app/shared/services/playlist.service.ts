import { Playlist, Submission } from '../interfaces/all.interface';
import { PLAYLISTS } from '../mock-data/mock-playlists';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, Response, Request, RequestMethod, RequestOptions } from '@angular/http';
// APP DEPENDENCIES
import { environment } from '../../../environments/environment';

const purpleTunesApi = environment.purpleTunesApiBaseUrl;
const playlistSubmissionApi = purpleTunesApi + '/playlistFormSubmission';

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
    const options = new RequestOptions({ headers: headers, withCredentials: true }); //changed with credentials

    return this._http.post(playlistSubmissionApi, body, options)
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
