import { Routes } from '@angular/router';
import { MyQuotesPage } from './pages/my-quotes/my-quotes-page';
import { HomePage } from './pages/home/home-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'my-quotes', component: MyQuotesPage },
];
