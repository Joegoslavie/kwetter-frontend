import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// add components

const routes: Routes = [
  // { path: 'login', component: HeroesComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
