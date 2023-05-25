import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FindEventsComponent } from './find-events/find-events.component';
import { EventInfoComponent } from './event-info/event-info.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NextDirective } from './next.directive';
import { PrevDirective } from './prev.directive';
import { PurchaseComponent } from './purchase/purchase.component';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { clickOutsideDirective } from './navbar/clickOutside.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    FindEventsComponent,
    EventInfoComponent,
    ContactComponent,
    FooterComponent,
    NextDirective,
    PrevDirective,
    PurchaseComponent,
    clickOutsideDirective,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //NgxUsefulSwiperModule
    /*    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })  */
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
