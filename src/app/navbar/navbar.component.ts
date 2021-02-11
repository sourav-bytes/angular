import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isDisplay= true
  show(){
    this.isDisplay = false
  }
  onActive(){
    window.scroll(0, 0);
  }
  isCart= true
  cart(){
    this.isCart = false
  }
  cartClose(){
    this.isCart = true
  }
  constructor() { }

  ngOnInit(): void {
  }

}
