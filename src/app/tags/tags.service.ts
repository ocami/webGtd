import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import {Tag} from './models/tag';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  private dbPath = 'location';

  constructor(private afs: AngularFirestore) {
  }

  getCollection() {
    return this.afs.collection<Tag>(this.dbPath);
  }

  getCollectionTriee() {
    return this.afs.collection<Tag>('location', ref => ref.orderBy('rank', 'asc'));
  }

 /* getDocument(key: string) {
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
  }*/
}
