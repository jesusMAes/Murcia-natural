import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal/principal.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { MaterialModulesModule } from '../material-modules/material-modules.module';
import { PlacesListComponent } from './components/places-list/places-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    PrincipalComponent,
    HeaderComponent,
    SidenavComponent,
    PlacesListComponent
  ],
  imports: [
    CommonModule, 
    MaterialModulesModule,
    FlexLayoutModule
  ],
  exports: [
    PrincipalComponent
  ]
})
export class PagesModule { }
