import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent implements OnInit {

  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    const child1 = document.querySelector('.dro-menu-child-1');
    const child3 = document.querySelector('.dro-menu-child-3');
    if (child1 && child3) {
      if (this.isDropdownOpen) {
        child1.classList.add('rotate');
        child3.classList.add('rotate');
      } else {
        child1.classList.remove('rotate');
        child3.classList.remove('rotate');
      }
    }
  }
  
  

  constructor() { }

  ngOnInit(): void {

    
  }

}
