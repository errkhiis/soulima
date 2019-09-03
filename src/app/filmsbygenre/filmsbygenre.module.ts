import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FilmsbygenrePage } from './filmsbygenre.page';

const routes: Routes = [
  {
    path: '',
    component: FilmsbygenrePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FilmsbygenrePage]
})
export class FilmsbygenrePageModule {}
