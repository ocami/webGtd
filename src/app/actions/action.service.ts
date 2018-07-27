import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import {Action} from './models/action';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  private dbPath = 'actions';
  private actionsCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore) {
  }

  getCollection() {
    return this.afs.collection<Action>(this.dbPath);
  }

  getDocument(key: string) {
    return this.afs.doc<Action>(this.dbPath + '/' + key);
  }

  add(action: Action) {
    this.getCollection().add(this.parse(action));
  }

  parse(action: Action) {
    return JSON.parse(JSON.stringify(action));
  }

  update(key: string, action: Action) {
    this.getDocument(key).update(this.parse(action));
  }
}
