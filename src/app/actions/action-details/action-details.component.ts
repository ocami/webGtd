import {Component, EventEmitter, Output, Input, OnInit, OnChanges, SimpleChanges, SimpleChange} from '@angular/core';
import { FormGroup, FormBuilder,  FormArray  } from '@angular/forms';
import {ActionService} from '../action.service';
import {Action} from '../models/action';



@Component({
  selector: 'app-action-details',
  templateUrl: './action-details.component.html',
  styleUrls: ['./action-details.component.css']
})
export class ActionDetailsComponent implements OnInit, OnChanges {

  @Input() action: Action;

  actionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private actionService: ActionService
  ) { }

  ngOnInit() {
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
      localization: this.action.localization
    });
  }

  onSubmitForm() {
    const formValue = this.actionForm.value;
    this.action.name = formValue['name'];
    this.action.content = formValue['content'];
    this.action.valuable = formValue['valuable'];
    this.action.localization = formValue['localization'];
    console.log(formValue);
    this.actionService.update(this.action);
  }
}
