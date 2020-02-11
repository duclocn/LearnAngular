import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

// const routes: Routes = [];
const routesConfig: Routes = [
  { path: 'contacts', component: ContactsComponent},
  { path: 'detail', component: ContactDetailComponent},
  { path: '', redirectTo: '/contacts', pathMatch: 'full'},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    ContactsComponent,
    ContactDetailComponent,
    PagenotfoundComponent
  ],
  imports: [
    RouterModule.forRoot(routesConfig)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
