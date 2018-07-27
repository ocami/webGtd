import { Component, EventEmitter, Output, Input } from '@angular/core';
import {Action} from '../models/action';


@Component({
  selector: 'app-action-details',
  templateUrl: './action-details.component.html',
  styleUrls: ['./action-details.component.css']
})
export class ActionDetailsComponent {

  @Input() action: Action;

  constructor() { }
}
