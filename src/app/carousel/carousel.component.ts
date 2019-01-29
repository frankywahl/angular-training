import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  index = 0;

  constructor() { }

  ngOnInit() {
  }

  previous(){
    this.index = (this.index === 0 ? 2 : this.index - 1);
  }

  next() {
    this.index = (this.index === 2 ? 0 : this.index + 1);
  }
}
