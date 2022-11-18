import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  createForm: FormGroup = new FormGroup({
    name: new FormControl(null, {
      validators: [Validators.required],
    }),
    email: new FormControl(null, {
      validators: [Validators.required, Validators.email],
    }),
    cpf: new FormControl(null, {
      validators: [Validators.required],
    }),
    address: new FormControl(null, {
      validators: [Validators.required],
    }),
    state: new FormControl('', {
      validators: [Validators.required],
    }),
    cep: new FormControl(null, {
      validators: [Validators.required],
    }),
    city: new FormControl('', {
      validators: [Validators.required],
    }),
  });

  constructor() {}

  ngOnInit(): void {}
}
