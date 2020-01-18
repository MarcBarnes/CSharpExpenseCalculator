import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntriesComponent } from './entries/entries.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

//services that we are importing
import {EntryService} from './entry.service';
import { AppRouterModule } from './app-router.module';
import { HttpClientModule } from '@angular/common/http';



//material designs
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule,
    //ng Material design
    BrowserAnimationsModule, MatButtonModule, MatTableModule, MatSliderModule
  ],
  providers: [EntryService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
