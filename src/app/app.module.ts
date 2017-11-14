import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, Http } from '@angular/http';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatCardModule, MatDialogModule} from '@angular/material';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HomeComponent }   from './home/home.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { HeaderComponent } from './shared';

import { ArticleService }          from './shared/services/article.service';
import { PlaylistService }          from './shared/services/playlist.service';

import { AppRoutingModule }     from './app-routing.module';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HomeComponent,
    HeroesComponent,
    HeaderComponent
  ],
  providers: [ ArticleService, PlaylistService ],
  bootstrap: [ AppComponent, HeaderComponent ]
})
export class AppModule { }
