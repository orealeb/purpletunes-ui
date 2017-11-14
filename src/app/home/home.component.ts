import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Playlist, Submission } from '../shared/interfaces/all.interface';
import { PlaylistService } from '../shared/services/playlist.service';
import { PLAYLISTS } from '../shared/mock-data/mock-playlists';
import { Subject } from 'rxjs/Subject';
import { debounceTime } from 'rxjs/operator/debounceTime';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [NgbRatingConfig] // add NgbRatingConfig to the component providers
})
export class HomeComponent implements OnInit {

    private playlists: Playlist[] = [];

    private submission: Submission = { name: '', email: '', url: '', playlists: [] };

    constructor(private playlistService: PlaylistService, public dialog: MatDialog, config: NgbRatingConfig) {
        // customize default values of ratings used by this component tree
        config.max = 5;
        config.readonly = true;
    }

    ngOnInit(): void {
        this._success.subscribe((message) => this.successMessage = message);
        debounceTime.call(this._success, 4000).subscribe(() => this.successMessage = null);
        // this.onChangeTable(this.config);
        // this.length = this.data.length;

    }

    public submitButton() {
        console.log(this.submission);

        if (this.submission.name == '' && this.submission.email == '' && this.submission.url == '') {
            this.errorMessage = `Error, make sure submission name, email, and url are filled.`;
            return;
        }
        let selectedPlaylists: Playlist[] = [];
        this.data.forEach(item => {
            console.log(item.selected == true);
            if (item.selected) {
                selectedPlaylists.push(item);
            }
        });
        this.submission.playlists = selectedPlaylists;
        this.playlistService.savePlaylistFormSubmission(this.submission)
            .subscribe(
            data => {
                this._success.next(`Submitted, we will be in contact with you soon.`);
                console.log('Submitted');
            },
            error => {
                this.errorMessage = <any>error;
                console.log(this.errorMessage);
            }
            );

        //Api to save selectedPlaylists, email, name, url. show toaster/alert, and reset input
        console.log('Submit button');
    }

    private closeAlert() {
        this.errorMessage = '';
    }

    private _success = new Subject<string>();
    private _error = new Subject<string>();

    successMessage: string;
    errorMessage: string;

    private data: Array<any> = PLAYLISTS;

    private settings = {
        columns: {
            name: {
                title: 'Name'
            },
            platform: {
                title: 'Platform'
            },
            numOfFollowers: {
                title: 'Number of Followers'
            },
            cost: {
                title: 'Cost ($)'
            }
        }
    };


}
