import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './pages/home-component/home-component.component';
import { AboutMeComponentComponent } from './pages/about-me-component/about-me-component.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'about', component: AboutMeComponentComponent },
  { path: 'projects', component: ProjectsComponent},
  { path: 'contact', component: ContactPageComponent}
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
