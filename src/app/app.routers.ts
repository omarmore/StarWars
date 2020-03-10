import { RouterModule,  Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PeopleComponent } from './components/people/people.component';
import { PeopleDetComponent } from "./components/people-det/people-det.component";
import { BuscadorComponent } from "./components/buscador/buscador.component";




const APP_ROUTERS : Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'people', component: PeopleComponent },
    { path: 'people-def/:id', component: PeopleDetComponent },
    { path: 'buscar/:termino', component: BuscadorComponent },
    { path: '**', pathMatch : 'full', redirectTo: 'home' },

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTERS /*,{useHash:true}*/);