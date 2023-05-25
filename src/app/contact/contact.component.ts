import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contact_header_image: any;
  buttonDisabled: boolean = false;

  email_input = document.getElementById('email_content');

  ngOnInit(): void {
    this.contact_header_image = './../../assets/header-image.png';
  }

  send() {
    console.log(this.email_input);
  }
}
