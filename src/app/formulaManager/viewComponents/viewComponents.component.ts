import {Component} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {map} from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import {DeleteComponent} from '../../delete/delete.component';
import {NewComponentComponent} from '../newComponent/newComponent.component';

@Component({
  selector: '',
  templateUrl: './viewComponents.component.html'
})
export class ViewComponents {
  components;

  constructor(private db: AngularFirestore, private dialog: MatDialog) {
    this.components = this.db
      .collection('components')
      .snapshotChanges()
      .pipe(
        map(rows =>
          rows.map((row: any) => {
            row = Object.assign({id: row.payload.doc.id, ref: row.payload.doc.ref}, row.payload.doc.data());
            row.created = row.created.toDate();
            return row;
          })
        )
      );
  }

  createComponent(component?) {
    this.dialog.open(NewComponentComponent, {data: component});
  }

  delete(component) {
    this.dialog.open(DeleteComponent, {data: component});
  }
}