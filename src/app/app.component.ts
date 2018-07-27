import { Component, OnInit } from '@angular/core';
import {ActionService} from './actions/action.service';
import { Observable } from 'rxjs';
import {Action} from './actions/models/action';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  actions: Observable<Action[]>;
  action: Observable<Action>;
  $displayShow = '';

  constructor(private actionService: ActionService) { }

  ngOnInit() {
    this.actions = this.actionService.getCollection().valueChanges();
  }

  actionAdd() {
    this.$displayShow = 'action-view-create';
    console.log('action-view-create');
  }

  actionShow($event) {
      this.$displayShow = 'action-view-details';
      this.action = $event;
      console.log(this.action);
  }
}
