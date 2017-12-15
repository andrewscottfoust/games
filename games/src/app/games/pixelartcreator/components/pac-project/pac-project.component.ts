import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { ProjectsService } from '../../services/projects.service';
import { ColorsService } from '../../services/colors.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Project } from '../../models/Project';

@Component({
  selector: 'app-pac-new-project',
  templateUrl: './pac-project.component.html',
  styleUrls: ['./pac-project.component.css']
})
export class PacProjectComponent implements OnInit {

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
  isNewProject:boolean = false;
  editorIsCreator:boolean = true;
  colorPickerColors:any[];

  constructor(
    private authService:AuthService,
    private projectsService: ProjectsService,
    private colorsService: ColorsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
   
   }

  ngOnInit() {

    this.colorsService.getColors().subscribe(colors => {
      this.colorPickerColors = colors;
    });

    this.id = this.route.snapshot.params['id'];
    let rows:number = this.route.snapshot.params['rows'];
    let cols:number = this.route.snapshot.params['cols'];
    this.user = this.authService.getCurrentUser();

    if(this.id != null && this.id != undefined) {
      this.projectsService.getProject(this.id).subscribe(project => {
        this.project = project;
        this.boxWidth = project.boxWidth;
        this.boxHeight = project.boxHeight;
        this.project.lastEditDate = new Date();

        if(project.userID != this.user.uid) {
          this.isNewProject = true;
          this.project.name += " Copy";
          this.project.userName = "";
        }
      });
    } 

    if(rows != null && rows != undefined && cols != null && cols != undefined) {
      this.isNewProject = true;
      this.project.rows = rows;
      this.project.cols = cols;
      this.generateBlankGrid();
      this.project.lastEditDate = new Date();
    }
  
  }

  generateBlankGrid() {
    for(let i = 0; i < this.project.rows * this.project.cols; i++) {
      this.project.grid.push("#ffffff");
    }
  }

  setGridItemColor(index) {
    this.project.grid[index] = this.colorsService.getSelectedColor();
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

  onSubmit({value, valid}:{value:any, valid:boolean}) {

    this.project.userID = this.user.uid;
    this.project.boxWidth = this.boxWidth;
    this.project.boxHeight = this.boxHeight;
    console.log(this.project.lastEditDate);

    if(!valid) {
      console.log("Please fill in all fields");
    } else {
      if(this.isNewProject == true) {
        this.projectsService.newProject(this.project);
        console.log("New project added");
      } else {
        this.projectsService.updateProject(this.id, this.project);
        console.log("Project updated");
      }
    }
  }

  duplicateProject() {
    this.project.name += " Copy";
    this.projectsService.newProject(this.project);
    console.log("New project added");
  }

  deleteProject() {
    if(confirm("Are you sure you want to delete this project?")) {
      this.projectsService.deleteProject(this.id);
      console.log("Project deleted");
      this.router.navigate(['/games/pixelartcreator/']);
    }
  }

  clearGrid() {
    for(let i = 0; i < this.project.rows * this.project.cols; i++) {
      this.project.grid[i] = "#ffffff";
    }
  }

  randomizeGrid() {
    for(let i =0; i < this.project.grid.length; i++) {
      this.project.grid[i] = this.colorPickerColors[Math.floor(Math.random() * this.colorPickerColors.length)].hex;
    }
  }

  setBlankToCurrent() {
    for(let i =0; i < this.project.grid.length; i++) {
      if(this.project.grid[i] == "#ffffff") {
        this.project.grid[i] = this.colorsService.getSelectedColor();
      }
      
    }
  }

  setBlankToRandom() {
    for(let i =0; i < this.project.grid.length; i++) {
      if(this.project.grid[i] == "#ffffff") {
        this.project.grid[i] = this.colorPickerColors[Math.floor(Math.random() * this.colorPickerColors.length)].hex;
      }
      
    }
  }

  openColorByNumbers() {
    if(confirm("Have you saved your project?")) {
      this.router.navigate(['/games/pixelartcreator/project/colorbynumber/'+this.id]);
    }
  }

}
