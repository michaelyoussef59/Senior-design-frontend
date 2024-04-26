import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiServiceService } from '../api-service.service';
import { AppComponent } from '../app.component';
import { delay } from 'rxjs';

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

  usersResultsArr: string[] = ["user #1", "user #2"]; // array used to display users, default is user #1 and user #2 solely for testing
  usersResults: string = ''; // to be populated by init or search and used to add to results array
  receivedData: any;
  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.usersResults = '';
    this.populateUsersResultTextBox();
    // let jsonData = this.apiService.getUsers();
    // this.parseUserIDs(jsonData);
    this.apiService.fetchData().subscribe((jsonData: any) => {
      if (jsonData && jsonData.body) {
        this.receivedData = jsonData.body;
      }
      this.parseUserIDs(jsonData);
    })
  }

  parseUserIDs(jsonData: any) {
    // Array to store userIDs
    const userIdArray: any[] = [];

    // Iterate over each item in the "body" array
    jsonData.body.forEach((item: { hasOwnProperty: (arg0: string) => any; userId: any; }) => {
      // Check if the item has a "userId" property
      if (item.hasOwnProperty('userId')) {
        // Push the userId to the userIdArray
        userIdArray.push(item.userId);
      }
    });

    // Display the array of userIDs
    console.log(userIdArray);
    this.usersResults = '';
    for (var entryNumber in userIdArray) {
      this.usersResults += userIdArray[entryNumber];
      this.usersResults += "\n";
    }

  }

  populateUsersResultTextBox() {
    for (var entryNumber in this.usersResultsArr) {
      this.usersResults += this.usersResultsArr[entryNumber];
      this.usersResults += "\n";
    }
  }

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
    if ((this.userIDTextAreaValue != "") && (this.emailTextAreaValue != "")) {
        this.apiService.addUser(this.userIDTextAreaValue, this.emailTextAreaValue)
          .subscribe(
            response => {
              console.log('User added successfully', response);
              // Do something with the response
            },
            error => {
              console.error('Error adding user:', error);
              // Handle error
            }
          );
    }
    else {
      console.log("missing value");
    }
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
