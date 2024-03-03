import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  searchUsersTextAreaValue: string = ''; // string taken from user search field
  firstNameTextAreaValue: string = ''; // string taken from first name field
  lastNameTextAreaValue: string = ''; // string taken from last name field
  credentialNumberTextAreaValue: string = ''; // string taken from credential number field
  accessLevelTextAreaValue: string = ''; // string taken from access level field
  activationDateTextAreaValue: string = ''; // string taken from activation date field
  expirationDateTextAreaValue: string = ''; // string taken from expiration date field

  clearEnteredUserData() {
    //This function clears all of the fields populated by the user
    this.firstNameTextAreaValue = ''; // string taken from first name field
    this.lastNameTextAreaValue = ''; // string taken from last name field
    this.credentialNumberTextAreaValue = ''; // string taken from credential number field
    this.accessLevelTextAreaValue  = ''; // string taken from access level field
    this.activationDateTextAreaValue = ''; // string taken from activation date field
    this.expirationDateTextAreaValue = ''; // string taken from expiration date field
  }

  onSaveClick() {
    console.log("Save clicked: ", this.firstNameTextAreaValue, this.lastNameTextAreaValue, this.credentialNumberTextAreaValue, this.accessLevelTextAreaValue, this.activationDateTextAreaValue, this.expirationDateTextAreaValue);
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
