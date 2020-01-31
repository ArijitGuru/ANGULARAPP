import { DatatypeComponent } from './sandbox/datatypes.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SandboxComponent } from './sandbox/sandbox1.component';
import { ObjectnInterfaceComponent } from './sandbox/ObjectnInterface.component';
import { templateExampleComponent } from './sandbox/sandbox/templateExample.component';
import { loopExampleComponent } from './sandbox/loop/loopExample.component';
import { conditionalEcampleComponent } from './sandbox/conditionals/conditionalExample.component';
import { PropertyBindingExample } from './sandbox/propertybinding/propertyBindingExample.component';
import { ClassBindingExampleComponent } from './sandbox/classbinding/classBindingExample.component';
import { CSSStyleBindingExampleComponent } from './sandbox/cssstylebinding/cssStyleBindingExample.component';
import { pipesExampleComponent } from './sandbox/pipes/pipes.component';
import { MouseEventsComponent } from './sandbox/mouseevents/mouseevents.component';
import { MouseEventsPropChangeComponent } from './sandbox/mouseevent2/mouseevent2.component';
import { KeyBoardEventsComponent } from './sandbox/keyboardevents/keyboardevents.component';
import { NgModelExampleComponent } from './sandbox/ngmodel/ngmodelexample.component';

import {FormsModule} from '@angular/forms';
import { NgModelFormSubmitExampleComponent } from './sandbox/ngmodel/ngmodelformsubmit.component';
import { TemplateDrivenFormComponent } from './sandbox/ngmodel/templatedrivenforms.component';

import {DataService} from './sandbox/services/data.services' 
import { ServiceTestingComponent } from './sandbox/servicetesting/dataservice.component';
import { ObservableExampleService } from './sandbox/services/observableexample.services';
import { ObservableExampleComponent } from './sandbox/observableexample/observableExample.component';
import { HttpGetExampleComponent } from './sandbox/http/httpget.component';
import { HttpGetService } from './sandbox/services/httpget.services';
import { HttpPostService } from './sandbox/services/httppost.services';
import { HttppostComponent } from './sandbox/http/httppost.component';


@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    DatatypeComponent,
    ObjectnInterfaceComponent,
    templateExampleComponent,
    loopExampleComponent,
    conditionalEcampleComponent,
    PropertyBindingExample,
    ClassBindingExampleComponent,
    CSSStyleBindingExampleComponent,
    pipesExampleComponent,
    MouseEventsComponent,
    MouseEventsPropChangeComponent,
    KeyBoardEventsComponent,
    NgModelExampleComponent,
    NgModelFormSubmitExampleComponent,
    TemplateDrivenFormComponent,
    ServiceTestingComponent,
    ObservableExampleComponent,
    HttpGetExampleComponent,
    HttppostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule //Do not import HttpClient as it wont work since Angular 6
    
  ],
  providers: [DataService, ObservableExampleService, HttpGetService, HttpPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
