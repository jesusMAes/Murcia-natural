import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//material modules 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRippleModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {GalleriaModule} from 'primeng/galleria';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatPaginatorModule,
    MatRippleModule,
    MatCheckboxModule,
    GalleriaModule,
    ButtonModule
    
  ],
  exports: [
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatPaginatorModule,
    MatRippleModule,
    MatCheckboxModule,
    GalleriaModule,
    ButtonModule
  ]
})
export class MaterialModulesModule { }
