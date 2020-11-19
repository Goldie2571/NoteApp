import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NoteApp';
  rootName = 'Jeremy';
  rootItems=['apples','bannanas', 'cherries'];


  onNameChanged(newName) {
     this.rootName = newName;
  }
  onItemsWasAdded(newItem){
    this.rootItems.push(newItem);
    console.log(this.rootItems);
  }
}
