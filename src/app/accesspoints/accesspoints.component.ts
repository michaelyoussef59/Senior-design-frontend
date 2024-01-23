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

  ngOnInit() {
    // populate facilities from api here
    this.facilitiesResult = '';
  }

  onSearchFacilitiesButtonClick() {
    console.log("Search facilities button clicked", this.searchFacilitiesUserEnteredTextArea);
  }

  onSearchAccessPointsButtonClick() {
    console.log("Search access points button clicked", this.searchAccessPointsUserEnteredTextArea);

  }


}
