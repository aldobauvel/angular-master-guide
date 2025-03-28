import { Component } from '@angular/core';

const DASHBOARD_CARDS = [
  {
    title: 'Dependency Injection',
    content: '',
    keywords: ['constructor', 'inject', 'http', 'peticion', 'dependency injection', 'service'],
    url: '/exercises/dependency-injection',
    icon: 'bi bi-eyedropper'
  },
  {
    title: '@ViewChild',
    content: '',
    keywords: ['viewchild','htmlRef','nativeElement','@viewchild','child'],
    url: '/exercises/view-child',
    icon: 'bi bi-diagram-3-fill'
  },
  {
    title: '@Input @Output',
    content: '',
    keywords: ['@input', '@output', 'input', 'output', 'emmit', 'emitter', 'eventemitter' ],
    url: '/exercises/parent-child',
    icon: 'bi bi-people-fill'
  },
  {
    title: 'Reactive Forms',
    content: '',
    keywords: ['formgroup','reactive', 'form', 'formbuilder', 'reactiveform', 'pristine', 'dirty', 'touched'],
    url: '/exercises/reactive-forms',
    icon: 'bi bi-card-list'
  },
  {
    title: 'Phone call',
    content: '',
    keywords: ['interval','takeuntil', 'subject', 'pipe', 'style', 'ngstyle', 'class', 'ngclass'],
    url: '/exercises/phone-call',
    icon: 'bi bi-telephone-fill'
  },
  {
    title: 'Lazy loading',
    content: '',
    keywords: ['loadchildren', 'forroot', 'forchild','routermodule', 'router'],
    url: '/exercises/lazy-loading',
    icon: 'bi bi-clock-history'
  },
  {
    title: 'Data Binding',
    content: '',
    keywords: ['ngmodel', 'reactiveforms'],
    url: '/exercises/data-binding',
    icon: 'bi bi-arrow-left-right'
  },
  {
    title: 'Input subscribe',
    content: '',
    keywords: ['ngModelChange', 'ngmodel', 'valueChanges'],
    url: '/exercises/data-binding',
    icon: 'bi bi-input-cursor-text'
  },
  {
    title: 'Pipes',
    content: '',
    keywords: [''],
    url: '/exercises/pipes',
    icon: 'bi bi-funnel-fill'
  },
  {
    title: 'JS exercises',
    content: '',
    keywords: [],
    url: '/exercises/js-exercises',
    icon: 'bi bi-filetype-js'
  },
  {
    title: 'Rxjs',
    content: '',
    keywords: [],
    url: '/exercises/rxjs',
    icon: 'bi bi-hurricane'
  },
  {
    title: 'CSS',
    content: '',
    keywords: [],
    url: '/exercises/src',
    icon: 'bi bi-filetype-css'
  },
  {
    title: 'HTML',
    content: '',
    keywords: [],
    url: '/exercises/src',
    icon: 'bi bi-filetype-html'
  },
  {
    title: 'Resources',
    content: '',
    keywords: [],
    url: '/exercises/src',
    icon: 'bi bi-archive-fill'
  },
  
]

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  cards = DASHBOARD_CARDS;

}
