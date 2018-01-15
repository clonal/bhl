import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './frontend/index.component';
import {PageNotFoundComponent} from './utils/page-not-found.component';
import {NgModule} from '@angular/core';
import {ProductListComponent} from './frontend/productList.component';
import {ProductPageComponent} from './frontend/productPage.component';
import {InfoPageComponent} from './frontend/infoPage.component';
import {NewsPageComponent} from './frontend/newsPage.component';
import {QuestionsComponent} from './frontend/questions.component';

const appRoutes: Routes = [
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'products/:id',
    component: ProductPageComponent
  },
  {
    path: 'column/:name',
    component: InfoPageComponent
  },
  {
    path: 'aboutUs',
    component: InfoPageComponent
  },
  {
    path: 'news/:id',
    component: NewsPageComponent
  },
  {
    path: 'support',
    component: QuestionsComponent
  },
  {
    path: 'community',
    component: IndexComponent
  },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

