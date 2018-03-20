import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { AllComponent } from './all/all.component';
import { EmaildetailComponent } from './emaildetail/emaildetail.component';

export const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'table',
      component: TableComponent
    },
    {
      path: 'emaildetail',
      component: EmaildetailComponent
    },
    {
  path: 'all',
      component: AllComponent
    }
  ];