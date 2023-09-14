import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
