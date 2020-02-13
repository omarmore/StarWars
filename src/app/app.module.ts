import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


//Rountes
import { APP_ROUTING } from './app.routers';


//Servicios
import { PeopleService } from "./service/people.service";


//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { FooterComponent } from './components/footer/footer.component';
import { DirectivaComponent } from './components/directiva/directiva.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PeopleComponent } from './components/people/people.component';
import { HttpClient } from 'selenium-webdriver/http';
import { PeopleDetComponent } from './components/people-det/people-det.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    HomeComponent,
    AboutComponent,
    PeopleComponent,
    PeopleDetComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
