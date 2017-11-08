import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatCardModule, MatDialogModule} from '@angular/material';


import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HomeComponent,ArticleModalDialog }   from './home/home.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { HeaderComponent, LoginModalDialog } from './shared';

import { ArticleService }          from './shared/services/article.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HomeComponent,
    HeroesComponent,
    HeaderComponent,
    LoginModalDialog,
    ArticleModalDialog
  ],
  providers: [ ArticleService ],
  bootstrap: [ AppComponent, HeaderComponent, LoginModalDialog, ArticleModalDialog ]
})
export class AppModule { }
