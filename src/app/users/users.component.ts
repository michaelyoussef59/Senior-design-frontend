import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  searchUsersTextAreaValue = '';
  userIDTextAreaValue = '';
  emailTextAreaValue = '';
  usernameTextAreaValue = '';
  credentialNumberTextAreaValue = '';
  phoneTextAreaValue = '';
  nameTextAreaValue = '';
  roleTextAreaValue = '';
  nfcIDTextAreaValue = '';
  passwordTextAreaValue = '';
  usersResultsArr = ['user #1', 'user #2'];
  usersResults = '';
  receivedData: any;

  constructor(private apiService: ApiServiceService) {}

  ngOnInit() {
    this.populateUsersResultTextBox();
    this.fetchDataAndParseUserIDs();
  }

  fetchDataAndParseUserIDs() {
    this.apiService.fetchData().subscribe((jsonData: any) => {
      if (jsonData && jsonData.body) {
        this.receivedData = jsonData.body;
        this.parseUserIDs(jsonData);
      }
    });
  }

  parseUserIDs(jsonData: any) {
    const userIdArray = jsonData.body
      .filter((item: any) => item.hasOwnProperty('userId'))
      .map((item: any) => item.userId);

    console.log(userIdArray);
    this.usersResults = userIdArray.join('\n');
  }

  populateUsersResultTextBox() {
    this.usersResults = this.usersResultsArr.join('\n');
  }

  clearEnteredUserData() {
    this.userIDTextAreaValue = '';
    this.emailTextAreaValue = '';
    this.usernameTextAreaValue = '';
    this.credentialNumberTextAreaValue = '';
    this.phoneTextAreaValue = '';
    this.nameTextAreaValue = '';
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
    console.log('Cancel clicked');
    this.clearEnteredUserData();
  }

  onSearchClick() {
    if (!this.receivedData) {
      console.error('No data received.');
      return;
    }

    if (!this.searchUsersTextAreaValue.trim()) {
      // If search input is empty, reset usersResults to display all users
      this.populateUsersResultTextBox();
      return;
    }

    // Filter receivedData based on search input
    const filteredUsers = this.receivedData.filter((user: any) => {
      // Check if the user object and its properties exist before accessing them
      return (
        user &&
        user.username &&
        user.email &&
        (user.username
          .toLowerCase()
          .includes(this.searchUsersTextAreaValue.toLowerCase()) ||
          user.email
            .toLowerCase()
            .includes(this.searchUsersTextAreaValue.toLowerCase()))
      );
    });

    // Extract user IDs from filtered users
    const userIds = filteredUsers.map((user: any) => user.userId);

    // Update usersResults with filtered user IDs
    this.usersResults = userIds.join('\n');
  }
}
