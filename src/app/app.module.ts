import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { GallaryComponent } from './gallary/gallary.component';
import { MyservicesComponent } from './myservices/myservices.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { ImageService } from './services/image.service';

const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Gallary', component: GallaryComponent },
  { path: 'Team', component: TeamComponent },
  { path: 'Services', component: MyservicesComponent },
  { path: 'About', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'uploadImage', component: UploadImageComponent },

  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    GallaryComponent,
    MyservicesComponent,
    AboutComponent,
    NotFoundComponent,
    HomeComponent,
    TeamComponent,
    LoginComponent,
    UploadImageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
   ImageService,
    // UploadImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
