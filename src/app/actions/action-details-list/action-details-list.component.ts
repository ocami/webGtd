import { Component, EventEmitter, Output, Input } from '@angular/core';
import {Action} from '../models/action';

@Component({
  selector: 'app-action-details-list',
  templateUrl: './action-details-list.component.html',
  styleUrls: ['./action-details-list.component.css']
})
export class ActionDetailsListComponent {

  @Input() action: Action;
  @Output() actionShowOut = new EventEmitter();

  constructor() { }

  actionShow() {
    this.actionShowOut.emit(this.action);
  }

}
