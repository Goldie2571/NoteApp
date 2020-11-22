import { Component } from '@angular/core';
import 'lodash';

declare var _: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NoteApp';
  rootName = 'Jeremy';
  rootItems=['apples','bannanas', 'cherries'];
  number = 0;


  onNameChanged(newName) {
     this.rootName = newName;
  }
  onItemsWasAdded(newItem){
    this.rootItems.push(newItem);
    console.log(this.rootItems);
  }
  increaseNum(){
    this.number = _.random(1 , 10);

  }
}
