import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionDetailsListComponent } from './action-details-list.component';

describe('ActionDetailsListComponent', () => {
  let component: ActionDetailsListComponent;
  let fixture: ComponentFixture<ActionDetailsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionDetailsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
