import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  showMenu: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  onClick($event) {
    let controlName = $event.target.getAttribute("class");
    console.log($event)
    console.log($event)
    if ($event) {
      this.showMenu[controlName] = true;
   
    } else {
      this.showMenu[controlName] = false;
    }
  }
}