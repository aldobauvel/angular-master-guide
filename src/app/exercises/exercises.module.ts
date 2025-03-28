import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercisesRoutingModule } from './exercises-routing.module';
import { DepdendencyInjectionComponent } from './pages/components/dependency-injection/depdendency-injection.component';
import { RouterModule } from '@angular/router';
import { ViewChildComponent } from './pages/components/view-child/view-child.component';
import { ParentChildComponent } from './pages/components/parent-child/parent-child.component';
import { ReactiveFormsComponent } from './pages/components/reactive-forms/reactive-forms.component';
import { PhoneCallComponent } from './pages/components/phone-call/phone-call.component';
import { LazyLoadingComponent } from './pages/components/lazy-loading/lazy-loading.component';
import { DataBindingComponent } from './pages/components/data-binding/data-binding.component';
import { PipesComponent } from './pages/components/pipes/pipes.component';
import { RxjsComponent } from './pages/components/rxjs/rxjs.component';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';


@NgModule({
  declarations: [
    DepdendencyInjectionComponent,
    ViewChildComponent,
    ParentChildComponent,
    ReactiveFormsComponent,
    PhoneCallComponent,
    LazyLoadingComponent,
    DataBindingComponent,
    PipesComponent,
    RxjsComponent
  ],
  imports: [
    CommonModule,
    ExercisesRoutingModule,
    RouterModule,    
    FormsModule,
    MonacoEditorModule.forRoot()   
    

  ]
})
export class ExercisesModule { }
