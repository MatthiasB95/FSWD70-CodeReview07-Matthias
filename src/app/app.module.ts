import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { BottomComponent } from './bottom/bottom.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ImportantNumbersPageComponent } from './important-numbers-page/important-numbers-page.component';
import { PhoneBookPageComponent } from './phone-book-page/phone-book-page.component';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';

import { ContactService } from './shared/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BottomComponent,
    HomePageComponent,
    ImportantNumbersPageComponent,
    PhoneBookPageComponent,
    ContactComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
