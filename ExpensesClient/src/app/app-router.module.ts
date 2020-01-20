/*
Will use this file to add components to the NAV BAR
*/

import {RouterModule, Routes} from '@angular/router';

//components
import {EntriesComponent} from './entries/entries.component';
import { NgModule } from '@angular/core';
import {NewEntryComponent} from './new-entry/new-entry.component';
import {DeleteEntryComponent} from './delete-entry/delete-entry.component';
import {RegisterComponent} from './register/register.component';


//route
//when the user doesn't give anything and the path is empty 
//--or does
const routes:Routes = [
    {path:'', component:EntriesComponent},
    {path:'entries', component:EntriesComponent},
    {path:'new-entry', component:NewEntryComponent},
    {path:'delete-entry/:id', component:DeleteEntryComponent},
    {path:'register', component:RegisterComponent}
]
    //module defining both imports and exports
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouterModule{}