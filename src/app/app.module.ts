import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TopicsListComponent } from './topics-list/topics-list.component';
import { TopicDetailsComponent } from './topic-details/topic-details.component';
import { ChartsModule } from 'ng2-charts';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { VotesService } from './votes.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,
    RouterModule.forRoot([
      { path: '', component: TopicsListComponent },
      { path: 'login', component: LoginComponent },
      { path: 'topics', component: TopicsListComponent },
      { path: 'topics/:topicID', component: TopicDetailsComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    TopicsListComponent,
    TopicDetailsComponent,
    LoginComponent
  ],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    LoginService,
    VotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
