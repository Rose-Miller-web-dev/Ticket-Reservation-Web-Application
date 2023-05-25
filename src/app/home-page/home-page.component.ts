import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { EventServiceService } from '../services/event-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  ngOnInit(): void {
    this.get_event_list();
    this.organization_list = this.get_organization_list();
  }

  organization_list: any;
  upcoming_event_list: any;
  constructor(private service_child: EventServiceService) {}

  imageObject: Array<object> = [
    { image: './../assets/u0.jpg', thumbImage: './../assets/u0.jpg' },

    { image: './../assets/u1.jpg', thumbImage: './../assets/u1.jpg' },

    { image: './../assets/u2.jpg', thumbImage: './../assets/u2.jpg' },

    { image: './../assets/u3.jpg', thumbImage: './../assets/u3.jpg' },

    { image: './../assets/u4.jpg', thumbImage: './../assets/u4.jpg' },

    { image: './../assets/u5.jpg', thumbImage: './../assets/u5.jpg' },

    { image: './../assets/u6.jpg', thumbImage: './../assets/u6.jpg' },

    { image: './../assets/u7.jpg', thumbImage: './../assets/u7.jpg' },

    { image: './../assets/u8.jpg', thumbImage: './../assets/u8.jpg' },
  ];

  get_event_list() {
    this.service_child.get_upcoming_events().subscribe((result: any) => {
      this.upcoming_event_list = result;
      console.log(this.upcoming_event_list, '#result here');
    });
  }

  get_organization_list() {
    const upcoming_event_list = [
      {
        title: 'Create events',
        description:
          'Be a host at your own events. Share with friends, and manage your event on the go.',
        button_text: 'Become an organizer',
        img_source: './../../assets/festival-icon.png',
      },

      {
        title: 'Sell tickets',
        description:
          'Sell tickets to your own, with detailed sales statistics.',
        button_text: 'Check price',
        img_source: './../../assets/ticket-icon.png',
      },
    ];
    return upcoming_event_list;
  }
}
