import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';

import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path : 'Home', component : HomeComponent},
  { path : 'Contact', component : ContactComponent},
  { path : 'Gallary', component : GallaryComponent},
  { path : 'Team', component : TeamComponent},
  { path : 'Services', component : ServicesComponent},
  { path : 'About', component : AboutComponent},
  { path: '', redirectTo: '/Home', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent }
]; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    GallaryComponent,
    ServicesComponent,
    AboutComponent,
    NotFoundComponent,
    HomeComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
