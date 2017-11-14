import { Component, OnInit , Inject} from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';



@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {


    constructor(public dialog: MatDialog) {}

    ngOnInit() {    }

  // openDialog(): void {
  //   let dialogRef = this.dialog.open(LoginModalDialog, {
  //     width: '250px',
  //     data: { }//name: this.name, animal: this.animal }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     //this.animal = result;
  //   });
  // }

 
}

// @Component({
//   selector: 'login-modal-dialog',
//   templateUrl: '../modal-dialog/login-modal-dialog.html'
// })
// export class LoginModalDialog {

//   constructor(
//     public dialogRef: MatDialogRef<LoginModalDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: any) { }

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }