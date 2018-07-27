import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,  FormArray  } from '@angular/forms';
import {Action} from '../models/action';
import {ActionService} from '../action.service';

@Component({
  selector: 'app-create-action',
  templateUrl: './create-action.component.html',
  styleUrls: ['./create-action.component.css']
})
export class CreateActionComponent implements OnInit {

  actionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private actionService: ActionService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.actionForm = this.formBuilder.group({
      name: '',
      content: '',
      valuable: '',
      localization: ''
    });
  }

  onSubmitForm() {
    const formValue = this.actionForm.value;
    const newAction = new Action;
    newAction.name = formValue['name'];
    newAction.content = formValue['content'];
    newAction.valuable = formValue['valuable'];
    newAction.localization = formValue['localization'];
    this.actionService.add(newAction);
  }

}


