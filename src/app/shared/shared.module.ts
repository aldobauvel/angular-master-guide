import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TopMenuComponent } from './pages/components/top-menu/top-menu.component';
import { CardExerciseComponent } from './pages/components/card-exercises/card-exercise.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TopMenuComponent,
    CardExerciseComponent
  ],
  imports: [
    CommonModule,
    RouterModule
    
  ],
  exports: [
    TopMenuComponent,
    CardExerciseComponent
  ]
})
export class SharedModule { }
