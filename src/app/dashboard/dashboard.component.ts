import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() dashboardName = "dashboard";
  @Output() dashboardChanged = new EventEmitter <string>();

  constructor() { }

  onUserInput(event){
    this.dashboardChanged.emit(event.target.value);
  }

  ngOnInit(): void {
  }

}
