import { EventServiceService } from './../services/event-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-events',
  templateUrl: './find-events.component.html',
  styleUrls: ['./find-events.component.scss'],
})
export class FindEventsComponent implements OnInit {
  ngOnInit(): void {
    this.get_event_list();
  }

  events_list: any;
  constructor(private event_service_child: EventServiceService) {}
  get_event_list() {
    this.event_service_child.get_upcoming_events().subscribe((result: any) => {
      this.events_list = result;
      console.log(this.events_list, '#result');
    });
  }
}
