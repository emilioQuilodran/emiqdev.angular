import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { ProfileComponent } from './components/profile/profile.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ButtonComponent } from './components/utils/button/button.component';
import { NavBarComponent } from './components/utils/nav-bar/nav-bar.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ServicesComponent } from './components/services/services.component';
import { MatDialogModule } from '@angular/material/dialog';
import { GoogleApiModule, NgGapiClientConfig } from 'ng-gapi';
import { environment } from './environments/environment';
import { HomeComponentComponent } from './pages/home-component/home-component.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutMeComponentComponent } from './pages/about-me-component/about-me-component.component';
import { EducationComponent } from './components/education/education.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule  } from 'ngx-google-analytics';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    ButtonComponent,
    NavBarComponent,
    ServicesComponent,
    HomeComponentComponent,
    AboutMeComponentComponent,
    EducationComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgxGoogleAnalyticsModule.forRoot('G-2M1EMRRC5E'),
    NgxGoogleAnalyticsRouterModule
  ],
  exports: [GoogleApiModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
