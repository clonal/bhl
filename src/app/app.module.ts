import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {IndexComponent} from './frontend/index.component';
import {PageNotFoundComponent} from './utils/page-not-found.component';
import {HeadNavComponent} from './nav/headNav.component';
import {ProductListComponent} from './frontend/productList.component';
import {ProductPageComponent} from './frontend/productPage.component';
import {InfoPageComponent} from './frontend/infoPage.component';
import {NewsPageComponent} from './frontend/newsPage.component';
import {QuestionsComponent} from './frontend/questions.component';
import {HttpClientModule} from '@angular/common/http';
import {DateService} from './utils/date.service';
import {FeedbackComponent} from './frontend/feedback.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PageNotFoundComponent,
    HeadNavComponent,
    ProductListComponent,
    ProductPageComponent,
    InfoPageComponent,
    NewsPageComponent,
    QuestionsComponent,
    FeedbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    DateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
