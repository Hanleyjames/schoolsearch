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
import { QuicksearchComponent } from './components/home/quicksearch/quicksearch.component';
import { LandingtextComponent } from './components/home/landingtext/landingtext.component';
import { MidtextComponent } from './components/home/midtext/midtext.component';
import { AboutComponent } from './components/home/about/about.component';
import { EndtextComponent } from './components/home/endtext/endtext.component';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchcriteriaComponent } from './components/advancesearch/searchcriteria/searchcriteria.component';
//import { library } from '@fortawesome/fontawesome-svg-core';
//import { fas } from '@fortawesome/free-solid-svg-icons';
//import { far } from '@fortawesome/free-regular-svg-icons';
//import { fab } from '@fortawesome/free-brands-svg-icons';
//library.add(fas, far, fab);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopnavComponent,
    BottomnavComponent,
    HomeComponent,
    AdvancesearchComponent,
    SearchresultsComponent,
    QuicksearchComponent,
    LandingtextComponent,
    MidtextComponent,
    AboutComponent,
    EndtextComponent,
    SearchcriteriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    //FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
