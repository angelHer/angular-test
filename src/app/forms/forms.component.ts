import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  simpleItems = [];

  constructor() { }

  ngOnInit() {
    this.simpleItems = [true, 'Two', 3];
  }

}
