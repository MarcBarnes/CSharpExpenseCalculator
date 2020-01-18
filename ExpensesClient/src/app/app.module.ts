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



//material design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatCardModule, MatSelectModule, 
  MatSliderModule, MatTableModule} from '@angular/material';



import { NewEntryComponent } from './new-entry/new-entry.component';


//forms
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    FooterComponent,
    HeaderComponent,
    NewEntryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule,
    ReactiveFormsModule,
    //ng Material design
    BrowserAnimationsModule, MatButtonModule, MatTableModule, 
    MatSliderModule,MatInputModule, MatCardModule, MatSelectModule,
  ],
  providers: [EntryService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
