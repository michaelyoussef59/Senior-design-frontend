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
  
  //all vars below this are test vars
  facilitiesResultArr: string[] = ["facility #1", "facility #2"];

  ngOnInit() {
    // populate facilities from api here
    this.facilitiesResult = '';
    this.populateFacilitiesResultTextBox();
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

  onSearchFacilitiesButtonClick() {
    console.log("Search facilities button clicked", this.searchFacilitiesUserEnteredTextArea);
    this.searchFacilitiesUserEnteredTextArea = '';
  }

  onSearchAccessPointsButtonClick() {
    console.log("Search access points button clicked", this.searchAccessPointsUserEnteredTextArea);
    this.searchFacilitiesUserEnteredTextArea = '';
  }


}
