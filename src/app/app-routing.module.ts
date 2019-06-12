import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResultsComponent } from './components/search/results/results.component';
import { AdvancedComponent } from './components/search/advanced/advanced.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'advancedsearch', component: AdvancedComponent },
  { path: 'results', component: ResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
