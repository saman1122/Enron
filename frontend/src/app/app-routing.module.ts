import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AllComponent } from './all/all.component';
import { EmaildetailComponent } from './emaildetail/emaildetail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'emaildetail/:id',
    component: EmaildetailComponent
  },
  {
    path: 'all',
    component: AllComponent
  }
];