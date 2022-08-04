import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {
  formularioContacto!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.formularioContacto = fb.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      pais:  new FormControl('', [Validators.required]),
      mensaje: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }



  enviarContacto(){
    console.log(this.formularioContacto);
  }

}
