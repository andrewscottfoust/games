import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Project } from '../models/Project';

@Injectable()
export class ProjectsService {

  projectsRef: AngularFireList<any>;
  projects: Observable<any[]>;
  project: Observable<any>;
  boxWidth:number = 20;
  boxHeight:number = 20;

  constructor(private db: AngularFireDatabase) {
    this.projectsRef = this.db.list('games/pixelartcreator/projects');
    this.projects = this.projectsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  getProjects() {
    return this.projects;
  }

  newProject(project: Project) {
    this.projectsRef.push(project);
  }

  getProject(id: string) {
    this.project = this.db.object('games/pixelartcreator/projects/' + id).valueChanges();
    return this.project;
  }

  updateProject(id: string, project: Project) {
    return this.projectsRef.update(id, project);
  }

  deleteProject(id: string) {
    return this.projectsRef.remove(id);
  }

  getBoxWidth() {
    return this.boxWidth;
  }

  setBoxWidth(width:number) {
    this.boxWidth = width;
  }

  getBoxHeight() {
    return this.boxHeight;
  }

  setBoxHeight(height:number) {
    this.boxHeight = height;
  }

}
