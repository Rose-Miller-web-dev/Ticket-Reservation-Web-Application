import { ContactComponent } from './contact/contact.component';
import { EventInfoComponent } from './event-info/event-info.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FindEventsComponent } from './find-events/find-events.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'find_events', component: FindEventsComponent },
  { path: 'event_info/:id', component: EventInfoComponent },
  { path: 'contact_us', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
