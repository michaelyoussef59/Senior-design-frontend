import { Component } from '@angular/core';

@Component({
  selector: 'app-accesspoints',
  templateUrl: './accesspoints.component.html',
  styleUrls: ['./accesspoints.component.css']
})
export class AccesspointsComponent {
  searchFacilitiesUserEnteredTextArea: string = ''; // to be populated by user
  searchAccessPointsUserEnteredTextArea: string = ''; // to be populated by user
  facilitiesResult: string = ''; // to be populated by init or search
  accessPointsResult: string = ''; // to be populated by init or search
  
  //all vars below this are test vars
  facilitiesResultArr: string[] = ["facility #1", "facility #2"];
  accessPointsResultArr: string[] = ["access point #1", "access point #2"];

  ngOnInit() {
    // populate facilities from api here
    this.facilitiesResult = '';
    this.populateFacilitiesResultTextBox();
    this.accessPointsResult = '';
    this.populateAccessPointsResultTextBox();
  }

  handleClick(clickedString: string) {
    // const clickedString = this.getSelectedString(event.target);
    console.log("Click detected" + clickedString);
  }

  getSelectedString(textArea: HTMLTextAreaElement): string {
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;

    return textArea.value.substring(start, end);
  }

  populateFacilitiesResultTextBox() {
    for (var entryNumber in this.facilitiesResultArr) {
      this.facilitiesResult += this.facilitiesResultArr[entryNumber];
      this.facilitiesResult += "\n";
    }
  }

  populateAccessPointsResultTextBox() {
    for (var entryNumber in this.accessPointsResultArr) {
      this.accessPointsResult += this.accessPointsResultArr[entryNumber];
      this.accessPointsResult += "\n";
    }
  }

  onSearchFacilitiesButtonClick() {
    console.log("Search facilities button clicked", this.searchFacilitiesUserEnteredTextArea);
    this.searchFacilitiesUserEnteredTextArea = '';
  }

  onSearchAccessPointsButtonClick() {
    console.log("Search access points button clicked", this.searchAccessPointsUserEnteredTextArea);
    this.searchFacilitiesUserEnteredTextArea = '';
  }


}
