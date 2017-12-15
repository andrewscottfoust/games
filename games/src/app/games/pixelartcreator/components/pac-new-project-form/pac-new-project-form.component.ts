import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pac-new-project-form',
  templateUrl: './pac-new-project-form.component.html',
  styleUrls: ['./pac-new-project-form.component.css']
})
export class PacNewProjectFormComponent implements OnInit {

  cols:number = 10;
  rows:number = 10;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  onSubmit({value, valid}:{value:any, valid:boolean}) {
    if(!valid) {
      console.log("Please fill in all fields");
    } else {
      this.router.navigate(['games/pixelartcreator/project/'+value.cols+'/'+value.rows]);
    }
  }

}
