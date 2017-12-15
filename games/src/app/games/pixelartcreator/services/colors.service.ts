import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ColorsService {

  colorsRef: AngularFireList<any>;
  colors: Observable<any[]>;
  selectedColor:string = "#541258";

  constructor(private db: AngularFireDatabase) {
    this.colorsRef = this.db.list('games/colors');
    this.colors = this.colorsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  getColors() {
    return this.colors;
  }

  getSelectedColor() {
    return this.selectedColor;
  }

  setSelectedColor(color:string) {
    this.selectedColor = color;
  }

}
