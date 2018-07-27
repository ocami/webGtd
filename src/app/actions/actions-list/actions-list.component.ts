import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {ActionService} from '../action.service';
import {Observable} from 'rxjs';
import {Action} from '../models/action';

@Component({
  selector: 'app-actions-list',
  templateUrl: './actions-list.component.html',
  styleUrls: ['./actions-list.component.css']
})
export class ActionsListComponent implements OnInit {

  @Output() actionAddOut = new EventEmitter();
  @Output() actionShowOut = new EventEmitter();
  @Input() actions: Observable<Action[]>;

  constructor() { }

  ngOnInit() {
  }

  actionAdd() {
    this.actionAddOut.emit();
  }

  actionShow($event) {
    this.actionShowOut.emit($event);
  }

}
