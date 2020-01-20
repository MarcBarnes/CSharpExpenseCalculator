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
import {MatButtonModule, MatInputModule, MatCardModule, MatSelectModule, MatDialogModule, MatIconModule,
  MatSliderModule, MatTableModule, MatToolbarModule, MatListModule, MatSortModule, MatPaginatorModule} from '@angular/material';


//components
import { NewEntryComponent } from './new-entry/new-entry.component';
import { UpdateEntryComponent } from './update-entry/update-entry.component';
import { DeleteEntryComponent } from './delete-entry/delete-entry.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

//forms
import {ReactiveFormsModule, FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    FooterComponent,
    HeaderComponent,
    NewEntryComponent,
    UpdateEntryComponent,
    DeleteEntryComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule,
    //forms
    ReactiveFormsModule, FormsModule,
    //ng Material design
    BrowserAnimationsModule, MatButtonModule, MatTableModule, MatDialogModule, MatListModule, MatIconModule,
    MatSliderModule,MatInputModule, MatCardModule, MatSelectModule, MatToolbarModule, MatSortModule,MatPaginatorModule,
  ],
  entryComponents:[UpdateEntryComponent],
  providers: [EntryService, AuthService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
