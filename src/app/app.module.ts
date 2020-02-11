import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import module for two ways binding
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { BookComponent } from './book/book.component';
import { UserFormComponent } from './user-form/user-form.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { WordsComponent } from './words/words.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { CardComponent } from './card/card.component';
import { LearnPipeComponent } from './learn-pipe/learn-pipe.component';
import { RoundPipe } from './round.pipe';
import { FormtemplateComponent } from './formtemplate/formtemplate.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NestedformgroupComponent } from './nestedformgroup/nestedformgroup.component';

@NgModule({
  declarations: [
    RoundPipe,
    AppComponent,
    WordComponent,
    BookComponent,
    UserFormComponent,
    StylebindingComponent,
    WordsComponent,
    PersonComponent,
    ListPersonComponent,
    ParentComponent,
    ChildComponent,
    CardComponent,
    LearnPipeComponent,
    FormtemplateComponent,
    ReactiveformComponent,
    NestedformgroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
