import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { ActionDetailsListComponent } from './actions/action-details-list/action-details-list.component';
import { ActionDetailsComponent } from './actions/action-details/action-details.component';
import { ActionsListComponent } from './actions/actions-list/actions-list.component';
import { CreateActionComponent } from './actions/create-action/create-action.component';
import {ActionService} from './actions/action.service';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LocationComponent } from './tags/location/location.component';
import { SelectComponent } from './tags/select/select.component';


@NgModule({
  declarations: [
    AppComponent,
    ActionDetailsListComponent,
    ActionDetailsComponent,
    ActionsListComponent,
    CreateActionComponent,
    LocationComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ActionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
