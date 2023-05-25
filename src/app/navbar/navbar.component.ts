import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;
  ngOnInit(): void {}

  toggler_on_click() {
    console.log('hello from the other side');
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);

    if (this.isMenuOpen) {
    }
  }

  clickOutside(): void {
    this.isMenuOpen = false;
  }
}
