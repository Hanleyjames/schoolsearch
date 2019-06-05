import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TopnavComponent } from './components/navbar/topnav/topnav.component';
import { BottomnavComponent } from './components/navbar/bottomnav/bottomnav.component';
import { HomeComponent } from './components/home/home.component';
import { AdvancesearchComponent } from './components/advancesearch/advancesearch.component';
import { SearchresultsComponent } from './components/searchresults/searchresults.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopnavComponent,
    BottomnavComponent,
    HomeComponent,
    AdvancesearchComponent,
    SearchresultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
