import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchresultsComponent } from './components/searchresults/searchresults.component';
import { AdvancesearchComponent } from './components/advancesearch/advancesearch.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'results', component: SearchresultsComponent },
  { path: 'search', component: AdvancesearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
