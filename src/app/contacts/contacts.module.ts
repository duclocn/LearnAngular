import { ContactsComponent } from './contacts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// const routes: Routes = [];
const routesConfig: Routes = [
  { path: 'contacts', component: ContactsComponent}
];

@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    RouterModule.forChild(routesConfig),
    CommonModule
  ],
  exports: [RouterModule]
})

export class ContactsModule { }
