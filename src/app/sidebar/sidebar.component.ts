import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  showFiller = false;
  showHoverAreaString: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  HoverOn(){
    this.showHoverAreaString = "hidden"
  }

  HoverOut(){
    setTimeout(() => {this.showHoverAreaString = ""}, 1000)
  }
}
