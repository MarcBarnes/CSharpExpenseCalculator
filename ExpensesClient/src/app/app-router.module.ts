/*
Will use this file to add components to the NAV BAR
*/

import {RouterModule, Routes} from '@angular/router';

//components
import {EntriesComponent} from './entries/entries.component';
import { NgModule } from '@angular/core';
import {NewEntryComponent} from './new-entry/new-entry.component';


//route
//when the user doesn't give anything and the path is empty 
//--or does
const routes:Routes = [
    {path:'', component:EntriesComponent},
    {path:'entries', component:EntriesComponent},
    {path:'new-entry', component:NewEntryComponent}
]
    //module defining both imports and exports
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouterModule{}