import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { TestsService } from '../../services/tests.service';
import { MonacoLoaderService } from 'src/app/services/monaco-loader.service';

enum CarType {
  volvo,
  vw,
  seat,
  audi
}

@Component({
  selector: 'app-depdendency-injection',
  templateUrl: './depdendency-injection.component.html',
  styleUrls: ['./depdendency-injection.component.css'],  
})
export class DepdendencyInjectionComponent implements OnInit, AfterViewInit {

  constructor(private testService: TestsService, private monacoLoader: MonacoLoaderService) {}

  code: string = `constructor(private testService: TestsService, private monacoLoader: MonacoLoaderService) {}`;
  editorOptions = { theme: 'vs-dark', language: 'typescript' };
  monacoLoaded = false;

  serviceCode: string = `
  @Injectable({
    providedIn: 'root'//Especifica que el servicio debe proporcionarse en el inyector raíz (AppModule) o sea disponible en toda la aplicación
  })`;

  serviceCodeSpecify: string = ` import { Injectable } from '@angular/core';
 import { UserModule } from './user.module'; // modulo específico
  @Injectable({
    providedIn:  UserModule, // modulo específico
  })
  export class UserService {
  }`;
  
  //Set service in a module
  serviceInModule : string = ` import { NgModule } from '@angular/core';';
 import { UserService } from './user.service';
@NgModule({
  providers: [UserService],  //Servicio a inyectar a nivel modulo
})
  export class UserModule  {
  }`;

  //Set DI in component
  serviceInComponent : string = `@Component({
/* . . . */
  providers: [UserService]
})
.
.
.
constructor(private testService: TestsService, private monacoLoader: MonacoLoaderService) {}`;

  users: any = [];  

  ngAfterViewInit() {
    this.monacoLoader.loadMonaco().then(() => {
      this.monacoLoaded = true;
    });
  }

  ngOnInit(): void {
    this.testService.getUsers().subscribe({
      next: res => {        
        this.users.push(res)
      }
    });
    
  }
  
}
