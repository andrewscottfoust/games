import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../../services/colors.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

  colors:any[];

  constructor(private colorsService:ColorsService) { }

  ngOnInit() {
    this.colorsService.getColors().subscribe(colors => {
      console.log(colors[1]);
      this.colors = colors;
    });
  }

  setSelectedColor(event, color:string) {
    let clickedID:string = '#' + event.target.id;
    $('.color-picker-item').removeClass("selected");
    $(clickedID).addClass("selected");
    this.colorsService.setSelectedColor(color);
  }

}
