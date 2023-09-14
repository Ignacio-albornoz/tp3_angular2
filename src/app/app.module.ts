import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';


import { AppComponent } from './app.component';
import { ConceptoComponent } from './components/concepto/concepto.component';



@NgModule({
  declarations: [
    AppComponent,
    ConceptoComponent,
    
  ],
  imports: [
    BrowserModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
