import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { ColorsService } from '../../services/colors.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Project } from '../../models/Project';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-pac-color-by-number',
  templateUrl: './pac-color-by-number.component.html',
  styleUrls: ['./pac-color-by-number.component.css']
})
export class PacColorByNumberComponent implements OnInit {

  user:any;
  id:string;
  rows:number = 0;
  cols:number = 0;
  project = {
    name: 'Project Title',
    description: 'Project description text',
    userName: '',
    userID: '',
    grid: [],
    boxWidth: 0,
    boxHeight: 0,
    boxMargin:0,
    borderRadius:0,
    cols:0,
    rows:0,
    lastEditDate: null
  };
  boxWidth:number = 10;
  boxHeight:number = 10;
  colorsLegendArray:any[] = [];
  colorByNumbersGridArray:any[] = [];

  constructor(
    private projectsService: ProjectsService,
    private colorsService: ColorsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];

    if(this.id != null && this.id != undefined) {
      this.projectsService.getProject(this.id).subscribe(project => {
        this.project = project;
        this.boxWidth = project.boxWidth;
        this.boxHeight = project.boxHeight;
        this.generateUniqueColorsArray();
        this.generateColorByNumbersArray();
      });
    }

  }

  isLastBoxInRow(index) {
    let isLastBoxInRow = false;
    
    for(let i = 0; i < this.project.rows; i++) {
      
      if(index == (i * this.project.cols)) {
        isLastBoxInRow = true;
      }
    }
    return isLastBoxInRow;
  }

  generateUniqueColorsArray() {
    let tempArray:string[] = [];
    for(let i = 0; i < this.project.grid.length; i++) {
      tempArray.push(this.project.grid[i]);
    }
    this.colorsLegendArray = $.unique(tempArray);
  }

  generateColorByNumbersArray() {
    for(let i = 0; i < this.project.grid.length; i++) {
      for(let c = 0; c < this.colorsLegendArray.length; c++) {
        if(this.project.grid[i] == this.colorsLegendArray[c]) {
          this.colorByNumbersGridArray.push({hex:this.project.grid[i], colorNum: c});
        }
      }
    }
  }

}
