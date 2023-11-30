import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  firstNameTextAreaValue: string = ''; // string taken from first name field
  lastNameTextAreaValue: string = ''; // string taken from last name field
  credentialNumberTextAreaValue: string = ''; // string taken from credential number field
  accessLevelTextAreaValue: string = ''; // string taken from access level field
  activationDateTextAreaValue: string = ''; // string taken from activation date field
  expirationDateTextAreaValue: string = ''; // string taken from expiration date field

  onSaveClick() {
    console.log("Save clicked: ", this.firstNameTextAreaValue, this.lastNameTextAreaValue, this.credentialNumberTextAreaValue, this.accessLevelTextAreaValue, this.activationDateTextAreaValue, this.expirationDateTextAreaValue);
  }

  onCancelClick() {
    console.log("Cancel clicked");
  }

  onSearchClick() {
    console.log("Search clicked");
  }
}
