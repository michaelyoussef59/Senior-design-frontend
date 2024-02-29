import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  searchUsersTextAreaValue: string = ''; // string taken from user search field
  userIDTextAreaValue: string = ''; // string taken from first name field
  emailTextAreaValue: string = ''; // string taken from last name field
  usernameTextAreaValue: string = ''; // string taken from credential number field
  credentialNumberTextAreaValue: string = ''; // string taken from access level field
  phoneTextAreaValue: string = ''; // string taken from activation date field
  nameTextAreaValue: string = ''; // string taken from expiration date field
  roleTextAreaValue: string = '';
  nfcIDTextAreaValue: string = '';
  passwordTextAreaValue: string = '';

  clearEnteredUserData() {
    //This function clears all of the fields populated by the user
    this.userIDTextAreaValue = ''; // string taken from first name field
    this.emailTextAreaValue = ''; // string taken from last name field
    this.usernameTextAreaValue = ''; // string taken from credential number field
    this.credentialNumberTextAreaValue  = ''; // string taken from access level field
    this.phoneTextAreaValue = ''; // string taken from activation date field
    this.nameTextAreaValue = ''; // string taken from expiration date field
    this.roleTextAreaValue = '';
    this.nfcIDTextAreaValue = '';
    this.passwordTextAreaValue = '';
  }

  onSaveClick() {
    const currentDate = new Date(); // get current date and time
    const currentDateString = currentDate.toString().substring(0, currentDate.toString().length - 25); // convert date and time to string without the last 25 characters
    console.log("Save clicked: ", this.userIDTextAreaValue, this.emailTextAreaValue, this.usernameTextAreaValue, this.credentialNumberTextAreaValue, this.phoneTextAreaValue, this.nameTextAreaValue, this.roleTextAreaValue, this.nfcIDTextAreaValue, this.passwordTextAreaValue, currentDateString);
    this.clearEnteredUserData();
  }

  onCancelClick() {
    console.log("Cancel clicked");
    this.clearEnteredUserData();
  }

  onSearchClick() {
    console.log("Search clicked", this.searchUsersTextAreaValue);
  }
}
