import { Component } from '@angular/core';
import { ConceptoModel } from '../../models/concepto.model'
import {MatTableModule} from '@angular/material/table';



@Component({
  selector: 'app-concepto',
  templateUrl: './concepto.component.html',
  styleUrls: ['./concepto.component.css'],
})


export class ConceptoComponent {
  
  concepto: ConceptoModel[] = [
    
    {
      id: 1,
      nombre: "Turno Normal",
      laborable: true,
      hsMinimo: 6,
      hsMaximo: 8
    },
    {
      id: 2,
      nombre: "Turno Extra",
      laborable: true,
      hsMinimo: 2,
      hsMaximo: 6
    },
    {
      id: 3,
      nombre: "Dia Libre",
      laborable: false,
      hsMinimo: 0,
      hsMaximo: 0
    }
  ];

  displayedColumns: string[] = ['id', 'nombre', 'laborable', 'hsMinimo', 'hsMaximo'];
  dataSource = this.concepto;

}
