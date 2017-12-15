import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { ColorsService } from '../../services/colors.service';
import { AuthService } from '../../../../services/auth.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-pac-projects',
  templateUrl: './pac-projects.component.html',
  styleUrls: ['./pac-projects.component.css']
})
export class PacProjectsComponent implements OnInit {

  currentUserID:string;
  projects: any[];
  colorPickerColors:any[] = [];

  constructor(
    private projectsService: ProjectsService,
    private colorsService: ColorsService,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {
    
   }

  ngOnInit() {

    let user = this.authService.getCurrentUser();
    this.currentUserID = user.uid;
    this.projectsService.getProjects().subscribe(projects => {
      this.projects = projects;
    });
    this.colorsService.getColors().subscribe(colors => {
      this.colorPickerColors = colors;
    });

  }

  ngAfterContentInit() {
    
  }

  randomizeBackgroundColors() {
    return this.colorPickerColors[Math.floor(Math.random() * this.colorPickerColors.length)].hex;
  }

}
