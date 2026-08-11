import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {

  private fb = inject(FormBuilder);

  public signupForm: FormGroup;

  public showPassword = false;
  public showConfirmPassword = false;

  constructor() {
    this.signupForm = this.fb.group(
      {
        email: [
          '',
          [
            Validators.required,
            Validators.email
          ]
        ],

        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(15),
            Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>_\-\\[\]/~`+=;']).*$/)
          ]
        ]
      },
      {
        validators: this.passwordMatchValidator
      }
    );
  }

  passwordMatchValidator(form: FormGroup) {

    const password = form.get('password')?.value;
    const password2 = form.get('password2')?.value;

    if (!password2) {
      return null;
    }

    return password === password2
      ? null
      : { passwordMismatch: true };
  }

  get passwordValue(): string {
    return this.signupForm.get('password')?.value || '';
  }

  get confirmPasswordValue(): string {
    return this.signupForm.get('password2')?.value || '';
  }

  get hasMinLength(): boolean {
    return this.passwordValue.length >= 8;
  }

  get hasMaxLength(): boolean {
    return this.passwordValue.length <= 15 &&
           this.passwordValue.length > 0;
  }

  get hasNumber(): boolean {
    return /\d/.test(this.passwordValue);
  }

  get hasSpecialCharacter(): boolean {
    return /[!@#$%^&*(),.?":{}|<>_\-\\[\]/~`+=;']/.test(
      this.passwordValue
    );
  }

  get hasAlphabet(): boolean {
  const password = this.signupForm.get('password')?.value ?? '';
  return /[A-Za-z]/.test(password);
}

  onSubmit(): void {

    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }

    console.log('Signup Data:', this.signupForm.value);

    // API call later
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}