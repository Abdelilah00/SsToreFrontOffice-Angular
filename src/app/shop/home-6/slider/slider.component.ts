import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slider-six',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderSixComponent implements OnInit {

  // Slick slider config
  public sliderConfig: any = {
    autoplay: true,
    autoplaySpeed: 3500
  };

  constructor() {
  }

  ngOnInit() {
  }

}
