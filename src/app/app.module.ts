import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TopnavComponent } from './components/navbar/topnav/topnav.component';
import { BottomnavComponent } from './components/navbar/bottomnav/bottomnav.component';
import { HomeComponent } from './components/home/home.component';
import { QuicksearchComponent } from './components/home/quicksearch/quicksearch.component';
import { LandingtextComponent } from './components/home/landingtext/landingtext.component';
import { MidtextComponent } from './components/home/midtext/midtext.component';
import { AboutComponent } from './components/home/about/about.component';
import { EndtextComponent } from './components/home/endtext/endtext.component';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/search/results/results.component';
import { ShortComponent } from './components/search/short/short.component';
import { LongComponent } from './components/search/long/long.component';
import { AdvancedComponent } from './components/search/advanced/advanced.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopnavComponent,
    BottomnavComponent,
    HomeComponent,
    QuicksearchComponent,
    LandingtextComponent,
    MidtextComponent,
    AboutComponent,
    EndtextComponent,
    SearchComponent,
    ResultsComponent,
    ShortComponent,
    LongComponent,
    AdvancedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
