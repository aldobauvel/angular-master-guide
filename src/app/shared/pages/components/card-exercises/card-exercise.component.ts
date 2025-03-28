import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-exercise',
  templateUrl: './card-exercise.component.html',
  styleUrls: ['./card-exercise.component.css']
})
export class CardExerciseComponent implements OnInit {

  @Input() cardItems:any = [];
  @Output() emit = new EventEmitter<any>();

  constructor(private router: Router){}


  redirect() {

    this.emit

  }



  ngOnInit () {

    console.log(this.cardItems);

  }

}
