import { Component, OnInit } from '@angular/core';
import { ConceptoModel } from '../../models/concepto.model'
import {MatTableModule} from '@angular/material/table';
import { ConceptoService } from 'src/app/services/concepto/concepto.service';



@Component({
  selector: 'app-concepto',
  templateUrl: './concepto.component.html',
  styleUrls: ['./concepto.component.css'],

})


export class ConceptoComponent implements OnInit {

  
  
  
  concepto: ConceptoModel[] = [];

  nombreColumnas: string[] = ['id', 'nombre', 'laborable', 'hsMinimo', 'hsMaximo'];
  dataSource = this.concepto;
  
  constructor(
    private conceptoService: ConceptoService
  ){}

  ngOnInit(): void {
    this.conceptoService
    .getAllConceptos()
    .subscribe(data => 
      {
        this.dataSource = data 
      }
    )
  }

}
