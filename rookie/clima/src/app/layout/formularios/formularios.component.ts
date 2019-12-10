import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { stringify } from 'querystring';

@Component({
  selector: 'cl-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
  formulario;
  constructor(private fb:FormBuilder) {
    this.formulario=this.fb.group({
      dni:[0,[]],
      name:[]
    });

  }
  enviar(){
    console.log(this.formulario.dni);
  }

  ngOnInit() {
  }

}
