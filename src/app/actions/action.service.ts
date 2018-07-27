import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {Action} from './models/action';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  private dbPath = 'actions';

  constructor(private afs: AngularFirestore) {
  }

  getCollection() {
    return this.afs.collection<Action>(this.dbPath);
  }

  getDocument(key: string) {
    return this.afs.doc<Action>(this.dbPath + '/' + key);
  }

  add(action: Action): void {
    this.getCollection().add(action);
  }

  update(key: string, action: Action) {
    this.getDocument(key).update(action);
  }
}
