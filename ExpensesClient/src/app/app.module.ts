import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntriesComponent } from './entries/entries.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

//services that we are importing
import {EntryService} from './entry.service';
import {AuthService} from './auth.service';
import { AppRouterModule } from './app-router.module';
import { HttpClientModule } from '@angular/common/http';



//material design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatCardModule, MatSelectModule, MatDialogModule,
  MatSliderModule, MatTableModule, MatToolbarModule, MatListModule} from '@angular/material';



import { NewEntryComponent } from './new-entry/new-entry.component';


//forms
import {ReactiveFormsModule} from '@angular/forms';
import { UpdateEntryComponent } from './update-entry/update-entry.component';
import { DeleteEntryComponent } from './delete-entry/delete-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    FooterComponent,
    HeaderComponent,
    NewEntryComponent,
    UpdateEntryComponent,
    DeleteEntryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule,
    ReactiveFormsModule,
    //ng Material design
    BrowserAnimationsModule, MatButtonModule, MatTableModule, MatDialogModule, MatListModule,
    MatSliderModule,MatInputModule, MatCardModule, MatSelectModule, MatToolbarModule,
  ],
  entryComponents:[UpdateEntryComponent],
  providers: [EntryService, AuthService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
