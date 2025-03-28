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
  styleUrls: ['./depdendency-injection.component.css']
})
export class DepdendencyInjectionComponent implements OnInit, AfterViewInit {

  code: string = `function hello() {\n  console.log("Hola, Monaco Editor!");\n}`;
  editorOptions = { theme: 'vs-dark', language: 'javascript' };
  monacoLoaded = false;

  

  users: any = [];

  constructor(private testService: TestsService, private monacoLoader: MonacoLoaderService) {
    console.log(CarType.volvo);
  }

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
