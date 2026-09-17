import { Routes } from '@angular/router';
import { MyQuotesPage } from './my-quotes/my-quotes-page';
import { HomePage } from './home/home-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'my-quotes', component: MyQuotesPage },
];
