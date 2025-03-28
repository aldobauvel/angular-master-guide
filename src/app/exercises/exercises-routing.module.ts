import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepdendencyInjectionComponent } from './pages/components/dependency-injection/depdendency-injection.component';
import { ViewChildComponent } from './pages/components/view-child/view-child.component';
import { ParentChildComponent } from './pages/components/parent-child/parent-child.component';
import { ReactiveFormsComponent } from './pages/components/reactive-forms/reactive-forms.component';
import { PhoneCallComponent } from './pages/components/phone-call/phone-call.component';
import { LazyLoadingComponent } from './pages/components/lazy-loading/lazy-loading.component';
import { DataBindingComponent } from './pages/components/data-binding/data-binding.component';
import { PipesComponent } from './pages/components/pipes/pipes.component';
import { RxjsComponent } from './pages/components/rxjs/rxjs.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path: 'dependency-injection',
        component: DepdendencyInjectionComponent
      },
      {
        path: 'view-child',
        component: ViewChildComponent
      },
      {
        path: 'parent-child',
        component: ParentChildComponent
      },     
      {
        path: 'reactive-forms',
        component: ReactiveFormsComponent
      },     
      {
        path: 'phone-call',
        component: PhoneCallComponent
      },     
      {
        path: 'lazy-loading',
        component: LazyLoadingComponent
      },     
      {
        path: 'data-binding',
        component: DataBindingComponent
      },     
      {
        path: 'pipes',
        component: PipesComponent
      },     
      {
        path: 'rxjs',
        component: RxjsComponent
      },     
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ]

  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercisesRoutingModule { }
