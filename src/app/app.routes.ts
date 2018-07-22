import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  AboutComponent,
  DatabasesComponent,
  EducationComponent,
  ExperienceComponent,
  LanguagesComponent
} from './components/index.pages';

const routes: Routes = [
  {
    path: '',
     component: AboutComponent
  },
  {
    path: 'about',
     component: AboutComponent
  },
  {
    path: 'databases',
    component: DatabasesComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'languages',
    component: LanguagesComponent
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})

export class AppRoutingModule { }
