import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Article } from '../shared/interfaces/all.interface';
import { ArticleService } from '../shared/services/article.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    articles: Article[] = [];

    constructor(private articleService: ArticleService, public dialog: MatDialog) { }

    ngOnInit(): void {
        this.articleService.getArticles()
            .then((articles) => {
                this.articles = articles;//.slice(1, 5);
                console.log(this.articles);
            });

    }

    openDialog(): void {
        let dialogRef = this.dialog.open(ArticleModalDialog, {
            width: '1050px',
            height: '600px',
            data: {}//name: this.name, animal: this.animal }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            //this.animal = result;
        });
    }
}


@Component({
    selector: 'article-modal-dialog',
    templateUrl: '../shared/modal-dialog/article-modal-dialog.html',
    styleUrls: ['../shared/modal-dialog/article-modal-dialog.scss']
})
export class ArticleModalDialog {

    constructor(
        public dialogRef: MatDialogRef<ArticleModalDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}