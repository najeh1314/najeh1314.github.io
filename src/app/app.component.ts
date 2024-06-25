import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pfolio';
  showNum: boolean = false;
  selected: String ='';

  // constructor(){
  //   this.isCurrent = false;
  //   this.showNum = false;
  // }
  // select(item: String): void{
  //   this.selected = item;
  // }
}
