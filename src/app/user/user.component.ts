import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() name = 'Jeremy';
  @Output() nameChanged = new EventEmitter<string>();
  userResponse = 'fine';
  userResponseTwo='also fine';
  // receiving the value from input field using event and changing the variable with the value;

  loadState = 'loading';
  loadStateTwo='loading';
  newDashboardName='new';

  onUserInput(event){
    //this.userResponse = event.target.value;
    this.nameChanged.emit(event.target.value);

  }
  onUserClick(event){
    this.loadState = 'finished';

  }
  onUserDashboardChange(dashboardName){
    this.newDashboardName = dashboardName;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
