import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import{imdb} from 'imdb-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './home/data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  providers: [DataService],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
