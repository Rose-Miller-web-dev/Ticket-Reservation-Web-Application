import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventServiceService } from '../services/event-service.service';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.scss'],
})
export class EventInfoComponent implements OnInit {
  currentStatus = 'not_available';
  is_first_class_disabled: boolean = true;
  is_second_class_disabled: boolean = false;
  is_submit_ticket_disabled: any = true;

  processing_fee_price: number = 3.39;
  first_class_ticket_price: number = 15.0;
  second_class_ticket_price: number = 20.0;

  first_class_ticket_number: number = 0;
  second_class_ticket_number: number = 0;

  first_class_name: any;
  second_class_name: any;

  first_final_cost: number = 0;
  second_final_cost: number = 0;

  first_bill_displays: boolean = false;
  second_bill_displays: boolean = false;
  no_selected_ticket: boolean = false;

  event_id: any;
  event_displaying: any;

  fee_added: boolean = false;
  total_cost: number = 0;
  upcoming_event_list: any;
  event_starting_date: any;
  event_finishing_date: any;
  event_title: string = '';
  event_owner: string = '';
  event_image_src: string = '';
  event_description: string = '';
  event_location: string = '';
  event_refund: string = '';
  event_category: string = '';
  event_address: string = '';

  constructor(
    private api_service_child: EventServiceService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let get_parameter_id = this.router.snapshot.paramMap.get('id');
    this.event_id = get_parameter_id;
    console.log(this.event_id, 'id#');
    this.first_class_name = 'Eary Bird';
    this.second_class_name = 'Regular';

    this.api_service_child.get_upcoming_events().subscribe((result: any) => {
      this.upcoming_event_list = result;
      this.event_displaying = this.upcoming_event_list[this.event_id];
      this.event_title = this.upcoming_event_list[this.event_id].title;
      this.event_starting_date =
        this.upcoming_event_list[this.event_id].starting_date;
      this.event_finishing_date =
        this.upcoming_event_list[this.event_id].finishing_date;
      this.event_image_src = this.upcoming_event_list[this.event_id].thumbImage;
      this.event_description =
        this.upcoming_event_list[this.event_id].description;
      this.event_location = this.upcoming_event_list[this.event_id].location;
      this.event_refund = this.upcoming_event_list[this.event_id].refund_policy;
      this.event_owner = this.upcoming_event_list[this.event_id].owner;
      this.event_category = this.upcoming_event_list[this.event_id].category;
      this.event_address = this.upcoming_event_list[this.event_id].address;
    });
  }

  inputForm = new FormGroup({
    second_ticket_number: new FormControl(null),
  });

  submitForm() {
    console.log(this.inputForm.value, 'input#');
    this.inputForm.value;
  }

  get_first_input(event: any) {
    this.first_class_ticket_number = event.target.value;
    this.first_final_cost =
      Number(this.first_class_ticket_number) *
      Number(this.first_class_ticket_price);
    if (
      this.first_class_ticket_number == 0 &&
      this.second_class_ticket_number == 0
    ) {
      this.total_cost = 0;
      this.is_submit_ticket_disabled = true;
    } else {
      this.is_submit_ticket_disabled = false;
    }

    if (this.first_class_ticket_number == 0) {
      this.first_bill_displays = false;
    } else {
      this.first_bill_displays = true;
    }

    this.count_total_cost();
    console.log(this.is_submit_ticket_disabled, '&');
  }

  get_second_input(event: any) {
    this.second_class_ticket_number = event.target.value;
    this.second_final_cost =
      Number(this.second_class_ticket_number) *
      Number(this.second_class_ticket_price);
    if (
      this.first_class_ticket_number == 0 &&
      this.second_class_ticket_number == 0
    ) {
      this.no_selected_ticket = false;
      this.total_cost = 0;
      this.is_submit_ticket_disabled = true;
    } else {
      this.is_submit_ticket_disabled = false;
    }

    if (this.second_class_ticket_number == 0) {
      this.second_bill_displays = false;
    } else {
      this.second_bill_displays = true;
    }

    this.count_total_cost();
  }

  count_total_cost() {
    if (!this.is_submit_ticket_disabled) {
      this.total_cost =
        this.first_final_cost +
        this.second_final_cost +
        this.processing_fee_price;
    }
  }
}
