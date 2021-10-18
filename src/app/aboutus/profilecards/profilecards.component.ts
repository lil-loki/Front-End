import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilecards',
  templateUrl: './profilecards.component.html',
  styleUrls: ['./profilecards.component.css']
})
export class ProfilecardsComponent implements OnInit {

  @Input() Name: string | undefined;
  @Input() Role: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
