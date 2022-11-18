import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  months: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  years: Array<number> = [2022, 2023, 2024, 2025, 2026];

  createForm: FormGroup = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required],
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    cpf: new FormControl('', {
      validators: [Validators.required],
    }),
    address: new FormControl('', {
      validators: [Validators.required],
    }),
    state: new FormControl('', {
      validators: [Validators.required],
    }),
    cep: new FormControl('', {
      validators: [Validators.required],
    }),
    city: new FormControl('', {
      validators: [Validators.required],
    }),
    payment_type: new FormControl('credit_card', {
      validators: [Validators.required],
    }),
    card_name: new FormControl('', {
      validators: [Validators.required],
    }),
    card_month: new FormControl('', {
      validators: [Validators.required],
    }),
    card_year: new FormControl('', {
      validators: [Validators.required],
    }),
    card_number: new FormControl('', {
      validators: [Validators.required],
    }),
    card_ccv: new FormControl('', {
      validators: [Validators.required],
    }),
    created_at: new FormControl(new Date(), {
      validators: [Validators.required],
    }),
  });

  constructor(private userService: UsersService, private route: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.createForm.valid) {
      return alert('Você deve preencher todos os campos');
    }

    try {
      this.userService.createUser(this.createForm.value);
      alert('Cadastro realizado com sucesso.');
      this.route.navigateByUrl('/user/list');
    } catch (e) {
      console.log(e);
    }
  }
}
