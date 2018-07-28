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
    const id = this.afs.createId();
    action.id = id;
    this.getCollection().doc(id).set(this.parse(action));
  }

  parse(action: Action) {
    return JSON.parse(JSON.stringify(action));
  }

  update(action: Action) {
    this.getDocument(action.id).update(this.parse(action));
  }
}
