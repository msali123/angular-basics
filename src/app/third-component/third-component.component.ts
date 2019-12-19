import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-component',
  templateUrl: './third-component.component.html',
  styleUrls: ['./third-component.component.css']
})
export class ThirdComponentComponent implements OnInit {
//Array 
  public arrays1 = new Array();
//div set to false
public showDiv = false;

  constructor() { }

  ngOnInit() {

    this.arrays1.push("Sameer");
    this.arrays1.push("Ali");
    this.arrays1.push("Kamran");
    this.arrays1.push("Sameer");
    this.arrays1.push("Ali");


  }

  ShowDIv(){

    this.showDiv = !this.showDiv
  }

}
