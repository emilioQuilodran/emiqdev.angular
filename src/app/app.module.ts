import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { ProfileComponent } from './components/profile/profile.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
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


const gapiClientConfig: NgGapiClientConfig = {
  client_id: environment.GOOGLE_CLIENT_ID,
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
};

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    ButtonComponent,
    NavBarComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
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
    GoogleApiModule.forRoot({
      provide: gapiClientConfig,
      useValue: gapiClientConfig
    })
  ],
  exports: [GoogleApiModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
