import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user:boolean=true;

  constructor() { }

  ngOnInit(): void {
    sessionStorage.clear();
  }

  changeToAdmin()
  {
    this.user=false;
  }

  changeToUser(){
    this.user=true;
  }

}
