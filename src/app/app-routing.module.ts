import { CommonModule } from '@angular/common';
import { ContactsModule } from './contacts/contacts.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

// const routes: Routes = [];
const routesConfig: Routes = [
  { path: 'detail', component: ContactDetailComponent},
  { path: '', redirectTo: '/contacts', pathMatch: 'full'},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    ContactDetailComponent,
    PagenotfoundComponent
  ],
  imports: [
    ContactsModule,
    RouterModule.forRoot(routesConfig),
    CommonModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
