import {Component, EventEmitter, Output, Input, OnInit, OnChanges, SimpleChanges, SimpleChange} from '@angular/core';
import { FormGroup, FormBuilder,  FormArray  } from '@angular/forms';
import {ActionService} from '../action.service';
import {Action} from '../models/action';
import {Observable} from 'rxjs';
import {TagsService} from '../../tags/tags.service';


@Component({
  selector: 'app-action-details',
  templateUrl: './action-details.component.html',
  styleUrls: ['./action-details.component.css']
})
export class ActionDetailsComponent implements OnInit, OnChanges {

  @Input() action: Action;

  actionForm: FormGroup;
  locations: Observable<any[]>;

  constructor(
    private formBuilder: FormBuilder,
    private actionService: ActionService,
    private tagService: TagsService
  ) {}

  ngOnInit() {
    this.locations = this.tagService.locations;
    this.initForm();
  }

  ngOnChanges() {
    this.initForm();
  }

  initForm() {
    this.actionForm = this.formBuilder.group({
      name: this.action.name,
      content: this.action.content,
      valuable: this.action.valuable,
      location: this.action.location
    });
  }

  onSubmitForm() {
    console.log(this.locations);
    const formValue = this.actionForm.value;
    this.action.name = formValue['name'];
    this.action.content = formValue['content'];
    this.action.valuable = formValue['valuable'];
    this.action.location = formValue['location'];
    console.log(formValue);
    this.actionService.update(this.action);
  }
}
